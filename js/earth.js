function Earth( options, sides ) {
	var that = this,
		DEBUG = true,
		isInit = false,
		isVisible = false,
		curStage = 1,
		widgetHtmlId = "siteConsole",
		selector = ' .commandline',
		defaultOptions = {},
		history = [],
		historyMaxSize = 40,
		activeCommandInHistory;

	/*--- make options ---*/
	for(var option in defaultOptions) {
		this[option] = options && options[option] !== undefined ? options[option] : defaultOptions[option];
	}

	$(document).keypress(function(e){
		var keycode = (e.keyCode ? e.keyCode : e.which);
		if(keycode == 96){
			(!isInit) ? that.init() : (isVisible) ? that.hide() : that.show();
		}
	});

	/*--- public methods ---*/
	this.init = function() {
		try {
			if(!isInit) {
				//addListeners();
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
		$(".earth").css("background", "#000");
		drawBases(stageData.bases);
		//log(stageData);
	}

	this.getStageData = function(stage) {
		return sides[stage];
	}


	/*--- private methods ---*/
	var addListeners = function() {
		//that.rotate(curStage);
	}

	var drawBases = function(bases) {
		var html = '';
		for(i in bases) {
			html += '<div class="base" style="top:' + bases[i].y + 'px; left:' + bases[i].x + 'px;"></div>';
		}
		$(".earth").html(html);
	}

	/*--servise--*/
	var log = function(q) {
		if(!DEBUG) return;
		console.log(q);
	}
}


var stages = {
	"0" : {
		"img" : "slide0.png", 
		"bases" : {
			"0" : {"x" : 30, "y" : 40},
			"1" : {"x" : 50, "y" : 45},
			"2" : {"x" : 60, "y" : 30},
			"3" : {"x" : 75, "y" : 100},
		}
	},
	"1" : {
		"img" : "slide1.png", 
		"bases" : {
			"0" : {"x" : 30, "y" : 40},
			"1" : {"x" : 55, "y" : 85},
			"2" : {"x" : 90, "y" : 10},
			"3" : {"x" : 100, "y" : 150},
		}
	},
	"2" : {
		"img" : "slide2.png", 
		"bases" : {
			"0" : {"x" : 30, "y" : 40},
			"1" : {"x" : 50, "y" : 45},
			"2" : {"x" : 60, "y" : 30},
			"3" : {"x" : 75, "y" : 100},
		}
	},
	"3" : {
		"img" : "slide3.png", 
		"bases" : {
			"0" : {"x" : 30, "y" : 40},
			"1" : {"x" : 50, "y" : 45},
			"2" : {"x" : 60, "y" : 30},
			"3" : {"x" : 75, "y" : 100},
		}
	}
};

var earth = new Earth( {}, stages );
earth.init();