/*----------------------toolbar---------------------*/

var FWToolbar = {
	inject: function(color, sName){
		var uName=false;
		if(typeof(fwuser)!='undefined' && fwuser.loggedIn){
			uName = fwuser.username;
		}

		FWToolbar.owner = sName;

		FWToolbar.color = color;

		DomBuilder.apply(window);

		$S('head')[0].appendChild(LINK({'href':'http://images.freewebs.com/JS/Toolbar/toolbar.css', 'media':'screen', 'type':'text/css', 'rel':'stylesheet'}));

		var windowHTML = DIV({'id':'fw-window'}, 
				DIV({'id':'fw-window-col'},
					DIV({'id':'fw-friend'},
						IFRAME({'frameBorder':'0','src':'about:blank','allowtransparency':'true'}),
						SPAN({'class':'left'}, A({'href':'#', 'name':'xclose_ico', 'class':'cancel'}))
				),
				DIV({'id':'fw-info'},
					P({'class':'fw-bg'}, 'You have found the Freewebs Toolbar! The toolbar lets visitors easily bookmark, search, and tell others about this website.  Freewebs users can also login to the toolbar for ',  A({'href':'http://members.freewebs.com/page.jsp?page=freebarInfo', 'class':'nLink'}, 'even more features'), '.'),
					SPAN({'class':'left'}, A({'href':'#', 'name':'xclose_ico', 'class':'cancel'}))
				),
				DIV({'id':'fw-search'},
					TABLE(
						TBODY(
							TR(
								TD(SPAN({'class':'fw-bg'}, 'search: ')),
								TD(INPUT({'type':'text', 'class':'txt'}))
							),
							TR(
								TD({'colSpan': '2', 'id':'fw-search-radios'})
							),
							TR(
								TD({'colSpan':'2'},
									SPAN({'class':'left'}, A({'href':'#', 'name':'cancel_ico', 'class':'cancel'})),
									SPAN({'class':'right'}, A({'href':'#', 'name':'ok_ico', 'class':'ok', 'id':'fw-searchbutton'}))
								)
							)
						)
					)
				),
				DIV({'id':'fw-thumbs'},
						IFRAME({'frameBorder':'0','src':'about:blank','allowtransparency':'true'}),
						SPAN({'class':'left'}, A({'href':'#', 'name':'xclose_ico', 'class':'cancel'}))
				)
			)
		);



		if (!uName) {
			var logText = 'login';
			var titleLog = 'Login to your Freewebs account';
			var spanOnLeft = SPAN({'class':'fw-website'}, A({'href':'http://newaccounts.freewebs.com/newAccounts.jsp?referer=toolbar&cm_mmc=Freewebs-_-Free%20Website-_-Toolbar-_-Free%20Accounts', 'class':'li', 'name':'getfreewebsite_ico'}));
			var tColors = STRONG();
			var sPmessage = STRONG();
			var bee = STRONG();
			var report = true;
			nBee = B();
		}
		else {
			FWToolbar.userLoggedIn = true;
			var logText = 'logout';
			var titleLog = 'Logout';
			var spanOnLeft = SPAN({'class':'fw-welcome fw-bg','title':uName}, uName.length>8?(uName.substr(0, 10)+'...'):uName);

			if (sName == uName) {
				var report = false;
				nBee = STRONG();
				var bee = STRONG();
				var sPmessage = STRONG();
				var tColors = TABLE({'id':'fw-colors'},
					TBODY(
						TR(
							TD({'color':'#546373'}),
							TD({'color':'#444444'}),
							TD({'color':'#457fc9'}),
//							TD({'color':'#14843e'}),
							TD({'color':'#6600cc'}),
							TD({'color':'#AA3414'}),
							TD({'color':'#ef7c00'})
						),
						TR(
							TD({'color':'#f9f9f9'}),
							TD({'color':'#222222'}),
							TD({'color':'#1f3daa'}),
							TD({'color':'#88aa1f'}),
							TD({'color':'#ff3399'}),
							TD({'color':'#ffcc33'})
						)
					)
				);
			} else {
				var report = true;
				nBee = B();
				var bee = B();
				var sPmessage = SPAN(A({'href':'http://link.members.freewebs.com/Members/Toolbar/redirect.jsp?url=sendMessage&username='+FWToolbar.owner+'&next='+encodeURIComponent(window.location.href), 'class':'li message', 'name':'message', 'title':'Send a private message to this user'}));
				var tColors = STRONG();
			}
		}
		
		if (report) report = SPAN(A({'href':'http://members.freewebs.com/abuse.jsp?url='+encodeURIComponent(FWToolbar.getSiteAddress()), 'class':'li report', 'name':'report', 'title':'Report potential abuse on this site'}));
		else report = STRONG();

		var contHTML = DIV({'id':'fw-topbar-container'});
		var topbarHTML = DIV({'id':'fw-topbar'},
			
			DIV({'id':'fw-ie'}),
			
			A({'href':(FWToolbar.userLoggedIn?'http://link.members.freewebs.com/Members/Toolbar/redirect.jsp?url=memberHome':'http://members.freewebs.com/?referer=toolbar&cm_mmc=Freewebs-_-Free%20Website-_-Toolbar-_-Free%20Accounts'),'id':'fw-logo-container'}, DIV({'id':'fw-topbar-logo'})),

			spanOnLeft,
			SPAN({'class':'close'}, A({'href':'#', 'class':'li close', 'name':'close_ico', 'title':'Close Toolbar'})),B(),
			SPAN(A({'href':'#', 'class':'li info', 'name':'info_ico'})),B(),
			SPAN(A({'href':'#', 'class':'li thumbs', 'name':'thumbs_ico', 'title':'Like this site?  Give it a thumbs up!'})),B(),
			
			SPAN(A({'href':'#', 'class':'li hide', 'name':'hide_ico', 'title':'Toggle more options'})),B(),
			DIV({'id':'fw-topbar-extras'}, 
				DIV({'class':'wrapping'},
					SPAN(A({'href':(logText=='logout'?('http://link.members.freewebs.com/relogin.jsp?error=3&amp;next='+encodeURIComponent(window.location.href)):('http://link.members.freewebs.com/relogin.jsp?next='+encodeURIComponent(window.location.href))), 'class':'li '+logText, 'name':logText, 'title':titleLog})),B(),
					report, nBee,
					SPAN(A({'href':'http://link.members.freewebs.com/Members/Toolbar/redirect.jsp?url=viewProfile&username='+sName, 'class':'li', 'name':'profile', 'title':'View webmaster profile'})),B(),
					SPAN(A({'href':'#', 'class':'li tellafriend', 'name':'friend', 'title':'Email your friends a link to this site'})),B(),
					SPAN(A({'href':'#', 'class':'li search', 'name':'search', 'title':'Search'})),B(),
					sPmessage, bee,
					SPAN(A({'href':'#', 'class':'li bookmark', 'name':'bookmark', 'title':'Add this site to your favorites'})),B(),
					tColors

				)
			)

		);

		var openHTML = DIV({'id':'fw-open'},SPAN(A({'class':'fw-topbar-open', 'name':'open_ico', 'title':'Expand Toolbar'})));
		var bd = $S('body')[0];

		bd.insertBefore(openHTML, bd.firstChild);
		bd.insertBefore(topbarHTML, bd.firstChild);
		bd.insertBefore(contHTML, bd.firstChild);
		bd.insertBefore(windowHTML, bd.firstChild);

		FWToolbar.mtop = parseInt(Element.readStyle(bd, 'margin-top'));

		if(document.cookie.indexOf("htb=1")<0) {
			bd.style.marginTop = FWToolbar.mtop+30+'px';
		}
		$('fw-search-radios').innerHTML = '<div class="left fw-bg"><input type="radio" class="radio" name="fw-search-radio" id="fw-search-this" value="this"/><label for="fw-search-this">freewebs</label></div>'+
		'<div class="right fw-bg"><input type="radio" class="radio" name="fw-search-radio" id="fw-search-web" value="web" checked="checked"/><label for="fw-search-web">the web</label></div>';

var fwfFix = $S('#fw-friend span')[0];
fwfFix.style.position='relative';
if(window.ActiveXObject) {
	fwfFix.style.top='-27px';
} else {
	fwfFix.style.top='-33px';
}

		FWToolbar.checkWindowSize();

		if (document.body.clientWidth > 910) FWToolbar.currentSize = 'big';
		else FWToolbar.currentSize = 'small';

		window.onresize = function(){
			FWToolbar.checkWindowSize();
		};

		$S('#fw-window-col iframe').each(function(el){
			el.first = true;
		});

		$('fw-window-col').style.backgroundColor = FWToolbar.color;
		$('fw-topbar-container').style.backgroundColor = FWToolbar.color;

		FWToolbar.init();
	},

	init: function(){
		FWToolbar.updateBackgrounds();
		FWToolbar.colorfx = new fx.Color($('fw-topbar-container'), {duration: 400, transition: fx.backIn, onComplete:FWToolbar.updateBackgrounds});
		
		FWToolbar.colorfx2 = new fx.Color($('fw-window-col'), {duration: 400, transition: fx.backIn});
		
		FWToolbar.hidefx = new fx.Width($('fw-topbar-extras'));

		if(document.cookie.indexOf("hte=1")>0) {
			FWToolbar.hidefx.hide();
		}

		FWToolbar.openfx = new fx.Top($('fw-open'), {duration: 300});

		FWToolbar.mtopfx = new fx.MarginTop($S('body')[0]);

		FWToolbar.hideTabs();

		FWToolbar.closefx = new fx.Top($('fw-topbar-container'), {onComplete: function(){
			if (FWToolbar.closefx.now == -30) FWToolbar.openfx.custom(-30, 0);
		}});

		FWToolbar.windowfx = new fx.Top($('fw-window'), {transition: fx.backIn});

		FWToolbar.slidefx = new fx.Top($('fw-topbar'));


		if(document.cookie.indexOf("htb=1")>=0) {
			//start toolbar closed.
			FWToolbar.closefx.now=-30;
			FWToolbar.closefx.increase();
			FWToolbar.slidefx.now=-30;
			FWToolbar.slidefx.increase();
			FWToolbar.openfx.custom(-30,0);
		}

		var fix = [];
		$S('#fw-topbar a.li', '#fw-open a', '#fw-window a.ok', '#fw-window a.cancel').each(function(el, i){
			fix[i] = new fx.Opacity(el.parentNode, {duration: 200});
			fix[i].setOpacity(0.7);
			fix[i].now = 0.7;
			el.parentNode.onmouseover = function(){
				fix[i].clearTimer();
				fix[i].custom(fix[i].now,0.9999);
			}
			el.parentNode.onmouseout = function(){
				fix[i].clearTimer();
				fix[i].custom(fix[i].now,0.7);
			}
		});

		$S('#fw-colors td').each(function(el){
			var color = el.getAttribute('color');
			el.style.backgroundColor = color;
			el.onclick = function(){
				jjax.req('http://link.members.freewebs.com/Members/Toolbar/setColor.jsp?color='+color.substring(1)+'&noCache='+Math.random());
				FWToolbar.colorfx.customColor(FWToolbar.color, color);
				FWToolbar.colorfx2.customColor(FWToolbar.color, color);
				FWToolbar.color = color;
				return false;
			}
		});

		$S('#fw-topbar a.close')[0].onclick = function(){
			FWToolbar.mtopfx.custom(FWToolbar.mtop+30, FWToolbar.mtop);
			FWToolbar.closefx.custom(0, -30);
			FWToolbar.slidefx.custom(0, -30);
			FWToolbar.windowClose();
			document.cookie = "http://www.freewebs.com/htb=1;path=/";
			return false;
		}

		$S('#fw-open a')[0].onclick = function(){
			FWToolbar.mtopfx.custom(FWToolbar.mtop, FWToolbar.mtop+30);
			FWToolbar.closefx.custom(-30, 0);
			FWToolbar.slidefx.custom(-30, 0);
			FWToolbar.openfx.custom(0, -30);
			document.cookie = "http://www.freewebs.com/htb=0;path=/";
			return false;
		}

		$S('#fw-window a.cancel').each(function(el){
			el.onclick = function(){
				FWToolbar.windowClose();
				return false;
			}
		});

		$S('#fw-topbar a.info')[0].onclick = function(){
			FWToolbar.windowClicker('info');
			return false;
		}
		
		$S('#fw-topbar a.thumbs')[0].onclick = function(){
			FWToolbar.windowClicker('thumbs');
			return false;
		}

		$S('#fw-topbar a.search')[0].onclick = function(){
			FWToolbar.windowClicker('search');
			return false;
		}

		$S('#fw-topbar a.tellafriend')[0].onclick = function(){
			FWToolbar.windowClicker('friend');
			return false;
		}

		$('fw-searchbutton').onclick = function(){
			if ($S('#fw-search input.radio')[0].checked == true) window.location.href = 'http://members.freewebs.com/afsResults.jsp?domains=freewebs.com&amp;q='+escape($S('#fw-search input.txt')[0].value)+'&sa=Search&sitesearch='+encodeURIComponent('freewebs.com')+'&client=pub-4763110844767107&channel=&safe=active&cof=GALT%3A666666%3BDIV%3AEFEFEF%3BVLC%3A663399%3BALC%3A0099CC%3BLC%3A0033CC%3BBGC%3AFFFFFF%3BT%3A666666%3BGFNT%3A0000FF%3BGIMP%3A0000FF%3BS%3Ahttp%3A%2F%2Fwww.freewebs.com%3BFORID%3A11%3B'
			else window.location.href = 'http://members.freewebs.com/afsResults.jsp?domains=freewebs.com&amp;q='+escape($S('#fw-search input.txt')[0].value)+'&sa=Search&sitesearch=&client=pub-4763110844767107&channel=&safe=active&cof=GALT%3A666666%3BDIV%3AEFEFEF%3BVLC%3A663399%3BALC%3A0099CC%3BLC%3A0033CC%3BBGC%3AFFFFFF%3BT%3A666666%3BGFNT%3A0000FF%3BGIMP%3A0000FF%3BS%3Ahttp%3A%2F%2Fwww.freewebs.com%3BFORID%3A11%3B'
			return false;
		}

/*		$S('#fw-topbar a.login')[0].onclick = function(){
			window.location.href = 'http://link.members.freewebs.com/relogin.jsp?next='+encodeURIComponent(window.location.href);
			return false;
		}
		
		$S('#fw-topbar a.logout')[0].onclick = function(){
			window.location.href = 'http://link.members.freewebs.com/relogin.jsp?error=3&next='+encodeURIComponent(window.location.href);
			return false;
		}*/

		$S('#fw-topbar a.bookmark')[0].onclick = function(){
			FWToolbar.addBookmark(document.title);
			return false;
		}

		$('fw-topbar-container').style.display = 'block';
		$('fw-topbar').style.display = 'block';
	},
	
	windowClicker: function(string){
		if ($('fw-'+string).style.display != 'block'){
			var fixFrame = $S('#fw-'+string+' iframe');
			if(fixFrame.length>0) {
				if(fixFrame[0].first) {
					if(string=='thumbs') {
						fixFrame[0].src = 'http://link.members.freewebs.com/Members/Toolbar/thumbupForm.jsp?username='+FWToolbar.owner+'&bg='+FWToolbar.color.substring(1)+'&url='+encodeURIComponent(window.location.href);
					} else if(string=='friend') {
						fixFrame[0].src = 'http://link.members.freewebs.com/Members/Toolbar/tellFriendForm.jsp?username='+FWToolbar.owner+'&bg='+FWToolbar.color.substring(1)+'&url='+encodeURIComponent(window.location.href);
					}
						fixFrame[0].first = false;
					if(!window.ActiveXObject) {
						window.setTimeout(function(){fixFrame[0].style.display='inline'},1);
					}
				} else if(string=='friend') {
					fixFrame[0].src = $S('#fw-'+string+' iframe')[0].src;
				}
			}
			FWToolbar.hideTabs();
			$('fw-'+string).style.display = 'block';
			//FWToolbar[string+'fx'].toggle();
			FWToolbar.windowMove(-230, -20);
		}
	},
	
	hideTabs: function(){
		$('fw-info').style.display = 'none';
		$('fw-search').style.display = 'none';
		$('fw-friend').style.display = 'none';
		$('fw-thumbs').style.display = 'none';
	},
	
	windowMove: function(from, to){
		if ($('fw-window').style.top != to+'px') {
			if (from<to) FWToolbar.windowfx.options.transition = fx.backOut;
			else FWToolbar.windowfx.options.transition = fx.backIn;
			FWToolbar.windowfx.custom(from, to);
		}
	},
	
	windowClose: function(){
		if (parseInt($('fw-window').style.top) && parseInt($('fw-window').style.top) != -230){
			FWToolbar.windowfx.options.onComplete = function(){
				FWToolbar.hideTabs();
				FWToolbar.windowfx.options.onComplete = '';
			}
			FWToolbar.windowMove(parseInt($('fw-window').style.top), -230);
		}
	},
	
	getSiteAddress: function(){
		var uri = window.location.href.split('http://www.freewebs.com/');
		if (uri[2].indexOf('freewebs.com') > -1) {
			if (uri[3] && uri[3].indexOf('html') == -1) return uri[2]+'/'+uri[3]+'/';
		} else {
			return uri[2];
		}
	},
	
	addBookmark: function(title) {
		var site = 'http://'+FWToolbar.getSiteAddress();
		if (window.sidebar) window.sidebar.addPanel(title, site,"");
		else if(window.ActiveXObject) window.external.AddFavorite(site, title);
		else return false;
	},
	
	checkWindowSize: function(){
		if (window.ActiveXObject){
			if (document.body.clientWidth != 0) {
				$('fw-topbar-container').style.width = document.body.clientWidth+"px";
				$('fw-topbar').style.width = document.body.clientWidth+"px";
			} else {
				$('fw-topbar-container').style.width = document.body.clientWidth+"px";
				$('fw-topbar').style.width = document.body.clientWidth+"px";
			}
		}

		if ($('fw-topbar-extras').offsetWidth > 0) $('fw-topbar-extras').style.width = 'auto';
		if (document.body.clientWidth < 910) {
			FWToolbar.resizeSize = 'small';
			var postFix = '_ico';
			var widthH = 210;
		} else {
			FWToolbar.resizeSize = 'big';
			var postFix = '';
			if (FWToolbar.userLoggedIn) var widthH = 570;
			else var widthH = 510;
		}
		
		$S('#fw-topbar a.hide')[0].onclick = function(){
			if (FWToolbar.hidefx.el.offsetWidth == widthH) {
				FWToolbar.hidefx.custom(widthH, 0);
				document.cookie = "http://www.freewebs.com/hte=1;path=/";
			} else {
				FWToolbar.hidefx.custom(0, widthH);
				document.cookie = "http://www.freewebs.com/hte=0;path=/";
			}
			FWToolbar.checkLinkIcons(postFix);
			return false;
		}
		
		if (FWToolbar.resizeSize != FWToolbar.currentSize) {
			FWToolbar.currentSize = FWToolbar.resizeSize;
			$S('#fw-topbar-extras div.wrapping')[0].style.width = widthH+'px';
			FWToolbar.checkLinkIcons(postFix);
		}
	},

	checkLinkIcons: function(postFix){
		$S('#fw-topbar a.li', '#fw-open a', '#fw-window a.ok', '#fw-window a.cancel').each(function(el){
			var im = new Image();
			var name = el.getAttribute('name');
			if (name.indexOf('_ico') == -1) name += postFix;
 			im.src = 'http://images.freewebs.com/Images/Freebar/'+name+'.png'
			if (window.ActiveXObject) el.style.filter = 'progid:DXImageTransform.Microsoft.AlphaImageLoader(src='+im.src+',sizingMethod="image")';
			else el.style.backgroundImage = 'url('+im.src+')';
			if (postFix == '_ico') {
				el.parentNode.style.width = im.width+'px';
				el.style.width = im.width+'px';
			} else {
				im.onload = function(){
					el.parentNode.style.width = im.width+'px';
					el.style.width = im.width+'px';
				}
			}
		});
	},

	updateBackgrounds: function() {
		var dark = darkenColor(FWToolbar.color);
		$S("#fw-topbar .fw-bg").each(function(el) {
			el.style.backgroundColor=dark;
		});
		$S("#fw-window .fw-bg").each(function(el) {
			el.style.backgroundColor=dark;
		});
	}
}

/*-----------------end of tobpar-----------------*/

/*------------------effects--------------------*/

fx.MarginTop = Class.create();
fx.MarginTop.prototype = Object.extend(new fx.Base(), {
	ieFix: false,

	initialize: function(el, options) {
		this.el = $(el);
		this.setOptions(options);

		//added by idris:
		//  this hack is to fix marginTop problems on pages with relative positioning
		if(window.ActiveXObject){
			var el=$S(".fw-head");
			if(el.length>0){
				this.ieFix=el[0];
			}
		}
	},

	increase: function() {
		this.el.style.marginTop = this.now + 'px';

		//added by idris:
		if(this.ieFix){
			this.ieFix.innerHTML=this.ieFix.innerHTML;
		}
	}
});

fx.Top = Class.create();
fx.Top.prototype = Object.extend(new fx.Base(), {
	initialize: function(el, options) {
		this.el = $(el);
		this.setOptions(options);
	},

	increase: function() {
		this.el.style.top = this.now + 'px';
	}
});

fx.Color = Class.create();
fx.Color.prototype = Object.extend(new fx.Base(), {
	initialize: function(el, options) {
		this.el = $(el);
		this.setOptions(options);
		this.now = 0;
		this.regex = new RegExp("#?(..)(..)(..)");
		if (!this.options.fromColor) this.options.fromColor = "#FFFFFF";
		if (!this.options.toColor) this.options.toColor = "#FFFFFF";
		if (!this.options.property) this.props = new Array("backgroundColor");
		else this.props = this.options.property.split(",");
	},
	
	increase: function() {
		var hex = "rgb(" + (Math.round(this.cs[0] + (this.ce[0]-this.cs[0])*this.now))+","+(Math.round(this.cs[1] + (this.ce[1]-this.cs[1])*this.now))+","+ (Math.round(this.cs[2] + (this.ce[2]-this.cs[2])*this.now))+")";
		for (i=0; i < this.props.length; i++) {
			if (this.props[i] == "backgroundColor") this.el.style.backgroundColor = hex;
			else if (this.props[i] == "color") this.el.style.color = hex;
			else if (this.props[i] == "borderColor") this.el.style.borderColor = hex;
		}
	},
	
	customColor: function(from, to) {
		this.cs = this.regex.exec(from);
		this.ce = this.regex.exec(to);
		for (i=1; i < this.cs.length; i++) {
			this.cs[i-1] = parseInt(this.cs[i], 16);
			this.ce[i-1] = parseInt(this.ce[i], 16);
		}
		this.custom(0, 1);
	}
});

/*----------------end of effects----------------*/

/*----------------Stylereader----------------*/

Object.extend(Element, {
	readStyle: function(element, property) {
		element = $(element);
		if (document.defaultView) {
			var sty = document.defaultView.getComputedStyle(element,null).getPropertyValue(property);
			return sty;
		}
		else if (element.currentStyle) return element.currentStyle[property.camelCase()];
		else return false;
	}
});

Object.extend(String.prototype, {
	camelCase: function(){
		return this.replace(/-\D/gi, function(sMatch){
			return sMatch.charAt(sMatch.length - 1).toUpperCase();
		});
	}
});

/*----------------end of Stylereader----------------*/
var fw_clint=window.setInterval(checkLogin,100);
function checkLogin(){
	if(typeof(fwuser)!='undefined'){
		window.clearInterval(fw_clint);
		FWToolbar.inject('#'+fw_tbc,fw_un);
		if(!window.ActiveXObject) {
			window.setTimeout(function(){
				if(FWToolbar.resizeSize=='big') {
					FWToolbar.checkLinkIcons('');
				}
			},1000);
		}
	}
}
