(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	webfonts: {},
	manifest: []
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.nummv = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AjEGSIAAhbICuAAIAAoyQgOANgUAOQgUANgYANQgYANgaAMQgaAMgZAHIghhQQBCgaA+goQA/goAzg9IBLAAIAALIICYAAIAABbg");
	this.shape.setTransform(75.9,69.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AjqGbQgBgHAAgHIAAgOQAAg2ASgvQATguAcgqQAdgqAjglIBHhIIA1g2QAbgcATgbQAVgbANgdQAMgegBgfQAAgjgKgYQgLgZgTgRQgTgPgYgJQgZgHgbAAQghAAgdAJQgbAJgWANQgVANgQAMQgQANgHAHIg1hLQAKgLAUgSQAWgRAcgOQAdgQAlgKQAkgKAqAAQB8AAA9A6QA8A6AABsQAAApgQAnQgRAngaAmQgbAjgiAlQghAkgkAjQgTAUgYAbQgZAcgYAcQgXAdgQAbQgQAbAAAUIFwAAIAABbg");
	this.shape_1.setTransform(75.2,68.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AhtGeQgggEgbgHQgbgHgWgHQgWgIgIgEIAVhcQAUALAuAOQAtAOBCAAQBlAAAsgoQArgqAAhEQAAgtgSgeQgSgdgegTQgegSgngIQglgHgrAAIgbAAIAAhVIAmAAQAcAAAfgHQAcgFAagPQAZgPAPgaQAQgaAAgoQAAhDgpgcQgpgcg0AAQg4AAgoARQgmAQgaARIgqhSQAbgUA3gVQA4gVBDAAQA+AAAuAPQAtAQAeAcQAdAdAOAmQAOAnAAAtQAABAghAsQghAsg0AYQA+ASAuAyQAtA1AABXQAAA0gRAtQgSAtgjAgQgkAhg5ASQg4AShMAAQgeAAgggFg");
	this.shape_2.setTransform(75.1,69.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("ABQGSIAAjNIlmAAIAAhJQAWg0AnhEQAmhCAwhHQAwhJA3hFQA0hGA4g4IBoAAIAAH9IBfAAIAABZIhfAAIAADNgAAJi+QgiAughAxQgiAygdAzQgeAzgXAzID+AAIAAl+QgjAmgkAug");
	this.shape_3.setTransform(75.1,69.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AhrGVQgfgEgbgGQgbgHgVgGQgVgIgJgGIAVhcQAVALArAPQAsANBCAAQAyABAjgMQAjgMAWgTQAVgVALgaQAJgaAAgdQAAgsgPgiQgPgiglgYQgmgYg+gLQhAgMhiABQAJg5AEgzQAFgyADgwIAFhdIAFhjIGBAAIAABbIkjAAIgEAvIgFA+IgFA/IgEAvQCsAHBPBHQBQBDAAB3QAAA1gRAuQgQAtgkAgQglAhg3ASQg3AThJgBQgfABgfgGg");
	this.shape_4.setTransform(75.5,70.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,150,134);


(lib.btnstart = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgHDQQgWgJgOgRQgMgQgGgZQgEgZAAghIAAiVIhFAAIAAgwIBFAAIAAhcIA5gJIAABlICIAAIAAAwIiIAAIAACVQAAAYAEAQQADAPAGAKQAIAJANAEQAMADATAAQAZAAAPgEQAPgEAOgHIAJAxQgKAEgVAHQgWAHgfAAQglAAgVgIg");
	this.shape.setTransform(263.6,39.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AhyCmIAAkyQBHgZBHABQAWAAAVABQAUACAYAGIgKAzQgWgGgSgCQgRgCgUAAQgpAAgsAMIAAEMg");
	this.shape_1.setTransform(229.7,43.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgpClQgZgFgUgLQgUgMgMgUQgLgUgBggQAAgcANgTQAMgSAUgLQASgMAagFQAZgGAWAAQAjAAAhAIIAAgQQAAgPgDgNQgEgOgJgLQgIgMgPgGQgPgHgWAAQgeAAgXAFQgWAEgLAEIgIgwQAMgFAcgFQAcgEAdAAQAkAAAZAJQAZAJAPARQAQAQAGAXQAGAXAAAbIAADJIg1AIQgiAGgiAAQgZAAgZgFgAgQAOQgPACgMAGQgMAHgIAKQgIAKABAPQgBAgAVAMQAWAMAiAAIAogBIAcgDIAAhhQgLgEgQgCQgQgCgSAAQgOAAgPADg");
	this.shape_2.setTransform(192.8,43.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgGDQQgXgJgNgRQgOgQgEgZQgFgZAAghIAAiVIhFAAIAAgwIBFAAIAAhcIA5gJIAABlICIAAIAAAwIiIAAIAACVQAAAYADAQQAEAPAGAKQAIAJANAEQANADARAAQAaAAAPgEQAQgEAOgHIAIAxQgKAEgWAHQgUAHggAAQglAAgUgIg");
	this.shape_3.setTransform(158.6,39.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AhKCkQgcgGgagLIAMg1QAZAMAaAHQAbAHAfAAQBOAAAAgoQAAgRgPgLQgPgLgVgJIgsgQQgZgIgWgKQgVgMgOgRQgPgSAAgcQAAgnAggaQAggbBCAAQAaAAAdAEQAcAEAUAGIgLA0IgPgGQgJgDgNgCIgbgEIgbgCQhLAAAAApQAAAPAPAKQAOALAWAIIAtARQAZAJAWAKQAWANAOASQAOASAAAbQAAAsgiAYQgiAZhJAAQghAAgcgGg");
	this.shape_4.setTransform(123.1,43.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},3).wait(1));

	// Layer 2
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#999999").ss(1,1,1).p("A+TnAMA8nAAAIAAOBMg8nAAAg");
	this.shape_5.setTransform(193,45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#9966CC").s().p("A+SHBIAAuBMA8mAAAIAAOBg");
	this.shape_6.setTransform(193,45);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("A+SHBIAAuBMA8mAAAIAAOBg");
	this.shape_7.setTransform(193,45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.shape_7},{t:this.shape_5}]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(103.5,0,179.2,74);


(lib.btnpress = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgxCdQgggNgVgXQgVgWgKgfQgLggAAgkQAAgpAOggQANghAVgVQAWgVAcgKQAbgLAaAAQBCAAAkApQAkApAABUIAAASIjnAAQAEAyAeAaQAdAbA0AAQAfAAAWgFQAVgFAMgGIAHAxQgKAGgbAGQgcAHgiAAQgoAAgggNgAgchwQgQAIgMAMQgMANgHAQQgHAQgCARICqAAQAAgpgWgZQgVgYgkAAQgSAAgRAIg");
	this.shape.setTransform(315.4,43.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("ABfCmIAAjnQAAgZgLgNQgLgNgRgBQgJAAgIAFQgKADgHAKQAEAQAAATIAABoIgyAAIAAhoQAAgZgIgOQgIgOgWAAQgOAAgRAHIAAEUIg2AAIAAk6QArgRAlABQAUAAASAGQARAGAMAMQAegZAiABQARAAAPAGQAPAHALAMQALANAIASQAGATABAZIAADmg");
	this.shape_1.setTransform(280.8,43.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AhKCkQgcgGgZgLIALg1QAYAMAbAHQAbAHAfAAQBNAAABgoQAAgRgPgLQgPgLgVgJIgtgQQgZgIgVgKQgVgMgOgRQgPgSAAgcQAAgnAggaQAggbBCAAQAaAAAcAEQAdAEAVAGIgMA0IgOgGQgKgDgNgCIgbgEIgcgCQhKAAABApQAAAPAOAKQAOALAWAIIAtARQAZAJAWAKQAWANAOASQAOASAAAbQABAsgjAYQgjAZhIAAQghAAgcgGg");
	this.shape_2.setTransform(210.6,43.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AhKCkQgcgGgZgLIALg1QAYAMAbAHQAbAHAfAAQBOAAgBgoQAAgRgOgLQgPgLgVgJIgtgQQgZgIgVgKQgVgMgPgRQgOgSAAgcQAAgnAggaQAfgbBCAAQAbAAAcAEQAdAEAVAGIgMA0IgOgGQgKgDgNgCIgbgEIgcgCQhJAAAAApQAAAPAOAKQAOALAWAIIAtARQAZAJAWAKQAWANAOASQAOASAAAbQABAsgjAYQgiAZhIAAQgiAAgcgGg");
	this.shape_3.setTransform(175.6,43.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgxCdQgggNgVgXQgVgWgKgfQgLggAAgkQAAgpAOggQANghAVgVQAWgVAcgKQAbgLAaAAQBCAAAkApQAkApAABUIAAASIjnAAQAEAyAeAaQAdAbA0AAQAfAAAWgFQAVgFAMgGIAHAxQgKAGgbAGQgcAHgiAAQgoAAgggNgAgchwQgQAIgMAMQgMANgHAQQgHAQgCARICqAAQAAgpgWgZQgVgYgkAAQgSAAgRAIg");
	this.shape_4.setTransform(140.4,43.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AhyCmIAAkyQBHgZBHABQAWAAAVABQAUACAYAGIgKAzQgWgGgSgCQgRgCgUAAQgpAAgsAMIAAEMg");
	this.shape_5.setTransform(107.2,43.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AiHDfIAAmsQATgGAegFQAegGAmAAQAhAAAdAMQAdAMAUAWQAVAWAKAfQAMAgAAAnQAAAlgKAdQgJAggSAWQgSAWgaANQgaANgeAAQgaAAgUgHQgUgGgKgIIAACAgAg3ipQgOACgIADIAADLQAKAJATAIQATAIAUAAQAWAAAQgKQAQgIALgQQAKgQAFgTQAFgWAAgZQAAg5gagfQgbgfgpAAQgXAAgOACg");
	this.shape_6.setTransform(71.7,49.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},3).wait(1));

	// Layer 2
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#999999").ss(1,1,1).p("A+TnAMA8nAAAIAAOBMg8nAAAg");
	this.shape_7.setTransform(193,45);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#9966CC").s().p("A+SHBIAAuBMA8mAAAIAAOBg");
	this.shape_8.setTransform(193,45);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("A+SHBIAAuBMA8mAAAIAAOBg");
	this.shape_9.setTransform(193,45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_8},{t:this.shape_7}]},1).to({state:[{t:this.shape_9},{t:this.shape_7}]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(51,0,284.2,74);


(lib.appmain = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.btn = new lib.btnpress();
	this.btn.setTransform(70.9,201);
	new cjs.ButtonHelper(this.btn, 0, 1, 2, false, new lib.btnpress(), 3);

	this.mv = new lib.nummv();
	this.mv.setTransform(75,67,1,1,0,0,0,75,67);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mv},{t:this.btn}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,458.9,292);


// stage content:
(lib.simple_canv = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn_start
	this.btn_start = new lib.btnstart();
	this.btn_start.setTransform(76.9,152);
	new cjs.ButtonHelper(this.btn_start, 0, 1, 2, false, new lib.btnstart(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_start).wait(1));

	// app_main
	this.app_main = new lib.appmain();
	this.app_main.setTransform(283.2,197.7,1,1,0,0,0,229.2,145.7);

	this.timeline.addTween(cjs.Tween.get(this.app_main).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(329,252,410.9,275);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;