/**
 *	Copyright © 1996-2016 Maxim Shklyar, kisla interactive, kisla.com, maxim@kisla.com 
 *	All rights reserved.
**/

(function () {

	var self;
	var i = 0;

	function app_main(s) {

		self = s

		self.stop();
		self.mv.stop();

		self.btn.addEventListener('click', clicked);
	}

// ----	--------------------------------------------	--------------------------------------------	

	app_main.set_num = function (ni) {
		i = ni;
		self.mv.gotoAndStop(i);
	}

// ----	--------------------------------------------	--------------------------------------------	

	function clicked(e) {
		self.mv.gotoAndStop(i%5+1);
		i++;
	}

// ----	--------------------------------------------	--------------------------------------------	


	window.app_main = app_main


})()
