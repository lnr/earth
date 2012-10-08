function Earth( options, sides ) {
	var that = this,
		DEBUG = true,
		isInit = false,
		isPrelader = false,
		curStage = 0,
		defaultOptions = {
			'actionSpeed' : 300
		};

	/*--- make options ---*/
	for(var option in defaultOptions) {
		this[option] = options && options[option] !== undefined ? options[option] : defaultOptions[option];
	}

	/*--- public methods ---*/
	this.init = function() {
		try {
			if(!isInit) {
				addListeners();
				that.rotate(curStage);
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

	this.rotate = function(stage) {
		var stageData = that.getStageData(stage);
		log("start preloader");
		isPrelader = true;
		$(".stage").fadeOut(that.actionSpeed);
		
		asyncLoadImage(stageData.img, function() {
			$(".earth").animate( {opacity : 0}, that.actionSpeed, function() {
				$(this)
					.css("background", "url(" + stageData.img + ")")
					.animate({opacity : 1}, that.actionSpeed);
				log("stop preloader");
				isPrelader = false
				drawStage(stageData.bases);
			});
		});
	}

	this.getStageData = function(stage) {
		return sides[stage];
	}


	/*--- private methods ---*/
	var addListeners = function() {
		$("#earth-container .controls div").click(function() {
			if(isPrelader) return;
			if($(this).hasClass('left')){
				curStage = (curStage + 1 < sides.length) ? curStage + 1 : 0; 
			} else {
				curStage = (curStage - 1 >= 0) ? curStage - 1 : sides.length - 1; 
			}
			that.rotate(curStage)
		});
	}

	var asyncLoadImage = function(url, callback) {
		$('<img/>').load(function(){
			callback();
		}).attr('src', url);
	}

	var drawStage = function(bases) {
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
		html += '<div class="arctic"></div>';

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
	var log = function(q) {
		if(!DEBUG) return;
		console.log(q);
	}
}


var stages = [
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
];

var earth = new Earth( {'actionSpeed' : 350}, stages );
earth.init();