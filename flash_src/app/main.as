/**
 *	Copyright © 1996-2016 Maxim Shklyar, kisla interactive, kisla.com, maxim@kisla.com 
 *	All rights reserved.
**/

package app
{

	import flash.display.Stage;
	import flash.display.MovieClip;
	import flash.events.MouseEvent;

	public class main extends MovieClip
	{

		var self = this;
		var i = 1;

		public function main()
		{
			this.stop();
			this.mv.stop();

			this.btn.addEventListener(MouseEvent.CLICK, clicked);
		}

// ----	--------------------------------------------	--------------------------------------------	
// ----	--------------------------------------------	--------------------------------------------	

		public function set_num(ni) {
			i = ni;
			self.mv.gotoAndStop(i);
		}

// ----	--------------------------------------------	--------------------------------------------	

		function clicked(e) {
			self.mv.gotoAndStop(i%5+1);
			i++;
		}

// ----	--------------------------------------------	--------------------------------------------	

	}

}

