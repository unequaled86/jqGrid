var $jscomp={scope:{},findInternal:function(a,b,d){a instanceof String&&(a=String(a));for(var e=a.length,f=0;f<e;f++){var k=a[f];if(b.call(d,k,f,a))return{i:f,v:k}}return{i:-1,v:void 0}}};$jscomp.defineProperty="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,d){if(d.get||d.set)throw new TypeError("ES3 does not support getters and setters.");a!=Array.prototype&&a!=Object.prototype&&(a[b]=d.value)};
$jscomp.getGlobal=function(a){return"undefined"!=typeof window&&window===a?a:"undefined"!=typeof global?global:a};$jscomp.global=$jscomp.getGlobal(this);$jscomp.polyfill=function(a,b,d,e){if(b){d=$jscomp.global;a=a.split(".");for(e=0;e<a.length-1;e++){var f=a[e];f in d||(d[f]={});d=d[f]}a=a[a.length-1];e=d[a];b=b(e);b!=e&&null!=b&&$jscomp.defineProperty(d,a,{configurable:!0,writable:!0,value:b})}};
$jscomp.polyfill("Array.prototype.find",function(a){return a?a:function(a,d){return $jscomp.findInternal(this,a,d).v}},"es6-impl","es3");
(function(a){"function"===typeof define&&define.amd?define(["jquery"],a):"object"===typeof exports?a(require("jquery")):a(jQuery)})(function(a){var b="mousedown",d="mousemove",e="mouseup",f=function(a){var c=a.originalEvent.targetTouches;return c?(c=c[0],{x:c.pageX,y:c.pageY}):{x:a.pageX,y:a.pageY}},k={drag:function(a){var c=a.data,d=c.e,b=c.dnr,q=c.ar,c=c.dnrAr;a=f(a);"move"===b.k?d.css({left:b.X+a.x-b.pX,top:b.Y+a.y-b.pY}):(d.css({width:Math.max(a.x-b.pX+b.W,0),height:Math.max(a.y-b.pY+b.H,0)}),
c&&q.css({width:Math.max(a.x-c.pX+c.W,0),height:Math.max(a.y-c.pY+c.H,0)}));return!1},stop:function(){a(document).off(d,k.drag).off(e,k.stop)}},m=function(g,c,m,p){return g.each(function(){c=c?a(c,g):g;c.on(b,{e:g,k:m},function(b){var c=b.data,g={},m,h,l=function(a,b){return parseInt(a.css(b),10)||!1},n=f(b);if(!a(b.target).hasClass("ui-jqdialog-titlebar-close")&&!a(b.target).parent().hasClass("ui-jqdialog-titlebar-close")){b=c.e;h=p?a(p):!1;if("relative"!==b.css("position"))try{b.position(g)}catch(r){}m=
{X:g.left||l(b,"left")||0,Y:g.top||l(b,"top")||0,W:l(b,"width")||b[0].scrollWidth||0,H:l(b,"height")||b[0].scrollHeight||0,pX:n.x,pY:n.y,k:c.k};g=h&&"move"!==c.k?{X:g.left||l(h,"left")||0,Y:g.top||l(h,"top")||0,W:h[0].offsetWidth||l(h,"width")||0,H:h[0].offsetHeight||l(h,"height")||0,pX:n.x,pY:n.y,k:c.k}:!1;c=b.find("input.hasDatepicker");if(0<c.length)try{c.datepicker("hide")}catch(r){}b={e:b,dnr:m,ar:h,dnrAr:g};a(document).on(d,b,k.drag);a(document).on(e,b,k.stop);return!1}})})};window.PointerEvent?
(b+=".jqGrid pointerdown.jqGrid",d+=".jqGrid pointermove.jqGrid",e+=".jqGrid pointerup.jqGrid"):window.MSPointerEvent?(b+=".jqGrid mspointerdown.jqGrid",d+=".jqGrid mspointermove.jqGrid",e+=".jqGrid mspointerup"):(b+=".jqGrid touchstart.jqGrid",d+=".jqGrid touchmove.jqGrid",e+=".jqGrid touchend.jqGrid");a.jqDnR=k;a.fn.jqDrag=function(a){return m(this,a,"move")};a.fn.jqResize=function(a,b){return m(this,a,"resize",b)}});
//# sourceMappingURL=jqdnr.map
