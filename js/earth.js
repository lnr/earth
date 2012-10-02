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
		asyncLoadImage(stageData.img, function() {
			$(".earth").css("background", "url(" + stageData.img + ")");
			log("stop preloader");
			drawBases(stageData.bases);
		});
	}

	this.getStageData = function(stage) {
		return sides[stage];
	}


	/*--- private methods ---*/
	var addListeners = function() {
		$(".controls .right").click(function() { 
			curStage = (curStage + 1 < sides.length) ? curStage + 1 : 0; 
			that.rotate(curStage)
		});
		$(".controls .left").click(function() { 
			curStage = (curStage - 1 >= 0) ? curStage - 1 : sides.length - 1; 
			that.rotate(curStage)
		});
	}

	var asyncLoadImage = function(url, callback) {
		$('<img/>').load(function(){
			callback();
		}).attr('src', url);
	}

	var drawBases = function(bases) {
		var html = '';
		for(i in bases) {
			html += '<div class="base" style="top:' + bases[i].y + 'px; left:' + bases[i].x + 'px;"></div>';
		}
		$(".earth").html(html);
		$(".base").fadeIn(1000);
	}

	/*--servise--*/
	var log = function(q) {
		if(!DEBUG) return;
		console.log(q);
	}
}


var stages = [
	{
		"img" : "http://newevolutiondesigns.com/images/freebies/hd-wallpaper-6.jpg", 
		// "img" : "slides/slide0.png", 
		"bases" : [
			{"x" : 310, "y" : 410},
			{"x" : 510, "y" : 245},
			{"x" : 60, "y" : 30},
			{"x" : 75, "y" : 100},
		]
	},
	{
		"img" : "slides/slide1.png", 
		"bases" : [
			{"x" : 30, "y" : 40},
			{"x" : 55, "y" : 85},
			{"x" : 90, "y" : 10},
			{"x" : 100, "y" : 150},
		]
	},
	{
		"img" : "slides/slide2.png", 
		"bases" : [
			{"x" : 30, "y" : 40},
			{"x" : 300, "y" : 450},
			{"x" : 320, "y" : 300},
			{"x" : 217, "y" : 109},
		]
	},
	{
		"img" : "slides/slide3.png", 
		"bases" : [
			{"x" : 300, "y" : 400},
			{"x" : 150, "y" : 145},
			{"x" : 260, "y" : 340},
			{"x" : 375, "y" : 120},
		]
	}
];

var earth = new Earth( {}, stages );
earth.init();