/**
 *	Copyright © 1996-2016 Maxim Shklyar, kisla interactive, kisla.com, maxim@kisla.com 
 *	All rights reserved.
**/

(function () {

	var self;

	function simple(s) {

		self = s

		self.stop()
		self.app_main.visible = false
		self.btn_start.addEventListener('click', start_app)
		
	}

// ----	--------------------------------------------	--------------------------------------------	

	function start_app(e) {
		self.btn_start.visible = false;
		
		// app_main.set_num(3);
		app_main.set_num(rand_to_fro(5, 1));

		self.app_main.visible = true;
	}

// ----	--------------------------------------------	--------------------------------------------	

	window.simple = simple


})()

