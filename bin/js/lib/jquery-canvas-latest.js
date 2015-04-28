/*
 jCanvas v14.11.25
 Copyright 2014 Caleb Evans
 Released under the MIT license
*/
(function(g,va,wa,Sa,ca,aa,u,A,h,p){function H(d){for(var c in d)d.hasOwnProperty(c)&&(this[c]=d[c]);return this}function ma(){Z(this,ma.baseDefaults)}function ia(d){return"string"===$(d)}function K(d){return d&&d.getContext?d.getContext("2d"):h}function ja(d){var c,a,b;for(c in d)d.hasOwnProperty(c)&&(b=d[c],a=$(b),"string"!==a||""===b||isNaN(b)||""===b||(d[c]=aa(b)));void 0!==d.text&&(d.text=String(d.text))}function ka(d){d=Z({},d);d.masks=d.masks.slice(0);return d}function ea(d,c){var a;d.save();
a=ka(c.transforms);c.savedTransforms.push(a)}function xa(d,c,a,b){a[b]&&(da(a[b])?c[b]=a[b].call(d,a):c[b]=a[b])}function S(d,c,a){xa(d,c,a,"fillStyle");xa(d,c,a,"strokeStyle");c.lineWidth=a.strokeWidth;a.rounded?c.lineCap=c.lineJoin="round":(c.lineCap=a.strokeCap,c.lineJoin=a.strokeJoin,c.miterLimit=a.miterLimit);a.strokeDash||(a.strokeDash=[]);c.setLineDash&&c.setLineDash(a.strokeDash);c.webkitLineDash=c.mozDash=a.strokeDash;c.lineDashOffset=c.webkitLineDashOffset=c.mozDashOffset=a.strokeDashOffset;
c.shadowOffsetX=a.shadowX;c.shadowOffsetY=a.shadowY;c.shadowBlur=a.shadowBlur;c.shadowColor=a.shadowColor;c.globalAlpha=a.opacity;c.globalCompositeOperation=a.compositing;a.imageSmoothing&&(c.webkitImageSmoothingEnabled=c.mozImageSmoothingEnabled=a.imageSmoothing)}function ya(d,c,a){a.mask&&(a.autosave&&ea(d,c),d.clip(),c.transforms.masks.push(a._args))}function V(d,c,a){a.closed&&c.closePath();a.shadowStroke&&0!==a.strokeWidth?(c.stroke(),c.fill(),c.shadowColor="transparent",c.shadowBlur=0,c.stroke()):
(c.fill(),"transparent"!==a.fillStyle&&(c.shadowColor="transparent"),0!==a.strokeWidth&&c.stroke());a.closed||c.closePath();a._transformed&&c.restore();a.mask&&(d=L(d),ya(c,d,a))}function R(d,c,a,b,f){a._toRad=a.inDegrees?D/180:1;a._transformed=u;c.save();a.fromCenter||a._centered||b===p||(f===p&&(f=b),a.x+=b/2,a.y+=f/2,a._centered=u);a.rotate&&za(c,a,h);1===a.scale&&1===a.scaleX&&1===a.scaleY||Aa(c,a,h);(a.translate||a.translateX||a.translateY)&&Ba(c,a,h)}function L(d){var c=ba.dataCache,a;c._canvas===
d&&c._data?a=c._data:(a=g.data(d,"jCanvas"),a||(a={canvas:d,layers:[],layer:{names:{},groups:{}},eventHooks:{},intersecting:[],lastIntersected:h,cursor:g(d).css("cursor"),drag:{layer:h,dragging:A},event:{type:h,x:h,y:h},events:{},transforms:ka(na),savedTransforms:[],animating:A,animated:h,pixelRatio:1,scaled:A},g.data(d,"jCanvas",a)),c._canvas=d,c._data=a);return a}function Ca(d,c,a){for(var b in X.events)X.events.hasOwnProperty(b)&&(a[b]||a.cursors&&a.cursors[b])&&Da(d,c,a,b);c.events.mouseout||
(d.bind("mouseout.jCanvas",function(){var a=c.drag.layer,b;a&&(c.drag={},P(d,c,a,"dragcancel"));for(b=0;b<c.layers.length;b+=1)a=c.layers[b],a._hovered&&d.triggerLayerEvent(c.layers[b],"mouseout");d.drawLayers()}),c.events.mouseout=u)}function Da(d,c,a,b){X.events[b](d,c);a._event=u}function Ea(d,c,a){var b,f,e;if(a.draggable||a.cursors){b=["mousedown","mousemove","mouseup"];for(e=0;e<b.length;e+=1)f=b[e],Da(d,c,a,f);a._event=u}}function oa(d,c,a,b){d=c.layer.names;b?b.name!==p&&ia(a.name)&&a.name!==
b.name&&delete d[a.name]:b=a;ia(b.name)&&(d[b.name]=a)}function pa(d,c,a,b){d=c.layer.groups;var f,e,k,g;if(!b)b=a;else if(b.groups!==p&&a.groups!==h)for(e=0;e<a.groups.length;e+=1)if(f=a.groups[e],c=d[f]){for(g=0;g<c.length;g+=1)if(c[g]===a){k=g;c.splice(g,1);break}0===c.length&&delete d[f]}if(b.groups!==p&&b.groups!==h)for(e=0;e<b.groups.length;e+=1)f=b.groups[e],c=d[f],c||(c=d[f]=[],c.name=f),k===p&&(k=c.length),c.splice(k,0,a)}function qa(d,c,a,b,f){b[a]&&c._running&&!c._running[a]&&(c._running[a]=
u,b[a].call(d[0],c,f),c._running[a]=A)}function P(d,c,a,b,f){if(!(a.disableEvents||a.intangible&&-1!==g.inArray(b,Ua))){if("mouseout"!==b){var e;a.cursors&&(e=a.cursors[b]);-1!==g.inArray(e,U.cursors)&&(e=U.prefix+e);e&&d.css({cursor:e})}qa(d,a,b,a,f);qa(d,a,b,c.eventHooks,f);qa(d,a,b,X.eventHooks,f)}}function O(d,c,a,b){var f,e=c._layer?a:c;c._args=a;if(c.draggable||c.dragGroups)c.layer=u,c.draggable=u;c._method=b?b:c.method?g.fn[c.method]:c.type?g.fn[W.drawings[c.type]]:function(){};if(c.layer&&
!c._layer){if(a=g(d),b=L(d),f=b.layers,e.name===h||ia(e.name)&&b.layer.names[e.name]===p)ja(c),e=new H(c),e.canvas=d,e.layer=u,e._layer=u,e._running={},e.data=e.data!==h?Z({},e.data):{},e.groups=e.groups!==h?e.groups.slice(0):[],oa(a,b,e),pa(a,b,e),Ca(a,b,e),Ea(a,b,e),c._event=e._event,e._method===g.fn.drawText&&a.measureText(e),e.index===h&&(e.index=f.length),f.splice(e.index,0,e),c._args=e,P(a,b,e,"add")}else c.layer||ja(c);return e}function Fa(d,c){var a,b;for(b=0;b<U.props.length;b+=1)a=U.props[b],
d[a]!==p&&(d["_"+a]=d[a],U.propsObj[a]=u,c&&delete d[a])}function Va(d,c,a){var b,f,e,k;for(b in a)if(a.hasOwnProperty(b)&&(f=a[b],da(f)&&(a[b]=f.call(d,c,b)),"object"===$(f)&&Ga(f))){for(e in f)f.hasOwnProperty(e)&&(k=f[e],c[b]!==p&&(c[b+"."+e]=c[b][e],a[b+"."+e]=k));delete a[b]}return a}function Ha(d){var c,a,b=[],f=1;d.match(/^([a-z]+|#[0-9a-f]+)$/gi)&&("transparent"===d&&(d="rgba(0, 0, 0, 0)"),a=va.head,c=a.style.color,a.style.color=d,d=g.css(a,"color"),a.style.color=c);d.match(/^rgb/gi)&&(b=
d.match(/(\d+(\.\d+)?)/gi),d.match(/%/gi)&&(f=2.55),b[0]*=f,b[1]*=f,b[2]*=f,b[3]=b[3]!==p?aa(b[3]):1);return b}function Wa(d){var c=3,a;"array"!==$(d.start)&&(d.start=Ha(d.start),d.end=Ha(d.end));d.now=[];if(1!==d.start[3]||1!==d.end[3])c=4;for(a=0;a<c;a+=1)d.now[a]=d.start[a]+(d.end[a]-d.start[a])*d.pos,3>a&&(d.now[a]=Xa(d.now[a]));1!==d.start[3]||1!==d.end[3]?d.now="rgba( "+d.now.join(",")+" )":(d.now.slice(0,3),d.now="rgb( "+d.now.join(",")+" )");d.elem.nodeName?d.elem.style[d.prop]=d.now:d.elem[d.prop]=
d.now}function Ya(d){W.touchEvents[d]&&(d=W.touchEvents[d]);return d}function Za(d){X.events[d]=function(c,a){function b(a){k.x=a.offsetX;k.y=a.offsetY;k.type=f;k.event=a;c.drawLayers({resetFire:u});a.preventDefault()}var f,e,k;k=a.event;f="mouseover"===d||"mouseout"===d?"mousemove":d;e=Ya(f);a.events[f]||(e!==f?c.bind(f+".jCanvas "+e+".jCanvas",b):c.bind(f+".jCanvas",b),a.events[f]=u)}}function T(d,c,a){var b,f,e,k;if(a=a._args)d=L(d),b=d.event,b.x!==h&&b.y!==h&&(e=b.x*d.pixelRatio,k=b.y*d.pixelRatio,
f=c.isPointInPath(e,k)||c.isPointInStroke&&c.isPointInStroke(e,k)),c=d.transforms,a.eventX=b.x,a.eventY=b.y,a.event=b.event,b=d.transforms.rotate,e=a.eventX,k=a.eventY,0!==b?(a._eventX=e*N(-b)-k*Q(-b),a._eventY=k*N(-b)+e*Q(-b)):(a._eventX=e,a._eventY=k),a._eventX/=c.scaleX,a._eventY/=c.scaleY,f&&d.intersecting.push(a),a.intersects=!!f}function za(d,c,a){c._toRad=c.inDegrees?D/180:1;d.translate(c.x,c.y);d.rotate(c.rotate*c._toRad);d.translate(-c.x,-c.y);a&&(a.rotate+=c.rotate*c._toRad)}function Aa(d,
c,a){1!==c.scale&&(c.scaleX=c.scaleY=c.scale);d.translate(c.x,c.y);d.scale(c.scaleX,c.scaleY);d.translate(-c.x,-c.y);a&&(a.scaleX*=c.scaleX,a.scaleY*=c.scaleY)}function Ba(d,c,a){c.translate&&(c.translateX=c.translateY=c.translate);d.translate(c.translateX,c.translateY);a&&(a.translateX+=c.translateX,a.translateY+=c.translateY)}function Ia(d){for(;0>d;)d+=2*D;return d}function Ja(d,c,a,b){var f,e,k,g,x,w,z;a===b?z=w=0:(w=a.x,z=a.y);b.inDegrees||360!==b.end||(b.end=2*D);b.start*=a._toRad;b.end*=a._toRad;
b.start-=D/2;b.end-=D/2;x=D/180;b.ccw&&(x*=-1);f=b.x+b.radius*N(b.start+x);e=b.y+b.radius*Q(b.start+x);k=b.x+b.radius*N(b.start);g=b.y+b.radius*Q(b.start);fa(d,c,a,b,f,e,k,g);c.arc(b.x+w,b.y+z,b.radius,b.start,b.end,b.ccw);f=b.x+b.radius*N(b.end+x);x=b.y+b.radius*Q(b.end+x);e=b.x+b.radius*N(b.end);k=b.y+b.radius*Q(b.end);ga(d,c,a,b,e,k,f,x)}function Ka(d,c,a,b,f,e,k,g){var x,w;b.arrowRadius&&!a.closed&&(w=$a(g-e,k-f),w-=D,d=a.strokeWidth*N(w),x=a.strokeWidth*Q(w),a=k+b.arrowRadius*N(w+b.arrowAngle/
2),f=g+b.arrowRadius*Q(w+b.arrowAngle/2),e=k+b.arrowRadius*N(w-b.arrowAngle/2),b=g+b.arrowRadius*Q(w-b.arrowAngle/2),c.moveTo(a-d,f-x),c.lineTo(k-d,g-x),c.lineTo(e-d,b-x),c.moveTo(k-d,g-x),c.lineTo(k+d,g+x),c.moveTo(k,g))}function fa(d,c,a,b,f,e,k,g){b._arrowAngleConverted||(b.arrowAngle*=a._toRad,b._arrowAngleConverted=u);b.startArrow&&Ka(d,c,a,b,f,e,k,g)}function ga(d,c,a,b,f,e,k,g){b._arrowAngleConverted||(b.arrowAngle*=a._toRad,b._arrowAngleConverted=u);b.endArrow&&Ka(d,c,a,b,f,e,k,g)}function La(d,
c,a,b){var f,e,k;f=2;fa(d,c,a,b,b.x2+a.x,b.y2+a.y,b.x1+a.x,b.y1+a.y);for(b.x1!==p&&b.y1!==p&&c.moveTo(b.x1+a.x,b.y1+a.y);u;)if(e=b["x"+f],k=b["y"+f],e!==p&&k!==p)c.lineTo(e+a.x,k+a.y),f+=1;else break;f-=1;ga(d,c,a,b,b["x"+(f-1)]+a.x,b["y"+(f-1)]+a.y,b["x"+f]+a.x,b["y"+f]+a.y)}function Ma(d,c,a,b){var f,e,k,g,x;f=2;fa(d,c,a,b,b.cx1+a.x,b.cy1+a.y,b.x1+a.x,b.y1+a.y);for(b.x1!==p&&b.y1!==p&&c.moveTo(b.x1+a.x,b.y1+a.y);u;)if(e=b["x"+f],k=b["y"+f],g=b["cx"+(f-1)],x=b["cy"+(f-1)],e!==p&&k!==p&&g!==p&&x!==
p)c.quadraticCurveTo(g+a.x,x+a.y,e+a.x,k+a.y),f+=1;else break;f-=1;ga(d,c,a,b,b["cx"+(f-1)]+a.x,b["cy"+(f-1)]+a.y,b["x"+f]+a.x,b["y"+f]+a.y)}function Na(d,c,a,b){var f,e,k,g,x,w,z,h;f=2;e=1;fa(d,c,a,b,b.cx1+a.x,b.cy1+a.y,b.x1+a.x,b.y1+a.y);for(b.x1!==p&&b.y1!==p&&c.moveTo(b.x1+a.x,b.y1+a.y);u;)if(k=b["x"+f],g=b["y"+f],x=b["cx"+e],w=b["cy"+e],z=b["cx"+(e+1)],h=b["cy"+(e+1)],k!==p&&g!==p&&x!==p&&w!==p&&z!==p&&h!==p)c.bezierCurveTo(x+a.x,w+a.y,z+a.x,h+a.y,k+a.x,g+a.y),f+=1,e+=2;else break;f-=1;e-=2;
ga(d,c,a,b,b["cx"+(e+1)]+a.x,b["cy"+(e+1)]+a.y,b["x"+f]+a.x,b["y"+f]+a.y)}function Oa(d,c,a){c*=d._toRad;c-=D/2;return a*N(c)}function Pa(d,c,a){c*=d._toRad;c-=D/2;return a*Q(c)}function Qa(d,c,a,b){var f,e,k,g,x,h,z;a===b?x=g=0:(g=a.x,x=a.y);f=1;e=g=h=b.x+g;k=x=z=b.y+x;fa(d,c,a,b,e+Oa(a,b.a1,b.l1),k+Pa(a,b.a1,b.l1),e,k);for(b.x!==p&&b.y!==p&&c.moveTo(e,k);u;)if(e=b["a"+f],k=b["l"+f],e!==p&&k!==p)g=h,x=z,h+=Oa(a,e,k),z+=Pa(a,e,k),c.lineTo(h,z),f+=1;else break;ga(d,c,a,b,g,x,h,z)}function ra(d,c,a){isNaN(Number(a.fontSize))||
(a.fontSize+="px");c.font=a.fontStyle+" "+a.fontSize+" "+a.fontFamily}function sa(d,c,a,b){var f,e;f=ba.propCache;if(f.text===a.text&&f.fontStyle===a.fontStyle&&f.fontSize===a.fontSize&&f.fontFamily===a.fontFamily&&f.maxWidth===a.maxWidth&&f.lineHeight===a.lineHeight)a.width=f.width,a.height=f.height;else{a.width=c.measureText(b[0]).width;for(e=1;e<b.length;e+=1)f=c.measureText(b[e]).width,f>a.width&&(a.width=f);c=d.style.fontSize;d.style.fontSize=a.fontSize;a.height=aa(g.css(d,"fontSize"))*b.length*
a.lineHeight;d.style.fontSize=c}}function Ra(d,c){var a=c.maxWidth,b=c.text.split("\n"),f=[],e,k,g,h,w;for(g=0;g<b.length;g+=1){h=b[g];w=h.split(" ");e=[];k="";if(1===w.length||d.measureText(h).width<a)e=[h];else{for(h=0;h<w.length;h+=1)d.measureText(k+w[h]).width>a&&(""!==k&&e.push(k),k=""),k+=w[h],h!==w.length-1&&(k+=" ");e.push(k)}f=f.concat(e.join("\n").replace(/( (\n))|( $)/gi,"$2").split("\n"))}return f}var la,Z=g.extend,ha=g.inArray,$=g.type,da=g.isFunction,Ga=g.isPlainObject,D=ca.PI,Xa=ca.round,
ab=ca.abs,Q=ca.sin,N=ca.cos,$a=ca.atan2,ta=Sa.prototype.slice,bb=g.event.fix,W={},ba={dataCache:{},propCache:{},imageCache:{}},na={rotate:0,scaleX:1,scaleY:1,translateX:0,translateY:0,masks:[]},U={},Ua="mousedown mousemove mouseup mouseover mouseout touchstart touchmove touchend".split(" "),X={events:{},eventHooks:{},future:{}};ma.baseDefaults={align:"center",arrowAngle:90,arrowRadius:0,autosave:u,baseline:"middle",bringToFront:A,ccw:A,closed:A,compositing:"source-over",concavity:0,cornerRadius:0,
count:1,cropFromCenter:u,crossOrigin:h,cursors:h,disableEvents:A,draggable:A,dragGroups:h,groups:h,data:h,dx:h,dy:h,end:360,eventX:h,eventY:h,fillStyle:"transparent",fontStyle:"normal",fontSize:"12pt",fontFamily:"sans-serif",fromCenter:u,height:h,imageSmoothing:u,inDegrees:u,intangible:A,index:h,letterSpacing:h,lineHeight:1,layer:A,mask:A,maxWidth:h,miterLimit:10,name:h,opacity:1,r1:h,r2:h,radius:0,repeat:"repeat",respectAlign:A,rotate:0,rounded:A,scale:1,scaleX:1,scaleY:1,shadowBlur:0,shadowColor:"transparent",
shadowStroke:A,shadowX:0,shadowY:0,sHeight:h,sides:0,source:"",spread:0,start:0,strokeCap:"butt",strokeDash:h,strokeDashOffset:0,strokeJoin:"miter",strokeStyle:"transparent",strokeWidth:1,sWidth:h,sx:h,sy:h,text:"",translate:0,translateX:0,translateY:0,type:h,visible:u,width:h,x:0,y:0};la=new ma;H.prototype=la;X.extend=function(d){d.name&&(d.props&&Z(la,d.props),g.fn[d.name]=function a(b){var f,e,k,g;for(e=0;e<this.length;e+=1)if(f=this[e],k=K(f))g=new H(b),O(f,g,b,a),S(f,k,g),d.fn.call(f,k,g);return this},
d.type&&(W.drawings[d.type]=d.name));return g.fn[d.name]};g.fn.getEventHooks=function(){var d;d={};0!==this.length&&(d=this[0],d=L(d),d=d.eventHooks);return d};g.fn.setEventHooks=function(d){var c,a;for(c=0;c<this.length;c+=1)g(this[c]),a=L(this[c]),Z(a.eventHooks,d);return this};g.fn.getLayers=function(d){var c,a,b,f,e=[];if(0!==this.length)if(c=this[0],a=L(c),a=a.layers,da(d))for(f=0;f<a.length;f+=1)b=a[f],d.call(c,b)&&e.push(b);else e=a;return e};g.fn.getLayer=function(d){var c,a,b,f;if(0!==this.length)if(c=
this[0],a=L(c),c=a.layers,f=$(d),d&&d.layer)b=d;else if("number"===f)0>d&&(d=c.length+d),b=c[d];else if("regexp"===f)for(a=0;a<c.length;a+=1){if(ia(c[a].name)&&c[a].name.match(d)){b=c[a];break}}else b=a.layer.names[d];return b};g.fn.getLayerGroup=function(d){var c,a,b,f=$(d);if(0!==this.length)if(c=this[0],"array"===f)b=d;else if("regexp"===f)for(a in c=L(c),c=c.layer.groups,c){if(a.match(d)){b=c[a];break}}else c=L(c),b=c.layer.groups[d];return b};g.fn.getLayerIndex=function(d){var c=this.getLayers();
d=this.getLayer(d);return ha(d,c)};g.fn.setLayer=function(d,c){var a,b,f,e,k,h,x;for(b=0;b<this.length;b+=1)if(a=g(this[b]),f=L(this[b]),e=g(this[b]).getLayer(d)){oa(a,f,e,c);pa(a,f,e,c);ja(c);for(k in c)c.hasOwnProperty(k)&&(h=c[k],x=$(h),"object"===x&&Ga(h)?(e[k]=Z({},h),ja(e[k])):"array"===x?e[k]=h.slice(0):"string"===x?0===h.indexOf("+=")?e[k]+=aa(h.substr(2)):0===h.indexOf("-=")?e[k]-=aa(h.substr(2)):isNaN(h)||""===h?e[k]=h:e[k]=aa(h):e[k]=h);Ca(a,f,e);Ea(a,f,e);g.isEmptyObject(c)===A&&P(a,f,
e,"change",c)}return this};g.fn.setLayers=function(d,c){var a,b,f,e;for(b=0;b<this.length;b+=1)for(a=g(this[b]),f=a.getLayers(c),e=0;e<f.length;e+=1)a.setLayer(f[e],d);return this};g.fn.setLayerGroup=function(d,c){var a,b,f,e;for(b=0;b<this.length;b+=1)if(a=g(this[b]),f=a.getLayerGroup(d))for(e=0;e<f.length;e+=1)a.setLayer(f[e],c);return this};g.fn.moveLayer=function(d,c){var a,b,f,e,k;for(b=0;b<this.length;b+=1)if(a=g(this[b]),f=L(this[b]),e=f.layers,k=a.getLayer(d))k.index=ha(k,e),e.splice(k.index,
1),e.splice(c,0,k),0>c&&(c=e.length+c),k.index=c,P(a,f,k,"move");return this};g.fn.removeLayer=function(d){var c,a,b,f,e;for(a=0;a<this.length;a+=1)if(c=g(this[a]),b=L(this[a]),f=c.getLayers(),e=c.getLayer(d))e.index=ha(e,f),f.splice(e.index,1),oa(c,b,e,{name:h}),pa(c,b,e,{groups:h}),P(c,b,e,"remove");return this};g.fn.removeLayers=function(d){var c,a,b,f,e,k;for(a=0;a<this.length;a+=1){c=g(this[a]);b=L(this[a]);f=c.getLayers(d);for(k=0;k<f.length;k+=1)e=f[k],c.removeLayer(e),k-=1;b.layer.names={};
b.layer.groups={}}return this};g.fn.removeLayerGroup=function(d){var c,a,b,f;if(d!==p)for(a=0;a<this.length;a+=1)if(c=g(this[a]),L(this[a]),c.getLayers(),b=c.getLayerGroup(d))for(b=b.slice(0),f=0;f<b.length;f+=1)c.removeLayer(b[f]);return this};g.fn.addLayerToGroup=function(d,c){var a,b,f,e=[c];for(b=0;b<this.length;b+=1)a=g(this[b]),f=a.getLayer(d),f.groups&&(e=f.groups.slice(0),-1===ha(c,f.groups)&&e.push(c)),a.setLayer(f,{groups:e});return this};g.fn.removeLayerFromGroup=function(d,c){var a,b,
f,e=[],k;for(b=0;b<this.length;b+=1)a=g(this[b]),f=a.getLayer(d),f.groups&&(k=ha(c,f.groups),-1!==k&&(e=f.groups.slice(0),e.splice(k,1),a.setLayer(f,{groups:e})));return this};U.cursors=["grab","grabbing","zoom-in","zoom-out"];U.prefix=function(){var d=getComputedStyle(va.documentElement,"");return"-"+(ta.call(d).join("").match(/-(moz|webkit|ms)-/)||""===d.OLink&&["","o"])[1]+"-"}();g.fn.triggerLayerEvent=function(d,c){var a,b,f;for(b=0;b<this.length;b+=1)a=g(this[b]),f=L(this[b]),(d=a.getLayer(d))&&
P(a,f,d,c);return this};g.fn.drawLayer=function(d){var c,a,b;for(c=0;c<this.length;c+=1)b=g(this[c]),(a=K(this[c]))&&(a=b.getLayer(d))&&a.visible&&a._method&&(a._next=h,a._method.call(b,a));return this};g.fn.drawLayers=function(d){var c,a,b=d||{},f,e,k,p,x,w,z,J;(p=b.index)||(p=0);for(c=0;c<this.length;c+=1)if(d=g(this[c]),a=K(this[c])){x=L(this[c]);b.clear!==A&&d.clearCanvas();a=x.layers;for(k=p;k<a.length;k+=1)if(f=a[k],f.index=k,b.resetFire&&(f._fired=A),w=d,z=f,e=k+1,z&&z.visible&&z._method&&
(z._next=e?e:h,z._method.call(w,z)),f._masks=x.transforms.masks.slice(0),f._method===g.fn.drawImage&&f.visible){J=!0;break}if(J)break;f=x;var y=e=z=w=void 0;w=h;for(z=f.intersecting.length-1;0<=z;z-=1)if(w=f.intersecting[z],w._masks){for(y=w._masks.length-1;0<=y;y-=1)if(e=w._masks[y],!e.intersects){w.intersects=A;break}if(w.intersects&&!w.intangible)break}w&&w.intangible&&(w=h);f=w;w=x.event;z=w.type;if(x.drag.layer){e=d;var y=x,G=z,t=void 0,q=void 0,m=void 0,B=m=void 0,F=void 0,m=t=t=m=void 0,m=
y.drag,B=(q=m.layer)&&q.dragGroups||[],t=y.layers;if("mousemove"===G||"touchmove"===G){if(m.dragging||(m.dragging=u,q.dragging=u,q.bringToFront&&(t.splice(q.index,1),q.index=t.push(q)),q._startX=q.x,q._startY=q.y,q._endX=q._eventX,q._endY=q._eventY,P(e,y,q,"dragstart")),m.dragging)for(t=q._eventX-(q._endX-q._startX),m=q._eventY-(q._endY-q._startY),q.dx=t-q.x,q.dy=m-q.y,q.x=t,q.y=m,P(e,y,q,"drag"),t=0;t<B.length;t+=1)if(m=B[t],F=y.layer.groups[m],q.groups&&F)for(m=0;m<F.length;m+=1)F[m]!==q&&(F[m].x+=
q.dx,F[m].y+=q.dy)}else if("mouseup"===G||"touchend"===G)m.dragging&&(q.dragging=A,m.dragging=A,P(e,y,q,"dragstop")),y.drag={}}e=x.lastIntersected;e===h||f===e||!e._hovered||e._fired||x.drag.dragging||(x.lastIntersected=h,e._fired=u,e._hovered=A,P(d,x,e,"mouseout"),d.css({cursor:x.cursor}));f&&(f[z]||W.mouseEvents[z]&&(z=W.mouseEvents[z]),f._event&&f.intersects&&(x.lastIntersected=f,!(f.mouseover||f.mouseout||f.cursors)||x.drag.dragging||f._hovered||f._fired||(f._fired=u,f._hovered=u,P(d,x,f,"mouseover")),
f._fired||(f._fired=u,w.type=h,P(d,x,f,z)),!f.draggable||f.disableEvents||"mousedown"!==z&&"touchstart"!==z||(x.drag.layer=f)));f!==h||x.drag.dragging||d.css({cursor:x.cursor});k===a.length&&(x.intersecting.length=0,x.transforms=ka(na),x.savedTransforms.length=0)}return this};g.fn.addLayer=function(d){var c,a;for(c=0;c<this.length;c+=1)if(a=K(this[c]))a=new H(d),a.layer=u,O(this[c],a,d);return this};U.props=["width","height","opacity","lineHeight"];U.propsObj={};g.fn.animateLayer=function(){function d(a,
b,c){return function(){var d,f;for(f=0;f<U.props.length;f+=1)d=U.props[f],c[d]=c["_"+d];for(var k in c)c.hasOwnProperty(k)&&-1!==k.indexOf(".")&&delete c[k];b.animating&&b.animated!==c||a.drawLayers();c._animating=A;b.animating=A;b.animated=h;e[4]&&e[4].call(a[0],c);P(a,b,c,"animateend")}}function c(a,b,c){return function(d,f){var k,g,h=!1;"_"===f.prop[0]&&(h=!0,f.prop=f.prop.replace("_",""),c[f.prop]=c["_"+f.prop]);-1!==f.prop.indexOf(".")&&(k=f.prop.split("."),g=k[0],k=k[1],c[g]&&(c[g][k]=f.now));
c._pos!==f.pos&&(c._pos=f.pos,c._animating||b.animating||(c._animating=u,b.animating=u,b.animated=c),b.animating&&b.animated!==c||a.drawLayers());e[5]&&e[5].call(a[0],d,f,c);P(a,b,c,"animate",f);h&&(f.prop="_"+f.prop)}}var a,b,f,e=ta.call(arguments,0),k,H;"object"===$(e[2])?(e.splice(2,0,e[2].duration||h),e.splice(3,0,e[3].easing||h),e.splice(4,0,e[4].complete||h),e.splice(5,0,e[5].step||h)):(e[2]===p?(e.splice(2,0,h),e.splice(3,0,h),e.splice(4,0,h)):da(e[2])&&(e.splice(2,0,h),e.splice(3,0,h)),e[3]===
p?(e[3]=h,e.splice(4,0,h)):da(e[3])&&e.splice(3,0,h));for(b=0;b<this.length;b+=1)if(a=g(this[b]),f=K(this[b]))f=L(this[b]),(k=a.getLayer(e[0]))&&k._method!==g.fn.draw&&(H=Z({},e[1]),H=Va(this[b],k,H),Fa(H,u),Fa(k),k.style=U.propsObj,g(k).animate(H,{duration:e[2],easing:g.easing[e[3]]?e[3]:h,complete:d(a,f,k),step:c(a,f,k)}),P(a,f,k,"animatestart"));return this};g.fn.animateLayerGroup=function(d){var c,a,b=ta.call(arguments,0),f,e;for(a=0;a<this.length;a+=1)if(c=g(this[a]),f=c.getLayerGroup(d))for(e=
0;e<f.length;e+=1)b[0]=f[e],c.animateLayer.apply(c,b);return this};g.fn.delayLayer=function(d,c){var a,b,f,e;c=c||0;for(b=0;b<this.length;b+=1)if(a=g(this[b]),f=L(this[b]),e=a.getLayer(d))g(e).delay(c),P(a,f,e,"delay");return this};g.fn.delayLayerGroup=function(d,c){var a,b,f,e,k;c=c||0;for(b=0;b<this.length;b+=1)if(a=g(this[b]),f=a.getLayerGroup(d))for(k=0;k<f.length;k+=1)e=f[k],a.delayLayer(e,c);return this};g.fn.stopLayer=function(d,c){var a,b,f,e;for(b=0;b<this.length;b+=1)if(a=g(this[b]),f=L(this[b]),
e=a.getLayer(d))g(e).stop(c),P(a,f,e,"stop");return this};g.fn.stopLayerGroup=function(d,c){var a,b,f,e,k;for(b=0;b<this.length;b+=1)if(a=g(this[b]),f=a.getLayerGroup(d))for(k=0;k<f.length;k+=1)e=f[k],a.stopLayer(e,c);return this};(function(d){var c;for(c=0;c<d.length;c+=1)g.fx.step[d[c]]=Wa})("color backgroundColor borderColor borderTopColor borderRightColor borderBottomColor borderLeftColor fillStyle outlineColor strokeStyle shadowColor".split(" "));W.touchEvents={mousedown:"touchstart",mouseup:"touchend",
mousemove:"touchmove"};W.mouseEvents={touchstart:"mousedown",touchend:"mouseup",touchmove:"mousemove"};(function(d){var c;for(c=0;c<d.length;c+=1)Za(d[c])})("click dblclick mousedown mouseup mousemove mouseover mouseout touchstart touchmove touchend".split(" "));g.event.fix=function(d){var c,a;d=bb.call(g.event,d);if(c=d.originalEvent)if(a=c.changedTouches,d.pageX!==p&&d.offsetX===p){if(c=g(d.currentTarget).offset())d.offsetX=d.pageX-c.left,d.offsetY=d.pageY-c.top}else a&&(c=g(d.currentTarget).offset())&&
(d.offsetX=a[0].pageX-c.left,d.offsetY=a[0].pageY-c.top);return d};W.drawings={arc:"drawArc",bezier:"drawBezier",ellipse:"drawEllipse","function":"draw",image:"drawImage",line:"drawLine",path:"drawPath",polygon:"drawPolygon",slice:"drawSlice",quadratic:"drawQuadratic",rectangle:"drawRect",text:"drawText",vector:"drawVector",save:"saveCanvas",restore:"restoreCanvas",rotate:"rotateCanvas",scale:"scaleCanvas",translate:"translateCanvas"};g.fn.draw=function c(a){var b,f,e=new H(a);if(W.drawings[e.type]&&
"function"!==e.type)this[W.drawings[e.type]](a);else for(b=0;b<this.length;b+=1)if(g(this[b]),f=K(this[b]))e=new H(a),O(this[b],e,a,c),e.visible&&e.fn&&e.fn.call(this[b],f,e);return this};g.fn.clearCanvas=function a(b){var f,e,k=new H(b);for(f=0;f<this.length;f+=1)if(e=K(this[f]))k.width===h||k.height===h?(e.save(),e.setTransform(1,0,0,1,0,0),e.clearRect(0,0,this[f].width,this[f].height),e.restore()):(O(this[f],k,b,a),R(this[f],e,k,k.width,k.height),e.clearRect(k.x-k.width/2,k.y-k.height/2,k.width,
k.height),k._transformed&&e.restore());return this};g.fn.saveCanvas=function b(f){var e,k,g,h,w;for(e=0;e<this.length;e+=1)if(k=K(this[e]))for(h=L(this[e]),g=new H(f),O(this[e],g,f,b),w=0;w<g.count;w+=1)ea(k,h);return this};g.fn.restoreCanvas=function f(e){var k,g,h,w,z;for(k=0;k<this.length;k+=1)if(g=K(this[k]))for(w=L(this[k]),h=new H(e),O(this[k],h,e,f),z=0;z<h.count;z+=1){var J=g,y=w;0===y.savedTransforms.length?y.transforms=ka(na):(J.restore(),y.transforms=y.savedTransforms.pop())}return this};
g.fn.rotateCanvas=function e(k){var g,h,w,z;for(g=0;g<this.length;g+=1)if(h=K(this[g]))z=L(this[g]),w=new H(k),O(this[g],w,k,e),w.autosave&&ea(h,z),za(h,w,z.transforms);return this};g.fn.scaleCanvas=function k(g){var h,w,z,J;for(h=0;h<this.length;h+=1)if(w=K(this[h]))J=L(this[h]),z=new H(g),O(this[h],z,g,k),z.autosave&&ea(w,J),Aa(w,z,J.transforms);return this};g.fn.translateCanvas=function Ta(g){var h,z,J,y;for(h=0;h<this.length;h+=1)if(z=K(this[h]))y=L(this[h]),J=new H(g),O(this[h],J,g,Ta),J.autosave&&
ea(z,y),Ba(z,J,y.transforms);return this};g.fn.drawRect=function x(g){var h,J,y,G,t,q,m,B,F;for(h=0;h<this.length;h+=1)if(J=K(this[h]))y=new H(g),O(this[h],y,g,x),y.visible&&(S(this[h],J,y),R(this[h],J,y,y.width,y.height),J.beginPath(),y.width&&y.height&&(G=y.x-y.width/2,t=y.y-y.height/2,(B=ab(y.cornerRadius))?(q=y.x+y.width/2,m=y.y+y.height/2,0>y.width&&(F=G,G=q,q=F),0>y.height&&(F=t,t=m,m=F),0>q-G-2*B&&(B=(q-G)/2),0>m-t-2*B&&(B=(m-t)/2),J.moveTo(G+B,t),J.lineTo(q-B,t),J.arc(q-B,t+B,B,3*D/2,2*D,
A),J.lineTo(q,m-B),J.arc(q-B,m-B,B,0,D/2,A),J.lineTo(G+B,m),J.arc(G+B,m-B,B,D/2,D,A),J.lineTo(G,t+B),J.arc(G+B,t+B,B,D,3*D/2,A),y.closed=u):J.rect(G,t,y.width,y.height)),T(this[h],J,y),V(this[h],J,y));return this};g.fn.drawArc=function w(g){var h,y,G;for(h=0;h<this.length;h+=1)if(y=K(this[h]))G=new H(g),O(this[h],G,g,w),G.visible&&(S(this[h],y,G),R(this[h],y,G,2*G.radius),y.beginPath(),Ja(this[h],y,G,G),T(this[h],y,G),V(this[h],y,G));return this};g.fn.drawEllipse=function z(g){var h,G,t,q,m;for(h=
0;h<this.length;h+=1)if(G=K(this[h]))t=new H(g),O(this[h],t,g,z),t.visible&&(S(this[h],G,t),R(this[h],G,t,t.width,t.height),q=4/3*t.width,m=t.height,G.beginPath(),G.moveTo(t.x,t.y-m/2),G.bezierCurveTo(t.x-q/2,t.y-m/2,t.x-q/2,t.y+m/2,t.x,t.y+m/2),G.bezierCurveTo(t.x+q/2,t.y+m/2,t.x+q/2,t.y-m/2,t.x,t.y-m/2),T(this[h],G,t),t.closed=u,V(this[h],G,t));return this};g.fn.drawPolygon=function J(g){var h,t,q,m,B,F,M,v,n,l;for(h=0;h<this.length;h+=1)if(t=K(this[h]))if(q=new H(g),O(this[h],q,g,J),q.visible){S(this[h],
t,q);R(this[h],t,q,2*q.radius);B=2*D/q.sides;F=B/2;m=F+D/2;M=q.radius*N(F);t.beginPath();for(l=0;l<q.sides;l+=1)v=q.x+q.radius*N(m),n=q.y+q.radius*Q(m),t.lineTo(v,n),q.concavity&&(v=q.x+(M+-M*q.concavity)*N(m+F),n=q.y+(M+-M*q.concavity)*Q(m+F),t.lineTo(v,n)),m+=B;T(this[h],t,q);q.closed=u;V(this[h],t,q)}return this};g.fn.drawSlice=function y(h){var t,q,m,B,F;for(t=0;t<this.length;t+=1)if(g(this[t]),q=K(this[t]))m=new H(h),O(this[t],m,h,y),m.visible&&(S(this[t],q,m),R(this[t],q,m,2*m.radius),m.start*=
m._toRad,m.end*=m._toRad,m.start-=D/2,m.end-=D/2,m.start=Ia(m.start),m.end=Ia(m.end),m.end<m.start&&(m.end+=2*D),B=(m.start+m.end)/2,F=m.radius*m.spread*N(B),B=m.radius*m.spread*Q(B),m.x+=F,m.y+=B,q.beginPath(),q.arc(m.x,m.y,m.radius,m.start,m.end,m.ccw),q.lineTo(m.x,m.y),T(this[t],q,m),m.closed=u,V(this[t],q,m));return this};g.fn.drawLine=function G(h){var g,m,B;for(g=0;g<this.length;g+=1)if(m=K(this[g]))B=new H(h),O(this[g],B,h,G),B.visible&&(S(this[g],m,B),R(this[g],m,B),m.beginPath(),La(this[g],
m,B,B),T(this[g],m,B),V(this[g],m,B));return this};g.fn.drawQuadratic=function t(h){var g,B,F;for(g=0;g<this.length;g+=1)if(B=K(this[g]))F=new H(h),O(this[g],F,h,t),F.visible&&(S(this[g],B,F),R(this[g],B,F),B.beginPath(),Ma(this[g],B,F,F),T(this[g],B,F),V(this[g],B,F));return this};g.fn.drawBezier=function q(g){var h,F,M;for(h=0;h<this.length;h+=1)if(F=K(this[h]))M=new H(g),O(this[h],M,g,q),M.visible&&(S(this[h],F,M),R(this[h],F,M),F.beginPath(),Na(this[h],F,M,M),T(this[h],F,M),V(this[h],F,M));return this};
g.fn.drawVector=function m(h){var g,M,v;for(g=0;g<this.length;g+=1)if(M=K(this[g]))v=new H(h),O(this[g],v,h,m),v.visible&&(S(this[g],M,v),R(this[g],M,v),M.beginPath(),Qa(this[g],M,v,v),T(this[g],M,v),V(this[g],M,v));return this};g.fn.drawPath=function B(g){var h,v,n,l,C;for(h=0;h<this.length;h+=1)if(v=K(this[h]))if(n=new H(g),O(this[h],n,g,B),n.visible){S(this[h],v,n);R(this[h],v,n);v.beginPath();for(l=1;u;)if(C=n["p"+l],C!==p)C=new H(C),"line"===C.type?La(this[h],v,n,C):"quadratic"===C.type?Ma(this[h],
v,n,C):"bezier"===C.type?Na(this[h],v,n,C):"vector"===C.type?Qa(this[h],v,n,C):"arc"===C.type&&Ja(this[h],v,n,C),l+=1;else break;T(this[h],v,n);V(this[h],v,n)}return this};g.fn.drawText=function F(M){var v,n,l,C,Y,s,E,p,u,A;for(v=0;v<this.length;v+=1)if(g(this[v]),n=K(this[v]))if(l=new H(M),C=O(this[v],l,M,F),l.visible){S(this[v],n,l);n.textBaseline=l.baseline;n.textAlign=l.align;ra(this[v],n,l);Y=l.maxWidth!==h?Ra(n,l):l.text.toString().split("\n");sa(this[v],n,l,Y);C&&(C.width=l.width,C.height=
l.height);R(this[v],n,l,l.width,l.height);E=l.x;"left"===l.align?l.respectAlign?l.x+=l.width/2:E-=l.width/2:"right"===l.align&&(l.respectAlign?l.x-=l.width/2:E+=l.width/2);if(l.radius)for(E=aa(l.fontSize),l.letterSpacing===h&&(l.letterSpacing=E/500),s=0;s<Y.length;s+=1){n.save();n.translate(l.x,l.y);C=Y[s];p=C.length;n.rotate(-(D*l.letterSpacing*(p-1))/2);for(A=0;A<p;A+=1)u=C[A],0!==A&&n.rotate(D*l.letterSpacing),n.save(),n.translate(0,-l.radius),n.fillText(u,0,0),n.restore();l.radius-=E;l.letterSpacing+=
E/(1E3*D);n.restore()}else for(s=0;s<Y.length;s+=1)C=Y[s],p=l.y+s*l.height/Y.length-(Y.length-1)*l.height/Y.length/2,n.shadowColor=l.shadowColor,n.fillText(C,E,p),"transparent"!==l.fillStyle&&(n.shadowColor="transparent"),0!==l.strokeWidth&&n.strokeText(C,E,p);p=0;"top"===l.baseline?p+=l.height/2:"bottom"===l.baseline&&(p-=l.height/2);l._event&&(n.beginPath(),n.rect(l.x-l.width/2,l.y-l.height/2+p,l.width,l.height),T(this[v],n,l),n.closePath());l._transformed&&n.restore()}ba.propCache=l;return this};
g.fn.measureText=function(h){var g,v;g=this.getLayer(h);if(!g||g&&!g._layer)g=new H(h);if(h=K(this[0]))ra(this[0],h,g),v=Ra(h,g),sa(this[0],h,g,v);return g};g.fn.drawImage=function M(v){function n(l,n,s,r,v){return function(){var C=g(l);S(l,n,r);r.width===h&&r.sWidth===h&&(r.width=r.sWidth=I.width);r.height===h&&r.sHeight===h&&(r.height=r.sHeight=I.height);v&&(v.width=r.width,v.height=r.height);r.sWidth!==h&&r.sHeight!==h&&r.sx!==h&&r.sy!==h?(r.width===h&&(r.width=r.sWidth),r.height===h&&(r.height=
r.sHeight),r.cropFromCenter&&(r.sx+=r.sWidth/2,r.sy+=r.sHeight/2),0>r.sy-r.sHeight/2&&(r.sy=r.sHeight/2),r.sy+r.sHeight/2>I.height&&(r.sy=I.height-r.sHeight/2),0>r.sx-r.sWidth/2&&(r.sx=r.sWidth/2),r.sx+r.sWidth/2>I.width&&(r.sx=I.width-r.sWidth/2),R(l,n,r,r.width,r.height),n.drawImage(I,r.sx-r.sWidth/2,r.sy-r.sHeight/2,r.sWidth,r.sHeight,r.x-r.width/2,r.y-r.height/2,r.width,r.height)):(R(l,n,r,r.width,r.height),n.drawImage(I,r.x-r.width/2,r.y-r.height/2,r.width,r.height));n.beginPath();n.rect(r.x-
r.width/2,r.y-r.height/2,r.width,r.height);T(l,n,r);n.closePath();r._transformed&&n.restore();ya(n,s,r);r.layer?P(C,s,v,"load"):r.load&&r.load.call(C[0],v);r.layer&&(v._masks=s.transforms.masks.slice(0),r._next&&C.drawLayers({clear:A,resetFire:u,index:r._next}))}}var l,C,p,s,E,D,I,ua,N,Q=ba.imageCache;for(C=0;C<this.length;C+=1)if(l=this[C],p=K(this[C]))s=L(this[C]),E=new H(v),D=O(this[C],E,v,M),E.visible&&(N=E.source,ua=N.getContext,N.src||ua?I=N:N&&(Q[N]&&Q[N].complete?I=Q[N]:(I=new wa,N.match(/^data:/i)||
(I.crossOrigin=E.crossOrigin),I.src=N,Q[N]=I)),I&&(I.complete||ua?n(l,p,s,E,D)():(I.onload=n(l,p,s,E,D),I.src=I.src)));return this};g.fn.createPattern=function(p){function v(){s=l.createPattern(u,C.repeat);C.load&&C.load.call(n[0],s)}var n=this,l,C,u,s,E;(l=K(n[0]))?(C=new H(p),E=C.source,da(E)?(u=g("<canvas />")[0],u.width=C.width,u.height=C.height,p=K(u),E.call(u,p),v()):(p=E.getContext,E.src||p?u=E:(u=new wa,E.match(/^data:/i)||(u.crossOrigin=C.crossOrigin),u.src=E),u.complete||p?v():(u.onload=
v(),u.src=u.src))):s=h;return s};g.fn.createGradient=function(g){var v,n=[],l,C,u,s,E,A,I;g=new H(g);if(v=K(this[0])){g.x1=g.x1||0;g.y1=g.y1||0;g.x2=g.x2||0;g.y2=g.y2||0;v=g.r1!==h&&g.r2!==h?v.createRadialGradient(g.x1,g.y1,g.r1,g.x2,g.y2,g.r2):v.createLinearGradient(g.x1,g.y1,g.x2,g.y2);for(s=1;g["c"+s]!==p;s+=1)g["s"+s]!==p?n.push(g["s"+s]):n.push(h);l=n.length;n[0]===h&&(n[0]=0);n[l-1]===h&&(n[l-1]=1);for(s=0;s<l;s+=1){if(n[s]!==h){A=1;I=0;C=n[s];for(E=s+1;E<l;E+=1)if(n[E]!==h){u=n[E];break}else A+=
1;C>u&&(n[E]=n[s])}else n[s]===h&&(I+=1,n[s]=C+(u-C)/A*I);v.addColorStop(n[s],g["c"+(s+1)])}}else v=h;return v};g.fn.setPixels=function v(g){var l,p,u,s,E,A,I,D,L;for(p=0;p<this.length;p+=1)if(l=this[p],u=K(l)){s=new H(g);O(l,s,g,v);R(this[p],u,s,s.width,s.height);if(s.width===h||s.height===h)s.width=l.width,s.height=l.height,s.x=s.width/2,s.y=s.height/2;if(0!==s.width&&0!==s.height){A=u.getImageData(s.x-s.width/2,s.y-s.height/2,s.width,s.height);I=A.data;L=I.length;if(s.each)for(D=0;D<L;D+=4)E={r:I[D],
g:I[D+1],b:I[D+2],a:I[D+3]},s.each.call(l,E,s),I[D]=E.r,I[D+1]=E.g,I[D+2]=E.b,I[D+3]=E.a;u.putImageData(A,s.x-s.width/2,s.y-s.height/2);u.restore()}}return this};g.fn.getCanvasImage=function(g,n){var l,u=h;0!==this.length&&(l=this[0],l.toDataURL&&(n===p&&(n=1),u=l.toDataURL("image/"+g,n)));return u};g.fn.detectPixelRatio=function(h){var n,l,p,A,s,E,D;for(l=0;l<this.length;l+=1)n=this[l],g(this[l]),p=K(n),D=L(this[l]),D.scaled||(A=window.devicePixelRatio||1,s=p.webkitBackingStorePixelRatio||p.mozBackingStorePixelRatio||
p.msBackingStorePixelRatio||p.oBackingStorePixelRatio||p.backingStorePixelRatio||1,A/=s,1!==A&&(s=n.width,E=n.height,n.width=s*A,n.height=E*A,n.style.width=s+"px",n.style.height=E+"px",p.scale(A,A)),D.pixelRatio=A,D.scaled=u,h&&h.call(n,A));return this};X.clearCache=function(){for(var g in ba)ba.hasOwnProperty(g)&&(ba[g]={})};g.support.canvas=g("<canvas />")[0].getContext!==p;Z(X,{defaults:la,setGlobalProps:S,transformShape:R,detectEvents:T,closePath:V,setCanvasFont:ra,measureText:sa});g.jCanvas=
X;g.jCanvasObject=H})(jQuery,document,Image,Array,Math,parseFloat,!0,!1,null);

