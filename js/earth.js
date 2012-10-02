function Earth( options, sides ) {
	var that = this,
		DEBUG = true,
		isInit = false,
		isPrelader = false,
		curStage = 0,
		defaultOptions = {};

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
		$(".earth").fadeOut(500, function() {
			asyncLoadImage(stageData.img, function() {
				$(".earth")
					.css("background", "url(" + stageData.img + ")")
					.fadeIn(500);
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
		$(".controls .right").click(function() {
			if(isPrelader) return;
			curStage = (curStage + 1 < sides.length) ? curStage + 1 : 0; 
			that.rotate(curStage)
		});
		$(".controls .left").click(function() {
			if(isPrelader) return;
			curStage = (curStage - 1 >= 0) ? curStage - 1 : sides.length - 1; 
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
			$("#stage_" + curStage).fadeIn(1000);
			return;
		}
		// log("adding new stage");
		var html = '<div class="stage" id="stage_' + curStage + '">';
		for(i in bases) {
			html += '<div class="base" data-id="' + i + '" style="top:' + bases[i].y + 'px; left:' + bases[i].x + 'px;"></div>';
		}
		html += '</div>';
		$(".earth").append(html);

		$("#stage_" + curStage).fadeIn(1000, function() {
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
		"img" : "slides/slide0.png", 
		"bases" : [
			{"x" : 310, "y" : 410, 'info': '1234'},
			{"x" : 510, "y" : 245, 'info': '4321'},
			{"x" : 60, "y" : 30, 'info': 'qwer'},
			{"x" : 75, "y" : 100, 'info': 'asdfds'},
		]
	},
	{
		"img" : "http://newevolutiondesigns.com/images/freebies/hd-wallpaper-6.jpg", 
		//"img" : "slides/slide1.png", 
		"bases" : [
			{"x" : 30, "y" : 40, 'info': 'xcvxcvbcv'},
			{"x" : 55, "y" : 85, 'info': 'nvbvnfg'},
			{"x" : 90, "y" : 10, 'info': '12xzcvzxcvczx34'},
			{"x" : 100, "y" : 150, 'info': 'nbvmghmh'},
		]
	},
	{
		"img" : "slides/slide2.png", 
		"bases" : [
			{"x" : 30, "y" : 40, 'info': 'ncgnhgn'},
			{"x" : 300, "y" : 450, 'info': 'zdfgvdzfvdv'},
			{"x" : 320, "y" : 300, 'info': 'nxfn'},
			{"x" : 217, "y" : 109, 'info': 'dfgszd gdg fthf '},
		]
	},
	{
		"img" : "slides/slide3.png", 
		"bases" : [
			{"x" : 300, "y" : 400, 'info': 'dzxg dgxdgx er'},
			{"x" : 150, "y" : 145, 'info': 'cfgbtrtrgdg'},
			{"x" : 260, "y" : 340, 'info': 'gzrgtrhdjdty'},
			{"x" : 375, "y" : 120, 'info': 'zgzehtyjyuhkluiluirxdgrdfyj'},
		]
	}
];

var earth = new Earth( {}, stages );
earth.init();