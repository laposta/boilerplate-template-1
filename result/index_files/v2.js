var _Mdone=0; var _Md=document;
if(!window._Mdtypes)var _Mdtypes='doc|eps|svg|xls|ppt|pdf|xls|zip|txt|vsd|vxd|js|css|rar|exe|wma|mov|avi|wmv|mp3';
function _Msc(na,va,ex){var dd=_Md.domain;var dm='';var re=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;if(!(re.test(dd)||dd.indexOf('.',0)==-1)){var f=true;var dl=dd.length;var c=0;while(f){var dot=dd.lastIndexOf('.',dd.length);if(dot==-1){f=false;if(c==1){dm=dd.substring(0,dd.length)+dm;}}else{if(c<2)dm=dd.substring(dot+1,dd.length)+dm;if(c==0)dm='.'+dm;dd=dd.substring(0,dot);}c++;}}var c=na+'='+va+'; expires='+ex.toGMTString()+'; path=/';if(dm!='')c+='; domain='+dm;_Md.cookie=c;}
function _Mgc(na){var dc=_Md.cookie;var pr=na+"=";var be=dc.indexOf("; "+pr);if(be==-1){be=dc.indexOf(pr);if(be!=0)return'';}else be+=2;var en=_Md.cookie.indexOf(";",be);if(en==-1)en=dc.length;return unescape(dc.substring(be+pr.length,en));} 
function _Me(s){if(typeof(encodeURIComponent)=='function')return encodeURIComponent(s);else return escape(s);}
function _Mue(s){if(typeof(decodeURIComponent)=='function')return decodeURIComponent(s);else return unescape(s);}
function _Mev(a,b,c){if(a.addEventListener){a.addEventListener(b,c,false)}else if(a.attachEvent){a.attachEvent("on"+b,c)}}
function _Mload(){if(_Mdone==0){_Mdone=1;if(!window._Mblock){if(window._Mqsvar&&_Mqsvar!=''){var mp=_Mea(_Mqsvar.toLowerCase(),0,0);if(mp=='')mp=_Mea(_Mqsvar.toLowerCase(),1,0);_Mpage=_Mpage+_Mue(mp);}_Mtrack(_Mpage,0);if(window._Mclickouts)_Mco();if(window._Mdownloads)_Mdl();}if(window._Mframes)for(var i=0;i<_Mframes.length;i+=2)if(frames[_Mframes[i]])frames[_Mframes[i]].location.href=_MlinkURL(_Mframes[i+1]);}}
function _Mtrack(p){
	var type=arguments[1];var s2=arguments[2];
	if (type!=0){if(typeof(p)=='object'){if(p&&p.href)p=p.href;}if(p.substr(0,4)=='http'||type==1)type=1;else type=0;}
	var _Mid,_Mlp;if(type!=1){_Mid=_Mea('_mid',1,0);if(_Mid=='')_Mid=_Mea('_mid',1,1);if(_Mid!='')type=2;_Mlp=_Mea('_mlp',1,0);}
	var u="https://mtrack.nl/track?v=2.1&client=emmycat&site=";if(s2)u+=s2;else u+='emailpr5695';u+="&url="+_Me(_Md.URL)+"&title="+_Me(_Md.title)+"&page="+_Me(p); 
	var r='';(parent==self)?r=_Md.referrer:eval("try{r=top.document.referrer}catch(e){}");if(r=='')r=_Md.referrer;if(r=='')if(window._Mref)r=_Mref;u+="&r="+_Me(r);
	if(typeof(screen)=="object"){var _s=screen;var s_w=_s.width;var s_h=_s.height;var s_c=_s.colorDepth;if(s_w>0)u+="&s_w="+s_w;if(s_h>0)u+="&s_h="+s_h;if(s_c>0)u+="&s_c="+s_c;}
	u+="&j="+(navigator.javaEnabled()?"1":"0");
	u+="&ul="+_Me(navigator.appName=="Netscape"?navigator.language:navigator.userLanguage);
	var now=new Date();now.setTime(now.getTime()+3*365*24*60*60*1000);
	var ml=0;var id=_Mea('_mc',0,0);
	if(id==''){ml=1;id=_Mea('_mc',1,0);}
	if(id=='')id=_Mgc('mtrack');else{var h=_Mea('_mh',ml,0);if(h==_Mhash(id))_Msc('mtrack',id,now);else id=_Mgc('mtrack');}
	if(id==''){id=Math.round(now.getTime()/10000)+"M"+Math.floor(Math.random()*2147483648);_Msc('mtrack',id,now);}
	var c=1;if(id!=_Mgc('mtrack')){id=0;c=0;}u+="&js=1&id="+id+"&c="+c+"&nc="+now.getTime();
	if(type==1)u+="&type=out";if(type==2)u+="&type=in&_Mid="+_Me(_Mid)+"&_Mlp="+_Me(_Mlp);
	var se='';if(window._Msearch&&_Msearch!='')se=_Msearch;else if(window._Msearchqsvar&&_Msearchqsvar!=''){se=_Mea(_Msearchqsvar.toLowerCase(),0,0);if(se=='')se=_Mea(_Msearchqsvar.toLowerCase(),1,0);}if(se!='')u+="&se="+_Me(se);
	u+='&fl='+_Me(_Mfl());
	if(_Md.images){i=new Image(1,1);i.src=u;}
	}
function _Mea(a,t,h){
	var s='';if(h==1){if(t==1){if(parent==self)t=0;else{var tp=0;eval("try{s=top.location.hash}catch(e){tp=1;}");if(tp==1)eval("try{s=parent.location.hash}catch(e){}");}}if(t==0)s=self.location.hash;}else{if(t==1){if(parent==self)t=0;else{var tp=0;eval("try{s=top.location.search}catch(e){tp=1;}");if(tp==1)eval("try{s=parent.location.search}catch(e){}");}}if(t==0)s=self.location.search;}
	if (typeof(s)!='undefined'&&s!=''){var q=s.substring(1,s.length);var qa=q.split('&');var r;for(var i=0;i<qa.length;i++){var qp=qa[i].split('=');if(qp[0].toLowerCase()==a)return qp[1];}}
	return '';
}
function _Mlink(u){var nw=arguments[1];u=_MlinkURL(u);if(nw==1)window.open(u);else _Md.location.href=u;}
function _MlinkURL(u) {
	var id=_Mgc('mtrack');
	if(id!=''){var q='_Mc='+id+'&_Mh='+_Mhash(id);var iq=u.indexOf("?");var ih=u.indexOf("#");if(iq==-1 && ih==-1)u+='?'+q;else if(ih==-1)u+='&'+q;else if(iq==-1)u=u.substring(0,ih-1)+'?'+q+u.substring(ih);else u=u.substring(0,ih)+'&'+q+u.substring(ih);}
	return u;
}
function _Mhash(id){var s=0;for(i=0;i<id.length;i++){c=id.charAt(i);if(c!='M')s+=parseInt(c);}return s;}
function _Mco(){
	if(!window._Mcod){var l=_Md.location.href;if(l.substr(0,4)!='http')return;var _Mcod=[_Meds(l)];}else _Mcod=window._Mcod;
	for(var i=0;i<_Md.links.length;i++){
		if(_Md.links[i].href){
			var l=_Md.links[i];
			if(l.href.substr(0,4)=='http'){
				var d=_Meds(l.href);
				var f=0;for(var j=0;j<_Mcod.length;j++)if(_Mcod[j]==d)f=1;
				if(f!=1)_Mev(l,'click',_Mba(_Mtrack,l));
			}
		}
	}
}
function _Mdl(){
	var s='\\.(?:'+_Mdtypes+')($|\\&|\\?)';
	try{var re=new RegExp(s,'gi');}catch(e){return;}
	if(!window._Mcod){var l=_Md.location.href;if(l.substr(0,4)!='http')return;var _Mcod=[_Mrw(_Med(l))];}else _Mcod=window._Mcod;
	for(var i=0;i<_Md.links.length;i++){
		if(_Md.links[i].href){
			var l=_Md.links[i];
			if(l.protocol == 'mailto:'){
				_Mev(l,'click',_Mba(_Mtrack,'Mailto: '+l.href.substring(7)));
			} else {
				var u=l.pathname+l.search;
				try{var dl=u.match(re);}catch(e){}
				if(dl){
					var d=_Mrw(_Med(l.href));
					var f=0;for(var j=0;j<_Mcod.length;j++)if(_Mcod[j]==d)f=1;
					if(f==1)_Mev(l,'click',_Mba(_Mtrack,'Download: '+_Mue(u)));
				}
			}
		}
	}

}
function _Mfl(){try{try{var axo=new ActiveXObject('ShockwaveFlash.ShockwaveFlash.6');try{axo.AllowScriptAccess='always';}catch(e){return '6,0,0';}}catch(e){}return new ActiveXObject('ShockwaveFlash.ShockwaveFlash').GetVariable('$version').replace(/\D+/g, ',').match(/^,?(.+),?$/)[1];}catch(e){try{if(navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin){return (navigator.plugins["Shockwave Flash 2.0"]||navigator.plugins["Shockwave Flash"]).description.replace(/\D+/g, ",").match(/^,?(.+),?$/)[1];}}catch(e){}}return '0,0,0';} 
function _Mba(f,a){return function(){f(a);};}
function _Med(u){var d=u.match(/:\/\/(www\.)?([^\/:]+)/);d=(d!=null&&d[2])?d[2]:'';return d;}
function _Meds(u){var d=u.match(/:\/\/(.[^/]+)/);if(d&&d[1]){d=d[1];var p=d.split('.');var l=p.length;if(l>2)d=p[l-2]+'.'+p[l-1];return d;}else return '';}
function _Mrw(d){if(d.substring(0,4)=='www.')d=d.substring(4,d.length);d=d.toLowerCase();return d;}
_Mev(window,"load",_Mload);setTimeout("_Mload()",2000);
