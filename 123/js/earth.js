function Earth( params, sides ) {
	var that = this,
		DEBUG = true,
		isInit = false,
		isPrelader = false,
		curDegree = 90,
		curStage = 0,
		options = {
			'actionSpeed' : 300
		};

	/*--- public methods ---*/
	this.init = function() {
		try {
			if(!isInit) {
				options = extend(options, params);
				addListeners();
				that.rotate(curDegree, curStage);
				isInit = true;

				$("#earth-container").offset({'top': ($(window).height() - $("#earth-container").height())/2});
				$(window).resize(function(){
					$("#earth-container").offset({'top': ($(window).height() - $("#earth-container").height())/2});
				});

			} else {
				log("earth already inited");
			}
		} catch (e) {
			log("init error "+ e);
		}
	}

	this.rotate = function(degree, stage) {
		degree = degree || curDegree;
		stage = stage || curStage;
		log(degree + ' ' + stage);
		//log("start preloader");
		//if (degree == curDegree && stage == curStage) return;

		var stageData = that.getStageData(degree, stage);
		
		isPrelader = true;
		$(".stage").fadeOut(that.actionSpeed);
		asyncLoadImage(stageData.img, function() {
			$(".earth").animate( {opacity : 0}, that.actionSpeed, function() {
				$(this)
					.css("background", "url(" + stageData.img + ")")
					.animate({opacity : 1}, that.actionSpeed);
				//log("stop preloader");
				isPrelader = false
				drawStage(stageData.bases);
			});
		});
	}

	this.getStageData = function(degree, stage) {
		return sides[degree][stage];
	}


	/*--- private methods ---*/
	var addListeners = function() {
		$("#earth-container .controls div").click(function() {
			if(isPrelader) return;
			var direction = $(this).attr('class');
			log(direction);
			switch (direction) {
				case 'left': 
					curStage = (curStage - 1 >= 0) ? curStage - 1 : sides[curDegree].length - 1; 
					break;
				case 'right':
					curStage = (curStage + 1 < sides[curDegree].length) ? curStage + 1 : 0; 
					break;
				case 'up':
					curDegree = (curDegree + 90 <= 180) ? curDegree + 90 : curDegree;
					break;
				case 'down':
					curDegree = (curDegree - 90 >= 0) ? curDegree - 90 : curDegree;
					break;
			}
			that.rotate(curDegree, curStage)
		});
	}

	var asyncLoadImage = function(url, callback) {
		$('<img/>').load(function(){
			callback();
		}).attr('src', url);
	}

	var drawStage = function(bases) {
		bases = bases || {};
		$(".stage").hide();
		if ($('div').is('#stage_' + curStage)) {
			$("#stage_" + curStage).fadeIn( that.actionSpeed * 2 );
			return;
		}
		// log("adding new stage");
		var html = '<div class="stage" id="stage_' + curStage + '">';
		for(i in bases) {
			html += '<div class="base ' + bases[i].type + '" data-id="' + i + '" style="top:' + bases[i].y + 'px; left:' + bases[i].x + 'px;"></div>';
		}
		//materik
		//html += '<div class="arctic"></div>';

		html += '</div>';
		$(".earth").append(html);

		$("#stage_" + curStage).fadeIn( that.actionSpeed * 2 , function() {
			$("#stage_" + curStage + " .base").click(function() {
				if(isPrelader) return;
				log(bases[$(this).data('id')].info);
			});
		});
	}

	/*--servise--*/
	var extend = function(to, from) {
		for (var key in from)
			if (from.hasOwnProperty(key))
				to[key] = from[key];
		return to;
	};

	var log = function(q) {
		if(!DEBUG) return;
		console.log(q);
	}
}


var stages = {
	"0" : [
		{
			"img" : "slides/southern_hemisphere_down.png", 
		},
		{
			"img" : "slides/southern_hemisphere_down.png", 
		},
		{
			"img" : "slides/southern_hemisphere_down.png", 
		},
		{
			"img" : "slides/southern_hemisphere_down.png", 
		}
	],
	"90" : [
		{
			"img" : "slides/southern_hemisphere_down.png", 
			"bases" : [
				{"type" : "dumb", "x" : 310, "y" : 410, 'info': '1234'},
				{"type" : "tonnel", "x" : 510, "y" : 245, 'info': '4321'},
				{"type" : "dumb", "x" : 280, "y" : 230, 'info': 'qwer'},
				{"type" : "dumb", "x" : 75, "y" : 100, 'info': 'asdfds'},
			]
		},
		{
			"img" : "slides/southern_hemisphere_down.png", 
			"bases" : [
				{"type" : "tonnel", "x" : 300, "y" : 400, 'info': 'xcvxcvbcv'},
				{"type" : "dumb", "x" : 255, "y" : 285, 'info': 'nvbvnfg'},
				{"type" : "tonnel", "x" : 90, "y" : 280, 'info': '12xzcvzxcvczx34'},
				{"type" : "tonnel", "x" : 100, "y" : 150, 'info': 'nbvmghmh'},
			]
		},
		{
			"img" : "slides/southern_hemisphere_down.png", 
			"bases" : [
				{"type" : "dumb", "x" : 530, "y" : 240, 'info': 'ncgnhgn'},
				{"type" : "tonnel", "x" : 300, "y" : 450, 'info': 'zdfgvdzfvdv'},
				{"type" : "dumb", "x" : 320, "y" : 300, 'info': 'nxfn'},
				{"type" : "tonnel", "x" : 217, "y" : 109, 'info': 'dfgszd gdg fthf '},
			]
		},
		{
			"img" : "slides/southern_hemisphere_down.png", 
			"bases" : [
				{"type" : "dumb", "x" : 300, "y" : 400, 'info': 'dzxg dgxdgx er'},
				{"type" : "tonnel", "x" : 150, "y" : 145, 'info': 'cfgbtrtrgdg'},
				{"type" : "dumb", "x" : 260, "y" : 340, 'info': 'gzrgtrhdjdty'},
				{"type" : "tonnel", "x" : 375, "y" : 120, 'info': 'zgzehtyjyuhkluiluirxdgrdfyj'},
			]
		}
	],
	"180" : [
		{
			"img" : "slides/southern_hemisphere_down.png", 
		},
		{
			"img" : "slides/southern_hemisphere_down.png", 
		},
		{
			"img" : "slides/southern_hemisphere_down.png", 
		},
		{
			"img" : "slides/southern_hemisphere_down.png", 
		}
	]
};

var earth = new Earth( {'actionSpeed' : 350}, stages );
earth.init();