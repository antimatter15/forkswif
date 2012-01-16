function k4() {
f=document.getElementsByTagName("form");
s='Sorry, this FreeWebs account is still provisional and forms are not permitted.  \nFreeWebs accounts are provisional for the first 7 days.';
for(var i=0;i<f.length;i++) {
if (f[i].action!='http://members.freewebs.com/guestbookA.jsp' 
&& f[i].action!='http://members.freewebs.com/formMail.jsp'
&& f[i].action!='http://link.members.freewebs.com/Members/Subscriptions/PublicDispatcher.jsp'
&& f[i].action!='http://members.freewebs.com/guestbook.jsp'
&& f[i].action!='http://www.gigya.com/wildfire/WFPop.aspx'
&& f[i].action!='http://polls.freewebs.com/Members/Polls/vote.jsp'){
f[i].setAttribute("action","javascript:alert(s);");
f[i].onsubmit=function() {
alert(s);
return false;
};
}
}
}

function k6(){
l=document.getElementsByTagName("a");
for(var i=0;i<l.length;i++){
if (/fuseaction=invite.addfriend_verify/.test(l[i].href) || /freeads4swingers/.test(l[i].href)  ){
l[i].href='#';
}
}
}
function k5(){
f=document.getElementsByTagName("iframe");
for(var i=0;i<f.length;i++) {
if (f[i].src.indexOf('sex')>0 || f[i].src.indexOf('wildorchidz.com')>0
|| f[i].src.indexOf('datinggold.com')>0
|| f[i].src.indexOf('gooogle.info')>0
|| f[i].src.indexOf('antivirus-scanonline.com')>0
){
f[i].src='about:blank';
} 
} 
}

var _fw = {};
_fw.rand = "xmd0kf4ghe846jqo9pd";
_fw.url = "http://members.freewebs.com/?referer=advbar&amp;cm_mmc=Freewebs-_-Free%20Website-_-AdvBar-_-Free%20Website";
_fw.imagesprefix = "http://images.freewebs.com/Images/Freebar/";
_fw.ll = 0;
_fw.set = function(o,v) {for(var i in v) o[i] = v[i]};
_fw.event = function(o,e,f) {
if (o.addEventListener) o.addEventListener(e, f, 1);
else if (o.attachEvent) o.attachEvent("on"+e,f);
};
_fw.loadFreebar = function() {
	if (navigator.userAgent.indexOf("MSIE")>1 && document.readyState!="loaded" && document.readyState!="complete") return setTimeout("_fw.loadFreebar()",100);
	if (_fw.freebar!=null) return;
	var ll = _fw.ll;
	var now=new Date();
	now=Math.floor(now.getTime()/86400000);
	var days=now-ll;
	var h=document.location.href;
	var showbar=true; //(h.indexOf('forcebar=1')>0);
	var showad=(h.indexOf('forcead=1')>0) || days>30;
        var showpixel = false; //(h.indexOf('forcead=1')>0) || days>30;
	if (h.indexOf('freebarinfo=1')>0) {
		alert('show freebar = '+showbar+
	'\nshow ad = '+showad+
	'\nlast login = '+ll+
	'\ntoday = '+now+
	'\ndays since last login = '+days+' days');
	}
	
	var a=navigator.userAgent;
	_fw.cssfixed=(a.indexOf('Firefox')>0);

        if (showpixel){
		var fr = document.createElement("img");
		_fw.set(fr.style, {visibility: 'hidden',position:'absolute',width:'0px',height:'0px',left:'0px',top:'0px',textAlign:'center',zIndex:10001,backgroundColor:document.bgColor});
		fr.src = 'http://ad.doubleclick.net/adi/fw.user.sites/advanced;kw=advanced;sz=1x1;ord='+(Math.random()*10000000000000000)+'?';
                document.body.appendChild(fr);
        }
	if (showad) {
		_fw.adv = document.createElement("div");
		_fw.set(_fw.adv.style, {position:'absolute',width:'100%',height:'90px',left:'0px',top:'0px',textAlign:'center',zIndex:10001,backgroundColor:document.bgColor});
		_fw.adv.style.position = (_fw.cssfixed)? 'fixed':'absolute';
		var fr = document.createElement("iframe");
		_fw.set(fr.style,{margin:0,width:'728px',height:'90px'});
		_fw.set(fr,{marginwidth:0,marginheight:0,hspace:0,vspace:0,scrolling:'no',frameBorder:0,border:0});
		fr.src = '../../../www.freewebs.com/adv-iframe.htm';
		// changed
		//fr.src = 'http://ad.doubleclick.net/adi/fw.user.sites/advanced;sz=728x90;cat=00;cat=19;ord='+(Math.random()*10000000000000000)+'?';
		_fw.adv.appendChild(fr);
	}
	if (showbar) {
		var f = _fw.freebar = document.createElement("div");
		_fw.set(f.style, {visibility:'hidden',overflow:'hidden',zIndex:10000,textAlign:'center',whiteSpace:'nowrap',left:'0px',top:'0px'});
		f.style.position = (_fw.cssfixed)? 'fixed':'absolute';
	}
	_fw.fullheight = 0;
	var fn = window['_load_random_'+_fw.rand];
	if (typeof(fn)=='function') fn();
	else if (typeof(fn)=='string' && fn == 'Freewebs') {
		_fw.onlyad = showad;
		_fw.freebar = 0;
	} else if (showbar) {
		_fw.fullheight = 32;
		f.onclick = function() {document.location.href=_fw.url}
		_fw.set(f.style, {width:'100%',height:_fw.fullheight+'px',cursor:'pointer',textAlign:'right',background:"#66CCFF url('"+_fw.imagesprefix+"bar_stretchblue-bg.gif') repeat-x"});
		f.innerHTML = '<div style="position:absolute; left:0px; top:0px; width:260px; height:32px;"><a href="http://members.freewebs.com/?referer=advbar&amp;cm_mmc=Freewebs-_-Free%20Website-_-AdvBar-_-Free%20Website"><img src="'+_fw.imagesprefix+'bar_stretchblue-web.gif" width=260 height=32 border=0 align=middle></a></div>'+
		'<a href="'+_fw.url+'" target="_top"><img src="'+_fw.imagesprefix+'bar_stretchblue-logo.gif" width=168 height=32 border=0 align=middle title="Get your free website today!"></a>';
	}
	
	if (showad) {
		if (!showbar) document.body.style.marginBottom += 90 + 10; 
		document.body.appendChild(_fw.adv);
	}
	if (showbar) {
		document.body.style.marginBottom += _fw.fullheight + 10 + ((showad)?90:0);  
		document.body.appendChild(f);
		_fw.contentbar = document.getElementById('fw_content');
	}

	if (!showad && !showbar) return;
	
	_fw.resetBar();
	if (_fw.freebar) _fw.freebar.style.visibility = 'visible';
	_fw.event(window,'scroll',_fw.resetBar);
	_fw.event(window,'resize',_fw.resetBar);
}

_fw.resetBar = function(r) {
	var fn = window['_set_random_'+_fw.rand];
	if (typeof(fn)=='function') fn();
	else {
		var f = _fw.freebar;
		if (f && document.all) f.style.width = document.body.clientWidth + document.body.scrollLeft+'px';
		
		var dh = document.body.scrollHeight;
		var wh;
		if (document.all) {
			wh = document.documentElement.clientHeight;
			if (wh==0) wh = document.body.clientHeight;
		}
		else {
			if (dh<window.innerHeight) wh = window.innerHeight;
			else wh = document.body.clientHeight;
		}
		var st;
		if (document.all && document.documentElement.scrollTop) st = document.documentElement.scrollTop;
		else st = (_fw.cssfixed)? 0:parseInt(document.body.scrollTop);
		
		var y = st + wh - _fw.fullheight;
		var h = dh - y;
		if (h<_fw.fullheight) h = _fw.fullheight;
		
		if (f) {
			f.style.top = y+'px';
			f.style.height = h;
		}
		if (_fw.adv) _fw.adv.style.top = y-90+'px'; 
	}
}

function hashUN(u) {
   if(u.length<5){ return 0;}
   return u.charCodeAt(0)*31*31*31*31 + u.charCodeAt(1)*31*31*31 + u.charCodeAt(2) * 31*31 
         + u.charCodeAt(3) + 31 + u.charCodeAt(4);
}
var fw_al=-1;
var fw_np=0;
function fw_getU(u) {
  u = u.toString(); var i;var re = new RegExp("http://(www.)?freeweb[sz].com/","i");var m = re.exec(u);if(m==null || m.index!=0) { return ""; } else { u = u.substring(m[0].length); if((i=u.indexOf("http://www.pryjon.com/")) > 0) {return u.substring(0,i);
    } else {return u;}}}
var fw_un,fw_tbc;
function fw_i() {
var np=0;
var al=-1;
var prov=0;
var ll=-1;
var stb=0;
var cat=0;
var un=fw_getU(document.location);
var tbc='444444';
if(xmlp.readyState==4) {
if(xmlp.status==200) {
if (xmlp.responseText.indexOf("Not Found")<0){
eval(xmlp.responseText);

/* rewrite tracker link */
if (un && document.getElementById && document.getElementsByTagName) {
	var f = document.getElementById('fw-footer');
	if (f) {
		var a = f.getElementsByTagName('a');
		if (a && a.length!=null && a.length>0 && a[0].href!=null) {
			if (a[0].href.indexOf('members.freewebs.com')>0) {
				a[0].href = 'http://members.freewebs.com/?referer=freebar&cm_mmc=Freewebs-_-Free%20Website-_-Freebar-_-'+un;
			}
		}
	}
}

/* load freebar */
if (cat!=998 && np && al==2 && _fw && typeof(_fw.loadFreebar)=='function') {
	if (window==parent || (parent.document.getElementsByTagName("iframe").length==0 && window==parent.frames[parent.frames.length-1])) {
		_fw.ll = ll;
		_fw.loadFreebar();
	}
}

fw_un = un;
fw_tbc = tbc;
if(np==1 && al==2) {
window.status='This site is hosted for free at Freewebs.com.';
}
// hashUN(un) % 32 == 7 
if(typeof(fwt_hnt)=='undefined' && ((al!=2 && np==1 && self==top) ||stb==1)){
//if (false){
  //document.write('<script type="text/javascript" src="http://toolbar.freewebs.com/JS/checkLogin.jsp"></script><script type="text/javascript" src="../../../images.freewebs.com/JS/Toolbar/libs.js"></script><script type="text/javascript" src="../../../images.freewebs.com/JS/Toolbar/toolbar.js"></script>');
  var sc = document.createElement('script');
  /*sc.src = 'http://toolbar.freewebs.com/JS/checkLogin.jsp?noCache='+Math.random();
  sc.type = "text/javascript";
  document.getElementsByTagName("head")[0].appendChild(sc);
  sc = document.createElement('script');*/
  sc.src = 'http://images.freewebs.com/JS/Toolbar/libs.js';
  sc.type = "text/javascript";
  document.getElementsByTagName("head")[0].appendChild(sc);
    /*sc = document.createElement('script');
    window.setTimeout(function(){
    sc.src = 'http://images.freewebs.com/JS/Toolbar/toolbar.js';
    sc.type = "text/javascript";
    document.getElementsByTagName("head")[0].appendChild(sc);
    }, 500);*/
}
fw_al=al;
fw_np=np;
if (prov==1){
window.setInterval("k4()",1000);
k4();
k6();
}
if (np==1){
k5();
window.setTimeout('k5()', 1000);
}
}
}
}
}

var fw_enf = function() {
        var present = false;
        //check for already existing
        if(present) return;
        document.write('<div id="fw_enf" style="display:none;position:absolute;bottom:0px;height:90px;margin-top:10px;width:100%;left:0;text-align:center;background:white none;"><dsc'+ 'ript src="http://ad.doubleclick.net/adj/fw.user.sites/advanced/;cat=00;tile=83;sz=728x90;ord=123456?"></scr'+ 'ipt></div>');   
        if(typeof(fw_dart_ord)!="number") {  fw_dart_ord = parseInt(Math.random()*10000000);}
window.setTimeout(function(){
        var b = document.body;
	var de = document.documentElement;
        b.style.marginBottom = '100px';
        var el = document.getElementById('fw_enf');
//      document.write(str);    
        if(window.attachEvent) {
                window.attachEvent("onscroll", function(){     
                        el.style.top = (de.clientHeight + de.scrollTop - 100) + 'px';
                });
        } else {
                el.style.position = 'fixed';
        }
        el.style.display = 'block';

if(window.ActiveXObject) {
  var x = el.nextSibling;
  while(x) {
    if(x.nodeType == 1 && x.tagName != 'SCRIPT') {
      el.appendChild(x);
      x = el.nextSibling;
    } else {
      x = x.nextSibling;
    }
  }
}


}, 500);
};

function loadText() {
var a,b;
if (navigator.userAgent.indexOf('MSIE 5.0')>0) return;
if (navigator.userAgent.indexOf('MSIE 4.0')>0) return;
if (document.getElementById){
eval("try { xmlp = new XMLHttpRequest();} catch (e) {  xmlp = new ActiveXObject('Msxml2.XMLHTTP');}  try { netscape.security.PrivilegeManager.enablePrivilege('UniversalBrowserRead'); } catch (e) { }");
}
if (xmlp==null) return;
if(document.all) {
xmlp.open("GET",'.i?noCache='+Math.random(),true);
xmlp.onreadystatechange = fw_i;
xmlp.send(null);
} else {
xmlp.open("GET",'.i?noCache='+Math.random(),true);
xmlp.onreadystatechange = fw_i;
xmlp.send(null);
}
}
loadText();

if(typeof(urchinTracker)!='function')document.write('<sc'+'ript src="../../../www.google-analytics.com/urchin.js"></sc'+'ript>');
//if(typeof(fw_ka)=='undefined' && false) fw_enf();  // enf does not do anything usefule


if(document.cookie.indexOf('fwwwToken') >= 0) {
function getCookie(key) {
var myValue = null;
var myVal;
var cookies = document.cookie.split(';');
for(var i=0;i<cookies.length;i++) {
if(myVal = cookies[i].match(new RegExp(key+'=(.*)'))) myValue = myVal[1];
}
return myValue;
}
var token = getCookie('fwwwToken');
if(token != null) {
document.write('<scr' + 'ipt src="http://link.members.freewebs.com/Members/memberState.jsp?token=' + token + '"></scr' + 'ipt>');
}
}
// THIS IS THE LIVE FILE!
