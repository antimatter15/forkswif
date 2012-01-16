/*---------------------prototype lite---------------*/
/*
if(!Class){
var Class = {
	create: function() {
		return function() {
			this.initialize.apply(this, arguments);
		}
	}
}
}

if(!Object.extend){
Object.extend = function(destination, source) {
	for (property in source) destination[property] = source[property];
	return destination;
}
}

if(!Function.prototype.bind){
Function.prototype.bind = function(object) {
	var __method = this;
	return function() {
		return __method.apply(object, arguments);
	}
}
}

if(typeof($)=='undefined'){
function $() {
	if (arguments.length == 1) return get$(arguments[0]);
	var elements = [];
	$c(arguments).each(function(el){
		elements.push(get$(el));
	});
	return elements;

	function get$(el){
		if (typeof el == 'string') el = document.getElementById(el);
		return el;
	}
}
}

if (!window.Element) var Element = new Object();

Object.extend(Element, {
	hasClassName: function(element, className) {
		element = $(element);
		if (!element) return;
		var hasClass = false;
		element.className.split(' ').each(function(cn){
			if (cn == className) hasClass = true;
		});
		return hasClass;
	}
});
*/
/*----------------------end of prototype lite---------------------------*/

/*-----------------------moofx--------------------*/
/*
if(!fx){
var fx = new Object();
//base
fx.Base = function(){};
fx.Base.prototype = {
	setOptions: function(options) {
	this.options = {
		duration: 500,
		onComplete: '',
		transition: fx.sinoidal
	}
	Object.extend(this.options, options || {});
	},

	step: function() {
		var time  = (new Date).getTime();
		if (time >= this.options.duration+this.startTime) {
			this.now = this.to;
			clearInterval (this.timer);
			this.timer = null;
			if (this.options.onComplete) setTimeout(this.options.onComplete.bind(this), 10);
		}
		else {
			var Tpos = (time - this.startTime) / (this.options.duration);
			this.now = this.options.transition(Tpos) * (this.to-this.from) + this.from;
		}
		this.increase();
	},

	custom: function(from, to) {
		if (this.timer != null) return;
		this.from = from;
		this.to = to;
		this.startTime = (new Date).getTime();
		this.timer = setInterval (this.step.bind(this), 13);
	},

	hide: function() {
		this.now = 0;
		this.increase();
	},

	clearTimer: function() {
		clearInterval(this.timer);
		this.timer = null;
	}
}

//stretchers
fx.Layout = Class.create();
fx.Layout.prototype = Object.extend(new fx.Base(), {
	initialize: function(el, options) {
		this.el = $(el);
		this.el.style.overflow = "hidden";
		this.iniWidth = this.el.offsetWidth;
		this.iniHeight = this.el.offsetHeight;
		this.setOptions(options);
	}
});

fx.Height = Class.create();
Object.extend(Object.extend(fx.Height.prototype, fx.Layout.prototype), {	
	increase: function() {
		this.el.style.height = this.now + "px";
	},

	toggle: function() {
		if (this.el.offsetHeight > 0) this.custom(this.el.offsetHeight, 0);
		else this.custom(0, this.el.scrollHeight);
	}
});

fx.Width = Class.create();
Object.extend(Object.extend(fx.Width.prototype, fx.Layout.prototype), {	
	increase: function() {
		this.el.style.width = this.now + "px";
	},

	toggle: function(){
		if (this.el.offsetWidth > 0) this.custom(this.el.offsetWidth, 0);
		else this.custom(0, this.iniWidth);
	}
});

//fader
fx.Opacity = Class.create();
fx.Opacity.prototype = Object.extend(new fx.Base(), {
	initialize: function(el, options) {
		this.el = $(el);
		this.now = 1;
		this.increase();
		this.setOptions(options);
	},

	increase: function() {
		if (this.now == 1 && (/Firefox/.test(navigator.userAgent))) this.now = 0.9999;
		this.setOpacity(this.now);
	},
	
	setOpacity: function(opacity) {
		if (opacity == 0 && this.el.style.visibility != "hidden") this.el.style.visibility = "hidden";
		else if (this.el.style.visibility != "visible") this.el.style.visibility = "visible";
		if (window.ActiveXObject) this.el.style.filter = "alpha(opacity=" + opacity*100 + ")";
		this.el.style.opacity = opacity;
	},

	toggle: function() {
		if (this.now > 0) this.custom(1, 0);
		else this.custom(0, 1);
	}
});

//transitions
fx.sinoidal = function(pos){
	return ((-Math.cos(pos*Math.PI)/2) + 0.5);
	//this transition is from script.aculo.us
}
fx.linear = function(pos){
	return pos;
}
fx.cubic = function(pos){
	return Math.pow(pos, 3);
}
fx.circ = function(pos){
	return Math.sqrt(pos);
}
}
*/
/*------------------------end of moofx----------------------*/

/*------------------------moofxpack------------------------*/
/*
//smooth scroll
if(!fx.Scroll){
fx.Scroll = Class.create();
fx.Scroll.prototype = Object.extend(new fx.Base(), {
	initialize: function(options) {
		this.setOptions(options);
	},

	scrollTo: function(el){
		var dest = Position.cumulativeOffset($(el))[1];
		var client = window.innerHeight || document.documentElement.clientHeight;
		var full = document.documentElement.scrollHeight;
		var top = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop;
		if (dest+client > full) this.custom(top, dest - client + (full-dest));
		else this.custom(top, dest);
	},

	increase: function(){
		window.scrollTo(0, this.now);
	}
});
}
*/
/*----------------------end of moofxpack-----------------------*/

/*-----------------------moodom----------------------*/
/*
if(!Array.prototype.each){
Array.prototype.each = function(func){
	for(var i=0;ob=this[i];i++) func(ob, i);
}
}

if(!Array.prototype.action){
Array.prototype.action = function(actions){
	this.each(function(el){
		if (actions.initialize) actions.initialize(el);
		for(action in actions){
			if (action.slice(0,2) == 'on') el[action] = actions[action];
		}
	});
}
}


function $c(array){
	var nArray = [];
	for (i=0;el=array[i];i++) nArray.push(el);
	return nArray;
}
*/
/*
dom = {
	getSelector: function(selector, filter){
		var params = [];
		selector.split(' ').each(function(arg, j){
			params[j] = param = [];
			if (arg.indexOf('#') > -1) {
				var bits = arg.split('#');
				param['tag'] = bits[0] || '*';
				param['id'] = bits[1];
			}
			else if (arg.indexOf('.') > -1) {
				var bits = arg.split('.');
				param['tag'] = bits[0] || '*';
				param['class'] = bits[1];
			}
			else param['tag'] = arg;
		});
		
		var filter = filter || document;
		filter = $c(filter.getElementsByTagName('*'));
		
		params.each(function(param, k){
			if (param['tag'] != '*' && k == 0) filter = dom.filterByTagName(param['tag'], filter);
			
			else if (k != 0) filter = dom.getElementsWithTagName(param['tag'], filter);
			
			if (param['id']) filter = dom.filterById(param['id'], filter);
				
			if (param['class']) filter = dom.filterByClassName(param['class'], filter);
		});
		return filter;
	},

	filterById: function(id, filter){
		var found = [];
		filter.each(function(el){
			if (el.id == id) found.push(el);
		});
		return found;
	},

	filterByClassName: function(className, filter){
		var found = [];
		filter.each(function(el){
			if (Element.hasClassName(el, className)) found.push(el);
		});
		return found;
	},
	
	filterByTagName: function(tagName, filter){
		var found = [];
		filter.each(function(el){
			if (el.tagName.toLowerCase() == tagName) found.push(el);
		});
		return found;
	},

	getElementsWithTagName: function(tagName, filter){
		var found = [];
		filter.each(function(el){
			$c(el.getElementsByTagName(tagName)).each(function(tn){
				found.push(tn);
			});
		});
		return found;
	}
};

function $S() {
	var elements = [];
	$c(arguments).each(function(sel){
		if (typeof sel == 'string') {
			dom.getSelector(sel).each(function(el){
				elements.push(el);
			});
		}
		else elements.push(sel);
	});
	if (elements.length > 0) return elements;
	else return [false];
}
*/
/*----------------------end of moodom---------------------------*/

/*----------------------dombuilder--------------------------*/
/*
DomBuilder = {
	apply : function(o) { 
	  o = o || {};
		var els = ("p|div|span|strong|em|img|table|tr|td|th|thead|tbody|tfoot|pre|code" + 
					   "|h1|h2|h3|h4|h5|h6|ul|ol|li|form|input|textarea|legend|fieldset|" + 
					   "select|option|blockquote|cite|br|hr|dd|dl|dt|address|a|button|abbr|acronym|" +
					   "script|link|style|bdo|ins|del|object|param|col|colgroup|optgroup|caption|" + 
					   "label|dfn|kbd|samp|var|b|iframe").split("|");
    var el, i=0;
		while (el = els[i++]) o[el.toUpperCase()] = DomBuilder.tagFunc(el);
		return o;
	},
	tagFunc : function(tag) {
	  return function() {
	    var a = arguments, at, ch; a.slice = [].slice; if (a.length>0) { 
	    if (a[0].nodeName || typeof a[0] == "string") ch = a; else { at = a[0]; ch = a.slice(1); } }
	    return DomBuilder.elem(tag, at, ch);
	  }
  },
	elem : function(e, a, c) {
		a = a || {}; c = c || [];
		var el = document.createElement(e);
		for (var i in a) if (typeof a[i] != 'function') {
			if (i == 'class') el.className = a[i];
			else if (i == 'name') el.name = a[i];
			else el.setAttribute(i, a[i]);
		}
		for (var i=0; i<c.length; i++) {
			if (typeof c[i] == 'string') c[i] = document.createTextNode(c[i]);
			el.appendChild(c[i]);
		} 
		return el;
	}
}
*/
/*-----------------------end of dombuilder---------------------*/

/*---------------------JJAX-----------------*/
/*
var jjax = {
	req: function(url, options){
		this.options = options || {};
		this.url = url + (this.options.postBody ? '?' : '');
		for(i in this.options.postBody){
			this.url += '&' + i + '=' + this.options.postBody[i];
		}
		this.send();
	},
	send: function(){
		var script = document.createElement('script');
		script.src = this.url;
		script.type = "text/javascript";
		this.options.appendTo ? this.options.appendTo.appendChild(script) : document.getElementsByTagName("head")[0].appendChild(script);
	}
};
*/
/*--------------------end of JJAX---------------*/

function darkenColor(color,cent) {
	var percent = cent||.3;
	var merge = "#000000";
	var regex = new RegExp("#?(..)(..)(..)");
	var cs = regex.exec(color);
	var ce = regex.exec(merge);
	for (i=1; i < cs.length; i++) {
		cs[i-1] = parseInt(cs[i], 16);
		ce[i-1] = parseInt(ce[i], 16);
	}
	var hex = "rgb(" + (Math.round(cs[0] + (ce[0]-cs[0])*percent))+","+(Math.round(cs[1] + (ce[1]-cs[1])*percent))+","+(Math.round(cs[2] + (ce[2]-cs[2])*percent))+")";
	return hex;
}
/*
jjax.req('http://link.members.freewebs.com/JS/checkLogin.jsp?noCache='+Math.random());
jjax.req('http://images.freewebs.com/JS/Toolbar/toolbar.js');
*/