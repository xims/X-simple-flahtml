/**
 *	Copyright © 1996-2011 Maxim Shklyar, kisla interactive, kisla.com, maxim@kisla.com 
 *	All rights reserved.
**/

package kisla.comm
{
	import flash.display.MovieClip;
	import flash.display.SimpleButton;
	import flash.display.DisplayObject;
	import flash.display.DisplayObjectContainer;
	import flash.text.TextField;
	import flash.text.StaticText;

	public class objs
	{
		public static var res_str:String;


// ----	--------------------------------------------	--------------------------------------------	
// ----	--------------------------------------------	--------------------------------------------	
// ----	--------------------------------------------	--------------------------------------------	


		public static function search_objs_by_name(dispObj:*, srch_name:String="", res_arr:Array=null):Array
		//public static function search_objs_by_name(dispObj:*, par_name:String, srch_name:String, res_arr:Array):Array
		{
			res_arr ||= new Array();
			//if (par_name=="")	res_str="";

			//trace("in search_objs_by_name with " + dispObj + " || " + srch_name + "\n");
			//res_str += "in search_objs_by_name with " + par_name + " || " + dispObj + "\n";

			if (dispObj is DisplayObjectContainer)
			{
				for (var i:uint = 0; i < dispObj.numChildren; i++) {
					var obj = dispObj.getChildAt(i);
					if(obj) {
						//trace("cont :: " + obj + "."+obj.name + "  :::" + "\n");
						//res_str += "cont :: " + par_name+"."+obj.name + "  :::" + "\n";
						if (!srch_name || obj.name == srch_name)
							//res_arr.push(par_name+"."+obj.name);
							res_arr.push(obj);
						objs.search_objs_by_name(obj, srch_name, res_arr);
					}
				}
			}

			return res_arr;
		}

// ----	--------------------------------------------	--------------------------------------------	
// ----	--------------------------------------------	--------------------------------------------	


		//public static function search_objs_by_name(dispObj:*, par_name:String="", srch_name:String="", res_arr:Array=[]):Array
		public static function search_tfs_by_str(dispObj:*, par_name:String, srch_txt:String, res_arr:Array):Array
		{
			if (par_name=="")	res_str="";

			res_str += "in search_tfs_by_str with " + par_name + " || " + dispObj + "\n";
			//trace("in search_tfs_by_str with " + par_name + " || " + dispObj);

			if (dispObj is DisplayObjectContainer)
			{
				for (var i:uint = 0; i < dispObj.numChildren; i++) {
					var obj = dispObj.getChildAt(i);
					if(obj) {
						if (obj is TextField){
							res_arr.push(obj);
							trace("TF c :: " + par_name+"."+obj.name + " :: " + obj.text);
						} else if (obj is StaticText){
							trace("StaticText c :: " + par_name+"."+obj.name + " :: " + obj.text);
						} else if (obj is DisplayObjectContainer) {
							res_str += "cont :: " + par_name+"."+obj.name + "  :::" + "\n";
							//if (obj.name == srch_txt)
								//res_arr.push(par_name+"."+obj.name);
								//res_arr.push(obj);
							search_tfs_by_str(obj, par_name+"."+obj.name, srch_txt, res_arr);
						} else {
							res_str += "child :: " + par_name+"."+obj.name + " --- "+obj + "\n";
							search_tfs_by_str(obj, par_name+"."+obj.name, srch_txt, res_arr);
						}
					}
				}
			}

			//trace(res_str);
			return res_arr;
		}

// ----	--------------------------------------------	--------------------------------------------	
// ----	--------------------------------------------	--------------------------------------------	
// ----	--------------------------------------------	--------------------------------------------	


// ----	--------------------------------------------	--------------------------------------------	
// ----	--------------------------------------------	--------------------------------------------	
// ----	--------------------------------------------	--------------------------------------------	


		//public static function search_objs_by_name(dispObj:*, par_name:String="", srch_name:String="", res_arr:Array=[]):Array
		public static function stop_children(dispObj:*):void
		{
			//if (par_name=="")	res_str="";
			//res_str += "in stop_children for " + dispObj.name + " || " + dispObj + "\n";
			//trace("in stop_children for " + dispObj + "\n");

			if (dispObj is DisplayObjectContainer)
			{
				for (var i:uint = 0; i < dispObj.numChildren; i++) {
					var obj = dispObj.getChildAt(i);
					if(obj) {
						if (obj is DisplayObjectContainer) {
							obj.gotoAndStop(1);
						}
						stop_children(obj);
					}
				}
			}

		}


// ----	--------------------------------------------	--------------------------------------------	
// ----	--------------------------------------------	--------------------------------------------	


		//public static function search_objs_by_name(dispObj:*, par_name:String="", srch_name:String="", res_arr:Array=[]):Array
		public static function stop_children_exclstr(dispObj:*, srch_txt:String):void
		{
			//if (par_name=="")	res_str="";
			//res_str += "in stop_children for " + dispObj.name + " || " + dispObj + "\n";
			//trace("in stop_children for " + dispObj.name + " || " + dispObj + "\n");
			//trace("in stop_children_exclstr for " + dispObj + " - " + dispObj.toString() + " - " + (dispObj.name?dispObj.name:'-') + "\n");
			//trace("\n" + "in stop_children_exclstr for " + dispObj + " - " + dispObj.toString());

			if (dispObj is DisplayObjectContainer)
			{
				for (var i:uint = 0; i < dispObj.numChildren; i++) {
					var obj = dispObj.getChildAt(i);
					if(obj) {
						//if (obj is DisplayObjectContainer && obj.toString().indexOf(srch_txt)==-1) {
						//trace("		check - " + obj.toString());
						if (obj.toString().indexOf(srch_txt)==-1) {
							//trace("			stoping " + obj + " - " + obj.toString());
							try {
								obj.gotoAndStop(1);
							} catch(e){
								//trace ("		can't stop " + obj);
							}
						}
						else {
							//trace(" === ===			not stoping " + obj + " - " + obj.toString());
							try {
								//obj.gotoAndStop(1);
							} catch(e){
								//trace ("		can't stop " + obj);
							}
						}
						stop_children_exclstr(obj, srch_txt);
					}
				}
			}

		}



// ----	--------------------------------------------	--------------------------------------------	
// ----	--------------------------------------------	--------------------------------------------	
// ----	--------------------------------------------	--------------------------------------------	


		//public static function search_objs_by_name(dispObj:*, par_name:String="", srch_name:String="", res_arr:Array=[]):Array
		public static function play_children(dispObj:*):void
		{
			//if (par_name=="")	res_str="";
			//res_str += "in play_children for " + dispObj.name + " || " + dispObj + "\n";
			//trace("in play_children for " + dispObj.name + " || " + dispObj + "\n");
			trace("in play_children for " + dispObj + " - " + dispObj.toString() + " - " + (dispObj.name?dispObj.name:'-') + "\n");

			if (dispObj is DisplayObjectContainer)
			{
				for (var i:uint = 0; i < dispObj.numChildren; i++) {
					var obj = dispObj.getChildAt(i);
					if(obj) {
						if (obj is DisplayObjectContainer) {
							obj.gotoAndPlay(1);
						}
						play_children(obj);
					}
				}
			}

		}


// ----	--------------------------------------------	--------------------------------------------	
// ----	--------------------------------------------	--------------------------------------------	


		//public static function search_objs_by_name(dispObj:*, par_name:String="", srch_name:String="", res_arr:Array=[]):Array
		public static function play_children_exclstr(dispObj:*, srch_txt:String):void
		{
			//if (par_name=="")	res_str="";
			//res_str += "in play_children for " + dispObj.name + " || " + dispObj + "\n";
			//trace("in play_children for " + dispObj.name + " || " + dispObj + "\n");
			//trace("in play_children_exclstr for " + dispObj + " - " + dispObj.toString() + " - " + (dispObj.name?dispObj.name:'-') + "\n");
			//trace("\n" + "in play_children_exclstr for " + dispObj + " - " + dispObj.toString());

			if (dispObj is DisplayObjectContainer)
			{
				for (var i:uint = 0; i < dispObj.numChildren; i++) {
					var obj = dispObj.getChildAt(i);
					if(obj) {
						//if (obj is DisplayObjectContainer && obj.toString().indexOf(srch_txt)==-1) {
						//trace("		check - " + obj.toString());
						if (obj.toString().indexOf(srch_txt)==-1) {
							//trace("			playing " + obj + " - " + obj.toString());
							try {
								obj.gotoAndPlay(1);
							} catch(e){
								//trace ("		can't play " + obj);
							}
						}
						else {
							//trace(" === ===			not playing " + obj + " - " + obj.toString());
							try {
								//obj.gotoAndPlay(1);
							} catch(e){
								//trace ("		can't play " + obj);
							}
						}
						play_children_exclstr(obj, srch_txt);
					}
				}
			}

		}


// ----	--------------------------------------------	--------------------------------------------	
// ----	--------------------------------------------	--------------------------------------------	
// ----	--------------------------------------------	--------------------------------------------	


		public static function arrshuffle(a:Array):Array{
			for(var i:Number=0; i<a.length; i++){
				var randomNum = Math.floor(Math.random()*a.length);
				var tmp = a[i];
				a[i] = a[randomNum];
				a[randomNum] = tmp;
			}
			return a;
		}

// ----	--------------------------------------------	--------------------------------------------	--------------------------------------------
// ----	--------------------------------------------	--------------------------------------------	--------------------------------------------

		public static function randomxmllist(list:XMLList, len:Number, times:Number=1):Array{

			var ci:Array = new Array;

			for each (var ti in list)	ci.push(ti);

			return objs.randomarrlist(ci, len, times);
		}

// ----	--------------------------------------------	--------------------------------------------	--------------------------------------------
// ----	--------------------------------------------	--------------------------------------------	--------------------------------------------

		public static function randomarrlist(list:Array, len:Number, times:Number=1):Array{

			var card_ind:Array;
			var ci:Array = new Array;

			//for each (var ti in list)	ci.push(ti);
			//trace (ci);
			ci = objs.arrshuffle(list);
			//trace (ci);
			//trace ("--------");


			card_ind = ci.slice(0, len);

			for (var i:Number=2; i<=times; i++) 
				for (var pi:Number=0; pi<len; pi++) 
					card_ind.push(ci[pi]);

			//trace (card_ind);
			//trace ("++++++++");

//			for (i=0; i<len*times; i++) {
//				card_ind[i] = list[card_ind[i]];
//			}
			//trace (card_ind);
			//trace ("~~~~~~~~");

			card_ind = objs.arrshuffle(card_ind);

			//trace (card_ind);
			//trace ("========");

			return card_ind;
		}

// ----	--------------------------------------------	--------------------------------------------	--------------------------------------------
// ----	--------------------------------------------	--------------------------------------------	--------------------------------------------

		public static function fitTextField(t:TextField, w:Number, ms:Number) {

			t.autoSize = "left";
			t.wordWrap = false;
			//t.autoSize = "center";
			var tf:* = t.getTextFormat();
			tf.size = ms;
			t.setTextFormat(tf);
			while (t.width > w && tf.size) {
				tf.size--;
				t.setTextFormat(tf);
			}   

		}

// ----	--------------------------------------------	--------------------------------------------	--------------------------------------------
// ----	--------------------------------------------	--------------------------------------------	--------------------------------------------

// ----	--------------------------------------------	--------------------------------------------	
// ----	--------------------------------------------	--------------------------------------------	

		public static function rand_to_fro(max:int, min:int=0)
		{
			return Math.round( Math.random() * (max-min) ) + min;
		}

// ----	--------------------------------------------	--------------------------------------------	
// ----	--------------------------------------------	--------------------------------------------	

	}
}