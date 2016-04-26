/**
 *	Copyright © 1996-2016 Maxim Shklyar, kisla interactive, kisla.com, maxim@kisla.com 
 *	All rights reserved.
**/

package 
{

	import flash.display.Stage;
	import flash.display.MovieClip;
	import flash.events.MouseEvent;

	import kisla.comm.objs;

	public class simple extends MovieClip
	{

		public function simple()
		{
			this.stop();

			this.app_main.visible = false;

			this.btn_start.addEventListener(MouseEvent.CLICK, start_app);
		}

// ----	--------------------------------------------	--------------------------------------------	
// ----	--------------------------------------------	--------------------------------------------	

		function start_app(e) {
			this.btn_start.visible = false;
			
			this.app_main.set_num(kisla.comm.objs.rand_to_fro(5, 1));

			this.app_main.visible = true;
		}

// ----	--------------------------------------------	--------------------------------------------	

	}

}

