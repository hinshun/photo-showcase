/*! modernizr 3.1.0 (Custom Build) | MIT *
 * http://modernizr.com/download/?- !*/
!function(n,e,s){function o(n){var e=l.className,s=Modernizr._config.classPrefix||"";if(f&&(e=e.baseVal),Modernizr._config.enableJSClass){var o=new RegExp("(^|\\s)"+s+"no-js(\\s|$)");e=e.replace(o,"$1"+s+"js$2")}Modernizr._config.enableClasses&&(e+=" "+s+n.join(" "+s),f?l.className.baseVal=e:l.className=e)}function a(n,e){return typeof n===e}function i(){var n,e,s,o,i,l,f;for(var r in c){if(n=[],e=c[r],e.name&&(n.push(e.name.toLowerCase()),e.options&&e.options.aliases&&e.options.aliases.length))for(s=0;s<e.options.aliases.length;s++)n.push(e.options.aliases[s].toLowerCase());for(o=a(e.fn,"function")?e.fn():e.fn,i=0;i<n.length;i++)l=n[i],f=l.split("."),1===f.length?Modernizr[f[0]]=o:(!Modernizr[f[0]]||Modernizr[f[0]]instanceof Boolean||(Modernizr[f[0]]=new Boolean(Modernizr[f[0]])),Modernizr[f[0]][f[1]]=o),t.push((o?"":"no-")+f.join("-"))}}var t=[],l=e.documentElement,f="svg"===l.nodeName.toLowerCase(),c=[],r={_version:"3.1.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(n,e){var s=this;setTimeout(function(){e(s[n])},0)},addTest:function(n,e,s){c.push({name:n,fn:e,options:s})},addAsyncTest:function(n){c.push({name:null,fn:n})}},Modernizr=function(){};Modernizr.prototype=r,Modernizr=new Modernizr,i(),o(t),delete r.addTest,delete r.addAsyncTest;for(var u=0;u<Modernizr._q.length;u++)Modernizr._q[u]();n.Modernizr=Modernizr}(window,document);