/*! For license information please see app.bundle.js.LICENSE.txt */
var EntryPoint=function(t){var e={};function i(r){if(e[r])return e[r].exports;var n=e[r]={i:r,l:!1,exports:{}};return t[r].call(n.exports,n,n.exports,i),n.l=!0,n.exports}return i.m=t,i.c=e,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="./",i(i.s=137)}([function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return s})),i.d(e,"d",(function(){return c})),i.d(e,"e",(function(){return l})),i.d(e,"f",(function(){return d})),i.d(e,"g",(function(){return u})),i.d(e,"h",(function(){return p})),i.d(e,"i",(function(){return h})),i.d(e,"j",(function(){return f})),i.d(e,"k",(function(){return m})),i.d(e,"l",(function(){return g})),i.d(e,"m",(function(){return v})),i.d(e,"n",(function(){return y})),i.d(e,"o",(function(){return b})),i.d(e,"p",(function(){return _})),i.d(e,"q",(function(){return w})),i.d(e,"r",(function(){return C})),i.d(e,"s",(function(){return S})),i.d(e,"t",(function(){return M})),i.d(e,"u",(function(){return T})),i.d(e,"v",(function(){return O})),i.d(e,"w",(function(){return L})),i.d(e,"x",(function(){return A})),i.d(e,"y",(function(){return I})),i.d(e,"z",(function(){return j})),i.d(e,"A",(function(){return D})),i.d(e,"B",(function(){return R})),i.d(e,"C",(function(){return z})),i.d(e,"D",(function(){return k})),i.d(e,"E",(function(){return P})),i.d(e,"F",(function(){return N})),i.d(e,"H",(function(){return V})),i.d(e,"I",(function(){return F})),i.d(e,"J",(function(){return H})),i.d(e,"G",(function(){return G})),i.d(e,"a",(function(){return X})),i.d(e,"K",(function(){return U}));var r=i(49),n=i(22),o=i(10);function a(t){for(var e=f(),i=0,r=t.length;i<r;++i)C(e,t[i]);return e}function s(t,e,i){return i?(i[0]=t[0]-e,i[1]=t[1]-e,i[2]=t[2]+e,i[3]=t[3]+e,i):[t[0]-e,t[1]-e,t[2]+e,t[3]+e]}function c(t,e){return e?(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e):t.slice()}function l(t,e,i){var r,n;return(r=e<t[0]?t[0]-e:t[2]<e?e-t[2]:0)*r+(n=i<t[1]?t[1]-i:t[3]<i?i-t[3]:0)*n}function d(t,e){return p(t,e[0],e[1])}function u(t,e){return t[0]<=e[0]&&e[2]<=t[2]&&t[1]<=e[1]&&e[3]<=t[3]}function p(t,e,i){return t[0]<=e&&e<=t[2]&&t[1]<=i&&i<=t[3]}function h(t,e){var i=t[0],r=t[1],o=t[2],a=t[3],s=e[0],c=e[1],l=n.a.UNKNOWN;return s<i?l|=n.a.LEFT:s>o&&(l|=n.a.RIGHT),c<r?l|=n.a.BELOW:c>a&&(l|=n.a.ABOVE),l===n.a.UNKNOWN&&(l=n.a.INTERSECTING),l}function f(){return[1/0,1/0,-1/0,-1/0]}function m(t,e,i,r,n){return n?(n[0]=t,n[1]=e,n[2]=i,n[3]=r,n):[t,e,i,r]}function g(t){return m(1/0,1/0,-1/0,-1/0,t)}function v(t,e){var i=t[0],r=t[1];return m(i,r,i,r,e)}function y(t,e){return x(g(e),t)}function b(t,e,i,r,n){return S(g(n),t,e,i,r)}function _(t,e){return t[0]==e[0]&&t[2]==e[2]&&t[1]==e[1]&&t[3]==e[3]}function w(t,e){return e[0]<t[0]&&(t[0]=e[0]),e[2]>t[2]&&(t[2]=e[2]),e[1]<t[1]&&(t[1]=e[1]),e[3]>t[3]&&(t[3]=e[3]),t}function C(t,e){e[0]<t[0]&&(t[0]=e[0]),e[0]>t[2]&&(t[2]=e[0]),e[1]<t[1]&&(t[1]=e[1]),e[1]>t[3]&&(t[3]=e[1])}function x(t,e){for(var i=0,r=e.length;i<r;++i)C(t,e[i]);return t}function S(t,e,i,r,n){for(;i<r;i+=n)E(t,e[i],e[i+1]);return t}function E(t,e,i){t[0]=Math.min(t[0],e),t[1]=Math.min(t[1],i),t[2]=Math.max(t[2],e),t[3]=Math.max(t[3],i)}function M(t,e){var i;return(i=e(O(t)))||(i=e(L(t)))||(i=e(k(t)))?i:(i=e(z(t)))||!1}function T(t){var e=0;return V(t)||(e=P(t)*D(t)),e}function O(t){return[t[0],t[1]]}function L(t){return[t[2],t[1]]}function A(t){return[(t[0]+t[2])/2,(t[1]+t[3])/2]}function I(t,e){var i;return e===r.a.BOTTOM_LEFT?i=O(t):e===r.a.BOTTOM_RIGHT?i=L(t):e===r.a.TOP_LEFT?i=z(t):e===r.a.TOP_RIGHT?i=k(t):Object(o.a)(!1,13),i}function j(t,e,i,r,n){var o=e*r[0]/2,a=e*r[1]/2,s=Math.cos(i),c=Math.sin(i),l=o*s,d=o*c,u=a*s,p=a*c,h=t[0],f=t[1],g=h-l+p,v=h-l-p,y=h+l-p,b=h+l+p,_=f-d-u,w=f-d+u,C=f+d+u,x=f+d-u;return m(Math.min(g,v,y,b),Math.min(_,w,C,x),Math.max(g,v,y,b),Math.max(_,w,C,x),n)}function D(t){return t[3]-t[1]}function R(t,e,i){var r=i||[1/0,1/0,-1/0,-1/0];return N(t,e)?(t[0]>e[0]?r[0]=t[0]:r[0]=e[0],t[1]>e[1]?r[1]=t[1]:r[1]=e[1],t[2]<e[2]?r[2]=t[2]:r[2]=e[2],t[3]<e[3]?r[3]=t[3]:r[3]=e[3]):g(r),r}function z(t){return[t[0],t[3]]}function k(t){return[t[2],t[3]]}function P(t){return t[2]-t[0]}function N(t,e){return t[0]<=e[2]&&t[2]>=e[0]&&t[1]<=e[3]&&t[3]>=e[1]}function V(t){return t[2]<t[0]||t[3]<t[1]}function F(t,e){return e?(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e):t}function H(t,e){var i=(t[2]-t[0])/2*(e-1),r=(t[3]-t[1])/2*(e-1);t[0]-=i,t[2]+=i,t[1]-=r,t[3]+=r}function G(t,e,i){var r=!1,o=h(t,e),a=h(t,i);if(o===n.a.INTERSECTING||a===n.a.INTERSECTING)r=!0;else{var s=t[0],c=t[1],l=t[2],d=t[3],u=e[0],p=e[1],f=i[0],m=i[1],g=(m-p)/(f-u),v=void 0,y=void 0;a&n.a.ABOVE&&!(o&n.a.ABOVE)&&(r=(v=f-(m-d)/g)>=s&&v<=l),r||!(a&n.a.RIGHT)||o&n.a.RIGHT||(r=(y=m-(f-l)*g)>=c&&y<=d),r||!(a&n.a.BELOW)||o&n.a.BELOW||(r=(v=f-(m-c)/g)>=s&&v<=l),r||!(a&n.a.LEFT)||o&n.a.LEFT||(r=(y=m-(f-s)*g)>=c&&y<=d)}return r}function X(t,e,i,r){var n=[];if(r>1)for(var o=t[2]-t[0],a=t[3]-t[1],s=0;s<r;++s)n.push(t[0]+o*s/r,t[1],t[2],t[1]+a*s/r,t[2]-o*s/r,t[3],t[0],t[3]-a*s/r);else n=[t[0],t[1],t[2],t[1],t[2],t[3],t[0],t[3]];e(n,n,2);for(var c=[],l=[],d=(s=0,n.length);s<d;s+=2)c.push(n[s]),l.push(n[s+1]);return function(t,e,i){return m(Math.min.apply(null,t),Math.min.apply(null,e),Math.max.apply(null,t),Math.max.apply(null,e),i)}(c,l,i)}function U(t,e){var i=e.getExtent(),r=A(t);if(e.canWrapX()&&(r[0]<i[0]||r[0]>=i[2])){var n=P(i),o=Math.floor((r[0]-i[0])/n)*n;t[0]-=o,t[2]-=o}return t}},function(t,e,i){"use strict";function r(){return function(){throw new Error("Unimplemented abstract method.")}()}i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var n=0;function o(t){return t.ol_uid||(t.ol_uid=String(++n))}var a="6.4.3"},function(t,e,i){"use strict";i.d(e,"d",(function(){return d})),i.d(e,"c",(function(){return u})),i.d(e,"e",(function(){return p})),i.d(e,"f",(function(){return h})),i.d(e,"g",(function(){return f})),i.d(e,"h",(function(){return m})),i.d(e,"j",(function(){return g})),i.d(e,"l",(function(){return v})),i.d(e,"m",(function(){return y})),i.d(e,"n",(function(){return b})),i.d(e,"k",(function(){return _})),i.d(e,"i",(function(){return w})),i.d(e,"a",(function(){return C})),i.d(e,"s",(function(){return O})),i.d(e,"q",(function(){return L})),i.d(e,"p",(function(){return j})),i.d(e,"r",(function(){return D})),i.d(e,"t",(function(){return R})),i.d(e,"o",(function(){return z})),i.d(e,"b",(function(){return P}));var r=i(15),n=i(35),o=i(19),a=i(11),s=i(13),c=i(21),l=i(7),d="10px sans-serif",u="#000",p="round",h=[],f=0,m="round",g=10,v="#000",y="center",b="middle",_=[0,0,0,0],w=1,C=new r.a;(new n.a).setSize=function(){console.warn("labelCache is deprecated.")};var x,S,E,M=null,T={},O=function(){var t,e,i=["monospace","serif"],r=i.length,n="wmytzilWMYTZIL@#/&?$%10";function o(t,o,a){for(var s=!0,c=0;c<r;++c){var l=i[c];if(e=I(t+" "+o+" 32px "+l,n),a!=l){var d=I(t+" "+o+" 32px "+a+","+l,n);s=s&&d!=e}}return!!s}function s(){for(var e=!0,i=C.getKeys(),r=0,n=i.length;r<n;++r){var s=i[r];C.get(s)<100&&(o.apply(this,s.split("\n"))?(Object(a.b)(T),M=null,x=void 0,C.set(s,100)):(C.set(s,C.get(s)+1,!0),e=!1))}e&&(clearInterval(t),t=void 0)}return function(e){var i=Object(c.e)(e);if(i)for(var r=i.families,n=0,a=r.length;n<a;++n){var l=r[n],d=i.style+"\n"+i.weight+"\n"+l;void 0===C.get(d)&&(C.set(d,100,!0),o(i.style,i.weight,l)||(C.set(d,0,!0),void 0===t&&(t=setInterval(s,32))))}}}(),L=(E=T,function(t){var e=E[t];if(null==e)if(o.g){var i=Object(c.e)(t),r=A(t,"Žg"),n=isNaN(Number(i.lineHeight))?1.2:Number(i.lineHeight);T[t]=n*(r.actualBoundingBoxAscent+r.actualBoundingBoxDescent)}else S||((S=document.createElement("div")).innerHTML="M",S.style.margin="0 !important",S.style.padding="0 !important",S.style.position="absolute !important",S.style.left="-99999px !important"),S.style.font=t,document.body.appendChild(S),e=S.offsetHeight,E[t]=e,document.body.removeChild(S);return e});function A(t,e){return M||(M=Object(s.a)(1,1)),t!=x&&(M.font=t,x=M.font),M.measureText(e)}function I(t,e){return A(t,e).width}function j(t,e,i){if(e in i)return i[e];var r=I(t,e);return i[e]=r,r}function D(t,e,i){for(var r=e.length,n=0,o=0;o<r;++o){var a=I(t,e[o]);n=Math.max(n,a),i.push(a)}return n}function R(t,e,i,r){0!==e&&(t.translate(i,r),t.rotate(e),t.translate(-i,-r))}function z(t,e,i,r,n,o,a,s,c,l,d){t.save(),1!==i&&(t.globalAlpha*=i),e&&t.setTransform.apply(t,e),r.contextInstructions?(t.translate(c,l),t.scale(d[0],d[1]),function(t,e){for(var i=t.contextInstructions,r=0,n=i.length;r<n;r+=2)Array.isArray(i[r+1])?e[i[r]].apply(e,i[r+1]):e[i[r]]=i[r+1]}(r,t)):d[0]<0||d[1]<0?(t.translate(c,l),t.scale(d[0],d[1]),t.drawImage(r,n,o,a,s,0,0,a,s)):t.drawImage(r,n,o,a,s,c,l,a*d[0],s*d[1]),t.restore()}var k=null;function P(t){return o.g?Object(l.i)(t):(k||(k=Object(s.a)(1,1).canvas),k.style.transform=Object(l.i)(t),k.style.transform)}},function(t,e,i){"use strict";e.a={POINT:"Point",LINE_STRING:"LineString",LINEAR_RING:"LinearRing",POLYGON:"Polygon",MULTI_POINT:"MultiPoint",MULTI_LINE_STRING:"MultiLineString",MULTI_POLYGON:"MultiPolygon",GEOMETRY_COLLECTION:"GeometryCollection",CIRCLE:"Circle"}},function(t,e,i){"use strict";function r(t,e,i){return Math.min(Math.max(t,e),i)}i.d(e,"a",(function(){return r})),i.d(e,"b",(function(){return n})),i.d(e,"d",(function(){return o})),i.d(e,"h",(function(){return a})),i.d(e,"g",(function(){return s})),i.d(e,"f",(function(){return c})),i.d(e,"i",(function(){return l})),i.d(e,"j",(function(){return d})),i.d(e,"e",(function(){return u})),i.d(e,"c",(function(){return p}));var n="cosh"in Math?Math.cosh:function(t){var e=Math.exp(t);return(e+1/e)/2},o="log2"in Math?Math.log2:function(t){return Math.log(t)*Math.LOG2E};function a(t,e,i,r,n,o){var a=n-i,c=o-r;if(0!==a||0!==c){var l=((t-i)*a+(e-r)*c)/(a*a+c*c);l>1?(i=n,r=o):l>0&&(i+=a*l,r+=c*l)}return s(t,e,i,r)}function s(t,e,i,r){var n=i-t,o=r-e;return n*n+o*o}function c(t){for(var e=t.length,i=0;i<e;i++){for(var r=i,n=Math.abs(t[i][i]),o=i+1;o<e;o++){var a=Math.abs(t[o][i]);a>n&&(n=a,r=o)}if(0===n)return null;var s=t[r];t[r]=t[i],t[i]=s;for(var c=i+1;c<e;c++)for(var l=-t[c][i]/t[i][i],d=i;d<e+1;d++)i==d?t[c][d]=0:t[c][d]+=l*t[i][d]}for(var u=new Array(e),p=e-1;p>=0;p--){u[p]=t[p][e]/t[p][p];for(var h=p-1;h>=0;h--)t[h][e]-=t[h][p]*u[p]}return u}function l(t){return 180*t/Math.PI}function d(t){return t*Math.PI/180}function u(t,e){var i=t%e;return i*e<0?i+e:i}function p(t,e,i){return t+i*(e-t)}},function(t,e,i){"use strict";i.d(e,"a",(function(){return n})),i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return a}));var r=i(11);function n(t,e,i,r,n){if(r&&r!==t&&(i=i.bind(r)),n){var o=i;i=function(){t.removeEventListener(e,i),o.apply(this,arguments)}}var a={target:t,type:e,listener:i};return t.addEventListener(e,i),a}function o(t,e,i,r){return n(t,e,i,r,!0)}function a(t){t&&t.target&&(t.target.removeEventListener(t.type,t.listener),Object(r.b)(t))}},function(t,e,i){"use strict";e.a={CHANGE:"change",ERROR:"error",BLUR:"blur",CLEAR:"clear",CONTEXTMENU:"contextmenu",CLICK:"click",DBLCLICK:"dblclick",DRAGENTER:"dragenter",DRAGOVER:"dragover",DROP:"drop",FOCUS:"focus",KEYDOWN:"keydown",KEYPRESS:"keypress",LOAD:"load",RESIZE:"resize",TOUCHMOVE:"touchmove",WHEEL:"wheel"}},function(t,e,i){"use strict";i.d(e,"c",(function(){return o})),i.d(e,"f",(function(){return a})),i.d(e,"h",(function(){return c})),i.d(e,"a",(function(){return l})),i.d(e,"g",(function(){return d})),i.d(e,"e",(function(){return u})),i.d(e,"b",(function(){return p})),i.d(e,"d",(function(){return h})),i.d(e,"i",(function(){return f}));var r=i(10),n=new Array(6);function o(){return[1,0,0,1,0,0]}function a(t,e){var i=t[0],r=t[1],n=t[2],o=t[3],a=t[4],s=t[5],c=e[0],l=e[1],d=e[2],u=e[3],p=e[4],h=e[5];return t[0]=i*c+n*l,t[1]=r*c+o*l,t[2]=i*d+n*u,t[3]=r*d+o*u,t[4]=i*p+n*h+a,t[5]=r*p+o*h+s,t}function s(t,e,i,r,n,o,a){return t[0]=e,t[1]=i,t[2]=r,t[3]=n,t[4]=o,t[5]=a,t}function c(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t}function l(t,e){var i=e[0],r=e[1];return e[0]=t[0]*i+t[2]*r+t[4],e[1]=t[1]*i+t[3]*r+t[5],e}function d(t,e,i){return a(t,s(n,e,0,0,i,0,0))}function u(t,e,i){return s(t,e,0,0,i,0,0)}function p(t,e,i,r,n,o,a,s){var c=Math.sin(o),l=Math.cos(o);return t[0]=r*l,t[1]=n*c,t[2]=-r*c,t[3]=n*l,t[4]=a*r*l-s*r*c+e,t[5]=a*n*c+s*n*l+i,t}function h(t,e){var i,n=(i=e)[0]*i[3]-i[1]*i[2];Object(r.a)(0!==n,32);var o=e[0],a=e[1],s=e[2],c=e[3],l=e[4],d=e[5];return t[0]=c/n,t[1]=-a/n,t[2]=-s/n,t[3]=o/n,t[4]=(s*d-c*l)/n,t[5]=-(o*d-a*l)/n,t}function f(t){return"matrix("+t.join(", ")+")"}},function(t,e,i){"use strict";i.d(e,"a",(function(){return n.a})),i.d(e,"f",(function(){return O})),i.d(e,"g",(function(){return L})),i.d(e,"b",(function(){return I})),i.d(e,"c",(function(){return j})),i.d(e,"i",(function(){return D})),i.d(e,"h",(function(){return R})),i.d(e,"m",(function(){return z})),i.d(e,"j",(function(){return H})),i.d(e,"n",(function(){return G})),i.d(e,"k",(function(){return X})),i.d(e,"d",(function(){return U})),i.d(e,"l",(function(){return B})),i.d(e,"e",(function(){return $}));var r,n=i(23),o=function(){function t(t){this.code_=t.code,this.units_=t.units,this.extent_=void 0!==t.extent?t.extent:null,this.worldExtent_=void 0!==t.worldExtent?t.worldExtent:null,this.axisOrientation_=void 0!==t.axisOrientation?t.axisOrientation:"enu",this.global_=void 0!==t.global&&t.global,this.canWrapX_=!(!this.global_||!this.extent_),this.getPointResolutionFunc_=t.getPointResolution,this.defaultTileGrid_=null,this.metersPerUnit_=t.metersPerUnit}return t.prototype.canWrapX=function(){return this.canWrapX_},t.prototype.getCode=function(){return this.code_},t.prototype.getExtent=function(){return this.extent_},t.prototype.getUnits=function(){return this.units_},t.prototype.getMetersPerUnit=function(){return this.metersPerUnit_||n.a[this.units_]},t.prototype.getWorldExtent=function(){return this.worldExtent_},t.prototype.getAxisOrientation=function(){return this.axisOrientation_},t.prototype.isGlobal=function(){return this.global_},t.prototype.setGlobal=function(t){this.global_=t,this.canWrapX_=!(!t||!this.extent_)},t.prototype.getDefaultTileGrid=function(){return this.defaultTileGrid_},t.prototype.setDefaultTileGrid=function(t){this.defaultTileGrid_=t},t.prototype.setExtent=function(t){this.extent_=t,this.canWrapX_=!(!this.global_||!t)},t.prototype.setWorldExtent=function(t){this.worldExtent_=t},t.prototype.setGetPointResolution=function(t){this.getPointResolutionFunc_=t},t.prototype.getPointResolutionFunc=function(){return this.getPointResolutionFunc_},t}(),a=i(4),s=(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(t,e)},function(t,e){function i(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}),c=6378137*Math.PI,l=[-c,-c,c,c],d=[-180,-85,180,85],u=function(t){function e(e){return t.call(this,{code:e,units:n.b.METERS,extent:l,global:!0,worldExtent:d,getPointResolution:function(t,e){return t/Object(a.b)(e[1]/6378137)}})||this}return s(e,t),e}(o),p=[new u("EPSG:3857"),new u("EPSG:102100"),new u("EPSG:102113"),new u("EPSG:900913"),new u("urn:ogc:def:crs:EPSG:6.18:3:3857"),new u("urn:ogc:def:crs:EPSG::3857"),new u("http://www.opengis.net/gml/srs/epsg.xml#3857")];function h(t,e,i){var r=t.length,n=i>1?i:2,o=e;void 0===o&&(o=n>2?t.slice():new Array(r));for(var a=c,s=0;s<r;s+=n){o[s]=a*t[s]/180;var l=6378137*Math.log(Math.tan(Math.PI*(+t[s+1]+90)/360));l>a?l=a:l<-a&&(l=-a),o[s+1]=l}return o}function f(t,e,i){var r=t.length,n=i>1?i:2,o=e;void 0===o&&(o=n>2?t.slice():new Array(r));for(var a=0;a<r;a+=n)o[a]=180*t[a]/c,o[a+1]=360*Math.atan(Math.exp(t[a+1]/6378137))/Math.PI-90;return o}var m=function(){var t=function(e,i){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(e,i)};return function(e,i){function r(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(r.prototype=i.prototype,new r)}}(),g=[-180,-90,180,90],v=6378137*Math.PI/180,y=function(t){function e(e,i){return t.call(this,{code:e,units:n.b.DEGREES,extent:g,axisOrientation:i,global:!0,metersPerUnit:v,worldExtent:g})||this}return m(e,t),e}(o),b=[new y("CRS:84"),new y("EPSG:4326","neu"),new y("urn:ogc:def:crs:EPSG::4326","neu"),new y("urn:ogc:def:crs:EPSG:6.6:4326","neu"),new y("urn:ogc:def:crs:OGC:1.3:CRS84"),new y("urn:ogc:def:crs:OGC:2:84"),new y("http://www.opengis.net/gml/srs/epsg.xml#4326","neu"),new y("urn:x-ogc:def:crs:EPSG:4326","neu")],_={};i(11);var w={};function C(t,e,i){var r=t.getCode(),n=e.getCode();r in w||(w[r]={}),w[r][n]=i}var x=i(0),S=i(57);i(24);function E(t,e,i){var r;if(void 0!==e){for(var n=0,o=t.length;n<o;++n)e[n]=t[n];r=e}else r=t.slice();return r}function M(t,e,i){if(void 0!==e&&t!==e){for(var r=0,n=t.length;r<n;++r)e[r]=t[r];t=e}return t}function T(t){!function(t,e){_[t]=e}(t.getCode(),t),C(t,t,E)}function O(t){return"string"==typeof t?_[t]||null:t||null}function L(t,e,i,r){var o,a=(t=O(t)).getPointResolutionFunc();if(a)o=a(e,i),r&&r!==t.getUnits()&&(s=t.getMetersPerUnit())&&(o=o*s/n.a[r]);else if(t.getUnits()==n.b.DEGREES&&!r||r==n.b.DEGREES)o=e;else{var s,c=D(t,O("EPSG:4326")),l=[i[0]-e/2,i[1],i[0]+e/2,i[1],i[0],i[1]-e/2,i[0],i[1]+e/2];l=c(l,l,2),o=(Object(S.a)(l.slice(0,2),l.slice(2,4))+Object(S.a)(l.slice(4,6),l.slice(6,8)))/2,void 0!==(s=r?n.a[r]:t.getMetersPerUnit())&&(o/=s)}return o}function A(t){!function(t){t.forEach(T)}(t),t.forEach((function(e){t.forEach((function(t){e!==t&&C(e,t,E)}))}))}function I(t,e){return t?"string"==typeof t?O(t):t:O(e)}function j(t,e){if(t===e)return!0;var i=t.getUnits()===e.getUnits();return(t.getCode()===e.getCode()||D(t,e)===E)&&i}function D(t,e){var i=function(t,e){var i;return t in w&&e in w[t]&&(i=w[t][e]),i}(t.getCode(),e.getCode());return i||(i=M),i}function R(t,e){return D(O(t),O(e))}function z(t,e,i){return R(e,i)(t,void 0,t.length)}function k(t,e,i,r){var n=R(e,i);return Object(x.a)(t,n,void 0,r)}var P,N,V,F=null;function H(){return F}function G(){F=O("EPSG:4326")}function X(t,e){return F?z(t,e,F):t}function U(t,e){return F?z(t,F,e):t}function B(t,e){return F?k(t,e,F):t}function $(t,e){return F?k(t,F,e):t}A(p),A(b),P=p,N=h,V=f,b.forEach((function(t){P.forEach((function(e){C(t,e,N),C(e,t,V)}))}))},function(t,e,i){"use strict";e.a={IDLE:0,LOADING:1,LOADED:2,ERROR:3,EMPTY:4}},function(t,e,i){"use strict";i.d(e,"a",(function(){return n}));var r=i(61);function n(t,e){if(!t)throw new r.a(e)}},function(t,e,i){"use strict";i.d(e,"a",(function(){return r})),i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"d",(function(){return a}));var r="function"==typeof Object.assign?Object.assign:function(t,e){if(null==t)throw new TypeError("Cannot convert undefined or null to object");for(var i=Object(t),r=1,n=arguments.length;r<n;++r){var o=arguments[r];if(null!=o)for(var a in o)o.hasOwnProperty(a)&&(i[a]=o[a])}return i};function n(t){for(var e in t)delete t[e]}var o="function"==typeof Object.values?Object.values:function(t){var e=[];for(var i in t)e.push(t[i]);return e};function a(t){var e;for(e in t)return!1;return!e}},function(t,e,i){"use strict";function r(t,e){return t>e?1:t<e?-1:0}function n(t,e,i){var r=t.length;if(t[0]<=e)return 0;if(e<=t[r-1])return r-1;var n=void 0;if(i>0){for(n=1;n<r;++n)if(t[n]<e)return n-1}else if(i<0){for(n=1;n<r;++n)if(t[n]<=e)return n}else for(n=1;n<r;++n){if(t[n]==e)return n;if(t[n]<e)return t[n-1]-e<e-t[n]?n-1:n}return r-1}function o(t,e,i){for(;e<i;){var r=t[e];t[e]=t[i],t[i]=r,++e,--i}}function a(t,e){for(var i=Array.isArray(e)?e:[e],r=i.length,n=0;n<r;n++)t[t.length]=i[n]}function s(t,e){var i=t.length;if(i!==e.length)return!1;for(var r=0;r<i;r++)if(t[r]!==e[r])return!1;return!0}function c(t,e,i){var n=e||r;return t.every((function(e,r){if(0===r)return!0;var o=n(t[r-1],e);return!(o>0||i&&0===o)}))}i.d(e,"e",(function(){return r})),i.d(e,"d",(function(){return n})),i.d(e,"f",(function(){return o})),i.d(e,"b",(function(){return a})),i.d(e,"a",(function(){return s})),i.d(e,"c",(function(){return c}))},function(t,e,i){"use strict";i.d(e,"a",(function(){return n})),i.d(e,"e",(function(){return o})),i.d(e,"c",(function(){return a})),i.d(e,"b",(function(){return s})),i.d(e,"d",(function(){return c}));var r=i(19);function n(t,e,i){var n=i&&i.length?i.shift():r.g?new OffscreenCanvas(t||300,e||300):document.createElement("canvas");return t&&(n.width=t),e&&(n.height=e),n.getContext("2d")}function o(t,e){var i=e.parentNode;i&&i.replaceChild(t,e)}function a(t){return t&&t.parentNode?t.parentNode.removeChild(t):null}function s(t){for(;t.lastChild;)t.removeChild(t.lastChild)}function c(t,e){for(var i=t.childNodes,r=0;;++r){var n=i[r],o=e[r];if(!n&&!o)break;n!==o&&(n?o?t.insertBefore(o,n):(t.removeChild(n),--r):t.appendChild(o))}}},function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"a",(function(){return o})),i.d(e,"c",(function(){return a})),i.d(e,"d",(function(){return s}));var r=i(12);function n(){return!0}function o(){return!1}function a(){}function s(t){var e,i,n,o=!1;return function(){var a=Array.prototype.slice.call(arguments);return o&&this===n&&Object(r.a)(a,i)||(o=!0,n=this,i=a,e=t.apply(this,arguments)),e}}},function(t,e,i){"use strict";i.d(e,"b",(function(){return h}));var r,n=i(30),o=i(36),a=i(62),s=i(11),c=i(1),l=(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(t,e)},function(t,e){function i(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}),d=function(t){function e(e,i,r){var n=t.call(this,e)||this;return n.key=i,n.oldValue=r,n}return l(e,t),e}(n.a),u=function(t){function e(e){var i=t.call(this)||this;return Object(c.c)(i),i.values_=null,void 0!==e&&i.setProperties(e),i}return l(e,t),e.prototype.get=function(t){var e;return this.values_&&this.values_.hasOwnProperty(t)&&(e=this.values_[t]),e},e.prototype.getKeys=function(){return this.values_&&Object.keys(this.values_)||[]},e.prototype.getProperties=function(){return this.values_&&Object(s.a)({},this.values_)||{}},e.prototype.hasProperties=function(){return!!this.values_},e.prototype.notify=function(t,e){var i;i=h(t),this.dispatchEvent(new d(i,t,e)),i=o.a.PROPERTYCHANGE,this.dispatchEvent(new d(i,t,e))},e.prototype.set=function(t,e,i){var r=this.values_||(this.values_={});if(i)r[t]=e;else{var n=r[t];r[t]=e,n!==e&&this.notify(t,n)}},e.prototype.setProperties=function(t,e){for(var i in t)this.set(i,t[i],e)},e.prototype.unset=function(t,e){if(this.values_&&t in this.values_){var i=this.values_[t];delete this.values_[t],Object(s.d)(this.values_)&&(this.values_=null),e||this.notify(t,i)}},e}(a.a),p={};function h(t){return p.hasOwnProperty(t)?p[t]:p[t]="change:"+t}e.a=u},function(t,e,i){"use strict";e.a={IDLE:0,LOADING:1,LOADED:2,ERROR:3,EMPTY:4}},function(t,e,i){"use strict";e.a={OPACITY:"opacity",VISIBLE:"visible",EXTENT:"extent",Z_INDEX:"zIndex",MAX_RESOLUTION:"maxResolution",MIN_RESOLUTION:"minResolution",MAX_ZOOM:"maxZoom",MIN_ZOOM:"minZoom",SOURCE:"source"}},function(t,e,i){"use strict";e.a={CIRCLE:"Circle",DEFAULT:"Default",IMAGE:"Image",LINE_STRING:"LineString",POLYGON:"Polygon",TEXT:"Text"}},function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"f",(function(){return o})),i.d(e,"d",(function(){return a})),i.d(e,"a",(function(){return s})),i.d(e,"g",(function(){return c})),i.d(e,"c",(function(){return l})),i.d(e,"e",(function(){return d}));var r="undefined"!=typeof navigator&&void 0!==navigator.userAgent?navigator.userAgent.toLowerCase():"",n=-1!==r.indexOf("firefox"),o=(-1!==r.indexOf("safari")&&r.indexOf("chrom"),-1!==r.indexOf("webkit")&&-1==r.indexOf("edge")),a=-1!==r.indexOf("macintosh"),s="undefined"!=typeof devicePixelRatio?devicePixelRatio:1,c="undefined"!=typeof WorkerGlobalScope&&"undefined"!=typeof OffscreenCanvas&&self instanceof WorkerGlobalScope,l="undefined"!=typeof Image&&Image.prototype.decode,d=function(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("_",null,e),window.removeEventListener("_",null,e)}catch(t){}return t}()},function(t,e,i){"use strict";e.a={ANIMATING:0,INTERACTING:1}},function(t,e,i){"use strict";i.d(e,"c",(function(){return r})),i.d(e,"d",(function(){return n})),i.d(e,"b",(function(){return o})),i.d(e,"a",(function(){return a})),i.d(e,"e",(function(){return l}));var r="ol-hidden",n="ol-unselectable",o="ol-control",a="ol-collapsed",s=new RegExp(["^\\s*(?=(?:(?:[-a-z]+\\s*){0,2}(italic|oblique))?)","(?=(?:(?:[-a-z]+\\s*){0,2}(small-caps))?)","(?=(?:(?:[-a-z]+\\s*){0,2}(bold(?:er)?|lighter|[1-9]00 ))?)","(?:(?:normal|\\1|\\2|\\3)\\s*){0,3}((?:xx?-)?","(?:small|large)|medium|smaller|larger|[\\.\\d]+(?:\\%|in|[cem]m|ex|p[ctx]))","(?:\\s*\\/\\s*(normal|[\\.\\d]+(?:\\%|in|[cem]m|ex|p[ctx])?))","?\\s*([-,\\\"\\'\\sa-z]+?)\\s*$"].join(""),"i"),c=["style","variant","weight","size","lineHeight","family"],l=function(t){var e=t.match(s);if(!e)return null;for(var i={lineHeight:"normal",size:"1.2em",style:"normal",weight:"normal",variant:"normal"},r=0,n=c.length;r<n;++r){var o=e[r+1];void 0!==o&&(i[c[r]]=o)}return i.families=i.family.split(/,\s?/),i}},function(t,e,i){"use strict";e.a={UNKNOWN:0,INTERSECTING:1,ABOVE:2,RIGHT:4,BELOW:8,LEFT:16}},function(t,e,i){"use strict";i.d(e,"a",(function(){return n}));var r={DEGREES:"degrees",FEET:"ft",METERS:"m",PIXELS:"pixels",TILE_PIXELS:"tile-pixels",USFEET:"us-ft"},n={};n[r.DEGREES]=2*Math.PI*6370997/360,n[r.FEET]=.3048,n[r.METERS]=1,n[r.USFEET]=1200/3937,e.b=r},function(t,e,i){"use strict";i.d(e,"a",(function(){return n})),i.d(e,"b",(function(){return o})),i.d(e,"d",(function(){return a})),i.d(e,"e",(function(){return s})),i.d(e,"f",(function(){return c})),i.d(e,"c",(function(){return l}));var r=i(0);i(4);function n(t,e){return t[0]+=+e[0],t[1]+=+e[1],t}function o(t,e){for(var i=!0,r=t.length-1;r>=0;--r)if(t[r]!=e[r]){i=!1;break}return i}function a(t,e){var i=Math.cos(e),r=Math.sin(e),n=t[0]*i-t[1]*r,o=t[1]*i+t[0]*r;return t[0]=n,t[1]=o,t}function s(t,e){return t[0]*=e,t[1]*=e,t}function c(t,e){if(e.canWrapX()){var i=Object(r.E)(e.getExtent()),n=l(t,e,i);n&&(t[0]-=n*i)}return t}function l(t,e,i){var n=e.getExtent(),o=0;if(e.canWrapX()&&(t[0]<n[0]||t[0]>n[2])){var a=i||Object(r.E)(n);o=Math.floor((t[0]-n[0])/a)}return o}},function(t,e,i){"use strict";e.a={ADD:"add",REMOVE:"remove"}},function(t,e,i){"use strict";function r(t){return Math.pow(t,3)}function n(t){return 1-r(1-t)}function o(t){return 3*t*t-2*t*t*t}function a(t){return t}i.d(e,"a",(function(){return r})),i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"d",(function(){return a}))},function(t,e,i){"use strict";function r(t,e,i,r,n,o){for(var a=o||[],s=0,c=e;c<i;c+=r){var l=t[c],d=t[c+1];a[s++]=n[0]*l+n[2]*d+n[4],a[s++]=n[1]*l+n[3]*d+n[5]}return o&&a.length!=s&&(a.length=s),a}function n(t,e,i,r,n,o,a){for(var s=a||[],c=Math.cos(n),l=Math.sin(n),d=o[0],u=o[1],p=0,h=e;h<i;h+=r){var f=t[h]-d,m=t[h+1]-u;s[p++]=d+f*c-m*l,s[p++]=u+f*l+m*c;for(var g=h+2;g<h+r;++g)s[p++]=t[g]}return a&&s.length!=p&&(s.length=p),s}function o(t,e,i,r,n,o,a,s){for(var c=s||[],l=a[0],d=a[1],u=0,p=e;p<i;p+=r){var h=t[p]-l,f=t[p+1]-d;c[u++]=l+n*h,c[u++]=d+o*f;for(var m=p+2;m<p+r;++m)c[u++]=t[m]}return s&&c.length!=u&&(c.length=u),c}function a(t,e,i,r,n,o,a){for(var s=a||[],c=0,l=e;l<i;l+=r){s[c++]=t[l]+n,s[c++]=t[l+1]+o;for(var d=l+2;d<l+r;++d)s[c++]=t[d]}return a&&s.length!=c&&(s.length=c),s}i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n})),i.d(e,"b",(function(){return o})),i.d(e,"d",(function(){return a}))},function(t,e,i){"use strict";function r(t){return t[0]>0&&t[1]>0}function n(t,e,i){return void 0===i&&(i=[0,0]),i[0]=t[0]*e+.5|0,i[1]=t[1]*e+.5|0,i}function o(t,e){return Array.isArray(t)?t:(void 0===e?e=[t,t]:(e[0]=t,e[1]=t),e)}i.d(e,"a",(function(){return r})),i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o}))},function(t,e,i){"use strict";e.a={XY:"XY",XYZ:"XYZ",XYM:"XYM",XYZM:"XYZM"}},function(t,e,i){"use strict";var r=function(){function t(t){this.propagationStopped,this.type=t,this.target=null}return t.prototype.preventDefault=function(){this.propagationStopped=!0},t.prototype.stopPropagation=function(){this.propagationStopped=!0},t}();e.a=r},function(t,e,i){"use strict";function r(t,e,i,r){return void 0!==r?(r[0]=t,r[1]=e,r[2]=i,r):[t,e,i]}function n(t,e,i){return t+"/"+e+"/"+i}function o(t){return n(t[0],t[1],t[2])}function a(t){return t.split("/").map(Number)}function s(t){return(t[1]<<t[0])+t[2]}function c(t,e){var i=t[0],r=t[1],n=t[2];if(e.getMinZoom()>i||i>e.getMaxZoom())return!1;var o,a=e.getExtent();return!(o=a?e.getTileRangeForExtentAndZ(a,i):e.getFullTileRange(i))||o.containsXY(r,n)}i.d(e,"a",(function(){return r})),i.d(e,"d",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"b",(function(){return a})),i.d(e,"e",(function(){return s})),i.d(e,"f",(function(){return c}))},function(t,e,i){"use strict";var r,n=i(61),o=i(15),a=i(25),s=i(30),c=(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(t,e)},function(t,e){function i(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}),l="length",d=function(t){function e(e,i,r){var n=t.call(this,e)||this;return n.element=i,n.index=r,n}return c(e,t),e}(s.a),u=function(t){function e(e,i){var r=t.call(this)||this,n=i||{};if(r.unique_=!!n.unique,r.array_=e||[],r.unique_)for(var o=0,a=r.array_.length;o<a;++o)r.assertUnique_(r.array_[o],o);return r.updateLength_(),r}return c(e,t),e.prototype.clear=function(){for(;this.getLength()>0;)this.pop()},e.prototype.extend=function(t){for(var e=0,i=t.length;e<i;++e)this.push(t[e]);return this},e.prototype.forEach=function(t){for(var e=this.array_,i=0,r=e.length;i<r;++i)t(e[i],i,e)},e.prototype.getArray=function(){return this.array_},e.prototype.item=function(t){return this.array_[t]},e.prototype.getLength=function(){return this.get(l)},e.prototype.insertAt=function(t,e){this.unique_&&this.assertUnique_(e),this.array_.splice(t,0,e),this.updateLength_(),this.dispatchEvent(new d(a.a.ADD,e,t))},e.prototype.pop=function(){return this.removeAt(this.getLength()-1)},e.prototype.push=function(t){this.unique_&&this.assertUnique_(t);var e=this.getLength();return this.insertAt(e,t),this.getLength()},e.prototype.remove=function(t){for(var e=this.array_,i=0,r=e.length;i<r;++i)if(e[i]===t)return this.removeAt(i)},e.prototype.removeAt=function(t){var e=this.array_[t];return this.array_.splice(t,1),this.updateLength_(),this.dispatchEvent(new d(a.a.REMOVE,e,t)),e},e.prototype.setAt=function(t,e){var i=this.getLength();if(t<i){this.unique_&&this.assertUnique_(e,t);var r=this.array_[t];this.array_[t]=e,this.dispatchEvent(new d(a.a.REMOVE,r,t)),this.dispatchEvent(new d(a.a.ADD,e,t))}else{for(var n=i;n<t;++n)this.insertAt(n,void 0);this.insertAt(t,e)}},e.prototype.updateLength_=function(){this.set(l,this.array_.length)},e.prototype.assertUnique_=function(t,e){for(var i=0,r=this.array_.length;i<r;++i)if(this.array_[i]===t&&i!==e)throw new n.a(58)},e}(o.a);e.a=u},function(t,e,i){"use strict";i.d(e,"a",(function(){return n}));var r=i(41);function n(t){return Array.isArray(t)?Object(r.c)(t):t}},function(t,e,i){"use strict";e.a={UNDEFINED:"undefined",LOADING:"loading",READY:"ready",ERROR:"error"}},function(t,e,i){"use strict";var r,n=i(51),o=i(30),a=i(14),s=i(11),c=(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(t,e)},function(t,e){function i(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}),l=function(t){function e(e){var i=t.call(this)||this;return i.eventTarget_=e,i.pendingRemovals_=null,i.dispatching_=null,i.listeners_=null,i}return c(e,t),e.prototype.addEventListener=function(t,e){if(t&&e){var i=this.listeners_||(this.listeners_={}),r=i[t]||(i[t]=[]);-1===r.indexOf(e)&&r.push(e)}},e.prototype.dispatchEvent=function(t){var e="string"==typeof t?new o.a(t):t,i=e.type;e.target||(e.target=this.eventTarget_||this);var r,n=this.listeners_&&this.listeners_[i];if(n){var s=this.dispatching_||(this.dispatching_={}),c=this.pendingRemovals_||(this.pendingRemovals_={});i in s||(s[i]=0,c[i]=0),++s[i];for(var l=0,d=n.length;l<d;++l)if(!1===(r="handleEvent"in n[l]?n[l].handleEvent(e):n[l].call(this,e))||e.propagationStopped){r=!1;break}if(--s[i],0===s[i]){var u=c[i];for(delete c[i];u--;)this.removeEventListener(i,a.c);delete s[i]}return r}},e.prototype.disposeInternal=function(){this.listeners_&&Object(s.b)(this.listeners_)},e.prototype.getListeners=function(t){return this.listeners_&&this.listeners_[t]||void 0},e.prototype.hasListener=function(t){return!!this.listeners_&&(t?t in this.listeners_:Object.keys(this.listeners_).length>0)},e.prototype.removeEventListener=function(t,e){var i=this.listeners_&&this.listeners_[t];if(i){var r=i.indexOf(e);-1!==r&&(this.pendingRemovals_&&t in this.pendingRemovals_?(i[r]=a.c,++this.pendingRemovals_[t]):(i.splice(r,1),0===i.length&&delete this.listeners_[t]))}},e}(n.a);e.a=l},function(t,e,i){"use strict";e.a={PROPERTYCHANGE:"propertychange"}},function(t,e,i){"use strict";i.d(e,"b",(function(){return m}));var r,n=i(68),o=i(6),a=i(17),s=i(38),c=i(34),l=i(10),d=i(11),u=i(15),p=i(5),h=(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(t,e)},function(t,e){function i(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}),f=function(t){function e(e){var i=this,r=Object(d.a)({},e);delete r.source,(i=t.call(this,r)||this).mapPrecomposeKey_=null,i.mapRenderKey_=null,i.sourceChangeKey_=null,i.renderer_=null,e.render&&(i.render=e.render),e.map&&i.setMap(e.map),i.addEventListener(Object(u.b)(a.a.SOURCE),i.handleSourcePropertyChange_);var n=e.source?e.source:null;return i.setSource(n),i}return h(e,t),e.prototype.getLayersArray=function(t){var e=t||[];return e.push(this),e},e.prototype.getLayerStatesArray=function(t){var e=t||[];return e.push(this.getLayerState()),e},e.prototype.getSource=function(){return this.get(a.a.SOURCE)||null},e.prototype.getSourceState=function(){var t=this.getSource();return t?t.getState():c.a.UNDEFINED},e.prototype.handleSourceChange_=function(){this.changed()},e.prototype.handleSourcePropertyChange_=function(){this.sourceChangeKey_&&(Object(p.c)(this.sourceChangeKey_),this.sourceChangeKey_=null);var t=this.getSource();t&&(this.sourceChangeKey_=Object(p.a)(t,o.a.CHANGE,this.handleSourceChange_,this)),this.changed()},e.prototype.getFeatures=function(t){return this.renderer_.getFeatures(t)},e.prototype.render=function(t,e){var i=this.getRenderer();if(i.prepareFrame(t))return i.renderFrame(t,e)},e.prototype.setMap=function(t){this.mapPrecomposeKey_&&(Object(p.c)(this.mapPrecomposeKey_),this.mapPrecomposeKey_=null),t||this.changed(),this.mapRenderKey_&&(Object(p.c)(this.mapRenderKey_),this.mapRenderKey_=null),t&&(this.mapPrecomposeKey_=Object(p.a)(t,s.a.PRECOMPOSE,(function(t){var e=t.frameState.layerStatesArray,i=this.getLayerState(!1);Object(l.a)(!e.some((function(t){return t.layer===i.layer})),67),e.push(i)}),this),this.mapRenderKey_=Object(p.a)(this,o.a.CHANGE,t.render,t),this.changed())},e.prototype.setSource=function(t){this.set(a.a.SOURCE,t)},e.prototype.getRenderer=function(){return this.renderer_||(this.renderer_=this.createRenderer()),this.renderer_},e.prototype.hasRenderer=function(){return!!this.renderer_},e.prototype.createRenderer=function(){return null},e.prototype.disposeInternal=function(){this.setSource(null),t.prototype.disposeInternal.call(this)},e}(n.a);function m(t,e){if(!t.visible)return!1;var i=e.resolution;if(i<t.minResolution||i>=t.maxResolution)return!1;var r=e.zoom;return r>t.minZoom&&r<=t.maxZoom}e.a=f},function(t,e,i){"use strict";e.a={PRERENDER:"prerender",POSTRENDER:"postrender",PRECOMPOSE:"precompose",POSTCOMPOSE:"postcompose",RENDERCOMPLETE:"rendercomplete"}},function(t,e,i){"use strict";i.d(e,"c",(function(){return n})),i.d(e,"d",(function(){return o})),i.d(e,"a",(function(){return a})),i.d(e,"b",(function(){return s}));var r=i(4);function n(t){return void 0!==t?0:void 0}function o(t){return void 0!==t?t:void 0}function a(t){var e=2*Math.PI/t;return function(t,i){return i?t:void 0!==t?t=Math.floor(t/e+.5)*e:void 0}}function s(t){var e=t||Object(r.j)(5);return function(t,i){return i?t:void 0!==t?Math.abs(t)<=e?0:t:void 0}}},function(t,e,i){"use strict";e.a={FRACTION:"fraction",PIXELS:"pixels"}},function(t,e,i){"use strict";i.d(e,"b",(function(){return s})),i.d(e,"a",(function(){return p})),i.d(e,"c",(function(){return f}));var r=i(10),n=i(4),o=/^#([a-f0-9]{3}|[a-f0-9]{4}(?:[a-f0-9]{2}){0,2})$/i,a=/^([a-z]*)$|^hsla?\(.*\)$/i;function s(t){return"string"==typeof t?t:f(t)}function c(t){var e=document.createElement("div");if(e.style.color=t,""!==e.style.color){document.body.appendChild(e);var i=getComputedStyle(e).color;return document.body.removeChild(e),i}return""}var l,d,u=(l={},d=0,function(t){var e;if(l.hasOwnProperty(t))e=l[t];else{if(d>=1024){var i=0;for(var n in l)0==(3&i++)&&(delete l[n],--d)}e=function(t){var e,i,n,s,l;if(a.exec(t)&&(t=c(t)),o.exec(t)){var d=t.length-1,u=void 0;u=d<=4?1:2;var p=4===d||8===d;e=parseInt(t.substr(1+0*u,u),16),i=parseInt(t.substr(1+1*u,u),16),n=parseInt(t.substr(1+2*u,u),16),s=p?parseInt(t.substr(1+3*u,u),16):255,1==u&&(e=(e<<4)+e,i=(i<<4)+i,n=(n<<4)+n,p&&(s=(s<<4)+s)),l=[e,i,n,s/255]}else 0==t.indexOf("rgba(")?h(l=t.slice(5,-1).split(",").map(Number)):0==t.indexOf("rgb(")?((l=t.slice(4,-1).split(",").map(Number)).push(1),h(l)):Object(r.a)(!1,14);return l}(t),l[t]=e,++d}return e});function p(t){return Array.isArray(t)?t:u(t)}function h(t){return t[0]=Object(n.a)(t[0]+.5|0,0,255),t[1]=Object(n.a)(t[1]+.5|0,0,255),t[2]=Object(n.a)(t[2]+.5|0,0,255),t[3]=Object(n.a)(t[3],0,1),t}function f(t){var e=t[0];e!=(0|e)&&(e=e+.5|0);var i=t[1];i!=(0|i)&&(i=i+.5|0);var r=t[2];return r!=(0|r)&&(r=r+.5|0),"rgba("+e+","+i+","+r+","+(void 0===t[3]?1:t[3])+")"}},function(t,e,i){"use strict";i.d(e,"b",(function(){return b}));var r,n=i(15),o=i(23),a=i(1),s=i(7),c=i(0),l=i(8),d=i(14),u=i(27),p=(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(t,e)},function(t,e){function i(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}),h=Object(s.c)(),f=function(t){function e(){var e=t.call(this)||this;return e.extent_=Object(c.j)(),e.extentRevision_=-1,e.simplifiedGeometryMaxMinSquaredTolerance=0,e.simplifiedGeometryRevision=0,e.simplifyTransformedInternal=Object(d.d)((function(t,e,i){if(!i)return this.getSimplifiedGeometry(e);var r=this.clone();return r.applyTransform(i),r.getSimplifiedGeometry(e)})),e}return p(e,t),e.prototype.simplifyTransformed=function(t,e){return this.simplifyTransformedInternal(this.getRevision(),t,e)},e.prototype.clone=function(){return Object(a.b)()},e.prototype.closestPointXY=function(t,e,i,r){return Object(a.b)()},e.prototype.containsXY=function(t,e){var i=this.getClosestPoint([t,e]);return i[0]===t&&i[1]===e},e.prototype.getClosestPoint=function(t,e){var i=e||[NaN,NaN];return this.closestPointXY(t[0],t[1],i,1/0),i},e.prototype.intersectsCoordinate=function(t){return this.containsXY(t[0],t[1])},e.prototype.computeExtent=function(t){return Object(a.b)()},e.prototype.getExtent=function(t){if(this.extentRevision_!=this.getRevision()){var e=this.computeExtent(this.extent_);(isNaN(e[0])||isNaN(e[1]))&&Object(c.l)(e),this.extentRevision_=this.getRevision()}return Object(c.I)(this.extent_,t)},e.prototype.rotate=function(t,e){Object(a.b)()},e.prototype.scale=function(t,e,i){Object(a.b)()},e.prototype.simplify=function(t){return this.getSimplifiedGeometry(t*t)},e.prototype.getSimplifiedGeometry=function(t){return Object(a.b)()},e.prototype.getType=function(){return Object(a.b)()},e.prototype.applyTransform=function(t){Object(a.b)()},e.prototype.intersectsExtent=function(t){return Object(a.b)()},e.prototype.translate=function(t,e){Object(a.b)()},e.prototype.transform=function(t,e){var i=Object(l.f)(t),r=i.getUnits()==o.b.TILE_PIXELS?function(t,r,n){var o=i.getExtent(),a=i.getWorldExtent(),d=Object(c.A)(a)/Object(c.A)(o);return Object(s.b)(h,a[0],a[3],d,-d,0,0,0),Object(u.c)(t,0,t.length,n,h,r),Object(l.h)(i,e)(t,r,n)}:Object(l.h)(i,e);return this.applyTransform(r),this},e}(n.a),m=i(29),g=function(){var t=function(e,i){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(e,i)};return function(e,i){function r(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(r.prototype=i.prototype,new r)}}(),v=function(t){function e(){var e=t.call(this)||this;return e.layout=m.a.XY,e.stride=2,e.flatCoordinates=null,e}return g(e,t),e.prototype.computeExtent=function(t){return Object(c.o)(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,t)},e.prototype.getCoordinates=function(){return Object(a.b)()},e.prototype.getFirstCoordinate=function(){return this.flatCoordinates.slice(0,this.stride)},e.prototype.getFlatCoordinates=function(){return this.flatCoordinates},e.prototype.getLastCoordinate=function(){return this.flatCoordinates.slice(this.flatCoordinates.length-this.stride)},e.prototype.getLayout=function(){return this.layout},e.prototype.getSimplifiedGeometry=function(t){if(this.simplifiedGeometryRevision!==this.getRevision()&&(this.simplifiedGeometryMaxMinSquaredTolerance=0,this.simplifiedGeometryRevision=this.getRevision()),t<0||0!==this.simplifiedGeometryMaxMinSquaredTolerance&&t<=this.simplifiedGeometryMaxMinSquaredTolerance)return this;var e=this.getSimplifiedGeometryInternal(t);return e.getFlatCoordinates().length<this.flatCoordinates.length?e:(this.simplifiedGeometryMaxMinSquaredTolerance=t,this)},e.prototype.getSimplifiedGeometryInternal=function(t){return this},e.prototype.getStride=function(){return this.stride},e.prototype.setFlatCoordinates=function(t,e){this.stride=y(t),this.layout=t,this.flatCoordinates=e},e.prototype.setCoordinates=function(t,e){Object(a.b)()},e.prototype.setLayout=function(t,e,i){var r;if(t)r=y(t);else{for(var n=0;n<i;++n){if(0===e.length)return this.layout=m.a.XY,void(this.stride=2);e=e[0]}t=function(t){var e;2==t?e=m.a.XY:3==t?e=m.a.XYZ:4==t&&(e=m.a.XYZM);return e}(r=e.length)}this.layout=t,this.stride=r},e.prototype.applyTransform=function(t){this.flatCoordinates&&(t(this.flatCoordinates,this.flatCoordinates,this.stride),this.changed())},e.prototype.rotate=function(t,e){var i=this.getFlatCoordinates();if(i){var r=this.getStride();Object(u.a)(i,0,i.length,r,t,e,i),this.changed()}},e.prototype.scale=function(t,e,i){var r=e;void 0===r&&(r=t);var n=i;n||(n=Object(c.x)(this.getExtent()));var o=this.getFlatCoordinates();if(o){var a=this.getStride();Object(u.b)(o,0,o.length,a,t,r,n,o),this.changed()}},e.prototype.translate=function(t,e){var i=this.getFlatCoordinates();if(i){var r=this.getStride();Object(u.d)(i,0,i.length,r,t,e,i),this.changed()}},e}(f);function y(t){var e;return t==m.a.XY?e=2:t==m.a.XYZ||t==m.a.XYM?e=3:t==m.a.XYZM&&(e=4),e}function b(t,e,i){var r=t.getFlatCoordinates();if(r){var n=t.getStride();return Object(u.c)(r,0,r.length,n,e,i)}return null}e.a=v},function(t,e,i){"use strict";function r(t,e,i,r,n){for(var o=void 0!==n?n:[],a=0,s=e;s<i;s+=r)o[a++]=t.slice(s,s+r);return o.length=a,o}function n(t,e,i,n,o){for(var a=void 0!==o?o:[],s=0,c=0,l=i.length;c<l;++c){var d=i[c];a[s++]=r(t,e,d,n,a[s]),e=d}return a.length=s,a}function o(t,e,i,r,o){for(var a=void 0!==o?o:[],s=0,c=0,l=i.length;c<l;++c){var d=i[c];a[s++]=n(t,e,d,r,a[s]),e=d[d.length-1]}return a.length=s,a}i.d(e,"a",(function(){return r})),i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o}))},function(t,e,i){"use strict";i.d(e,"c",(function(){return d})),i.d(e,"d",(function(){return u})),i.d(e,"a",(function(){return p})),i.d(e,"b",(function(){return f}));var r=i(49),n=i(77),o=i(23),a=i(48),s=i(8),c=i(0),l=i(28);function d(t){var e=t.getDefaultTileGrid();return e||(e=function(t,e,i,o){return function(t,e,i,o){var a=void 0!==o?o:r.a.TOP_LEFT,s=h(t,e,i);return new n.a({extent:t,origin:Object(c.y)(t,a),resolutions:s,tileSize:i})}(f(t),e,i,o)}(t),t.setDefaultTileGrid(e)),e}function u(t,e,i){var r=e[0],n=t.getTileCoordCenter(e),o=f(i);if(Object(c.f)(o,n))return e;var a=Object(c.E)(o),s=Math.ceil((o[0]-n[0])/a);return n[0]+=a*s,t.getTileCoordForCoordAndZ(n,r)}function p(t){var e=t||{},i=e.extent||Object(s.f)("EPSG:3857").getExtent(),r={extent:i,minZoom:e.minZoom,tileSize:e.tileSize,resolutions:h(i,e.maxZoom,e.tileSize,e.maxResolution)};return new n.a(r)}function h(t,e,i,r){for(var n=void 0!==e?e:a.a,o=Object(c.A)(t),s=Object(c.E)(t),d=Object(l.c)(void 0!==i?i:a.b),u=r>0?r:Math.max(s/d[0],o/d[1]),p=n+1,h=new Array(p),f=0;f<p;++f)h[f]=u/Math.pow(2,f);return h}function f(t){var e=(t=Object(s.f)(t)).getExtent();if(!e){var i=180*s.a[o.b.DEGREES]/t.getMetersPerUnit();e=Object(c.k)(-i,-i,i,i)}return e}},function(t,e,i){"use strict";i.d(e,"a",(function(){return c})),i.d(e,"b",(function(){return l})),i.d(e,"c",(function(){return d})),i.d(e,"d",(function(){return u}));var r=i(18),n=i(3),o=i(16),a=i(1),s={Point:function(t,e,i,n){var a=i.getImage();if(a){if(a.getImageState()!=o.a.LOADED)return;var s=t.getBuilder(i.getZIndex(),r.a.IMAGE);s.setImageStyle(a,t.addDeclutter(!1)),s.drawPoint(e,n)}var c=i.getText();if(c){var l=t.getBuilder(i.getZIndex(),r.a.TEXT);l.setTextStyle(c,t.addDeclutter(!!a)),l.drawText(e,n)}},LineString:function(t,e,i,n){var o=i.getStroke();if(o){var a=t.getBuilder(i.getZIndex(),r.a.LINE_STRING);a.setFillStrokeStyle(null,o),a.drawLineString(e,n)}var s=i.getText();if(s){var c=t.getBuilder(i.getZIndex(),r.a.TEXT);c.setTextStyle(s,t.addDeclutter(!1)),c.drawText(e,n)}},Polygon:function(t,e,i,n){var o=i.getFill(),a=i.getStroke();if(o||a){var s=t.getBuilder(i.getZIndex(),r.a.POLYGON);s.setFillStrokeStyle(o,a),s.drawPolygon(e,n)}var c=i.getText();if(c){var l=t.getBuilder(i.getZIndex(),r.a.TEXT);l.setTextStyle(c,t.addDeclutter(!1)),l.drawText(e,n)}},MultiPoint:function(t,e,i,n){var a=i.getImage();if(a){if(a.getImageState()!=o.a.LOADED)return;var s=t.getBuilder(i.getZIndex(),r.a.IMAGE);s.setImageStyle(a,t.addDeclutter(!1)),s.drawMultiPoint(e,n)}var c=i.getText();if(c){var l=t.getBuilder(i.getZIndex(),r.a.TEXT);l.setTextStyle(c,t.addDeclutter(!!a)),l.drawText(e,n)}},MultiLineString:function(t,e,i,n){var o=i.getStroke();if(o){var a=t.getBuilder(i.getZIndex(),r.a.LINE_STRING);a.setFillStrokeStyle(null,o),a.drawMultiLineString(e,n)}var s=i.getText();if(s){var c=t.getBuilder(i.getZIndex(),r.a.TEXT);c.setTextStyle(s,t.addDeclutter(!1)),c.drawText(e,n)}},MultiPolygon:function(t,e,i,n){var o=i.getFill(),a=i.getStroke();if(a||o){var s=t.getBuilder(i.getZIndex(),r.a.POLYGON);s.setFillStrokeStyle(o,a),s.drawMultiPolygon(e,n)}var c=i.getText();if(c){var l=t.getBuilder(i.getZIndex(),r.a.TEXT);l.setTextStyle(c,t.addDeclutter(!1)),l.drawText(e,n)}},GeometryCollection:function(t,e,i,r){var n,o,a=e.getGeometriesArray();for(n=0,o=a.length;n<o;++n){(0,s[a[n].getType()])(t,a[n],i,r)}},Circle:function(t,e,i,n){var o=i.getFill(),a=i.getStroke();if(o||a){var s=t.getBuilder(i.getZIndex(),r.a.CIRCLE);s.setFillStrokeStyle(o,a),s.drawCircle(e,n)}var c=i.getText();if(c){var l=t.getBuilder(i.getZIndex(),r.a.TEXT);l.setTextStyle(c,t.addDeclutter(!1)),l.drawText(e,n)}}};function c(t,e){return parseInt(Object(a.c)(t),10)-parseInt(Object(a.c)(e),10)}function l(t,e){var i=d(t,e);return i*i}function d(t,e){return.5*t/e}function u(t,e,i,a,c,l){var d=!1,u=i.getImage();if(u){var p=u.getImageState();p==o.a.LOADED||p==o.a.ERROR?u.unlistenImageChange(c):(p==o.a.IDLE&&u.load(),p=u.getImageState(),u.listenImageChange(c),d=!0)}return function(t,e,i,o,a){var c=i.getGeometryFunction()(e);if(!c)return;var l=c.simplifyTransformed(o,a);if(i.getRenderer())!function t(e,i,o,a){if(i.getType()==n.a.GEOMETRY_COLLECTION){for(var s=i.getGeometries(),c=0,l=s.length;c<l;++c)t(e,s[c],o,a);return}e.getBuilder(o.getZIndex(),r.a.DEFAULT).drawCustom(i,a,o.getRenderer())}(t,l,i,e);else{(0,s[l.getType()])(t,l,i,e)}}(t,e,i,a,l),d}},function(t,e,i){"use strict";var r,n=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},o=function(){var t={};return function(e){if(void 0===t[e]){var i=document.querySelector(e);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(t){i=null}t[e]=i}return t[e]}}(),a=[];function s(t){for(var e=-1,i=0;i<a.length;i++)if(a[i].identifier===t){e=i;break}return e}function c(t,e){for(var i={},r=[],n=0;n<t.length;n++){var o=t[n],c=e.base?o[0]+e.base:o[0],l=i[c]||0,d="".concat(c," ").concat(l);i[c]=l+1;var u=s(d),p={css:o[1],media:o[2],sourceMap:o[3]};-1!==u?(a[u].references++,a[u].updater(p)):a.push({identifier:d,updater:g(p,e),references:1}),r.push(d)}return r}function l(t){var e=document.createElement("style"),r=t.attributes||{};if(void 0===r.nonce){var n=i.nc;n&&(r.nonce=n)}if(Object.keys(r).forEach((function(t){e.setAttribute(t,r[t])})),"function"==typeof t.insert)t.insert(e);else{var a=o(t.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var d,u=(d=[],function(t,e){return d[t]=e,d.filter(Boolean).join("\n")});function p(t,e,i,r){var n=i?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(t.styleSheet)t.styleSheet.cssText=u(e,n);else{var o=document.createTextNode(n),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(o,a[e]):t.appendChild(o)}}function h(t,e,i){var r=i.css,n=i.media,o=i.sourceMap;if(n?t.setAttribute("media",n):t.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var f=null,m=0;function g(t,e){var i,r,n;if(e.singleton){var o=m++;i=f||(f=l(e)),r=p.bind(null,i,o,!1),n=p.bind(null,i,o,!0)}else i=l(e),r=h.bind(null,i,e),n=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(i)};return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else n()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=n());var i=c(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var r=0;r<i.length;r++){var n=s(i[r]);a[n].references--}for(var o=c(t,e),l=0;l<i.length;l++){var d=s(i[l]);0===a[d].references&&(a[d].updater(),a.splice(d,1))}i=o}}}},function(t,e,i){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var i=function(t,e){var i=t[1]||"",r=t[3];if(!r)return i;if(e&&"function"==typeof btoa){var n=(a=r,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(c," */")),o=r.sources.map((function(t){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(t," */")}));return[i].concat(o).concat([n]).join("\n")}var a,s,c;return[i].join("\n")}(e,t);return e[2]?"@media ".concat(e[2]," {").concat(i,"}"):i})).join("")},e.i=function(t,i,r){"string"==typeof t&&(t=[[null,t,""]]);var n={};if(r)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(n[a]=!0)}for(var s=0;s<t.length;s++){var c=[].concat(t[s]);r&&n[c[0]]||(i&&(c[2]?c[2]="".concat(i," and ").concat(c[2]):c[2]=i),e.push(c))}},e}},function(t,e,i){"use strict";i.d(e,"a",(function(){return r})),i.d(e,"b",(function(){return n}));var r=42,n=256},function(t,e,i){"use strict";e.a={BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",TOP_LEFT:"top-left",TOP_RIGHT:"top-right"}},function(t,e,i){"use strict";i.d(e,"a",(function(){return n}));var r=function(){function t(t,e,i,r){this.minX=t,this.maxX=e,this.minY=i,this.maxY=r}return t.prototype.contains=function(t){return this.containsXY(t[1],t[2])},t.prototype.containsTileRange=function(t){return this.minX<=t.minX&&t.maxX<=this.maxX&&this.minY<=t.minY&&t.maxY<=this.maxY},t.prototype.containsXY=function(t,e){return this.minX<=t&&t<=this.maxX&&this.minY<=e&&e<=this.maxY},t.prototype.equals=function(t){return this.minX==t.minX&&this.minY==t.minY&&this.maxX==t.maxX&&this.maxY==t.maxY},t.prototype.extend=function(t){t.minX<this.minX&&(this.minX=t.minX),t.maxX>this.maxX&&(this.maxX=t.maxX),t.minY<this.minY&&(this.minY=t.minY),t.maxY>this.maxY&&(this.maxY=t.maxY)},t.prototype.getHeight=function(){return this.maxY-this.minY+1},t.prototype.getSize=function(){return[this.getWidth(),this.getHeight()]},t.prototype.getWidth=function(){return this.maxX-this.minX+1},t.prototype.intersects=function(t){return this.minX<=t.maxX&&this.maxX>=t.minX&&this.minY<=t.maxY&&this.maxY>=t.minY},t}();function n(t,e,i,n,o){return void 0!==o?(o.minX=t,o.maxX=e,o.minY=i,o.maxY=n,o):new r(t,e,i,n)}e.b=r},function(t,e,i){"use strict";var r=function(){function t(){this.disposed=!1}return t.prototype.dispose=function(){this.disposed||(this.disposed=!0,this.disposeInternal())},t.prototype.disposeInternal=function(){},t}();e.a=r},function(t,e,i){"use strict";function r(t,e,i,r){for(var n=0,o=i.length;n<o;++n)t[e++]=i[n];return e}function n(t,e,i,r){for(var n=0,o=i.length;n<o;++n)for(var a=i[n],s=0;s<r;++s)t[e++]=a[s];return e}function o(t,e,i,r,o){for(var a=o||[],s=0,c=0,l=i.length;c<l;++c){var d=n(t,e,i[c],r);a[s++]=d,e=d}return a.length=s,a}i.d(e,"a",(function(){return r})),i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o}))},function(t,e,i){"use strict";i.d(e,"a",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"b",(function(){return s}));var r=i(4);function n(t,e,i,n,o,a,s){var c=(i-e)/n;if(c<3){for(;e<i;e+=n)a[s++]=t[e],a[s++]=t[e+1];return s}var l=new Array(c);l[0]=1,l[c-1]=1;for(var d=[e,i-n],u=0;d.length>0;){for(var p=d.pop(),h=d.pop(),f=0,m=t[h],g=t[h+1],v=t[p],y=t[p+1],b=h+n;b<p;b+=n){var _=t[b],w=t[b+1],C=Object(r.h)(_,w,m,g,v,y);C>f&&(u=b,f=C)}f>o&&(l[(u-e)/n]=1,h+n<u&&d.push(h,u),u+n<p&&d.push(u,p))}for(b=0;b<c;++b)l[b]&&(a[s++]=t[e+b*n],a[s++]=t[e+b*n+1]);return s}function o(t,e){return e*Math.round(t/e)}function a(t,e,i,r,n,a,s){if(e==i)return s;var c,l,d=o(t[e],n),u=o(t[e+1],n);e+=r,a[s++]=d,a[s++]=u;do{if(c=o(t[e],n),l=o(t[e+1],n),(e+=r)==i)return a[s++]=c,a[s++]=l,s}while(c==d&&l==u);for(;e<i;){var p=o(t[e],n),h=o(t[e+1],n);if(e+=r,p!=c||h!=l){var f=c-d,m=l-u,g=p-d,v=h-u;f*v==m*g&&(f<0&&g<f||f==g||f>0&&g>f)&&(m<0&&v<m||m==v||m>0&&v>m)?(c=p,l=h):(a[s++]=c,a[s++]=l,d=c,u=l,c=p,l=h)}}return a[s++]=c,a[s++]=l,s}function s(t,e,i,r,n,o,s,c){for(var l=0,d=i.length;l<d;++l){var u=i[l];s=a(t,e,u,r,n,o,s),c.push(s),e=u}return s}},function(t,e,i){"use strict";i.d(e,"a",(function(){return a}));var r=i(41),n=function(){function t(){this.cache_={},this.cacheSize_=0,this.maxCacheSize_=32}return t.prototype.clear=function(){this.cache_={},this.cacheSize_=0},t.prototype.canExpireCache=function(){return this.cacheSize_>this.maxCacheSize_},t.prototype.expire=function(){if(this.canExpireCache()){var t=0;for(var e in this.cache_){var i=this.cache_[e];0!=(3&t++)||i.hasListener()||(delete this.cache_[e],--this.cacheSize_)}}},t.prototype.get=function(t,e,i){var r=o(t,e,i);return r in this.cache_?this.cache_[r]:null},t.prototype.set=function(t,e,i,r){var n=o(t,e,i);this.cache_[n]=r,++this.cacheSize_},t.prototype.setSize=function(t){this.maxCacheSize_=t,this.expire()},t}();function o(t,e,i){return e+":"+t+":"+(i?Object(r.b)(i):"null")}var a=new n},function(t,e,i){"use strict";e.a={POSTRENDER:"postrender",MOVESTART:"movestart",MOVEEND:"moveend"}},,function(t,e,i){"use strict";i.d(e,"a",(function(){return n})),i.d(e,"b",(function(){return o}));i(3);var r=i(4);function n(t,e,i){var n=i||6371008.8,o=Object(r.j)(t[1]),a=Object(r.j)(e[1]),s=(a-o)/2,c=Object(r.j)(e[0]-t[0])/2,l=Math.sin(s)*Math.sin(s)+Math.sin(c)*Math.sin(c)*Math.cos(o)*Math.cos(a);return 2*n*Math.atan2(Math.sqrt(l),Math.sqrt(1-l))}function o(t,e,i,n){var o=n||6371008.8,a=Object(r.j)(t[1]),s=Object(r.j)(t[0]),c=e/o,l=Math.asin(Math.sin(a)*Math.cos(c)+Math.cos(a)*Math.sin(c)*Math.cos(i)),d=s+Math.atan2(Math.sin(i)*Math.sin(c)*Math.cos(a),Math.cos(c)-Math.sin(a)*Math.sin(l));return[Object(r.i)(d),Object(r.i)(l)]}},function(t,e,i){"use strict";var r,n=i(3),o=i(66),a=i(33),s=i(7),c=i(2),l=i(12),d=i(0),u=i(27),p=i(42),h=(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(t,e)},function(t,e){function i(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}),f=function(t){function e(e,i,r,n,o,a,c){var l=t.call(this)||this;return l.context_=e,l.pixelRatio_=i,l.extent_=r,l.transform_=n,l.viewRotation_=o,l.squaredTolerance_=a,l.userTransform_=c,l.contextFillState_=null,l.contextStrokeState_=null,l.contextTextState_=null,l.fillState_=null,l.strokeState_=null,l.image_=null,l.imageAnchorX_=0,l.imageAnchorY_=0,l.imageHeight_=0,l.imageOpacity_=0,l.imageOriginX_=0,l.imageOriginY_=0,l.imageRotateWithView_=!1,l.imageRotation_=0,l.imageScale_=[0,0],l.imageWidth_=0,l.text_="",l.textOffsetX_=0,l.textOffsetY_=0,l.textRotateWithView_=!1,l.textRotation_=0,l.textScale_=[0,0],l.textFillState_=null,l.textStrokeState_=null,l.textState_=null,l.pixelCoordinates_=[],l.tmpLocalTransform_=Object(s.c)(),l}return h(e,t),e.prototype.drawImages_=function(t,e,i,r){if(this.image_){var n=Object(u.c)(t,e,i,2,this.transform_,this.pixelCoordinates_),o=this.context_,a=this.tmpLocalTransform_,c=o.globalAlpha;1!=this.imageOpacity_&&(o.globalAlpha=c*this.imageOpacity_);var l=this.imageRotation_;this.imageRotateWithView_&&(l+=this.viewRotation_);for(var d=0,p=n.length;d<p;d+=2){var h=n[d]-this.imageAnchorX_,f=n[d+1]-this.imageAnchorY_;if(0!==l||1!=this.imageScale_[0]||1!=this.imageScale_[1]){var m=h+this.imageAnchorX_,g=f+this.imageAnchorY_;Object(s.b)(a,m,g,1,1,l,-m,-g),o.setTransform.apply(o,a),o.translate(m,g),o.scale(this.imageScale_[0],this.imageScale_[1]),o.drawImage(this.image_,this.imageOriginX_,this.imageOriginY_,this.imageWidth_,this.imageHeight_,-this.imageAnchorX_,-this.imageAnchorY_,this.imageWidth_,this.imageHeight_),o.setTransform(1,0,0,1,0,0)}else o.drawImage(this.image_,this.imageOriginX_,this.imageOriginY_,this.imageWidth_,this.imageHeight_,h,f,this.imageWidth_,this.imageHeight_)}1!=this.imageOpacity_&&(o.globalAlpha=c)}},e.prototype.drawText_=function(t,e,i,r){if(this.textState_&&""!==this.text_){this.textFillState_&&this.setContextFillState_(this.textFillState_),this.textStrokeState_&&this.setContextStrokeState_(this.textStrokeState_),this.setContextTextState_(this.textState_);var n=Object(u.c)(t,e,i,r,this.transform_,this.pixelCoordinates_),o=this.context_,a=this.textRotation_;for(this.textRotateWithView_&&(a+=this.viewRotation_);e<i;e+=r){var c=n[e]+this.textOffsetX_,l=n[e+1]+this.textOffsetY_;if(0!==a||1!=this.textScale_[0]||1!=this.textScale_[1]){var d=Object(s.b)(this.tmpLocalTransform_,c,l,1,1,a,-c,-l);o.setTransform.apply(o,d),o.translate(c,l),o.scale(this.textScale_[0],this.textScale_[1]),this.textStrokeState_&&o.strokeText(this.text_,0,0),this.textFillState_&&o.fillText(this.text_,0,0),o.setTransform(1,0,0,1,0,0)}else this.textStrokeState_&&o.strokeText(this.text_,c,l),this.textFillState_&&o.fillText(this.text_,c,l)}}},e.prototype.moveToLineTo_=function(t,e,i,r,n){var o=this.context_,a=Object(u.c)(t,e,i,r,this.transform_,this.pixelCoordinates_);o.moveTo(a[0],a[1]);var s=a.length;n&&(s-=2);for(var c=2;c<s;c+=2)o.lineTo(a[c],a[c+1]);return n&&o.closePath(),i},e.prototype.drawRings_=function(t,e,i,r){for(var n=0,o=i.length;n<o;++n)e=this.moveToLineTo_(t,e,i[n],r,!0);return e},e.prototype.drawCircle=function(t){if(Object(d.F)(this.extent_,t.getExtent())){if(this.fillState_||this.strokeState_){this.fillState_&&this.setContextFillState_(this.fillState_),this.strokeState_&&this.setContextStrokeState_(this.strokeState_);var e=Object(p.b)(t,this.transform_,this.pixelCoordinates_),i=e[2]-e[0],r=e[3]-e[1],n=Math.sqrt(i*i+r*r),o=this.context_;o.beginPath(),o.arc(e[0],e[1],n,0,2*Math.PI),this.fillState_&&o.fill(),this.strokeState_&&o.stroke()}""!==this.text_&&this.drawText_(t.getCenter(),0,2,2)}},e.prototype.setStyle=function(t){this.setFillStrokeStyle(t.getFill(),t.getStroke()),this.setImageStyle(t.getImage()),this.setTextStyle(t.getText())},e.prototype.setTransform=function(t){this.transform_=t},e.prototype.drawGeometry=function(t){switch(t.getType()){case n.a.POINT:this.drawPoint(t);break;case n.a.LINE_STRING:this.drawLineString(t);break;case n.a.POLYGON:this.drawPolygon(t);break;case n.a.MULTI_POINT:this.drawMultiPoint(t);break;case n.a.MULTI_LINE_STRING:this.drawMultiLineString(t);break;case n.a.MULTI_POLYGON:this.drawMultiPolygon(t);break;case n.a.GEOMETRY_COLLECTION:this.drawGeometryCollection(t);break;case n.a.CIRCLE:this.drawCircle(t)}},e.prototype.drawFeature=function(t,e){var i=e.getGeometryFunction()(t);i&&Object(d.F)(this.extent_,i.getExtent())&&(this.setStyle(e),this.drawGeometry(i))},e.prototype.drawGeometryCollection=function(t){for(var e=t.getGeometriesArray(),i=0,r=e.length;i<r;++i)this.drawGeometry(e[i])},e.prototype.drawPoint=function(t){this.squaredTolerance_&&(t=t.simplifyTransformed(this.squaredTolerance_,this.userTransform_));var e=t.getFlatCoordinates(),i=t.getStride();this.image_&&this.drawImages_(e,0,e.length,i),""!==this.text_&&this.drawText_(e,0,e.length,i)},e.prototype.drawMultiPoint=function(t){this.squaredTolerance_&&(t=t.simplifyTransformed(this.squaredTolerance_,this.userTransform_));var e=t.getFlatCoordinates(),i=t.getStride();this.image_&&this.drawImages_(e,0,e.length,i),""!==this.text_&&this.drawText_(e,0,e.length,i)},e.prototype.drawLineString=function(t){if(this.squaredTolerance_&&(t=t.simplifyTransformed(this.squaredTolerance_,this.userTransform_)),Object(d.F)(this.extent_,t.getExtent())){if(this.strokeState_){this.setContextStrokeState_(this.strokeState_);var e=this.context_,i=t.getFlatCoordinates();e.beginPath(),this.moveToLineTo_(i,0,i.length,t.getStride(),!1),e.stroke()}if(""!==this.text_){var r=t.getFlatMidpoint();this.drawText_(r,0,2,2)}}},e.prototype.drawMultiLineString=function(t){this.squaredTolerance_&&(t=t.simplifyTransformed(this.squaredTolerance_,this.userTransform_));var e=t.getExtent();if(Object(d.F)(this.extent_,e)){if(this.strokeState_){this.setContextStrokeState_(this.strokeState_);var i=this.context_,r=t.getFlatCoordinates(),n=0,o=t.getEnds(),a=t.getStride();i.beginPath();for(var s=0,c=o.length;s<c;++s)n=this.moveToLineTo_(r,n,o[s],a,!1);i.stroke()}if(""!==this.text_){var l=t.getFlatMidpoints();this.drawText_(l,0,l.length,2)}}},e.prototype.drawPolygon=function(t){if(this.squaredTolerance_&&(t=t.simplifyTransformed(this.squaredTolerance_,this.userTransform_)),Object(d.F)(this.extent_,t.getExtent())){if(this.strokeState_||this.fillState_){this.fillState_&&this.setContextFillState_(this.fillState_),this.strokeState_&&this.setContextStrokeState_(this.strokeState_);var e=this.context_;e.beginPath(),this.drawRings_(t.getOrientedFlatCoordinates(),0,t.getEnds(),t.getStride()),this.fillState_&&e.fill(),this.strokeState_&&e.stroke()}if(""!==this.text_){var i=t.getFlatInteriorPoint();this.drawText_(i,0,2,2)}}},e.prototype.drawMultiPolygon=function(t){if(this.squaredTolerance_&&(t=t.simplifyTransformed(this.squaredTolerance_,this.userTransform_)),Object(d.F)(this.extent_,t.getExtent())){if(this.strokeState_||this.fillState_){this.fillState_&&this.setContextFillState_(this.fillState_),this.strokeState_&&this.setContextStrokeState_(this.strokeState_);var e=this.context_,i=t.getOrientedFlatCoordinates(),r=0,n=t.getEndss(),o=t.getStride();e.beginPath();for(var a=0,s=n.length;a<s;++a){var c=n[a];r=this.drawRings_(i,r,c,o)}this.fillState_&&e.fill(),this.strokeState_&&e.stroke()}if(""!==this.text_){var l=t.getFlatInteriorPoints();this.drawText_(l,0,l.length,2)}}},e.prototype.setContextFillState_=function(t){var e=this.context_,i=this.contextFillState_;i?i.fillStyle!=t.fillStyle&&(i.fillStyle=t.fillStyle,e.fillStyle=t.fillStyle):(e.fillStyle=t.fillStyle,this.contextFillState_={fillStyle:t.fillStyle})},e.prototype.setContextStrokeState_=function(t){var e=this.context_,i=this.contextStrokeState_;i?(i.lineCap!=t.lineCap&&(i.lineCap=t.lineCap,e.lineCap=t.lineCap),e.setLineDash&&(Object(l.a)(i.lineDash,t.lineDash)||e.setLineDash(i.lineDash=t.lineDash),i.lineDashOffset!=t.lineDashOffset&&(i.lineDashOffset=t.lineDashOffset,e.lineDashOffset=t.lineDashOffset)),i.lineJoin!=t.lineJoin&&(i.lineJoin=t.lineJoin,e.lineJoin=t.lineJoin),i.lineWidth!=t.lineWidth&&(i.lineWidth=t.lineWidth,e.lineWidth=t.lineWidth),i.miterLimit!=t.miterLimit&&(i.miterLimit=t.miterLimit,e.miterLimit=t.miterLimit),i.strokeStyle!=t.strokeStyle&&(i.strokeStyle=t.strokeStyle,e.strokeStyle=t.strokeStyle)):(e.lineCap=t.lineCap,e.setLineDash&&(e.setLineDash(t.lineDash),e.lineDashOffset=t.lineDashOffset),e.lineJoin=t.lineJoin,e.lineWidth=t.lineWidth,e.miterLimit=t.miterLimit,e.strokeStyle=t.strokeStyle,this.contextStrokeState_={lineCap:t.lineCap,lineDash:t.lineDash,lineDashOffset:t.lineDashOffset,lineJoin:t.lineJoin,lineWidth:t.lineWidth,miterLimit:t.miterLimit,strokeStyle:t.strokeStyle})},e.prototype.setContextTextState_=function(t){var e=this.context_,i=this.contextTextState_,r=t.textAlign?t.textAlign:c.m;i?(i.font!=t.font&&(i.font=t.font,e.font=t.font),i.textAlign!=r&&(i.textAlign=r,e.textAlign=r),i.textBaseline!=t.textBaseline&&(i.textBaseline=t.textBaseline,e.textBaseline=t.textBaseline)):(e.font=t.font,e.textAlign=r,e.textBaseline=t.textBaseline,this.contextTextState_={font:t.font,textAlign:r,textBaseline:t.textBaseline})},e.prototype.setFillStrokeStyle=function(t,e){if(t){var i=t.getColor();this.fillState_={fillStyle:Object(a.a)(i||c.c)}}else this.fillState_=null;if(e){var r=e.getColor(),n=e.getLineCap(),o=e.getLineDash(),s=e.getLineDashOffset(),l=e.getLineJoin(),d=e.getWidth(),u=e.getMiterLimit();this.strokeState_={lineCap:void 0!==n?n:c.e,lineDash:o||c.f,lineDashOffset:s||c.g,lineJoin:void 0!==l?l:c.h,lineWidth:this.pixelRatio_*(void 0!==d?d:c.i),miterLimit:void 0!==u?u:c.j,strokeStyle:Object(a.a)(r||c.l)}}else this.strokeState_=null},e.prototype.setImageStyle=function(t){if(t){var e=t.getSize();if(e){var i=t.getAnchor(),r=t.getImage(1),n=t.getOrigin(),o=t.getScaleArray();this.imageAnchorX_=i[0],this.imageAnchorY_=i[1],this.imageHeight_=e[1],this.image_=r,this.imageOpacity_=t.getOpacity(),this.imageOriginX_=n[0],this.imageOriginY_=n[1],this.imageRotateWithView_=t.getRotateWithView(),this.imageRotation_=t.getRotation(),this.imageScale_=[this.pixelRatio_*o[0],this.pixelRatio_*o[1]],this.imageWidth_=e[0]}else this.image_=null}else this.image_=null},e.prototype.setTextStyle=function(t){if(t){var e=t.getFill();if(e){var i=e.getColor();this.textFillState_={fillStyle:Object(a.a)(i||c.c)}}else this.textFillState_=null;var r=t.getStroke();if(r){var n=r.getColor(),o=r.getLineCap(),s=r.getLineDash(),l=r.getLineDashOffset(),d=r.getLineJoin(),u=r.getWidth(),p=r.getMiterLimit();this.textStrokeState_={lineCap:void 0!==o?o:c.e,lineDash:s||c.f,lineDashOffset:l||c.g,lineJoin:void 0!==d?d:c.h,lineWidth:void 0!==u?u:c.i,miterLimit:void 0!==p?p:c.j,strokeStyle:Object(a.a)(n||c.l)}}else this.textStrokeState_=null;var h=t.getFont(),f=t.getOffsetX(),m=t.getOffsetY(),g=t.getRotateWithView(),v=t.getRotation(),y=t.getScaleArray(),b=t.getText(),_=t.getTextAlign(),w=t.getTextBaseline();this.textState_={font:void 0!==h?h:c.d,textAlign:void 0!==_?_:c.m,textBaseline:void 0!==w?w:c.n},this.text_=void 0!==b?b:"",this.textOffsetX_=void 0!==f?this.pixelRatio_*f:0,this.textOffsetY_=void 0!==m?this.pixelRatio_*m:0,this.textRotateWithView_=void 0!==g&&g,this.textRotation_=void 0!==v?v:0,this.textScale_=[this.pixelRatio_*y[0],this.pixelRatio_*y[1]]}else this.text_=""},e}(o.a);e.a=f},function(t,e,i){"use strict";i.d(e,"b",(function(){return z}));var r=i(29),n=i(3),o=i(42),a=i(4);function s(t,e,i,r,n,o,s){var c,l=t[e],d=t[e+1],u=t[i]-l,p=t[i+1]-d;if(0===u&&0===p)c=e;else{var h=((n-l)*u+(o-d)*p)/(u*u+p*p);if(h>1)c=i;else{if(h>0){for(var f=0;f<r;++f)s[f]=Object(a.c)(t[e+f],t[i+f],h);return void(s.length=r)}c=e}}for(f=0;f<r;++f)s[f]=t[c+f];s.length=r}function c(t,e,i,r,n){var o=t[e],s=t[e+1];for(e+=r;e<i;e+=r){var c=t[e],l=t[e+1],d=Object(a.g)(o,s,c,l);d>n&&(n=d),o=c,s=l}return n}function l(t,e,i,r,n){for(var o=0,a=i.length;o<a;++o){var s=i[o];n=c(t,e,s,r,n),e=s}return n}function d(t,e,i,r,n,o,c,l,d,u,p){if(e==i)return u;var h,f;if(0===n){if((f=Object(a.g)(c,l,t[e],t[e+1]))<u){for(h=0;h<r;++h)d[h]=t[e+h];return d.length=r,f}return u}for(var m=p||[NaN,NaN],g=e+r;g<i;)if(s(t,g-r,g,r,c,l,m),(f=Object(a.g)(c,l,m[0],m[1]))<u){for(u=f,h=0;h<r;++h)d[h]=m[h];d.length=r,g+=r}else g+=r*Math.max((Math.sqrt(f)-Math.sqrt(u))/n|0,1);if(o&&(s(t,i-r,e,r,c,l,m),(f=Object(a.g)(c,l,m[0],m[1]))<u)){for(u=f,h=0;h<r;++h)d[h]=m[h];d.length=r}return u}function u(t,e,i,r,n,o,a,s,c,l,u){for(var p=u||[NaN,NaN],h=0,f=i.length;h<f;++h){var m=i[h];l=d(t,e,m,r,n,o,a,s,c,l,p),e=m}return l}var p=i(0),h=i(52),f=i(53),m=i(43);function g(t,e,i,r){for(var n=0,o=t[i-r],a=t[i-r+1];e<i;e+=r){var s=t[e],c=t[e+1];n+=a*s-o*c,o=s,a=c}return n/2}function v(t,e,i,r){for(var n=0,o=0,a=i.length;o<a;++o){var s=i[o];n+=g(t,e,s,r),e=s}return n}var y,b=(y=function(t,e){return(y=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(t,e)},function(t,e){function i(){this.constructor=t}y(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}),_=function(t){function e(e,i){var r=t.call(this)||this;return r.maxDelta_=-1,r.maxDeltaRevision_=-1,void 0===i||Array.isArray(e[0])?r.setCoordinates(e,i):r.setFlatCoordinates(i,e),r}return b(e,t),e.prototype.clone=function(){return new e(this.flatCoordinates.slice(),this.layout)},e.prototype.closestPointXY=function(t,e,i,r){return r<Object(p.e)(this.getExtent(),t,e)?r:(this.maxDeltaRevision_!=this.getRevision()&&(this.maxDelta_=Math.sqrt(c(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,0)),this.maxDeltaRevision_=this.getRevision()),d(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,this.maxDelta_,!0,t,e,i,r))},e.prototype.getArea=function(){return g(this.flatCoordinates,0,this.flatCoordinates.length,this.stride)},e.prototype.getCoordinates=function(){return Object(m.a)(this.flatCoordinates,0,this.flatCoordinates.length,this.stride)},e.prototype.getSimplifiedGeometryInternal=function(t){var i=[];return i.length=Object(f.a)(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,t,i,0),new e(i,r.a.XY)},e.prototype.getType=function(){return n.a.LINEAR_RING},e.prototype.intersectsExtent=function(t){return!1},e.prototype.setCoordinates=function(t,e){this.setLayout(e,t,1),this.flatCoordinates||(this.flatCoordinates=[]),this.flatCoordinates.length=Object(h.b)(this.flatCoordinates,0,t,this.stride),this.changed()},e}(o.a),w=i(81),C=i(12);function x(t,e,i,r,n){return!Object(p.t)(n,(function(n){return!S(t,e,i,r,n[0],n[1])}))}function S(t,e,i,r,n,o){for(var a=0,s=t[i-r],c=t[i-r+1];e<i;e+=r){var l=t[e],d=t[e+1];c<=o?d>o&&(l-s)*(o-c)-(n-s)*(d-c)>0&&a++:d<=o&&(l-s)*(o-c)-(n-s)*(d-c)<0&&a--,s=l,c=d}return 0!==a}function E(t,e,i,r,n,o){if(0===i.length)return!1;if(!S(t,e,i[0],r,n,o))return!1;for(var a=1,s=i.length;a<s;++a)if(S(t,i[a-1],i[a],r,n,o))return!1;return!0}function M(t,e,i,r,n,o,a){for(var s,c,l,d,u,p,h,f=n[o+1],m=[],g=0,v=i.length;g<v;++g){var y=i[g];for(d=t[y-r],p=t[y-r+1],s=e;s<y;s+=r)u=t[s],h=t[s+1],(f<=p&&h<=f||p<=f&&f<=h)&&(l=(f-p)/(h-p)*(u-d)+d,m.push(l)),d=u,p=h}var b=NaN,_=-1/0;for(m.sort(C.e),d=m[0],s=1,c=m.length;s<c;++s){u=m[s];var w=Math.abs(u-d);w>_&&E(t,e,i,r,l=(d+u)/2,f)&&(b=l,_=w),d=u}return isNaN(b)&&(b=n[o]),a?(a.push(b,f,_),a):[b,f,_]}function T(t,e,i,r,n){var o=Object(p.s)(Object(p.j)(),t,e,i,r);return!!Object(p.F)(n,o)&&(!!Object(p.g)(n,o)||(o[0]>=n[0]&&o[2]<=n[2]||(o[1]>=n[1]&&o[3]<=n[3]||function(t,e,i,r,n){for(var o,a=[t[e],t[e+1]],s=[];e+r<i;e+=r){if(s[0]=t[e+r],s[1]=t[e+r+1],o=n(a,s))return o;a[0]=s[0],a[1]=s[1]}return!1}(t,e,i,r,(function(t,e){return Object(p.G)(n,t,e)})))))}function O(t,e,i,r,n){if(!function(t,e,i,r,n){return!!T(t,e,i,r,n)||(!!S(t,e,i,r,n[0],n[1])||(!!S(t,e,i,r,n[0],n[3])||(!!S(t,e,i,r,n[2],n[1])||!!S(t,e,i,r,n[2],n[3]))))}(t,e,i[0],r,n))return!1;if(1===i.length)return!0;for(var o=1,a=i.length;o<a;++o)if(x(t,i[o-1],i[o],r,n)&&!T(t,i[o-1],i[o],r,n))return!1;return!0}function L(t,e,i,r){for(;e<i-r;){for(var n=0;n<r;++n){var o=t[e+n];t[e+n]=t[i-r+n],t[i-r+n]=o}e+=r,i-=r}}function A(t,e,i,r){for(var n=!0,o=0;o<r;++o)if(t[e+o]!==t[i-r+o]){n=!1;break}n&&(i-=r);var a=function(t,e,i,r){for(var n=-1,o=1/0,a=1/0,s=e;s<i;s+=r){var c=t[s],l=t[s+1];l>o||(l==o&&c>=a||(n=s,o=l,a=c))}return n}(t,e,i,r),s=a-r;s<e&&(s=i-r);var c=a+r;c>=i&&(c=e);var l=t[s],d=t[s+1],u=t[a],p=t[a+1],h=t[c],f=t[c+1];return u*f+l*p+d*h-(d*u+p*h+l*f)<0}function I(t,e,i,r,n){for(var o=void 0!==n&&n,a=0,s=i.length;a<s;++a){var c=i[a],l=A(t,e,c,r);if(0===a){if(o&&l||!o&&!l)return!1}else if(o&&!l||!o&&l)return!1;e=c}return!0}function j(t,e,i,r,n){for(var o=void 0!==n&&n,a=0,s=i.length;a<s;++a){var c=i[a],l=A(t,e,c,r);(0===a?o&&l||!o&&!l:o&&!l||!o&&l)&&L(t,e,c,r),e=c}return e}i(57);var D=function(){var t=function(e,i){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(e,i)};return function(e,i){function r(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(r.prototype=i.prototype,new r)}}(),R=function(t){function e(e,i,r){var n=t.call(this)||this;return n.ends_=[],n.flatInteriorPointRevision_=-1,n.flatInteriorPoint_=null,n.maxDelta_=-1,n.maxDeltaRevision_=-1,n.orientedRevision_=-1,n.orientedFlatCoordinates_=null,void 0!==i&&r?(n.setFlatCoordinates(i,e),n.ends_=r):n.setCoordinates(e,i),n}return D(e,t),e.prototype.appendLinearRing=function(t){this.flatCoordinates?Object(C.b)(this.flatCoordinates,t.getFlatCoordinates()):this.flatCoordinates=t.getFlatCoordinates().slice(),this.ends_.push(this.flatCoordinates.length),this.changed()},e.prototype.clone=function(){return new e(this.flatCoordinates.slice(),this.layout,this.ends_.slice())},e.prototype.closestPointXY=function(t,e,i,r){return r<Object(p.e)(this.getExtent(),t,e)?r:(this.maxDeltaRevision_!=this.getRevision()&&(this.maxDelta_=Math.sqrt(l(this.flatCoordinates,0,this.ends_,this.stride,0)),this.maxDeltaRevision_=this.getRevision()),u(this.flatCoordinates,0,this.ends_,this.stride,this.maxDelta_,!0,t,e,i,r))},e.prototype.containsXY=function(t,e){return E(this.getOrientedFlatCoordinates(),0,this.ends_,this.stride,t,e)},e.prototype.getArea=function(){return v(this.getOrientedFlatCoordinates(),0,this.ends_,this.stride)},e.prototype.getCoordinates=function(t){var e;return void 0!==t?j(e=this.getOrientedFlatCoordinates().slice(),0,this.ends_,this.stride,t):e=this.flatCoordinates,Object(m.b)(e,0,this.ends_,this.stride)},e.prototype.getEnds=function(){return this.ends_},e.prototype.getFlatInteriorPoint=function(){if(this.flatInteriorPointRevision_!=this.getRevision()){var t=Object(p.x)(this.getExtent());this.flatInteriorPoint_=M(this.getOrientedFlatCoordinates(),0,this.ends_,this.stride,t,0),this.flatInteriorPointRevision_=this.getRevision()}return this.flatInteriorPoint_},e.prototype.getInteriorPoint=function(){return new w.a(this.getFlatInteriorPoint(),r.a.XYM)},e.prototype.getLinearRingCount=function(){return this.ends_.length},e.prototype.getLinearRing=function(t){return t<0||this.ends_.length<=t?null:new _(this.flatCoordinates.slice(0===t?0:this.ends_[t-1],this.ends_[t]),this.layout)},e.prototype.getLinearRings=function(){for(var t=this.layout,e=this.flatCoordinates,i=this.ends_,r=[],n=0,o=0,a=i.length;o<a;++o){var s=i[o],c=new _(e.slice(n,s),t);r.push(c),n=s}return r},e.prototype.getOrientedFlatCoordinates=function(){if(this.orientedRevision_!=this.getRevision()){var t=this.flatCoordinates;I(t,0,this.ends_,this.stride)?this.orientedFlatCoordinates_=t:(this.orientedFlatCoordinates_=t.slice(),this.orientedFlatCoordinates_.length=j(this.orientedFlatCoordinates_,0,this.ends_,this.stride)),this.orientedRevision_=this.getRevision()}return this.orientedFlatCoordinates_},e.prototype.getSimplifiedGeometryInternal=function(t){var i=[],n=[];return i.length=Object(f.b)(this.flatCoordinates,0,this.ends_,this.stride,Math.sqrt(t),i,0,n),new e(i,r.a.XY,n)},e.prototype.getType=function(){return n.a.POLYGON},e.prototype.intersectsExtent=function(t){return O(this.getOrientedFlatCoordinates(),0,this.ends_,this.stride,t)},e.prototype.setCoordinates=function(t,e){this.setLayout(e,t,2),this.flatCoordinates||(this.flatCoordinates=[]);var i=Object(h.c)(this.flatCoordinates,0,t,this.stride,this.ends_);this.flatCoordinates.length=0===i.length?0:i[i.length-1],this.changed()},e}(o.a);e.a=R;function z(t){var e=t[0],i=t[1],n=t[2],o=t[3],a=[e,i,e,o,n,o,n,i,e,i];return new R(a,r.a.XY,[a.length])}},function(t,e,i){"use strict";var r=function(){function t(t){var e=t||{};this.color_=void 0!==e.color?e.color:null,this.lineCap_=e.lineCap,this.lineDash_=void 0!==e.lineDash?e.lineDash:null,this.lineDashOffset_=e.lineDashOffset,this.lineJoin_=e.lineJoin,this.miterLimit_=e.miterLimit,this.width_=e.width}return t.prototype.clone=function(){var e=this.getColor();return new t({color:Array.isArray(e)?e.slice():e||void 0,lineCap:this.getLineCap(),lineDash:this.getLineDash()?this.getLineDash().slice():void 0,lineDashOffset:this.getLineDashOffset(),lineJoin:this.getLineJoin(),miterLimit:this.getMiterLimit(),width:this.getWidth()})},t.prototype.getColor=function(){return this.color_},t.prototype.getLineCap=function(){return this.lineCap_},t.prototype.getLineDash=function(){return this.lineDash_},t.prototype.getLineDashOffset=function(){return this.lineDashOffset_},t.prototype.getLineJoin=function(){return this.lineJoin_},t.prototype.getMiterLimit=function(){return this.miterLimit_},t.prototype.getWidth=function(){return this.width_},t.prototype.setColor=function(t){this.color_=t},t.prototype.setLineCap=function(t){this.lineCap_=t},t.prototype.setLineDash=function(t){this.lineDash_=t},t.prototype.setLineDashOffset=function(t){this.lineDashOffset_=t},t.prototype.setLineJoin=function(t){this.lineJoin_=t},t.prototype.setMiterLimit=function(t){this.miterLimit_=t},t.prototype.setWidth=function(t){this.width_=t},t}();e.a=r},function(t,e,i){"use strict";var r,n=i(1),o=(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(t,e)},function(t,e){function i(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}),a=function(t){function e(e){var i=this,r="Assertion failed. See https://openlayers.org/en/"+("latest"===n.a?n.a:"v"+n.a.split("-")[0])+"/doc/errors/#"+e+" for details.";return(i=t.call(this,r)||this).code=e,i.name="AssertionError",i.message=r,i}return o(e,t),e}(Error);e.a=a},function(t,e,i){"use strict";var r,n=i(35),o=i(6),a=i(5),s=(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(t,e)},function(t,e){function i(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}),c=function(t){function e(){var e=t.call(this)||this;return e.revision_=0,e}return s(e,t),e.prototype.changed=function(){++this.revision_,this.dispatchEvent(o.a.CHANGE)},e.prototype.getRevision=function(){return this.revision_},e.prototype.on=function(t,e){if(Array.isArray(t)){for(var i=t.length,r=new Array(i),n=0;n<i;++n)r[n]=Object(a.a)(this,t[n],e);return r}return Object(a.a)(this,t,e)},e.prototype.once=function(t,e){var i;if(Array.isArray(t)){var r=t.length;i=new Array(r);for(var n=0;n<r;++n)i[n]=Object(a.b)(this,t[n],e)}else i=Object(a.b)(this,t,e);return e.ol_key=i,i},e.prototype.un=function(t,e){var i=e.ol_key;if(i)!function(t){if(Array.isArray(t))for(var e=0,i=t.length;e<i;++e)Object(a.c)(t[e]);else Object(a.c)(t)}(i);else if(Array.isArray(t))for(var r=0,n=t.length;r<n;++r)this.removeEventListener(t[r],e);else this.removeEventListener(t,e)},e}(n.a);e.a=c},function(t,e,i){"use strict";var r=i(1),n=i(28),o=function(){function t(t){this.opacity_=t.opacity,this.rotateWithView_=t.rotateWithView,this.rotation_=t.rotation,this.scale_=t.scale,this.scaleArray_=Object(n.c)(t.scale),this.displacement_=t.displacement}return t.prototype.clone=function(){var e=this.getScale();return new t({opacity:this.getOpacity(),scale:Array.isArray(e)?e.slice():e,rotation:this.getRotation(),rotateWithView:this.getRotateWithView(),displacement:this.getDisplacement().slice()})},t.prototype.getOpacity=function(){return this.opacity_},t.prototype.getRotateWithView=function(){return this.rotateWithView_},t.prototype.getRotation=function(){return this.rotation_},t.prototype.getScale=function(){return this.scale_},t.prototype.getScaleArray=function(){return this.scaleArray_},t.prototype.getDisplacement=function(){return this.displacement_},t.prototype.getAnchor=function(){return Object(r.b)()},t.prototype.getImage=function(t){return Object(r.b)()},t.prototype.getHitDetectionImage=function(){return Object(r.b)()},t.prototype.getPixelRatio=function(t){return 1},t.prototype.getImageState=function(){return Object(r.b)()},t.prototype.getImageSize=function(){return Object(r.b)()},t.prototype.getHitDetectionImageSize=function(){return Object(r.b)()},t.prototype.getOrigin=function(){return Object(r.b)()},t.prototype.getSize=function(){return Object(r.b)()},t.prototype.setOpacity=function(t){this.opacity_=t},t.prototype.setRotateWithView=function(t){this.rotateWithView_=t},t.prototype.setRotation=function(t){this.rotation_=t},t.prototype.setScale=function(t){this.scale_=t,this.scaleArray_=Object(n.c)(t)},t.prototype.listenImageChange=function(t){Object(r.b)()},t.prototype.load=function(){Object(r.b)()},t.prototype.unlistenImageChange=function(t){Object(r.b)()},t}();e.a=o},function(t,e,i){t.exports=function(){"use strict";function t(t,r,n,o,a){!function t(i,r,n,o,a){for(;o>n;){if(o-n>600){var s=o-n+1,c=r-n+1,l=Math.log(s),d=.5*Math.exp(2*l/3),u=.5*Math.sqrt(l*d*(s-d)/s)*(c-s/2<0?-1:1),p=Math.max(n,Math.floor(r-c*d/s+u)),h=Math.min(o,Math.floor(r+(s-c)*d/s+u));t(i,r,p,h,a)}var f=i[r],m=n,g=o;for(e(i,n,r),a(i[o],f)>0&&e(i,n,o);m<g;){for(e(i,m,g),m++,g--;a(i[m],f)<0;)m++;for(;a(i[g],f)>0;)g--}0===a(i[n],f)?e(i,n,g):(g++,e(i,g,o)),g<=r&&(n=g+1),r<=g&&(o=g-1)}}(t,r,n||0,o||t.length-1,a||i)}function e(t,e,i){var r=t[e];t[e]=t[i],t[i]=r}function i(t,e){return t<e?-1:t>e?1:0}var r=function(t){void 0===t&&(t=9),this._maxEntries=Math.max(4,t),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),this.clear()};function n(t,e,i){if(!i)return e.indexOf(t);for(var r=0;r<e.length;r++)if(i(t,e[r]))return r;return-1}function o(t,e){a(t,0,t.children.length,e,t)}function a(t,e,i,r,n){n||(n=f(null)),n.minX=1/0,n.minY=1/0,n.maxX=-1/0,n.maxY=-1/0;for(var o=e;o<i;o++){var a=t.children[o];s(n,t.leaf?r(a):a)}return n}function s(t,e){return t.minX=Math.min(t.minX,e.minX),t.minY=Math.min(t.minY,e.minY),t.maxX=Math.max(t.maxX,e.maxX),t.maxY=Math.max(t.maxY,e.maxY),t}function c(t,e){return t.minX-e.minX}function l(t,e){return t.minY-e.minY}function d(t){return(t.maxX-t.minX)*(t.maxY-t.minY)}function u(t){return t.maxX-t.minX+(t.maxY-t.minY)}function p(t,e){return t.minX<=e.minX&&t.minY<=e.minY&&e.maxX<=t.maxX&&e.maxY<=t.maxY}function h(t,e){return e.minX<=t.maxX&&e.minY<=t.maxY&&e.maxX>=t.minX&&e.maxY>=t.minY}function f(t){return{children:t,height:1,leaf:!0,minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0}}function m(e,i,r,n,o){for(var a=[i,r];a.length;)if(!((r=a.pop())-(i=a.pop())<=n)){var s=i+Math.ceil((r-i)/n/2)*n;t(e,s,i,r,o),a.push(i,s,s,r)}}return r.prototype.all=function(){return this._all(this.data,[])},r.prototype.search=function(t){var e=this.data,i=[];if(!h(t,e))return i;for(var r=this.toBBox,n=[];e;){for(var o=0;o<e.children.length;o++){var a=e.children[o],s=e.leaf?r(a):a;h(t,s)&&(e.leaf?i.push(a):p(t,s)?this._all(a,i):n.push(a))}e=n.pop()}return i},r.prototype.collides=function(t){var e=this.data;if(!h(t,e))return!1;for(var i=[];e;){for(var r=0;r<e.children.length;r++){var n=e.children[r],o=e.leaf?this.toBBox(n):n;if(h(t,o)){if(e.leaf||p(t,o))return!0;i.push(n)}}e=i.pop()}return!1},r.prototype.load=function(t){if(!t||!t.length)return this;if(t.length<this._minEntries){for(var e=0;e<t.length;e++)this.insert(t[e]);return this}var i=this._build(t.slice(),0,t.length-1,0);if(this.data.children.length)if(this.data.height===i.height)this._splitRoot(this.data,i);else{if(this.data.height<i.height){var r=this.data;this.data=i,i=r}this._insert(i,this.data.height-i.height-1,!0)}else this.data=i;return this},r.prototype.insert=function(t){return t&&this._insert(t,this.data.height-1),this},r.prototype.clear=function(){return this.data=f([]),this},r.prototype.remove=function(t,e){if(!t)return this;for(var i,r,o,a=this.data,s=this.toBBox(t),c=[],l=[];a||c.length;){if(a||(a=c.pop(),r=c[c.length-1],i=l.pop(),o=!0),a.leaf){var d=n(t,a.children,e);if(-1!==d)return a.children.splice(d,1),c.push(a),this._condense(c),this}o||a.leaf||!p(a,s)?r?(i++,a=r.children[i],o=!1):a=null:(c.push(a),l.push(i),i=0,r=a,a=a.children[0])}return this},r.prototype.toBBox=function(t){return t},r.prototype.compareMinX=function(t,e){return t.minX-e.minX},r.prototype.compareMinY=function(t,e){return t.minY-e.minY},r.prototype.toJSON=function(){return this.data},r.prototype.fromJSON=function(t){return this.data=t,this},r.prototype._all=function(t,e){for(var i=[];t;)t.leaf?e.push.apply(e,t.children):i.push.apply(i,t.children),t=i.pop();return e},r.prototype._build=function(t,e,i,r){var n,a=i-e+1,s=this._maxEntries;if(a<=s)return o(n=f(t.slice(e,i+1)),this.toBBox),n;r||(r=Math.ceil(Math.log(a)/Math.log(s)),s=Math.ceil(a/Math.pow(s,r-1))),(n=f([])).leaf=!1,n.height=r;var c=Math.ceil(a/s),l=c*Math.ceil(Math.sqrt(s));m(t,e,i,l,this.compareMinX);for(var d=e;d<=i;d+=l){var u=Math.min(d+l-1,i);m(t,d,u,c,this.compareMinY);for(var p=d;p<=u;p+=c){var h=Math.min(p+c-1,u);n.children.push(this._build(t,p,h,r-1))}}return o(n,this.toBBox),n},r.prototype._chooseSubtree=function(t,e,i,r){for(;r.push(e),!e.leaf&&r.length-1!==i;){for(var n=1/0,o=1/0,a=void 0,s=0;s<e.children.length;s++){var c=e.children[s],l=d(c),u=(p=t,h=c,(Math.max(h.maxX,p.maxX)-Math.min(h.minX,p.minX))*(Math.max(h.maxY,p.maxY)-Math.min(h.minY,p.minY))-l);u<o?(o=u,n=l<n?l:n,a=c):u===o&&l<n&&(n=l,a=c)}e=a||e.children[0]}var p,h;return e},r.prototype._insert=function(t,e,i){var r=i?t:this.toBBox(t),n=[],o=this._chooseSubtree(r,this.data,e,n);for(o.children.push(t),s(o,r);e>=0&&n[e].children.length>this._maxEntries;)this._split(n,e),e--;this._adjustParentBBoxes(r,n,e)},r.prototype._split=function(t,e){var i=t[e],r=i.children.length,n=this._minEntries;this._chooseSplitAxis(i,n,r);var a=this._chooseSplitIndex(i,n,r),s=f(i.children.splice(a,i.children.length-a));s.height=i.height,s.leaf=i.leaf,o(i,this.toBBox),o(s,this.toBBox),e?t[e-1].children.push(s):this._splitRoot(i,s)},r.prototype._splitRoot=function(t,e){this.data=f([t,e]),this.data.height=t.height+1,this.data.leaf=!1,o(this.data,this.toBBox)},r.prototype._chooseSplitIndex=function(t,e,i){for(var r,n,o,s,c,l,u,p=1/0,h=1/0,f=e;f<=i-e;f++){var m=a(t,0,f,this.toBBox),g=a(t,f,i,this.toBBox),v=(n=m,o=g,s=void 0,c=void 0,l=void 0,u=void 0,s=Math.max(n.minX,o.minX),c=Math.max(n.minY,o.minY),l=Math.min(n.maxX,o.maxX),u=Math.min(n.maxY,o.maxY),Math.max(0,l-s)*Math.max(0,u-c)),y=d(m)+d(g);v<p?(p=v,r=f,h=y<h?y:h):v===p&&y<h&&(h=y,r=f)}return r||i-e},r.prototype._chooseSplitAxis=function(t,e,i){var r=t.leaf?this.compareMinX:c,n=t.leaf?this.compareMinY:l;this._allDistMargin(t,e,i,r)<this._allDistMargin(t,e,i,n)&&t.children.sort(r)},r.prototype._allDistMargin=function(t,e,i,r){t.children.sort(r);for(var n=this.toBBox,o=a(t,0,e,n),c=a(t,i-e,i,n),l=u(o)+u(c),d=e;d<i-e;d++){var p=t.children[d];s(o,t.leaf?n(p):p),l+=u(o)}for(var h=i-e-1;h>=e;h--){var f=t.children[h];s(c,t.leaf?n(f):f),l+=u(c)}return l},r.prototype._adjustParentBBoxes=function(t,e,i){for(var r=i;r>=0;r--)s(e[r],t)},r.prototype._condense=function(t){for(var e=t.length-1,i=void 0;e>=0;e--)0===t[e].children.length?e>0?(i=t[e-1].children).splice(i.indexOf(t[e]),1):this.clear():o(t[e],this.toBBox)},r}()},function(t,e,i){"use strict";var r,n=i(15),o=i(34),a=i(1),s=i(8),c=(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(t,e)},function(t,e){function i(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}),l=function(t){function e(e){var i=t.call(this)||this;return i.projection_=Object(s.f)(e.projection),i.attributions_=d(e.attributions),i.attributionsCollapsible_=void 0===e.attributionsCollapsible||e.attributionsCollapsible,i.loading=!1,i.state_=void 0!==e.state?e.state:o.a.READY,i.wrapX_=void 0!==e.wrapX&&e.wrapX,i}return c(e,t),e.prototype.getAttributions=function(){return this.attributions_},e.prototype.getAttributionsCollapsible=function(){return this.attributionsCollapsible_},e.prototype.getProjection=function(){return this.projection_},e.prototype.getResolutions=function(){return Object(a.b)()},e.prototype.getState=function(){return this.state_},e.prototype.getWrapX=function(){return this.wrapX_},e.prototype.getContextOptions=function(){},e.prototype.refresh=function(){this.changed()},e.prototype.setAttributions=function(t){this.attributions_=d(t),this.changed()},e.prototype.setState=function(t){this.state_=t,this.changed()},e}(n.a);function d(t){return t?Array.isArray(t)?function(e){return t}:"function"==typeof t?t:function(e){return[t]}:null}e.a=l},function(t,e,i){"use strict";var r=function(){function t(){}return t.prototype.drawCustom=function(t,e,i){},t.prototype.drawGeometry=function(t){},t.prototype.setStyle=function(t){},t.prototype.drawCircle=function(t,e){},t.prototype.drawFeature=function(t,e){},t.prototype.drawGeometryCollection=function(t,e){},t.prototype.drawLineString=function(t,e){},t.prototype.drawMultiLineString=function(t,e){},t.prototype.drawMultiPoint=function(t,e){},t.prototype.drawMultiPolygon=function(t,e){},t.prototype.drawPoint=function(t,e){},t.prototype.drawPolygon=function(t,e){},t.prototype.drawText=function(t,e){},t.prototype.setFillStrokeStyle=function(t,e){},t.prototype.setImageStyle=function(t,e){},t.prototype.setTextStyle=function(t,e){},t}();e.a=r},function(t,e,i){"use strict";var r,n=i(30),o=(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(t,e)},function(t,e){function i(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}),a=function(t){function e(e,i,r,n){var o=t.call(this,e)||this;return o.inversePixelTransform=i,o.frameState=r,o.context=n,o}return o(e,t),e}(n.a);e.a=a},function(t,e,i){"use strict";var r,n=i(15),o=i(17),a=i(1),s=i(10),c=i(11),l=i(4),d=(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(t,e)},function(t,e){function i(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}),u=function(t){function e(e){var i=t.call(this)||this,r=Object(c.a)({},e);return r[o.a.OPACITY]=void 0!==e.opacity?e.opacity:1,Object(s.a)("number"==typeof r[o.a.OPACITY],64),r[o.a.VISIBLE]=void 0===e.visible||e.visible,r[o.a.Z_INDEX]=e.zIndex,r[o.a.MAX_RESOLUTION]=void 0!==e.maxResolution?e.maxResolution:1/0,r[o.a.MIN_RESOLUTION]=void 0!==e.minResolution?e.minResolution:0,r[o.a.MIN_ZOOM]=void 0!==e.minZoom?e.minZoom:-1/0,r[o.a.MAX_ZOOM]=void 0!==e.maxZoom?e.maxZoom:1/0,i.className_=void 0!==r.className?e.className:"ol-layer",delete r.className,i.setProperties(r),i.state_=null,i}return d(e,t),e.prototype.getClassName=function(){return this.className_},e.prototype.getLayerState=function(t){var e=this.state_||{layer:this,managed:void 0===t||t},i=this.getZIndex();return e.opacity=Object(l.a)(Math.round(100*this.getOpacity())/100,0,1),e.sourceState=this.getSourceState(),e.visible=this.getVisible(),e.extent=this.getExtent(),e.zIndex=void 0!==i?i:!1===e.managed?1/0:0,e.maxResolution=this.getMaxResolution(),e.minResolution=Math.max(this.getMinResolution(),0),e.minZoom=this.getMinZoom(),e.maxZoom=this.getMaxZoom(),this.state_=e,e},e.prototype.getLayersArray=function(t){return Object(a.b)()},e.prototype.getLayerStatesArray=function(t){return Object(a.b)()},e.prototype.getExtent=function(){return this.get(o.a.EXTENT)},e.prototype.getMaxResolution=function(){return this.get(o.a.MAX_RESOLUTION)},e.prototype.getMinResolution=function(){return this.get(o.a.MIN_RESOLUTION)},e.prototype.getMinZoom=function(){return this.get(o.a.MIN_ZOOM)},e.prototype.getMaxZoom=function(){return this.get(o.a.MAX_ZOOM)},e.prototype.getOpacity=function(){return this.get(o.a.OPACITY)},e.prototype.getSourceState=function(){return Object(a.b)()},e.prototype.getVisible=function(){return this.get(o.a.VISIBLE)},e.prototype.getZIndex=function(){return this.get(o.a.Z_INDEX)},e.prototype.setExtent=function(t){this.set(o.a.EXTENT,t)},e.prototype.setMaxResolution=function(t){this.set(o.a.MAX_RESOLUTION,t)},e.prototype.setMinResolution=function(t){this.set(o.a.MIN_RESOLUTION,t)},e.prototype.setMaxZoom=function(t){this.set(o.a.MAX_ZOOM,t)},e.prototype.setMinZoom=function(t){this.set(o.a.MIN_ZOOM,t)},e.prototype.setOpacity=function(t){Object(s.a)("number"==typeof t,64),this.set(o.a.OPACITY,t)},e.prototype.setVisible=function(t){this.set(o.a.VISIBLE,t)},e.prototype.setZIndex=function(t){this.set(o.a.Z_INDEX,t)},e.prototype.disposeInternal=function(){this.state_&&(this.state_.layer=null,this.state_=null),t.prototype.disposeInternal.call(this)},e}(n.a);e.a=u},function(t,e,i){"use strict";i.d(e,"a",(function(){return f}));var r,n=i(6),o=i(35),a=i(1),s=(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(t,e)},function(t,e){function i(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}),c=function(t){function e(e,i,r,n){var o=t.call(this)||this;return o.extent=e,o.pixelRatio_=r,o.resolution=i,o.state=n,o}return s(e,t),e.prototype.changed=function(){this.dispatchEvent(n.a.CHANGE)},e.prototype.getExtent=function(){return this.extent},e.prototype.getImage=function(){return Object(a.b)()},e.prototype.getPixelRatio=function(){return this.pixelRatio_},e.prototype.getResolution=function(){return this.resolution},e.prototype.getState=function(){return this.state},e.prototype.load=function(){Object(a.b)()},e}(o.a),l=i(16),d=i(19),u=i(0),p=i(5),h=function(){var t=function(e,i){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(e,i)};return function(e,i){function r(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(r.prototype=i.prototype,new r)}}();function f(t,e,i){var r=t;if(r.src&&d.c){var o=r.decode(),a=!0;return o.then((function(){a&&e()})).catch((function(t){a&&("EncodingError"===t.name&&"Invalid image type."===t.message?e():i())})),function(){a=!1}}var s=[Object(p.b)(r,n.a.LOAD,e),Object(p.b)(r,n.a.ERROR,i)];return function(){s.forEach(p.c)}}!function(t){function e(e,i,r,n,o,a){var s=t.call(this,e,i,r,l.a.IDLE)||this;return s.src_=n,s.image_=new Image,null!==o&&(s.image_.crossOrigin=o),s.unlisten_=null,s.state=l.a.IDLE,s.imageLoadFunction_=a,s}h(e,t),e.prototype.getImage=function(){return this.image_},e.prototype.handleImageError_=function(){this.state=l.a.ERROR,this.unlistenImage_(),this.changed()},e.prototype.handleImageLoad_=function(){void 0===this.resolution&&(this.resolution=Object(u.A)(this.extent)/this.image_.height),this.state=l.a.LOADED,this.unlistenImage_(),this.changed()},e.prototype.load=function(){this.state!=l.a.IDLE&&this.state!=l.a.ERROR||(this.state=l.a.LOADING,this.changed(),this.imageLoadFunction_(this,this.src_),this.unlisten_=f(this.image_,this.handleImageLoad_.bind(this),this.handleImageError_.bind(this)))},e.prototype.setImage=function(t){this.image_=t},e.prototype.unlistenImage_=function(){this.unlisten_&&(this.unlisten_(),this.unlisten_=null)}}(c)},function(t,e,i){"use strict";var r,n=i(6),o=i(16),a=i(62),s=i(34),c=i(1),l=(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(t,e)},function(t,e){function i(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}),d=function(t){function e(e){var i=t.call(this)||this;return i.boundHandleImageChange_=i.handleImageChange_.bind(i),i.layer_=e,i}return l(e,t),e.prototype.getFeatures=function(t){return Object(c.b)()},e.prototype.prepareFrame=function(t){return Object(c.b)()},e.prototype.renderFrame=function(t,e){return Object(c.b)()},e.prototype.loadedTileCallback=function(t,e,i){t[e]||(t[e]={}),t[e][i.tileCoord.toString()]=i},e.prototype.createLoadedTileFinder=function(t,e,i){return function(r,n){var o=this.loadedTileCallback.bind(this,i,r);return t.forEachLoadedTile(e,r,n,o)}.bind(this)},e.prototype.forEachFeatureAtCoordinate=function(t,e,i,r,n){},e.prototype.getDataAtPixel=function(t,e,i){return Object(c.b)()},e.prototype.getLayer=function(){return this.layer_},e.prototype.handleFontsChanged=function(){},e.prototype.handleImageChange_=function(t){t.target.getState()===o.a.LOADED&&this.renderIfReadyAndVisible()},e.prototype.loadImage=function(t){var e=t.getState();return e!=o.a.LOADED&&e!=o.a.ERROR&&t.addEventListener(n.a.CHANGE,this.boundHandleImageChange_),e==o.a.IDLE&&(t.load(),e=t.getState()),e==o.a.LOADED},e.prototype.renderIfReadyAndVisible=function(){var t=this.getLayer();t.getVisible()&&t.getSourceState()==s.a.READY&&t.changed()},e}(a.a),u=i(67),p=i(38),h=i(7),f=i(13),m=i(0),g=i(2),v=function(){var t=function(e,i){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(e,i)};return function(e,i){function r(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(r.prototype=i.prototype,new r)}}(),y=function(t){function e(e){var i=t.call(this,e)||this;return i.container=null,i.renderedResolution,i.tempTransform=Object(h.c)(),i.pixelTransform=Object(h.c)(),i.inversePixelTransform=Object(h.c)(),i.context=null,i.containerReused=!1,i}return v(e,t),e.prototype.useContainer=function(t,e,i){var r,n,o=this.getLayer().getClassName();t&&""===t.style.opacity&&t.className===o&&((s=t.firstElementChild)instanceof HTMLCanvasElement&&(n=s.getContext("2d")));if(!n||0!==n.canvas.width&&n.canvas.style.transform!==e?this.containerReused&&(this.container=null,this.context=null,this.containerReused=!1):(this.container=t,this.context=n,this.containerReused=!0),!this.container){(r=document.createElement("div")).className=o;var a=r.style;a.position="absolute",a.width="100%",a.height="100%";var s=(n=Object(f.a)()).canvas;r.appendChild(s),(a=s.style).position="absolute",a.left="0",a.transformOrigin="top left",this.container=r,this.context=n}},e.prototype.clip=function(t,e,i){var r=e.pixelRatio,n=e.size[0]*r/2,o=e.size[1]*r/2,a=e.viewState.rotation,s=Object(m.C)(i),c=Object(m.D)(i),l=Object(m.w)(i),d=Object(m.v)(i);Object(h.a)(e.coordinateToPixelTransform,s),Object(h.a)(e.coordinateToPixelTransform,c),Object(h.a)(e.coordinateToPixelTransform,l),Object(h.a)(e.coordinateToPixelTransform,d),t.save(),Object(g.t)(t,-a,n,o),t.beginPath(),t.moveTo(s[0]*r,s[1]*r),t.lineTo(c[0]*r,c[1]*r),t.lineTo(l[0]*r,l[1]*r),t.lineTo(d[0]*r,d[1]*r),t.clip(),Object(g.t)(t,a,n,o)},e.prototype.clipUnrotated=function(t,e,i){var r=Object(m.C)(i),n=Object(m.D)(i),o=Object(m.w)(i),a=Object(m.v)(i);Object(h.a)(e.coordinateToPixelTransform,r),Object(h.a)(e.coordinateToPixelTransform,n),Object(h.a)(e.coordinateToPixelTransform,o),Object(h.a)(e.coordinateToPixelTransform,a);var s=this.inversePixelTransform;Object(h.a)(s,r),Object(h.a)(s,n),Object(h.a)(s,o),Object(h.a)(s,a),t.save(),t.beginPath(),t.moveTo(Math.round(r[0]),Math.round(r[1])),t.lineTo(Math.round(n[0]),Math.round(n[1])),t.lineTo(Math.round(o[0]),Math.round(o[1])),t.lineTo(Math.round(a[0]),Math.round(a[1])),t.clip()},e.prototype.dispatchRenderEvent_=function(t,e,i){var r=this.getLayer();if(r.hasListener(t)){var n=new u.a(t,this.inversePixelTransform,i,e);r.dispatchEvent(n)}},e.prototype.preRender=function(t,e){this.dispatchRenderEvent_(p.a.PRERENDER,t,e)},e.prototype.postRender=function(t,e){this.dispatchRenderEvent_(p.a.POSTRENDER,t,e)},e.prototype.getRenderTransform=function(t,e,i,r,n,o,a){var s=n/2,c=o/2,l=r/e,d=-l,u=-t[0]+a,p=-t[1];return Object(h.b)(this.tempTransform,s,c,l,d,-i,u,p)},e.prototype.getDataAtPixel=function(t,e,i){var r,n=Object(h.a)(this.inversePixelTransform,t.slice()),o=this.context;try{var a=Math.round(n[0]),s=Math.round(n[1]),c=document.createElement("canvas"),l=c.getContext("2d");c.width=1,c.height=1,l.clearRect(0,0,1,1),l.drawImage(o.canvas,a,s,1,1,0,0,1,1),r=l.getImageData(0,0,1,1).data}catch(t){return"SecurityError"===t.name?new Uint8Array:r}return 0===r[3]?null:r},e}(d);e.a=y},function(t,e,i){"use strict";var r=function(){function t(t){var e=t||{};this.color_=void 0!==e.color?e.color:null}return t.prototype.clone=function(){var e=this.getColor();return new t({color:Array.isArray(e)?e.slice():e||void 0})},t.prototype.getColor=function(){return this.color_},t.prototype.setColor=function(t){this.color_=t},t}();e.a=r},function(t,e){var i;i=function(){return this}();try{i=i||new Function("return this")()}catch(t){"object"==typeof window&&(i=window)}t.exports=i},function(t){t.exports=JSON.parse('{"ES":{"diasCorto":["Dom","Lun","Mar","Mie","Jue","Vie","Sab"],"diasLargo":["Domingo","Lunes","Martes","Miercoles","Jueves","Vienes","Sabado"],"mesCorto":["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Set","Oct","Nov","Dic"],"mesLargo":["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Setiembre","Octubre","Noviembre","Diciembre"],"si":"Si","no":"No","buscar":"Buscar"},"EN":{}}')},function(t,e,i){"use strict";i.d(e,"a",(function(){return x}));var r,n=i(15),o=i(55),a=i(14),s=i(5),c=i(13),l=(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(t,e)},function(t,e){function i(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}),d=function(t){function e(e){var i=t.call(this)||this,r=e.element;return!r||e.target||r.style.pointerEvents||(r.style.pointerEvents="auto"),i.element=r||null,i.target_=null,i.map_=null,i.listenerKeys=[],e.render&&(i.render=e.render),e.target&&i.setTarget(e.target),i}return l(e,t),e.prototype.disposeInternal=function(){Object(c.c)(this.element),t.prototype.disposeInternal.call(this)},e.prototype.getMap=function(){return this.map_},e.prototype.setMap=function(t){this.map_&&Object(c.c)(this.element);for(var e=0,i=this.listenerKeys.length;e<i;++e)Object(s.c)(this.listenerKeys[e]);(this.listenerKeys.length=0,this.map_=t,this.map_)&&((this.target_?this.target_:t.getOverlayContainerStopEvent()).appendChild(this.element),this.render!==a.c&&this.listenerKeys.push(Object(s.a)(t,o.a.POSTRENDER,this.render,this)),t.render())},e.prototype.render=function(t){},e.prototype.setTarget=function(t){this.target_="string"==typeof t?document.getElementById(t):t},e}(n.a),u=i(6),p=i(21),h=i(12),f=i(37),m=function(){var t=function(e,i){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(e,i)};return function(e,i){function r(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(r.prototype=i.prototype,new r)}}(),g=function(t){function e(e){var i=this,r=e||{};(i=t.call(this,{element:document.createElement("div"),render:r.render,target:r.target})||this).ulElement_=document.createElement("ul"),i.collapsed_=void 0===r.collapsed||r.collapsed,i.overrideCollapsible_=void 0!==r.collapsible,i.collapsible_=void 0===r.collapsible||r.collapsible,i.collapsible_||(i.collapsed_=!1);var n=void 0!==r.className?r.className:"ol-attribution",o=void 0!==r.tipLabel?r.tipLabel:"Attributions",a=void 0!==r.collapseLabel?r.collapseLabel:"»";"string"==typeof a?(i.collapseLabel_=document.createElement("span"),i.collapseLabel_.textContent=a):i.collapseLabel_=a;var s=void 0!==r.label?r.label:"i";"string"==typeof s?(i.label_=document.createElement("span"),i.label_.textContent=s):i.label_=s;var c=i.collapsible_&&!i.collapsed_?i.collapseLabel_:i.label_,l=document.createElement("button");l.setAttribute("type","button"),l.title=o,l.appendChild(c),l.addEventListener(u.a.CLICK,i.handleClick_.bind(i),!1);var d=n+" "+p.d+" "+p.b+(i.collapsed_&&i.collapsible_?" "+p.a:"")+(i.collapsible_?"":" ol-uncollapsible"),h=i.element;return h.className=d,h.appendChild(i.ulElement_),h.appendChild(l),i.renderedAttributions_=[],i.renderedVisible_=!0,i}return m(e,t),e.prototype.collectSourceAttributions_=function(t){for(var e={},i=[],r=t.layerStatesArray,n=0,o=r.length;n<o;++n){var a=r[n];if(Object(f.b)(a,t.viewState)){var s=a.layer.getSource();if(s){var c=s.getAttributions();if(c){var l=c(t);if(l)if(this.overrideCollapsible_||!1!==s.getAttributionsCollapsible()||this.setCollapsible(!1),Array.isArray(l))for(var d=0,u=l.length;d<u;++d)l[d]in e||(i.push(l[d]),e[l[d]]=!0);else l in e||(i.push(l),e[l]=!0)}}}}return i},e.prototype.updateElement_=function(t){if(t){var e=this.collectSourceAttributions_(t),i=e.length>0;if(this.renderedVisible_!=i&&(this.element.style.display=i?"":"none",this.renderedVisible_=i),!Object(h.a)(e,this.renderedAttributions_)){Object(c.b)(this.ulElement_);for(var r=0,n=e.length;r<n;++r){var o=document.createElement("li");o.innerHTML=e[r],this.ulElement_.appendChild(o)}this.renderedAttributions_=e}}else this.renderedVisible_&&(this.element.style.display="none",this.renderedVisible_=!1)},e.prototype.handleClick_=function(t){t.preventDefault(),this.handleToggle_()},e.prototype.handleToggle_=function(){this.element.classList.toggle(p.a),this.collapsed_?Object(c.e)(this.collapseLabel_,this.label_):Object(c.e)(this.label_,this.collapseLabel_),this.collapsed_=!this.collapsed_},e.prototype.getCollapsible=function(){return this.collapsible_},e.prototype.setCollapsible=function(t){this.collapsible_!==t&&(this.collapsible_=t,this.element.classList.toggle("ol-uncollapsible"),!t&&this.collapsed_&&this.handleToggle_())},e.prototype.setCollapsed=function(t){this.collapsible_&&this.collapsed_!==t&&this.handleToggle_()},e.prototype.getCollapsed=function(){return this.collapsed_},e.prototype.render=function(t){this.updateElement_(t.frameState)},e}(d),v=i(32),y=i(26),b=function(){var t=function(e,i){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(e,i)};return function(e,i){function r(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(r.prototype=i.prototype,new r)}}(),_=function(t){function e(e){var i=this,r=e||{};i=t.call(this,{element:document.createElement("div"),render:r.render,target:r.target})||this;var n=void 0!==r.className?r.className:"ol-rotate",o=void 0!==r.label?r.label:"⇧";i.label_=null,"string"==typeof o?(i.label_=document.createElement("span"),i.label_.className="ol-compass",i.label_.textContent=o):(i.label_=o,i.label_.classList.add("ol-compass"));var a=r.tipLabel?r.tipLabel:"Reset rotation",s=document.createElement("button");s.className=n+"-reset",s.setAttribute("type","button"),s.title=a,s.appendChild(i.label_),s.addEventListener(u.a.CLICK,i.handleClick_.bind(i),!1);var c=n+" "+p.d+" "+p.b,l=i.element;return l.className=c,l.appendChild(s),i.callResetNorth_=r.resetNorth?r.resetNorth:void 0,i.duration_=void 0!==r.duration?r.duration:250,i.autoHide_=void 0===r.autoHide||r.autoHide,i.rotation_=void 0,i.autoHide_&&i.element.classList.add(p.c),i}return b(e,t),e.prototype.handleClick_=function(t){t.preventDefault(),void 0!==this.callResetNorth_?this.callResetNorth_():this.resetNorth_()},e.prototype.resetNorth_=function(){var t=this.getMap().getView();if(t){var e=t.getRotation();void 0!==e&&(this.duration_>0&&e%(2*Math.PI)!=0?t.animate({rotation:0,duration:this.duration_,easing:y.b}):t.setRotation(0))}},e.prototype.render=function(t){var e=t.frameState;if(e){var i=e.viewState.rotation;if(i!=this.rotation_){var r="rotate("+i+"rad)";if(this.autoHide_){var n=this.element.classList.contains(p.c);n||0!==i?n&&0!==i&&this.element.classList.remove(p.c):this.element.classList.add(p.c)}this.label_.style.transform=r}this.rotation_=i}},e}(d),w=function(){var t=function(e,i){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(e,i)};return function(e,i){function r(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(r.prototype=i.prototype,new r)}}(),C=function(t){function e(e){var i=this,r=e||{};i=t.call(this,{element:document.createElement("div"),target:r.target})||this;var n=void 0!==r.className?r.className:"ol-zoom",o=void 0!==r.delta?r.delta:1,a=void 0!==r.zoomInLabel?r.zoomInLabel:"+",s=void 0!==r.zoomOutLabel?r.zoomOutLabel:"−",c=void 0!==r.zoomInTipLabel?r.zoomInTipLabel:"Zoom in",l=void 0!==r.zoomOutTipLabel?r.zoomOutTipLabel:"Zoom out",d=document.createElement("button");d.className=n+"-in",d.setAttribute("type","button"),d.title=c,d.appendChild("string"==typeof a?document.createTextNode(a):a),d.addEventListener(u.a.CLICK,i.handleClick_.bind(i,o),!1);var h=document.createElement("button");h.className=n+"-out",h.setAttribute("type","button"),h.title=l,h.appendChild("string"==typeof s?document.createTextNode(s):s),h.addEventListener(u.a.CLICK,i.handleClick_.bind(i,-o),!1);var f=n+" "+p.d+" "+p.b,m=i.element;return m.className=f,m.appendChild(d),m.appendChild(h),i.duration_=void 0!==r.duration?r.duration:250,i}return w(e,t),e.prototype.handleClick_=function(t,e){e.preventDefault(),this.zoomByDelta_(t)},e.prototype.zoomByDelta_=function(t){var e=this.getMap().getView();if(e){var i=e.getZoom();if(void 0!==i){var r=e.getConstrainedZoom(i+t);this.duration_>0?(e.getAnimating()&&e.cancelAnimations(),e.animate({zoom:r,duration:this.duration_,easing:y.b})):e.setZoom(r)}}},e}(d);function x(t){var e=t||{},i=new v.a;return(void 0===e.zoom||e.zoom)&&i.push(new C(e.zoomOptions)),(void 0===e.rotate||e.rotate)&&i.push(new _(e.rotateOptions)),(void 0===e.attribution||e.attribution)&&i.push(new g(e.attributionOptions)),i}},function(t,e,i){"use strict";(function(t,r){var n,o=i(80);n="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==t?t:r;var a=Object(o.a)(n);e.a=a}).call(this,i(72),i(114)(t))},function(t,e,i){"use strict";i.d(e,"c",(function(){return c})),i.d(e,"a",(function(){return d}));var r=i(78),n=i(71),o=(i(3),i(60)),a=i(10),s=function(){function t(t){var e=t||{};this.geometry_=null,this.geometryFunction_=u,void 0!==e.geometry&&this.setGeometry(e.geometry),this.fill_=void 0!==e.fill?e.fill:null,this.image_=void 0!==e.image?e.image:null,this.renderer_=void 0!==e.renderer?e.renderer:null,this.stroke_=void 0!==e.stroke?e.stroke:null,this.text_=void 0!==e.text?e.text:null,this.zIndex_=e.zIndex}return t.prototype.clone=function(){var e=this.getGeometry();return e&&"object"==typeof e&&(e=e.clone()),new t({geometry:e,fill:this.getFill()?this.getFill().clone():void 0,image:this.getImage()?this.getImage().clone():void 0,stroke:this.getStroke()?this.getStroke().clone():void 0,text:this.getText()?this.getText().clone():void 0,zIndex:this.getZIndex()})},t.prototype.getRenderer=function(){return this.renderer_},t.prototype.setRenderer=function(t){this.renderer_=t},t.prototype.getGeometry=function(){return this.geometry_},t.prototype.getGeometryFunction=function(){return this.geometryFunction_},t.prototype.getFill=function(){return this.fill_},t.prototype.setFill=function(t){this.fill_=t},t.prototype.getImage=function(){return this.image_},t.prototype.setImage=function(t){this.image_=t},t.prototype.getStroke=function(){return this.stroke_},t.prototype.setStroke=function(t){this.stroke_=t},t.prototype.getText=function(){return this.text_},t.prototype.setText=function(t){this.text_=t},t.prototype.getZIndex=function(){return this.zIndex_},t.prototype.setGeometry=function(t){"function"==typeof t?this.geometryFunction_=t:"string"==typeof t?this.geometryFunction_=function(e){return e.get(t)}:t?void 0!==t&&(this.geometryFunction_=function(){return t}):this.geometryFunction_=u,this.geometry_=t},t.prototype.setZIndex=function(t){this.zIndex_=t},t}();function c(t){var e;if("function"==typeof t)e=t;else{var i;if(Array.isArray(t))i=t;else Object(a.a)("function"==typeof t.getZIndex,41),i=[t];e=function(){return i}}return e}var l=null;function d(t,e){if(!l){var i=new n.a({color:"rgba(255,255,255,0.4)"}),a=new o.a({color:"#3399CC",width:1.25});l=[new s({image:new r.a({fill:i,stroke:a,radius:5}),fill:i,stroke:a})]}return l}function u(t){return t.getGeometry()}e.b=s},function(t,e,i){"use strict";var r=i(50),n=i(48),o=i(10),a=i(4),s=i(0),c=i(31),l=i(12),d=i(28),u=[0,0,0],p=function(){function t(t){var e;if(this.minZoom=void 0!==t.minZoom?t.minZoom:0,this.resolutions_=t.resolutions,Object(o.a)(Object(l.c)(this.resolutions_,(function(t,e){return e-t}),!0),17),!t.origins)for(var i=0,a=this.resolutions_.length-1;i<a;++i)if(e){if(this.resolutions_[i]/this.resolutions_[i+1]!==e){e=void 0;break}}else e=this.resolutions_[i]/this.resolutions_[i+1];this.zoomFactor_=e,this.maxZoom=this.resolutions_.length-1,this.origin_=void 0!==t.origin?t.origin:null,this.origins_=null,void 0!==t.origins&&(this.origins_=t.origins,Object(o.a)(this.origins_.length==this.resolutions_.length,20));var c=t.extent;void 0===c||this.origin_||this.origins_||(this.origin_=Object(s.C)(c)),Object(o.a)(!this.origin_&&this.origins_||this.origin_&&!this.origins_,18),this.tileSizes_=null,void 0!==t.tileSizes&&(this.tileSizes_=t.tileSizes,Object(o.a)(this.tileSizes_.length==this.resolutions_.length,19)),this.tileSize_=void 0!==t.tileSize?t.tileSize:this.tileSizes_?null:n.b,Object(o.a)(!this.tileSize_&&this.tileSizes_||this.tileSize_&&!this.tileSizes_,22),this.extent_=void 0!==c?c:null,this.fullTileRanges_=null,this.tmpSize_=[0,0],void 0!==t.sizes?this.fullTileRanges_=t.sizes.map((function(t,e){return new r.b(Math.min(0,t[0]),Math.max(t[0]-1,-1),Math.min(0,t[1]),Math.max(t[1]-1,-1))}),this):c&&this.calculateTileRanges_(c)}return t.prototype.forEachTileCoord=function(t,e,i){for(var r=this.getTileRangeForExtentAndZ(t,e),n=r.minX,o=r.maxX;n<=o;++n)for(var a=r.minY,s=r.maxY;a<=s;++a)i([e,n,a])},t.prototype.forEachTileCoordParentTileRange=function(t,e,i,n){var o,a,s,c=null,l=t[0]-1;for(2===this.zoomFactor_?(a=t[1],s=t[2]):c=this.getTileCoordExtent(t,n);l>=this.minZoom;){if(2===this.zoomFactor_?(a=Math.floor(a/2),s=Math.floor(s/2),o=Object(r.a)(a,a,s,s,i)):o=this.getTileRangeForExtentAndZ(c,l,i),e(l,o))return!0;--l}return!1},t.prototype.getExtent=function(){return this.extent_},t.prototype.getMaxZoom=function(){return this.maxZoom},t.prototype.getMinZoom=function(){return this.minZoom},t.prototype.getOrigin=function(t){return this.origin_?this.origin_:this.origins_[t]},t.prototype.getResolution=function(t){return this.resolutions_[t]},t.prototype.getResolutions=function(){return this.resolutions_},t.prototype.getTileCoordChildTileRange=function(t,e,i){if(t[0]<this.maxZoom){if(2===this.zoomFactor_){var n=2*t[1],o=2*t[2];return Object(r.a)(n,n+1,o,o+1,e)}var a=this.getTileCoordExtent(t,i);return this.getTileRangeForExtentAndZ(a,t[0]+1,e)}return null},t.prototype.getTileRangeExtent=function(t,e,i){var r=this.getOrigin(t),n=this.getResolution(t),o=Object(d.c)(this.getTileSize(t),this.tmpSize_),a=r[0]+e.minX*o[0]*n,c=r[0]+(e.maxX+1)*o[0]*n,l=r[1]+e.minY*o[1]*n,u=r[1]+(e.maxY+1)*o[1]*n;return Object(s.k)(a,l,c,u,i)},t.prototype.getTileRangeForExtentAndZ=function(t,e,i){var n=u;this.getTileCoordForXYAndZ_(t[0],t[3],e,!1,n);var o=n[1],a=n[2];return this.getTileCoordForXYAndZ_(t[2],t[1],e,!0,n),Object(r.a)(o,n[1],a,n[2],i)},t.prototype.getTileCoordCenter=function(t){var e=this.getOrigin(t[0]),i=this.getResolution(t[0]),r=Object(d.c)(this.getTileSize(t[0]),this.tmpSize_);return[e[0]+(t[1]+.5)*r[0]*i,e[1]-(t[2]+.5)*r[1]*i]},t.prototype.getTileCoordExtent=function(t,e){var i=this.getOrigin(t[0]),r=this.getResolution(t[0]),n=Object(d.c)(this.getTileSize(t[0]),this.tmpSize_),o=i[0]+t[1]*n[0]*r,a=i[1]-(t[2]+1)*n[1]*r,c=o+n[0]*r,l=a+n[1]*r;return Object(s.k)(o,a,c,l,e)},t.prototype.getTileCoordForCoordAndResolution=function(t,e,i){return this.getTileCoordForXYAndResolution_(t[0],t[1],e,!1,i)},t.prototype.getTileCoordForXYAndResolution_=function(t,e,i,r,n){var o=this.getZForResolution(i),a=i/this.getResolution(o),s=this.getOrigin(o),l=Object(d.c)(this.getTileSize(o),this.tmpSize_),u=r?.5:0,p=r?.5:0,h=Math.floor((t-s[0])/i+u),f=Math.floor((s[1]-e)/i+p),m=a*h/l[0],g=a*f/l[1];return r?(m=Math.ceil(m)-1,g=Math.ceil(g)-1):(m=Math.floor(m),g=Math.floor(g)),Object(c.a)(o,m,g,n)},t.prototype.getTileCoordForXYAndZ_=function(t,e,i,r,n){var o=this.getOrigin(i),a=this.getResolution(i),s=Object(d.c)(this.getTileSize(i),this.tmpSize_),l=r?.5:0,u=r?.5:0,p=Math.floor((t-o[0])/a+l),h=Math.floor((o[1]-e)/a+u),f=p/s[0],m=h/s[1];return r?(f=Math.ceil(f)-1,m=Math.ceil(m)-1):(f=Math.floor(f),m=Math.floor(m)),Object(c.a)(i,f,m,n)},t.prototype.getTileCoordForCoordAndZ=function(t,e,i){return this.getTileCoordForXYAndZ_(t[0],t[1],e,!1,i)},t.prototype.getTileCoordResolution=function(t){return this.resolutions_[t[0]]},t.prototype.getTileSize=function(t){return this.tileSize_?this.tileSize_:this.tileSizes_[t]},t.prototype.getFullTileRange=function(t){return this.fullTileRanges_?this.fullTileRanges_[t]:null},t.prototype.getZForResolution=function(t,e){var i=Object(l.d)(this.resolutions_,t,e||0);return Object(a.a)(i,this.minZoom,this.maxZoom)},t.prototype.calculateTileRanges_=function(t){for(var e=this.resolutions_.length,i=new Array(e),r=this.minZoom;r<e;++r)i[r]=this.getTileRangeForExtentAndZ(t,r);this.fullTileRanges_=i},t}();e.a=p},function(t,e,i){"use strict";var r,n=i(16),o=i(63),a=i(41),s=i(33),c=i(13),l=i(2),d=(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(t,e)},function(t,e){function i(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}),u=function(t){function e(e){var i=this,r=void 0!==e.rotateWithView&&e.rotateWithView;return(i=t.call(this,{opacity:1,rotateWithView:r,rotation:void 0!==e.rotation?e.rotation:0,scale:1,displacement:void 0!==e.displacement?e.displacement:[0,0]})||this).canvas_={},i.hitDetectionCanvas_=null,i.fill_=void 0!==e.fill?e.fill:null,i.origin_=[0,0],i.points_=e.points,i.radius_=void 0!==e.radius?e.radius:e.radius1,i.radius2_=e.radius2,i.angle_=void 0!==e.angle?e.angle:0,i.stroke_=void 0!==e.stroke?e.stroke:null,i.anchor_=null,i.size_=null,i.imageSize_=null,i.hitDetectionImageSize_=null,i.render(),i}return d(e,t),e.prototype.clone=function(){var t=new e({fill:this.getFill()?this.getFill().clone():void 0,points:this.getPoints(),radius:this.getRadius(),radius2:this.getRadius2(),angle:this.getAngle(),stroke:this.getStroke()?this.getStroke().clone():void 0,rotation:this.getRotation(),rotateWithView:this.getRotateWithView(),displacement:this.getDisplacement().slice()});return t.setOpacity(this.getOpacity()),t.setScale(this.getScale()),t},e.prototype.getAnchor=function(){return this.anchor_},e.prototype.getAngle=function(){return this.angle_},e.prototype.getFill=function(){return this.fill_},e.prototype.getHitDetectionImage=function(){if(!this.hitDetectionCanvas_){var t=this.createRenderOptions();this.createHitDetectionCanvas_(t)}return this.hitDetectionCanvas_},e.prototype.getImage=function(t){if(!this.canvas_[t||1]){var e=this.createRenderOptions(),i=Object(c.a)(e.size*t||1,e.size*t||1);this.draw_(e,i,0,0,t||1),this.canvas_[t||1]=i.canvas}return this.canvas_[t||1]},e.prototype.getPixelRatio=function(t){return t},e.prototype.getImageSize=function(){return this.imageSize_},e.prototype.getHitDetectionImageSize=function(){return this.hitDetectionImageSize_},e.prototype.getImageState=function(){return n.a.LOADED},e.prototype.getOrigin=function(){return this.origin_},e.prototype.getPoints=function(){return this.points_},e.prototype.getRadius=function(){return this.radius_},e.prototype.getRadius2=function(){return this.radius2_},e.prototype.getSize=function(){return this.size_},e.prototype.getStroke=function(){return this.stroke_},e.prototype.listenImageChange=function(t){},e.prototype.load=function(){},e.prototype.unlistenImageChange=function(t){},e.prototype.createRenderOptions=function(){var t,e=l.e,i=l.h,r=0,n=null,o=0,a=0;return this.stroke_&&(null===(t=this.stroke_.getColor())&&(t=l.l),t=Object(s.a)(t),void 0===(a=this.stroke_.getWidth())&&(a=l.i),n=this.stroke_.getLineDash(),o=this.stroke_.getLineDashOffset(),void 0===(i=this.stroke_.getLineJoin())&&(i=l.h),void 0===(e=this.stroke_.getLineCap())&&(e=l.e),void 0===(r=this.stroke_.getMiterLimit())&&(r=l.j)),{strokeStyle:t,strokeWidth:a,size:2*(this.radius_+a)+1,lineCap:e,lineDash:n,lineDashOffset:o,lineJoin:i,miterLimit:r}},e.prototype.render=function(){var t=this.createRenderOptions(),e=Object(c.a)(t.size,t.size);this.draw_(t,e,0,0,1),this.canvas_[1]=e.canvas;var i=e.canvas.width,r=i,n=this.getDisplacement();this.hitDetectionImageSize_=[t.size,t.size],this.createHitDetectionCanvas_(t),this.anchor_=[i/2-n[0],i/2+n[1]],this.size_=[i,i],this.imageSize_=[r,r]},e.prototype.draw_=function(t,e,i,r,n){var o,a,c;e.setTransform(n,0,0,n,0,0),e.translate(i,r),e.beginPath();var d=this.points_;if(d===1/0)e.arc(t.size/2,t.size/2,this.radius_,0,2*Math.PI,!0);else{var u=void 0!==this.radius2_?this.radius2_:this.radius_;for(u!==this.radius_&&(d*=2),o=0;o<=d;o++)a=2*o*Math.PI/d-Math.PI/2+this.angle_,c=o%2==0?this.radius_:u,e.lineTo(t.size/2+c*Math.cos(a),t.size/2+c*Math.sin(a))}if(this.fill_){var p=this.fill_.getColor();null===p&&(p=l.c),e.fillStyle=Object(s.a)(p),e.fill()}this.stroke_&&(e.strokeStyle=t.strokeStyle,e.lineWidth=t.strokeWidth,e.setLineDash&&t.lineDash&&(e.setLineDash(t.lineDash),e.lineDashOffset=t.lineDashOffset),e.lineCap=t.lineCap,e.lineJoin=t.lineJoin,e.miterLimit=t.miterLimit,e.stroke()),e.closePath()},e.prototype.createHitDetectionCanvas_=function(t){if(this.hitDetectionCanvas_=this.getImage(1),this.fill_){var e=this.fill_.getColor(),i=0;if("string"==typeof e&&(e=Object(a.a)(e)),null===e?i=1:Array.isArray(e)&&(i=4===e.length?e[3]:1),0===i){var r=Object(c.a)(t.size,t.size);this.hitDetectionCanvas_=r.canvas,this.drawHitDetectionCanvas_(t,r,0,0)}}},e.prototype.drawHitDetectionCanvas_=function(t,e,i,r){e.translate(i,r),e.beginPath();var n=this.points_;if(n===1/0)e.arc(t.size/2,t.size/2,this.radius_,0,2*Math.PI,!0);else{var o=void 0!==this.radius2_?this.radius2_:this.radius_;o!==this.radius_&&(n*=2);var a=void 0,s=void 0,c=void 0;for(a=0;a<=n;a++)c=2*a*Math.PI/n-Math.PI/2+this.angle_,s=a%2==0?this.radius_:o,e.lineTo(t.size/2+s*Math.cos(c),t.size/2+s*Math.sin(c))}e.fillStyle=l.c,e.fill(),this.stroke_&&(e.strokeStyle=t.strokeStyle,e.lineWidth=t.strokeWidth,t.lineDash&&(e.setLineDash(t.lineDash),e.lineDashOffset=t.lineDashOffset),e.stroke()),e.closePath()},e}(o.a),p=function(){var t=function(e,i){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(e,i)};return function(e,i){function r(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(r.prototype=i.prototype,new r)}}(),h=function(t){function e(e){var i=e||{};return t.call(this,{points:1/0,fill:i.fill,radius:i.radius,stroke:i.stroke,displacement:void 0!==i.displacement?i.displacement:[0,0]})||this}return p(e,t),e.prototype.clone=function(){var t=new e({fill:this.getFill()?this.getFill().clone():void 0,stroke:this.getStroke()?this.getStroke().clone():void 0,radius:this.getRadius(),displacement:this.getDisplacement().slice()});return t.setOpacity(this.getOpacity()),t.setScale(this.getScale()),t},e.prototype.setRadius=function(t){this.radius_=t,this.render()},e}(u);e.a=h},function(t){t.exports=JSON.parse('{"ES":{"titulo":"Cartelera","entradaLibre":"Entrada Libre y Gratituta","entradaPaga":"Entrada General $"},"EN":{}}')},function(t,e,i){"use strict";function r(t){var e,i=t.Symbol;return"function"==typeof i?i.observable?e=i.observable:(e=i("observable"),i.observable=e):e="@@observable",e}i.d(e,"a",(function(){return r}))},function(t,e,i){"use strict";var r,n=i(3),o=i(42),a=i(0),s=i(52),c=i(4),l=(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(t,e)},function(t,e){function i(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}),d=function(t){function e(e,i){var r=t.call(this)||this;return r.setCoordinates(e,i),r}return l(e,t),e.prototype.clone=function(){return new e(this.flatCoordinates.slice(),this.layout)},e.prototype.closestPointXY=function(t,e,i,r){var n=this.flatCoordinates,o=Object(c.g)(t,e,n[0],n[1]);if(o<r){for(var a=this.stride,s=0;s<a;++s)i[s]=n[s];return i.length=a,o}return r},e.prototype.getCoordinates=function(){return this.flatCoordinates?this.flatCoordinates.slice():[]},e.prototype.computeExtent=function(t){return Object(a.m)(this.flatCoordinates,t)},e.prototype.getType=function(){return n.a.POINT},e.prototype.intersectsExtent=function(t){return Object(a.h)(t,this.flatCoordinates[0],this.flatCoordinates[1])},e.prototype.setCoordinates=function(t,e){this.setLayout(e,t,0),this.flatCoordinates||(this.flatCoordinates=[]),this.flatCoordinates.length=Object(s.a)(this.flatCoordinates,0,t,this.stride),this.changed()},e}(o.a);e.a=d},function(t,e,i){"use strict";var r=i(15),n=i(3),o=i(23),a=i(20),s="center",c="resolution",l="rotation",d=i(48),u=i(8),p=i(14),h=i(24),f=i(10),m=i(11),g=i(4);function v(t,e,i){return function(r,n,o,a){if(r){var s=e?0:o[0]*n,c=e?0:o[1]*n,l=t[0]+s/2,d=t[2]-s/2,u=t[1]+c/2,p=t[3]-c/2;l>d&&(d=l=(d+l)/2),u>p&&(p=u=(p+u)/2);var h=Object(g.a)(r[0],l,d),f=Object(g.a)(r[1],u,p),m=30*n;return a&&i&&(h+=-m*Math.log(1+Math.max(0,l-r[0])/m)+m*Math.log(1+Math.max(0,r[0]-d)/m),f+=-m*Math.log(1+Math.max(0,u-r[1])/m)+m*Math.log(1+Math.max(0,r[1]-p)/m)),[h,f]}}}function y(t){return t}var b=i(0),_=i(12);function w(t,e,i,r){var n=Object(b.E)(e)/i[0],o=Object(b.A)(e)/i[1];return r?Math.min(t,Math.max(n,o)):Math.min(t,Math.min(n,o))}function C(t,e,i){var r=Math.min(t,e);return r*=Math.log(1+50*Math.max(0,t/e-1))/50+1,i&&(r=Math.max(r,i),r/=Math.log(1+50*Math.max(0,i/t-1))/50+1),Object(g.a)(r,i/2,2*e)}function x(t,e,i,r,n){return function(o,a,s,c){if(void 0!==o){var l=r?w(t,r,s,n):t;return(void 0===i||i)&&c?C(o,l,e):Object(g.a)(o,e,l)}}}var S,E=i(39),M=i(26),T=i(59),O=(S=function(t,e){return(S=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(t,e)},function(t,e){function i(){this.constructor=t}S(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}),L=function(t){function e(e){var i=t.call(this)||this,r=Object(m.a)({},e);return i.hints_=[0,0],i.animations_=[],i.updateAnimationKey_,i.projection_=Object(u.b)(r.projection,"EPSG:3857"),i.viewportSize_=[100,100],i.targetCenter_=null,i.targetResolution_,i.targetRotation_,i.cancelAnchor_=void 0,r.center&&(r.center=Object(u.d)(r.center,i.projection_)),r.extent&&(r.extent=Object(u.e)(r.extent,i.projection_)),i.applyOptions_(r),i}return O(e,t),e.prototype.applyOptions_=function(t){var e=function(t){var e,i,r,n=void 0!==t.minZoom?t.minZoom:0,a=void 0!==t.maxZoom?t.maxZoom:28,s=void 0!==t.zoomFactor?t.zoomFactor:2,c=void 0!==t.multiWorld&&t.multiWorld,l=void 0===t.smoothResolutionConstraint||t.smoothResolutionConstraint,p=void 0!==t.showFullExtent&&t.showFullExtent,h=Object(u.b)(t.projection,"EPSG:3857"),f=h.getExtent(),m=t.constrainOnlyCenter,v=t.extent;c||v||!h.isGlobal()||(m=!1,v=f);if(void 0!==t.resolutions){var y=t.resolutions;i=y[n],r=void 0!==y[a]?y[a]:y[y.length-1],e=t.constrainResolution?function(t,e,i,r){return function(n,o,a,s){if(void 0!==n){var c=t[0],l=t[t.length-1],d=i?w(c,i,a,r):c;if(s)return void 0===e||e?C(n,d,l):Object(g.a)(n,l,d);var u=Math.min(d,n),p=Math.floor(Object(_.d)(t,u,o));return t[p]>d&&p<t.length-1?t[p+1]:t[p]}}}(y,l,!m&&v,p):x(i,r,l,!m&&v,p)}else{var S=(f?Math.max(Object(b.E)(f),Object(b.A)(f)):360*u.a[o.b.DEGREES]/h.getMetersPerUnit())/d.b/Math.pow(2,0),E=S/Math.pow(2,28);void 0!==(i=t.maxResolution)?n=0:i=S/Math.pow(s,n),void 0===(r=t.minResolution)&&(r=void 0!==t.maxZoom?void 0!==t.maxResolution?i/Math.pow(s,a):S/Math.pow(s,a):E),a=n+Math.floor(Math.log(i/r)/Math.log(s)),r=i/Math.pow(s,a-n),e=t.constrainResolution?function(t,e,i,r,n,o){return function(a,s,c,l){if(void 0!==a){var d=n?w(e,n,c,o):e,u=void 0!==i?i:0;if(l)return void 0===r||r?C(a,d,u):Object(g.a)(a,u,d);var p=Math.ceil(Math.log(e/d)/Math.log(t)-1e-9),h=-s*(.5-1e-9)+.5,f=Math.min(d,a),m=Math.floor(Math.log(e/f)/Math.log(t)+h),v=Math.max(p,m),y=e/Math.pow(t,v);return Object(g.a)(y,u,d)}}}(s,i,r,l,!m&&v,p):x(i,r,l,!m&&v,p)}return{constraint:e,maxResolution:i,minResolution:r,minZoom:n,zoomFactor:s}}(t);this.maxResolution_=e.maxResolution,this.minResolution_=e.minResolution,this.zoomFactor_=e.zoomFactor,this.resolutions_=t.resolutions,this.minZoom_=e.minZoom;var i=function(t){if(void 0!==t.extent){var e=void 0===t.smoothExtentConstraint||t.smoothExtentConstraint;return v(t.extent,t.constrainOnlyCenter,e)}var i=Object(u.b)(t.projection,"EPSG:3857");if(!0!==t.multiWorld&&i.isGlobal()){var r=i.getExtent().slice();return r[0]=-1/0,r[2]=1/0,v(r,!1,!1)}return y}(t),r=e.constraint,n=function(t){if(void 0===t.enableRotation||t.enableRotation){var e=t.constrainRotation;return void 0===e||!0===e?Object(E.b)():!1===e?E.d:"number"==typeof e?Object(E.a)(e):E.d}return E.c}(t);this.constraints_={center:i,resolution:r,rotation:n},this.setRotation(void 0!==t.rotation?t.rotation:0),this.setCenterInternal(void 0!==t.center?t.center:null),void 0!==t.resolution?this.setResolution(t.resolution):void 0!==t.zoom&&this.setZoom(t.zoom),this.setProperties({}),this.options_=t},e.prototype.getUpdatedOptions_=function(t){var e=Object(m.a)({},this.options_);return void 0!==e.resolution?e.resolution=this.getResolution():e.zoom=this.getZoom(),e.center=this.getCenterInternal(),e.rotation=this.getRotation(),Object(m.a)({},e,t)},e.prototype.animate=function(t){this.isDef()&&!this.getAnimating()&&this.resolveConstraints(0);for(var e=new Array(arguments.length),i=0;i<e.length;++i){var r=arguments[i];r.center&&((r=Object(m.a)({},r)).center=Object(u.d)(r.center,this.getProjection())),r.anchor&&((r=Object(m.a)({},r)).anchor=Object(u.d)(r.anchor,this.getProjection())),e[i]=r}this.animateInternal.apply(this,e)},e.prototype.animateInternal=function(t){var e,i=arguments.length;if(i>1&&"function"==typeof arguments[i-1]&&(e=arguments[i-1],--i),!this.isDef()){var r=arguments[i-1];return r.center&&this.setCenterInternal(r.center),void 0!==r.zoom&&this.setZoom(r.zoom),void 0!==r.rotation&&this.setRotation(r.rotation),void(e&&A(e,!0))}for(var n=Date.now(),o=this.targetCenter_.slice(),s=this.targetResolution_,c=this.targetRotation_,l=[],d=0;d<i;++d){var u=arguments[d],p={start:n,complete:!1,anchor:u.anchor,duration:void 0!==u.duration?u.duration:1e3,easing:u.easing||M.c,callback:e};if(u.center&&(p.sourceCenter=o,p.targetCenter=u.center.slice(),o=p.targetCenter),void 0!==u.zoom?(p.sourceResolution=s,p.targetResolution=this.getResolutionForZoom(u.zoom),s=p.targetResolution):u.resolution&&(p.sourceResolution=s,p.targetResolution=u.resolution,s=p.targetResolution),void 0!==u.rotation){p.sourceRotation=c;var h=Object(g.e)(u.rotation-c+Math.PI,2*Math.PI)-Math.PI;p.targetRotation=c+h,c=p.targetRotation}I(p)?p.complete=!0:n+=p.duration,l.push(p)}this.animations_.push(l),this.setHint(a.a.ANIMATING,1),this.updateAnimations_()},e.prototype.getAnimating=function(){return this.hints_[a.a.ANIMATING]>0},e.prototype.getInteracting=function(){return this.hints_[a.a.INTERACTING]>0},e.prototype.cancelAnimations=function(){var t;this.setHint(a.a.ANIMATING,-this.hints_[a.a.ANIMATING]);for(var e=0,i=this.animations_.length;e<i;++e){var r=this.animations_[e];if(r[0].callback&&A(r[0].callback,!1),!t)for(var n=0,o=r.length;n<o;++n){var s=r[n];if(!s.complete){t=s.anchor;break}}}this.animations_.length=0,this.cancelAnchor_=t},e.prototype.updateAnimations_=function(){if(void 0!==this.updateAnimationKey_&&(cancelAnimationFrame(this.updateAnimationKey_),this.updateAnimationKey_=void 0),this.getAnimating()){for(var t=Date.now(),e=!1,i=this.animations_.length-1;i>=0;--i){for(var r=this.animations_[i],n=!0,o=0,s=r.length;o<s;++o){var c=r[o];if(!c.complete){var l=t-c.start,d=c.duration>0?l/c.duration:1;d>=1?(c.complete=!0,d=1):n=!1;var u=c.easing(d);if(c.sourceCenter){var p=c.sourceCenter[0],h=c.sourceCenter[1],f=p+u*(c.targetCenter[0]-p),m=h+u*(c.targetCenter[1]-h);this.targetCenter_=[f,m]}if(c.sourceResolution&&c.targetResolution){var v=1===u?c.targetResolution:c.sourceResolution+u*(c.targetResolution-c.sourceResolution);if(c.anchor){var y=this.getViewportSize_(this.getRotation()),b=this.constraints_.resolution(v,0,y,!0);this.targetCenter_=this.calculateCenterZoom(b,c.anchor)}this.targetResolution_=v,this.applyTargetState_(!0)}if(void 0!==c.sourceRotation&&void 0!==c.targetRotation){var _=1===u?Object(g.e)(c.targetRotation+Math.PI,2*Math.PI)-Math.PI:c.sourceRotation+u*(c.targetRotation-c.sourceRotation);if(c.anchor){var w=this.constraints_.rotation(_,!0);this.targetCenter_=this.calculateCenterRotate(w,c.anchor)}this.targetRotation_=_}if(this.applyTargetState_(!0),e=!0,!c.complete)break}}if(n){this.animations_[i]=null,this.setHint(a.a.ANIMATING,-1);var C=r[0].callback;C&&A(C,!0)}}this.animations_=this.animations_.filter(Boolean),e&&void 0===this.updateAnimationKey_&&(this.updateAnimationKey_=requestAnimationFrame(this.updateAnimations_.bind(this)))}},e.prototype.calculateCenterRotate=function(t,e){var i,r=this.getCenterInternal();return void 0!==r&&(i=[r[0]-e[0],r[1]-e[1]],Object(h.d)(i,t-this.getRotation()),Object(h.a)(i,e)),i},e.prototype.calculateCenterZoom=function(t,e){var i,r=this.getCenterInternal(),n=this.getResolution();void 0!==r&&void 0!==n&&(i=[e[0]-t*(e[0]-r[0])/n,e[1]-t*(e[1]-r[1])/n]);return i},e.prototype.getViewportSize_=function(t){var e=this.viewportSize_;if(t){var i=e[0],r=e[1];return[Math.abs(i*Math.cos(t))+Math.abs(r*Math.sin(t)),Math.abs(i*Math.sin(t))+Math.abs(r*Math.cos(t))]}return e},e.prototype.setViewportSize=function(t){this.viewportSize_=Array.isArray(t)?t.slice():[100,100],this.getAnimating()||this.resolveConstraints(0)},e.prototype.getCenter=function(){var t=this.getCenterInternal();return t?Object(u.k)(t,this.getProjection()):t},e.prototype.getCenterInternal=function(){return this.get(s)},e.prototype.getConstraints=function(){return this.constraints_},e.prototype.getConstrainResolution=function(){return this.options_.constrainResolution},e.prototype.getHints=function(t){return void 0!==t?(t[0]=this.hints_[0],t[1]=this.hints_[1],t):this.hints_.slice()},e.prototype.calculateExtent=function(t){var e=this.calculateExtentInternal(t);return Object(u.l)(e,this.getProjection())},e.prototype.calculateExtentInternal=function(t){var e=t||this.getViewportSize_(),i=this.getCenterInternal();Object(f.a)(i,1);var r=this.getResolution();Object(f.a)(void 0!==r,2);var n=this.getRotation();return Object(f.a)(void 0!==n,3),Object(b.z)(i,r,n,e)},e.prototype.getMaxResolution=function(){return this.maxResolution_},e.prototype.getMinResolution=function(){return this.minResolution_},e.prototype.getMaxZoom=function(){return this.getZoomForResolution(this.minResolution_)},e.prototype.setMaxZoom=function(t){this.applyOptions_(this.getUpdatedOptions_({maxZoom:t}))},e.prototype.getMinZoom=function(){return this.getZoomForResolution(this.maxResolution_)},e.prototype.setMinZoom=function(t){this.applyOptions_(this.getUpdatedOptions_({minZoom:t}))},e.prototype.setConstrainResolution=function(t){this.applyOptions_(this.getUpdatedOptions_({constrainResolution:t}))},e.prototype.getProjection=function(){return this.projection_},e.prototype.getResolution=function(){return this.get(c)},e.prototype.getResolutions=function(){return this.resolutions_},e.prototype.getResolutionForExtent=function(t,e){return this.getResolutionForExtentInternal(Object(u.e)(t,this.getProjection()),e)},e.prototype.getResolutionForExtentInternal=function(t,e){var i=e||this.getViewportSize_(),r=Object(b.E)(t)/i[0],n=Object(b.A)(t)/i[1];return Math.max(r,n)},e.prototype.getResolutionForValueFunction=function(t){var e=t||2,i=this.getConstrainedResolution(this.maxResolution_),r=this.minResolution_,n=Math.log(i/r)/Math.log(e);return function(t){return i/Math.pow(e,t*n)}},e.prototype.getRotation=function(){return this.get(l)},e.prototype.getValueForResolutionFunction=function(t){var e=Math.log(t||2),i=this.getConstrainedResolution(this.maxResolution_),r=this.minResolution_,n=Math.log(i/r)/e;return function(t){return Math.log(i/t)/e/n}},e.prototype.getState=function(){var t=this.getCenterInternal(),e=this.getProjection(),i=this.getResolution(),r=this.getRotation();return{center:t.slice(0),projection:void 0!==e?e:null,resolution:i,rotation:r,zoom:this.getZoom()}},e.prototype.getZoom=function(){var t,e=this.getResolution();return void 0!==e&&(t=this.getZoomForResolution(e)),t},e.prototype.getZoomForResolution=function(t){var e,i,r=this.minZoom_||0;if(this.resolutions_){var n=Object(_.d)(this.resolutions_,t,1);r=n,e=this.resolutions_[n],i=n==this.resolutions_.length-1?2:e/this.resolutions_[n+1]}else e=this.maxResolution_,i=this.zoomFactor_;return r+Math.log(e/t)/Math.log(i)},e.prototype.getResolutionForZoom=function(t){if(this.resolutions_){if(this.resolutions_.length<=1)return 0;var e=Object(g.a)(Math.floor(t),0,this.resolutions_.length-2),i=this.resolutions_[e]/this.resolutions_[e+1];return this.resolutions_[e]/Math.pow(i,Object(g.a)(t-e,0,1))}return this.maxResolution_/Math.pow(this.zoomFactor_,t-this.minZoom_)},e.prototype.fit=function(t,e){var i,r=Object(m.a)({size:this.getViewportSize_()},e||{});if(Object(f.a)(Array.isArray(t)||"function"==typeof t.getSimplifiedGeometry,24),Array.isArray(t)){Object(f.a)(!Object(b.H)(t),25);var o=Object(u.e)(t,this.getProjection());i=Object(T.b)(o)}else if(t.getType()===n.a.CIRCLE){o=Object(u.e)(t.getExtent(),this.getProjection());(i=Object(T.b)(o)).rotate(this.getRotation(),Object(b.x)(o))}else{var a=Object(u.j)();i=a?t.clone().transform(a,this.getProjection()):t}this.fitInternal(i,r)},e.prototype.fitInternal=function(t,e){var i=e||{},r=i.size;r||(r=this.getViewportSize_());var n,o=void 0!==i.padding?i.padding:[0,0,0,0],a=void 0!==i.nearest&&i.nearest;n=void 0!==i.minResolution?i.minResolution:void 0!==i.maxZoom?this.getResolutionForZoom(i.maxZoom):0;for(var s=t.getFlatCoordinates(),c=this.getRotation(),l=Math.cos(-c),d=Math.sin(-c),u=1/0,h=1/0,f=-1/0,m=-1/0,g=t.getStride(),v=0,y=s.length;v<y;v+=g){var b=s[v]*l-s[v+1]*d,_=s[v]*d+s[v+1]*l;u=Math.min(u,b),h=Math.min(h,_),f=Math.max(f,b),m=Math.max(m,_)}var w=this.getResolutionForExtentInternal([u,h,f,m],[r[0]-o[1]-o[3],r[1]-o[0]-o[2]]);w=isNaN(w)?n:Math.max(w,n),w=this.getConstrainedResolution(w,a?0:1),d=-d;var C=(u+f)/2,x=(h+m)/2,S=[(C+=(o[1]-o[3])/2*w)*l-(x+=(o[0]-o[2])/2*w)*d,x*l+C*d],E=i.callback?i.callback:p.c;void 0!==i.duration?this.animateInternal({resolution:w,center:this.getConstrainedCenter(S,w),duration:i.duration,easing:i.easing},E):(this.targetResolution_=w,this.targetCenter_=S,this.applyTargetState_(!1,!0),A(E,!0))},e.prototype.centerOn=function(t,e,i){this.centerOnInternal(Object(u.d)(t,this.getProjection()),e,i)},e.prototype.centerOnInternal=function(t,e,i){var r=this.getRotation(),n=Math.cos(-r),o=Math.sin(-r),a=t[0]*n-t[1]*o,s=t[1]*n+t[0]*o,c=this.getResolution(),l=(a+=(e[0]/2-i[0])*c)*n-(s+=(i[1]-e[1]/2)*c)*(o=-o),d=s*n+a*o;this.setCenterInternal([l,d])},e.prototype.isDef=function(){return!!this.getCenterInternal()&&void 0!==this.getResolution()},e.prototype.adjustCenter=function(t){var e=Object(u.k)(this.targetCenter_,this.getProjection());this.setCenter([e[0]+t[0],e[1]+t[1]])},e.prototype.adjustCenterInternal=function(t){var e=this.targetCenter_;this.setCenterInternal([e[0]+t[0],e[1]+t[1]])},e.prototype.adjustResolution=function(t,e){var i=e&&Object(u.d)(e,this.getProjection());this.adjustResolutionInternal(t,i)},e.prototype.adjustResolutionInternal=function(t,e){var i=this.getAnimating()||this.getInteracting(),r=this.getViewportSize_(this.getRotation()),n=this.constraints_.resolution(this.targetResolution_*t,0,r,i);e&&(this.targetCenter_=this.calculateCenterZoom(n,e)),this.targetResolution_*=t,this.applyTargetState_()},e.prototype.adjustZoom=function(t,e){this.adjustResolution(Math.pow(this.zoomFactor_,-t),e)},e.prototype.adjustRotation=function(t,e){e&&(e=Object(u.d)(e,this.getProjection())),this.adjustRotationInternal(t,e)},e.prototype.adjustRotationInternal=function(t,e){var i=this.getAnimating()||this.getInteracting(),r=this.constraints_.rotation(this.targetRotation_+t,i);e&&(this.targetCenter_=this.calculateCenterRotate(r,e)),this.targetRotation_+=t,this.applyTargetState_()},e.prototype.setCenter=function(t){this.setCenterInternal(Object(u.d)(t,this.getProjection()))},e.prototype.setCenterInternal=function(t){this.targetCenter_=t,this.applyTargetState_()},e.prototype.setHint=function(t,e){return this.hints_[t]+=e,this.changed(),this.hints_[t]},e.prototype.setResolution=function(t){this.targetResolution_=t,this.applyTargetState_()},e.prototype.setRotation=function(t){this.targetRotation_=t,this.applyTargetState_()},e.prototype.setZoom=function(t){this.setResolution(this.getResolutionForZoom(t))},e.prototype.applyTargetState_=function(t,e){var i=this.getAnimating()||this.getInteracting()||e,r=this.constraints_.rotation(this.targetRotation_,i),n=this.getViewportSize_(r),o=this.constraints_.resolution(this.targetResolution_,0,n,i),a=this.constraints_.center(this.targetCenter_,o,n,i);this.get(l)!==r&&this.set(l,r),this.get(c)!==o&&this.set(c,o),this.get(s)&&Object(h.b)(this.get(s),a)||this.set(s,a),this.getAnimating()&&!t&&this.cancelAnimations(),this.cancelAnchor_=void 0},e.prototype.resolveConstraints=function(t,e,i){var r=void 0!==t?t:200,n=e||0,o=this.constraints_.rotation(this.targetRotation_),a=this.getViewportSize_(o),s=this.constraints_.resolution(this.targetResolution_,n,a),c=this.constraints_.center(this.targetCenter_,s,a);if(0===r&&!this.cancelAnchor_)return this.targetResolution_=s,this.targetRotation_=o,this.targetCenter_=c,void this.applyTargetState_();var l=i||(0===r?this.cancelAnchor_:void 0);this.cancelAnchor_=void 0,this.getResolution()===s&&this.getRotation()===o&&this.getCenterInternal()&&Object(h.b)(this.getCenterInternal(),c)||(this.getAnimating()&&this.cancelAnimations(),this.animateInternal({rotation:o,center:c,resolution:s,duration:r,easing:M.b,anchor:l}))},e.prototype.beginInteraction=function(){this.resolveConstraints(0),this.setHint(a.a.INTERACTING,1)},e.prototype.endInteraction=function(t,e,i){var r=i&&Object(u.d)(i,this.getProjection());this.endInteractionInternal(t,e,r)},e.prototype.endInteractionInternal=function(t,e,i){this.setHint(a.a.INTERACTING,-1),this.resolveConstraints(t,e,i)},e.prototype.getConstrainedCenter=function(t,e){var i=this.getViewportSize_(this.getRotation());return this.constraints_.center(t,e||this.getResolution(),i)},e.prototype.getConstrainedZoom=function(t,e){var i=this.getResolutionForZoom(t);return this.getZoomForResolution(this.getConstrainedResolution(i,e))},e.prototype.getConstrainedResolution=function(t,e){var i=e||0,r=this.getViewportSize_(this.getRotation());return this.constraints_.resolution(t,i,r)},e}(r.a);function A(t,e){setTimeout((function(){t(e)}),0)}function I(t){return!(t.sourceCenter&&t.targetCenter&&!Object(h.b)(t.sourceCenter,t.targetCenter))&&(t.sourceResolution===t.targetResolution&&t.sourceRotation===t.targetRotation)}e.a=L},,,,,,,,,,,,,,,,,function(t,e,i){var r=i(46),n=i(100);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[t.i,n,""]]);var o={insert:"head",singleton:!1};r(n,o);t.exports=n.locals||{}},function(t,e,i){(e=i(47)(!1)).push([t.i,"/** @format */\n\nhtml {\n    width: 100vw;\n    height: 100vh;\n    overflow-x: hidden;\n    overflow-y: hidden;\n    padding: 0;\n    margin: 0;\n    border: 0;\n}\n\nbody {\n    width: 100vw;\n    height: 100vh;\n    overflow-x: hidden;\n    overflow-y: hidden;\n    padding: 0;\n    margin: 0;\n    border: 0;\n    position: fixed;\n}\n",""]),t.exports=e},function(t,e,i){var r=i(46),n=i(102);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[t.i,n,""]]);var o={insert:"head",singleton:!1};r(n,o);t.exports=n.locals||{}},function(t,e,i){(e=i(47)(!1)).push([t.i,"/** @format */\n\n@media only screen and (max-width: 600px) {\n    html {\n        font-size: 4vmin;\n    }\n}\n\n@media only screen and (max-width: 800px) and (min-width: 601px) {\n    html {\n        font-size: 3vmin;\n    }\n}\n\n@media only screen and (min-width: 801px) {\n    html {\n        font-size: 2.3vmin;\n    }\n}\n",""]),t.exports=e},function(t,e,i){var r=i(46),n=i(104);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[t.i,n,""]]);var o={insert:"head",singleton:!1};r(n,o);t.exports=n.locals||{}},function(t,e,i){var r=i(47),n=i(105),o=i(106);e=r(!1);var a=n(o);e.push([t.i,'@font-face {\n\tfont-family: "OpenSans", sans-serif;\n\tfont-style: normal;\n\tfont-weight: normal;\n\tsrc: url('+a+') format("ttf");\n}\nhtml {\n\tfont-family: "OpenSans", sans-serif;\n}\n',""]),t.exports=e},function(t,e,i){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},function(t,e,i){"use strict";i.r(e),e.default=i.p+"3ed9575dcc488c3e3a5bd66620bdf5a4.ttf"},function(t,e,i){var r=i(46),n=i(108);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[t.i,n,""]]);var o={insert:"head",singleton:!1};r(n,o);t.exports=n.locals||{}},function(t,e,i){(e=i(47)(!1)).push([t.i,"/** @format */\n\nhtml {\n\t--font-header-h1-family: inherit;\n\t--font-header-h1-size: 1.2rem;\n\t--font-header-h1-weight: 600;\n\n\t--font-header-h1-menos-family: inherit;\n\t--font-header-h1-menos-size: 0.9rem;\n\t--font-header-h1-menos-weight: normal;\n\n\t--font-header-h2-family: inherit;\n\t--font-header-h2-size: 0.8rem;\n\t--font-header-h2-weight: 600;\n\n\t--font-bajada-family: inherit;\n\t--font-bajada-size: 1rem;\n\t--font-bajada-weight: normal;\n\n\t--font-label-family: inherit;\n\t--font-label-size: 0.7rem;\n\t--font-label-weight: normal;\n\n\t--font-error-family: inherit;\n\t--font-error-size: 0.7rem;\n\t--font-error-weight: normal;\n}\n",""]),t.exports=e},function(t,e,i){var r=i(46),n=i(110);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[t.i,n,""]]);var o={insert:"head",singleton:!1};r(n,o);t.exports=n.locals||{}},function(t,e,i){(e=i(47)(!1)).push([t.i,"/** @format */\n\nhtml {\n\t--color-nude: #fff2d9;\n\t--color-crudo: #fffafa;\n\t--color-celeste-muy-claro: #f7f8fc;\n\t--color-celeste-claro: #d2dbff;\n\t--color-celeste: #8896ff;\n\t--color-azul: #007aff;\n\t--color-azul-oscuro: #000144;\n\t--color-amarillo: #ffcb31;\n\t--color-amarillo-claro: #ffcb31;\n\t--color-amarillo-oscuro: #6e5713;\n\t--color-rojo: #ff442b;\n\t--color-verde: #43ea9a;\n\t--color-verde-claro: #00a1b2;\n\t--color-verde-oscuro: #004b7e;\n\t--color-gris-fondo: #fafafa;\n\t--color-gris-claro: #e4e4e4;\n\t--color-gris-medio-claro: #f2f2f2;\n\t--color-gris: #c0c0c0;\n\t--color-gris-medio: #999999;\n\t--color-gris-oscuro: #575656;\n\t--color-blanco: #ffffff;\n\t--color-negro: #000000;\n\t--color-rosa: #ff8888;\n\t--color-oro: #b6901c;\n\t--color-texto: #00548e;\n\t--color-azul-icono: #00a1b2;\n\t--primary-color: #0054a1;\n\t--onsurface-color-helper: #5a5856;\n\n\t--color-error: #eda5a5;\n\t--color-ok: #c5efb0;\n}\n",""]),t.exports=e},function(t,e,i){var r=i(46),n=i(112);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[t.i,n,""]]);var o={insert:"head",singleton:!1};r(n,o);t.exports=n.locals||{}},function(t,e,i){(e=i(47)(!1)).push([t.i,"html {\n    --shadow-none-box: none;\n    --shadow-none-z: 0;\n\n    --shadow-elevation-2-box: 0 2px 2px 0 rgba(0, 0, 0, 0.14),0 1px 5px 0 rgba(0, 0, 0, 0.12),0 3px 1px -2px rgba(0, 0, 0, 0.2);\n    --shadow-elevation-2-z: 200;\n\n    --shadow-elevation-3-box: 0 3px 4px 0 rgba(0, 0, 0, 0.14),0 1px 8px 0 rgba(0, 0, 0, 0.12),0 3px 3px -2px rgba(0, 0, 0, 0.4);\n    --shadow-elevation-3-z: 300;\n\n    --shadow-elevation-4-box: 0 4px 5px 0 rgba(0, 0, 0, 0.14),0 1px 10px 0 rgba(0, 0, 0, 0.12),0 2px 4px -1px rgba(0, 0, 0, 0.4);\n    --shadow-elevation-4-z: 400;\n\n    --shadow-elevation-6-box: 0 6px 10px 0 rgba(0, 0, 0, 0.14),0 1px 18px 0 rgba(0, 0, 0, 0.12),0 3px 5px -1px rgba(0, 0, 0, 0.4);\n    --shadow-elevation-6-z: 600;\n\n    --shadow-elevation-8-box: 0 8px 10px 1px rgba(0, 0, 0, 0.14),0 3px 14px 2px rgba(0, 0, 0, 0.12),0 5px 5px -3px rgba(0, 0, 0, 0.4);\n    --shadow-elevation-8-z: 800;\n\n    --shadow-elevation-12-box: 0 12px 16px 1px rgba(0, 0, 0, 0.14),0 4px 22px 3px rgba(0, 0, 0, 0.12),0 6px 7px -4px rgba(0, 0, 0, 0.4);\n    --shadow-elevation-12-z: 1200;\n\n    --shadow-elevation-16-box: 0 16px 24px 2px rgba(0, 0, 0, 0.14),0  6px 30px 5px rgba(0, 0, 0, 0.12),0  8px 10px -5px rgba(0, 0, 0, 0.4);\n    --shadow-elevation-16-z: 1600;\n\n    --shadow-elevation-24-box: 0 24px 38px 3px rgba(0, 0, 0, 0.14),0 9px 46px 8px rgba(0, 0, 0, 0.12),0 11px 15px -7px rgba(0, 0, 0, 0.4);\n    --shadow-elevation-24-z: 2400;\n}",""]),t.exports=e},function(t,e,i){(function(t){!function(e){"use strict";function i(t,e){t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}})}function r(t,e){Object.defineProperty(this,"kind",{value:t,enumerable:!0}),e&&e.length&&Object.defineProperty(this,"path",{value:e,enumerable:!0})}function n(t,e,i){n.super_.call(this,"E",t),Object.defineProperty(this,"lhs",{value:e,enumerable:!0}),Object.defineProperty(this,"rhs",{value:i,enumerable:!0})}function o(t,e){o.super_.call(this,"N",t),Object.defineProperty(this,"rhs",{value:e,enumerable:!0})}function a(t,e){a.super_.call(this,"D",t),Object.defineProperty(this,"lhs",{value:e,enumerable:!0})}function s(t,e,i){s.super_.call(this,"A",t),Object.defineProperty(this,"index",{value:e,enumerable:!0}),Object.defineProperty(this,"item",{value:i,enumerable:!0})}function c(t,e,i){var r=t.slice((i||e)+1||t.length);return t.length=e<0?t.length+e:e,t.push.apply(t,r),t}function l(t){var e=void 0===t?"undefined":x(t);return"object"!==e?e:t===Math?"math":null===t?"null":Array.isArray(t)?"array":"[object Date]"===Object.prototype.toString.call(t)?"date":"function"==typeof t.toString&&/^\/.*\//.test(t.toString())?"regexp":"object"}function d(t,e,i,r,u,p,h){h=h||[];var f=(u=u||[]).slice(0);if(void 0!==p){if(r){if("function"==typeof r&&r(f,p))return;if("object"===(void 0===r?"undefined":x(r))){if(r.prefilter&&r.prefilter(f,p))return;if(r.normalize){var m=r.normalize(f,p,t,e);m&&(t=m[0],e=m[1])}}}f.push(p)}"regexp"===l(t)&&"regexp"===l(e)&&(t=t.toString(),e=e.toString());var g=void 0===t?"undefined":x(t),v=void 0===e?"undefined":x(e),y="undefined"!==g||h&&h[h.length-1].lhs&&h[h.length-1].lhs.hasOwnProperty(p),b="undefined"!==v||h&&h[h.length-1].rhs&&h[h.length-1].rhs.hasOwnProperty(p);if(!y&&b)i(new o(f,e));else if(!b&&y)i(new a(f,t));else if(l(t)!==l(e))i(new n(f,t,e));else if("date"===l(t)&&t-e!=0)i(new n(f,t,e));else if("object"===g&&null!==t&&null!==e)if(h.filter((function(e){return e.lhs===t})).length)t!==e&&i(new n(f,t,e));else{if(h.push({lhs:t,rhs:e}),Array.isArray(t)){var _;for(t.length,_=0;_<t.length;_++)_>=e.length?i(new s(f,_,new a(void 0,t[_]))):d(t[_],e[_],i,r,f,_,h);for(;_<e.length;)i(new s(f,_,new o(void 0,e[_++])))}else{var w=Object.keys(t),C=Object.keys(e);w.forEach((function(n,o){var a=C.indexOf(n);a>=0?(d(t[n],e[n],i,r,f,n,h),C=c(C,a)):d(t[n],void 0,i,r,f,n,h)})),C.forEach((function(t){d(void 0,e[t],i,r,f,t,h)}))}h.length=h.length-1}else t!==e&&("number"===g&&isNaN(t)&&isNaN(e)||i(new n(f,t,e)))}function u(t,e,i,r){return r=r||[],d(t,e,(function(t){t&&r.push(t)}),i),r.length?r:void 0}function p(t,e,i){if(t&&e&&i&&i.kind){for(var r=t,n=-1,o=i.path?i.path.length-1:0;++n<o;)void 0===r[i.path[n]]&&(r[i.path[n]]="number"==typeof i.path[n]?[]:{}),r=r[i.path[n]];switch(i.kind){case"A":!function t(e,i,r){if(r.path&&r.path.length){var n,o=e[i],a=r.path.length-1;for(n=0;n<a;n++)o=o[r.path[n]];switch(r.kind){case"A":t(o[r.path[n]],r.index,r.item);break;case"D":delete o[r.path[n]];break;case"E":case"N":o[r.path[n]]=r.rhs}}else switch(r.kind){case"A":t(e[i],r.index,r.item);break;case"D":e=c(e,i);break;case"E":case"N":e[i]=r.rhs}return e}(i.path?r[i.path[n]]:r,i.index,i.item);break;case"D":delete r[i.path[n]];break;case"E":case"N":r[i.path[n]]=i.rhs}}}function h(t){return"color: "+M[t].color+"; font-weight: bold"}function f(t,e,i,r){var n=u(t,e);try{r?i.groupCollapsed("diff"):i.group("diff")}catch(t){i.log("diff")}n?n.forEach((function(t){var e=t.kind,r=function(t){var e=t.kind,i=t.path,r=t.lhs,n=t.rhs,o=t.index,a=t.item;switch(e){case"E":return[i.join("."),r,"→",n];case"N":return[i.join("."),n];case"D":return[i.join(".")];case"A":return[i.join(".")+"["+o+"]",a];default:return[]}}(t);i.log.apply(i,["%c "+M[e].text,h(e)].concat(S(r)))})):i.log("—— no diff ——");try{i.groupEnd()}catch(t){i.log("—— diff end —— ")}}function m(t,e,i,r){switch(void 0===t?"undefined":x(t)){case"object":return"function"==typeof t[r]?t[r].apply(t,S(i)):t[r];case"function":return t(e);default:return t}}function g(t,e){var i=e.logger,r=e.actionTransformer,n=e.titleFormatter,o=void 0===n?function(t){var e=t.timestamp,i=t.duration;return function(t,r,n){var o=["action"];return o.push("%c"+String(t.type)),e&&o.push("%c@ "+r),i&&o.push("%c(in "+n.toFixed(2)+" ms)"),o.join(" ")}}(e):n,a=e.collapsed,s=e.colors,c=e.level,l=e.diff,d=void 0===e.titleFormatter;t.forEach((function(n,u){var p=n.started,h=n.startedTime,g=n.action,v=n.prevState,y=n.error,b=n.took,_=n.nextState,C=t[u+1];C&&(_=C.prevState,b=C.started-p);var x=r(g),S="function"==typeof a?a((function(){return _}),g,n):a,E=w(h),M=s.title?"color: "+s.title(x)+";":"",T=["color: gray; font-weight: lighter;"];T.push(M),e.timestamp&&T.push("color: gray; font-weight: lighter;"),e.duration&&T.push("color: gray; font-weight: lighter;");var O=o(x,E,b);try{S?s.title&&d?i.groupCollapsed.apply(i,["%c "+O].concat(T)):i.groupCollapsed(O):s.title&&d?i.group.apply(i,["%c "+O].concat(T)):i.group(O)}catch(t){i.log(O)}var L=m(c,x,[v],"prevState"),A=m(c,x,[x],"action"),I=m(c,x,[y,v],"error"),j=m(c,x,[_],"nextState");if(L)if(s.prevState){var D="color: "+s.prevState(v)+"; font-weight: bold";i[L]("%c prev state",D,v)}else i[L]("prev state",v);if(A)if(s.action){var R="color: "+s.action(x)+"; font-weight: bold";i[A]("%c action    ",R,x)}else i[A]("action    ",x);if(y&&I)if(s.error){var z="color: "+s.error(y,v)+"; font-weight: bold;";i[I]("%c error     ",z,y)}else i[I]("error     ",y);if(j)if(s.nextState){var k="color: "+s.nextState(_)+"; font-weight: bold";i[j]("%c next state",k,_)}else i[j]("next state",_);l&&f(v,_,i,S);try{i.groupEnd()}catch(t){i.log("—— log end ——")}}))}function v(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=Object.assign({},T,t),i=e.logger,r=e.stateTransformer,n=e.errorTransformer,o=e.predicate,a=e.logErrors,s=e.diffPredicate;if(void 0===i)return function(){return function(t){return function(e){return t(e)}}};if(t.getState&&t.dispatch)return console.error("[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:\n// Logger with default options\nimport { logger } from 'redux-logger'\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n// Or you can create your own logger with custom options http://bit.ly/redux-logger-options\nimport createLogger from 'redux-logger'\nconst logger = createLogger({\n  // ...options\n});\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n"),function(){return function(t){return function(e){return t(e)}}};var c=[];return function(t){var i=t.getState;return function(t){return function(l){if("function"==typeof o&&!o(i,l))return t(l);var d={};c.push(d),d.started=C.now(),d.startedTime=new Date,d.prevState=r(i()),d.action=l;var u=void 0;if(a)try{u=t(l)}catch(t){d.error=n(t)}else u=t(l);d.took=C.now()-d.started,d.nextState=r(i());var p=e.diff&&"function"==typeof s?s(i,l):e.diff;if(g(c,Object.assign({},e,{diff:p})),c.length=0,d.error)throw d.error;return u}}}}var y,b,_=function(t,e){return function(t,e){return new Array(e+1).join(t)}("0",e-t.toString().length)+t},w=function(t){return _(t.getHours(),2)+":"+_(t.getMinutes(),2)+":"+_(t.getSeconds(),2)+"."+_(t.getMilliseconds(),3)},C="undefined"!=typeof performance&&null!==performance&&"function"==typeof performance.now?performance:Date,x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},S=function(t){if(Array.isArray(t)){for(var e=0,i=Array(t.length);e<t.length;e++)i[e]=t[e];return i}return Array.from(t)},E=[];y="object"===(void 0===t?"undefined":x(t))&&t?t:"undefined"!=typeof window?window:{},(b=y.DeepDiff)&&E.push((function(){void 0!==b&&y.DeepDiff===u&&(y.DeepDiff=b,b=void 0)})),i(n,r),i(o,r),i(a,r),i(s,r),Object.defineProperties(u,{diff:{value:u,enumerable:!0},observableDiff:{value:d,enumerable:!0},applyDiff:{value:function(t,e,i){t&&e&&d(t,e,(function(r){i&&!i(t,e,r)||p(t,e,r)}))},enumerable:!0},applyChange:{value:p,enumerable:!0},revertChange:{value:function(t,e,i){if(t&&e&&i&&i.kind){var r,n,o=t;for(n=i.path.length-1,r=0;r<n;r++)void 0===o[i.path[r]]&&(o[i.path[r]]={}),o=o[i.path[r]];switch(i.kind){case"A":!function t(e,i,r){if(r.path&&r.path.length){var n,o=e[i],a=r.path.length-1;for(n=0;n<a;n++)o=o[r.path[n]];switch(r.kind){case"A":t(o[r.path[n]],r.index,r.item);break;case"D":case"E":o[r.path[n]]=r.lhs;break;case"N":delete o[r.path[n]]}}else switch(r.kind){case"A":t(e[i],r.index,r.item);break;case"D":case"E":e[i]=r.lhs;break;case"N":e=c(e,i)}return e}(o[i.path[r]],i.index,i.item);break;case"D":case"E":o[i.path[r]]=i.lhs;break;case"N":delete o[i.path[r]]}}},enumerable:!0},isConflict:{value:function(){return void 0!==b},enumerable:!0},noConflict:{value:function(){return E&&(E.forEach((function(t){t()})),E=null),u},enumerable:!0}});var M={E:{color:"#2196F3",text:"CHANGED:"},N:{color:"#4CAF50",text:"ADDED:"},D:{color:"#F44336",text:"DELETED:"},A:{color:"#2196F3",text:"ARRAY:"}},T={level:"log",logger:console,logErrors:!0,collapsed:void 0,predicate:void 0,duration:!1,timestamp:!0,stateTransformer:function(t){return t},actionTransformer:function(t){return t},errorTransformer:function(t){return t},colors:{title:function(){return"inherit"},prevState:function(){return"#9E9E9E"},action:function(){return"#03A9F4"},nextState:function(){return"#4CAF50"},error:function(){return"#F20404"}},diff:!1,diffPredicate:void 0,transformer:void 0},O=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.dispatch,i=t.getState;return"function"==typeof e||"function"==typeof i?v()({dispatch:e,getState:i}):void console.error("\n[redux-logger v3] BREAKING CHANGE\n[redux-logger v3] Since 3.0.0 redux-logger exports by default logger with default settings.\n[redux-logger v3] Change\n[redux-logger v3] import createLogger from 'redux-logger'\n[redux-logger v3] to\n[redux-logger v3] import { createLogger } from 'redux-logger'\n")};e.defaults=T,e.createLogger=v,e.logger=O,e.default=O,Object.defineProperty(e,"__esModule",{value:!0})}(e)}).call(this,i(72))},function(t,e){t.exports=function(t){if(!t.webpackPolyfill){var e=Object.create(t);e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),Object.defineProperty(e,"exports",{enumerable:!0}),e.webpackPolyfill=1}return e}},function(t){t.exports=JSON.parse('{"ES":{"correo":"Correo Electronico","password":"Contaseña","inicio":"INICIAR SESION","crear":"CREAR CUENTA","recupero":"¿OLVIDASTE TU CONTRASEÑA?"},"EN":{}}')},function(t){t.exports=JSON.parse('{"ES":{"password":"Contraseña","enviar":"Enviar","mensaje":"En su casilla de correo recibara un mail para recuperar su contraseña.","volver":"VOLVER"},"EN":{}}')},function(t){t.exports=JSON.parse('{"ES":{"titulo1":"¡Genial!","titulo2":"Mail enviado.","titulo3":"Ingresa a tu mail (verifica tu spam) para continuar con su cambio de password."},"EN":{}}')},function(t){t.exports=JSON.parse('{"ES":{"password":"Contraseña","passwordRepetir":"Ingreselo nuevamente","enviar":"Enviar"},"EN":{}}')},function(t){t.exports=JSON.parse('{"ES":{"titulo1":"¡Genial!","titulo2":"Paswword actualizado.","titulo3":"Ya puede ingresar con su nueva password."},"EN":{}}')},function(t){t.exports=JSON.parse('{"ES":{"titulo":"PARA PODER REGISTRARTE, CARGUE LOS DATOS SOLICITADOS","correo":"Correo electrónico","correo_ph":"juan@gmail.com","nombre":"Nombre completo","nombre_ph":"Rodriguez Juan","documento":"Documento","enviar":"REGISTRARSE","volver":"VOLVER"},"EN":{}}')},function(t){t.exports=JSON.parse('{"ES":{"titulo1":"¡Genial!","titulo2":"Su registro se completo correctamente.","titulo3":"Ingresa a tu mail (verifica tu spam) para continuar con tu registracion."},"EN":{}}')},function(t){t.exports=JSON.parse('{"ES":{"sindicato":"Mi sindicato","salud":"salud","capacitcion":"Capacitcion","teatro":"Teatro","television":"Television","cine":"Cine","vivienda":"Viviendas","deporte":"Deportes","turismo":"Turismo","beneficio":"Beneficios","seccional":"Seccionales","compra":"Compras","denuncia":"Denuncias","masuocra":"Mas UOCRA"},"EN":{}}')},function(t){t.exports=JSON.parse('{"ES":{"verMas":"Ver más ...","verMenos":"Ver menos ..."},"EN":{}}')},function(t,e,i){var r=i(46),n=i(125);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[t.i,n,""]]);var o={insert:"head",singleton:!1};r(n,o);t.exports=n.locals||{}},function(t,e,i){(e=i(47)(!1)).push([t.i,'.ol-box {\n  box-sizing: border-box;\n  border-radius: 2px;\n  border: 2px solid blue;\n}\n\n.ol-mouse-position {\n  top: 8px;\n  right: 8px;\n  position: absolute;\n}\n\n.ol-scale-line {\n  background: rgba(0,60,136,0.3);\n  border-radius: 4px;\n  bottom: 8px;\n  left: 8px;\n  padding: 2px;\n  position: absolute;\n}\n.ol-scale-line-inner {\n  border: 1px solid #eee;\n  border-top: none;\n  color: #eee;\n  font-size: 10px;\n  text-align: center;\n  margin: 1px;\n  will-change: contents, width;\n  transition: all 0.25s;\n}\n.ol-scale-bar {\n  position: absolute;\n  bottom: 8px;\n  left: 8px;\n}\n.ol-scale-step-marker {\n  width: 1px;\n  height: 15px;\n  background-color: #000000;\n  float: right;\n  z-Index: 10;\n}\n.ol-scale-step-text {\n  position: absolute;\n  bottom: -5px;\n  font-size: 12px;\n  z-Index: 11;\n  color: #000000;\n  text-shadow: -2px 0 #FFFFFF, 0 2px #FFFFFF, 2px 0 #FFFFFF, 0 -2px #FFFFFF;\n}\n.ol-scale-text {\n  position: absolute;\n  font-size: 14px;\n  text-align: center;\n  bottom: 25px;\n  color: #000000;\n  text-shadow: -2px 0 #FFFFFF, 0 2px #FFFFFF, 2px 0 #FFFFFF, 0 -2px #FFFFFF;\n}\n.ol-scale-singlebar {\n  position: relative;\n  height: 10px;\n  z-Index: 9;\n  box-sizing: border-box;\n  border: 1px solid black;\n}\n\n.ol-unsupported {\n  display: none;\n}\n.ol-viewport, .ol-unselectable {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -webkit-tap-highlight-color: rgba(0,0,0,0);\n}\n.ol-selectable {\n  -webkit-touch-callout: default;\n  -webkit-user-select: text;\n  -moz-user-select: text;\n  -ms-user-select: text;\n  user-select: text;\n}\n.ol-grabbing {\n  cursor: -webkit-grabbing;\n  cursor: -moz-grabbing;\n  cursor: grabbing;\n}\n.ol-grab {\n  cursor: move;\n  cursor: -webkit-grab;\n  cursor: -moz-grab;\n  cursor: grab;\n}\n.ol-control {\n  position: absolute;\n  background-color: rgba(255,255,255,0.4);\n  border-radius: 4px;\n  padding: 2px;\n}\n.ol-control:hover {\n  background-color: rgba(255,255,255,0.6);\n}\n.ol-zoom {\n  top: .5em;\n  left: .5em;\n}\n.ol-rotate {\n  top: .5em;\n  right: .5em;\n  transition: opacity .25s linear, visibility 0s linear;\n}\n.ol-rotate.ol-hidden {\n  opacity: 0;\n  visibility: hidden;\n  transition: opacity .25s linear, visibility 0s linear .25s;\n}\n.ol-zoom-extent {\n  top: 4.643em;\n  left: .5em;\n}\n.ol-full-screen {\n  right: .5em;\n  top: .5em;\n}\n\n.ol-control button {\n  display: block;\n  margin: 1px;\n  padding: 0;\n  color: white;\n  font-size: 1.14em;\n  font-weight: bold;\n  text-decoration: none;\n  text-align: center;\n  height: 1.375em;\n  width: 1.375em;\n  line-height: .4em;\n  background-color: rgba(0,60,136,0.5);\n  border: none;\n  border-radius: 2px;\n}\n.ol-control button::-moz-focus-inner {\n  border: none;\n  padding: 0;\n}\n.ol-zoom-extent button {\n  line-height: 1.4em;\n}\n.ol-compass {\n  display: block;\n  font-weight: normal;\n  font-size: 1.2em;\n  will-change: transform;\n}\n.ol-touch .ol-control button {\n  font-size: 1.5em;\n}\n.ol-touch .ol-zoom-extent {\n  top: 5.5em;\n}\n.ol-control button:hover,\n.ol-control button:focus {\n  text-decoration: none;\n  background-color: rgba(0,60,136,0.7);\n}\n.ol-zoom .ol-zoom-in {\n  border-radius: 2px 2px 0 0;\n}\n.ol-zoom .ol-zoom-out {\n  border-radius: 0 0 2px 2px;\n}\n\n\n.ol-attribution {\n  text-align: right;\n  bottom: .5em;\n  right: .5em;\n  max-width: calc(100% - 1.3em);\n}\n\n.ol-attribution ul {\n  margin: 0;\n  padding: 0 .5em;\n  color: #000;\n  text-shadow: 0 0 2px #fff;\n}\n.ol-attribution li {\n  display: inline;\n  list-style: none;\n}\n.ol-attribution li:not(:last-child):after {\n  content: " ";\n}\n.ol-attribution img {\n  max-height: 2em;\n  max-width: inherit;\n  vertical-align: middle;\n}\n.ol-attribution ul, .ol-attribution button {\n  display: inline-block;\n}\n.ol-attribution.ol-collapsed ul {\n  display: none;\n}\n.ol-attribution:not(.ol-collapsed) {\n  background: rgba(255,255,255,0.8);\n}\n.ol-attribution.ol-uncollapsible {\n  bottom: 0;\n  right: 0;\n  border-radius: 4px 0 0;\n}\n.ol-attribution.ol-uncollapsible img {\n  margin-top: -.2em;\n  max-height: 1.6em;\n}\n.ol-attribution.ol-uncollapsible button {\n  display: none;\n}\n\n.ol-zoomslider {\n  top: 4.5em;\n  left: .5em;\n  height: 200px;\n}\n.ol-zoomslider button {\n  position: relative;\n  height: 10px;\n}\n\n.ol-touch .ol-zoomslider {\n  top: 5.5em;\n}\n\n.ol-overviewmap {\n  left: 0.5em;\n  bottom: 0.5em;\n}\n.ol-overviewmap.ol-uncollapsible {\n  bottom: 0;\n  left: 0;\n  border-radius: 0 4px 0 0;\n}\n.ol-overviewmap .ol-overviewmap-map,\n.ol-overviewmap button {\n  display: inline-block;\n}\n.ol-overviewmap .ol-overviewmap-map {\n  border: 1px solid #7b98bc;\n  height: 150px;\n  margin: 2px;\n  width: 150px;\n}\n.ol-overviewmap:not(.ol-collapsed) button{\n  bottom: 1px;\n  left: 2px;\n  position: absolute;\n}\n.ol-overviewmap.ol-collapsed .ol-overviewmap-map,\n.ol-overviewmap.ol-uncollapsible button {\n  display: none;\n}\n.ol-overviewmap:not(.ol-collapsed) {\n  background: rgba(255,255,255,0.8);\n}\n.ol-overviewmap-box {\n  border: 2px dotted rgba(0,60,136,0.7);\n}\n\n.ol-overviewmap .ol-overviewmap-box:hover {\n  cursor: move;\n}\n',""]),t.exports=e},function(t){t.exports=JSON.parse('{"ES":{"titulo":"CENTROS DE ATENCION"},"EN":{}}')},function(t){t.exports=JSON.parse('{"ES":{"titulo":"NOTIFICACIONES"},"EN":{}}')},function(t){t.exports=JSON.parse('{"ES":{"listado":"LISTADO","verMapa":"VER MAPA","warning":[{"titulo":"Error","subTitulo":"Selecciones una provincia."},{"titulo":"Error","subTitulo":"Provincias, localidades y/o servicios. Verifique sus valores."}]},"EN":{}}')},function(t){t.exports=JSON.parse('{"ES":{"boton":"EMERGENCIAS 0800-345-7700","warning":[{"titulo":"Error","subTitulo":"Selecciones una provincia."}]},"EN":{}}')},function(t){t.exports=JSON.parse('{"ES":{"listado":"LISTADO","verMapa":"VER MAPA"},"EN":{}}')},function(t){t.exports=JSON.parse('{"ES":{"titulo":"SECCIONALES"},"EN":{}}')},function(t){t.exports=JSON.parse('{"ES":{"titulo":"SECCIONALES"},"EN":{}}')},function(t){t.exports=JSON.parse('{"ES":{"titulo":"Boleteria","entradaLibre":"Entrada Libre y Gratituta","entradaPaga":"Entrada General $"},"EN":{}}')},function(t){t.exports=JSON.parse('{"ES":{"titulo":"ESTRENOS DEL MES","boton":"ver ahora"},"EN":{}}')},function(t,e,i){(function(t,r){var n;(function(){var o="Expected a function",a="__lodash_placeholder__",s=[["ary",128],["bind",1],["bindKey",2],["curry",8],["curryRight",16],["flip",512],["partial",32],["partialRight",64],["rearg",256]],c="[object Arguments]",l="[object Array]",d="[object Boolean]",u="[object Date]",p="[object Error]",h="[object Function]",f="[object GeneratorFunction]",m="[object Map]",g="[object Number]",v="[object Object]",y="[object RegExp]",b="[object Set]",_="[object String]",w="[object Symbol]",C="[object WeakMap]",x="[object ArrayBuffer]",S="[object DataView]",E="[object Float32Array]",M="[object Float64Array]",T="[object Int8Array]",O="[object Int16Array]",L="[object Int32Array]",A="[object Uint8Array]",I="[object Uint16Array]",j="[object Uint32Array]",D=/\b__p \+= '';/g,R=/\b(__p \+=) '' \+/g,z=/(__e\(.*?\)|\b__t\)) \+\n'';/g,k=/&(?:amp|lt|gt|quot|#39);/g,P=/[&<>"']/g,N=RegExp(k.source),V=RegExp(P.source),F=/<%-([\s\S]+?)%>/g,H=/<%([\s\S]+?)%>/g,G=/<%=([\s\S]+?)%>/g,X=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,U=/^\w*$/,B=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,$=/[\\^$.*+?()[\]{}|]/g,Z=RegExp($.source),Y=/^\s+|\s+$/g,W=/^\s+/,q=/\s+$/,K=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,J=/\{\n\/\* \[wrapped with (.+)\] \*/,Q=/,? & /,tt=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,et=/\\(\\)?/g,it=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,rt=/\w*$/,nt=/^[-+]0x[0-9a-f]+$/i,ot=/^0b[01]+$/i,at=/^\[object .+?Constructor\]$/,st=/^0o[0-7]+$/i,ct=/^(?:0|[1-9]\d*)$/,lt=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,dt=/($^)/,ut=/['\n\r\u2028\u2029\\]/g,pt="\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",ht="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",ft="[\\ud800-\\udfff]",mt="["+ht+"]",gt="["+pt+"]",vt="\\d+",yt="[\\u2700-\\u27bf]",bt="[a-z\\xdf-\\xf6\\xf8-\\xff]",_t="[^\\ud800-\\udfff"+ht+vt+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",wt="\\ud83c[\\udffb-\\udfff]",Ct="[^\\ud800-\\udfff]",xt="(?:\\ud83c[\\udde6-\\uddff]){2}",St="[\\ud800-\\udbff][\\udc00-\\udfff]",Et="[A-Z\\xc0-\\xd6\\xd8-\\xde]",Mt="(?:"+bt+"|"+_t+")",Tt="(?:"+Et+"|"+_t+")",Ot="(?:"+gt+"|"+wt+")"+"?",Lt="[\\ufe0e\\ufe0f]?"+Ot+("(?:\\u200d(?:"+[Ct,xt,St].join("|")+")[\\ufe0e\\ufe0f]?"+Ot+")*"),At="(?:"+[yt,xt,St].join("|")+")"+Lt,It="(?:"+[Ct+gt+"?",gt,xt,St,ft].join("|")+")",jt=RegExp("['’]","g"),Dt=RegExp(gt,"g"),Rt=RegExp(wt+"(?="+wt+")|"+It+Lt,"g"),zt=RegExp([Et+"?"+bt+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[mt,Et,"$"].join("|")+")",Tt+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[mt,Et+Mt,"$"].join("|")+")",Et+"?"+Mt+"+(?:['’](?:d|ll|m|re|s|t|ve))?",Et+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",vt,At].join("|"),"g"),kt=RegExp("[\\u200d\\ud800-\\udfff"+pt+"\\ufe0e\\ufe0f]"),Pt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Nt=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],Vt=-1,Ft={};Ft[E]=Ft[M]=Ft[T]=Ft[O]=Ft[L]=Ft[A]=Ft["[object Uint8ClampedArray]"]=Ft[I]=Ft[j]=!0,Ft[c]=Ft[l]=Ft[x]=Ft[d]=Ft[S]=Ft[u]=Ft[p]=Ft[h]=Ft[m]=Ft[g]=Ft[v]=Ft[y]=Ft[b]=Ft[_]=Ft[C]=!1;var Ht={};Ht[c]=Ht[l]=Ht[x]=Ht[S]=Ht[d]=Ht[u]=Ht[E]=Ht[M]=Ht[T]=Ht[O]=Ht[L]=Ht[m]=Ht[g]=Ht[v]=Ht[y]=Ht[b]=Ht[_]=Ht[w]=Ht[A]=Ht["[object Uint8ClampedArray]"]=Ht[I]=Ht[j]=!0,Ht[p]=Ht[h]=Ht[C]=!1;var Gt={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Xt=parseFloat,Ut=parseInt,Bt="object"==typeof t&&t&&t.Object===Object&&t,$t="object"==typeof self&&self&&self.Object===Object&&self,Zt=Bt||$t||Function("return this")(),Yt=e&&!e.nodeType&&e,Wt=Yt&&"object"==typeof r&&r&&!r.nodeType&&r,qt=Wt&&Wt.exports===Yt,Kt=qt&&Bt.process,Jt=function(){try{var t=Wt&&Wt.require&&Wt.require("util").types;return t||Kt&&Kt.binding&&Kt.binding("util")}catch(t){}}(),Qt=Jt&&Jt.isArrayBuffer,te=Jt&&Jt.isDate,ee=Jt&&Jt.isMap,ie=Jt&&Jt.isRegExp,re=Jt&&Jt.isSet,ne=Jt&&Jt.isTypedArray;function oe(t,e,i){switch(i.length){case 0:return t.call(e);case 1:return t.call(e,i[0]);case 2:return t.call(e,i[0],i[1]);case 3:return t.call(e,i[0],i[1],i[2])}return t.apply(e,i)}function ae(t,e,i,r){for(var n=-1,o=null==t?0:t.length;++n<o;){var a=t[n];e(r,a,i(a),t)}return r}function se(t,e){for(var i=-1,r=null==t?0:t.length;++i<r&&!1!==e(t[i],i,t););return t}function ce(t,e){for(var i=null==t?0:t.length;i--&&!1!==e(t[i],i,t););return t}function le(t,e){for(var i=-1,r=null==t?0:t.length;++i<r;)if(!e(t[i],i,t))return!1;return!0}function de(t,e){for(var i=-1,r=null==t?0:t.length,n=0,o=[];++i<r;){var a=t[i];e(a,i,t)&&(o[n++]=a)}return o}function ue(t,e){return!!(null==t?0:t.length)&&we(t,e,0)>-1}function pe(t,e,i){for(var r=-1,n=null==t?0:t.length;++r<n;)if(i(e,t[r]))return!0;return!1}function he(t,e){for(var i=-1,r=null==t?0:t.length,n=Array(r);++i<r;)n[i]=e(t[i],i,t);return n}function fe(t,e){for(var i=-1,r=e.length,n=t.length;++i<r;)t[n+i]=e[i];return t}function me(t,e,i,r){var n=-1,o=null==t?0:t.length;for(r&&o&&(i=t[++n]);++n<o;)i=e(i,t[n],n,t);return i}function ge(t,e,i,r){var n=null==t?0:t.length;for(r&&n&&(i=t[--n]);n--;)i=e(i,t[n],n,t);return i}function ve(t,e){for(var i=-1,r=null==t?0:t.length;++i<r;)if(e(t[i],i,t))return!0;return!1}var ye=Ee("length");function be(t,e,i){var r;return i(t,(function(t,i,n){if(e(t,i,n))return r=i,!1})),r}function _e(t,e,i,r){for(var n=t.length,o=i+(r?1:-1);r?o--:++o<n;)if(e(t[o],o,t))return o;return-1}function we(t,e,i){return e==e?function(t,e,i){var r=i-1,n=t.length;for(;++r<n;)if(t[r]===e)return r;return-1}(t,e,i):_e(t,xe,i)}function Ce(t,e,i,r){for(var n=i-1,o=t.length;++n<o;)if(r(t[n],e))return n;return-1}function xe(t){return t!=t}function Se(t,e){var i=null==t?0:t.length;return i?Oe(t,e)/i:NaN}function Ee(t){return function(e){return null==e?void 0:e[t]}}function Me(t){return function(e){return null==t?void 0:t[e]}}function Te(t,e,i,r,n){return n(t,(function(t,n,o){i=r?(r=!1,t):e(i,t,n,o)})),i}function Oe(t,e){for(var i,r=-1,n=t.length;++r<n;){var o=e(t[r]);void 0!==o&&(i=void 0===i?o:i+o)}return i}function Le(t,e){for(var i=-1,r=Array(t);++i<t;)r[i]=e(i);return r}function Ae(t){return function(e){return t(e)}}function Ie(t,e){return he(e,(function(e){return t[e]}))}function je(t,e){return t.has(e)}function De(t,e){for(var i=-1,r=t.length;++i<r&&we(e,t[i],0)>-1;);return i}function Re(t,e){for(var i=t.length;i--&&we(e,t[i],0)>-1;);return i}function ze(t,e){for(var i=t.length,r=0;i--;)t[i]===e&&++r;return r}var ke=Me({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"}),Pe=Me({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"});function Ne(t){return"\\"+Gt[t]}function Ve(t){return kt.test(t)}function Fe(t){var e=-1,i=Array(t.size);return t.forEach((function(t,r){i[++e]=[r,t]})),i}function He(t,e){return function(i){return t(e(i))}}function Ge(t,e){for(var i=-1,r=t.length,n=0,o=[];++i<r;){var s=t[i];s!==e&&s!==a||(t[i]=a,o[n++]=i)}return o}function Xe(t){var e=-1,i=Array(t.size);return t.forEach((function(t){i[++e]=t})),i}function Ue(t){var e=-1,i=Array(t.size);return t.forEach((function(t){i[++e]=[t,t]})),i}function Be(t){return Ve(t)?function(t){var e=Rt.lastIndex=0;for(;Rt.test(t);)++e;return e}(t):ye(t)}function $e(t){return Ve(t)?function(t){return t.match(Rt)||[]}(t):function(t){return t.split("")}(t)}var Ze=Me({"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"});var Ye=function t(e){var i,r=(e=null==e?Zt:Ye.defaults(Zt.Object(),e,Ye.pick(Zt,Nt))).Array,n=e.Date,pt=e.Error,ht=e.Function,ft=e.Math,mt=e.Object,gt=e.RegExp,vt=e.String,yt=e.TypeError,bt=r.prototype,_t=ht.prototype,wt=mt.prototype,Ct=e["__core-js_shared__"],xt=_t.toString,St=wt.hasOwnProperty,Et=0,Mt=(i=/[^.]+$/.exec(Ct&&Ct.keys&&Ct.keys.IE_PROTO||""))?"Symbol(src)_1."+i:"",Tt=wt.toString,Ot=xt.call(mt),Lt=Zt._,At=gt("^"+xt.call(St).replace($,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),It=qt?e.Buffer:void 0,Rt=e.Symbol,kt=e.Uint8Array,Gt=It?It.allocUnsafe:void 0,Bt=He(mt.getPrototypeOf,mt),$t=mt.create,Yt=wt.propertyIsEnumerable,Wt=bt.splice,Kt=Rt?Rt.isConcatSpreadable:void 0,Jt=Rt?Rt.iterator:void 0,ye=Rt?Rt.toStringTag:void 0,Me=function(){try{var t=Qn(mt,"defineProperty");return t({},"",{}),t}catch(t){}}(),We=e.clearTimeout!==Zt.clearTimeout&&e.clearTimeout,qe=n&&n.now!==Zt.Date.now&&n.now,Ke=e.setTimeout!==Zt.setTimeout&&e.setTimeout,Je=ft.ceil,Qe=ft.floor,ti=mt.getOwnPropertySymbols,ei=It?It.isBuffer:void 0,ii=e.isFinite,ri=bt.join,ni=He(mt.keys,mt),oi=ft.max,ai=ft.min,si=n.now,ci=e.parseInt,li=ft.random,di=bt.reverse,ui=Qn(e,"DataView"),pi=Qn(e,"Map"),hi=Qn(e,"Promise"),fi=Qn(e,"Set"),mi=Qn(e,"WeakMap"),gi=Qn(mt,"create"),vi=mi&&new mi,yi={},bi=To(ui),_i=To(pi),wi=To(hi),Ci=To(fi),xi=To(mi),Si=Rt?Rt.prototype:void 0,Ei=Si?Si.valueOf:void 0,Mi=Si?Si.toString:void 0;function Ti(t){if(Ua(t)&&!Da(t)&&!(t instanceof Ii)){if(t instanceof Ai)return t;if(St.call(t,"__wrapped__"))return Oo(t)}return new Ai(t)}var Oi=function(){function t(){}return function(e){if(!Xa(e))return{};if($t)return $t(e);t.prototype=e;var i=new t;return t.prototype=void 0,i}}();function Li(){}function Ai(t,e){this.__wrapped__=t,this.__actions__=[],this.__chain__=!!e,this.__index__=0,this.__values__=void 0}function Ii(t){this.__wrapped__=t,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=4294967295,this.__views__=[]}function ji(t){var e=-1,i=null==t?0:t.length;for(this.clear();++e<i;){var r=t[e];this.set(r[0],r[1])}}function Di(t){var e=-1,i=null==t?0:t.length;for(this.clear();++e<i;){var r=t[e];this.set(r[0],r[1])}}function Ri(t){var e=-1,i=null==t?0:t.length;for(this.clear();++e<i;){var r=t[e];this.set(r[0],r[1])}}function zi(t){var e=-1,i=null==t?0:t.length;for(this.__data__=new Ri;++e<i;)this.add(t[e])}function ki(t){var e=this.__data__=new Di(t);this.size=e.size}function Pi(t,e){var i=Da(t),r=!i&&ja(t),n=!i&&!r&&Pa(t),o=!i&&!r&&!n&&Ja(t),a=i||r||n||o,s=a?Le(t.length,vt):[],c=s.length;for(var l in t)!e&&!St.call(t,l)||a&&("length"==l||n&&("offset"==l||"parent"==l)||o&&("buffer"==l||"byteLength"==l||"byteOffset"==l)||ao(l,c))||s.push(l);return s}function Ni(t){var e=t.length;return e?t[zr(0,e-1)]:void 0}function Vi(t,e){return So(vn(t),Yi(e,0,t.length))}function Fi(t){return So(vn(t))}function Hi(t,e,i){(void 0!==i&&!La(t[e],i)||void 0===i&&!(e in t))&&$i(t,e,i)}function Gi(t,e,i){var r=t[e];St.call(t,e)&&La(r,i)&&(void 0!==i||e in t)||$i(t,e,i)}function Xi(t,e){for(var i=t.length;i--;)if(La(t[i][0],e))return i;return-1}function Ui(t,e,i,r){return Qi(t,(function(t,n,o){e(r,t,i(t),o)})),r}function Bi(t,e){return t&&yn(e,_s(e),t)}function $i(t,e,i){"__proto__"==e&&Me?Me(t,e,{configurable:!0,enumerable:!0,value:i,writable:!0}):t[e]=i}function Zi(t,e){for(var i=-1,n=e.length,o=r(n),a=null==t;++i<n;)o[i]=a?void 0:ms(t,e[i]);return o}function Yi(t,e,i){return t==t&&(void 0!==i&&(t=t<=i?t:i),void 0!==e&&(t=t>=e?t:e)),t}function Wi(t,e,i,r,n,o){var a,s=1&e,l=2&e,p=4&e;if(i&&(a=n?i(t,r,n,o):i(t)),void 0!==a)return a;if(!Xa(t))return t;var C=Da(t);if(C){if(a=function(t){var e=t.length,i=new t.constructor(e);e&&"string"==typeof t[0]&&St.call(t,"index")&&(i.index=t.index,i.input=t.input);return i}(t),!s)return vn(t,a)}else{var D=io(t),R=D==h||D==f;if(Pa(t))return un(t,s);if(D==v||D==c||R&&!n){if(a=l||R?{}:no(t),!s)return l?function(t,e){return yn(t,eo(t),e)}(t,function(t,e){return t&&yn(e,ws(e),t)}(a,t)):function(t,e){return yn(t,to(t),e)}(t,Bi(a,t))}else{if(!Ht[D])return n?t:{};a=function(t,e,i){var r=t.constructor;switch(e){case x:return pn(t);case d:case u:return new r(+t);case S:return function(t,e){var i=e?pn(t.buffer):t.buffer;return new t.constructor(i,t.byteOffset,t.byteLength)}(t,i);case E:case M:case T:case O:case L:case A:case"[object Uint8ClampedArray]":case I:case j:return hn(t,i);case m:return new r;case g:case _:return new r(t);case y:return function(t){var e=new t.constructor(t.source,rt.exec(t));return e.lastIndex=t.lastIndex,e}(t);case b:return new r;case w:return n=t,Ei?mt(Ei.call(n)):{}}var n}(t,D,s)}}o||(o=new ki);var z=o.get(t);if(z)return z;o.set(t,a),Wa(t)?t.forEach((function(r){a.add(Wi(r,e,i,r,t,o))})):Ba(t)&&t.forEach((function(r,n){a.set(n,Wi(r,e,i,n,t,o))}));var k=C?void 0:(p?l?$n:Bn:l?ws:_s)(t);return se(k||t,(function(r,n){k&&(r=t[n=r]),Gi(a,n,Wi(r,e,i,n,t,o))})),a}function qi(t,e,i){var r=i.length;if(null==t)return!r;for(t=mt(t);r--;){var n=i[r],o=e[n],a=t[n];if(void 0===a&&!(n in t)||!o(a))return!1}return!0}function Ki(t,e,i){if("function"!=typeof t)throw new yt(o);return _o((function(){t.apply(void 0,i)}),e)}function Ji(t,e,i,r){var n=-1,o=ue,a=!0,s=t.length,c=[],l=e.length;if(!s)return c;i&&(e=he(e,Ae(i))),r?(o=pe,a=!1):e.length>=200&&(o=je,a=!1,e=new zi(e));t:for(;++n<s;){var d=t[n],u=null==i?d:i(d);if(d=r||0!==d?d:0,a&&u==u){for(var p=l;p--;)if(e[p]===u)continue t;c.push(d)}else o(e,u,r)||c.push(d)}return c}Ti.templateSettings={escape:F,evaluate:H,interpolate:G,variable:"",imports:{_:Ti}},Ti.prototype=Li.prototype,Ti.prototype.constructor=Ti,Ai.prototype=Oi(Li.prototype),Ai.prototype.constructor=Ai,Ii.prototype=Oi(Li.prototype),Ii.prototype.constructor=Ii,ji.prototype.clear=function(){this.__data__=gi?gi(null):{},this.size=0},ji.prototype.delete=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},ji.prototype.get=function(t){var e=this.__data__;if(gi){var i=e[t];return"__lodash_hash_undefined__"===i?void 0:i}return St.call(e,t)?e[t]:void 0},ji.prototype.has=function(t){var e=this.__data__;return gi?void 0!==e[t]:St.call(e,t)},ji.prototype.set=function(t,e){var i=this.__data__;return this.size+=this.has(t)?0:1,i[t]=gi&&void 0===e?"__lodash_hash_undefined__":e,this},Di.prototype.clear=function(){this.__data__=[],this.size=0},Di.prototype.delete=function(t){var e=this.__data__,i=Xi(e,t);return!(i<0)&&(i==e.length-1?e.pop():Wt.call(e,i,1),--this.size,!0)},Di.prototype.get=function(t){var e=this.__data__,i=Xi(e,t);return i<0?void 0:e[i][1]},Di.prototype.has=function(t){return Xi(this.__data__,t)>-1},Di.prototype.set=function(t,e){var i=this.__data__,r=Xi(i,t);return r<0?(++this.size,i.push([t,e])):i[r][1]=e,this},Ri.prototype.clear=function(){this.size=0,this.__data__={hash:new ji,map:new(pi||Di),string:new ji}},Ri.prototype.delete=function(t){var e=Kn(this,t).delete(t);return this.size-=e?1:0,e},Ri.prototype.get=function(t){return Kn(this,t).get(t)},Ri.prototype.has=function(t){return Kn(this,t).has(t)},Ri.prototype.set=function(t,e){var i=Kn(this,t),r=i.size;return i.set(t,e),this.size+=i.size==r?0:1,this},zi.prototype.add=zi.prototype.push=function(t){return this.__data__.set(t,"__lodash_hash_undefined__"),this},zi.prototype.has=function(t){return this.__data__.has(t)},ki.prototype.clear=function(){this.__data__=new Di,this.size=0},ki.prototype.delete=function(t){var e=this.__data__,i=e.delete(t);return this.size=e.size,i},ki.prototype.get=function(t){return this.__data__.get(t)},ki.prototype.has=function(t){return this.__data__.has(t)},ki.prototype.set=function(t,e){var i=this.__data__;if(i instanceof Di){var r=i.__data__;if(!pi||r.length<199)return r.push([t,e]),this.size=++i.size,this;i=this.__data__=new Ri(r)}return i.set(t,e),this.size=i.size,this};var Qi=wn(sr),tr=wn(cr,!0);function er(t,e){var i=!0;return Qi(t,(function(t,r,n){return i=!!e(t,r,n)})),i}function ir(t,e,i){for(var r=-1,n=t.length;++r<n;){var o=t[r],a=e(o);if(null!=a&&(void 0===s?a==a&&!Ka(a):i(a,s)))var s=a,c=o}return c}function rr(t,e){var i=[];return Qi(t,(function(t,r,n){e(t,r,n)&&i.push(t)})),i}function nr(t,e,i,r,n){var o=-1,a=t.length;for(i||(i=oo),n||(n=[]);++o<a;){var s=t[o];e>0&&i(s)?e>1?nr(s,e-1,i,r,n):fe(n,s):r||(n[n.length]=s)}return n}var or=Cn(),ar=Cn(!0);function sr(t,e){return t&&or(t,e,_s)}function cr(t,e){return t&&ar(t,e,_s)}function lr(t,e){return de(e,(function(e){return Fa(t[e])}))}function dr(t,e){for(var i=0,r=(e=sn(e,t)).length;null!=t&&i<r;)t=t[Mo(e[i++])];return i&&i==r?t:void 0}function ur(t,e,i){var r=e(t);return Da(t)?r:fe(r,i(t))}function pr(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":ye&&ye in mt(t)?function(t){var e=St.call(t,ye),i=t[ye];try{t[ye]=void 0;var r=!0}catch(t){}var n=Tt.call(t);r&&(e?t[ye]=i:delete t[ye]);return n}(t):function(t){return Tt.call(t)}(t)}function hr(t,e){return t>e}function fr(t,e){return null!=t&&St.call(t,e)}function mr(t,e){return null!=t&&e in mt(t)}function gr(t,e,i){for(var n=i?pe:ue,o=t[0].length,a=t.length,s=a,c=r(a),l=1/0,d=[];s--;){var u=t[s];s&&e&&(u=he(u,Ae(e))),l=ai(u.length,l),c[s]=!i&&(e||o>=120&&u.length>=120)?new zi(s&&u):void 0}u=t[0];var p=-1,h=c[0];t:for(;++p<o&&d.length<l;){var f=u[p],m=e?e(f):f;if(f=i||0!==f?f:0,!(h?je(h,m):n(d,m,i))){for(s=a;--s;){var g=c[s];if(!(g?je(g,m):n(t[s],m,i)))continue t}h&&h.push(m),d.push(f)}}return d}function vr(t,e,i){var r=null==(t=go(t,e=sn(e,t)))?t:t[Mo(Vo(e))];return null==r?void 0:oe(r,t,i)}function yr(t){return Ua(t)&&pr(t)==c}function br(t,e,i,r,n){return t===e||(null==t||null==e||!Ua(t)&&!Ua(e)?t!=t&&e!=e:function(t,e,i,r,n,o){var a=Da(t),s=Da(e),h=a?l:io(t),f=s?l:io(e),C=(h=h==c?v:h)==v,E=(f=f==c?v:f)==v,M=h==f;if(M&&Pa(t)){if(!Pa(e))return!1;a=!0,C=!1}if(M&&!C)return o||(o=new ki),a||Ja(t)?Xn(t,e,i,r,n,o):function(t,e,i,r,n,o,a){switch(i){case S:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case x:return!(t.byteLength!=e.byteLength||!o(new kt(t),new kt(e)));case d:case u:case g:return La(+t,+e);case p:return t.name==e.name&&t.message==e.message;case y:case _:return t==e+"";case m:var s=Fe;case b:var c=1&r;if(s||(s=Xe),t.size!=e.size&&!c)return!1;var l=a.get(t);if(l)return l==e;r|=2,a.set(t,e);var h=Xn(s(t),s(e),r,n,o,a);return a.delete(t),h;case w:if(Ei)return Ei.call(t)==Ei.call(e)}return!1}(t,e,h,i,r,n,o);if(!(1&i)){var T=C&&St.call(t,"__wrapped__"),O=E&&St.call(e,"__wrapped__");if(T||O){var L=T?t.value():t,A=O?e.value():e;return o||(o=new ki),n(L,A,i,r,o)}}if(!M)return!1;return o||(o=new ki),function(t,e,i,r,n,o){var a=1&i,s=Bn(t),c=s.length,l=Bn(e).length;if(c!=l&&!a)return!1;var d=c;for(;d--;){var u=s[d];if(!(a?u in e:St.call(e,u)))return!1}var p=o.get(t),h=o.get(e);if(p&&h)return p==e&&h==t;var f=!0;o.set(t,e),o.set(e,t);var m=a;for(;++d<c;){u=s[d];var g=t[u],v=e[u];if(r)var y=a?r(v,g,u,e,t,o):r(g,v,u,t,e,o);if(!(void 0===y?g===v||n(g,v,i,r,o):y)){f=!1;break}m||(m="constructor"==u)}if(f&&!m){var b=t.constructor,_=e.constructor;b==_||!("constructor"in t)||!("constructor"in e)||"function"==typeof b&&b instanceof b&&"function"==typeof _&&_ instanceof _||(f=!1)}return o.delete(t),o.delete(e),f}(t,e,i,r,n,o)}(t,e,i,r,br,n))}function _r(t,e,i,r){var n=i.length,o=n,a=!r;if(null==t)return!o;for(t=mt(t);n--;){var s=i[n];if(a&&s[2]?s[1]!==t[s[0]]:!(s[0]in t))return!1}for(;++n<o;){var c=(s=i[n])[0],l=t[c],d=s[1];if(a&&s[2]){if(void 0===l&&!(c in t))return!1}else{var u=new ki;if(r)var p=r(l,d,c,t,e,u);if(!(void 0===p?br(d,l,3,r,u):p))return!1}}return!0}function wr(t){return!(!Xa(t)||(e=t,Mt&&Mt in e))&&(Fa(t)?At:at).test(To(t));var e}function Cr(t){return"function"==typeof t?t:null==t?$s:"object"==typeof t?Da(t)?Or(t[0],t[1]):Tr(t):ec(t)}function xr(t){if(!po(t))return ni(t);var e=[];for(var i in mt(t))St.call(t,i)&&"constructor"!=i&&e.push(i);return e}function Sr(t){if(!Xa(t))return function(t){var e=[];if(null!=t)for(var i in mt(t))e.push(i);return e}(t);var e=po(t),i=[];for(var r in t)("constructor"!=r||!e&&St.call(t,r))&&i.push(r);return i}function Er(t,e){return t<e}function Mr(t,e){var i=-1,n=za(t)?r(t.length):[];return Qi(t,(function(t,r,o){n[++i]=e(t,r,o)})),n}function Tr(t){var e=Jn(t);return 1==e.length&&e[0][2]?fo(e[0][0],e[0][1]):function(i){return i===t||_r(i,t,e)}}function Or(t,e){return co(t)&&ho(e)?fo(Mo(t),e):function(i){var r=ms(i,t);return void 0===r&&r===e?gs(i,t):br(e,r,3)}}function Lr(t,e,i,r,n){t!==e&&or(e,(function(o,a){if(n||(n=new ki),Xa(o))!function(t,e,i,r,n,o,a){var s=yo(t,i),c=yo(e,i),l=a.get(c);if(l)return void Hi(t,i,l);var d=o?o(s,c,i+"",t,e,a):void 0,u=void 0===d;if(u){var p=Da(c),h=!p&&Pa(c),f=!p&&!h&&Ja(c);d=c,p||h||f?Da(s)?d=s:ka(s)?d=vn(s):h?(u=!1,d=un(c,!0)):f?(u=!1,d=hn(c,!0)):d=[]:Za(c)||ja(c)?(d=s,ja(s)?d=as(s):Xa(s)&&!Fa(s)||(d=no(c))):u=!1}u&&(a.set(c,d),n(d,c,r,o,a),a.delete(c));Hi(t,i,d)}(t,e,a,i,Lr,r,n);else{var s=r?r(yo(t,a),o,a+"",t,e,n):void 0;void 0===s&&(s=o),Hi(t,a,s)}}),ws)}function Ar(t,e){var i=t.length;if(i)return ao(e+=e<0?i:0,i)?t[e]:void 0}function Ir(t,e,i){e=e.length?he(e,(function(t){return Da(t)?function(e){return dr(e,1===t.length?t[0]:t)}:t})):[$s];var r=-1;return e=he(e,Ae(qn())),function(t,e){var i=t.length;for(t.sort(e);i--;)t[i]=t[i].value;return t}(Mr(t,(function(t,i,n){return{criteria:he(e,(function(e){return e(t)})),index:++r,value:t}})),(function(t,e){return function(t,e,i){var r=-1,n=t.criteria,o=e.criteria,a=n.length,s=i.length;for(;++r<a;){var c=fn(n[r],o[r]);if(c){if(r>=s)return c;var l=i[r];return c*("desc"==l?-1:1)}}return t.index-e.index}(t,e,i)}))}function jr(t,e,i){for(var r=-1,n=e.length,o={};++r<n;){var a=e[r],s=dr(t,a);i(s,a)&&Fr(o,sn(a,t),s)}return o}function Dr(t,e,i,r){var n=r?Ce:we,o=-1,a=e.length,s=t;for(t===e&&(e=vn(e)),i&&(s=he(t,Ae(i)));++o<a;)for(var c=0,l=e[o],d=i?i(l):l;(c=n(s,d,c,r))>-1;)s!==t&&Wt.call(s,c,1),Wt.call(t,c,1);return t}function Rr(t,e){for(var i=t?e.length:0,r=i-1;i--;){var n=e[i];if(i==r||n!==o){var o=n;ao(n)?Wt.call(t,n,1):Jr(t,n)}}return t}function zr(t,e){return t+Qe(li()*(e-t+1))}function kr(t,e){var i="";if(!t||e<1||e>9007199254740991)return i;do{e%2&&(i+=t),(e=Qe(e/2))&&(t+=t)}while(e);return i}function Pr(t,e){return wo(mo(t,e,$s),t+"")}function Nr(t){return Ni(Ls(t))}function Vr(t,e){var i=Ls(t);return So(i,Yi(e,0,i.length))}function Fr(t,e,i,r){if(!Xa(t))return t;for(var n=-1,o=(e=sn(e,t)).length,a=o-1,s=t;null!=s&&++n<o;){var c=Mo(e[n]),l=i;if("__proto__"===c||"constructor"===c||"prototype"===c)return t;if(n!=a){var d=s[c];void 0===(l=r?r(d,c,s):void 0)&&(l=Xa(d)?d:ao(e[n+1])?[]:{})}Gi(s,c,l),s=s[c]}return t}var Hr=vi?function(t,e){return vi.set(t,e),t}:$s,Gr=Me?function(t,e){return Me(t,"toString",{configurable:!0,enumerable:!1,value:Xs(e),writable:!0})}:$s;function Xr(t){return So(Ls(t))}function Ur(t,e,i){var n=-1,o=t.length;e<0&&(e=-e>o?0:o+e),(i=i>o?o:i)<0&&(i+=o),o=e>i?0:i-e>>>0,e>>>=0;for(var a=r(o);++n<o;)a[n]=t[n+e];return a}function Br(t,e){var i;return Qi(t,(function(t,r,n){return!(i=e(t,r,n))})),!!i}function $r(t,e,i){var r=0,n=null==t?r:t.length;if("number"==typeof e&&e==e&&n<=2147483647){for(;r<n;){var o=r+n>>>1,a=t[o];null!==a&&!Ka(a)&&(i?a<=e:a<e)?r=o+1:n=o}return n}return Zr(t,e,$s,i)}function Zr(t,e,i,r){var n=0,o=null==t?0:t.length;if(0===o)return 0;for(var a=(e=i(e))!=e,s=null===e,c=Ka(e),l=void 0===e;n<o;){var d=Qe((n+o)/2),u=i(t[d]),p=void 0!==u,h=null===u,f=u==u,m=Ka(u);if(a)var g=r||f;else g=l?f&&(r||p):s?f&&p&&(r||!h):c?f&&p&&!h&&(r||!m):!h&&!m&&(r?u<=e:u<e);g?n=d+1:o=d}return ai(o,4294967294)}function Yr(t,e){for(var i=-1,r=t.length,n=0,o=[];++i<r;){var a=t[i],s=e?e(a):a;if(!i||!La(s,c)){var c=s;o[n++]=0===a?0:a}}return o}function Wr(t){return"number"==typeof t?t:Ka(t)?NaN:+t}function qr(t){if("string"==typeof t)return t;if(Da(t))return he(t,qr)+"";if(Ka(t))return Mi?Mi.call(t):"";var e=t+"";return"0"==e&&1/t==-1/0?"-0":e}function Kr(t,e,i){var r=-1,n=ue,o=t.length,a=!0,s=[],c=s;if(i)a=!1,n=pe;else if(o>=200){var l=e?null:Pn(t);if(l)return Xe(l);a=!1,n=je,c=new zi}else c=e?[]:s;t:for(;++r<o;){var d=t[r],u=e?e(d):d;if(d=i||0!==d?d:0,a&&u==u){for(var p=c.length;p--;)if(c[p]===u)continue t;e&&c.push(u),s.push(d)}else n(c,u,i)||(c!==s&&c.push(u),s.push(d))}return s}function Jr(t,e){return null==(t=go(t,e=sn(e,t)))||delete t[Mo(Vo(e))]}function Qr(t,e,i,r){return Fr(t,e,i(dr(t,e)),r)}function tn(t,e,i,r){for(var n=t.length,o=r?n:-1;(r?o--:++o<n)&&e(t[o],o,t););return i?Ur(t,r?0:o,r?o+1:n):Ur(t,r?o+1:0,r?n:o)}function en(t,e){var i=t;return i instanceof Ii&&(i=i.value()),me(e,(function(t,e){return e.func.apply(e.thisArg,fe([t],e.args))}),i)}function rn(t,e,i){var n=t.length;if(n<2)return n?Kr(t[0]):[];for(var o=-1,a=r(n);++o<n;)for(var s=t[o],c=-1;++c<n;)c!=o&&(a[o]=Ji(a[o]||s,t[c],e,i));return Kr(nr(a,1),e,i)}function nn(t,e,i){for(var r=-1,n=t.length,o=e.length,a={};++r<n;){var s=r<o?e[r]:void 0;i(a,t[r],s)}return a}function on(t){return ka(t)?t:[]}function an(t){return"function"==typeof t?t:$s}function sn(t,e){return Da(t)?t:co(t,e)?[t]:Eo(ss(t))}var cn=Pr;function ln(t,e,i){var r=t.length;return i=void 0===i?r:i,!e&&i>=r?t:Ur(t,e,i)}var dn=We||function(t){return Zt.clearTimeout(t)};function un(t,e){if(e)return t.slice();var i=t.length,r=Gt?Gt(i):new t.constructor(i);return t.copy(r),r}function pn(t){var e=new t.constructor(t.byteLength);return new kt(e).set(new kt(t)),e}function hn(t,e){var i=e?pn(t.buffer):t.buffer;return new t.constructor(i,t.byteOffset,t.length)}function fn(t,e){if(t!==e){var i=void 0!==t,r=null===t,n=t==t,o=Ka(t),a=void 0!==e,s=null===e,c=e==e,l=Ka(e);if(!s&&!l&&!o&&t>e||o&&a&&c&&!s&&!l||r&&a&&c||!i&&c||!n)return 1;if(!r&&!o&&!l&&t<e||l&&i&&n&&!r&&!o||s&&i&&n||!a&&n||!c)return-1}return 0}function mn(t,e,i,n){for(var o=-1,a=t.length,s=i.length,c=-1,l=e.length,d=oi(a-s,0),u=r(l+d),p=!n;++c<l;)u[c]=e[c];for(;++o<s;)(p||o<a)&&(u[i[o]]=t[o]);for(;d--;)u[c++]=t[o++];return u}function gn(t,e,i,n){for(var o=-1,a=t.length,s=-1,c=i.length,l=-1,d=e.length,u=oi(a-c,0),p=r(u+d),h=!n;++o<u;)p[o]=t[o];for(var f=o;++l<d;)p[f+l]=e[l];for(;++s<c;)(h||o<a)&&(p[f+i[s]]=t[o++]);return p}function vn(t,e){var i=-1,n=t.length;for(e||(e=r(n));++i<n;)e[i]=t[i];return e}function yn(t,e,i,r){var n=!i;i||(i={});for(var o=-1,a=e.length;++o<a;){var s=e[o],c=r?r(i[s],t[s],s,i,t):void 0;void 0===c&&(c=t[s]),n?$i(i,s,c):Gi(i,s,c)}return i}function bn(t,e){return function(i,r){var n=Da(i)?ae:Ui,o=e?e():{};return n(i,t,qn(r,2),o)}}function _n(t){return Pr((function(e,i){var r=-1,n=i.length,o=n>1?i[n-1]:void 0,a=n>2?i[2]:void 0;for(o=t.length>3&&"function"==typeof o?(n--,o):void 0,a&&so(i[0],i[1],a)&&(o=n<3?void 0:o,n=1),e=mt(e);++r<n;){var s=i[r];s&&t(e,s,r,o)}return e}))}function wn(t,e){return function(i,r){if(null==i)return i;if(!za(i))return t(i,r);for(var n=i.length,o=e?n:-1,a=mt(i);(e?o--:++o<n)&&!1!==r(a[o],o,a););return i}}function Cn(t){return function(e,i,r){for(var n=-1,o=mt(e),a=r(e),s=a.length;s--;){var c=a[t?s:++n];if(!1===i(o[c],c,o))break}return e}}function xn(t){return function(e){var i=Ve(e=ss(e))?$e(e):void 0,r=i?i[0]:e.charAt(0),n=i?ln(i,1).join(""):e.slice(1);return r[t]()+n}}function Sn(t){return function(e){return me(Fs(js(e).replace(jt,"")),t,"")}}function En(t){return function(){var e=arguments;switch(e.length){case 0:return new t;case 1:return new t(e[0]);case 2:return new t(e[0],e[1]);case 3:return new t(e[0],e[1],e[2]);case 4:return new t(e[0],e[1],e[2],e[3]);case 5:return new t(e[0],e[1],e[2],e[3],e[4]);case 6:return new t(e[0],e[1],e[2],e[3],e[4],e[5]);case 7:return new t(e[0],e[1],e[2],e[3],e[4],e[5],e[6])}var i=Oi(t.prototype),r=t.apply(i,e);return Xa(r)?r:i}}function Mn(t){return function(e,i,r){var n=mt(e);if(!za(e)){var o=qn(i,3);e=_s(e),i=function(t){return o(n[t],t,n)}}var a=t(e,i,r);return a>-1?n[o?e[a]:a]:void 0}}function Tn(t){return Un((function(e){var i=e.length,r=i,n=Ai.prototype.thru;for(t&&e.reverse();r--;){var a=e[r];if("function"!=typeof a)throw new yt(o);if(n&&!s&&"wrapper"==Yn(a))var s=new Ai([],!0)}for(r=s?r:i;++r<i;){var c=Yn(a=e[r]),l="wrapper"==c?Zn(a):void 0;s=l&&lo(l[0])&&424==l[1]&&!l[4].length&&1==l[9]?s[Yn(l[0])].apply(s,l[3]):1==a.length&&lo(a)?s[c]():s.thru(a)}return function(){var t=arguments,r=t[0];if(s&&1==t.length&&Da(r))return s.plant(r).value();for(var n=0,o=i?e[n].apply(this,t):r;++n<i;)o=e[n].call(this,o);return o}}))}function On(t,e,i,n,o,a,s,c,l,d){var u=128&e,p=1&e,h=2&e,f=24&e,m=512&e,g=h?void 0:En(t);return function v(){for(var y=arguments.length,b=r(y),_=y;_--;)b[_]=arguments[_];if(f)var w=Wn(v),C=ze(b,w);if(n&&(b=mn(b,n,o,f)),a&&(b=gn(b,a,s,f)),y-=C,f&&y<d){var x=Ge(b,w);return zn(t,e,On,v.placeholder,i,b,x,c,l,d-y)}var S=p?i:this,E=h?S[t]:t;return y=b.length,c?b=vo(b,c):m&&y>1&&b.reverse(),u&&l<y&&(b.length=l),this&&this!==Zt&&this instanceof v&&(E=g||En(E)),E.apply(S,b)}}function Ln(t,e){return function(i,r){return function(t,e,i,r){return sr(t,(function(t,n,o){e(r,i(t),n,o)})),r}(i,t,e(r),{})}}function An(t,e){return function(i,r){var n;if(void 0===i&&void 0===r)return e;if(void 0!==i&&(n=i),void 0!==r){if(void 0===n)return r;"string"==typeof i||"string"==typeof r?(i=qr(i),r=qr(r)):(i=Wr(i),r=Wr(r)),n=t(i,r)}return n}}function In(t){return Un((function(e){return e=he(e,Ae(qn())),Pr((function(i){var r=this;return t(e,(function(t){return oe(t,r,i)}))}))}))}function jn(t,e){var i=(e=void 0===e?" ":qr(e)).length;if(i<2)return i?kr(e,t):e;var r=kr(e,Je(t/Be(e)));return Ve(e)?ln($e(r),0,t).join(""):r.slice(0,t)}function Dn(t){return function(e,i,n){return n&&"number"!=typeof n&&so(e,i,n)&&(i=n=void 0),e=is(e),void 0===i?(i=e,e=0):i=is(i),function(t,e,i,n){for(var o=-1,a=oi(Je((e-t)/(i||1)),0),s=r(a);a--;)s[n?a:++o]=t,t+=i;return s}(e,i,n=void 0===n?e<i?1:-1:is(n),t)}}function Rn(t){return function(e,i){return"string"==typeof e&&"string"==typeof i||(e=os(e),i=os(i)),t(e,i)}}function zn(t,e,i,r,n,o,a,s,c,l){var d=8&e;e|=d?32:64,4&(e&=~(d?64:32))||(e&=-4);var u=[t,e,n,d?o:void 0,d?a:void 0,d?void 0:o,d?void 0:a,s,c,l],p=i.apply(void 0,u);return lo(t)&&bo(p,u),p.placeholder=r,Co(p,t,e)}function kn(t){var e=ft[t];return function(t,i){if(t=os(t),(i=null==i?0:ai(rs(i),292))&&ii(t)){var r=(ss(t)+"e").split("e");return+((r=(ss(e(r[0]+"e"+(+r[1]+i)))+"e").split("e"))[0]+"e"+(+r[1]-i))}return e(t)}}var Pn=fi&&1/Xe(new fi([,-0]))[1]==1/0?function(t){return new fi(t)}:Ks;function Nn(t){return function(e){var i=io(e);return i==m?Fe(e):i==b?Ue(e):function(t,e){return he(e,(function(e){return[e,t[e]]}))}(e,t(e))}}function Vn(t,e,i,n,s,c,l,d){var u=2&e;if(!u&&"function"!=typeof t)throw new yt(o);var p=n?n.length:0;if(p||(e&=-97,n=s=void 0),l=void 0===l?l:oi(rs(l),0),d=void 0===d?d:rs(d),p-=s?s.length:0,64&e){var h=n,f=s;n=s=void 0}var m=u?void 0:Zn(t),g=[t,e,i,n,s,h,f,c,l,d];if(m&&function(t,e){var i=t[1],r=e[1],n=i|r,o=n<131,s=128==r&&8==i||128==r&&256==i&&t[7].length<=e[8]||384==r&&e[7].length<=e[8]&&8==i;if(!o&&!s)return t;1&r&&(t[2]=e[2],n|=1&i?0:4);var c=e[3];if(c){var l=t[3];t[3]=l?mn(l,c,e[4]):c,t[4]=l?Ge(t[3],a):e[4]}(c=e[5])&&(l=t[5],t[5]=l?gn(l,c,e[6]):c,t[6]=l?Ge(t[5],a):e[6]);(c=e[7])&&(t[7]=c);128&r&&(t[8]=null==t[8]?e[8]:ai(t[8],e[8]));null==t[9]&&(t[9]=e[9]);t[0]=e[0],t[1]=n}(g,m),t=g[0],e=g[1],i=g[2],n=g[3],s=g[4],!(d=g[9]=void 0===g[9]?u?0:t.length:oi(g[9]-p,0))&&24&e&&(e&=-25),e&&1!=e)v=8==e||16==e?function(t,e,i){var n=En(t);return function o(){for(var a=arguments.length,s=r(a),c=a,l=Wn(o);c--;)s[c]=arguments[c];var d=a<3&&s[0]!==l&&s[a-1]!==l?[]:Ge(s,l);if((a-=d.length)<i)return zn(t,e,On,o.placeholder,void 0,s,d,void 0,void 0,i-a);var u=this&&this!==Zt&&this instanceof o?n:t;return oe(u,this,s)}}(t,e,d):32!=e&&33!=e||s.length?On.apply(void 0,g):function(t,e,i,n){var o=1&e,a=En(t);return function e(){for(var s=-1,c=arguments.length,l=-1,d=n.length,u=r(d+c),p=this&&this!==Zt&&this instanceof e?a:t;++l<d;)u[l]=n[l];for(;c--;)u[l++]=arguments[++s];return oe(p,o?i:this,u)}}(t,e,i,n);else var v=function(t,e,i){var r=1&e,n=En(t);return function e(){var o=this&&this!==Zt&&this instanceof e?n:t;return o.apply(r?i:this,arguments)}}(t,e,i);return Co((m?Hr:bo)(v,g),t,e)}function Fn(t,e,i,r){return void 0===t||La(t,wt[i])&&!St.call(r,i)?e:t}function Hn(t,e,i,r,n,o){return Xa(t)&&Xa(e)&&(o.set(e,t),Lr(t,e,void 0,Hn,o),o.delete(e)),t}function Gn(t){return Za(t)?void 0:t}function Xn(t,e,i,r,n,o){var a=1&i,s=t.length,c=e.length;if(s!=c&&!(a&&c>s))return!1;var l=o.get(t),d=o.get(e);if(l&&d)return l==e&&d==t;var u=-1,p=!0,h=2&i?new zi:void 0;for(o.set(t,e),o.set(e,t);++u<s;){var f=t[u],m=e[u];if(r)var g=a?r(m,f,u,e,t,o):r(f,m,u,t,e,o);if(void 0!==g){if(g)continue;p=!1;break}if(h){if(!ve(e,(function(t,e){if(!je(h,e)&&(f===t||n(f,t,i,r,o)))return h.push(e)}))){p=!1;break}}else if(f!==m&&!n(f,m,i,r,o)){p=!1;break}}return o.delete(t),o.delete(e),p}function Un(t){return wo(mo(t,void 0,Ro),t+"")}function Bn(t){return ur(t,_s,to)}function $n(t){return ur(t,ws,eo)}var Zn=vi?function(t){return vi.get(t)}:Ks;function Yn(t){for(var e=t.name+"",i=yi[e],r=St.call(yi,e)?i.length:0;r--;){var n=i[r],o=n.func;if(null==o||o==t)return n.name}return e}function Wn(t){return(St.call(Ti,"placeholder")?Ti:t).placeholder}function qn(){var t=Ti.iteratee||Zs;return t=t===Zs?Cr:t,arguments.length?t(arguments[0],arguments[1]):t}function Kn(t,e){var i,r,n=t.__data__;return("string"==(r=typeof(i=e))||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==i:null===i)?n["string"==typeof e?"string":"hash"]:n.map}function Jn(t){for(var e=_s(t),i=e.length;i--;){var r=e[i],n=t[r];e[i]=[r,n,ho(n)]}return e}function Qn(t,e){var i=function(t,e){return null==t?void 0:t[e]}(t,e);return wr(i)?i:void 0}var to=ti?function(t){return null==t?[]:(t=mt(t),de(ti(t),(function(e){return Yt.call(t,e)})))}:nc,eo=ti?function(t){for(var e=[];t;)fe(e,to(t)),t=Bt(t);return e}:nc,io=pr;function ro(t,e,i){for(var r=-1,n=(e=sn(e,t)).length,o=!1;++r<n;){var a=Mo(e[r]);if(!(o=null!=t&&i(t,a)))break;t=t[a]}return o||++r!=n?o:!!(n=null==t?0:t.length)&&Ga(n)&&ao(a,n)&&(Da(t)||ja(t))}function no(t){return"function"!=typeof t.constructor||po(t)?{}:Oi(Bt(t))}function oo(t){return Da(t)||ja(t)||!!(Kt&&t&&t[Kt])}function ao(t,e){var i=typeof t;return!!(e=null==e?9007199254740991:e)&&("number"==i||"symbol"!=i&&ct.test(t))&&t>-1&&t%1==0&&t<e}function so(t,e,i){if(!Xa(i))return!1;var r=typeof e;return!!("number"==r?za(i)&&ao(e,i.length):"string"==r&&e in i)&&La(i[e],t)}function co(t,e){if(Da(t))return!1;var i=typeof t;return!("number"!=i&&"symbol"!=i&&"boolean"!=i&&null!=t&&!Ka(t))||(U.test(t)||!X.test(t)||null!=e&&t in mt(e))}function lo(t){var e=Yn(t),i=Ti[e];if("function"!=typeof i||!(e in Ii.prototype))return!1;if(t===i)return!0;var r=Zn(i);return!!r&&t===r[0]}(ui&&io(new ui(new ArrayBuffer(1)))!=S||pi&&io(new pi)!=m||hi&&"[object Promise]"!=io(hi.resolve())||fi&&io(new fi)!=b||mi&&io(new mi)!=C)&&(io=function(t){var e=pr(t),i=e==v?t.constructor:void 0,r=i?To(i):"";if(r)switch(r){case bi:return S;case _i:return m;case wi:return"[object Promise]";case Ci:return b;case xi:return C}return e});var uo=Ct?Fa:oc;function po(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||wt)}function ho(t){return t==t&&!Xa(t)}function fo(t,e){return function(i){return null!=i&&(i[t]===e&&(void 0!==e||t in mt(i)))}}function mo(t,e,i){return e=oi(void 0===e?t.length-1:e,0),function(){for(var n=arguments,o=-1,a=oi(n.length-e,0),s=r(a);++o<a;)s[o]=n[e+o];o=-1;for(var c=r(e+1);++o<e;)c[o]=n[o];return c[e]=i(s),oe(t,this,c)}}function go(t,e){return e.length<2?t:dr(t,Ur(e,0,-1))}function vo(t,e){for(var i=t.length,r=ai(e.length,i),n=vn(t);r--;){var o=e[r];t[r]=ao(o,i)?n[o]:void 0}return t}function yo(t,e){if(("constructor"!==e||"function"!=typeof t[e])&&"__proto__"!=e)return t[e]}var bo=xo(Hr),_o=Ke||function(t,e){return Zt.setTimeout(t,e)},wo=xo(Gr);function Co(t,e,i){var r=e+"";return wo(t,function(t,e){var i=e.length;if(!i)return t;var r=i-1;return e[r]=(i>1?"& ":"")+e[r],e=e.join(i>2?", ":" "),t.replace(K,"{\n/* [wrapped with "+e+"] */\n")}(r,function(t,e){return se(s,(function(i){var r="_."+i[0];e&i[1]&&!ue(t,r)&&t.push(r)})),t.sort()}(function(t){var e=t.match(J);return e?e[1].split(Q):[]}(r),i)))}function xo(t){var e=0,i=0;return function(){var r=si(),n=16-(r-i);if(i=r,n>0){if(++e>=800)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}function So(t,e){var i=-1,r=t.length,n=r-1;for(e=void 0===e?r:e;++i<e;){var o=zr(i,n),a=t[o];t[o]=t[i],t[i]=a}return t.length=e,t}var Eo=function(t){var e=xa(t,(function(t){return 500===i.size&&i.clear(),t})),i=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(B,(function(t,i,r,n){e.push(r?n.replace(et,"$1"):i||t)})),e}));function Mo(t){if("string"==typeof t||Ka(t))return t;var e=t+"";return"0"==e&&1/t==-1/0?"-0":e}function To(t){if(null!=t){try{return xt.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Oo(t){if(t instanceof Ii)return t.clone();var e=new Ai(t.__wrapped__,t.__chain__);return e.__actions__=vn(t.__actions__),e.__index__=t.__index__,e.__values__=t.__values__,e}var Lo=Pr((function(t,e){return ka(t)?Ji(t,nr(e,1,ka,!0)):[]})),Ao=Pr((function(t,e){var i=Vo(e);return ka(i)&&(i=void 0),ka(t)?Ji(t,nr(e,1,ka,!0),qn(i,2)):[]})),Io=Pr((function(t,e){var i=Vo(e);return ka(i)&&(i=void 0),ka(t)?Ji(t,nr(e,1,ka,!0),void 0,i):[]}));function jo(t,e,i){var r=null==t?0:t.length;if(!r)return-1;var n=null==i?0:rs(i);return n<0&&(n=oi(r+n,0)),_e(t,qn(e,3),n)}function Do(t,e,i){var r=null==t?0:t.length;if(!r)return-1;var n=r-1;return void 0!==i&&(n=rs(i),n=i<0?oi(r+n,0):ai(n,r-1)),_e(t,qn(e,3),n,!0)}function Ro(t){return(null==t?0:t.length)?nr(t,1):[]}function zo(t){return t&&t.length?t[0]:void 0}var ko=Pr((function(t){var e=he(t,on);return e.length&&e[0]===t[0]?gr(e):[]})),Po=Pr((function(t){var e=Vo(t),i=he(t,on);return e===Vo(i)?e=void 0:i.pop(),i.length&&i[0]===t[0]?gr(i,qn(e,2)):[]})),No=Pr((function(t){var e=Vo(t),i=he(t,on);return(e="function"==typeof e?e:void 0)&&i.pop(),i.length&&i[0]===t[0]?gr(i,void 0,e):[]}));function Vo(t){var e=null==t?0:t.length;return e?t[e-1]:void 0}var Fo=Pr(Ho);function Ho(t,e){return t&&t.length&&e&&e.length?Dr(t,e):t}var Go=Un((function(t,e){var i=null==t?0:t.length,r=Zi(t,e);return Rr(t,he(e,(function(t){return ao(t,i)?+t:t})).sort(fn)),r}));function Xo(t){return null==t?t:di.call(t)}var Uo=Pr((function(t){return Kr(nr(t,1,ka,!0))})),Bo=Pr((function(t){var e=Vo(t);return ka(e)&&(e=void 0),Kr(nr(t,1,ka,!0),qn(e,2))})),$o=Pr((function(t){var e=Vo(t);return e="function"==typeof e?e:void 0,Kr(nr(t,1,ka,!0),void 0,e)}));function Zo(t){if(!t||!t.length)return[];var e=0;return t=de(t,(function(t){if(ka(t))return e=oi(t.length,e),!0})),Le(e,(function(e){return he(t,Ee(e))}))}function Yo(t,e){if(!t||!t.length)return[];var i=Zo(t);return null==e?i:he(i,(function(t){return oe(e,void 0,t)}))}var Wo=Pr((function(t,e){return ka(t)?Ji(t,e):[]})),qo=Pr((function(t){return rn(de(t,ka))})),Ko=Pr((function(t){var e=Vo(t);return ka(e)&&(e=void 0),rn(de(t,ka),qn(e,2))})),Jo=Pr((function(t){var e=Vo(t);return e="function"==typeof e?e:void 0,rn(de(t,ka),void 0,e)})),Qo=Pr(Zo);var ta=Pr((function(t){var e=t.length,i=e>1?t[e-1]:void 0;return i="function"==typeof i?(t.pop(),i):void 0,Yo(t,i)}));function ea(t){var e=Ti(t);return e.__chain__=!0,e}function ia(t,e){return e(t)}var ra=Un((function(t){var e=t.length,i=e?t[0]:0,r=this.__wrapped__,n=function(e){return Zi(e,t)};return!(e>1||this.__actions__.length)&&r instanceof Ii&&ao(i)?((r=r.slice(i,+i+(e?1:0))).__actions__.push({func:ia,args:[n],thisArg:void 0}),new Ai(r,this.__chain__).thru((function(t){return e&&!t.length&&t.push(void 0),t}))):this.thru(n)}));var na=bn((function(t,e,i){St.call(t,i)?++t[i]:$i(t,i,1)}));var oa=Mn(jo),aa=Mn(Do);function sa(t,e){return(Da(t)?se:Qi)(t,qn(e,3))}function ca(t,e){return(Da(t)?ce:tr)(t,qn(e,3))}var la=bn((function(t,e,i){St.call(t,i)?t[i].push(e):$i(t,i,[e])}));var da=Pr((function(t,e,i){var n=-1,o="function"==typeof e,a=za(t)?r(t.length):[];return Qi(t,(function(t){a[++n]=o?oe(e,t,i):vr(t,e,i)})),a})),ua=bn((function(t,e,i){$i(t,i,e)}));function pa(t,e){return(Da(t)?he:Mr)(t,qn(e,3))}var ha=bn((function(t,e,i){t[i?0:1].push(e)}),(function(){return[[],[]]}));var fa=Pr((function(t,e){if(null==t)return[];var i=e.length;return i>1&&so(t,e[0],e[1])?e=[]:i>2&&so(e[0],e[1],e[2])&&(e=[e[0]]),Ir(t,nr(e,1),[])})),ma=qe||function(){return Zt.Date.now()};function ga(t,e,i){return e=i?void 0:e,Vn(t,128,void 0,void 0,void 0,void 0,e=t&&null==e?t.length:e)}function va(t,e){var i;if("function"!=typeof e)throw new yt(o);return t=rs(t),function(){return--t>0&&(i=e.apply(this,arguments)),t<=1&&(e=void 0),i}}var ya=Pr((function(t,e,i){var r=1;if(i.length){var n=Ge(i,Wn(ya));r|=32}return Vn(t,r,e,i,n)})),ba=Pr((function(t,e,i){var r=3;if(i.length){var n=Ge(i,Wn(ba));r|=32}return Vn(e,r,t,i,n)}));function _a(t,e,i){var r,n,a,s,c,l,d=0,u=!1,p=!1,h=!0;if("function"!=typeof t)throw new yt(o);function f(e){var i=r,o=n;return r=n=void 0,d=e,s=t.apply(o,i)}function m(t){return d=t,c=_o(v,e),u?f(t):s}function g(t){var i=t-l;return void 0===l||i>=e||i<0||p&&t-d>=a}function v(){var t=ma();if(g(t))return y(t);c=_o(v,function(t){var i=e-(t-l);return p?ai(i,a-(t-d)):i}(t))}function y(t){return c=void 0,h&&r?f(t):(r=n=void 0,s)}function b(){var t=ma(),i=g(t);if(r=arguments,n=this,l=t,i){if(void 0===c)return m(l);if(p)return dn(c),c=_o(v,e),f(l)}return void 0===c&&(c=_o(v,e)),s}return e=os(e)||0,Xa(i)&&(u=!!i.leading,a=(p="maxWait"in i)?oi(os(i.maxWait)||0,e):a,h="trailing"in i?!!i.trailing:h),b.cancel=function(){void 0!==c&&dn(c),d=0,r=l=n=c=void 0},b.flush=function(){return void 0===c?s:y(ma())},b}var wa=Pr((function(t,e){return Ki(t,1,e)})),Ca=Pr((function(t,e,i){return Ki(t,os(e)||0,i)}));function xa(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new yt(o);var i=function(){var r=arguments,n=e?e.apply(this,r):r[0],o=i.cache;if(o.has(n))return o.get(n);var a=t.apply(this,r);return i.cache=o.set(n,a)||o,a};return i.cache=new(xa.Cache||Ri),i}function Sa(t){if("function"!=typeof t)throw new yt(o);return function(){var e=arguments;switch(e.length){case 0:return!t.call(this);case 1:return!t.call(this,e[0]);case 2:return!t.call(this,e[0],e[1]);case 3:return!t.call(this,e[0],e[1],e[2])}return!t.apply(this,e)}}xa.Cache=Ri;var Ea=cn((function(t,e){var i=(e=1==e.length&&Da(e[0])?he(e[0],Ae(qn())):he(nr(e,1),Ae(qn()))).length;return Pr((function(r){for(var n=-1,o=ai(r.length,i);++n<o;)r[n]=e[n].call(this,r[n]);return oe(t,this,r)}))})),Ma=Pr((function(t,e){return Vn(t,32,void 0,e,Ge(e,Wn(Ma)))})),Ta=Pr((function(t,e){return Vn(t,64,void 0,e,Ge(e,Wn(Ta)))})),Oa=Un((function(t,e){return Vn(t,256,void 0,void 0,void 0,e)}));function La(t,e){return t===e||t!=t&&e!=e}var Aa=Rn(hr),Ia=Rn((function(t,e){return t>=e})),ja=yr(function(){return arguments}())?yr:function(t){return Ua(t)&&St.call(t,"callee")&&!Yt.call(t,"callee")},Da=r.isArray,Ra=Qt?Ae(Qt):function(t){return Ua(t)&&pr(t)==x};function za(t){return null!=t&&Ga(t.length)&&!Fa(t)}function ka(t){return Ua(t)&&za(t)}var Pa=ei||oc,Na=te?Ae(te):function(t){return Ua(t)&&pr(t)==u};function Va(t){if(!Ua(t))return!1;var e=pr(t);return e==p||"[object DOMException]"==e||"string"==typeof t.message&&"string"==typeof t.name&&!Za(t)}function Fa(t){if(!Xa(t))return!1;var e=pr(t);return e==h||e==f||"[object AsyncFunction]"==e||"[object Proxy]"==e}function Ha(t){return"number"==typeof t&&t==rs(t)}function Ga(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}function Xa(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}function Ua(t){return null!=t&&"object"==typeof t}var Ba=ee?Ae(ee):function(t){return Ua(t)&&io(t)==m};function $a(t){return"number"==typeof t||Ua(t)&&pr(t)==g}function Za(t){if(!Ua(t)||pr(t)!=v)return!1;var e=Bt(t);if(null===e)return!0;var i=St.call(e,"constructor")&&e.constructor;return"function"==typeof i&&i instanceof i&&xt.call(i)==Ot}var Ya=ie?Ae(ie):function(t){return Ua(t)&&pr(t)==y};var Wa=re?Ae(re):function(t){return Ua(t)&&io(t)==b};function qa(t){return"string"==typeof t||!Da(t)&&Ua(t)&&pr(t)==_}function Ka(t){return"symbol"==typeof t||Ua(t)&&pr(t)==w}var Ja=ne?Ae(ne):function(t){return Ua(t)&&Ga(t.length)&&!!Ft[pr(t)]};var Qa=Rn(Er),ts=Rn((function(t,e){return t<=e}));function es(t){if(!t)return[];if(za(t))return qa(t)?$e(t):vn(t);if(Jt&&t[Jt])return function(t){for(var e,i=[];!(e=t.next()).done;)i.push(e.value);return i}(t[Jt]());var e=io(t);return(e==m?Fe:e==b?Xe:Ls)(t)}function is(t){return t?(t=os(t))===1/0||t===-1/0?17976931348623157e292*(t<0?-1:1):t==t?t:0:0===t?t:0}function rs(t){var e=is(t),i=e%1;return e==e?i?e-i:e:0}function ns(t){return t?Yi(rs(t),0,4294967295):0}function os(t){if("number"==typeof t)return t;if(Ka(t))return NaN;if(Xa(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=Xa(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(Y,"");var i=ot.test(t);return i||st.test(t)?Ut(t.slice(2),i?2:8):nt.test(t)?NaN:+t}function as(t){return yn(t,ws(t))}function ss(t){return null==t?"":qr(t)}var cs=_n((function(t,e){if(po(e)||za(e))yn(e,_s(e),t);else for(var i in e)St.call(e,i)&&Gi(t,i,e[i])})),ls=_n((function(t,e){yn(e,ws(e),t)})),ds=_n((function(t,e,i,r){yn(e,ws(e),t,r)})),us=_n((function(t,e,i,r){yn(e,_s(e),t,r)})),ps=Un(Zi);var hs=Pr((function(t,e){t=mt(t);var i=-1,r=e.length,n=r>2?e[2]:void 0;for(n&&so(e[0],e[1],n)&&(r=1);++i<r;)for(var o=e[i],a=ws(o),s=-1,c=a.length;++s<c;){var l=a[s],d=t[l];(void 0===d||La(d,wt[l])&&!St.call(t,l))&&(t[l]=o[l])}return t})),fs=Pr((function(t){return t.push(void 0,Hn),oe(xs,void 0,t)}));function ms(t,e,i){var r=null==t?void 0:dr(t,e);return void 0===r?i:r}function gs(t,e){return null!=t&&ro(t,e,mr)}var vs=Ln((function(t,e,i){null!=e&&"function"!=typeof e.toString&&(e=Tt.call(e)),t[e]=i}),Xs($s)),ys=Ln((function(t,e,i){null!=e&&"function"!=typeof e.toString&&(e=Tt.call(e)),St.call(t,e)?t[e].push(i):t[e]=[i]}),qn),bs=Pr(vr);function _s(t){return za(t)?Pi(t):xr(t)}function ws(t){return za(t)?Pi(t,!0):Sr(t)}var Cs=_n((function(t,e,i){Lr(t,e,i)})),xs=_n((function(t,e,i,r){Lr(t,e,i,r)})),Ss=Un((function(t,e){var i={};if(null==t)return i;var r=!1;e=he(e,(function(e){return e=sn(e,t),r||(r=e.length>1),e})),yn(t,$n(t),i),r&&(i=Wi(i,7,Gn));for(var n=e.length;n--;)Jr(i,e[n]);return i}));var Es=Un((function(t,e){return null==t?{}:function(t,e){return jr(t,e,(function(e,i){return gs(t,i)}))}(t,e)}));function Ms(t,e){if(null==t)return{};var i=he($n(t),(function(t){return[t]}));return e=qn(e),jr(t,i,(function(t,i){return e(t,i[0])}))}var Ts=Nn(_s),Os=Nn(ws);function Ls(t){return null==t?[]:Ie(t,_s(t))}var As=Sn((function(t,e,i){return e=e.toLowerCase(),t+(i?Is(e):e)}));function Is(t){return Vs(ss(t).toLowerCase())}function js(t){return(t=ss(t))&&t.replace(lt,ke).replace(Dt,"")}var Ds=Sn((function(t,e,i){return t+(i?"-":"")+e.toLowerCase()})),Rs=Sn((function(t,e,i){return t+(i?" ":"")+e.toLowerCase()})),zs=xn("toLowerCase");var ks=Sn((function(t,e,i){return t+(i?"_":"")+e.toLowerCase()}));var Ps=Sn((function(t,e,i){return t+(i?" ":"")+Vs(e)}));var Ns=Sn((function(t,e,i){return t+(i?" ":"")+e.toUpperCase()})),Vs=xn("toUpperCase");function Fs(t,e,i){return t=ss(t),void 0===(e=i?void 0:e)?function(t){return Pt.test(t)}(t)?function(t){return t.match(zt)||[]}(t):function(t){return t.match(tt)||[]}(t):t.match(e)||[]}var Hs=Pr((function(t,e){try{return oe(t,void 0,e)}catch(t){return Va(t)?t:new pt(t)}})),Gs=Un((function(t,e){return se(e,(function(e){e=Mo(e),$i(t,e,ya(t[e],t))})),t}));function Xs(t){return function(){return t}}var Us=Tn(),Bs=Tn(!0);function $s(t){return t}function Zs(t){return Cr("function"==typeof t?t:Wi(t,1))}var Ys=Pr((function(t,e){return function(i){return vr(i,t,e)}})),Ws=Pr((function(t,e){return function(i){return vr(t,i,e)}}));function qs(t,e,i){var r=_s(e),n=lr(e,r);null!=i||Xa(e)&&(n.length||!r.length)||(i=e,e=t,t=this,n=lr(e,_s(e)));var o=!(Xa(i)&&"chain"in i&&!i.chain),a=Fa(t);return se(n,(function(i){var r=e[i];t[i]=r,a&&(t.prototype[i]=function(){var e=this.__chain__;if(o||e){var i=t(this.__wrapped__),n=i.__actions__=vn(this.__actions__);return n.push({func:r,args:arguments,thisArg:t}),i.__chain__=e,i}return r.apply(t,fe([this.value()],arguments))})})),t}function Ks(){}var Js=In(he),Qs=In(le),tc=In(ve);function ec(t){return co(t)?Ee(Mo(t)):function(t){return function(e){return dr(e,t)}}(t)}var ic=Dn(),rc=Dn(!0);function nc(){return[]}function oc(){return!1}var ac=An((function(t,e){return t+e}),0),sc=kn("ceil"),cc=An((function(t,e){return t/e}),1),lc=kn("floor");var dc,uc=An((function(t,e){return t*e}),1),pc=kn("round"),hc=An((function(t,e){return t-e}),0);return Ti.after=function(t,e){if("function"!=typeof e)throw new yt(o);return t=rs(t),function(){if(--t<1)return e.apply(this,arguments)}},Ti.ary=ga,Ti.assign=cs,Ti.assignIn=ls,Ti.assignInWith=ds,Ti.assignWith=us,Ti.at=ps,Ti.before=va,Ti.bind=ya,Ti.bindAll=Gs,Ti.bindKey=ba,Ti.castArray=function(){if(!arguments.length)return[];var t=arguments[0];return Da(t)?t:[t]},Ti.chain=ea,Ti.chunk=function(t,e,i){e=(i?so(t,e,i):void 0===e)?1:oi(rs(e),0);var n=null==t?0:t.length;if(!n||e<1)return[];for(var o=0,a=0,s=r(Je(n/e));o<n;)s[a++]=Ur(t,o,o+=e);return s},Ti.compact=function(t){for(var e=-1,i=null==t?0:t.length,r=0,n=[];++e<i;){var o=t[e];o&&(n[r++]=o)}return n},Ti.concat=function(){var t=arguments.length;if(!t)return[];for(var e=r(t-1),i=arguments[0],n=t;n--;)e[n-1]=arguments[n];return fe(Da(i)?vn(i):[i],nr(e,1))},Ti.cond=function(t){var e=null==t?0:t.length,i=qn();return t=e?he(t,(function(t){if("function"!=typeof t[1])throw new yt(o);return[i(t[0]),t[1]]})):[],Pr((function(i){for(var r=-1;++r<e;){var n=t[r];if(oe(n[0],this,i))return oe(n[1],this,i)}}))},Ti.conforms=function(t){return function(t){var e=_s(t);return function(i){return qi(i,t,e)}}(Wi(t,1))},Ti.constant=Xs,Ti.countBy=na,Ti.create=function(t,e){var i=Oi(t);return null==e?i:Bi(i,e)},Ti.curry=function t(e,i,r){var n=Vn(e,8,void 0,void 0,void 0,void 0,void 0,i=r?void 0:i);return n.placeholder=t.placeholder,n},Ti.curryRight=function t(e,i,r){var n=Vn(e,16,void 0,void 0,void 0,void 0,void 0,i=r?void 0:i);return n.placeholder=t.placeholder,n},Ti.debounce=_a,Ti.defaults=hs,Ti.defaultsDeep=fs,Ti.defer=wa,Ti.delay=Ca,Ti.difference=Lo,Ti.differenceBy=Ao,Ti.differenceWith=Io,Ti.drop=function(t,e,i){var r=null==t?0:t.length;return r?Ur(t,(e=i||void 0===e?1:rs(e))<0?0:e,r):[]},Ti.dropRight=function(t,e,i){var r=null==t?0:t.length;return r?Ur(t,0,(e=r-(e=i||void 0===e?1:rs(e)))<0?0:e):[]},Ti.dropRightWhile=function(t,e){return t&&t.length?tn(t,qn(e,3),!0,!0):[]},Ti.dropWhile=function(t,e){return t&&t.length?tn(t,qn(e,3),!0):[]},Ti.fill=function(t,e,i,r){var n=null==t?0:t.length;return n?(i&&"number"!=typeof i&&so(t,e,i)&&(i=0,r=n),function(t,e,i,r){var n=t.length;for((i=rs(i))<0&&(i=-i>n?0:n+i),(r=void 0===r||r>n?n:rs(r))<0&&(r+=n),r=i>r?0:ns(r);i<r;)t[i++]=e;return t}(t,e,i,r)):[]},Ti.filter=function(t,e){return(Da(t)?de:rr)(t,qn(e,3))},Ti.flatMap=function(t,e){return nr(pa(t,e),1)},Ti.flatMapDeep=function(t,e){return nr(pa(t,e),1/0)},Ti.flatMapDepth=function(t,e,i){return i=void 0===i?1:rs(i),nr(pa(t,e),i)},Ti.flatten=Ro,Ti.flattenDeep=function(t){return(null==t?0:t.length)?nr(t,1/0):[]},Ti.flattenDepth=function(t,e){return(null==t?0:t.length)?nr(t,e=void 0===e?1:rs(e)):[]},Ti.flip=function(t){return Vn(t,512)},Ti.flow=Us,Ti.flowRight=Bs,Ti.fromPairs=function(t){for(var e=-1,i=null==t?0:t.length,r={};++e<i;){var n=t[e];r[n[0]]=n[1]}return r},Ti.functions=function(t){return null==t?[]:lr(t,_s(t))},Ti.functionsIn=function(t){return null==t?[]:lr(t,ws(t))},Ti.groupBy=la,Ti.initial=function(t){return(null==t?0:t.length)?Ur(t,0,-1):[]},Ti.intersection=ko,Ti.intersectionBy=Po,Ti.intersectionWith=No,Ti.invert=vs,Ti.invertBy=ys,Ti.invokeMap=da,Ti.iteratee=Zs,Ti.keyBy=ua,Ti.keys=_s,Ti.keysIn=ws,Ti.map=pa,Ti.mapKeys=function(t,e){var i={};return e=qn(e,3),sr(t,(function(t,r,n){$i(i,e(t,r,n),t)})),i},Ti.mapValues=function(t,e){var i={};return e=qn(e,3),sr(t,(function(t,r,n){$i(i,r,e(t,r,n))})),i},Ti.matches=function(t){return Tr(Wi(t,1))},Ti.matchesProperty=function(t,e){return Or(t,Wi(e,1))},Ti.memoize=xa,Ti.merge=Cs,Ti.mergeWith=xs,Ti.method=Ys,Ti.methodOf=Ws,Ti.mixin=qs,Ti.negate=Sa,Ti.nthArg=function(t){return t=rs(t),Pr((function(e){return Ar(e,t)}))},Ti.omit=Ss,Ti.omitBy=function(t,e){return Ms(t,Sa(qn(e)))},Ti.once=function(t){return va(2,t)},Ti.orderBy=function(t,e,i,r){return null==t?[]:(Da(e)||(e=null==e?[]:[e]),Da(i=r?void 0:i)||(i=null==i?[]:[i]),Ir(t,e,i))},Ti.over=Js,Ti.overArgs=Ea,Ti.overEvery=Qs,Ti.overSome=tc,Ti.partial=Ma,Ti.partialRight=Ta,Ti.partition=ha,Ti.pick=Es,Ti.pickBy=Ms,Ti.property=ec,Ti.propertyOf=function(t){return function(e){return null==t?void 0:dr(t,e)}},Ti.pull=Fo,Ti.pullAll=Ho,Ti.pullAllBy=function(t,e,i){return t&&t.length&&e&&e.length?Dr(t,e,qn(i,2)):t},Ti.pullAllWith=function(t,e,i){return t&&t.length&&e&&e.length?Dr(t,e,void 0,i):t},Ti.pullAt=Go,Ti.range=ic,Ti.rangeRight=rc,Ti.rearg=Oa,Ti.reject=function(t,e){return(Da(t)?de:rr)(t,Sa(qn(e,3)))},Ti.remove=function(t,e){var i=[];if(!t||!t.length)return i;var r=-1,n=[],o=t.length;for(e=qn(e,3);++r<o;){var a=t[r];e(a,r,t)&&(i.push(a),n.push(r))}return Rr(t,n),i},Ti.rest=function(t,e){if("function"!=typeof t)throw new yt(o);return Pr(t,e=void 0===e?e:rs(e))},Ti.reverse=Xo,Ti.sampleSize=function(t,e,i){return e=(i?so(t,e,i):void 0===e)?1:rs(e),(Da(t)?Vi:Vr)(t,e)},Ti.set=function(t,e,i){return null==t?t:Fr(t,e,i)},Ti.setWith=function(t,e,i,r){return r="function"==typeof r?r:void 0,null==t?t:Fr(t,e,i,r)},Ti.shuffle=function(t){return(Da(t)?Fi:Xr)(t)},Ti.slice=function(t,e,i){var r=null==t?0:t.length;return r?(i&&"number"!=typeof i&&so(t,e,i)?(e=0,i=r):(e=null==e?0:rs(e),i=void 0===i?r:rs(i)),Ur(t,e,i)):[]},Ti.sortBy=fa,Ti.sortedUniq=function(t){return t&&t.length?Yr(t):[]},Ti.sortedUniqBy=function(t,e){return t&&t.length?Yr(t,qn(e,2)):[]},Ti.split=function(t,e,i){return i&&"number"!=typeof i&&so(t,e,i)&&(e=i=void 0),(i=void 0===i?4294967295:i>>>0)?(t=ss(t))&&("string"==typeof e||null!=e&&!Ya(e))&&!(e=qr(e))&&Ve(t)?ln($e(t),0,i):t.split(e,i):[]},Ti.spread=function(t,e){if("function"!=typeof t)throw new yt(o);return e=null==e?0:oi(rs(e),0),Pr((function(i){var r=i[e],n=ln(i,0,e);return r&&fe(n,r),oe(t,this,n)}))},Ti.tail=function(t){var e=null==t?0:t.length;return e?Ur(t,1,e):[]},Ti.take=function(t,e,i){return t&&t.length?Ur(t,0,(e=i||void 0===e?1:rs(e))<0?0:e):[]},Ti.takeRight=function(t,e,i){var r=null==t?0:t.length;return r?Ur(t,(e=r-(e=i||void 0===e?1:rs(e)))<0?0:e,r):[]},Ti.takeRightWhile=function(t,e){return t&&t.length?tn(t,qn(e,3),!1,!0):[]},Ti.takeWhile=function(t,e){return t&&t.length?tn(t,qn(e,3)):[]},Ti.tap=function(t,e){return e(t),t},Ti.throttle=function(t,e,i){var r=!0,n=!0;if("function"!=typeof t)throw new yt(o);return Xa(i)&&(r="leading"in i?!!i.leading:r,n="trailing"in i?!!i.trailing:n),_a(t,e,{leading:r,maxWait:e,trailing:n})},Ti.thru=ia,Ti.toArray=es,Ti.toPairs=Ts,Ti.toPairsIn=Os,Ti.toPath=function(t){return Da(t)?he(t,Mo):Ka(t)?[t]:vn(Eo(ss(t)))},Ti.toPlainObject=as,Ti.transform=function(t,e,i){var r=Da(t),n=r||Pa(t)||Ja(t);if(e=qn(e,4),null==i){var o=t&&t.constructor;i=n?r?new o:[]:Xa(t)&&Fa(o)?Oi(Bt(t)):{}}return(n?se:sr)(t,(function(t,r,n){return e(i,t,r,n)})),i},Ti.unary=function(t){return ga(t,1)},Ti.union=Uo,Ti.unionBy=Bo,Ti.unionWith=$o,Ti.uniq=function(t){return t&&t.length?Kr(t):[]},Ti.uniqBy=function(t,e){return t&&t.length?Kr(t,qn(e,2)):[]},Ti.uniqWith=function(t,e){return e="function"==typeof e?e:void 0,t&&t.length?Kr(t,void 0,e):[]},Ti.unset=function(t,e){return null==t||Jr(t,e)},Ti.unzip=Zo,Ti.unzipWith=Yo,Ti.update=function(t,e,i){return null==t?t:Qr(t,e,an(i))},Ti.updateWith=function(t,e,i,r){return r="function"==typeof r?r:void 0,null==t?t:Qr(t,e,an(i),r)},Ti.values=Ls,Ti.valuesIn=function(t){return null==t?[]:Ie(t,ws(t))},Ti.without=Wo,Ti.words=Fs,Ti.wrap=function(t,e){return Ma(an(e),t)},Ti.xor=qo,Ti.xorBy=Ko,Ti.xorWith=Jo,Ti.zip=Qo,Ti.zipObject=function(t,e){return nn(t||[],e||[],Gi)},Ti.zipObjectDeep=function(t,e){return nn(t||[],e||[],Fr)},Ti.zipWith=ta,Ti.entries=Ts,Ti.entriesIn=Os,Ti.extend=ls,Ti.extendWith=ds,qs(Ti,Ti),Ti.add=ac,Ti.attempt=Hs,Ti.camelCase=As,Ti.capitalize=Is,Ti.ceil=sc,Ti.clamp=function(t,e,i){return void 0===i&&(i=e,e=void 0),void 0!==i&&(i=(i=os(i))==i?i:0),void 0!==e&&(e=(e=os(e))==e?e:0),Yi(os(t),e,i)},Ti.clone=function(t){return Wi(t,4)},Ti.cloneDeep=function(t){return Wi(t,5)},Ti.cloneDeepWith=function(t,e){return Wi(t,5,e="function"==typeof e?e:void 0)},Ti.cloneWith=function(t,e){return Wi(t,4,e="function"==typeof e?e:void 0)},Ti.conformsTo=function(t,e){return null==e||qi(t,e,_s(e))},Ti.deburr=js,Ti.defaultTo=function(t,e){return null==t||t!=t?e:t},Ti.divide=cc,Ti.endsWith=function(t,e,i){t=ss(t),e=qr(e);var r=t.length,n=i=void 0===i?r:Yi(rs(i),0,r);return(i-=e.length)>=0&&t.slice(i,n)==e},Ti.eq=La,Ti.escape=function(t){return(t=ss(t))&&V.test(t)?t.replace(P,Pe):t},Ti.escapeRegExp=function(t){return(t=ss(t))&&Z.test(t)?t.replace($,"\\$&"):t},Ti.every=function(t,e,i){var r=Da(t)?le:er;return i&&so(t,e,i)&&(e=void 0),r(t,qn(e,3))},Ti.find=oa,Ti.findIndex=jo,Ti.findKey=function(t,e){return be(t,qn(e,3),sr)},Ti.findLast=aa,Ti.findLastIndex=Do,Ti.findLastKey=function(t,e){return be(t,qn(e,3),cr)},Ti.floor=lc,Ti.forEach=sa,Ti.forEachRight=ca,Ti.forIn=function(t,e){return null==t?t:or(t,qn(e,3),ws)},Ti.forInRight=function(t,e){return null==t?t:ar(t,qn(e,3),ws)},Ti.forOwn=function(t,e){return t&&sr(t,qn(e,3))},Ti.forOwnRight=function(t,e){return t&&cr(t,qn(e,3))},Ti.get=ms,Ti.gt=Aa,Ti.gte=Ia,Ti.has=function(t,e){return null!=t&&ro(t,e,fr)},Ti.hasIn=gs,Ti.head=zo,Ti.identity=$s,Ti.includes=function(t,e,i,r){t=za(t)?t:Ls(t),i=i&&!r?rs(i):0;var n=t.length;return i<0&&(i=oi(n+i,0)),qa(t)?i<=n&&t.indexOf(e,i)>-1:!!n&&we(t,e,i)>-1},Ti.indexOf=function(t,e,i){var r=null==t?0:t.length;if(!r)return-1;var n=null==i?0:rs(i);return n<0&&(n=oi(r+n,0)),we(t,e,n)},Ti.inRange=function(t,e,i){return e=is(e),void 0===i?(i=e,e=0):i=is(i),function(t,e,i){return t>=ai(e,i)&&t<oi(e,i)}(t=os(t),e,i)},Ti.invoke=bs,Ti.isArguments=ja,Ti.isArray=Da,Ti.isArrayBuffer=Ra,Ti.isArrayLike=za,Ti.isArrayLikeObject=ka,Ti.isBoolean=function(t){return!0===t||!1===t||Ua(t)&&pr(t)==d},Ti.isBuffer=Pa,Ti.isDate=Na,Ti.isElement=function(t){return Ua(t)&&1===t.nodeType&&!Za(t)},Ti.isEmpty=function(t){if(null==t)return!0;if(za(t)&&(Da(t)||"string"==typeof t||"function"==typeof t.splice||Pa(t)||Ja(t)||ja(t)))return!t.length;var e=io(t);if(e==m||e==b)return!t.size;if(po(t))return!xr(t).length;for(var i in t)if(St.call(t,i))return!1;return!0},Ti.isEqual=function(t,e){return br(t,e)},Ti.isEqualWith=function(t,e,i){var r=(i="function"==typeof i?i:void 0)?i(t,e):void 0;return void 0===r?br(t,e,void 0,i):!!r},Ti.isError=Va,Ti.isFinite=function(t){return"number"==typeof t&&ii(t)},Ti.isFunction=Fa,Ti.isInteger=Ha,Ti.isLength=Ga,Ti.isMap=Ba,Ti.isMatch=function(t,e){return t===e||_r(t,e,Jn(e))},Ti.isMatchWith=function(t,e,i){return i="function"==typeof i?i:void 0,_r(t,e,Jn(e),i)},Ti.isNaN=function(t){return $a(t)&&t!=+t},Ti.isNative=function(t){if(uo(t))throw new pt("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");return wr(t)},Ti.isNil=function(t){return null==t},Ti.isNull=function(t){return null===t},Ti.isNumber=$a,Ti.isObject=Xa,Ti.isObjectLike=Ua,Ti.isPlainObject=Za,Ti.isRegExp=Ya,Ti.isSafeInteger=function(t){return Ha(t)&&t>=-9007199254740991&&t<=9007199254740991},Ti.isSet=Wa,Ti.isString=qa,Ti.isSymbol=Ka,Ti.isTypedArray=Ja,Ti.isUndefined=function(t){return void 0===t},Ti.isWeakMap=function(t){return Ua(t)&&io(t)==C},Ti.isWeakSet=function(t){return Ua(t)&&"[object WeakSet]"==pr(t)},Ti.join=function(t,e){return null==t?"":ri.call(t,e)},Ti.kebabCase=Ds,Ti.last=Vo,Ti.lastIndexOf=function(t,e,i){var r=null==t?0:t.length;if(!r)return-1;var n=r;return void 0!==i&&(n=(n=rs(i))<0?oi(r+n,0):ai(n,r-1)),e==e?function(t,e,i){for(var r=i+1;r--;)if(t[r]===e)return r;return r}(t,e,n):_e(t,xe,n,!0)},Ti.lowerCase=Rs,Ti.lowerFirst=zs,Ti.lt=Qa,Ti.lte=ts,Ti.max=function(t){return t&&t.length?ir(t,$s,hr):void 0},Ti.maxBy=function(t,e){return t&&t.length?ir(t,qn(e,2),hr):void 0},Ti.mean=function(t){return Se(t,$s)},Ti.meanBy=function(t,e){return Se(t,qn(e,2))},Ti.min=function(t){return t&&t.length?ir(t,$s,Er):void 0},Ti.minBy=function(t,e){return t&&t.length?ir(t,qn(e,2),Er):void 0},Ti.stubArray=nc,Ti.stubFalse=oc,Ti.stubObject=function(){return{}},Ti.stubString=function(){return""},Ti.stubTrue=function(){return!0},Ti.multiply=uc,Ti.nth=function(t,e){return t&&t.length?Ar(t,rs(e)):void 0},Ti.noConflict=function(){return Zt._===this&&(Zt._=Lt),this},Ti.noop=Ks,Ti.now=ma,Ti.pad=function(t,e,i){t=ss(t);var r=(e=rs(e))?Be(t):0;if(!e||r>=e)return t;var n=(e-r)/2;return jn(Qe(n),i)+t+jn(Je(n),i)},Ti.padEnd=function(t,e,i){t=ss(t);var r=(e=rs(e))?Be(t):0;return e&&r<e?t+jn(e-r,i):t},Ti.padStart=function(t,e,i){t=ss(t);var r=(e=rs(e))?Be(t):0;return e&&r<e?jn(e-r,i)+t:t},Ti.parseInt=function(t,e,i){return i||null==e?e=0:e&&(e=+e),ci(ss(t).replace(W,""),e||0)},Ti.random=function(t,e,i){if(i&&"boolean"!=typeof i&&so(t,e,i)&&(e=i=void 0),void 0===i&&("boolean"==typeof e?(i=e,e=void 0):"boolean"==typeof t&&(i=t,t=void 0)),void 0===t&&void 0===e?(t=0,e=1):(t=is(t),void 0===e?(e=t,t=0):e=is(e)),t>e){var r=t;t=e,e=r}if(i||t%1||e%1){var n=li();return ai(t+n*(e-t+Xt("1e-"+((n+"").length-1))),e)}return zr(t,e)},Ti.reduce=function(t,e,i){var r=Da(t)?me:Te,n=arguments.length<3;return r(t,qn(e,4),i,n,Qi)},Ti.reduceRight=function(t,e,i){var r=Da(t)?ge:Te,n=arguments.length<3;return r(t,qn(e,4),i,n,tr)},Ti.repeat=function(t,e,i){return e=(i?so(t,e,i):void 0===e)?1:rs(e),kr(ss(t),e)},Ti.replace=function(){var t=arguments,e=ss(t[0]);return t.length<3?e:e.replace(t[1],t[2])},Ti.result=function(t,e,i){var r=-1,n=(e=sn(e,t)).length;for(n||(n=1,t=void 0);++r<n;){var o=null==t?void 0:t[Mo(e[r])];void 0===o&&(r=n,o=i),t=Fa(o)?o.call(t):o}return t},Ti.round=pc,Ti.runInContext=t,Ti.sample=function(t){return(Da(t)?Ni:Nr)(t)},Ti.size=function(t){if(null==t)return 0;if(za(t))return qa(t)?Be(t):t.length;var e=io(t);return e==m||e==b?t.size:xr(t).length},Ti.snakeCase=ks,Ti.some=function(t,e,i){var r=Da(t)?ve:Br;return i&&so(t,e,i)&&(e=void 0),r(t,qn(e,3))},Ti.sortedIndex=function(t,e){return $r(t,e)},Ti.sortedIndexBy=function(t,e,i){return Zr(t,e,qn(i,2))},Ti.sortedIndexOf=function(t,e){var i=null==t?0:t.length;if(i){var r=$r(t,e);if(r<i&&La(t[r],e))return r}return-1},Ti.sortedLastIndex=function(t,e){return $r(t,e,!0)},Ti.sortedLastIndexBy=function(t,e,i){return Zr(t,e,qn(i,2),!0)},Ti.sortedLastIndexOf=function(t,e){if(null==t?0:t.length){var i=$r(t,e,!0)-1;if(La(t[i],e))return i}return-1},Ti.startCase=Ps,Ti.startsWith=function(t,e,i){return t=ss(t),i=null==i?0:Yi(rs(i),0,t.length),e=qr(e),t.slice(i,i+e.length)==e},Ti.subtract=hc,Ti.sum=function(t){return t&&t.length?Oe(t,$s):0},Ti.sumBy=function(t,e){return t&&t.length?Oe(t,qn(e,2)):0},Ti.template=function(t,e,i){var r=Ti.templateSettings;i&&so(t,e,i)&&(e=void 0),t=ss(t),e=ds({},e,r,Fn);var n,o,a=ds({},e.imports,r.imports,Fn),s=_s(a),c=Ie(a,s),l=0,d=e.interpolate||dt,u="__p += '",p=gt((e.escape||dt).source+"|"+d.source+"|"+(d===G?it:dt).source+"|"+(e.evaluate||dt).source+"|$","g"),h="//# sourceURL="+(St.call(e,"sourceURL")?(e.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++Vt+"]")+"\n";t.replace(p,(function(e,i,r,a,s,c){return r||(r=a),u+=t.slice(l,c).replace(ut,Ne),i&&(n=!0,u+="' +\n__e("+i+") +\n'"),s&&(o=!0,u+="';\n"+s+";\n__p += '"),r&&(u+="' +\n((__t = ("+r+")) == null ? '' : __t) +\n'"),l=c+e.length,e})),u+="';\n";var f=St.call(e,"variable")&&e.variable;f||(u="with (obj) {\n"+u+"\n}\n"),u=(o?u.replace(D,""):u).replace(R,"$1").replace(z,"$1;"),u="function("+(f||"obj")+") {\n"+(f?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(n?", __e = _.escape":"")+(o?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+u+"return __p\n}";var m=Hs((function(){return ht(s,h+"return "+u).apply(void 0,c)}));if(m.source=u,Va(m))throw m;return m},Ti.times=function(t,e){if((t=rs(t))<1||t>9007199254740991)return[];var i=4294967295,r=ai(t,4294967295);t-=4294967295;for(var n=Le(r,e=qn(e));++i<t;)e(i);return n},Ti.toFinite=is,Ti.toInteger=rs,Ti.toLength=ns,Ti.toLower=function(t){return ss(t).toLowerCase()},Ti.toNumber=os,Ti.toSafeInteger=function(t){return t?Yi(rs(t),-9007199254740991,9007199254740991):0===t?t:0},Ti.toString=ss,Ti.toUpper=function(t){return ss(t).toUpperCase()},Ti.trim=function(t,e,i){if((t=ss(t))&&(i||void 0===e))return t.replace(Y,"");if(!t||!(e=qr(e)))return t;var r=$e(t),n=$e(e);return ln(r,De(r,n),Re(r,n)+1).join("")},Ti.trimEnd=function(t,e,i){if((t=ss(t))&&(i||void 0===e))return t.replace(q,"");if(!t||!(e=qr(e)))return t;var r=$e(t);return ln(r,0,Re(r,$e(e))+1).join("")},Ti.trimStart=function(t,e,i){if((t=ss(t))&&(i||void 0===e))return t.replace(W,"");if(!t||!(e=qr(e)))return t;var r=$e(t);return ln(r,De(r,$e(e))).join("")},Ti.truncate=function(t,e){var i=30,r="...";if(Xa(e)){var n="separator"in e?e.separator:n;i="length"in e?rs(e.length):i,r="omission"in e?qr(e.omission):r}var o=(t=ss(t)).length;if(Ve(t)){var a=$e(t);o=a.length}if(i>=o)return t;var s=i-Be(r);if(s<1)return r;var c=a?ln(a,0,s).join(""):t.slice(0,s);if(void 0===n)return c+r;if(a&&(s+=c.length-s),Ya(n)){if(t.slice(s).search(n)){var l,d=c;for(n.global||(n=gt(n.source,ss(rt.exec(n))+"g")),n.lastIndex=0;l=n.exec(d);)var u=l.index;c=c.slice(0,void 0===u?s:u)}}else if(t.indexOf(qr(n),s)!=s){var p=c.lastIndexOf(n);p>-1&&(c=c.slice(0,p))}return c+r},Ti.unescape=function(t){return(t=ss(t))&&N.test(t)?t.replace(k,Ze):t},Ti.uniqueId=function(t){var e=++Et;return ss(t)+e},Ti.upperCase=Ns,Ti.upperFirst=Vs,Ti.each=sa,Ti.eachRight=ca,Ti.first=zo,qs(Ti,(dc={},sr(Ti,(function(t,e){St.call(Ti.prototype,e)||(dc[e]=t)})),dc),{chain:!1}),Ti.VERSION="4.17.20",se(["bind","bindKey","curry","curryRight","partial","partialRight"],(function(t){Ti[t].placeholder=Ti})),se(["drop","take"],(function(t,e){Ii.prototype[t]=function(i){i=void 0===i?1:oi(rs(i),0);var r=this.__filtered__&&!e?new Ii(this):this.clone();return r.__filtered__?r.__takeCount__=ai(i,r.__takeCount__):r.__views__.push({size:ai(i,4294967295),type:t+(r.__dir__<0?"Right":"")}),r},Ii.prototype[t+"Right"]=function(e){return this.reverse()[t](e).reverse()}})),se(["filter","map","takeWhile"],(function(t,e){var i=e+1,r=1==i||3==i;Ii.prototype[t]=function(t){var e=this.clone();return e.__iteratees__.push({iteratee:qn(t,3),type:i}),e.__filtered__=e.__filtered__||r,e}})),se(["head","last"],(function(t,e){var i="take"+(e?"Right":"");Ii.prototype[t]=function(){return this[i](1).value()[0]}})),se(["initial","tail"],(function(t,e){var i="drop"+(e?"":"Right");Ii.prototype[t]=function(){return this.__filtered__?new Ii(this):this[i](1)}})),Ii.prototype.compact=function(){return this.filter($s)},Ii.prototype.find=function(t){return this.filter(t).head()},Ii.prototype.findLast=function(t){return this.reverse().find(t)},Ii.prototype.invokeMap=Pr((function(t,e){return"function"==typeof t?new Ii(this):this.map((function(i){return vr(i,t,e)}))})),Ii.prototype.reject=function(t){return this.filter(Sa(qn(t)))},Ii.prototype.slice=function(t,e){t=rs(t);var i=this;return i.__filtered__&&(t>0||e<0)?new Ii(i):(t<0?i=i.takeRight(-t):t&&(i=i.drop(t)),void 0!==e&&(i=(e=rs(e))<0?i.dropRight(-e):i.take(e-t)),i)},Ii.prototype.takeRightWhile=function(t){return this.reverse().takeWhile(t).reverse()},Ii.prototype.toArray=function(){return this.take(4294967295)},sr(Ii.prototype,(function(t,e){var i=/^(?:filter|find|map|reject)|While$/.test(e),r=/^(?:head|last)$/.test(e),n=Ti[r?"take"+("last"==e?"Right":""):e],o=r||/^find/.test(e);n&&(Ti.prototype[e]=function(){var e=this.__wrapped__,a=r?[1]:arguments,s=e instanceof Ii,c=a[0],l=s||Da(e),d=function(t){var e=n.apply(Ti,fe([t],a));return r&&u?e[0]:e};l&&i&&"function"==typeof c&&1!=c.length&&(s=l=!1);var u=this.__chain__,p=!!this.__actions__.length,h=o&&!u,f=s&&!p;if(!o&&l){e=f?e:new Ii(this);var m=t.apply(e,a);return m.__actions__.push({func:ia,args:[d],thisArg:void 0}),new Ai(m,u)}return h&&f?t.apply(this,a):(m=this.thru(d),h?r?m.value()[0]:m.value():m)})})),se(["pop","push","shift","sort","splice","unshift"],(function(t){var e=bt[t],i=/^(?:push|sort|unshift)$/.test(t)?"tap":"thru",r=/^(?:pop|shift)$/.test(t);Ti.prototype[t]=function(){var t=arguments;if(r&&!this.__chain__){var n=this.value();return e.apply(Da(n)?n:[],t)}return this[i]((function(i){return e.apply(Da(i)?i:[],t)}))}})),sr(Ii.prototype,(function(t,e){var i=Ti[e];if(i){var r=i.name+"";St.call(yi,r)||(yi[r]=[]),yi[r].push({name:e,func:i})}})),yi[On(void 0,2).name]=[{name:"wrapper",func:void 0}],Ii.prototype.clone=function(){var t=new Ii(this.__wrapped__);return t.__actions__=vn(this.__actions__),t.__dir__=this.__dir__,t.__filtered__=this.__filtered__,t.__iteratees__=vn(this.__iteratees__),t.__takeCount__=this.__takeCount__,t.__views__=vn(this.__views__),t},Ii.prototype.reverse=function(){if(this.__filtered__){var t=new Ii(this);t.__dir__=-1,t.__filtered__=!0}else(t=this.clone()).__dir__*=-1;return t},Ii.prototype.value=function(){var t=this.__wrapped__.value(),e=this.__dir__,i=Da(t),r=e<0,n=i?t.length:0,o=function(t,e,i){var r=-1,n=i.length;for(;++r<n;){var o=i[r],a=o.size;switch(o.type){case"drop":t+=a;break;case"dropRight":e-=a;break;case"take":e=ai(e,t+a);break;case"takeRight":t=oi(t,e-a)}}return{start:t,end:e}}(0,n,this.__views__),a=o.start,s=o.end,c=s-a,l=r?s:a-1,d=this.__iteratees__,u=d.length,p=0,h=ai(c,this.__takeCount__);if(!i||!r&&n==c&&h==c)return en(t,this.__actions__);var f=[];t:for(;c--&&p<h;){for(var m=-1,g=t[l+=e];++m<u;){var v=d[m],y=v.iteratee,b=v.type,_=y(g);if(2==b)g=_;else if(!_){if(1==b)continue t;break t}}f[p++]=g}return f},Ti.prototype.at=ra,Ti.prototype.chain=function(){return ea(this)},Ti.prototype.commit=function(){return new Ai(this.value(),this.__chain__)},Ti.prototype.next=function(){void 0===this.__values__&&(this.__values__=es(this.value()));var t=this.__index__>=this.__values__.length;return{done:t,value:t?void 0:this.__values__[this.__index__++]}},Ti.prototype.plant=function(t){for(var e,i=this;i instanceof Li;){var r=Oo(i);r.__index__=0,r.__values__=void 0,e?n.__wrapped__=r:e=r;var n=r;i=i.__wrapped__}return n.__wrapped__=t,e},Ti.prototype.reverse=function(){var t=this.__wrapped__;if(t instanceof Ii){var e=t;return this.__actions__.length&&(e=new Ii(this)),(e=e.reverse()).__actions__.push({func:ia,args:[Xo],thisArg:void 0}),new Ai(e,this.__chain__)}return this.thru(Xo)},Ti.prototype.toJSON=Ti.prototype.valueOf=Ti.prototype.value=function(){return en(this.__wrapped__,this.__actions__)},Ti.prototype.first=Ti.prototype.head,Jt&&(Ti.prototype[Jt]=function(){return this}),Ti}();Zt._=Ye,void 0===(n=function(){return Ye}.call(e,i,e,r))||(r.exports=n)}).call(this)}).call(this,i(72),i(136)(t))},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,e,i){"use strict";i.r(e);i(99),i(101),i(103),i(107),i(109),i(111);var r=i(75),n=function(){return Math.random().toString(36).substring(7).split("").join(".")},o={INIT:"@@redux/INIT"+n(),REPLACE:"@@redux/REPLACE"+n(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+n()}};function a(t){if("object"!=typeof t||null===t)return!1;for(var e=t;null!==Object.getPrototypeOf(e);)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}function s(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function c(t,e){var i=Object.keys(t);return Object.getOwnPropertySymbols&&i.push.apply(i,Object.getOwnPropertySymbols(t)),e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i}function l(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?c(i,!0).forEach((function(e){s(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):c(i).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function d(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return 0===e.length?function(t){return t}:1===e.length?e[0]:e.reduce((function(t,e){return function(){return t(e.apply(void 0,arguments))}}))}i(113);const u=(t="",e="",i="fondoInformacion",r=1500)=>({type:"[ui] show warning",titulo:t,subTitulo:e,backgroundColor:i,timeOut:r}),p=t=>({type:"[ui] set media",size:t}),h=t=>({type:"[ui] set media orientation",orientation:t}),f=(t,e)=>({type:"[ui] mapa click",feature:t,event:e}),m={spinner:{loading:0},error:{message:"",timestamp:null},media:{size:"large",orientation:"landscape",timeStamp:null},menu:{timeStamp:null,option:""},velo:!1,verPantalla:{login:!1,miembro:!1,cambioClave:!1,pases:!1,cambioAdministrador:!1,cambioAdministradorCuenta:{cuentaId:0,cuentaNombre:"",cuentaMail:"",administradorNombre:""},cambioNombreCuenta:!1,cambioNombreCuentaCuenta:{cuentaId:0,cuentaNombre:"",cuentaMail:"",administradorNombre:""},usuarioAsignar:!1,usuarioAsignarCuenta:{cuentaId:0,cuentaNombre:"",cuentaMail:"",administradorNombre:"",creditos:0}},warning:{titulo:"",subTitulo:"",backgroundColor:"fondoInformacion",timeStamp:null,hidden:!0,tineOut:1500},loginOk:!1,mapa:{feature:null,event:null,timeStamp:null},urls:{servidor:null,imagenes:null},idioma:"ES",menuActivar:null},g=(t=m,e)=>{const i={...t};switch(e.type){case"[ui] show spinner":i.spinner.loading+=1;break;case"[ui] hide spinner":i.spinner.loading-=1;break;case"[ui] show error":i.error.timeStamp=(new Date).getTime(),i.error.messages=e.message;break;case"[ui] hide error":i.error.timeStamp=(new Date).getTime(),i.error.messages=null;break;case"[ui] set media":i.media.size=e.size,i.media.timeStamp=(new Date).getTime();break;case"[ui] set media orientation":i.media.orientation=e.orientation,i.media.timeStamp=(new Date).getTime();break;case"[ui] selection":i.menu.timeStamp=(new Date).getTime(),i.menu.option=e.option;break;case"[ui] velo":i.velo=e.option;break;case"[ui] ver pantalla login":i.verPantalla.login=e.option;break;case"[ui] ver pantalla miembro":i.verPantalla.miembro=e.option;break;case"[ui] ver pantalla cambio clave":i.verPantalla.cambioClave=e.option;break;case"[ui] ver pantalla pases":i.verPantalla.pases=e.option;break;case"[ui] ver pantalla cambio administrador":i.verPantalla.cambioAdministrador=e.option,i.verPantalla.cambioAdministradorCuenta.cuentaId=e.cuentaId,i.verPantalla.cambioAdministradorCuenta.cuentaNombre=e.cuentaNombre,i.verPantalla.cambioAdministradorCuenta.cuentaMail=e.cuentaMail,i.verPantalla.cambioAdministradorCuenta.administradorNombre=e.administradorNombre;break;case"[ui] ver pantalla cambio nombre cuenta":i.verPantalla.cambioNombreCuenta=e.option,i.verPantalla.cambioNombreCuentaCuenta.cuentaId=e.cuentaId,i.verPantalla.cambioNombreCuentaCuenta.cuentaNombre=e.cuentaNombre,i.verPantalla.cambioNombreCuentaCuenta.cuentaMail=e.cuentaMail,i.verPantalla.cambioNombreCuentaCuenta.administradorNombre=e.administradorNombre;break;case"[ui] ver pantalla usuario asignar":i.verPantalla.usuarioAsignar=e.option,i.verPantalla.usuarioAsignarCuenta.cuentaId=e.cuentaId,i.verPantalla.usuarioAsignarCuenta.cuentaNombre=e.cuentaNombre,i.verPantalla.usuarioAsignarCuenta.cuentaMail=e.cuentaMail,i.verPantalla.usuarioAsignarCuenta.administradorNombre=e.administradorNombre,i.verPantalla.usuarioAsignarCuenta.creditos=e.creditos;break;case"[ui] show warning":i.warning.timeStamp=(new Date).getTime(),i.warning.titulo=e.titulo,i.warning.subTitulo=e.subTitulo,i.warning.backgroundColor=e.backgroundColor,i.warning.hidden=!1,i.warning.timeOut=e.timeOut;break;case"[ui] hide warning":i.warning.timeStamp=(new Date).getTime(),i.warning.titulo="",i.warning.subTitulo="",i.warning.hidden=!0,i.warning.timeOut=1500;break;case"[ui] mapa click":i.mapa.feature=e.feature,i.mapa.event=e.event,i.mapa.timeStamp=(new Date).getTime();break;case"[ui] IDIOMA":let t=(navigator.language||navigator.userLanguage).split("-")[0].toUpperCase();"ES"!=t&&(t="ES"),i.idioma=t;break;case"[ui] urls":i.urls.servidor=e.servidor,i.urls.imagenes=e.imagenes;break;case"[ui] menu activar":i.menuActivar=(new Date).getTime()}return i},v={name:"TODO_BODY",areas:["body"]},y={name:"HEADER_BODY_FOOT",areas:["header","body","foot"]},b={name:"HEADER_BODY",areas:["header","body"]},w={splash:{small:v,medium:v,large:v},sesion:{small:v,medium:v,large:v},claveRecuperar:{small:v,medium:v,large:v},claveRecuperarMensaje:{small:v,medium:v,large:v},claveCambio:{small:v,medium:v,large:v},claveCambioMensaje:{small:v,medium:v,large:v},registro:{small:v,medium:v,large:v},registroMensaje:{small:v,medium:v,large:v},main:{small:y,medium:y,large:y},sindicato:{small:y,medium:y,large:y},salud:{small:y,medium:y,large:y},compras:{small:y,medium:y,large:y},cultura:{small:y,medium:y,large:y},tv:{small:y,medium:y,large:y},moecra:{small:y,medium:y,large:y},saludSeguridad:{small:y,medium:y,large:y},ivt:{small:y,medium:y,large:y},macro:{small:y,medium:y,large:y},cine:{small:y,medium:y,large:y},cemapsMapa:{small:y,medium:y,large:y},notificaciones:{small:y,medium:y,large:y},cartilla:{small:y,medium:y,large:y},cemapCartillaDetalle:{small:y,medium:y,large:y},cartillaDetalle:{small:y,medium:y,large:y},turnos:{small:y,medium:y,large:y},franchin:{small:y,medium:y,large:y},emergencias:{small:y,medium:y,large:y},gremioZonas:{small:y,medium:y,large:y},gremioMapa:{small:y,medium:y,large:y},gremioLista:{small:y,medium:y,large:y},gremioJuventud:{small:y,medium:y,large:y},gremioTarjetaIeric:{small:y,medium:y,large:y},gremioConvenio:{small:y,medium:y,large:y},teatroProgramacion:{small:y,medium:y,large:y},teatroProgramacionDetalle:{small:y,medium:y,large:y},teatroBoleteria:{small:y,medium:y,large:y},saludSeguridadConsultas:{small:y,medium:y,large:y},saludSeguridadDenuncia:{small:y,medium:y,large:y},cineNosotros:{small:y,medium:y,large:y},cineEdicion:{small:y,medium:y,large:y},cineTematicas:{small:y,medium:y,large:y},cineEdicionesAnteriores:{small:y,medium:y,large:y},tvCanales:{small:y,medium:y,large:y},tvEstrenos:{small:y,medium:y,large:y},bonos:{small:b,medium:b,large:b},web:{small:y,medium:y,large:y}},C=t=>{if(!t.screen.layouts[t.ui.media.size])throw"no hay un layout definido en el state para media-size:"+t.ui.media.size;let e=t.screen.layouts[t.ui.media.size];return t.screen.layouts[t.ui.media.size][t.ui.media.orientation]&&(e=t.screen.layouts[t.ui.media.size][t.ui.media.orientation]),e},x=(t,e)=>C(t).areas.find(t=>t==e),S={name:null,layouts:{small:{name:"",areas:[]},medium:{name:"",areas:[]},large:{name:"",areas:[]}},timeStamp:null},E=(t=S,e)=>{const i={...t};switch(e.type){case"[screen] show screen":i.timeStamp=(new Date).getTime(),i.layouts=e.layouts,i.name=e.name}return i},M=t=>({type:"[routing] go to",name:t}),T=t=>({type:"[routing] push history",name:t}),O=t=>({type:"[routing] set Current",node:t}),L={current:{pointer:0,name:""},history:[]},A=(t=L,e)=>{const i={...t};switch(e.type){case"[routing] set Current":i.current=e.node;break;case"[routing] pop history":i.history.pop();break;case"[routing] push history":[...i.history].pop()!=e.name&&i.history.push(e.name)}return i},I=t=>({type:"[app] API Show spinner",fetch:t}),j=t=>({type:"[app] API hide spinner",fetch:t}),D={loading:0,fetch:null,sentido:""},R=(t=D,e)=>{const i={...t};switch(e.type){case"[app] API Show spinner":i.loading+=1,i.fetch=e.fetch,i.sentido="ida";break;case"[app] API hide spinner":i.loading-=1,i.fetch=e.fetch,i.sentido="vuelta"}return i},z="[titulos] GET",k="[titulos] EDIT",P={entities:null,timeStamp:null,removeTimeStamp:null,updateTimeStamp:null,addTimeStamp:null,errorTimeStamp:null,commandErrorTimeStamp:null,editTimeStamp:null},N=(t=P,e)=>{const i={...t};switch(e.type){case"[titulos] GET success":i.entities=e.payload.receive,i.timeStamp=(new Date).getTime();break;case k:i.editTimeStamp=(new Date).getTime(),i.entities.currentItem=e.item,i.modo=e.modo;break;case"[titulos] UPDATE success":case"[titulos] PATCH success":i.updateTimeStamp=(new Date).getTime();break;case"[titulos] REMOVE success":i.removeTimeStamp=(new Date).getTime();break;case"[titulos] ADD success":i.addTimeStamp=(new Date).getTime();break;case"[titulos] GET error":i.errorTimeStamp=(new Date).getTime();break;case"[titulos] UPDATE error":case"[titulos] REMOVE error":case"[titulos] PATCH error":case"[titulos] ADD error":i.commandErrorTimeStamp=(new Date).getTime()}return i},V={entities:null,timeStamp:null,removeTimeStamp:null,updateTimeStamp:null,addTimeStamp:null,errorTimeStamp:null,commandErrorTimeStamp:null,editTimeStamp:null},F=(t=V,e)=>{const i={...t};switch(e.type){case"[bannes] GET success":i.entities=e.payload.receive,i.timeStamp=(new Date).getTime();break;case"[bannes] EDIT":i.editTimeStamp=(new Date).getTime(),i.entities.currentItem=e.item,i.modo=e.modo;break;case"[bannes] UPDATE success":case"[bannes] PATCH success":i.updateTimeStamp=(new Date).getTime();break;case"[bannes] REMOVE success":i.removeTimeStamp=(new Date).getTime();break;case"[bannes] ADD success":i.addTimeStamp=(new Date).getTime();break;case"[bannes] GET error":i.errorTimeStamp=(new Date).getTime();break;case"[bannes] UPDATE error":case"[bannes] REMOVE error":case"[bannes] PATCH error":case"[bannes] ADD error":i.commandErrorTimeStamp=(new Date).getTime()}return i},H={entities:null,timeStamp:null,removeTimeStamp:null,updateTimeStamp:null,addTimeStamp:null,errorTimeStamp:null,commandErrorTimeStamp:null,editTimeStamp:null},G=(t=H,e)=>{const i={...t};switch(e.type){case"[menues] GET success":i.entities=e.payload.receive,i.timeStamp=(new Date).getTime();break;case"[menues] EDIT":i.editTimeStamp=(new Date).getTime(),i.entities.currentItem=e.item,i.modo=e.modo;break;case"[menues] UPDATE success":case"[menues] PATCH success":i.updateTimeStamp=(new Date).getTime();break;case"[menues] REMOVE success":i.removeTimeStamp=(new Date).getTime();break;case"[menues] ADD success":i.addTimeStamp=(new Date).getTime();break;case"[menues] GET error":i.errorTimeStamp=(new Date).getTime();break;case"[menues] UPDATE error":case"[menues] REMOVE error":case"[menues] PATCH error":case"[menues] ADD error":i.commandErrorTimeStamp=(new Date).getTime()}return i},X={entities:null,timeStamp:null,removeTimeStamp:null,updateTimeStamp:null,addTimeStamp:null,errorTimeStamp:null,commandErrorTimeStamp:null,editTimeStamp:null},U=(t=X,e)=>{const i={...t};switch(e.type){case"[items] GET success":i.entities=e.payload.receive,i.timeStamp=(new Date).getTime();break;case"[items] EDIT":i.editTimeStamp=(new Date).getTime(),i.entities.currentItem=e.item,i.modo=e.modo;break;case"[items] UPDATE success":case"[items] PATCH success":i.updateTimeStamp=(new Date).getTime();break;case"[items] REMOVE success":i.removeTimeStamp=(new Date).getTime();break;case"[items] ADD success":i.addTimeStamp=(new Date).getTime();break;case"[items] GET error":i.errorTimeStamp=(new Date).getTime();break;case"[items] UPDATE error":case"[items] REMOVE error":case"[items] PATCH error":case"[items] ADD error":i.commandErrorTimeStamp=(new Date).getTime()}return i},B={entities:null,timeStamp:null,removeTimeStamp:null,updateTimeStamp:null,addTimeStamp:null,errorTimeStamp:null,commandErrorTimeStamp:null,editTimeStamp:null},$=(t=B,e)=>{const i={...t};switch(e.type){case"[leftmenu] GET success":i.entities=e.payload.receive,i.timeStamp=(new Date).getTime();break;case"[leftmenu] EDIT":i.editTimeStamp=(new Date).getTime(),i.entities.currentItem=e.item,i.modo=e.modo;break;case"[leftmenu] UPDATE success":case"[leftmenu] PATCH success":i.updateTimeStamp=(new Date).getTime();break;case"[leftmenu] REMOVE success":i.removeTimeStamp=(new Date).getTime();break;case"[leftmenu] ADD success":i.addTimeStamp=(new Date).getTime();break;case"[leftmenu] GET error":i.errorTimeStamp=(new Date).getTime();break;case"[leftmenu] UPDATE error":case"[leftmenu] REMOVE error":case"[leftmenu] PATCH error":case"[leftmenu] ADD error":i.commandErrorTimeStamp=(new Date).getTime()}return i},Z={entities:null,timeStamp:null,removeTimeStamp:null,updateTimeStamp:null,addTimeStamp:null,errorTimeStamp:null,commandErrorTimeStamp:null,editTimeStamp:null},Y=(t=Z,e)=>{const i={...t};switch(e.type){case"[noticias] GET success":i.entities=e.payload.receive,i.timeStamp=(new Date).getTime();break;case"[noticias] EDIT":i.editTimeStamp=(new Date).getTime(),i.entities.currentItem=e.item,i.modo=e.modo;break;case"[noticias] UPDATE success":case"[noticias] PATCH success":i.updateTimeStamp=(new Date).getTime();break;case"[noticias] REMOVE success":i.removeTimeStamp=(new Date).getTime();break;case"[noticias] ADD success":i.addTimeStamp=(new Date).getTime();break;case"[noticias] GET error":i.errorTimeStamp=(new Date).getTime();break;case"[noticias] UPDATE error":case"[noticias] REMOVE error":case"[noticias] PATCH error":case"[noticias] ADD error":i.commandErrorTimeStamp=(new Date).getTime()}return i},W={entities:null,timeStamp:null,removeTimeStamp:null,updateTimeStamp:null,addTimeStamp:null,errorTimeStamp:null,commandErrorTimeStamp:null,editTimeStamp:null,seleccion:null},q=(t=W,e)=>{const i={...t};switch(e.type){case"[localidades] GET success":i.entities=e.payload.receive,i.timeStamp=(new Date).getTime();break;case"[localidades] EDIT":i.editTimeStamp=(new Date).getTime(),i.entities.currentItem=e.item,i.modo=e.modo;break;case"[localidades] UPDATE success":case"[localidades] PATCH success":i.updateTimeStamp=(new Date).getTime();break;case"[localidades] REMOVE success":i.removeTimeStamp=(new Date).getTime();break;case"[localidades] ADD success":i.addTimeStamp=(new Date).getTime();break;case"[localidades] GET error":i.errorTimeStamp=(new Date).getTime();break;case"[localidades] UPDATE error":case"[localidades] REMOVE error":case"[localidades] PATCH error":case"[localidades] ADD error":i.commandErrorTimeStamp=(new Date).getTime();break;case"[localidades] SELECCION":i.seleccion=e.registro}return i},K={entities:null,timeStamp:null,removeTimeStamp:null,updateTimeStamp:null,addTimeStamp:null,errorTimeStamp:null,commandErrorTimeStamp:null,editTimeStamp:null},J=(t=K,e)=>{const i={...t};switch(e.type){case"[provincias] GET success":i.entities=e.payload.receive,i.timeStamp=(new Date).getTime();break;case"[provincias] EDIT":i.editTimeStamp=(new Date).getTime(),i.entities.currentItem=e.item,i.modo=e.modo;break;case"[provincias] UPDATE success":case"[provincias] PATCH success":i.updateTimeStamp=(new Date).getTime();break;case"[provincias] REMOVE success":i.removeTimeStamp=(new Date).getTime();break;case"[provincias] ADD success":i.addTimeStamp=(new Date).getTime();break;case"[provincias] GET error":i.errorTimeStamp=(new Date).getTime();break;case"[provincias] UPDATE error":case"[provincias] REMOVE error":case"[provincias] PATCH error":case"[provincias] ADD error":i.commandErrorTimeStamp=(new Date).getTime()}return i},Q={entities:null,timeStamp:null,removeTimeStamp:null,updateTimeStamp:null,addTimeStamp:null,errorTimeStamp:null,commandErrorTimeStamp:null,editTimeStamp:null,seleccion:null},tt=(t=Q,e)=>{const i={...t};switch(e.type){case"[servicios] GET success":i.entities=e.payload.receive,i.timeStamp=(new Date).getTime();break;case"[servicios] EDIT":i.editTimeStamp=(new Date).getTime(),i.entities.currentItem=e.item,i.modo=e.modo;break;case"[servicios] UPDATE success":case"[servicios] PATCH success":i.updateTimeStamp=(new Date).getTime();break;case"[servicios] REMOVE success":i.removeTimeStamp=(new Date).getTime();break;case"[servicios] ADD success":i.addTimeStamp=(new Date).getTime();break;case"[servicios] GET error":i.errorTimeStamp=(new Date).getTime();break;case"[servicios] UPDATE error":case"[servicios] REMOVE error":case"[servicios] PATCH error":case"[servicios] ADD error":i.commandErrorTimeStamp=(new Date).getTime();break;case"[servicios] SELECCION":i.seleccion=e.registro}return i},et="[cemaps] GET_MAPA_LOCALIDAD success",it=t=>({type:"[cemaps] GET_MAPA_LOCALIDAD",localidadId:t}),rt={entities:null,timeStamp:null,removeTimeStamp:null,updateTimeStamp:null,addTimeStamp:null,errorTimeStamp:null,commandErrorTimeStamp:null,editTimeStamp:null,entityMapa:null,MapaTimeStamp:null,MapaErrorTimeStamp:null},nt=(t=rt,e)=>{const i={...t};switch(e.type){case"[cemaps] GET success":i.entities=e.payload.receive,i.timeStamp=(new Date).getTime();break;case"[cemaps] EDIT":i.editTimeStamp=(new Date).getTime(),i.entities.currentItem=e.item,i.modo=e.modo;break;case"[cemaps] UPDATE success":case"[cemaps] PATCH success":i.updateTimeStamp=(new Date).getTime();break;case"[cemaps] REMOVE success":i.removeTimeStamp=(new Date).getTime();break;case"[cemaps] ADD success":i.addTimeStamp=(new Date).getTime();break;case"[cemaps] GET error":i.errorTimeStamp=(new Date).getTime();break;case"[cemaps] UPDATE error":case"[cemaps] REMOVE error":case"[cemaps] PATCH error":case"[cemaps] ADD error":i.commandErrorTimeStamp=(new Date).getTime();break;case et:i.entityMapa=e.payload.receive,i.MapaTimeStamp=(new Date).getTime();break;case"[cemaps] GET_MAPA_LOCALIDAD error":i.entityMapa=null,i.MapaErrorTimeStamp=(new Date).getTime()}return i},ot=t=>({type:"[seccionales] GET_MAPA_LOCALIDAD",zonaId:t}),at={entities:null,timeStamp:null,removeTimeStamp:null,updateTimeStamp:null,addTimeStamp:null,errorTimeStamp:null,commandErrorTimeStamp:null,editTimeStamp:null,entityMapa:null,MapaTimeStamp:null,MapaErrorTimeStamp:null},st=(t=at,e)=>{const i={...t};switch(e.type){case"[seccionales] GET success":i.entities=e.payload.receive,i.timeStamp=(new Date).getTime();break;case"[seccionales] EDIT":i.editTimeStamp=(new Date).getTime(),i.entities.currentItem=e.item,i.modo=e.modo;break;case"[seccionales] UPDATE success":case"[seccionales] PATCH success":i.updateTimeStamp=(new Date).getTime();break;case"[seccionales] REMOVE success":i.removeTimeStamp=(new Date).getTime();break;case"[seccionales] ADD success":i.addTimeStamp=(new Date).getTime();break;case"[seccionales] GET error":i.errorTimeStamp=(new Date).getTime();break;case"[seccionales] UPDATE error":case"[seccionales] REMOVE error":case"[seccionales] PATCH error":case"[seccionales] ADD error":i.commandErrorTimeStamp=(new Date).getTime();break;case"[seccionales] GET_MAPA_LOCALIDAD success":i.entityMapa=e.payload.receive,i.MapaTimeStamp=(new Date).getTime();break;case"[seccionales] GET_MAPA_LOCALIDAD error":i.entityMapa=null,i.MapaErrorTimeStamp=(new Date).getTime()}return i},ct={entities:null,timeStamp:null,removeTimeStamp:null,updateTimeStamp:null,addTimeStamp:null,errorTimeStamp:null,commandErrorTimeStamp:null,editTimeStamp:null},lt=(t=ct,e)=>{const i={...t};switch(e.type){case"[zonas] GET success":i.entities=e.payload.receive,i.timeStamp=(new Date).getTime();break;case"[zonas] EDIT":i.editTimeStamp=(new Date).getTime(),i.entities.currentItem=e.item,i.modo=e.modo;break;case"[zonas] UPDATE success":case"[zonas] PATCH success":i.updateTimeStamp=(new Date).getTime();break;case"[zonas] REMOVE success":i.removeTimeStamp=(new Date).getTime();break;case"[zonas] ADD success":i.addTimeStamp=(new Date).getTime();break;case"[zonas] GET error":i.errorTimeStamp=(new Date).getTime();break;case"[zonas] UPDATE error":case"[zonas] REMOVE error":case"[zonas] PATCH error":case"[zonas] ADD error":i.commandErrorTimeStamp=(new Date).getTime()}return i},dt={entities:null,timeStamp:null,removeTimeStamp:null,updateTimeStamp:null,addTimeStamp:null,errorTimeStamp:null,commandErrorTimeStamp:null,editTimeStamp:null},ut=(t=dt,e)=>{const i={...t};switch(e.type){case"[convenios] GET success":i.entities=e.payload.receive,i.timeStamp=(new Date).getTime();break;case"[convenios] EDIT":i.editTimeStamp=(new Date).getTime(),i.entities.currentItem=e.item,i.modo=e.modo;break;case"[convenios] UPDATE success":case"[convenios] PATCH success":i.updateTimeStamp=(new Date).getTime();break;case"[convenios] REMOVE success":i.removeTimeStamp=(new Date).getTime();break;case"[convenios] ADD success":i.addTimeStamp=(new Date).getTime();break;case"[convenios] GET error":i.errorTimeStamp=(new Date).getTime();break;case"[convenios] UPDATE error":case"[convenios] REMOVE error":case"[convenios] PATCH error":case"[convenios] ADD error":i.commandErrorTimeStamp=(new Date).getTime()}return i},pt="[programacion] RESERVA",ht=t=>({type:pt,registro:t}),ft={entities:null,timeStamp:null,removeTimeStamp:null,updateTimeStamp:null,addTimeStamp:null,errorTimeStamp:null,commandErrorTimeStamp:null,editTimeStamp:null,entityMapa:null,reserva:null,reservaTimeStamp:null},mt=(t=ft,e)=>{const i={...t};switch(e.type){case"[programacion] GET success":i.entities=e.payload.receive,i.timeStamp=(new Date).getTime();break;case"[programacion] EDIT":i.editTimeStamp=(new Date).getTime(),i.entities.currentItem=e.item,i.modo=e.modo;break;case"[programacion] UPDATE success":case"[programacion] PATCH success":i.updateTimeStamp=(new Date).getTime();break;case"[programacion] REMOVE success":i.removeTimeStamp=(new Date).getTime();break;case"[programacion] ADD success":i.addTimeStamp=(new Date).getTime();break;case"[programacion] GET error":i.errorTimeStamp=(new Date).getTime();break;case"[programacion] UPDATE error":case"[programacion] REMOVE error":case"[programacion] PATCH error":case"[programacion] ADD error":i.commandErrorTimeStamp=(new Date).getTime();break;case pt:i.reserva=e.registro,i.reservaTimeStamp=(new Date).getTime()}return i},gt={entities:null,timeStamp:null,removeTimeStamp:null,updateTimeStamp:null,addTimeStamp:null,errorTimeStamp:null,commandErrorTimeStamp:null,editTimeStamp:null},vt=(t=gt,e)=>{const i={...t};switch(e.type){case"[leyendas] GET success":i.entities=e.payload.receive,i.timeStamp=(new Date).getTime();break;case"[leyendas] EDIT":i.editTimeStamp=(new Date).getTime(),i.entities.currentItem=e.item,i.modo=e.modo;break;case"[leyendas] UPDATE success":case"[leyendas] PATCH success":i.updateTimeStamp=(new Date).getTime();break;case"[leyendas] REMOVE success":i.removeTimeStamp=(new Date).getTime();break;case"[leyendas] ADD success":i.addTimeStamp=(new Date).getTime();break;case"[leyendas] GET error":i.errorTimeStamp=(new Date).getTime();break;case"[leyendas] UPDATE error":case"[leyendas] REMOVE error":case"[leyendas] PATCH error":case"[leyendas] ADD error":i.commandErrorTimeStamp=(new Date).getTime()}return i},yt=t=>({type:"[edicionesAnteriores] GET",options:t}),bt={entities:null,timeStamp:null,removeTimeStamp:null,updateTimeStamp:null,addTimeStamp:null,errorTimeStamp:null,commandErrorTimeStamp:null,editTimeStamp:null},_t=(t=bt,e)=>{const i={...t};switch(e.type){case"[edicionesAnteriores] GET success":i.entities=e.payload.receive,i.timeStamp=(new Date).getTime();break;case"[edicionesAnteriores] EDIT":i.editTimeStamp=(new Date).getTime(),i.entities.currentItem=e.item,i.modo=e.modo;break;case"[edicionesAnteriores] UPDATE success":case"[edicionesAnteriores] PATCH success":i.updateTimeStamp=(new Date).getTime();break;case"[edicionesAnteriores] REMOVE success":i.removeTimeStamp=(new Date).getTime();break;case"[edicionesAnteriores] ADD success":i.addTimeStamp=(new Date).getTime();break;case"[edicionesAnteriores] GET error":i.errorTimeStamp=(new Date).getTime();break;case"[edicionesAnteriores] UPDATE error":case"[edicionesAnteriores] REMOVE error":case"[edicionesAnteriores] PATCH error":case"[edicionesAnteriores] ADD error":i.commandErrorTimeStamp=(new Date).getTime()}return i},wt={entities:null,timeStamp:null,removeTimeStamp:null,updateTimeStamp:null,addTimeStamp:null,errorTimeStamp:null,commandErrorTimeStamp:null,editTimeStamp:null},Ct=(t=wt,e)=>{const i={...t};switch(e.type){case"[tvEstrenos] GET success":i.entities=e.payload.receive,i.timeStamp=(new Date).getTime();break;case"[tvEstrenos] EDIT":i.editTimeStamp=(new Date).getTime(),i.entities.currentItem=e.item,i.modo=e.modo;break;case"[tvEstrenos] UPDATE success":case"[tvEstrenos] PATCH success":i.updateTimeStamp=(new Date).getTime();break;case"[tvEstrenos] REMOVE success":i.removeTimeStamp=(new Date).getTime();break;case"[tvEstrenos] ADD success":i.addTimeStamp=(new Date).getTime();break;case"[tvEstrenos] GET error":i.errorTimeStamp=(new Date).getTime();break;case"[tvEstrenos] UPDATE error":case"[tvEstrenos] REMOVE error":case"[tvEstrenos] PATCH error":case"[tvEstrenos] ADD error":i.commandErrorTimeStamp=(new Date).getTime()}return i},xt=[({dispatch:t})=>e=>i=>{if(e(i),"[ui] capture media"==i.type){const e=window.matchMedia("(max-width: 600px)");e.addListener(e=>{e.matches&&t(p("small"))});const i=window.matchMedia("(max-width: 800px) and (min-width: 601px)");i.addListener(e=>{e.matches&&t(p("medium"))});const r=window.matchMedia("(min-width: 801px)");r.addListener(e=>{e.matches&&t(p("large"))});const n=window.matchMedia("(orientation:landscape)");n.addListener(e=>{e.matches&&t(h("landscape"))});const o=window.matchMedia("(orientation:portrait)");o.addListener(e=>{e.matches&&t(h("portrait"))}),e.matches&&t(p("small")),i.matches&&t(p("medium")),r.matches&&t(p("large")),n.matches&&t(h("landscape")),o.matches&&t(h("portrait"))}}],St=(t,e)=>{const i=t.split("/"),r=e.split("/");return i.pop(),r.pop(),i.join()==r.join()},Et=(t,e)=>t.trim().split("/").length-1==e.trim().split("/").length,Mt=(t,e)=>e.findIndex(e=>e.split("-")[1]==t),Tt=(t,e)=>({pointer:t,name:e[t].split("-")[1].trim()}),Ot=["1 -splash","2 -sesion","3.1 -main","3.1.1 -sindicato","3.1.1.1 -gremioZonas","3.1.1.1.1 -gremioMapa","3.1.1.1.2 -gremioLista","3.1.1.2 -gremioJuventud","3.1.1.3 -gremioTarjetaIeric","3.1.1.4 -gremioConvenio","3.2.2 -salud","3.2.2.1 -cartilla","3.1.2.1.1 -cemapCartillaDetalle","3.1.2.1.2 -cartillaDetalle","3.1.2.1.2 -cemapsMapa","3.1.2.2 -turnos","3.1.2.3 -franchin","3.1.2.4 -emergencias","3.1.3 -moecra","3.1.3.1 -compras","3.1.4 -cultura","3.1.4.1 -teatroProgramacion","3.1.4.1.1 -teatroProgramacionDetalle","3.1.4.3 -teatroBoleteria","3.1.5 -tv","3.1.5.1 -tvCanales","3.1.5.2 -tvEstrenos","3.1.6 -saludSeguridad","3.1.6.1 -saludSeguridadConsultas","3.1.6.2 -saludSeguridadDenuncia","3.1.7 -ivt","3.1.8 -macro","3.1.8 -cine","3.1.8.1 -cineNosotros","3.1.8.2 -cineEdicion","3.1.8.3 -cineTematicas","3.1.8.4 -cineEdicionesAnteriores","3.2 -registro","3.3 -registroMensaje","3.4 -claveRecuperar","3.5 -claveRecuperarMensaje","3.6 -claveCambio","3.7 -claveCambioMensaje","4 -notificaciones","5 -web"],Lt=[({dispatch:t,getState:e})=>i=>r=>{if(i(r),"[routing] go next"==r.type){let i=((t,e)=>{let i=t,r=e[t].split("-")[0];for(;t<e.length-1;){let i=e[t+=1].split("-")[0];if(St(r,i))return t}return i})(e().routing.current.pointer,Ot);t(O(Tt(i,Ot))),t(T(i))}},({dispatch:t,getState:e})=>i=>r=>{if(i(r),"[routing] go prev"==r.type){let i=((t,e)=>{let i=e[t].split("-")[0];for(;t>0;){let r=e[t-=1].split("-")[0];if(St(i,r)||Et(i,r))return t}return t})(e().routing.current.pointer,Ot);t(O(Tt(i,Ot))),t({type:"[routing] pop history"})}},({dispatch:t,getState:e})=>e=>i=>{if(e(i),"[routing] go to"==i.type)if("login"==i.name)toogleLogin();else{let e=Mt(i.name,Ot);t(O(Tt(e,Ot))),t(T(i.name))}},({dispatch:t,getState:e})=>i=>r=>{var n;i(r),"[routing] set Current"==r.type&&t({type:"[screen] show screen",name:n=e().routing.current.name,layouts:w[n]})},({dispatch:t,getState:e})=>i=>r=>{if(i(r),"[routing] go history prev"==r.type){let i=e().routing.history;if(i.length>1){let e=Mt(i[i.length-2],Ot);t(O(Tt(e,Ot))),t({type:"[routing] pop history"})}else{let e=Mt(Ot[0].split("-")[1],Ot);t(O(Tt(e,Ot))),t({type:"[routing] pop history"})}}}];const At=[({dispatch:t})=>e=>i=>{if(e(i),i.type===z){t({type:"[titulos] GET success",payload:{send:1,receive:[{id:1,tipo:"sindicato",titulo:"",activo:!0},{id:2,tipo:"salud",titulo:"https://www.uocra.net/App/titulos/construirsalud.gif",activo:!0},{id:3,tipo:"cultura",titulo:"https://www.uocra.net/App/titulos/cultura.gif",activo:!0},{id:4,tipo:"tv",titulo:"https://www.uocra.net/App/titulos/tv1.gif",activo:!0},{id:5,tipo:"moecra",titulo:"https://www.uocra.net/App/titulos/moecraAzulNegroLogo.png",activo:!0},{id:6,tipo:"saludSeguridad",titulo:"https://www.uocra.net/App/titulos/saludSeguridad.gif",activo:!0},{id:7,tipo:"ivt",titulo:"https://www.uocra.net/App/titulos/ivt.gif",activo:!0},{id:8,tipo:"cine",titulo:"https://www.uocra.net/App/titulos/cine.gif",activo:!0}]}})}},({dispatch:t})=>t=>e=>{t(e),e.type},({dispatch:t})=>t=>e=>{t(e),e.type},({dispatch:t})=>t=>e=>{t(e),e.type},({dispatch:t})=>t=>e=>{t(e),e.type},({dispatch:t})=>t=>e=>{t(e),e.type},({dispatch:t})=>t=>e=>{t(e),"[titulos] ADD success"===e.type||"[titulos] UPDATE success"===e.type||"[titulos] REMOVE success"===e.type||e.type},({dispatch:t})=>t=>e=>{t(e),"[titulos] GET error"===e.type||"[titulos] ADD error"===e.type||"[titulos] UPDATE error"===e.type||"[titulos] REMOVE error"===e.type||e.type}],It=[({dispatch:t})=>e=>i=>{if(e(i),"[bannes] GET"===i.type){t({type:"[bannes] GET success",payload:{send:1,receive:[{id:1,tipo:"sindicato",banner:"https://www.uocra.net/App/banners/bannerSindicato.gif",orden:1,activo:!0},{id:2,tipo:"salud",banner:"",orden:1,activo:!0},{id:3,tipo:"cultura",banner:"https://www.uocra.net/App/banners/bannerCultura.gif",orden:1,activo:!0},{id:4,tipo:"tv",banner:"https://www.uocra.net/App/banners/bannerTv.gif",orden:1,activo:!0},{id:5,tipo:"moecra",banner:"https://www.uocra.net/App/banners/bannerMoecra.gif",orden:1,activo:!0},{id:6,tipo:"saludSeguridad",banner:"https://www.uocra.net/App/banners/bannerSaludSeguridad.gif",orden:1,activo:!0},{id:7,tipo:"ivt",banner:"https://www.uocra.net/App/banners/bannerIvt.gif",orden:1,activo:!0},{id:8,tipo:"cine",banner:"https://www.uocra.net/App/banners/bannerCine.gif",orden:1,activo:!0}]}})}},({dispatch:t})=>t=>e=>{t(e),e.type},({dispatch:t})=>t=>e=>{t(e),e.type},({dispatch:t})=>t=>e=>{t(e),e.type},({dispatch:t})=>t=>e=>{t(e),e.type},({dispatch:t})=>t=>e=>{t(e),e.type},({dispatch:t})=>t=>e=>{t(e),"[bannes] ADD success"===e.type||"[bannes] UPDATE success"===e.type||"[bannes] REMOVE success"===e.type||e.type},({dispatch:t})=>t=>e=>{t(e),"[bannes] GET error"===e.type||"[bannes] ADD error"===e.type||"[bannes] UPDATE error"===e.type||"[bannes] REMOVE error"===e.type||e.type}],jt=[({dispatch:t})=>e=>i=>{if(e(i),"[menues] GET"===i.type){t({type:"[menues] GET success",payload:{send:1,receive:[{id:1,tipo:"sindicato",nombre:"SECCIONALES",imagen:"SECCIONALES",div:"datos",clase:"opc1 blanco fondoPrimario",goto:"gremioZonas"},{id:2,tipo:"sindicato",nombre:"CONVENIOS",imagen:"CONVENIOS",div:"datos",clase:"opc2 blanco fondoGris",goto:"gremioConvenio"},{id:3,tipo:"sindicato",nombre:"JUVENTUD",imagen:"JUVENTUD",div:"datos",clase:"opc2 blanco fondoAmarillo",goto:"gremioJuventud"},{id:4,tipo:"sindicato",nombre:"TARJETA IERIC",imagen:"TARJETAIERIC",div:"datos",clase:"opc3 blanco fondoVerde",goto:"gremioTarjetaIeric"},{id:1,tipo:"salud",nombre:"CARTILLA MÉDICA",imagen:"CARTILLA",div:"datos",clase:"opc1 blanco fondoVerde",goto:"cartilla"},{id:2,tipo:"salud",nombre:"TURNOS",imagen:"TURNOS",div:"datos",clase:"opc2 blanco fondoGris",goto:"turnos"},{id:3,tipo:"salud",nombre:"SANATORIO FRANCHIN",imagen:"CENTROMEDICO",div:"datos",clase:"opc2 blanco fondoAmarillo",goto:"franchin"},{id:4,tipo:"salud",nombre:"URGENCIAS",imagen:"URGENCIAS",div:"datos",clase:"opc3 blanco fondoPrimario",goto:"emergencias"},{id:1,tipo:"cultura",nombre:"PROGRAMACION",imagen:"PROGRAMACION",div:"datos",clase:"opc1 blanco fondoPrimario",goto:"teatroProgramacion"},{id:2,tipo:"cultura",nombre:"EN EL TEATRO",imagen:"OBRASINFANTILES",div:"datos",clase:"opc2 blanco fondoGris",goto:"cemapsMapa"},{id:3,tipo:"cultura",nombre:"SHOW ON LINE",imagen:"YOUTUBE",div:"datos",clase:"opc2 blanco fondoAmarillo",goto:"HTTPS://www.youtube.com/UOCRACultura"},{id:4,tipo:"cultura",nombre:"BOLETERIA",imagen:"BOLETRERIA",div:"datos",clase:"opc3 blanco fondoVerde",goto:"teatroBoleteria"},{id:1,tipo:"tv",nombre:"GRILLA",imagen:"GRILLA",div:"datos",clase:"opc1 blanco fondoPrimario",goto:"cemapsMapa"},{id:2,tipo:"tv",nombre:"ESTRENOS",imagen:"ESTRENOS",div:"datos",clase:"opc2 blanco fondoVerde",goto:"tvEstrenos"},{id:3,tipo:"tv",nombre:"DÓNDE VERNOS",imagen:"DONDEVERNOS",div:"datos",clase:"opc2 blanco fondoGris",goto:"tvCanales"},{id:4,tipo:"tv",nombre:"PROGRAMAS ONLINE",imagen:"YOUTUBE",div:"datos",clase:"opc3 blanco fondoAmarillo",goto:"cemapsMapa"},{id:1,tipo:"moecra",nombre:"MOTOS",imagen:"MOTOS",div:"datos",clase:"opc1 blanco fondoPrimario",goto:"cemapsMapa"},{id:2,tipo:"moecra",nombre:"DESCUENTOS",imagen:"DESCUENTOS",div:"datos",clase:"opc2 blanco fondoVerde",goto:"cemapsMapa"},{id:3,tipo:"moecra",nombre:"ALIMENTOS",imagen:"ALIMENTOS",div:"datos",clase:"opc2 blanco fondoGris",goto:"cemapsMapa"},{id:4,tipo:"moecra",nombre:"HERRAMIENTAS",imagen:"HERRAMIENTAS",div:"datos",clase:"opc3 blanco fondoAmarillo",goto:"cemapsMapa"},{id:1,tipo:"saludSeguridad",nombre:"CONSULTAS",imagen:"",div:"datos2",clase:"opc21 blanco fondoPrimario",goto:"saludSeguridadConsultas"},{id:2,tipo:"saludSeguridad",nombre:"DENUNCIAS",imagen:"",div:"datos2",clase:"opc22 blanco fondoVerde",goto:"saludSeguridadDenuncia"},{id:1,tipo:"ivt",nombre:"",imagen:"",div:"",clase:"",goto:""},{id:1,tipo:"cine",nombre:"SOBRE NOSOTROS",imagen:"CINE",div:"datos",clase:"opc1 blanco fondoVerde",goto:"cineNosotros"},{id:2,tipo:"cine",nombre:"EDICION 2021",imagen:"CINECARTON",div:"datos",clase:"opc2 blanco fondoGris",goto:"cineEdicion"},{id:3,tipo:"cine",nombre:"TEMÁTICAS",imagen:"CAMARA",div:"datos",clase:"opc2 blanco fondoAmarillo",goto:"cineTematicas"},{id:4,tipo:"cine",nombre:"EDICIONES ANTERIORES",imagen:"CINEROLLO",div:"datos",clase:"opc3 blanco fondoPrimario",goto:"cineEdicionesAnteriores"}]}})}},({dispatch:t})=>t=>e=>{t(e),e.type},({dispatch:t})=>t=>e=>{t(e),e.type},({dispatch:t})=>t=>e=>{t(e),e.type},({dispatch:t})=>t=>e=>{t(e),e.type},({dispatch:t})=>t=>e=>{t(e),e.type},({dispatch:t})=>t=>e=>{t(e),"[menues] ADD success"===e.type||"[menues] UPDATE success"===e.type||"[menues] REMOVE success"===e.type||e.type},({dispatch:t})=>t=>e=>{t(e),"[menues] GET error"===e.type||"[menues] ADD error"===e.type||"[menues] UPDATE error"===e.type||"[menues] REMOVE error"===e.type||e.type}],Dt=[({dispatch:t})=>e=>i=>{if(e(i),"[items] GET"===i.type){t({type:"[items] GET success",payload:{send:1,receive:[{Id:"1",tipo:"cultura",titulo:"QUIENES SOMOS?",cuerpo:"<p>Construir Salud, a lo largo de más de 25 años, desarrolló una política de salud basada en la Atención Primaria de la Salud y en la Medicina Familiar como modelo.</p><p>Nuestra Obra Social a través de sus médicos de familia, no sólo trabaja en laatención de las enfermedades sino también, fundamentalmente, en laprevención de las mismas y en la promoción de la salud, mediante las más actualizadas modalidades científicas.</p><p><b>MEDICO DE FAMILIA REFERENTE</b></p><p> El médico de familia es un profesional especialista en personas, que trabaja en equipo, capaz de resolver la mayor parte de los problemas por los que consultan sus pacientes y de realizar interconsultas con los médicos especialistas cuando es necesario</p>"},{Id:"2",tipo:"cultura",titulo:"NUESTRA SALA",cuerpo:"<p>Construir Salud, a lo largo de más de 25 años, desarrolló una política de salud basada en la Atención Primaria de la Salud y en la Medicina Familiar como modelo.</p><p>Nuestra Obra Social a través de sus médicos de familia, no sólo trabaja en laatención de las enfermedades sino también, fundamentalmente, en laprevención de las mismas y en la promoción de la salud, mediante las más actualizadas modalidades científicas.</p><p><b>MEDICO DE FAMILIA REFERENTE</b></p><p> El médico de familia es un profesional especialista en personas, que trabaja en equipo, capaz de resolver la mayor parte de los problemas por los que consultan sus pacientes y de realizar interconsultas con los médicos especialistas cuando es necesario</p>"},{Id:"3",tipo:"tv",titulo:"¿QUÉ ES CONSTRUIR TV?",cuerpo:"<p><b>Un Canal Temático</b></p><p>Construir TV es un canal temático que propone una mirada innovadora y positiva acerca del mundo del trabajo y de los trabajadores, a través de contenidos multiplataforma de calidad internacional. Una programación que recorre toda la cadena de valor del mundo laboral y tiene como objetivo la revalorización de la cultura del trabajo. En Construir TV entendemos como trabajador a cada persona que, con su esfuerzo cotidiano, aporta y modifica la sociedad en la que vive, ya sea a través de su profesión, su oficio o su arte.</p><p><b>Nuestros Cuatro Ejes</b></p><p>Con una amplia variedad de trabajos y trabajadores en pantalla y una mirada social, los contenidos están basados en 4 ejes temáticos: <b>Gente –Educación – Industria – Dimensión Social.</b></p><p><li><b>Gente</b></li></p><p>Historias de vida contadas en primera persona donde los protagonistas son los propios trabajadores. Recorremos su realidad y sus sueños a traves de historias intímas y conmovedoras que dejan al descubierto el aporte de cada individuo en la concreción de una​ obra o proyecto. ​</p><p><li><b>Educación</b></li></p><p>La formación contribuye a mejorar la competitividad y la calidad de vida.​ ​Contenidos pensados para educar desde el entretenimiento, formatos innovadores que apuestan a la educación como pieza fundamental del progreso individual y de la sociedad en su conjunto.</p><p><li><b>Industria</b></li></p><p>La industria es el escenario de encuentro entre recursos técnologicos y humanos. En este eje se evidencia el rol del emprendedorismo, la actividad empresarial, los avances cientificos y tecnologicos, la participación del estado, el rol sindical y el capital humano. Progamas pensados para abordar cada uno de estos roles y, principalmente, el resultado de la interacción de todos ellos en el desarrrollo de una industria.</p><p><li><b>Dimensión Social</b></li></p><p>Pilar fundamental en la construcción del tejido productivo de un país, en Construir TV entendemos el aspecto social como la base sobre la cual deben construirse mejores sociedades. Documentales de alto impacto y mirada internacional que llevan a la pantalla temas como: Solidaridad: las personas se unen, arman redes y hacen que las cosas que parecían imposibles se hagan realidad.</p>"},{Id:"4",tipo:"tv",titulo:"SUMATE A NUESTRA COMUNIDAD",cuerpo:"<p>Unite a la Comunidad de Construir TV en <b>Facebook!</b></p><p>COMUNIDAD CONSTRUIR TV</p><p>CONSTRUIR MADERA</p><p>CONSTRUIR ACCESIBILIDAD</p><p>CONSTRUIR NATURAL</p><p>CONSTRUIR HUERTAS Y JARDINES</p>"},{Id:"5",tipo:"moecra",titulo:"QUIENES SOMOS?",cuerpo:"<p>Construir Salud, a lo largo de más de 25 años, desarrolló una política de salud basada en la Atención Primaria de la Salud y en la Medicina Familiar como modelo.</p><p>Nuestra Obra Social a través de sus médicos de familia, no sólo trabaja en laatención de las enfermedades sino también, fundamentalmente, en laprevención de las mismas y en la promoción de la salud, mediante las más actualizadas modalidades científicas.</p><p><b>MEDICO DE FAMILIA REFERENTE</b></p><p> El médico de familia es un profesional especialista en personas, que trabaja en equipo, capaz de resolver la mayor parte de los problemas por los que consultan sus pacientes y de realizar interconsultas con los médicos especialistas cuando es necesario</p>"},{Id:"6",tipo:"moecra",titulo:"COMO COMPRAR?",cuerpo:"<p>Construir Salud, a lo largo de más de 25 años, desarrolló una política de salud basada en la Atención Primaria de la Salud y en la Medicina Familiar como modelo.</p><p>Nuestra Obra Social a través de sus médicos de familia, no sólo trabaja en laatención de las enfermedades sino también, fundamentalmente, en laprevención de las mismas y en la promoción de la salud, mediante las más actualizadas modalidades científicas.</p><p><b>MEDICO DE FAMILIA REFERENTE</b></p><p> El médico de familia es un profesional especialista en personas, que trabaja en equipo, capaz de resolver la mayor parte de los problemas por los que consultan sus pacientes y de realizar interconsultas con los médicos especialistas cuando es necesario</p>"},{Id:"7",tipo:"salud",titulo:"MODELO DE ATENCIÓN",cuerpo:"<p>Construir Salud, a lo largo de más de 25 años, desarrolló una política de salud basada en la Atención Primaria de la Salud y en la Medicina Familiar como modelo.</p><p>Nuestra Obra Social a través de sus médicos de familia, no sólo trabaja en laatención de las enfermedades sino también, fundamentalmente, en laprevención de las mismas y en la promoción de la salud, mediante las más actualizadas modalidades científicas.</p><p><b>MEDICO DE FAMILIA REFERENTE</b></p><p> El médico de familia es un profesional especialista en personas, que trabaja en equipo, capaz de resolver la mayor parte de los problemas por los que consultan sus pacientes y de realizar interconsultas con los médicos especialistas cuando es necesario</p>"},{Id:"8",tipo:"salud",titulo:"PLAN MATERNO INFANTIL",cuerpo:"<p>Construir Salud, a lo largo de más de 25 años, desarrolló una política de salud basada en la Atención Primaria de la Salud y en la Medicina Familiar como modelo.</p><p>Nuestra Obra Social a través de sus médicos de familia, no sólo trabaja en laatención de las enfermedades sino también, fundamentalmente, en laprevención de las mismas y en la promoción de la salud, mediante las más actualizadas modalidades científicas.</p><p><b>MEDICO DE FAMILIA REFERENTE</b></p><p> El médico de familia es un profesional especialista en personas, que trabaja en equipo, capaz de resolver la mayor parte de los problemas por los que consultan sus pacientes y de realizar interconsultas con los médicos especialistas cuando es necesario</p>"},{Id:"9",tipo:"salud",titulo:"AFILIACIONES",cuerpo:"<p>Construir Salud, a lo largo de más de 25 años, desarrolló una política de salud basada en la Atención Primaria de la Salud y en la Medicina Familiar como modelo.</p><p>Nuestra Obra Social a través de sus médicos de familia, no sólo trabaja en laatención de las enfermedades sino también, fundamentalmente, en laprevención de las mismas y en la promoción de la salud, mediante las más actualizadas modalidades científicas.</p><p><b>MEDICO DE FAMILIA REFERENTE</b></p><p> El médico de familia es un profesional especialista en personas, que trabaja en equipo, capaz de resolver la mayor parte de los problemas por los que consultan sus pacientes y de realizar interconsultas con los médicos especialistas cuando es necesario</p>"},{Id:"10",tipo:"salud",titulo:"SANATORIO FRANCHÍN",cuerpo:"<p>Construir Salud, a lo largo de más de 25 años, desarrolló una política de salud basada en la Atención Primaria de la Salud y en la Medicina Familiar como modelo.</p><p>Nuestra Obra Social a través de sus médicos de familia, no sólo trabaja en laatención de las enfermedades sino también, fundamentalmente, en laprevención de las mismas y en la promoción de la salud, mediante las más actualizadas modalidades científicas.</p><p><b>MEDICO DE FAMILIA REFERENTE</b></p><p> El médico de familia es un profesional especialista en personas, que trabaja en equipo, capaz de resolver la mayor parte de los problemas por los que consultan sus pacientes y de realizar interconsultas con los médicos especialistas cuando es necesario</p>"},{Id:"11",tipo:"sindicato",titulo:"ASUNTOS LABORALES",cuerpo:"<p>Construir Salud, a lo largo de más de 25 años, desarrolló una política de salud basada en la Atención Primaria de la Salud y en la Medicina Familiar como modelo.</p><p>Nuestra Obra Social a través de sus médicos de familia, no sólo trabaja en laatención de las enfermedades sino también, fundamentalmente, en laprevención de las mismas y en la promoción de la salud, mediante las más actualizadas modalidades científicas.</p><p><b>MEDICO DE FAMILIA REFERENTE</b></p><p> El médico de familia es un profesional especialista en personas, que trabaja en equipo, capaz de resolver la mayor parte de los problemas por los que consultan sus pacientes y de realizar interconsultas con los médicos especialistas cuando es necesario</p>"},{Id:"12",tipo:"sindicato",titulo:"JUBILACIONES",cuerpo:"<p>Construir Salud, a lo largo de más de 25 años, desarrolló una política de salud basada en la Atención Primaria de la Salud y en la Medicina Familiar como modelo.</p><p>Nuestra Obra Social a través de sus médicos de familia, no sólo trabaja en laatención de las enfermedades sino también, fundamentalmente, en laprevención de las mismas y en la promoción de la salud, mediante las más actualizadas modalidades científicas.</p><p><b>MEDICO DE FAMILIA REFERENTE</b></p><p> El médico de familia es un profesional especialista en personas, que trabaja en equipo, capaz de resolver la mayor parte de los problemas por los que consultan sus pacientes y de realizar interconsultas con los médicos especialistas cuando es necesario</p>"},{Id:"13",tipo:"saludSeguridad",titulo:"OBJETIVOS Y ÁREAS DE TRABAJO",cuerpo:"El Departamento de Salud y Seguridad tiene como objetivo desarrollar acciones técnico-profesionales y sindicales para mejorar las condiciones y medioambiente de trabajo de las y los trabajadores constructores.<p>Contamos con 4 áreas de trabajo:</p><li><b>Gestión y Relevamiento de Obras</b> que se encarga de procesar la información obtenida de las acciones de relevamiento en las obras en construcción.<li><b>Coordinación, Comunicación e Información</b> que coordina y articula actividades institucionales con diferentes organismos.</li><li><b>Ambiente y Desarrollo Sustentable </b>que tiene por objetivo difundir y promover el uso de las Buenas Prácticas Ambientales en la construcción.</li><li><b>Capacitación y Asistencia Técnica</b> que colabora con la generación, puesta en marcha y seguimiento de Comités de Salud y Seguridad, a fin de ayudar a establecer medidas preventivas en grandes obras.</li>"},{Id:"14",tipo:"saludSeguridad",titulo:"PROTOCOLOS COVID-19",cuerpo:"En el marco de un trabajo en conjunto con las cámaras empresarias representativas de la industria de la construcción, la UOCRA elaboró una serie de protocolos con recomendaciones prácticas de protección y prevención para favorecer la protección de la Salud y Seguridad de las trabajadoras y los trabajadores para hacer frente al COVID-19. <p><li><b>Nuevo Protocolo Covid-19 | Industria del Hormigón Elaborado versión 2.0</b></li></p><p><li><b>Protocolo de Recomendaciones Prácticas Covid-19 | Obras de redes de acceso, distribución y transporte bajo CCT 577/10 Versión 2.0</b></li></p><p><li><b>Protocolo de Recomendaciones Prácticas para la Industria de la Construcción Versión 3.0</b></li></p><p><li><b>Nuevo protocolo Covid-19 | Industria del Hormigón Elaborado</b></li></p><p><li><b>Protocolo de recomendaciones prácticas Covid-19 / Industria de la construcción - Traslado de los trabajadores</li></p><p><li><b>Protocolo de Recomendaciones prácticas Covid-19 | Obras de redes de acceso, distribución y trasporte bajo CCT 557/10</b></li></p><p><li><b>Protocolo de RecomendacionesPrácticas para la Industria de la Construcción Versión 2.0</b></li></p><p><li><b>Protocolo de Recomendaciones Prácticas para la Industria de la Construcción Versión 1.0</b></li></p>"},{Id:"15",tipo:"ivt",titulo:"ACCEDER A UNA VIVIENDA",cuerpo:"<p>Las inscripciones para acceder a una vivienda se realizan a través de las seccionales de UOCRA correspondientes, donde la persona será atendida por un representante del IVT.</p><p>La inscripción podrá realizarse una vez que la obra se encuentre en marcha.</p><p>Requisitos:</p><p><li>Estar inscriptos en el Instituto Provincial de Vivienda correspondiente a la Obra.</li></p><p><li>No tener vivienda propia.</li></p><p><li>Constituir un grupo familiar.</li></p>"},{Id:"16",tipo:"ivt",titulo:"OBRAS EN EJECUCIÓN",cuerpo:"<p><b>27 Viviendas (Pre-Adjudicadas)</b> en Olavarría, Provincia de Buenos Aires.</p>"},{Id:"17",tipo:"ivt",titulo:"OBRAS A COMENZAR",cuerpo:"<p><b>300 Viviendas</b> en Cerrillo, Provincia de Salta.</p>"},{Id:"18",tipo:"ivt",titulo:"OBRAS EN PROYECTO",cuerpo:"<p><b>50 Viviendas en Tapalqué</b>, Provincia de Buenos Aires.</p><p><b>50 Viviendas en Tres Arroyos</b>, Provincia de Buenos Aires.</p><p><b>98 Viviendas en San Nicolás</b>, Provincia de Buenos Aires.</p><p><b>1200 Viviendas en Posadas</b>, Provincia de Misiones.</p><p><b>50 Viviendas en Azul</b>, Provincia de Buenos Aires.</p>"}]}})}},({dispatch:t})=>t=>e=>{t(e),e.type},({dispatch:t})=>t=>e=>{t(e),e.type},({dispatch:t})=>t=>e=>{t(e),e.type},({dispatch:t})=>t=>e=>{t(e),e.type},({dispatch:t})=>t=>e=>{t(e),e.type},({dispatch:t})=>t=>e=>{t(e),"[items] ADD success"===e.type||"[items] UPDATE success"===e.type||"[items] REMOVE success"===e.type||e.type},({dispatch:t})=>t=>e=>{t(e),"[items] GET error"===e.type||"[items] ADD error"===e.type||"[items] UPDATE error"===e.type||"[items] REMOVE error"===e.type||e.type}],Rt=[({dispatch:t})=>e=>i=>{if(e(i),"[leftmenu] GET"===i.type){t({type:"[leftmenu] GET success",payload:{send:1,receive:[{id:1,nombre:"MI SINDICATO",imagen:"MISINDICATO",accion:"sindicato"},{id:2,nombre:"SALUD",imagen:"SALUD",accion:"salud"},{id:3,nombre:"CAPACITACION",imagen:"CURSOS",accion:""},{id:4,nombre:"TEATRO",imagen:"TEATRO",accion:"cultura"},{id:5,nombre:"TELEVISION",imagen:"TV",accion:"tv"},{id:6,nombre:"CINE",imagen:"CINE",accion:"cine"},{id:7,nombre:"ARTE",imagen:"ARTE",accion:""},{id:8,nombre:"VIVIENDA",imagen:"VIVIENDA",accion:"ivt"},{id:9,nombre:"DEPORTE",imagen:"DEPORTE",accion:""},{id:10,nombre:"TURISMO",imagen:"TURISMO",accion:""},{id:11,nombre:"BENEFICIO",imagen:"BENEFICIO",accion:""},{id:12,nombre:"SECCIONAL",imagen:"SECCIONAL",accion:""},{id:13,nombre:"ADOLECENCIA",imagen:"ADOLECENCIA",accion:"moecra"},{id:14,nombre:"ADICCIONES",imagen:"ADICCIONES",accion:"moecra"},{id:15,nombre:"HOGAR",imagen:"HOGAR",accion:"ivt"},{id:16,nombre:"SEGURIDAD",imagen:"SEGURIDAD",accion:"saludSeguridad"},{id:17,nombre:"MUJERES",imagen:"MUJERES",accion:"moecra"},{id:18,nombre:"JUVENTUD",imagen:"JUVENTUDES",accion:"moecra"},{id:19,nombre:"COMPRAS",imagen:"COMPRA",accion:"moecra"},{id:20,nombre:"MACRO",imagen:"MACRO",accion:"macro"},{id:21,nombre:"EMPRESA",imagen:"EMPRESA",accion:""},{id:22,nombre:"BOLSA TRABAJO",imagen:"BOLSATRABAJO",accion:""},{id:23,nombre:"DENUNCIA",imagen:"DENUNCIA",accion:""}]}})}},({dispatch:t})=>t=>e=>{t(e),e.type},({dispatch:t})=>t=>e=>{t(e),e.type},({dispatch:t})=>t=>e=>{t(e),e.type},({dispatch:t})=>t=>e=>{t(e),e.type},({dispatch:t})=>t=>e=>{t(e),e.type},({dispatch:t})=>t=>e=>{t(e),"[leftmenu] ADD success"===e.type||"[leftmenu] UPDATE success"===e.type||"[leftmenu] REMOVE success"===e.type||e.type},({dispatch:t})=>t=>e=>{t(e),"[leftmenu] GET error"===e.type||"[leftmenu] ADD error"===e.type||"[leftmenu] UPDATE error"===e.type||"[leftmenu] REMOVE error"===e.type||e.type}],zt=[({dispatch:t})=>e=>i=>{if(e(i),"[noticias] GET"===i.type){t({type:"[noticias] GET success",payload:{send:1,receive:[{id:1,imagen:"https://www.uocra.net/App/noticias/irupe.gif",copete:'UOCRA Cultura despide su temporada 2020 con un show en Streaming, 28 de noviembre a las 20 hs, no te pierdas a Irupé Tarragó Ros en concierto.",nota:"UOCRA Cultura despide su temporada 2020 con un show en Streaming, 28 de noviembre a las 20 hs, no te pierdas a Irupé Tarragó Ros en concierto.',orden:1},{id:2,imagen:"https://www.uocra.net/App/noticias/gm.gif",copete:'Gerardo Martínez, presidente de UOCRA, firmo un acuerdo con el Banco Nación por créditos para la compra de motos.",nota:"Gerardo Martínez, presidente de UOCRA, firmo un acuerdo con el Banco Nación por créditos para la compra de motos.',orden:2},{id:3,imagen:"https://www.uocra.net/App/noticias/maradona.gif",copete:'Construir TV presenta “60 veces Diego”, semana homenaje a Diego Maradona.",nota:"Construir TV presenta “60 veces Diego”, semana homenaje a Diego Maradona.',orden:3},{id:4,imagen:"https://www.uocra.net/App/noticias/adicciones.gif",copete:'Prevención de Adicciones, finalizó su 4ta. Jornada Internacional sobre la Problemática de las Adicciones en el mundo laboral.",nota:"Prevención de Adicciones, finalizó su 4ta. Jornada Internacional sobre la Problemática de las Adicciones en el mundo laboral.',orden:4}]}})}},({dispatch:t})=>t=>e=>{t(e),e.type},({dispatch:t})=>t=>e=>{t(e),e.type},({dispatch:t})=>t=>e=>{t(e),e.type},({dispatch:t})=>t=>e=>{t(e),e.type},({dispatch:t})=>t=>e=>{t(e),e.type},({dispatch:t})=>t=>e=>{t(e),"[noticias] ADD success"===e.type||"[noticias] UPDATE success"===e.type||"[noticias] REMOVE success"===e.type||e.type},({dispatch:t})=>t=>e=>{t(e),"[noticias] GET error"===e.type||"[noticias] ADD error"===e.type||"[noticias] UPDATE error"===e.type||"[noticias] REMOVE error"===e.type||e.type}],kt=[({dispatch:t})=>e=>i=>{if(e(i),"[localidades] GET"===i.type){t({type:"[localidades] GET success",payload:{send:1,receive:[{id:1,provinciasId:1,nombre:"Belgrano",activo:!0},{id:2,provinciasId:1,nombre:"Sanatorio Franchin",activo:!0},{id:3,provinciasId:2,nombre:"Avellaneda",activo:!0},{id:4,provinciasId:2,nombre:"Acassuso",activo:!0},{id:5,provinciasId:2,nombre:"Moron",activo:!0},{id:6,provinciasId:3,nombre:"Cordoba",activo:!0},{id:7,provinciasId:3,nombre:"Villa Mercedez",activo:!0},{id:8,provinciasId:4,nombre:"Entre Rios",activo:!0},{id:9,provinciasId:5,nombre:"Santa Rosa",activo:!0},{id:9,provinciasId:5,nombre:"General Pico",activo:!0},{id:10,provinciasId:6,nombre:"Mendoza",activo:!0},{id:11,provinciasId:7,nombre:"Santa Fe",activo:!0},{id:12,provinciasId:7,nombre:"San Lorenzo",activo:!0}]}})}},({dispatch:t})=>t=>e=>{t(e),e.type},({dispatch:t})=>t=>e=>{t(e),e.type},({dispatch:t})=>t=>e=>{t(e),e.type},({dispatch:t})=>t=>e=>{t(e),e.type},({dispatch:t})=>t=>e=>{t(e),e.type},({dispatch:t})=>t=>e=>{t(e),"[localidades] ADD success"===e.type||"[localidades] UPDATE success"===e.type||"[localidades] REMOVE success"===e.type||e.type},({dispatch:t})=>t=>e=>{t(e),"[localidades] GET error"===e.type||"[localidades] ADD error"===e.type||"[localidades] UPDATE error"===e.type||"[localidades] REMOVE error"===e.type||e.type}],Pt=[({dispatch:t})=>e=>i=>{if(e(i),"[provincias] GET"===i.type){t({type:"[provincias] GET success",payload:{send:1,receive:[{id:1,nombre:"CABA",activo:!0},{id:2,nombre:"Buenos Aires",activo:!0},{id:3,nombre:"Cordoba",activo:!0},{id:4,nombre:"Entre Rios",activo:!0},{id:5,nombre:"La Pampa",activo:!0},{id:6,nombre:"Mendoza",activo:!0},{id:7,nombre:"Santa Fe",activo:!0}]}})}},({dispatch:t})=>t=>e=>{t(e),e.type},({dispatch:t})=>t=>e=>{t(e),e.type},({dispatch:t})=>t=>e=>{t(e),e.type},({dispatch:t})=>t=>e=>{t(e),e.type},({dispatch:t})=>t=>e=>{t(e),e.type},({dispatch:t})=>t=>e=>{t(e),"[provincias] ADD success"===e.type||"[provincias] UPDATE success"===e.type||"[provincias] REMOVE success"===e.type||e.type},({dispatch:t})=>t=>e=>{t(e),"[provincias] GET error"===e.type||"[provincias] ADD error"===e.type||"[provincias] UPDATE error"===e.type||"[provincias] REMOVE error"===e.type||e.type}],Nt=[({dispatch:t})=>e=>i=>{if(e(i),"[servicios] GET"===i.type){t({type:"[servicios] GET success",payload:{send:1,receive:[{id:1,nombre:"Centros Medicos",activo:!0},{id:2,nombre:"Farmacias",activo:!0},{id:3,nombre:"Laboratorios",activo:!0},{id:4,nombre:"Emergencias",activo:!0}]}})}},({dispatch:t})=>t=>e=>{t(e),e.type},({dispatch:t})=>t=>e=>{t(e),e.type},({dispatch:t})=>t=>e=>{t(e),e.type},({dispatch:t})=>t=>e=>{t(e),e.type},({dispatch:t})=>t=>e=>{t(e),e.type},({dispatch:t})=>t=>e=>{t(e),"[servicios] ADD success"===e.type||"[servicios] UPDATE success"===e.type||"[servicios] REMOVE success"===e.type||e.type},({dispatch:t})=>t=>e=>{t(e),"[servicios] GET error"===e.type||"[servicios] ADD error"===e.type||"[servicios] UPDATE error"===e.type||"[servicios] REMOVE error"===e.type||e.type}],Vt=[({dispatch:t})=>e=>i=>{if(e(i),"[cemaps] GET"===i.type){t({type:"[cemaps] GET success",payload:{send:1,receive:[{id:1,provinciasId:1,localidadesId:1,longitud:-58.41651,latitud:-34.609363,nombre:"SANATORIO FRANCHIN",direccion:"Bartolomé Mitre 3545",activo:!0,telefono:"011 43827171",telMostrar:"011 43827171/84",mail:"uocra@uocra.org",imagen:"https://www.uocra.net/App/cemaps/bahiablanca.gif",cartilla:"https://www.uocra.net/App/cartillas/bahiablanca.jpg",urgencia:"https://www.uocra.net/App/urgencias/bahiablanca.jpg"},{id:1,provinciasId:2,localidadesId:4,longitud:-58.50494533152994,latitud:-34.482248148166086,nombre:"CEMAP ACASUSO",direccion:"Av.Santa Fe 1086",activo:!0,telefono:"011 43827171",telMostrar:"011 43827171/84",mail:"uocra@uocra.org",imagen:"https://www.uocra.net/App/cemaps/bahiablanca.gif",cartilla:"https://www.uocra.net/App/cartillas/bahiablanca.jpg",urgencia:"https://www.uocra.net/App/urgencias/bahiablanca.jpg"},{id:1,provinciasId:2,localidadesId:3,longitud:-58.355346773852155,latitud:-34.66656645127035,nombre:"CEMAP AVELLANEDA",direccion:"Estanislao Zeballos 1674",activo:!0,telefono:"011 43827171",telMostrar:"011 43827171/84",mail:"uocra@uocra.org",imagen:"https://www.uocra.net/App/cemaps/bahiablanca.gif",cartilla:"https://www.uocra.net/App/cartillas/bahiablanca.jpg",urgencia:"https://www.uocra.net/App/urgencias/bahiablanca.jpg"},{id:1,provinciasId:2,localidadesId:100,longitud:-62.26237063137208,latitud:-38.7201042402835,nombre:"CEMAP BAHIA BLANCA",direccion:"Las Heras 39",activo:!0,telefono:"011 43827171",telMostrar:"011 43827171/84",mail:"uocra@uocra.org",imagen:"https://www.uocra.net/App/cemaps/bahiablanca.gif",cartilla:"https://www.uocra.net/App/cartillas/bahiablanca.jpg",urgencia:"https://www.uocra.net/App/urgencias/bahiablanca.jpg"},{id:1,provinciasId:1,localidadesId:1,longitud:-58.392774,latitud:-34.614011,nombre:"CEMAP BELGRANO",direccion:"Av. Belgrano 1864",activo:!0,telefono:"011 43827171",telMostrar:"011 43827171/84",mail:"uocra@uocra.org",imagen:"https://www.uocra.net/App/cemaps/bahiablanca.gif",cartilla:"https://www.uocra.net/App/cartillas/bahiablanca.jpg",urgencia:"https://www.uocra.net/App/urgencias/bahiablanca.jpg"},{id:1,provinciasId:2,localidadesId:100,longitud:-58.95768306037708,latitud:-34.157349650331625,nombre:"CEMAP CAMPANA",direccion:"Dellepiane 769",activo:!0,telefono:"011 43827171",telMostrar:"011 43827171/84",mail:"uocra@uocra.org",imagen:"https://www.uocra.net/App/cemaps/bahiablanca.gif",cartilla:"https://www.uocra.net/App/cartillas/bahiablanca.jpg",urgencia:"https://www.uocra.net/App/urgencias/bahiablanca.jpg"},{id:1,provinciasId:1,localidadesId:100,longitud:-65.78290904522264,latitud:-28.461119110968927,nombre:"CEMAP CATAMARCA",direccion:"Junín 54",activo:!0,telefono:"011 43827171",telMostrar:"011 43827171/84",mail:"uocra@uocra.org",imagen:"https://www.uocra.net/App/cemaps/bahiablanca.gif",cartilla:"https://www.uocra.net/App/cartillas/bahiablanca.jpg",urgencia:"https://www.uocra.net/App/urgencias/bahiablanca.jpg"},{id:1,provinciasId:1,localidadesId:100,longitud:-58.01514127581432,latitud:-31.38704370993243,nombre:"CEMAP CONCORDIA",direccion:"Espejo 71",activo:!0,telefono:"011 43827171",telMostrar:"011 43827171/84",mail:"uocra@uocra.org",imagen:"https://www.uocra.net/App/cemaps/bahiablanca.gif",cartilla:"https://www.uocra.net/App/cartillas/bahiablanca.jpg",urgencia:"https://www.uocra.net/App/urgencias/bahiablanca.jpg"},{id:1,provinciasId:1,localidadesId:6,longitud:-64.17971037396404,latitud:-31.416719162079385,nombre:"CEMAP CORDOBA",direccion:"Av. Maipú 48",activo:!0,telefono:"011 43827171",telMostrar:"011 43827171/84",mail:"uocra@uocra.org",imagen:"https://www.uocra.net/App/cemaps/bahiablanca.gif",cartilla:"https://www.uocra.net/App/cartillas/bahiablanca.jpg",urgencia:"https://www.uocra.net/App/urgencias/bahiablanca.jpg"},{id:1,provinciasId:1,localidadesId:100,longitud:-57.09794166052627,latitud:-29.7088600805787,nombre:"CEMAP CORRIENTES",direccion:"Av. España 1408",activo:!0,telefono:"011 43827171",telMostrar:"011 43827171/84",mail:"uocra@uocra.org",imagen:"https://www.uocra.net/App/cemaps/bahiablanca.gif",cartilla:"https://www.uocra.net/App/cartillas/bahiablanca.jpg",urgencia:"https://www.uocra.net/App/urgencias/bahiablanca.jpg"},{id:1,provinciasId:1,localidadesId:100,longitud:-58.056297831688134,latitud:-29.786827255369488,nombre:"CEMAP CURUZU CUATIA",direccion:"Juan de Vera 977",activo:!0,telefono:"011 43827171",telMostrar:"011 43827171/84",mail:"uocra@uocra.org",imagen:"https://www.uocra.net/App/cemaps/bahiablanca.gif",cartilla:"https://www.uocra.net/App/cartillas/bahiablanca.jpg",urgencia:"https://www.uocra.net/App/urgencias/bahiablanca.jpg"},{id:1,provinciasId:1,localidadesId:100,longitud:-58.27829397384724,latitud:-34.802918748758685,nombre:"CEMAP FLORENCIO VARELA",direccion:"San Martin 2631",activo:!0,telefono:"011 43827171",telMostrar:"011 43827171/84",mail:"uocra@uocra.org",imagen:"https://www.uocra.net/App/cemaps/bahiablanca.gif",cartilla:"https://www.uocra.net/App/cartillas/bahiablanca.jpg",urgencia:"https://www.uocra.net/App/urgencias/bahiablanca.jpg"},{id:1,provinciasId:1,localidadesId:100,longitud:-59.10518034931761,latitud:-25.729600831795974,nombre:"CEMAP FORMASA",direccion:"Av. 9 de Julio 440",activo:!0,telefono:"011 43827171",telMostrar:"011 43827171/84",mail:"uocra@uocra.org",imagen:"https://www.uocra.net/App/cemaps/bahiablanca.gif",cartilla:"https://www.uocra.net/App/cartillas/bahiablanca.jpg",urgencia:"https://www.uocra.net/App/urgencias/bahiablanca.jpg"},{id:1,provinciasId:1,localidadesId:100,longitud:-58.638815373859345,latitud:-34.462297524774954,nombre:"CEMAP GENERAL PACHECO",direccion:"Av. Hipolito Irigoyen 1259",activo:!0,telefono:"011 43827171",telMostrar:"011 43827171/84",mail:"uocra@uocra.org",imagen:"https://www.uocra.net/App/cemaps/bahiablanca.gif",cartilla:"https://www.uocra.net/App/cartillas/bahiablanca.jpg",urgencia:"https://www.uocra.net/App/urgencias/bahiablanca.jpg"},{id:1,provinciasId:1,localidadesId:9,longitud:-63.756185489158746,latitud:-35.65877053610952,nombre:"CEMAP GENERAL PICO",direccion:"Calle 11 Nº 887",activo:!0,telefono:"011 43827171",telMostrar:"011 43827171/84",mail:"uocra@uocra.org",imagen:"https://www.uocra.net/App/cemaps/bahiablanca.gif",cartilla:"https://www.uocra.net/App/cartillas/bahiablanca.jpg",urgencia:"https://www.uocra.net/App/urgencias/bahiablanca.jpg"},{id:1,provinciasId:1,localidadesId:100,longitud:-67.56609004670257,latitud:-39.02761067984191,nombre:"CEMAP GENERAL ROCA",direccion:"Córdoba 1662",activo:!0,telefono:"011 43827171",telMostrar:"011 43827171/84",mail:"uocra@uocra.org",imagen:"https://www.uocra.net/App/cemaps/bahiablanca.gif",cartilla:"https://www.uocra.net/App/cartillas/bahiablanca.jpg",urgencia:"https://www.uocra.net/App/urgencias/bahiablanca.jpg"},{id:1,provinciasId:1,localidadesId:100,longitud:-56.68311237168805,latitud:-27.58257996811924,nombre:"CEMAP ITUZAINGO",direccion:"Perú 1832",activo:!0,telefono:"011 43827171",telMostrar:"011 43827171/84",mail:"uocra@uocra.org",imagen:"https://www.uocra.net/App/cemaps/bahiablanca.gif",cartilla:"https://www.uocra.net/App/cartillas/bahiablanca.jpg",urgencia:"https://www.uocra.net/App/urgencias/bahiablanca.jpg"},{id:1,provinciasId:1,localidadesId:100,longitud:-65.30940734719526,latitud:-24.18036220978682,nombre:"CEMAP JUJUY",direccion:"Santibáñez 1150",activo:!0,telefono:"011 43827171",telMostrar:"011 43827171/84",mail:"uocra@uocra.org",imagen:"https://www.uocra.net/App/cemaps/bahiablanca.gif",cartilla:"https://www.uocra.net/App/cartillas/bahiablanca.jpg",urgencia:"https://www.uocra.net/App/urgencias/bahiablanca.jpg"},{id:1,provinciasId:1,localidadesId:100,longitud:-57.949983745007856,latitud:-34.90534901842309,nombre:"CEMAP LA PLATA",direccion:"Calle 44 Nº 335",activo:!0,telefono:"011 43827171",telMostrar:"011 43827171/84",mail:"uocra@uocra.org",imagen:"https://www.uocra.net/App/cemaps/bahiablanca.gif",cartilla:"https://www.uocra.net/App/cartillas/bahiablanca.jpg",urgencia:"https://www.uocra.net/App/urgencias/bahiablanca.jpg"},{id:1,provinciasId:1,localidadesId:100,longitud:-66.85454424704265,latitud:-29.409057410478635,nombre:"CEMAP LA RIOJA",direccion:"Lamadrid 322",activo:!0,telefono:"011 43827171",telMostrar:"011 43827171/84",mail:"uocra@uocra.org",imagen:"https://www.uocra.net/App/cemaps/bahiablanca.gif",cartilla:"https://www.uocra.net/App/cartillas/bahiablanca.jpg",urgencia:"https://www.uocra.net/App/urgencias/bahiablanca.jpg"},{id:1,provinciasId:1,localidadesId:100,longitud:-58.40289007384858,latitud:-34.763393575163256,nombre:"CEMAP LOMAS DE ZAMORA",direccion:"Av. Hipolito Irigoyen 9264",activo:!0,telefono:"011 43827171",telMostrar:"011 43827171/84",mail:"uocra@uocra.org",imagen:"https://www.uocra.net/App/cemaps/bahiablanca.gif",cartilla:"https://www.uocra.net/App/cartillas/bahiablanca.jpg",urgencia:"https://www.uocra.net/App/urgencias/bahiablanca.jpg"},{id:1,provinciasId:1,localidadesId:100,longitud:-68.88268161808745,latitud:-33.03815469975917,nombre:"CEMAP LUJAN DE CUYO",direccion:"Patricios 285",activo:!0,telefono:"011 43827171",telMostrar:"011 43827171/84",mail:"uocra@uocra.org",imagen:"https://www.uocra.net/App/cemaps/bahiablanca.gif",cartilla:"https://www.uocra.net/App/cartillas/bahiablanca.jpg",urgencia:"https://www.uocra.net/App/urgencias/bahiablanca.jpg"},{id:1,provinciasId:1,localidadesId:100,longitud:-57.56033027372903,latitud:-37.989724923065246,nombre:"CEMAP MAR DEL PLATA",direccion:"Olazabal 1470",activo:!0,telefono:"011 43827171",telMostrar:"011 43827171/84",mail:"uocra@uocra.org",imagen:"https://www.uocra.net/App/cemaps/bahiablanca.gif",cartilla:"https://www.uocra.net/App/cartillas/bahiablanca.jpg",urgencia:"https://www.uocra.net/App/urgencias/bahiablanca.jpg"},{id:1,provinciasId:1,localidadesId:100,longitud:-68.83641990275046,latitud:-32.87527058923882,nombre:"CEMAP MENNDOZA",direccion:"Av. 9 de Julio 2381",activo:!0,telefono:"011 43827171",telMostrar:"011 43827171/84",mail:"uocra@uocra.org",imagen:"https://www.uocra.net/App/cemaps/bahiablanca.gif",cartilla:"https://www.uocra.net/App/cartillas/bahiablanca.jpg",urgencia:"https://www.uocra.net/App/urgencias/bahiablanca.jpg"},{id:1,provinciasId:1,localidadesId:100,longitud:-58.416577,latitud:-34.609183,nombre:"CEMAP MITRE",direccion:"Bartolomé Mitre 3588",activo:!0,telefono:"011 43827171",telMostrar:"011 43827171/84",mail:"uocra@uocra.org",imagen:"https://www.uocra.net/App/cemaps/bahiablanca.gif",cartilla:"https://www.uocra.net/App/cartillas/bahiablanca.jpg",urgencia:"https://www.uocra.net/App/urgencias/bahiablanca.jpg"},{id:1,provinciasId:1,localidadesId:100,longitud:-58.47355389898362,latitud:-34.81619497026056,nombre:"CEMAP MONTE GRANDE",direccion:"Maximo Paz 290",activo:!0,telefono:"011 43827171",telMostrar:"011 43827171/84",mail:"uocra@uocra.org",imagen:"https://www.uocra.net/App/cemaps/bahiablanca.gif",cartilla:"https://www.uocra.net/App/cartillas/bahiablanca.jpg",urgencia:"https://www.uocra.net/App/urgencias/bahiablanca.jpg"},{id:1,provinciasId:1,localidadesId:100,longitud:-58.793038245017094,latitud:-34.650632533042035,nombre:"CEMAP MORENO",direccion:"Zeballos 71/73",activo:!0,telefono:"011 43827171",telMostrar:"011 43827171/84",mail:"uocra@uocra.org",imagen:"https://www.uocra.net/App/cemaps/bahiablanca.gif",cartilla:"https://www.uocra.net/App/cartillas/bahiablanca.jpg",urgencia:"https://www.uocra.net/App/urgencias/bahiablanca.jpg"},{id:1,provinciasId:1,localidadesId:5,longitud:-58.616394187345755,latitud:-34.650147813326036,nombre:"CEMAP MORON",direccion:"Ing. Boatti 183",activo:!0,telefono:"011 43827171",telMostrar:"011 43827171/84",mail:"uocra@uocra.org",imagen:"https://www.uocra.net/App/cemaps/bahiablanca.gif",cartilla:"https://www.uocra.net/App/cartillas/bahiablanca.jpg",urgencia:"https://www.uocra.net/App/urgencias/bahiablanca.jpg"},{id:1,provinciasId:1,localidadesId:100,longitud:-60.5267535009398,latitud:-31.731401678636086,nombre:"CEMAP PARANA",direccion:"San Juan 172",activo:!0,telefono:"011 43827171",telMostrar:"011 43827171/84",mail:"uocra@uocra.org",imagen:"https://www.uocra.net/App/cemaps/bahiablanca.gif",cartilla:"https://www.uocra.net/App/cartillas/bahiablanca.jpg",urgencia:"https://www.uocra.net/App/urgencias/bahiablanca.jpg"},{id:1,provinciasId:1,localidadesId:100,longitud:-57.08841101819723,latitud:-29.719061023751884,nombre:"CEMAP PASO DE LOS LIBRES",direccion:"Pago Largo 1475",activo:!0,telefono:"011 43827171",telMostrar:"011 43827171/84",mail:"uocra@uocra.org",imagen:"https://www.uocra.net/App/cemaps/bahiablanca.gif",cartilla:"https://www.uocra.net/App/cartillas/bahiablanca.jpg",urgencia:"https://www.uocra.net/App/urgencias/bahiablanca.jpg"},{id:1,provinciasId:1,localidadesId:100,longitud:-58.91294391803748,latitud:-34.46183772365447,nombre:"CEMAP PILAR",direccion:"Rivadavia 938",activo:!0,telefono:"011 43827171",telMostrar:"011 43827171/84",mail:"uocra@uocra.org",imagen:"https://www.uocra.net/App/cemaps/bahiablanca.gif",cartilla:"https://www.uocra.net/App/cartillas/bahiablanca.jpg",urgencia:"https://www.uocra.net/App/urgencias/bahiablanca.jpg"},{id:1,provinciasId:1,localidadesId:100,longitud:-68.88264943158056,latitud:-33.03814570569306,nombre:"CEMAP POSADAS",direccion:"La Rioja 2284",activo:!0,telefono:"011 43827171",telMostrar:"011 43827171/84",mail:"uocra@uocra.org",imagen:"https://www.uocra.net/App/cemaps/bahiablanca.gif",cartilla:"https://www.uocra.net/App/cartillas/bahiablanca.jpg",urgencia:"https://www.uocra.net/App/urgencias/bahiablanca.jpg"},{id:1,provinciasId:1,localidadesId:100,longitud:-65.04188155819513,latitud:-42.7646403653579,nombre:"CEMAP PUERTO MADRYN",direccion:"Domec Garcia 402",activo:!0,telefono:"011 43827171",telMostrar:"011 43827171/84",mail:"uocra@uocra.org",imagen:"https://www.uocra.net/App/cemaps/bahiablanca.gif",cartilla:"https://www.uocra.net/App/cartillas/bahiablanca.jpg",urgencia:"https://www.uocra.net/App/urgencias/bahiablanca.jpg"},{id:1,provinciasId:1,localidadesId:100,longitud:-58.25765001617873,latitud:-34.72472007434642,nombre:"CEMAP QUILMES",direccion:"San Martín 724",activo:!0,telefono:"011 43827171",telMostrar:"011 43827171/84",mail:"uocra@uocra.org",imagen:"https://www.uocra.net/App/cemaps/bahiablanca.gif",cartilla:"https://www.uocra.net/App/cartillas/bahiablanca.jpg",urgencia:"https://www.uocra.net/App/urgencias/bahiablanca.jpg"},{id:1,provinciasId:1,localidadesId:100,longitud:-69.21196723081299,latitud:-51.62134425346009,nombre:"CEMAP RIO GALLEGOS",direccion:"Alcorta 130",activo:!0,telefono:"011 43827171",telMostrar:"011 43827171/84",mail:"uocra@uocra.org",imagen:"https://www.uocra.net/App/cemaps/bahiablanca.gif",cartilla:"https://www.uocra.net/App/cartillas/bahiablanca.jpg",urgencia:"https://www.uocra.net/App/urgencias/bahiablanca.jpg"},{id:1,provinciasId:1,localidadesId:100,longitud:-60.653768289255005,latitud:-32.94428370112704,nombre:"CEMAP ROSARIO",direccion:"Boulevard Oroño 870",activo:!0,telefono:"011 43827171",telMostrar:"011 43827171/84",mail:"uocra@uocra.org",imagen:"https://www.uocra.net/App/cemaps/bahiablanca.gif",cartilla:"https://www.uocra.net/App/cartillas/bahiablanca.jpg",urgencia:"https://www.uocra.net/App/urgencias/bahiablanca.jpg"},{id:1,provinciasId:1,localidadesId:100,longitud:-58.9832375317599,latitud:-27.455021648414725,nombre:"CEMAP RESISTENCIA",direccion:"Juan B. Justo 453",activo:!0,telefono:"011 43827171",telMostrar:"011 43827171/84",mail:"uocra@uocra.org",imagen:"https://www.uocra.net/App/cemaps/bahiablanca.gif",cartilla:"https://www.uocra.net/App/cartillas/bahiablanca.jpg",urgencia:"https://www.uocra.net/App/urgencias/bahiablanca.jpg"},{id:1,provinciasId:1,localidadesId:100,longitud:-68.53128157580926,latitud:-31.543225130042998,nombre:"CEMAP SAN JUAN",direccion:"Avenida Alem 725 sur",activo:!0,telefono:"011 43827171",telMostrar:"011 43827171/84",mail:"uocra@uocra.org",imagen:"https://www.uocra.net/App/cemaps/bahiablanca.gif",cartilla:"https://www.uocra.net/App/cartillas/bahiablanca.jpg",urgencia:"https://www.uocra.net/App/urgencias/bahiablanca.jpg"},{id:1,provinciasId:1,localidadesId:100,longitud:-58.55483273152297,latitud:-34.677301950134044,nombre:"CEMAP SAN JUSTO",direccion:"Juan Domingo Perón 3350",activo:!0,telefono:"011 43827171",telMostrar:"011 43827171/84",mail:"uocra@uocra.org",imagen:"https://www.uocra.net/App/cemaps/bahiablanca.gif",cartilla:"https://www.uocra.net/App/cartillas/bahiablanca.jpg",urgencia:"https://www.uocra.net/App/urgencias/bahiablanca.jpg"},{id:1,provinciasId:1,localidadesId:100,longitud:-58.541951102690895,latitud:-34.57697263951746,nombre:"CEMAP SAN MARTIN",direccion:"Caseros 2248",activo:!0,telefono:"011 43827171",telMostrar:"011 43827171/84",mail:"uocra@uocra.org",imagen:"https://www.uocra.net/App/cemaps/bahiablanca.gif",cartilla:"https://www.uocra.net/App/cartillas/bahiablanca.jpg",urgencia:"https://www.uocra.net/App/urgencias/bahiablanca.jpg"},{id:1,provinciasId:1,localidadesId:100,longitud:-58.50428619636764,latitud:-34.5400743722392,nombre:"CEMAP SAN MIGUEL",direccion:"Av. Mitre 80",activo:!0,telefono:"011 43827171",telMostrar:"011 43827171/84",mail:"uocra@uocra.org",imagen:"https://www.uocra.net/App/cemaps/bahiablanca.gif",cartilla:"https://www.uocra.net/App/cartillas/bahiablanca.jpg",urgencia:"https://www.uocra.net/App/urgencias/bahiablanca.jpg"},{id:1,provinciasId:1,localidadesId:100,longitud:-60.220417946912896,latitud:-33.329249160565176,nombre:"CEMAP SAN NICOLAS",direccion:"URQUIZA Nº 114",activo:!0,telefono:"011 43827171",telMostrar:"011 43827171/84",mail:"uocra@uocra.org",imagen:"https://www.uocra.net/App/cemaps/bahiablanca.gif",cartilla:"https://www.uocra.net/App/cartillas/bahiablanca.jpg",urgencia:"https://www.uocra.net/App/urgencias/bahiablanca.jpg"},{id:1,provinciasId:1,localidadesId:100,longitud:-65.41015676067207,latitud:-24.779421464013513,nombre:"CEMAP SALTA",direccion:"Mitre 819",activo:!0,telefono:"011 43827171",telMostrar:"011 43827171/84",mail:"uocra@uocra.org",imagen:"https://www.uocra.net/App/cemaps/bahiablanca.gif",cartilla:"https://www.uocra.net/App/cartillas/bahiablanca.jpg",urgencia:"https://www.uocra.net/App/urgencias/bahiablanca.jpg"},{id:1,provinciasId:1,localidadesId:12,longitud:-60.73588264693283,latitud:-32.75205554107435,nombre:"CEMAP SAN LORENZO",direccion:"Moreno 756",activo:!0,telefono:"011 43827171",telMostrar:"011 43827171/84",mail:"uocra@uocra.org",imagen:"https://www.uocra.net/App/cemaps/bahiablanca.gif",cartilla:"https://www.uocra.net/App/cartillas/bahiablanca.jpg",urgencia:"https://www.uocra.net/App/urgencias/bahiablanca.jpg"},{id:1,provinciasId:1,localidadesId:11,longitud:-60.703263445120896,latitud:-31.643330172049104,nombre:"CEMAP SANTA FE",direccion:"Rivadavia 2830",activo:!0,telefono:"011 43827171",telMostrar:"011 43827171/84",mail:"uocra@uocra.org",imagen:"https://www.uocra.net/App/cemaps/bahiablanca.gif",cartilla:"https://www.uocra.net/App/cartillas/bahiablanca.jpg",urgencia:"https://www.uocra.net/App/urgencias/bahiablanca.jpg"},{id:1,provinciasId:1,localidadesId:100,longitud:-66.33999167390037,latitud:-33.294856628878044,nombre:"CEMAP SAN LUIS",direccion:"San Martín 1305",activo:!0,telefono:"011 43827171",telMostrar:"011 43827171/84",mail:"uocra@uocra.org",imagen:"https://www.uocra.net/App/cemaps/bahiablanca.gif",cartilla:"https://www.uocra.net/App/cartillas/bahiablanca.jpg",urgencia:"https://www.uocra.net/App/urgencias/bahiablanca.jpg"},{id:1,provinciasId:1,localidadesId:100,longitud:-64.26781663174997,latitud:-27.786883691278693,nombre:"CEMAP SANTIAGO DEL ESTERO",direccion:"Av. Moreno (Sud) Nº 81",activo:!0,telefono:"011 43827171",telMostrar:"011 43827171/84",mail:"uocra@uocra.org",imagen:"https://www.uocra.net/App/cemaps/bahiablanca.gif",cartilla:"https://www.uocra.net/App/cartillas/bahiablanca.jpg",urgencia:"https://www.uocra.net/App/urgencias/bahiablanca.jpg"},{id:1,provinciasId:1,localidadesId:100,longitud:-65.49703681642606,latitud:-27.16288253495262,nombre:"CEMAP TUCUMAN",direccion:"Tucuman 436",activo:!0,telefono:"011 43827171",telMostrar:"011 43827171/84",mail:"uocra@uocra.org",imagen:"https://www.uocra.net/App/cemaps/bahiablanca.gif",cartilla:"https://www.uocra.net/App/cartillas/bahiablanca.jpg",urgencia:"https://www.uocra.net/App/urgencias/bahiablanca.jpg"},{id:1,provinciasId:1,localidadesId:100,longitud:-65.19898458944972,latitud:-26.825415133018303,nombre:"CEMAP TUCUMAN",direccion:"Monteagudo 446",activo:!0,telefono:"011 43827171",telMostrar:"011 43827171/84",mail:"uocra@uocra.org",imagen:"https://www.uocra.net/App/cemaps/bahiablanca.gif",cartilla:"https://www.uocra.net/App/cartillas/bahiablanca.jpg",urgencia:"https://www.uocra.net/App/urgencias/bahiablanca.jpg"},{id:1,provinciasId:1,localidadesId:100,longitud:-68.34142554415155,latitud:-54.8194495438245,nombre:"CEMAP USHUAIA",direccion:"Intendente Torelli 1228",activo:!0,telefono:"011 43827171",telMostrar:"011 43827171/84",mail:"uocra@uocra.org",imagen:"https://www.uocra.net/App/cemaps/bahiablanca.gif",cartilla:"https://www.uocra.net/App/cartillas/bahiablanca.jpg",urgencia:"https://www.uocra.net/App/urgencias/bahiablanca.jpg"},{id:1,provinciasId:1,localidadesId:100,longitud:-58.38640354422014,latitud:-34.60345549535785,nombre:"URUAGUAY",direccion:"Uruaguay 435",activo:!0,telefono:"011 43827171",telMostrar:"011 43827171/84",mail:"uocra@uocra.org",imagen:"https://www.uocra.net/App/cemaps/bahiablanca.gif",cartilla:"https://www.uocra.net/App/cartillas/bahiablanca.jpg",urgencia:"https://www.uocra.net/App/urgencias/bahiablanca.jpg"},{id:1,provinciasId:1,localidadesId:7,longitud:-65.46822100272252,latitud:-33.6828777996741,nombre:"CEMAP VILLA MERCEDEZ",direccion:"Marconi 125",activo:!0,telefono:"011 43827171",telMostrar:"011 43827171/84",mail:"uocra@uocra.org",imagen:"https://www.uocra.net/App/cemaps/bahiablanca.gif",cartilla:"https://www.uocra.net/App/cartillas/bahiablanca.jpg",urgencia:"https://www.uocra.net/App/urgencias/bahiablanca.jpg"},{id:1,provinciasId:1,localidadesId:100,longitud:-59.020855218050514,latitud:-34.096602953336536,nombre:"CEMAP ZARATE",direccion:"Independencia 540",activo:!0,telefono:"011 43827171",telMostrar:"011 43827171/84",mail:"uocra@uocra.org",imagen:"https://www.uocra.net/App/cemaps/bahiablanca.gif",cartilla:"https://www.uocra.net/App/cartillas/bahiablanca.jpg",urgencia:"https://www.uocra.net/App/urgencias/bahiablanca.jpg"}]}})}},({dispatch:t,getState:e})=>i=>r=>{if(i(r),"[cemaps] GET_MAPA_TODOS"===r.type){let i=e().cemaps.entities;t({type:et,payload:{send:1,receive:i}})}},({dispatch:t,getState:e})=>i=>r=>{if(i(r),"[cemaps] GET_MAPA_PROVINCIA"===r.type){let i=e().cemaps.entities.filter(t=>t.provinciasId==r.provinciaId);t({type:et,payload:{send:1,receive:i}})}},({dispatch:t,getState:e})=>i=>r=>{if(i(r),"[cemaps] GET_MAPA_LOCALIDAD"===r.type){let i=e().cemaps.entities.filter(t=>t.localidadesId==r.localidadId);t({type:et,payload:{send:1,receive:i}})}},({dispatch:t})=>t=>e=>{t(e),e.type},({dispatch:t})=>t=>e=>{t(e),e.type},({dispatch:t})=>t=>e=>{t(e),e.type},({dispatch:t})=>t=>e=>{t(e),e.type},({dispatch:t})=>t=>e=>{t(e),e.type},({dispatch:t})=>t=>e=>{t(e),"[cemaps] ADD success"===e.type||"[cemaps] UPDATE success"===e.type||"[cemaps] REMOVE success"===e.type||e.type},({dispatch:t})=>t=>e=>{t(e),"[cemaps] GET error"===e.type||"[cemaps] ADD error"===e.type||"[cemaps] UPDATE error"===e.type||"[cemaps] REMOVE error"===e.type||e.type}],Ft=[({dispatch:t})=>e=>i=>{if(e(i),"[seccionales] GET"===i.type){t({type:"[seccionales] GET success",payload:{send:1,receive:[{id:1,zonasId:1,longitud:-58.41651,latitud:-34.609363,nombre:"Córdoba",direccion:"Bartolomé Mitre 3545",activo:!0,telefono:"011 43827171",telMostrar:"011 43827171/84",mail:"uocra@uocra.org",imagen:"https://www.uocra.net/App/seccionales/cordoba.gif"},{id:1,zonasId:4,longitud:-58.50494533152994,latitud:-34.482248148166086,nombre:"Rio Cuarto",direccion:"Av.Santa Fe 1086",activo:!0,telefono:"011 43827171",telMostrar:"011 43827171/84",mail:"uocra@uocra.org",imagen:"https://www.uocra.net/App/seccionales/rioCuarto.gif"},{id:1,zonasId:3,longitud:-58.355346773852155,latitud:-34.66656645127035,nombre:"Rio Tercero",direccion:"Estanislao Zeballos 1674",activo:!0,telefono:"011 43827171",telMostrar:"011 43827171/84",mail:"uocra@uocra.org",imagen:"https://www.uocra.net/App/seccionales/rioTercero.gif"},{id:1,zonasId:100,longitud:-62.26237063137208,latitud:-38.7201042402835,nombre:"Rosario",direccion:"Las Heras 39",activo:!0,telefono:"011 43827171",telMostrar:"011 43827171/84",mail:"uocra@uocra.org",imagen:"https://www.uocra.net/App/seccionales/rosario.gif"},{id:1,zonasId:1,longitud:-58.392774,latitud:-34.614011,nombre:"Santa Fé",direccion:"Av. Belgrano 1864",activo:!0,telefono:"011 43827171",telMostrar:"011 43827171/84",mail:"uocra@uocra.org",imagen:"https://www.uocra.net/App/seccionales/santaFe.gif"},{id:1,zonasId:100,longitud:-58.95768306037708,latitud:-34.157349650331625,nombre:"Villa María",direccion:"Dellepiane 769",activo:!0,telefono:"011 43827171",telMostrar:"011 43827171/84",mail:"uocra@uocra.org",imagen:"https://www.uocra.net/App/seccionales/villaMaria.gif"}]}})}},({dispatch:t,getState:e})=>i=>r=>{if(i(r),"[seccionales] GET_MAPA_TODOS"===r.type){let i=e().seccionales.entities;t({type:"[seccionales] GET_MAPA_LOCALIDAD success",payload:{send:1,receive:i}})}},({dispatch:t,getState:e})=>i=>r=>{if(i(r),"[seccionales] GET_MAPA_LOCALIDAD"===r.type){let i=e().seccionales.entities.filter(t=>t.zonasId==r.zonaId);t({type:"[seccionales] GET_MAPA_LOCALIDAD success",payload:{send:1,receive:i}})}},({dispatch:t})=>t=>e=>{t(e),e.type},({dispatch:t})=>t=>e=>{t(e),e.type},({dispatch:t})=>t=>e=>{t(e),e.type},({dispatch:t})=>t=>e=>{t(e),e.type},({dispatch:t})=>t=>e=>{t(e),e.type},({dispatch:t})=>t=>e=>{t(e),"[seccionales] ADD success"===e.type||"[seccionales] UPDATE success"===e.type||"[seccionales] REMOVE success"===e.type||e.type},({dispatch:t})=>t=>e=>{t(e),"[seccionales] GET error"===e.type||"[seccionales] ADD error"===e.type||"[seccionales] UPDATE error"===e.type||"[seccionales] REMOVE error"===e.type||e.type}],Ht=[({dispatch:t})=>e=>i=>{if(e(i),"[zonas] GET"===i.type){t({type:"[zonas] GET success",payload:{send:1,receive:[{id:1,nombre:"Buenos Aires",activo:!0},{id:2,nombre:"Centro",activo:!0},{id:3,nombre:"Cuyo",activo:!0},{id:4,nombre:"Litoral",activo:!0},{id:5,nombre:"Noroeste",activo:!0},{id:6,nombre:"Patagonia",activo:!0}]}})}},({dispatch:t})=>t=>e=>{t(e),e.type},({dispatch:t})=>t=>e=>{t(e),e.type},({dispatch:t})=>t=>e=>{t(e),e.type},({dispatch:t})=>t=>e=>{t(e),e.type},({dispatch:t})=>t=>e=>{t(e),e.type},({dispatch:t})=>t=>e=>{t(e),"[zonas] ADD success"===e.type||"[zonas] UPDATE success"===e.type||"[zonas] REMOVE success"===e.type||e.type},({dispatch:t})=>t=>e=>{t(e),"[zonas] GET error"===e.type||"[zonas] ADD error"===e.type||"[zonas] UPDATE error"===e.type||"[zonas] REMOVE error"===e.type||e.type}],Gt=[({dispatch:t})=>e=>i=>{if(e(i),"[convenios] GET"===i.type){t({type:"[convenios] GET success",payload:{send:1,receive:[{id:1,nombre:"Convenio Enero 2020",orden:1,archivo:"https://www.uocra.net/App/convenios/convenio.pdf",activo:!0},{id:2,nombre:"Convenio Marzo 2020",orden:2,archivo:"https://www.uocra.net/App/convenios/convenio.pdf",activo:!0},{id:3,nombre:"Convenio Junio 2020",orden:3,archivo:"https://www.uocra.net/App/convenios/convenio.pdf",activo:!0},{id:4,nombre:"Convenio Septiembre 2020",orden:4,archivo:"https://www.uocra.net/App/convenios/convenio.pdf",activo:!0},{id:5,nombre:"Convenio Diciembre 2020",orden:5,archivo:"https://www.uocra.net/App/convenios/convenio.pdf",activo:!0},{id:6,nombre:"Convenio Marzo 2021",orden:6,archivo:"https://www.uocra.net/App/convenios/convenio.pdf",activo:!0}]}})}},({dispatch:t})=>t=>e=>{t(e),e.type},({dispatch:t})=>t=>e=>{t(e),e.type},({dispatch:t})=>t=>e=>{t(e),e.type},({dispatch:t})=>t=>e=>{t(e),e.type},({dispatch:t})=>t=>e=>{t(e),e.type},({dispatch:t})=>t=>e=>{t(e),"[convenios] ADD success"===e.type||"[convenios] UPDATE success"===e.type||"[convenios] REMOVE success"===e.type||e.type},({dispatch:t})=>t=>e=>{t(e),"[convenios] GET error"===e.type||"[convenios] ADD error"===e.type||"[convenios] UPDATE error"===e.type||"[convenios] REMOVE error"===e.type||e.type}],Xt=[({dispatch:t})=>e=>i=>{if(e(i),"[programacion] GET"===i.type){t({type:"[programacion] GET success",payload:{send:1,receive:[{id:1,nombre:"Tierra Hembra",protagonistas:"Anabella Zoch",genero:"Musica Popular",fecha:"2021-04-10T18:25:43.511Z",valor:0,imagen:"https://www.uocra.net/App/programacionTeatro/tierraHembra.gif",textoFolleto:"Escrita junto a Peteco Carabajal,  es eso, el mensaje de la tierra como mujer al hombre, al ser humano, a su pareja amorosa.  Tierra Hembra es el tiempo que vivimos hoy. Rugen tiempos nuevos, de revolución, de cambio. Cada mañana buscamos renacer la esperanza por sobre todo y creer en nosotros más que nunca. Es el tiempo de la mujer, también el tiempo de la madre tierra, única, maltratada.",imagenFolleto:"https://www.uocra.net/App/programacionTeatro/tierraHembraFolleto.gif",activo:!0},{id:2,nombre:"Un canto a Latinoamerica",protagonistas:"La Charo",genero:"Música Popular Latinoamericana",fecha:"2021-04-11T19:25:43.511Z",valor:0,imagen:"https://www.uocra.net/App/programacionTeatro/unCantoALatinoamerica.gif",textoFolleto:"Escrita junto a Peteco Carabajal,  es eso, el mensaje de la tierra como mujer al hombre, al ser humano, a su pareja amorosa.  Tierra Hembra es el tiempo que vivimos hoy. Rugen tiempos nuevos, de revolución, de cambio. Cada mañana buscamos renacer la esperanza por sobre todo y creer en nosotros más que nunca. Es el tiempo de la mujer, también el tiempo de la madre tierra, única, maltratada.",imagenFolleto:"https://www.uocra.net/App/programacionTeatro/tierraHembraFolleto.gif",activo:!0},{id:3,nombre:"De Pampa y Puna",protagonistas:"Adelina Villanueva y Lucía Ceresani",genero:"Folklore",fecha:"2021-04-12T20:25:43.511Z",valor:0,imagen:"https://www.uocra.net/App/programacionTeatro/dePampaYPuna.gif",textoFolleto:"Escrita junto a Peteco Carabajal,  es eso, el mensaje de la tierra como mujer al hombre, al ser humano, a su pareja amorosa.  Tierra Hembra es el tiempo que vivimos hoy. Rugen tiempos nuevos, de revolución, de cambio. Cada mañana buscamos renacer la esperanza por sobre todo y creer en nosotros más que nunca. Es el tiempo de la mujer, también el tiempo de la madre tierra, única, maltratada.",imagenFolleto:"https://www.uocra.net/App/programacionTeatro/tierraHembraFolleto.gif",activo:!0},{id:4,nombre:"Recopilación",protagonistas:"Liliana Vitale",genero:"Musica Popular",fecha:"2021-04-13T21:25:43.511Z",valor:120.5,imagen:"https://www.uocra.net/App/programacionTeatro/recopilacion.gif",textoFolleto:"Escrita junto a Peteco Carabajal,  es eso, el mensaje de la tierra como mujer al hombre, al ser humano, a su pareja amorosa.  Tierra Hembra es el tiempo que vivimos hoy. Rugen tiempos nuevos, de revolución, de cambio. Cada mañana buscamos renacer la esperanza por sobre todo y creer en nosotros más que nunca. Es el tiempo de la mujer, también el tiempo de la madre tierra, única, maltratada.",imagenFolleto:"https://www.uocra.net/App/programacionTeatro/tierraHembraFolleto.gif",activo:!0},{id:5,nombre:"La kermese de los malditos",protagonistas:"",genero:"Teatro",fecha:"2021-04-14T22:25:43.511Z",valor:0,imagen:"https://www.uocra.net/App/programacionTeatro/laKermeseDeLosMalditos.gif",textoFolleto:"Escrita junto a Peteco Carabajal,  es eso, el mensaje de la tierra como mujer al hombre, al ser humano, a su pareja amorosa.  Tierra Hembra es el tiempo que vivimos hoy. Rugen tiempos nuevos, de revolución, de cambio. Cada mañana buscamos renacer la esperanza por sobre todo y creer en nosotros más que nunca. Es el tiempo de la mujer, también el tiempo de la madre tierra, única, maltratada.",imagenFolleto:"https://www.uocra.net/App/programacionTeatro/tierraHembraFolleto.gif",activo:!0}]}})}},({dispatch:t})=>t=>e=>{t(e),e.type},({dispatch:t})=>t=>e=>{t(e),e.type},({dispatch:t})=>t=>e=>{t(e),e.type},({dispatch:t})=>t=>e=>{t(e),e.type},({dispatch:t})=>t=>e=>{t(e),e.type},({dispatch:t})=>t=>e=>{t(e),"[programacion] ADD success"===e.type||"[programacion] UPDATE success"===e.type||"[programacion] REMOVE success"===e.type||e.type},({dispatch:t})=>t=>e=>{t(e),"[programacion] GET error"===e.type||"[programacion] ADD error"===e.type||"[programacion] UPDATE error"===e.type||"[programacion] REMOVE error"===e.type||e.type}],Ut=[({dispatch:t})=>e=>i=>{if(e(i),"[leyendas] GET"===i.type){t({type:"[leyendas] GET success",payload:{send:1,receive:[{id:1,tipo:"sindicato",leyenda:"",activo:!0},{id:2,tipo:"salud",leyenda:"",activo:!0},{id:3,tipo:"cultura",leyenda:"",activo:!0},{id:4,tipo:"tv",leyenda:"",activo:!0},{id:5,tipo:"moecra",leyenda:"",activo:!0},{id:6,tipo:"saludSeguridad",leyenda:"",activo:!0},{id:7,tipo:"ivt",leyenda:"<div>El <b>Instituto de Vivienda de los Trabajadores</b> (IVT) se creó el 1 de mayo de 1993 con el objetivo de promover y facilitar el acceso a la vivienda por parte de los trabajadores, mediante el adecuado empleo de aportes, ahorros y otros recursos provenientes del sector público y privado, Nacional y extranjero.</div>",activo:!0},{id:8,tipo:"cine",leyenda:"",activo:!0}]}})}},({dispatch:t})=>t=>e=>{t(e),e.type},({dispatch:t})=>t=>e=>{t(e),e.type},({dispatch:t})=>t=>e=>{t(e),e.type},({dispatch:t})=>t=>e=>{t(e),e.type},({dispatch:t})=>t=>e=>{t(e),e.type},({dispatch:t})=>t=>e=>{t(e),"[leyendas] ADD success"===e.type||"[leyendas] UPDATE success"===e.type||"[leyendas] REMOVE success"===e.type||e.type},({dispatch:t})=>t=>e=>{t(e),"[leyendas] GET error"===e.type||"[leyendas] ADD error"===e.type||"[leyendas] UPDATE error"===e.type||"[leyendas] REMOVE error"===e.type||e.type}],Bt=[({dispatch:t})=>e=>i=>{if(e(i),"[edicionesAnteriores] GET"===i.type){t({type:"[edicionesAnteriores] GET success",payload:{send:1,receive:[{id:1,nombre:"7ma EDICIÓN",descripcion:"Edición online, que tuvo lugar del 6 al 13 de Mayo 2020. Buenos Aires, Argentina.",imagen:"https://www.uocra.net/App/edicionesAnteriores/7edicion.gif",archivo:"https://construircine.com/pdf/catalogo_2020.pdf",activo:!0},{id:2,nombre:"6ma EDICIÓN",descripcion:"Del 2 al 15 de Mayo 2019. Buenos Aires, Argentina.",imagen:"https://www.uocra.net/App/edicionesAnteriores/6edicion.gif",archivo:"https://construircine.com/pdf/CATALOGO-CONSTRUIR-CINE-2019.pdf",activo:!0},{id:3,nombre:"5ma EDICIÓN",descripcion:"Del 10 al 16 de Mayo 2018. Buenos Aires, Argentina.",imagen:"https://www.uocra.net/App/edicionesAnteriores/5edicion.gif",archivo:"https://construircine.com/pdf/catalogo-construir%20cine-2018-baja.pdf",activo:!0}]}})}},({dispatch:t})=>t=>e=>{t(e),e.type},({dispatch:t})=>t=>e=>{t(e),e.type},({dispatch:t})=>t=>e=>{t(e),e.type},({dispatch:t})=>t=>e=>{t(e),e.type},({dispatch:t})=>t=>e=>{t(e),e.type},({dispatch:t})=>t=>e=>{t(e),"[edicionesAnteriores] ADD success"===e.type||"[edicionesAnteriores] UPDATE success"===e.type||"[edicionesAnteriores] REMOVE success"===e.type||e.type},({dispatch:t})=>t=>e=>{t(e),"[edicionesAnteriores] GET error"===e.type||"[edicionesAnteriores] ADD error"===e.type||"[edicionesAnteriores] UPDATE error"===e.type||"[edicionesAnteriores] REMOVE error"===e.type||e.type}],$t=[({dispatch:t})=>e=>i=>{if(e(i),"[tvEstrenos] GET"===i.type){t({type:"[tvEstrenos] GET success",payload:{send:1,receive:[{id:1,nombre:"Desafios 4.0",descripcion:"Las inversiones en energía renovable, como eólica y solar, ya son una realidad en el mundo y comenzarán a llegar con más fuerza a nuestro país para mitigar los efectos del cambio climático.",imagen:"https://www.uocra.net/App/tvEstrenos/desafio4-2.gif",link:"",activo:!0},{id:1,nombre:"Desafios 4.0",descripcion:"Las inversiones en energía renovable, como eólica y solar, ya son una realidad en el mundo y comenzarán a llegar con más fuerza a nuestro país para mitigar los efectos del cambio climático.",imagen:"https://www.uocra.net/App/tvEstrenos/desafio4-1.gif",link:"",activo:!0}]}})}},({dispatch:t})=>t=>e=>{t(e),e.type},({dispatch:t})=>t=>e=>{t(e),e.type},({dispatch:t})=>t=>e=>{t(e),e.type},({dispatch:t})=>t=>e=>{t(e),e.type},({dispatch:t})=>t=>e=>{t(e),e.type},({dispatch:t})=>t=>e=>{t(e),"[tvEstrenos] ADD success"===e.type||"[tvEstrenos] UPDATE success"===e.type||"[tvEstrenos] REMOVE success"===e.type||e.type},({dispatch:t})=>t=>e=>{t(e),"[tvEstrenos] GET error"===e.type||"[tvEstrenos] ADD error"===e.type||"[tvEstrenos] UPDATE error"===e.type||"[tvEstrenos] REMOVE error"===e.type||e.type}];const Zt=function t(e,i,n){var s;if("function"==typeof i&&"function"==typeof n||"function"==typeof n&&"function"==typeof arguments[3])throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function.");if("function"==typeof i&&void 0===n&&(n=i,i=void 0),void 0!==n){if("function"!=typeof n)throw new Error("Expected the enhancer to be a function.");return n(t)(e,i)}if("function"!=typeof e)throw new Error("Expected the reducer to be a function.");var c=e,l=i,d=[],u=d,p=!1;function h(){u===d&&(u=d.slice())}function f(){if(p)throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");return l}function m(t){if("function"!=typeof t)throw new Error("Expected the listener to be a function.");if(p)throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribelistener for more details.");var e=!0;return h(),u.push(t),function(){if(e){if(p)throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribelistener for more details.");e=!1,h();var i=u.indexOf(t);u.splice(i,1),d=null}}}function g(t){if(!a(t))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===t.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(p)throw new Error("Reducers may not dispatch actions.");try{p=!0,l=c(l,t)}finally{p=!1}for(var e=d=u,i=0;i<e.length;i++){(0,e[i])()}return t}function v(t){if("function"!=typeof t)throw new Error("Expected the nextReducer to be a function.");c=t,g({type:o.REPLACE})}function y(){var t,e=m;return(t={subscribe:function(t){if("object"!=typeof t||null===t)throw new TypeError("Expected the observer to be an object.");function i(){t.next&&t.next(f())}return i(),{unsubscribe:e(i)}}})[r.a]=function(){return this},t}return g({type:o.INIT}),(s={dispatch:g,subscribe:m,getState:f,replaceReducer:v})[r.a]=y,s}((t={},e)=>({api:R(t.api,e),ui:g(t.ui,e),screen:E(t.screen,e),routing:A(t.routing,e),titulos:N(t.titulos,e),banners:F(t.banners,e),menues:G(t.menues,e),items:U(t.items,e),leftmenu:$(t.leftmenu,e),noticias:Y(t.noticias,e),localidades:q(t.localidades,e),provincias:J(t.provincias,e),servicios:tt(t.servicios,e),cemaps:nt(t.cemaps,e),seccionales:st(t.seccionales,e),zonas:lt(t.zonas,e),convenios:ut(t.convenios,e),programacion:mt(t.programacion,e),leyendas:vt(t.leyendas,e),edicionesAnteriores:_t(t.edicionesAnteriores,e),tvEstrenos:Ct(t.tvEstrenos,e)}),{},(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||d)(function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return function(t){return function(){var i=t.apply(void 0,arguments),r=function(){throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.")},n={getState:i.getState,dispatch:function(){return r.apply(void 0,arguments)}},o=e.map((function(t){return t(n)}));return l({},i,{dispatch:r=d.apply(void 0,o)(i.dispatch)})}}}(...[({dispatch:t})=>e=>i=>{if("[app] API Request"===i.type){const{ODataFetch:e,params:r,onSuccess:n,onError:o}=i.meta;t(I(e)),e.get(r).then(i=>{t(j(e)),t({type:n,payload:{send:r,receive:i}})}).catch(i=>{t(j(e)),t({type:o,payload:i})})}if("[app] API Update"===i.type){const{ODataFetch:e,body:r,onSuccess:n,onError:o}=i.meta;e.patch(r).then(e=>{t({type:n,payload:{send:r,receive:e}})}).catch(e=>{t({type:o,payload:{send:r,receive:e}})})}if("[app] API Delete"===i.type){const{ODataFetch:e,body:r,onSuccess:n,onError:o}=i.meta;e.delete(r).then(e=>{t({type:n,payload:{send:r,receive:e}})}).catch(e=>{t({type:o,payload:{send:r,receive:e}})})}if("[app] API Add"===i.type){const{ODataFetch:e,body:r,onSuccess:n,onError:o}=i.meta;e.post(r).then(e=>{t({type:n,payload:{send:r,receive:e}})}).catch(e=>{t({type:o,payload:{send:r,receive:e}})})}if("[app] API Action"===i.type){const{ODataFetch:e,body:r,key:n,accion:o,onSuccess:a,onError:s}=i.meta;e.action(o,r,n).then(e=>{e.redirect&&(location.href=e.redirect),t({type:a,payload:{send:r,receive:e}})}).catch(e=>{t({type:s,payload:{send:r,receive:e}})})}if("[app] API Funct"===i.type){const{ODataFetch:e,funct:r,onSuccess:n,onError:o}=i.meta;e.execute(r).then(e=>{e.redirect&&(location.href=e.redirect),t({type:n,payload:{receive:e}})}).catch(e=>{t({type:o,payload:{send:body,receive:e}})})}return e(i)},({dispatch:t})=>e=>i=>{if("[app] REST Request"===i.type){const{RESTfetch:e,id:r,onSuccess:n,onError:o,token:a}=i.meta;t(I()),e.get(r,a).then(e=>{t(j()),t({type:n,payload:{send:r,receive:e}})}).catch(e=>{t(j()),t({type:o,payload:{send:r,receive:e}})})}if("[app] REST Patch"===i.type){const{RESTfetch:e,id:r,body:n,onSuccess:o,onError:a,token:s}=i.meta;t(I()),e.patch(r,n,s).then(e=>{t(j()),t({type:o,payload:{send:{id:r,body:n},receive:e}})}).catch(e=>{t(j()),t({type:a,payload:{send:{id:r,body:n},receive:e}})})}if("[app] REST Update"===i.type){const{RESTfetch:e,id:r,body:n,onSuccess:o,onError:a,token:s}=i.meta;t(I()),e.put(r,n,s).then(e=>{t({type:o,payload:{send:{id:r,body:n},receive:e}})}).catch(e=>{t(j()),t({type:a,payload:{send:{id:r,body:n},receive:e}})})}if("[app] REST Delete"===i.type){const{RESTfetch:e,id:r,onSuccess:n,onError:o,token:a}=i.meta;t(I()),e.delete(r,a).then(e=>{t(j()),t({type:n,payload:{send:r,receive:e}})}).catch(e=>{t(j()),t({type:o,payload:{send:r,receive:e}})})}if("[app] REST Add"===i.type){const{RESTfetch:e,body:r,onSuccess:n,onError:o,token:a,id:s}=i.meta;t(I()),e.post(r,a,s).then(e=>{t(j()),t({type:n,payload:{send:r,receive:e}})}).catch(e=>{t(j()),t({type:o,payload:{send:r,receive:e}})})}return e(i)},...xt,...Lt,...jt,...Dt,...At,...It,...Rt,...zt,...kt,...Pt,...Nt,...Vt,...Ft,...Ht,...Gt,...Xt,...Ut,...Bt,...$t]))),Yt="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,Wt=(t,e,i=null)=>{for(;e!==i;){const i=e.nextSibling;t.removeChild(e),e=i}},qt=`{{lit-${String(Math.random()).slice(2)}}}`,Kt=`\x3c!--${qt}--\x3e`,Jt=new RegExp(`${qt}|${Kt}`);class Qt{constructor(t,e){this.parts=[],this.element=e;const i=[],r=[],n=document.createTreeWalker(e.content,133,null,!1);let o=0,a=-1,s=0;const{strings:c,values:{length:l}}=t;for(;s<l;){const t=n.nextNode();if(null!==t){if(a++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:i}=e;let r=0;for(let t=0;t<i;t++)te(e[t].name,"$lit$")&&r++;for(;r-- >0;){const e=c[s],i=re.exec(e)[2],r=i.toLowerCase()+"$lit$",n=t.getAttribute(r);t.removeAttribute(r);const o=n.split(Jt);this.parts.push({type:"attribute",index:a,name:i,strings:o}),s+=o.length-1}}"TEMPLATE"===t.tagName&&(r.push(t),n.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(qt)>=0){const r=t.parentNode,n=e.split(Jt),o=n.length-1;for(let e=0;e<o;e++){let i,o=n[e];if(""===o)i=ie();else{const t=re.exec(o);null!==t&&te(t[2],"$lit$")&&(o=o.slice(0,t.index)+t[1]+t[2].slice(0,-"$lit$".length)+t[3]),i=document.createTextNode(o)}r.insertBefore(i,t),this.parts.push({type:"node",index:++a})}""===n[o]?(r.insertBefore(ie(),t),i.push(t)):t.data=n[o],s+=o}}else if(8===t.nodeType)if(t.data===qt){const e=t.parentNode;null!==t.previousSibling&&a!==o||(a++,e.insertBefore(ie(),t)),o=a,this.parts.push({type:"node",index:a}),null===t.nextSibling?t.data="":(i.push(t),a--),s++}else{let e=-1;for(;-1!==(e=t.data.indexOf(qt,e+1));)this.parts.push({type:"node",index:-1}),s++}}else n.currentNode=r.pop()}for(const t of i)t.parentNode.removeChild(t)}}const te=(t,e)=>{const i=t.length-e.length;return i>=0&&t.slice(i)===e},ee=t=>-1!==t.index,ie=()=>document.createComment(""),re=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function ne(t,e){const{element:{content:i},parts:r}=t,n=document.createTreeWalker(i,133,null,!1);let o=ae(r),a=r[o],s=-1,c=0;const l=[];let d=null;for(;n.nextNode();){s++;const t=n.currentNode;for(t.previousSibling===d&&(d=null),e.has(t)&&(l.push(t),null===d&&(d=t)),null!==d&&c++;void 0!==a&&a.index===s;)a.index=null!==d?-1:a.index-c,o=ae(r,o),a=r[o]}l.forEach(t=>t.parentNode.removeChild(t))}const oe=t=>{let e=11===t.nodeType?0:1;const i=document.createTreeWalker(t,133,null,!1);for(;i.nextNode();)e++;return e},ae=(t,e=-1)=>{for(let i=e+1;i<t.length;i++){const e=t[i];if(ee(e))return i}return-1};const se=new WeakMap,ce=t=>"function"==typeof t&&se.has(t),le={},de={};class ue{constructor(t,e,i){this.__parts=[],this.template=t,this.processor=e,this.options=i}update(t){let e=0;for(const i of this.__parts)void 0!==i&&i.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=Yt?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],i=this.template.parts,r=document.createTreeWalker(t,133,null,!1);let n,o=0,a=0,s=r.nextNode();for(;o<i.length;)if(n=i[o],ee(n)){for(;a<n.index;)a++,"TEMPLATE"===s.nodeName&&(e.push(s),r.currentNode=s.content),null===(s=r.nextNode())&&(r.currentNode=e.pop(),s=r.nextNode());if("node"===n.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(s.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(s,n.name,n.strings,this.options));o++}else this.__parts.push(void 0),o++;return Yt&&(document.adoptNode(t),customElements.upgrade(t)),t}}const pe=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:t=>t}),he=` ${qt} `;class fe{constructor(t,e,i,r){this.strings=t,this.values=e,this.type=i,this.processor=r}getHTML(){const t=this.strings.length-1;let e="",i=!1;for(let r=0;r<t;r++){const t=this.strings[r],n=t.lastIndexOf("\x3c!--");i=(n>-1||i)&&-1===t.indexOf("--\x3e",n+1);const o=re.exec(t);e+=null===o?t+(i?he:Kt):t.substr(0,o.index)+o[1]+o[2]+"$lit$"+o[3]+qt}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");let e=this.getHTML();return void 0!==pe&&(e=pe.createHTML(e)),t.innerHTML=e,t}}class me extends fe{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){const t=super.getTemplateElement(),e=t.content,i=e.firstChild;return e.removeChild(i),((t,e,i=null,r=null)=>{for(;e!==i;){const i=e.nextSibling;t.insertBefore(e,r),e=i}})(e,i.firstChild),t}}const ge=t=>null===t||!("object"==typeof t||"function"==typeof t),ve=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class ye{constructor(t,e,i){this.dirty=!0,this.element=t,this.name=e,this.strings=i,this.parts=[];for(let t=0;t<i.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new be(this)}_getValue(){const t=this.strings,e=t.length-1,i=this.parts;if(1===e&&""===t[0]&&""===t[1]){const t=i[0].value;if("symbol"==typeof t)return String(t);if("string"==typeof t||!ve(t))return t}let r="";for(let n=0;n<e;n++){r+=t[n];const e=i[n];if(void 0!==e){const t=e.value;if(ge(t)||!ve(t))r+="string"==typeof t?t:String(t);else for(const e of t)r+="string"==typeof e?e:String(e)}}return r+=t[e],r}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class be{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===le||ge(t)&&t===this.value||(this.value=t,ce(t)||(this.committer.dirty=!0))}commit(){for(;ce(this.value);){const t=this.value;this.value=le,t(this)}this.value!==le&&this.committer.commit()}}class _e{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(ie()),this.endNode=t.appendChild(ie())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=ie()),t.__insert(this.endNode=ie())}insertAfterPart(t){t.__insert(this.startNode=ie()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){if(null===this.startNode.parentNode)return;for(;ce(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=le,t(this)}const t=this.__pendingValue;t!==le&&(ge(t)?t!==this.value&&this.__commitText(t):t instanceof fe?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):ve(t)?this.__commitIterable(t):t===de?(this.value=de,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,i="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=i:this.__commitNode(document.createTextNode(i)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof ue&&this.value.template===e)this.value.update(t.values);else{const i=new ue(e,t.processor,this.options),r=i._clone();i.update(t.values),this.__commitNode(r),this.value=i}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let i,r=0;for(const n of t)i=e[r],void 0===i&&(i=new _e(this.options),e.push(i),0===r?i.appendIntoPart(this):i.insertAfterPart(e[r-1])),i.setValue(n),i.commit(),r++;r<e.length&&(e.length=r,this.clear(i&&i.endNode))}clear(t=this.startNode){Wt(this.startNode.parentNode,t.nextSibling,this.endNode)}}class we{constructor(t,e,i){if(this.value=void 0,this.__pendingValue=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=i}setValue(t){this.__pendingValue=t}commit(){for(;ce(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=le,t(this)}if(this.__pendingValue===le)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=le}}class Ce extends ye{constructor(t,e,i){super(t,e,i),this.single=2===i.length&&""===i[0]&&""===i[1]}_createPart(){return new xe(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class xe extends be{}let Se=!1;(()=>{try{const t={get capture(){return Se=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class Ee{constructor(t,e,i){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=i,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;ce(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=le,t(this)}if(this.__pendingValue===le)return;const t=this.__pendingValue,e=this.value,i=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),r=null!=t&&(null==e||i);i&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),r&&(this.__options=Me(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=le}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const Me=t=>t&&(Se?{capture:t.capture,passive:t.passive,once:t.once}:t.capture);function Te(t){let e=Oe.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},Oe.set(t.type,e));let i=e.stringsArray.get(t.strings);if(void 0!==i)return i;const r=t.strings.join(qt);return i=e.keyString.get(r),void 0===i&&(i=new Qt(t,t.getTemplateElement()),e.keyString.set(r,i)),e.stringsArray.set(t.strings,i),i}const Oe=new Map,Le=new WeakMap;const Ae=new class{handleAttributeExpressions(t,e,i,r){const n=e[0];if("."===n){return new Ce(t,e.slice(1),i).parts}if("@"===n)return[new Ee(t,e.slice(1),r.eventContext)];if("?"===n)return[new we(t,e.slice(1),i)];return new ye(t,e,i).parts}handleTextExpression(t){return new _e(t)}};"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.3.0");const Ie=(t,...e)=>new fe(t,e,"html",Ae),je=(t,...e)=>new me(t,e,"svg",Ae),De=(t,e)=>`${t}--${e}`;let Re=!0;void 0===window.ShadyCSS?Re=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),Re=!1);const ze=t=>e=>{const i=De(e.type,t);let r=Oe.get(i);void 0===r&&(r={stringsArray:new WeakMap,keyString:new Map},Oe.set(i,r));let n=r.stringsArray.get(e.strings);if(void 0!==n)return n;const o=e.strings.join(qt);if(n=r.keyString.get(o),void 0===n){const i=e.getTemplateElement();Re&&window.ShadyCSS.prepareTemplateDom(i,t),n=new Qt(e,i),r.keyString.set(o,n)}return r.stringsArray.set(e.strings,n),n},ke=["html","svg"],Pe=new Set,Ne=(t,e,i)=>{Pe.add(t);const r=i?i.element:document.createElement("template"),n=e.querySelectorAll("style"),{length:o}=n;if(0===o)return void window.ShadyCSS.prepareTemplateStyles(r,t);const a=document.createElement("style");for(let t=0;t<o;t++){const e=n[t];e.parentNode.removeChild(e),a.textContent+=e.textContent}(t=>{ke.forEach(e=>{const i=Oe.get(De(e,t));void 0!==i&&i.keyString.forEach(t=>{const{element:{content:e}}=t,i=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{i.add(t)}),ne(t,i)})})})(t);const s=r.content;i?function(t,e,i=null){const{element:{content:r},parts:n}=t;if(null==i)return void r.appendChild(e);const o=document.createTreeWalker(r,133,null,!1);let a=ae(n),s=0,c=-1;for(;o.nextNode();){c++;for(o.currentNode===i&&(s=oe(e),i.parentNode.insertBefore(e,i));-1!==a&&n[a].index===c;){if(s>0){for(;-1!==a;)n[a].index+=s,a=ae(n,a);return}a=ae(n,a)}}}(i,a,s.firstChild):s.insertBefore(a,s.firstChild),window.ShadyCSS.prepareTemplateStyles(r,t);const c=s.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==c)e.insertBefore(c.cloneNode(!0),e.firstChild);else if(i){s.insertBefore(a,s.firstChild);const t=new Set;t.add(a),ne(i,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const Ve={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},Fe=(t,e)=>e!==t&&(e==e||t==t),He={attribute:!0,type:String,converter:Ve,reflect:!1,hasChanged:Fe};class Ge extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,i)=>{const r=this._attributeNameForProperty(i,e);void 0!==r&&(this._attributeToPropertyMap.set(r,i),t.push(r))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=He){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const i="symbol"==typeof t?Symbol():"__"+t,r=this.getPropertyDescriptor(t,i,e);void 0!==r&&Object.defineProperty(this.prototype,t,r)}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(r){const n=this[t];this[e]=r,this.requestUpdateInternal(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||He}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty("finalized")||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const i of e)this.createProperty(i,t[i])}}static _attributeNameForProperty(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,i=Fe){return i(t,e)}static _propertyValueFromAttribute(t,e){const i=e.type,r=e.converter||Ve,n="function"==typeof r?r:r.fromAttribute;return n?n(t,i):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const i=e.type,r=e.converter;return(r&&r.toAttribute||Ve.toAttribute)(t,i)}initialize(){this._updateState=0,this._updatePromise=new Promise(t=>this._enableUpdatingResolver=t),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,i){e!==i&&this._attributeToProperty(t,i)}_propertyToAttribute(t,e,i=He){const r=this.constructor,n=r._attributeNameForProperty(t,i);if(void 0!==n){const t=r._propertyValueToAttribute(e,i);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(n):this.setAttribute(n,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(8&this._updateState)return;const i=this.constructor,r=i._attributeToPropertyMap.get(t);if(void 0!==r){const t=i.getPropertyOptions(r);this._updateState=16|this._updateState,this[r]=i._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState}}requestUpdateInternal(t,e,i){let r=!0;if(void 0!==t){const n=this.constructor;i=i||n.getPropertyOptions(t),n._valueHasChanged(this[t],e,i.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==i.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,i))):r=!1}!this._hasRequestedUpdate&&r&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,e){return this.requestUpdateInternal(t,e),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(t){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t?this.update(e):this._markUpdated()}catch(e){throw t=!1,this._markUpdated(),e}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}Ge.finalized=!0;const Xe=Element.prototype;Xe.msMatchesSelector||Xe.webkitMatchesSelector;const Ue=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Be=Symbol();class $e{constructor(t,e){if(e!==Be)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(Ue?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const Ze=t=>new $e(String(t),Be),Ye=(t,...e)=>{const i=e.reduce((e,i,r)=>e+(t=>{if(t instanceof $e)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+t[r+1],t[0]);return new $e(i,Be)};(window.litElementVersions||(window.litElementVersions=[])).push("2.4.0");const We={};class qe extends Ge{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(Array.isArray(t)){const e=(t,i)=>t.reduceRight((t,i)=>Array.isArray(i)?e(i,t):(t.add(i),t),i),i=e(t,new Set),r=[];i.forEach(t=>r.unshift(t)),this._styles=r}else this._styles=void 0===t?[]:[t];this._styles=this._styles.map(t=>{if(t instanceof CSSStyleSheet&&!Ue){const e=Array.prototype.slice.call(t.cssRules).reduce((t,e)=>t+e.cssText,"");return Ze(e)}return t})}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?Ue?this.renderRoot.adoptedStyleSheets=t.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){const e=this.render();super.update(t),e!==We&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){return We}}qe.finalized=!0,qe.render=(t,e,i)=>{if(!i||"object"!=typeof i||!i.scopeName)throw new Error("The `scopeName` option is required.");const r=i.scopeName,n=Le.has(e),o=Re&&11===e.nodeType&&!!e.host,a=o&&!Pe.has(r),s=a?document.createDocumentFragment():e;if(((t,e,i)=>{let r=Le.get(e);void 0===r&&(Wt(e,e.firstChild),Le.set(e,r=new _e(Object.assign({templateFactory:Te},i))),r.appendInto(e)),r.setValue(t),r.commit()})(t,s,Object.assign({templateFactory:ze(r)},i)),a){const t=Le.get(s);Le.delete(s);const i=t.value instanceof ue?t.value.template:void 0;Ne(r,s,i),Wt(e,e.firstChild),e.appendChild(s),Le.set(e,t)}!n&&o&&window.ShadyCSS.styleElement(e.host)};const Ke=(...t)=>e=>t.reduce((t,e)=>null!=t&&null!=t[e]?t[e]:null,e),Je=(t,...e)=>i=>class extends i{constructor(){super(),this.__currentStates=[],this.__deepValues=[]}connectedCallback(){for(let i=0;i<e.length;i++){const r=e[i].split(".");this.__currentStates.push(null);let n=r.length>0?Ke(...r):null;this.__deepValues.push(n),this.__storeUnsubscribe=t.subscribe(()=>this.__stateChanged(i,t.getState())),this.__stateChanged(i,t.getState())}super.connectedCallback&&super.connectedCallback()}getCurrent(){return[...this.__currentStates]}disconnectedCallback(){this.__storeUnsubscribe(),super.disconnectedCallback&&super.disconnectedCallback()}__stateChanged(t,i){if(this.stateChanged){let r=!0;if(this.__deepValues[t]){let e=this.__currentStates[t];this.__currentStates[t]=this.__deepValues[t](i),r=e!=this.__currentStates[t]}r&&this.stateChanged(i,e[t])}}},Qe=Je,ti=Ye`
    :host([layout="${Ze("SLIDER_HEADER_BODY")}"]) {
        grid-template-areas:
            "foot  header"
            "foot    body";
        grid-template-rows: 1.8fr 8.2fr;
        grid-template-columns: 1.5fr 8.5fr;
        grid-gap: 0rem;
    }

    :host([layout="${Ze(b.name)}"]) {
        grid-template-areas:
            "header"
            "body";
        grid-template-rows: .8fr 9.2fr;
        grid-template-columns: 1fr;
        grid-gap: 0rem;
    }
    :host([layout="${Ze("BODY_FOOT")}"]) {
        grid-template-areas:
            "body"
            "foot";
        grid-template-rows: 9fr 1fr;
        grid-gap: 0.3rem;
    }

    :host([layout="${Ze(y.name)}"]) {
        grid-template-areas:
            "header"
            "body"
            "foot";
        grid-template-rows: .8fr 8.4fr .8fr;
        grid-template-columns: 1fr;
    }
    :host([layout="${Ze(v.name)}"]) {
        grid-template-areas: "body";
        grid-template-rows: 1fr;
        grid-template-columns: 1fr;
    }

    .header {
        grid-area: header;
        background-color: var(--color-azul-oscuro);
        padding: 0 1rem 0 1rem;
    }
    .body {
        grid-area: body;
        background-color: var(--color-celeste);
        padding: 1rem;
    }
    .foot {
        grid-area: foot;
        background-color: var(--color-blanco);
    }
`,ei=Ye`
label{
    
    color:var(--color-azul-oscuro);
    font-size:var(--font-label-size);
    border:none;
    background-color:transparent;
    outline:none;
    border-radius:0;
    pointer-events:none;
    font-family:var(--font-label-family);
    font-weight:var(--font-label-weight);
}
label[oculto] {
    display: none;
}
label[error]{
    position: relative;
    transform: translateY(-80%);
    color:var(--color-rojo);
    font-size:var(--font-error-size);
    font-weight:var(--font-error-weight);
    font-family:var(--font-error-family)
}
`;class ii extends(Qe(Zt,"ui.warning.timeStamp","ui.media.timeStamp","screen.timeStamp")(qe)){constructor(){super(),this.hidden=!0,this.idioma="ES"}static get styles(){return Ye`
			${ei}
			:host {
				position: fixed;
				display: grid;
				top: 0rem;
				left: 0rem;
				bottom: 0rem;
				right: 0rem;
				height: 100vh;
				width: 100vw;
				z-index: 100000;
			}
			:host([hidden]) {
				display: none;
			}
			#fondo {
				position: absolute;
				display: grid;
				top: 0rem;
				left: 0rem;
				bottom: 0rem;
				right: 0rem;
				height: 100%;
				width: 100%;
				background-color: var(--color-negro) !important;
				opacity: 0.3;
				backdrop-filter: blur(2px);
			}
			#datos {
				position: relative;
				display: grid;
				max-width: fit-content;
				min-width: 14rem;
				justify-self: center;
				max-height: fit-content;
				min-height: 8rem;
				align-self: center;
				border-radius: 1rem;
				box-shadow: var(--shadow-elevation-3-box);
				grid-template-rows: 20% 20% 60%;
				grid-gap: 0.5rem;
				align-items: center;
			}
			.fondoInformacion {
				background-color: var(--color-gris-fondo) !important;
			}
			.fondoError {
				background-color: var(--color-error) !important;
			}
			.fondoOk {
				background-color: var(--color-ok) !important;
			}
			#x {
				position: relative;
				align-self: flex-start;
				justify-self: flex-end;
				padding: 0.6rem 1rem 0 0;
				cursor: pointer;
			}
			#titulo {
				position: relative;
				text-align: center;
				font-size: var(--font-header-h1-menos-size);
				font-weight: var(--font-header-h1-menos-weight);
			}
			#cuerpo {
				position: relative;
				text-align: center;
				width: 80%;
				justify-self: center;
				align-self: flex-start;
				font-size: var(--font-header-h2-size);
				font-weight: var(--font-header-h2-weight);
			}
		`}render(){return Ie`
			<div id="fondo" @click=${this.clickBoton1}></div>
			<div id="datos">
				<div id="x" @click=${this.clickBoton1}>X</div>
				<label id="titulo"> </label>
				<label id="cuerpo"> </label>
			</div>
		`}stateChanged(t,e){if("ui.warning.timeStamp"==e){if(this.hidden=t.ui.warning.hidden,!this.hidden){var i=this.shadowRoot.querySelector("#datos"),r=this.shadowRoot.querySelector("#titulo"),n=this.shadowRoot.querySelector("#cuerpo");r&&(r.innerHTML=t.ui.warning.titulo),n&&(n.innerHTML=t.ui.warning.subTitulo),i.className="",i.classList.add(t.ui.warning.backgroundColor),t.ui.warning.timeOut>0&&setTimeout(()=>{this.clickBoton1()},t.ui.warning.timeOut)}this.update()}}clickBoton1(){Zt.dispatch({type:"[ui] hide warning"})}firstUpdated(){}static get properties(){return{mediaSize:{type:String,reflect:!0,attribute:"media-size"},hidden:{type:Boolean,reflect:!0}}}}window.customElements.define("pantalla-warning",ii);const ri=Ye`
    .grid {
        display: grid;
        grid-gap: 0.5rem;
        padding: 0.5rem;
        align-items: center;
    }

    .fit {
        grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
    }
    .fill {
        grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
    }
    .column {
        grid-auto-flow: column;
    }
    .start {
        place-content: start;
    }
    .end {
        place-content: end;
    }
    .center {
        place-content: center;
    }
    .itemsCenter {
        justify-items: center;
    }
    .stretch {
        justify-content: stretch;
        align-content: stretch;
    }
    .gridGapPunto2vh{
        grid-gap: .2vh;
    }
`,ni={MENU:je`<svg xmlns="http://www.w3.org/2000/svg" height="2rem" viewBox="0 0 24 24" width="2rem"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>`,SEARCH:je`<svg xmlns="http://www.w3.org/2000/svg" height="2rem" viewBox="0 0 24 24" width="2rem"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>`,RIGHT:je`<svg xmlns="http://www.w3.org/2000/svg" height="2rem" viewBox="0 0 24 24" width="2rem"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg>`,HOME:je`<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 53 47" style="enable-background:new 0 0 53 47;" xml:space="preserve"><style type="text/css"></style><g id="XMLID_5043_"><path id="XMLID_5047_" class="st0" d="M7.3,45.7c0,0,0,1.2,1.1,1.2c1.4,0,13.3,0,13.3,0l0-10.9c0,0-0.2-1.8,1.6-1.8h5.5c2.1,0,1.9,1.8,1.9,1.8l0,10.9h13c1.5,0,1.4-1.5,1.4-1.5V25.3L26.8,8.9L7.3,25.3V45.7z M7.3,45.7"/><path id="XMLID_5044_" class="st0" d="M0.1,23.7c0,0,1.6,3.1,5.3,0L26.9,5.5l20.2,18.1c4.2,3,5.7,0,5.7,0L26.9,0.1L0.1,23.7zM0.1,23.7"/></g></svg>`,EXPANDMORE:je`<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/></svg>`,EXPANDLESS:je`<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"/></svg>`,CAMPANASOLA:je`<svg version="1.1" id="svgCampanasola" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 53 47" style="enable-background:new 0 0 53 47;" xml:space="preserve"><style type="text/css"></style><g id="XMLID_5036_"><path id="XMLID_5037_" class="st0" d="M15.1,3.9l-3.3-3.3C6.2,4.9,2.5,11.4,2,18.9h4.7C7.2,12.6,10.2,7.2,15.1,3.9L15.1,3.9zM46.3,18.9H51c-0.5-7.5-4-14-9.6-18.2l-3.3,3.3C42.8,7.2,45.9,12.6,46.3,18.9L46.3,18.9z M41.7,20C41.7,12.8,36.8,7,30,5.3V3.7c0-1.9-1.6-3.5-3.5-3.5c-1.9,0-3.5,1.6-3.5,3.5v1.6C16.3,7,11.4,12.8,11.4,20v12.8l-4.7,4.7v2.3h39.6v-2.3l-4.7-4.7V20z M26.5,46.8h0.9c1.6-0.2,2.8-1.4,3.3-2.8c0.2-0.5,0.5-1.2,0.5-1.9h-9.3C21.9,44.7,23.9,46.8,26.5,46.8L26.5,46.8z M26.5,46.8"/></g></svg>`,CAMPANACON:je`<svg version="1.1" id="svgCampanacon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 53 47" style="enable-background:new 0 0 53 47;" xml:space="preserve"><style type="text/css">.st1{fill:#E30613;}</style><g id="XMLID_5036_"><path id="XMLID_5037_" class="st0" d="M15.1,3.9l-3.3-3.3C6.2,4.9,2.5,11.4,2,18.9h4.7C7.2,12.6,10.2,7.2,15.1,3.9L15.1,3.9zM46.3,18.9H51c-0.5-7.5-4-14-9.6-18.2l-3.3,3.3C42.8,7.2,45.9,12.6,46.3,18.9L46.3,18.9z M41.7,20C41.7,12.8,36.8,7,30,5.3V3.7c0-1.9-1.6-3.5-3.5-3.5c-1.9,0-3.5,1.6-3.5,3.5v1.6C16.3,7,11.4,12.8,11.4,20v12.8l-4.7,4.7v2.3h39.6v-2.3l-4.7-4.7V20z M26.5,46.8h0.9c1.6-0.2,2.8-1.4,3.3-2.8c0.2-0.5,0.5-1.2,0.5-1.9h-9.3C21.9,44.7,23.9,46.8,26.5,46.8L26.5,46.8z M26.5,46.8"/></g><circle id="XMLID_468_" class="st1" cx="41.6" cy="11" r="10.4"/></svg>`,MISINDICATO:je`<svg version="1.1" id="svgMisindicato" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 71.8 34.7" style="enable-background:new 0 0 71.8 34.7;" xml:space="preserve"><style type="text/css">.st0{stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}</style><g id="XMLID_785_"><path id="XMLID_7_" class="st0" d="M63.1,13.6c-0.1-0.3-1.8-1.7-1.8-1.7C56.9,5.7,48.2,1.5,38.6,1.5c-13.1,0-26.9,11.9-28.5,22c0,0,1.2,2.8-1.1,4.8c0,0-3.7,2.1-8.1,1.9v2.6h18.4c0,0-0.6-1.4-0.6-4.2C19,19.5,32.1,7.9,44.8,8C56.6,8,63.1,13.6,63.1,13.6z"/><path id="XMLID_6_" class="st0" d="M68.3,29c0-0.2,0-0.4,0-0.5c0-8.6-9.7-15.6-21.7-15.6c-12,0-21.7,7-21.7,15.6c0,1.2,0.1,2.4,0.5,3.5h45.1v-2.9h-2L68.3,29z"/></g></svg>`,SECCIONALES:je`<svg width="28" height="39" viewBox="0 0 28 39" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 1.8C18.5 1.8 25.7 5.1 25.7 13.9C25.7 19 21.7 24.9 14 31.1C6.3 24.9 2.3 19 2.3 13.9C2.3 5.1 9.5 1.8 14 1.8ZM14 0C7.5 0 0 4.9 0 14.3C0 20.5 4.7 27.1 14 34C23.3 27.1 28 20.5 28 14.3C28 4.9 20.5 0 14 0Z" fill="white"/><path d="M14 10C11.8 10 10 11.8 10 14C10 16.2 11.8 18 14 18C16.2 18 18 16.2 18 14C18 11.8 16.2 10 14 10ZM0 36H28V38.2H0V36Z" fill="white"/></svg>`,SALUD:je`<svg version="1.1" id="svgSalud" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 71.8 52" style="enable-background:new 0 0 71.8 52;" xml:space="preserve"><style type="text/css"></style><path id="XMLID_1502_" class="st0" d="M69.6,25h-5.9c2.4-5.6,2.2-10,1.3-13.1C63.3,6.5,58,0.6,50.1,0.6c-2.1,0-4.2,0.4-6.4,1.2c-3.8,1.4-6.3,2.9-7.4,3.7c-1.1-0.8-3.6-2.3-7.4-3.7c-2.2-0.8-4.4-1.2-6.4-1.2c-7.9,0-13.3,5.9-14.9,11.3C6.7,15.1,6.3,20,9.4,26.2H2.3c-0.6,0-1.1,0.5-1.1,1.1c0,0.6,0.5,1.1,1.1,1.1h8.4c0.3,0.6,0.7,1.2,1.2,1.8c6.9,9.9,21.8,20.7,24.5,21.3v0.1c0,0,0.1,0,0.1-0.1c0.1,0,0.1,0,0.2,0v-0.1C39,50.2,53.4,41,60.9,30c0.7-1,1.3-2,1.9-3h6.9c0.6,0,1.1-0.5,1.1-1.1S70.2,25,69.6,25z M9.7,12.5c1.4-4.7,5.9-9.7,12.8-9.7c1.9,0,3.8,0.4,5.7,1.1c4.8,1.8,7.4,3.8,7.5,3.8C36.1,8,36.6,8,37,7.7c0,0,2.6-2,7.5-3.8c1.9-0.7,3.8-1.1,5.7-1.1c6.8,0,11.4,5,12.8,9.7c1.1,3.8,0.5,8.1-1.6,12.5h-6.5l-2.7-4.6c-0.2-0.3-0.5-0.5-0.9-0.5c-0.4,0-0.7,0.1-0.9,0.5l-2.2,3.3l-3.6-11.8c-0.1-0.5-0.6-0.7-1.1-0.8c-0.5,0-0.9,0.3-1.1,0.8L36.2,33l-6.7-17c-0.1-0.4-0.5-0.7-0.9-0.7c-0.5,0-0.8,0.2-1,0.6l-5.2,10.2H11.9C9.2,21.3,8.5,16.6,9.7,12.5z M59,28.9c-7,10.2-19.9,18.5-22.7,20.3C33.5,47.4,20.7,39,13.6,28.9c-0.1-0.2-0.3-0.4-0.4-0.6h9.7c0.4,0,0.8-0.2,1-0.6l4.4-8.7l6.9,17.8c0.1,0.4,0.6,0.7,1,0.7c0,0,0,0,0.1,0c0.5,0,0.9-0.3,1-0.8l6.1-20.8l3.2,10.5c0.1,0.4,0.5,0.7,0.9,0.7c0.4,0.1,0.8-0.1,1.1-0.5l2.6-3.8l2.2,3.7c0.2,0.3,0.5,0.5,0.9,0.5h5.9C59.8,27.7,59.4,28.3,59,28.9z"/></svg>`,CURSOS:je`<svg version="1.1" id="svgCursos" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 65.6 52" style="enable-background:new 0 0 65.6 52;" xml:space="preserve"><style type="text/css">.st1{clip-path:url(#XMLID_2_);</style><g id="XMLID_1536_"><path id="XMLID_2861_" class="st0" d="M55.1,10.4c-2.4-0.2-5.1-0.7-8.1-1.6c-3.6-1.1-7-0.9-10.2,0.5c-0.5,0.2-0.7,0.7-0.5,1.2c0.2,0.5,0.7,0.7,1.2,0.5c2.8-1.2,5.9-1.4,9-0.4c3.1,0.9,5.9,1.5,8.5,1.7c0,0,0,0,0.1,0c0.5,0,0.9-0.4,0.9-0.8C56,10.9,55.6,10.4,55.1,10.4L55.1,10.4z M55.1,10.4"/><path id="XMLID_2858_" class="st0" d="M55.1,14.2c-2.4-0.2-5.1-0.7-8.1-1.6c-3.6-1.1-7-0.9-10.2,0.5c-0.5,0.2-0.7,0.7-0.5,1.2c0.2,0.5,0.7,0.7,1.2,0.5c2.8-1.2,5.9-1.4,9-0.4c3.1,0.9,5.9,1.5,8.5,1.7c0,0,0,0,0.1,0c0.5,0,0.9-0.4,0.9-0.8C56,14.7,55.6,14.3,55.1,14.2L55.1,14.2z M55.1,14.2"/><path id="XMLID_2855_" class="st0" d="M55.1,33.4c-2.4-0.2-5.1-0.7-8.1-1.6c-3.6-1.1-7-0.9-10.2,0.5c-0.5,0.2-0.7,0.7-0.5,1.2c0.2,0.5,0.7,0.7,1.2,0.5c2.8-1.2,5.9-1.4,9-0.4c3.1,0.9,5.9,1.5,8.5,1.7c0,0,0,0,0.1,0c0.5,0,0.9-0.4,0.9-0.8C56,33.9,55.6,33.5,55.1,33.4L55.1,33.4z M55.1,33.4"/><path id="XMLID_2852_" class="st0" d="M55.1,37.3c-2.4-0.2-5.1-0.7-8.1-1.6c-3.6-1.1-7-0.9-10.2,0.5c-0.5,0.2-0.7,0.7-0.5,1.2c0.2,0.5,0.7,0.7,1.2,0.5c2.8-1.2,5.9-1.4,9-0.4c3.1,0.9,5.9,1.5,8.5,1.7c0,0,0,0,0.1,0c0.5,0,0.9-0.4,0.9-0.8C56,37.7,55.6,37.3,55.1,37.3L55.1,37.3z M55.1,37.3"/><path id="XMLID_2849_" class="st0" d="M55.1,18.1c-2.4-0.2-5.1-0.7-8.1-1.6c-3.6-1.1-7-0.9-10.2,0.5c-0.5,0.2-0.7,0.7-0.5,1.2c0.2,0.5,0.7,0.7,1.2,0.5c2.8-1.2,5.9-1.4,9-0.4c3.1,0.9,5.9,1.5,8.5,1.7c0,0,0,0,0.1,0c0.5,0,0.9-0.4,0.9-0.8C56,18.6,55.6,18.1,55.1,18.1L55.1,18.1z M55.1,18.1"/><path id="XMLID_2846_" class="st0" d="M55.1,25.8c-2.4-0.2-5.1-0.7-8.1-1.6c-3.6-1.1-7-0.9-10.2,0.5c-0.5,0.2-0.7,0.7-0.5,1.2c0.2,0.5,0.7,0.7,1.2,0.5c2.8-1.2,5.9-1.4,9-0.4c3.1,0.9,5.9,1.5,8.5,1.7c0,0,0,0,0.1,0c0.5,0,0.9-0.4,0.9-0.8C56,26.2,55.6,25.8,55.1,25.8L55.1,25.8z M55.1,25.8"/><path id="XMLID_2843_" class="st0" d="M55.1,21.9c-2.4-0.2-5.1-0.7-8.1-1.6c-3.6-1.1-7-0.9-10.2,0.5c-0.5,0.2-0.7,0.7-0.5,1.2c0.2,0.5,0.7,0.7,1.2,0.5c2.8-1.2,5.9-1.4,9-0.4c3.1,0.9,5.9,1.5,8.5,1.7c0,0,0,0,0.1,0c0.5,0,0.9-0.4,0.9-0.8C56,22.4,55.6,22,55.1,21.9L55.1,21.9z M55.1,21.9"/><path id="XMLID_2840_" class="st0" d="M55.1,29.6c-2.4-0.2-5.1-0.7-8.1-1.6c-3.6-1.1-7-0.9-10.2,0.5c-0.5,0.2-0.7,0.7-0.5,1.2c0.2,0.5,0.7,0.7,1.2,0.5c2.8-1.2,5.9-1.4,9-0.4c3.1,0.9,5.9,1.5,8.5,1.7c0,0,0,0,0.1,0c0.5,0,0.9-0.4,0.9-0.8C56,30.1,55.6,29.6,55.1,29.6L55.1,29.6z M55.1,29.6"/><path id="XMLID_2837_" class="st0" d="M10.9,12.2C10.9,12.2,11,12.2,10.9,12.2c2.6-0.2,5.4-0.8,8.5-1.7c3.1-0.9,6.2-0.8,9,0.4c0.5,0.2,1,0,1.2-0.5c0.2-0.5,0-1-0.5-1.2c-3.2-1.4-6.7-1.6-10.2-0.5c-3,0.9-5.7,1.4-8.1,1.6c-0.5,0-0.9,0.5-0.8,1C10,11.9,10.4,12.2,10.9,12.2L10.9,12.2z M10.9,12.2"/><path id="XMLID_2816_" class="st0" d="M10.9,31.4C10.9,31.4,11,31.4,10.9,31.4c2.6-0.2,5.4-0.8,8.5-1.7c3.1-0.9,6.2-0.8,9,0.4c0.5,0.2,1,0,1.2-0.5c0.2-0.5,0-1-0.5-1.2c-3.2-1.4-6.7-1.6-10.2-0.5c-3,0.9-5.7,1.4-8.1,1.6c-0.5,0-0.9,0.5-0.8,1C10,31,10.4,31.4,10.9,31.4L10.9,31.4z M10.9,31.4"/><path id="XMLID_2834_" class="st0" d="M10.9,16C10.9,16,11,16,10.9,16c2.6-0.2,5.4-0.8,8.5-1.7c3.1-0.9,6.2-0.8,9,0.4c0.5,0.2,1,0,1.2-0.5c0.2-0.5,0-1-0.5-1.2c-3.2-1.4-6.7-1.6-10.2-0.5c-3,0.9-5.7,1.4-8.1,1.6c-0.5,0-0.9,0.5-0.8,1C10,15.7,10.4,16,10.9,16L10.9,16z M10.9,16"/><path id="XMLID_2831_" class="st0" d="M10.9,35.2C10.9,35.2,11,35.2,10.9,35.2c2.6-0.2,5.4-0.8,8.5-1.7c3.1-0.9,6.2-0.8,9,0.4c0.5,0.2,1,0,1.2-0.5c0.2-0.5,0-1-0.5-1.2c-3.2-1.4-6.7-1.6-10.2-0.5c-3,0.9-5.7,1.4-8.1,1.6c-0.5,0-0.9,0.5-0.8,1C10,34.9,10.4,35.2,10.9,35.2L10.9,35.2z M10.9,35.2"/><path id="XMLID_2828_" class="st0" d="M10.9,39.1C10.9,39.1,11,39.1,10.9,39.1c2.6-0.2,5.4-0.8,8.5-1.7c3.1-0.9,6.2-0.8,9,0.4c0.5,0.2,1,0,1.2-0.5c0.2-0.5,0-1-0.5-1.2c-3.2-1.4-6.7-1.6-10.2-0.5c-3,0.9-5.7,1.4-8.1,1.6c-0.5,0-0.9,0.5-0.8,1C10,38.7,10.4,39.1,10.9,39.1L10.9,39.1z M10.9,39.1"/><path id="XMLID_2825_" class="st0" d="M10.9,19.9C10.9,19.9,11,19.9,10.9,19.9c2.6-0.2,5.4-0.8,8.5-1.7c3.1-0.9,6.2-0.8,9,0.4c0.5,0.2,1,0,1.2-0.5c0.2-0.5,0-1-0.5-1.2c-3.2-1.4-6.7-1.6-10.2-0.5c-3,0.9-5.7,1.4-8.1,1.6c-0.5,0-0.9,0.5-0.8,1C10,19.5,10.4,19.9,10.9,19.9L10.9,19.9z M10.9,19.9"/><path id="XMLID_2822_" class="st0" d="M10.9,27.6C10.9,27.6,11,27.6,10.9,27.6c2.6-0.2,5.4-0.8,8.5-1.7c3.1-0.9,6.2-0.8,9,0.4c0.5,0.2,1,0,1.2-0.5c0.2-0.5,0-1-0.5-1.2c-3.2-1.4-6.7-1.6-10.2-0.5c-3,0.9-5.7,1.4-8.1,1.6c-0.5,0-0.9,0.5-0.8,1C10,27.2,10.4,27.6,10.9,27.6L10.9,27.6z M10.9,27.6"/><path id="XMLID_2819_" class="st0" d="M10.9,23.7C10.9,23.7,11,23.7,10.9,23.7c2.6-0.2,5.4-0.8,8.5-1.7c3.1-0.9,6.2-0.8,9,0.4c0.5,0.2,1,0,1.2-0.5c0.2-0.5,0-1-0.5-1.2c-3.2-1.4-6.7-1.6-10.2-0.5c-3,0.9-5.7,1.4-8.1,1.6c-0.5,0-0.9,0.5-0.8,1C10,23.4,10.4,23.7,10.9,23.7L10.9,23.7z M10.9,23.7"/><g id="XMLID_2810_"><defs><rect id="XMLID_2811_" x="2.2" y="1.9" width="61.6" height="49.4"/></defs><clipPath id="XMLID_2_"><use xlink:href="#XMLID_2811_"  style="overflow:visible;"/></clipPath><path id="XMLID_2812_" class="st1" d="M61.6,7h-1.4V6.2c0-1.2-1-2.1-2.1-2c-1.3,0.1-4.2,0.1-8.8-1c-0.5-0.1-1,0.2-1.1,0.7c-0.1,0.5,0.2,1,0.7,1.1c4.6,1.2,7.6,1.2,9.4,1.1c0.1,0,0.2,0.1,0.2,0.2v36.4C55,43,50.4,42,47.1,41c-7.4-2.2-12.2,1.6-13.2,2.1V7.1c1-0.9,4.9-4.2,10.8-3.2c0.5,0.1,1-0.3,1-0.7c0.1-0.5-0.3-1-0.7-1c-6.1-1-10.4,2-11.9,3.4c-3.6-3.1-8.7-4.5-14.1-2.9c-5.7,1.7-9.3,1.8-11,1.6C6.8,4.1,5.8,5,5.8,6.2V7H4.4C3.2,7,2.2,8,2.2,9.2v36.6c0,1.2,1,2.2,2.2,2.2h23.4c0.4,0,0.7,0.2,0.8,0.5c1.8,3.7,7.1,3.7,8.8,0c0.1-0.3,0.5-0.5,0.8-0.5h23.4c1.2,0,2.2-1,2.2-2.2V28.7c0-0.5-0.4-0.9-0.9-0.9c-0.5,0-0.9,0.4-0.9,0.9v17.1c0,0.2-0.2,0.4-0.4,0.4H38.2c-1,0-2,0.6-2.4,1.5c-1.1,2.3-4.4,2.3-5.6,0c-0.4-0.9-1.4-1.5-2.4-1.5H4.4C4.2,46.2,4,46,4,45.8V9.2C4,9,4.2,8.8,4.4,8.8h1.4v34.6c0,0.4,0.3,0.8,0.7,0.9c0.2,0,4.3,1.1,13-1.5c4.2-1.3,8.2-0.5,11.4,1.8c1.2,0.9,3,0.9,4.3,0c1.9-1.4,6-3.4,11.4-1.8c8.6,2.6,12.8,1.6,13,1.5c0.4-0.1,0.7-0.5,0.7-0.9V8.8h1.4C61.8,8.8,62,9,62,9.2v15.3c0,0.5,0.4,0.9,0.9,0.9c0.5,0,0.9-0.4,0.9-0.9V9.2C63.8,8,62.8,7,61.6,7L61.6,7z M7.6,6.2C7.6,6.1,7.7,6,7.8,6c1.8,0.1,5.6,0.1,11.6-1.7c4.9-1.5,9.6-0.1,12.7,2.8v36.1c-0.5-0.3-5.6-4.4-13.2-2.1c-0.5,0.1-1,0.3-1.5,0.4c0,0,0,0,0,0c-2.9,0.8-6.8,1.5-9.8,1.2C7.6,40.1,7.6,6.9,7.6,6.2L7.6,6.2z M7.6,6.2"/></g></g></svg>`,ATRAS:je`<svg version="1.1" id="svgAtras" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 77.5 77.5" style="enable-background:new 0 0 77.5 77.5;" xml:space="preserve"><style type="text/css"></style><path id="XMLID_5304_" class="st0" d="M38.7,0.2C17.4,0.2,0,17.5,0,38.9s17.4,38.7,38.7,38.7c21.3,0,38.7-17.4,38.7-38.7S60.1,0.2,38.7,0.2z M62,46.3H35.5l8.2,8.2c2.3,2.3,2.3,6,0,8.3s-6,2.3-8.3,0L14,41.5c-0.4-0.4-0.4-1.1,0-1.6l21.4-21.4c1.2-1.2,2.7-1.7,4.2-1.7s3,0.6,4.2,1.7c2.3,2.3,2.3,6,0,8.3L35.5,35H62c3.1,0,5.6,2.5,5.6,5.6C67.7,43.8,65.1,46.3,62,46.3z"/></svg>`,TEATRO:je`<svg version="1.1" id="svgTeatro" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 59.3 48.6" style="enable-background:new 0 0 59.3 48.6;" xml:space="preserve"><style type="text/css"></style><g id="XMLID_1580_"><path id="XMLID_1579_" class="st0" d="M39,14l0.6,0.2c0.5,0.1,1-0.2,1.1-0.7c0.1-0.5-0.2-1-0.7-1.1l-0.6-0.2c-3-0.7-6.1,0.5-7.8,3c-0.3,0.4-0.1,1,0.3,1.3c0.4,0.3,1,0.2,1.3-0.3C34.5,14.3,36.8,13.4,39,14z"/><path id="XMLID_1602_" class="st0" d="M49.3,23.3c-4.4,2.2-9.6,2.2-14,0c-0.5-0.2-1,0-1.3,0.4c-0.1,0.2-0.1,0.5-0.1,0.7l0.9,2.7c1.3,4.1,5.7,6.3,9.8,5c2.4-0.8,4.2-2.6,5-5l0.9-2.7c0.2-0.5-0.1-1-0.6-1.2C49.8,23.2,49.5,23.2,49.3,23.3L49.3,23.3z M47.9,26.6c-1,3.1-4.3,4.8-7.4,3.8c-1.8-0.6-3.2-2-3.8-3.8l-0.2-0.7c3.8,1.3,7.9,1.3,11.7,0L47.9,26.6z"/><path id="XMLID_1576_" class="st0" d="M46.3,14.5l0.6-0.2c2.2-0.5,4.5,0.3,5.8,2.2c0.3,0.4,0.9,0.6,1.3,0.3c0.4-0.3,0.6-0.9,0.3-1.3c0,0,0,0,0,0c-1.7-2.6-4.8-3.8-7.8-3l-0.6,0.2c-0.5,0.2-0.8,0.7-0.6,1.2C45.3,14.3,45.8,14.6,46.3,14.5z"/><path id="XMLID_1593_" class="st0" d="M57.4,3.6c-9.8-3.3-20.4-3.3-30.2,0c-0.4,0.1-0.6,0.5-0.6,0.9v7.1c-8.1,1.8-16.5,1.3-24.3-1.3c-0.5-0.2-1,0.1-1.2,0.6c0,0.1,0,0.2,0,0.3v14c0,7.7,3.3,15.1,9,20.2c3.4,3.1,8.5,3.2,12.1,0.3l0.3-0.2c3.9-3.1,6.9-7.3,8.5-12.1c1.3,2,2.8,3.8,4.6,5.4c3.4,3.1,8.5,3.2,12.1,0.3l0.3-0.2c6.4-5.1,10.1-12.9,10.1-21.1V4.5C58.1,4.1,57.8,3.7,57.4,3.6z M21.3,44L21,44.2c-2.8,2.3-6.9,2.2-9.7-0.3C6,39.2,2.9,32.3,2.9,25.2V12.5c7.7,2.3,15.8,2.7,23.6,1v5c0,0.6,0,1.1,0.1,1.7c0,0.2,0,0.4,0.1,0.6c0,0.4,0.1,0.7,0.1,1.1c0,0.2,0.1,0.4,0.1,0.7c0,0.3,0.1,0.7,0.2,1c0,0.2,0.1,0.5,0.2,0.7c0.1,0.3,0.1,0.6,0.2,0.9c0.1,0.2,0.1,0.5,0.2,0.7c0.1,0.3,0.2,0.6,0.3,0.9c0.1,0.2,0.2,0.5,0.3,0.7c0.1,0.3,0.2,0.6,0.3,0.8c0.1,0.2,0.2,0.5,0.3,0.7c0.1,0.3,0.2,0.5,0.4,0.8c0.1,0.2,0.2,0.5,0.3,0.7c0.1,0.2,0.2,0.4,0.3,0.6C28.3,36.2,25.3,40.7,21.3,44z M56.2,17.7c0,7.6-3.4,14.9-9.4,19.6l-0.3,0.2c-2.8,2.3-6.9,2.2-9.7-0.3c-2.1-1.9-3.9-4.2-5.3-6.7c-1.5-2.8-2.5-5.8-2.9-8.9c-0.1-1-0.2-2.1-0.2-3.1V5.2c9-2.9,18.7-2.9,27.7,0V17.7z"/><path id="XMLID_122_" class="st0" d="M12.3,22.3l0.4-0.6c0.3-0.4,0.2-1-0.3-1.3c-0.4-0.3-1-0.2-1.3,0.3l-0.4,0.6c-1.1,1.7-3,2.7-5,2.7c-0.5,0-1,0.4-1,1c0,0.5,0.4,1,1,1C8.4,25.8,10.9,24.5,12.3,22.3z"/><path id="XMLID_1584_" class="st0" d="M22.4,34.4c-3.6-2.4-8.3-2.4-11.9,0c-1.5,1-1.9,3.1-0.9,4.6c0.6,0.9,1.6,1.5,2.8,1.5c0.5,0,1-0.1,1.5-0.4c1.7-0.8,3.6-0.8,5.3,0c1.6,0.8,3.6,0.2,4.5-1.5C24.3,37.1,23.8,35.3,22.4,34.4L22.4,34.4z M21.7,37.9c-0.4,0.6-1.2,0.8-1.8,0.5c-2.2-1.1-4.8-1.1-7,0c-0.6,0.3-1.4,0.1-1.8-0.5c-0.4-0.7-0.3-1.5,0.4-2c3-2,6.9-2,9.8,0C22,36.4,22.1,37.3,21.7,37.9L21.7,37.9z"/><path id="XMLID_1581_" class="st0" d="M27,28.9l-1.9-4.3l0,0c-0.1-0.4-0.5-0.6-0.9-0.6c-2,0-3.9-1-5-2.7l-0.4-0.6c-0.3-0.4-0.9-0.6-1.3-0.3s-0.6,0.9-0.3,1.3l0.4,0.6c1.2,1.8,3.1,3,5.2,3.4l-1.4,3.2c-0.6,1.5,0.1,3.3,1.6,3.9c1.5,0.6,3.3-0.1,3.9-1.6C27.4,30.5,27.4,29.6,27,28.9zM25.2,30.6c-0.4,0.5-1,0.6-1.5,0.3c-0.1-0.1-0.2-0.2-0.3-0.3c-0.2-0.3-0.2-0.7-0.1-1l1-2.3l1,2.3C25.4,30,25.4,30.3,25.2,30.6z"/></g></svg>`,MASUOCRA:je`<svg version="1.1" id="svgMasuocra" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 50.8 50.7" style="enable-background:new 0 0 50.8 50.7;" xml:space="preserve"><style type="text/css"></style><g id="XMLID_1506_"><g id="XMLID_1509_"><path id="XMLID_1510_" class="st0" d="M49.9,44.4L34.8,29.3c-0.4-0.4-0.9-0.6-1.4-0.6c-0.5,0-0.9,0.2-1.3,0.5L30,27.1c5.1-6.4,4.7-15.9-1.3-21.9c-6.4-6.4-16.9-6.4-23.4,0c-6.5,6.5-6.5,16.9,0,23.4c5.9,5.9,15.4,6.4,21.9,1.3l2.1,2.1c-0.7,0.8-0.6,1.9,0.1,2.7l15.1,15.1c0.8,0.8,2,0.8,2.8,0l1.3-1.3v0l1.3-1.3C50.6,46.4,50.6,45.2,49.9,44.4L49.9,44.4z M25.9,25.8c-4.9,4.9-12.9,4.9-17.8,0C3.1,20.9,3.1,12.9,8.1,8C13,3.1,21,3.1,25.9,8C30.8,12.9,30.8,20.9,25.9,25.8L25.9,25.8z M25.9,25.8"/></g></g></svg>`,FARMACIA:je`<svg version="1.1" id="svgFarmacia" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 53.8 52.6" style="enable-background:new 0 0 53.8 52.6;" xml:space="preserve"><style type="text/css"></style><g id="XMLID_4406_"><path id="XMLID_4431_" class="st0" d="M51.3,50.1v-4.4c0-0.2-0.1-0.5-0.3-0.6c-0.2-0.2-0.4-0.3-0.6-0.3H38.2c-0.2,0-0.5,0.1-0.6,0.3c-0.2,0.2-0.3,0.4-0.3,0.6v4.4H20.8V34.4c0-0.2-0.1-0.5-0.3-0.6s-0.4-0.3-0.6-0.3h-8.7c-0.2,0-0.5,0.1-0.6,0.3s-0.3,0.4-0.3,0.6v8.7H12v-7.9h7v14.8h-2.6v-4.4c0-0.2-0.1-0.5-0.3-0.6c-0.2-0.2-0.4-0.3-0.6-0.3H3.3c-0.2,0-0.5,0.1-0.6,0.3c-0.2,0.2-0.3,0.4-0.3,0.6v4.4H0.7v1.7H53v-1.7H51.3z M39.1,46.6h10.5v3.5H39.1V46.6z M4.2,46.6h10.5v3.5H4.2V46.6z M4.2,46.6"/><path id="XMLID_4427_" class="st0" d="M42.6,33.5H23.4c-0.2,0-0.5,0.1-0.6,0.3s-0.3,0.4-0.3,0.6v8.7c0,0.2,0.1,0.5,0.3,0.6s0.4,0.3,0.6,0.3h19.2c0.2,0,0.5-0.1,0.6-0.3c0.2-0.2,0.3-0.4,0.3-0.6v-8.7c0-0.2-0.1-0.5-0.3-0.6C43,33.6,42.8,33.5,42.6,33.5L42.6,33.5z M41.7,42.2H24.2v-7h17.4V42.2z M41.7,42.2"/><path id="XMLID_4413_" class="st0" d="M6.5,32.6c0.1,0,0.2,0,0.3,0v10.5h1.7v-11c0.5-0.3,1-0.7,1.3-1.2c0,0,0,0.1,0.1,0.1c0.8,1.1,2,1.7,3.3,1.7h0.3c1.3,0,2.5-0.6,3.2-1.6c0,0,0.1,0.1,0.1,0.1c0.8,0.9,1.9,1.5,3.1,1.5h0.4c1.2,0,2.4-0.6,3.2-1.5c0.1,0.1,0.1,0.2,0.2,0.3c0.8,0.8,1.8,1.3,2.9,1.3h0.5c1.1,0,2.2-0.5,2.9-1.3c0.1-0.1,0.2-0.2,0.2-0.3c0.8,1,1.9,1.5,3.2,1.5h0.4c1.2,0,2.4-0.5,3.1-1.5c0,0,0.1-0.1,0.1-0.1c0.8,1,2,1.6,3.2,1.6h0.3c1.3,0,2.5-0.6,3.3-1.7c0,0,0-0.1,0.1-0.1c0.3,0.5,0.8,0.9,1.3,1.2v11h1.7V32.6c0.1,0,0.2,0,0.3,0c1.4,0,2.7-0.7,3.4-1.9c0.7-1.2,0.8-2.6,0.3-3.9l-4-8.6c-0.1-0.3-0.5-0.5-0.8-0.5H35.6V16h0.9c0.2,0,0.5-0.1,0.6-0.3s0.3-0.4,0.3-0.6v-14c0-0.2-0.1-0.5-0.3-0.6s-0.4-0.3-0.6-0.3H17.3c-0.2,0-0.5,0.1-0.6,0.3c-0.2,0.2-0.3,0.4-0.3,0.6v14c0,0.2,0.1,0.5,0.3,0.6c0.2,0.2,0.4,0.3,0.6,0.3h0.9v1.7H7.7c-0.3,0-0.6,0.2-0.8,0.5l-4,8.6c-0.6,1.2-0.5,2.7,0.3,3.9C3.9,31.9,5.1,32.6,6.5,32.6L6.5,32.6z M20.3,30.9h-0.4c-0.7,0-1.3-0.3-1.8-0.8c-0.4-0.5-0.6-1.2-0.5-1.9h0l1.7-8.6h3.8l-0.6,8.8v0l0,0.4C22.5,29.9,21.5,30.9,20.3,30.9L20.3,30.9z M30.4,16v1.7h-7V16H30.4z M28.8,30.1c-0.4,0.5-1,0.7-1.7,0.7h-0.5c-0.6,0-1.2-0.3-1.7-0.7c-0.4-0.5-0.7-1.1-0.6-1.7l0.6-8.9h3.9l0.6,8.9C29.4,29.1,29.2,29.7,28.8,30.1L28.8,30.1z M35.6,30c-0.4,0.5-1.1,0.8-1.8,0.8h-0.4c-1.2,0-2.2-0.9-2.3-2.1l-0.6-9.2h3.8l1.7,8.6C36.2,28.8,36.1,29.5,35.6,30L35.6,30z M45.5,19.5l3.8,8.1c0.3,0.7,0.3,1.5-0.1,2.2c-0.4,0.7-1.1,1.1-1.9,1.1c-1,0-1.9-0.6-2.2-1.6l-3.3-9.8H45.5z M42.7,27.9c0.2,0.7,0.1,1.5-0.3,2.1c-0.4,0.6-1.1,0.9-1.9,0.9h-0.3c-1.1,0-2-0.8-2.2-1.8l-0.2-1.2l-1.7-8.3h3.8L42.7,27.9z M33.8,17.8h-1.7V16h1.7V17.8z M18.1,2.1h17.4v12.2H18.1V2.1z M19.9,16h1.7v1.7h-1.7V16z M17.6,19.5L15.7,29c-0.2,1.1-1.2,1.8-2.2,1.8h-0.3c-0.7,0-1.4-0.4-1.9-0.9c-0.4-0.6-0.5-1.4-0.3-2.1l2.8-8.3H17.6z M4.5,27.6l3.8-8.1h3.7l-2.6,7.8l0,0l-0.7,2c-0.3,0.9-1.2,1.6-2.2,1.6c-0.8,0-1.5-0.4-1.9-1.1C4.2,29.2,4.1,28.3,4.5,27.6L4.5,27.6z M4.5,27.6"/><path id="XMLID_4410_" class="st0" d="M30.4,6H29V4.6c0-0.2-0.1-0.4-0.2-0.5c-0.1-0.1-0.3-0.2-0.5-0.2h-2.9c-0.2,0-0.4,0.1-0.5,0.2c-0.1,0.1-0.2,0.3-0.2,0.5V6h-1.4c-0.2,0-0.4,0.1-0.5,0.2c-0.1,0.1-0.2,0.3-0.2,0.5v2.9c0,0.2,0.1,0.4,0.2,0.5s0.3,0.2,0.5,0.2h1.4v1.4c0,0.2,0.1,0.4,0.2,0.5s0.3,0.2,0.5,0.2h2.9c0.2,0,0.4-0.1,0.5-0.2s0.2-0.3,0.2-0.5v-1.4h1.4c0.2,0,0.4-0.1,0.5-0.2s0.2-0.3,0.2-0.5V6.8c0-0.2-0.1-0.4-0.2-0.5C30.8,6.1,30.6,6,30.4,6L30.4,6z M29.7,8.9"/><path id="XMLID_4407_" class="st0" d="M18.1,43.1c0,0.5-0.4,0.9-0.9,0.9c-0.5,0-0.9-0.4-0.9-0.9c0-0.5,0.4-0.9,0.9-0.9C17.8,42.2,18.1,42.6,18.1,43.1L18.1,43.1z M18.1,43.1"/></g></svg>`,TV:je`<svg version="1.1" id="svgTv" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 76.8 58" style="enable-background:new 0 0 76.8 58;" xml:space="preserve"><style type="text/css"></style><g id="XMLID_1376_"><path id="XMLID_2448_" class="st0" d="M59.6,44.2c0,0.5-0.4,0.9-0.9,0.9c-0.5,0-0.9-0.4-0.9-0.9c0-0.5,0.4-0.9,0.9-0.9C59.2,43.3,59.6,43.7,59.6,44.2L59.6,44.2z M59.6,44.2"/><path id="XMLID_2445_" class="st0" d="M59.6,41c0,0.5-0.4,0.9-0.9,0.9c-0.5,0-0.9-0.4-0.9-0.9c0-0.5,0.4-0.9,0.9-0.9C59.2,40.1,59.6,40.5,59.6,41L59.6,41z M59.6,41"/><path id="XMLID_2442_" class="st0" d="M59.6,47.7c0,0.5-0.4,0.9-0.9,0.9c-0.5,0-0.9-0.4-0.9-0.9c0-0.5,0.4-0.9,0.9-0.9C59.2,46.8,59.6,47.2,59.6,47.7L59.6,47.7z M59.6,47.7"/><path id="XMLID_2439_" class="st0" d="M62.8,44.2c0,0.5-0.4,0.9-0.9,0.9c-0.5,0-0.9-0.4-0.9-0.9c0-0.5,0.4-0.9,0.9-0.9C62.4,43.3,62.8,43.7,62.8,44.2L62.8,44.2z M62.8,44.2"/><path id="XMLID_2432_" class="st0" d="M62.8,41c0,0.5-0.4,0.9-0.9,0.9c-0.5,0-0.9-0.4-0.9-0.9c0-0.5,0.4-0.9,0.9-0.9C62.4,40.1,62.8,40.5,62.8,41L62.8,41z M62.8,41"/><path id="XMLID_1786_" class="st0" d="M62.8,47.7c0,0.5-0.4,0.9-0.9,0.9c-0.5,0-0.9-0.4-0.9-0.9c0-0.5,0.4-0.9,0.9-0.9C62.4,46.8,62.8,47.2,62.8,47.7L62.8,47.7z M62.8,47.7"/><path id="XMLID_1707_" class="st0" d="M59.6,36.9c0,0.5-0.4,0.9-0.9,0.9c-0.5,0-0.9-0.4-0.9-0.9c0-0.5,0.4-0.9,0.9-0.9C59.2,36,59.6,36.4,59.6,36.9L59.6,36.9z M59.6,36.9"/><path id="XMLID_1701_" class="st0" d="M70.5,0.7H7.4c-1.3,0-2.3,1-2.3,2.3v38.5c0,1.3,1,2.3,2.3,2.3h22.4v4.8h-3.3c-1.1,0-1.1,1.6,0,1.6h24.9c1.1,0,1.1-1.6,0-1.6h-3.3v-4.8h7.3v8.6c0,2.7,2.2,4.9,4.9,4.9c2.7,0,4.9-2.2,4.9-4.9v-8.6h5.4c1.3,0,2.3-1,2.3-2.3V3C72.8,1.8,71.8,0.7,70.5,0.7L70.5,0.7z M46.5,48.7H31.5v-4.8h15.1V48.7z M63.5,51.7h-1c-1.1,0-1.1,1.6,0,1.6h0.9c-0.4,1.4-1.7,2.4-3.1,2.4c-1.5,0-2.8-1-3.1-2.4h2.7c1.1,0,1.1-1.6,0-1.6H57V34.9c0-0.3,0.2-0.5,0.5-0.5H63c0.3,0,0.5,0.2,0.5,0.5L63.5,51.7z M71.2,41.5c0,0.4-0.3,0.7-0.7,0.7h-5.4v-2.9h2.4c0.4,0,0.8-0.4,0.8-0.8V6.1c0-0.4-0.4-0.8-0.8-0.8H21.6c-1.1,0-1.1,1.6,0,1.6h45v30.8h-1.6v-2.7c0-1.2-1-2.2-2.2-2.2h-5.4c-1.2,0-2.2,1-2.2,2.2v2.7H11.3V6.9h5c1.1,0,1.1-1.6,0-1.6h-5.8c-0.4,0-0.8,0.4-0.8,0.8v32.4c0,0.4,0.4,0.8,0.8,0.8h44.9v2.9h-48c-0.4,0-0.7-0.3-0.7-0.7V3c0-0.4,0.3-0.7,0.7-0.7h63.1c0.4,0,0.7,0.3,0.7,0.7V41.5z M71.2,41.5"/><path id="XMLID_1698_" class="st0" d="M45.5,27c-0.4-0.3-0.9-0.2-1.1,0.2c-0.2,0.3-0.5,0.5-0.7,0.8c-0.8,0.7,0.3,1.9,1.1,1.2c0.3-0.3,0.6-0.6,0.9-1C45.9,27.8,45.9,27.2,45.5,27L45.5,27z M45.5,27"/><path id="XMLID_1398_" class="st0" d="M39,31.4c0.8,0,1.6-0.1,2.4-0.4c0.4-0.1,0.7-0.6,0.5-1c-0.1-0.4-0.6-0.7-1-0.5c-2.9,0.9-6.1-0.3-7.7-3c-1.6-2.6-1.2-6,0.9-8.2c2.1-2.2,5.5-2.7,8.2-1.2c2.7,1.5,4,4.7,3.2,7.6c-0.3,1,1.3,1.4,1.6,0.4c0.9-3.5-0.5-7.1-3.4-9.1c-3-2-6.9-1.9-9.8,0.3c-2.9,2.2-4,5.9-2.8,9.4C32.2,29.1,35.4,31.4,39,31.4L39,31.4z M39,31.4"/><path id="XMLID_1377_" class="st0" d="M42.8,22.4l-4.3-3.2c-0.5-0.4-1.3,0-1.3,0.6v6.5c0,0.7,0.8,1,1.3,0.6l4.3-3.2C43.2,23.4,43.2,22.7,42.8,22.4L42.8,22.4z M38.8,24.7v-3.3l2.2,1.6L38.8,24.7z M38.8,24.7"/></g></svg>`,CINE:je`<svg version="1.1" id="svgCine" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"viewBox="0 0 53.9 50.7" style="enable-background:new 0 0 53.9 50.7;" xml:space="preserve"><style type="text/css"></style><g id="XMLID_1665_"><path id="XMLID_2091_" class="st0" d="M13.9,13.2c0,0,0.1,0,0.1,0c0.5,0,0.9-0.4,1-0.9c0.2-1.6,1.5-2.8,3.1-2.8c0.6,0,1-0.5,1-1c0-0.6-0.5-1-1-1c-2.6,0-4.8,2-5.1,4.6C12.9,12.7,13.3,13.2,13.9,13.2L13.9,13.2z M13.9,13.2"/><path id="XMLID_1682_" class="st0" d="M49.6,39.1c-0.7-0.4-1.6-0.6-2.5-0.4c-0.1-0.1-0.3-0.2-0.4-0.3c-1-0.6-2.2-0.8-3.4-0.5c-1.2,0.3-2.1,1-2.7,2c-0.9,1.6-0.8,3.6,0.3,5c0,1.2,0.6,2.4,1.7,3c0.5,0.3,1.1,0.5,1.7,0.5c0.3,0,0.6,0,0.9-0.1c0.9-0.2,1.6-0.8,2.1-1.6c0.2-0.4,0.4-0.8,0.4-1.3c1.2,0,2.4-0.6,3-1.7C51.7,42.1,51.2,40,49.6,39.1L49.6,39.1z M49,42.7c-0.3,0.5-1,0.8-1.6,0.6c-0.4-0.1-0.8,0-1.1,0.4c-0.1,0.1-0.2,0.2-0.3,0.3c-0.2,0.2-0.4,0.5-0.3,0.8c0,0.3,0,0.6-0.2,0.8c-0.2,0.3-0.5,0.6-0.9,0.6c-0.4,0.1-0.7,0-1.1-0.2c-0.5-0.3-0.8-0.9-0.7-1.4c0-0.3-0.1-0.6-0.3-0.8c-0.7-0.8-0.9-2-0.3-2.9c0.3-0.6,0.9-1,1.5-1.1c0.2-0.1,0.4-0.1,0.6-0.1c0.4,0,0.9,0.1,1.2,0.3c0.2,0.1,0.3,0.2,0.5,0.4c0.3,0.3,0.7,0.4,1.1,0.2c0.4-0.2,0.9-0.1,1.3,0.1C49.2,41.2,49.4,42.1,49,42.7L49,42.7z M49,42.7"/><path id="XMLID_1679_" class="st0" d="M16.1,18.7c-0.6,0-1,0.5-1,1c0,0.6,0.5,1,1,1h0c0.6,0,1-0.5,1-1C17.1,19.1,16.6,18.7,16.1,18.7L16.1,18.7z M16.1,18.7"/><path id="XMLID_1666_" class="st0" d="M41.3,22.2c0-1.7-1.2-3.1-2.8-3.5c-0.4-2.2-1.3-3.9-2.7-5c0-0.2,0-0.4,0-0.6c0-2.1-1-4-2.8-5.1c-0.5-2.8-3-4.9-5.9-4.9c-0.2,0-0.4,0-0.6,0c-1.4-1.6-3.3-2.5-5.4-2.5c-2.1,0-4.1,0.9-5.4,2.5c-0.2,0-0.4,0-0.6,0c-2.9,0-5.4,2.1-5.9,4.9c-1.7,1.1-2.8,3-2.8,5.1c0,0.2,0,0.4,0,0.6c-1.4,1.1-2.4,2.8-2.7,5c-1.6,0.4-2.8,1.8-2.8,3.5c0,1.9,1.5,3.4,3.3,3.6l3,19.7c0.3,2.1,1.7,3,2.8,3h3.6h0c0,0,0,0,0,0h9.6h0h5.1c0,0,0,0,0,0h3.6c1.2,0,2.5-0.9,2.8-3l3-19.7C39.8,25.7,41.3,24.1,41.3,22.2L41.3,22.2z M2.9,22.2c0-0.9,0.7-1.5,1.5-1.5h7.1c0.6,0,1-0.5,1-1c0-0.6-0.5-1-1-1H5.8c0.4-1.7,1.1-2.8,2.3-3.6c0.3-0.2,0.5-0.6,0.4-1c-0.1-0.3-0.1-0.5-0.1-0.8c0-1.5,0.8-2.9,2.1-3.6c0.3-0.2,0.5-0.5,0.5-0.8c0.2-2.1,1.9-3.6,4-3.6c0.3,0,0.6,0,0.8,0.1c0.4,0.1,0.8-0.1,1-0.4c1-1.3,2.5-2.1,4.2-2.1c1.6,0,3.2,0.8,4.2,2.1c0.2,0.3,0.6,0.5,1,0.4c0.3-0.1,0.6-0.1,0.8-0.1c2.1,0,3.8,1.6,4,3.6c0,0.3,0.2,0.6,0.5,0.8c1.3,0.7,2.1,2.1,2.1,3.6c0,0.3,0,0.5-0.1,0.8c-0.1,0.4,0.1,0.8,0.4,1c1.2,0.8,1.9,2,2.3,3.6H20.6c-0.6,0-1,0.5-1,1c0,0.6,0.5,1,1,1h17h0h0h0.1c0.9,0,1.5,0.7,1.5,1.5c0,0.9-0.7,1.5-1.5,1.5h-7h0H11.5h0h-7C3.6,23.8,2.9,23.1,2.9,22.2L2.9,22.2zM12.7,36.3L12.7,36.3h-0.5V32H30v4.3h-0.5h0H12.7z M19.1,30L19,25.8h4.3L23.1,30H19.1z M16.9,25.8l0.2,4.2H13l-0.4-4.2H16.9zM29.2,30h-4.1l0.2-4.2h4.3L29.2,30z M10.1,46.5c-0.3,0-0.7-0.3-0.8-1.3l-3-19.4h4.3l0.4,4.5c-0.5,0.3-0.8,0.9-0.8,1.5v4.8c0,0.9,0.7,1.6,1.6,1.8l0.8,8.2H10.1z M14.6,46.5l-0.8-8.2h3.6l0.3,8.2H14.6z M19.8,46.5l-0.3-8.2h3.2l-0.3,8.2H19.8z M24.4,46.5l0.3-8.2h3.6l-0.8,8.2H24.4z M33,45.2c-0.1,0.9-0.6,1.3-0.8,1.3h-2.5l0.8-8.2c0.9-0.1,1.6-0.9,1.6-1.8v-4.8c0-0.6-0.3-1.2-0.8-1.5l0.4-4.5h4.3L33,45.2z M33,45.2"/><path id="XMLID_1697_" class="st0" d="M26.1,12.6c1.6,0,2.9,1.2,3.1,2.8c0.1,0.5,0.5,0.9,1,0.9c0,0,0.1,0,0.1,0c0.6-0.1,1-0.5,0.9-1.1c-0.3-2.6-2.4-4.6-5.1-4.6c-0.6,0-1,0.5-1,1C25.1,12.2,25.6,12.6,26.1,12.6L26.1,12.6z M26.1,12.6"/><path id="XMLID_1688_" class="st0" d="M51.2,25.2c0.1-1.7-0.9-3.3-2.6-3.9c-1-0.3-2-0.3-2.9,0.2c-0.9,0.5-1.6,1.2-1.9,2.2c-0.2,0.5-0.2,0.9-0.2,1.4c-0.9,0.5-1.6,1.3-2,2.3c-0.4,1-0.3,2.2,0.2,3.1c0.5,1,1.3,1.7,2.4,2.1c0.4,0.1,0.9,0.2,1.3,0.2c0.8,0,1.6-0.2,2.3-0.7c1.9,0.3,3.8-0.8,4.5-2.7C52.8,27.9,52.4,26.3,51.2,25.2L51.2,25.2z M50.4,28.8c-0.4,1-1.5,1.6-2.5,1.3c-0.3-0.1-0.7,0-1,0.2c-0.6,0.5-1.4,0.7-2.1,0.4c-0.5-0.2-1-0.6-1.2-1.1c-0.2-0.5-0.3-1.1-0.1-1.6c0.2-0.7,0.8-1.2,1.5-1.4c0.3-0.1,0.5-0.2,0.6-0.5c0.1-0.2,0.2-0.5,0.1-0.8c-0.1-0.4-0.1-0.7,0-1.1c0.2-0.5,0.5-0.8,0.9-1c0.3-0.1,0.5-0.2,0.8-0.2c0.2,0,0.4,0,0.6,0.1c0.9,0.3,1.4,1.2,1.2,2.1c-0.1,0.4,0.1,0.9,0.4,1.1C50.3,27,50.7,27.9,50.4,28.8L50.4,28.8z M50.4,28.8"/></g></svg>`,CINECARTON:je`<svg width="36" height="40" viewBox="0 0 36 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M34.4211 16.1465H7.76701L33.3685 8.73016C33.5675 8.67249 33.7353 8.5379 33.8354 8.35663C33.9355 8.17505 33.9593 7.96143 33.9017 7.76245L32.5619 3.13751C32.0267 1.29028 30.3067 0 28.3792 0C27.973 0 27.5683 0.0576782 27.1759 0.171204L3.13872 7.1344C2.02696 7.45636 1.10564 8.1955 0.54381 9.21509C-0.0177139 10.2347 -0.14955 11.4087 0.172411 12.5201L1.48131 17.0386V35.6522C1.48131 38.0496 3.43169 40 5.82884 40H15.2167C15.6482 40 15.9979 39.6503 15.9979 39.2188C15.9979 38.7872 15.6482 38.4375 15.2167 38.4375H5.82915C4.2932 38.4375 3.04381 37.1881 3.04381 35.6522V25.0204H7.04619H7.04802H7.04955H13.1677H13.1695H13.1714H19.2895H19.2914H19.2932H25.4114H25.4132H25.4147H33.6398V35.6522C33.6398 37.1881 32.3904 38.4375 30.8545 38.4375H21.4667C21.0354 38.4375 20.6854 38.7872 20.6854 39.2188C20.6854 39.6503 21.0354 40 21.4667 40H30.8545C33.2519 40 35.2023 38.0496 35.2023 35.6522V16.9278C35.2023 16.4963 34.8526 16.1465 34.4211 16.1465ZM20.6451 23.4579L23.9645 17.709H28.2818L24.9628 23.4579H20.6451ZM14.5233 23.4579L17.8427 17.709H22.16L18.8409 23.4579H14.5233ZM8.40178 23.4579L11.7209 17.709H16.0385L12.7191 23.4579H8.40178ZM11.3064 13.3441L5.74797 8.00537L9.91271 6.79901C9.942 6.84174 9.97618 6.88202 10.0152 6.91956L15.5737 12.2583L11.409 13.4647C11.3797 13.4219 11.3452 13.3813 11.3064 13.3441ZM21.7752 3.51288L27.3337 8.85162L23.1689 10.058C23.1396 10.0153 23.1055 9.97467 23.0664 9.93744L17.5079 4.59869L21.6727 3.39233C21.702 3.43506 21.7361 3.47534 21.7752 3.51288ZM15.8951 5.21637L21.4535 10.5548L17.2888 11.7615C17.2595 11.7188 17.2253 11.6782 17.1863 11.6409L11.6278 6.30219L15.7925 5.09583C15.8221 5.13824 15.8563 5.17883 15.8951 5.21637ZM27.6108 1.67206C27.8616 1.59943 28.1201 1.5625 28.3792 1.5625C29.6155 1.5625 30.7181 2.38892 31.0611 3.57239L32.1835 7.44659L29.0491 8.35449C29.0195 8.31177 28.9853 8.27148 28.9462 8.23395L23.388 2.89551L27.6108 1.67206ZM1.91252 9.96887C2.27263 9.31488 2.86253 8.84125 3.57359 8.63525L4.03258 8.5022C4.06218 8.54492 4.09636 8.58551 4.13512 8.62274L9.69359 13.9615L2.7957 15.9598L1.67327 12.0856C1.46727 11.3748 1.55242 10.6232 1.91252 9.96887ZM3.04381 17.709H9.91667L6.59758 23.4579H3.04381V17.709ZM26.767 23.4579L30.086 17.709H33.6398V23.4579H26.767Z" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M23.7426 31.6482C23.7426 31.3689 23.5937 31.1111 23.352 30.9716L16.4883 27.0089C16.2466 26.8694 15.9487 26.8694 15.707 27.0089C15.4653 27.1484 15.3164 27.4062 15.3164 27.6855V35.6109C15.3164 35.8898 15.4653 36.1477 15.707 36.2872C15.8279 36.357 15.9628 36.3921 16.0977 36.3921C16.2325 36.3921 16.3674 36.357 16.4883 36.2872L23.352 32.3248C23.5937 32.1853 23.7426 31.9274 23.7426 31.6482ZM16.8789 34.2577V29.0386L21.3989 31.6482L16.8789 34.2577Z" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M18.3398 38.4375C17.9095 38.4375 17.5586 38.7885 17.5586 39.2188C17.5586 39.649 17.9095 40 18.3398 40C18.7704 40 19.1211 39.649 19.1211 39.2188C19.1211 38.7885 18.7704 38.4375 18.3398 38.4375Z" fill="white"/></svg>`,CINEROLLO:je`<svg width="43" height="39" viewBox="0 0 43 39" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.7656 9.36328C23.7656 6.86256 21.7312 4.82812 19.2305 4.82812C16.7298 4.82812 14.6953 6.86256 14.6953 9.36328C14.6953 11.864 16.7298 13.8984 19.2305 13.8984C21.7312 13.8984 23.7656 11.864 23.7656 9.36328ZM16.375 9.36328C16.375 7.78874 17.6559 6.50781 19.2305 6.50781C20.805 6.50781 22.0859 7.78874 22.0859 9.36328C22.0859 10.9378 20.805 12.2188 19.2305 12.2188C17.6559 12.2188 16.375 10.9378 16.375 9.36328Z" fill="white"/><path d="M11.9034 20.2229C12.9825 19.673 13.7829 18.7358 14.1572 17.5841C14.5315 16.4322 14.4348 15.2035 13.8849 14.1245C13.3351 13.0454 12.3979 12.245 11.2462 11.8707C10.0942 11.4964 8.86561 11.5931 7.78658 12.143C6.70747 12.6928 5.9071 13.63 5.53278 14.7818C5.15854 15.9336 5.25521 17.1623 5.80505 18.2413C6.3549 19.3205 7.29208 20.1208 8.44385 20.4951C8.90509 20.645 9.37851 20.7193 9.84974 20.7193C10.5555 20.7194 11.2563 20.5526 11.9034 20.2229ZM8.96287 18.8977C8.23775 18.6621 7.64776 18.1582 7.30157 17.4788C6.95539 16.7995 6.8945 16.026 7.13016 15.3009C7.36574 14.5758 7.86964 13.9858 8.54899 13.6396C8.9564 13.432 9.39757 13.327 9.84193 13.327C10.1386 13.327 10.4367 13.3739 10.727 13.4682C11.4522 13.7037 12.0422 14.2077 12.3883 14.887C12.7345 15.5664 12.7954 16.3399 12.5598 17.065C12.3242 17.7901 11.8203 18.3801 11.1409 18.7263C10.4615 19.0724 9.68799 19.1333 8.96287 18.8977Z" fill="white"/><path d="M10.7622 30.8864C11.5655 31.4699 12.4977 31.7508 13.4218 31.7508C14.8253 31.7508 16.2104 31.1029 17.0966 29.8831C17.8086 28.9031 18.0964 27.7045 17.9068 26.5081C17.7172 25.3117 17.0733 24.2607 16.0932 23.5487C15.1132 22.8368 13.9149 22.5489 12.7182 22.7385C11.5218 22.928 10.4708 23.5721 9.75889 24.552C8.28924 26.575 8.73932 29.4166 10.7622 30.8864ZM11.1179 25.5393C11.5661 24.9223 12.2279 24.5168 12.9811 24.3975C13.1324 24.3736 13.2836 24.3617 13.4339 24.3617C14.0318 24.3617 14.613 24.5494 15.1061 24.9077C16.3798 25.8331 16.6632 27.6222 15.7377 28.8959C14.8123 30.1695 13.0233 30.4529 11.7496 29.5275C10.4759 28.6021 10.1925 26.813 11.1179 25.5393Z" fill="white"/><path d="M25.0419 31.7508C25.966 31.7508 26.8985 31.4698 27.7015 30.8863C29.7244 29.4165 30.1745 26.5749 28.7048 24.552C27.9928 23.572 26.9418 22.928 25.7454 22.7385C24.549 22.549 23.3504 22.8367 22.3704 23.5487C21.3904 24.2606 20.7464 25.3117 20.5569 26.508C20.3673 27.7044 20.6551 28.903 21.3671 29.883C22.2534 31.103 23.6382 31.7508 25.0419 31.7508ZM23.3577 24.9076C23.9746 24.4593 24.729 24.278 25.4826 24.3974C26.2358 24.5168 26.8975 24.9222 27.3458 25.5393C28.2712 26.813 27.9878 28.602 26.7141 29.5274C25.4404 30.4529 23.6513 30.1695 22.7259 28.8958C21.8006 27.6221 22.084 25.833 23.3577 24.9076Z" fill="white"/><path d="M27.2212 11.8706C26.0693 12.2449 25.1322 13.0453 24.5824 14.1244C24.0326 15.2035 23.9359 16.4321 24.3101 17.5839C24.6844 18.7358 25.4848 19.673 26.5639 20.2227C27.211 20.5525 27.9118 20.7192 28.6176 20.7192C29.0888 20.7192 29.5624 20.6448 30.0235 20.4951C31.1753 20.1208 32.1125 19.3204 32.6623 18.2413C33.2121 17.1622 33.3088 15.9336 32.9346 14.7817C32.5602 13.6299 31.7599 12.6927 30.6808 12.1429C29.6017 11.5931 28.373 11.4965 27.2212 11.8706ZM29.9183 13.6395C30.5976 13.9857 31.1015 14.5756 31.3371 15.3008C31.5728 16.0259 31.5119 16.7994 31.1657 17.4788C30.8195 18.1581 30.2296 18.662 29.5044 18.8976C28.7792 19.1332 28.0058 19.0724 27.3264 18.7262C26.6471 18.38 26.1432 17.7901 25.9076 17.0649C25.6719 16.3398 25.7328 15.5663 26.079 14.887C26.4252 14.2076 27.0151 13.7037 27.7403 13.4681C28.0306 13.3737 28.3287 13.3269 28.6254 13.3269C29.0697 13.3269 29.5109 13.4319 29.9183 13.6395Z" fill="white"/><path d="M22.1076 19.2335C22.1076 17.6454 20.8157 16.3535 19.2277 16.3535C17.6396 16.3535 16.3477 17.6454 16.3477 19.2335C16.3477 20.8216 17.6396 22.1135 19.2277 22.1135C20.8157 22.1135 22.1076 20.8216 22.1076 19.2335ZM18.0273 19.2335C18.0273 18.5716 18.5658 18.0332 19.2277 18.0332C19.8895 18.0332 20.428 18.5716 20.428 19.2335C20.428 19.8954 19.8895 20.4338 19.2277 20.4338C18.5658 20.4338 18.0273 19.8954 18.0273 19.2335Z" fill="white"/><path d="M42.754 34.833C41.8043 33.8833 40.5417 33.3603 39.1986 33.3603C37.8556 33.3603 36.593 33.8833 35.6433 34.833C34.3844 36.0919 32.7106 36.7852 30.9303 36.7852H27.1158C29.2182 35.8399 31.153 34.5105 32.8318 32.8318C36.4644 29.1993 38.4649 24.3696 38.4649 19.2324C38.4649 15.475 37.381 11.8347 35.3303 8.70507C35.0762 8.31706 34.5555 8.20864 34.1675 8.46286C33.7795 8.71708 33.6711 9.2377 33.9253 9.62562C35.7963 12.4809 36.7852 15.8029 36.7852 19.2324C36.7852 28.911 28.911 36.7852 19.2324 36.7852C9.55381 36.7852 1.67969 28.911 1.67969 19.2324C1.67969 9.55382 9.55381 1.67969 19.2324 1.67969C22.6677 1.67969 25.9945 2.67171 28.853 4.5486C29.2407 4.80324 29.7614 4.69532 30.016 4.30748C30.2706 3.91972 30.1627 3.3991 29.7749 3.14446C26.6418 1.08735 22.9962 0 19.2324 0C14.0953 0 9.26558 2.00051 5.63309 5.63309C2.00059 9.26567 0 14.0953 0 19.2324C0 24.3696 2.00051 29.1993 5.63309 32.8319C9.26558 36.4644 14.0953 38.4649 19.2324 38.4649H30.9303C33.1593 38.4649 35.2549 37.5969 36.831 36.0207C37.4634 35.3883 38.3043 35.0399 39.1986 35.0399C40.093 35.0399 40.9338 35.3882 41.5662 36.0207C41.8942 36.3486 42.426 36.3486 42.754 36.0207C43.082 35.6927 43.082 35.1609 42.754 34.833Z" fill="white"/><path d="M32.2422 7.07338C32.4631 7.07338 32.6797 6.98436 32.836 6.82815C32.9922 6.67109 33.082 6.45525 33.082 6.23438C33.082 6.01266 32.9922 5.79682 32.836 5.63977C32.6797 5.48355 32.4631 5.39453 32.2422 5.39453C32.0213 5.39453 31.8046 5.48355 31.6484 5.63977C31.4922 5.79682 31.4023 6.01266 31.4023 6.23438C31.4023 6.45525 31.4922 6.67193 31.6484 6.82815C31.8046 6.98436 32.0213 7.07338 32.2422 7.07338Z" fill="white"/></svg>`,ARTE:je`<svg version="1.1" id="svgArte" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 57.8 53.4" style="enable-background:new 0 0 57.8 53.4;" xml:space="preserve"><style type="text/css"></style><g id="XMLID_1685_"><path id="XMLID_2461_" class="st0" d="M42.7,28.3c-3.1,0-5.6-2.5-5.6-5.6s2.5-5.6,5.6-5.6c3.1,0,5.6,2.5,5.6,5.6S45.8,28.3,42.7,28.3L42.7,28.3z M42.7,19.3c-1.9,0-3.4,1.5-3.4,3.4c0,1.9,1.5,3.4,3.4,3.4c1.9,0,3.4-1.5,3.4-3.4C46.2,20.8,44.6,19.3,42.7,19.3L42.7,19.3z M42.7,19.3"/><path id="XMLID_2453_" class="st0" d="M26.5,31.1H14.4c-1.9,0-3.4-1.5-3.4-3.4c0-1.6,1.1-2.9,2.6-3.3c0.2-1.9,1.7-3.3,3.6-3.3c0.4,0,0.8,0.1,1.2,0.2c0.7-1.2,1.8-2.1,3.2-2.5c0.4-0.1,0.9-0.2,1.3-0.2c2.9,0,5.2,2.3,5.2,5.2c0,0.3,0,0.6-0.1,0.9c1.1,0.6,1.8,1.7,1.8,3C29.8,29.6,28.3,31.1,26.5,31.1L26.5,31.1z M14.4,26.5c-0.7,0-1.2,0.6-1.2,1.2s0.5,1.2,1.2,1.2h12.1c0.7,0,1.2-0.6,1.2-1.2c0-0.6-0.5-1.2-1.1-1.2c-0.3,0-0.6-0.2-0.8-0.5c-0.2-0.3-0.2-0.6-0.1-1c0.2-0.4,0.2-0.8,0.2-1.2c0-1.7-1.4-3-3-3c-0.3,0-0.5,0-0.8,0.1c-1.1,0.3-1.9,1.1-2.2,2.2c-0.1,0.4-0.4,0.6-0.7,0.8c-0.4,0.1-0.7,0-1-0.2c-0.3-0.2-0.6-0.4-1-0.4c-0.8,0-1.5,0.7-1.5,1.5v0.7c0,0.6-0.5,1.1-1.1,1.1L14.4,26.5L14.4,26.5z M14.4,26.5"/><path id="XMLID_1831_" class="st0" d="M19.1,15.9c-0.7,0-1.3-0.8-1-1.5c0.3-0.9,1.6-0.9,2,0C20.4,15.1,19.8,15.9,19.1,15.9L19.1,15.9z M19.1,15.9"/><path id="XMLID_1686_" class="st0" d="M52,9.5H38.5l-8.6-8.8c-0.2-0.2-0.5-0.3-0.8-0.3c-0.3,0-0.6,0.1-0.8,0.3l-8.6,8.8H6.3c-2.5,0-4.6,2.1-4.6,4.6v33.6c0,2.5,2.1,4.6,4.6,4.6H52c2.5,0,4.6-2.1,4.6-4.6V14C56.6,11.5,54.5,9.5,52,9.5L52,9.5z M3.8,15.9H6v29.9H3.8V15.9z M10.1,45.7l8.4-8.8c0.4-0.5,1-0.7,1.6-0.7c0.6,0,1.2,0.2,1.6,0.7l2.7,2.9l-4.8,6H10.1z M34.2,31.2c0.4-0.5,1.1-0.9,1.8-0.8c0.7,0,1.3,0.3,1.8,0.9l10.9,14.5H22.5L34.2,31.2z M54.4,15.9v29.9h-2.1V15.9H54.4z M29.1,2.9l6.4,6.5H22.8L29.1,2.9z M6.3,11.6H52c1.2,0,2.3,0.9,2.4,2.1H24.5c-0.6,0-1.1,0.5-1.1,1.1c0,0.6,0.5,1.1,1.1,1.1h25.6v28.3L39.5,30c-0.8-1.1-2.1-1.7-3.4-1.8c-1.4,0-2.6,0.6-3.5,1.6l-6.6,8.2l-2.5-2.7c-0.8-0.9-2-1.4-3.2-1.4c-1.2,0-2.3,0.5-3.2,1.4l-8.9,9.3V15.9h5.7c0.6,0,1.1-0.5,1.1-1.1c0-0.6-0.5-1.1-1.1-1.1H3.9C4,12.5,5,11.6,6.3,11.6L6.3,11.6z M52,50H6.3C5,50,4,49.1,3.9,47.9h50.5C54.3,49.1,53.2,50,52,50L52,50z M52,50"/></g></svg>`,VIVIENDA:je`<svg version="1.1" id="svgVivienda" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 57.8 53.4" style="enable-background:new 0 0 57.8 53.4;" xml:space="preserve"><style type="text/css"></style><g id="XMLID_1684_"><path id="XMLID_2474_" class="st0" d="M52.4,45.7c0,0,0-0.1,0-0.1c0-2-1.6-3.5-3.6-3.6V25.6l3.2-2.4c0.2-0.2,0.4-0.4,0.4-0.7c0-0.3-0.1-0.5-0.4-0.7l-7.6-5.6V6.5c0.5,0,0.9-0.4,0.9-0.9V2.1c0-0.5-0.4-0.9-0.9-0.9h-8.9c-0.5,0-0.9,0.4-0.9,0.9v3.6c0,0.5,0.4,0.9,0.9,0.9v3.2l-6.6-4.8c-0.3-0.2-0.7-0.2-1,0L4.8,21.8c-0.2,0.2-0.4,0.4-0.4,0.7c0,0.3,0.1,0.5,0.4,0.7L8,25.6V42c-2,0-3.5,1.6-3.6,3.6c0,0,0,0.1,0,0.1c-1.7,0.4-2.9,2.1-2.6,3.9c0.2,1.8,1.7,3.1,3.5,3.1h46.2c1.8,0,3.3-1.3,3.5-3.1C55.2,47.8,54.1,46.1,52.4,45.7L52.4,45.7z M36.4,3h7.1v1.8h-7.1V3z M37.3,10.9V6.5h5.3v8.4L37.3,10.9L37.3,10.9z M28.4,6.7L50,22.5l-2.1,1.6l-19-13.8c-0.3-0.2-0.7-0.2-1,0l-19,13.8l-2.1-1.6L28.4,6.7z M3.5,49.1c0-1,0.8-1.8,1.7-1.8h0c0,0,0.1,0,0.1,0c0.3,0,0.6-0.1,0.8-0.4c0.2-0.2,0.2-0.6,0.1-0.8c-0.1-0.2-0.1-0.4-0.1-0.6c0-1,0.8-1.8,1.8-1.8v7.1H5.3C4.3,50.9,3.5,50.1,3.5,49.1L3.5,49.1z M41.7,50.9H31.1V31.4h10.7V50.9z M43.5,50.9V30.5c0-0.5-0.4-0.9-0.9-0.9H30.2c-0.5,0-0.9,0.4-0.9,0.9v20.4H9.7V25.6L28.4,12L47,25.6v25.3H43.5z M51.5,50.9h-2.7v-7.1c1,0,1.8,0.8,1.8,1.8c0,0.2,0,0.4-0.1,0.6c-0.1,0.3-0.1,0.6,0.1,0.8c0.2,0.2,0.5,0.4,0.8,0.4c0,0,0.1,0,0.1,0h0c1,0,1.8,0.8,1.8,1.8C53.3,50.1,52.5,50.9,51.5,50.9L51.5,50.9z M51.5,50.9"/><path id="XMLID_2466_" class="st0" d="M24.8,29.6H14.2c-0.5,0-0.9,0.4-0.9,0.9v12.4c0,0.5,0.4,0.9,0.9,0.9h10.7c0.5,0,0.9-0.4,0.9-0.9V30.5C25.7,30,25.3,29.6,24.8,29.6L24.8,29.6z M24,35.8h-3.6v-4.4H24V35.8z M18.6,31.4v4.4h-3.6v-4.4H18.6zM15.1,37.6h3.6V42h-3.6V37.6z M20.4,42v-4.4H24V42H20.4z M20.4,42"/><path id="XMLID_2463_" class="st0" d="M34.1,39.4c0.5,0.2,0.7,0.7,0.5,1.2c-0.2,0.5-0.7,0.7-1.2,0.5c-0.5-0.2-0.7-0.7-0.5-1.2C33.1,39.5,33.6,39.2,34.1,39.4L34.1,39.4z M34.1,39.4"/></g></svg>`,DEPORTE:je`<svg version="1.1" id="svgDeporte" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 57.8 53.4" style="enable-background:new 0 0 57.8 53.4;" xml:space="preserve"><style type="text/css"></style><path id="XMLID_1789_" class="st0" d="M54.7,29.1c-0.6-8.4-7.5-14.9-15.9-15C35.9,4.8,26-0.6,16.6,2.2S1.8,14.9,4.6,24.3c1.5,5,5,9,9.8,11.1c-1.7,0.9-3.2,2-4.6,3.3L7.4,41c-1,0.9-1.1,2.6-0.2,3.6c0.1,0.1,0.2,0.2,0.3,0.3l0,0l2.7,2c3.9,2.9,8.7,4.5,13.6,4.5h2.4c4.9,0,9.7-1.6,13.6-4.5l1-0.7c8-1.1,13.9-7.9,13.9-15.9c0-0.2,0-0.4,0-0.7C54.7,29.4,54.7,29.3,54.7,29.1z M51.2,36.6c-0.1-0.3-0.4-0.5-0.8-0.5h-5.6L43,34.2l1.5-5.2l2.6-1.2l4.7,3.1c0.3,0.2,0.6,0.2,0.8,0.1l0.4-0.2c-0.1,2.1-0.6,4.2-1.6,6.1L51.2,36.6z M42,40.2l-1.6-1.5c-1.5-1.3-3.1-2.5-4.9-3.4h6.2l1.9,1.9L42,40.2z M9.7,8.5l10.7,10.7l-2.7,2.7c-3-2.7-6.7-4.3-10.7-4.6l-1.4-0.1C6.1,14,7.5,10.9,9.7,8.5z M19.8,4.7c0.3,4,1.9,7.7,4.6,10.7L21.7,18L10.9,7.3c2.4-2.2,5.5-3.6,8.8-4L19.8,4.7z M33.6,8.5c1.5,1.7,2.6,3.6,3.3,5.8c-2.8,0.3-5.4,1.3-7.7,2.9c-0.9-0.5-1.7-1.1-2.5-1.8L33.6,8.5z M42.5,16.4l0.2,0.7l-4.1,2.8L34.5,17l0.2-0.7C37.3,15.7,40,15.7,42.5,16.4L42.5,16.4z M42.6,28.9C42.6,28.9,42.6,28.9,42.6,28.9c0,0.1,0,0.1,0.1,0.1l-1.3,4.6h-5.5l-1.3-4.7l4.1-2.7L42.6,28.9z M33.4,27.6L30,26.2l-1.6-3.9c-0.1-0.2-0.2-0.4-0.4-0.4l-0.8-0.4c1.4-1.9,3.3-3.4,5.5-4.4c-0.1,0.4,0,0.7,0.3,0.9l4.7,3.3v3.3L33.4,27.6z M26.3,22.9l0.7,0.3l1.4,3.4l-3.4,3.4l-0.7-0.3C24.3,27.3,25,25,26.3,22.9L26.3,22.9z M27.9,18.3c-0.9,0.8-1.8,1.8-2.5,2.8c-0.1,0.1-0.2,0.2-0.2,0.3c0,0,0,0.1,0,0.1l-2.3-2.3l2.7-2.7C26.3,17.2,27.1,17.8,27.9,18.3L27.9,18.3z M21.7,20.4l2.6,2.6c-1,1.9-1.5,4-1.7,6.1c-0.8-2.2-2-4.3-3.6-6L21.7,20.4z M24.5,32.8c-0.1-0.4-0.1-0.8-0.2-1.1l0.4,0.2c0.3,0.2,0.7,0.1,1-0.2l3.8-3.8l3.3,1.3l1.6,5.5c0,0,0,0.1,0.1,0.1c-3-1.3-6.2-2-9.4-2C24.9,32.8,24.7,32.8,24.5,32.8L24.5,32.8zM50.2,21.8c1.5,2.1,2.5,4.6,2.7,7.1l-0.7,0.4l-4.2-2.8l1.4-4.7H50.2z M48.8,20.1L48.8,20.1c-0.4,0-0.7,0.3-0.8,0.6l-1.6,5.6l-2.7,1.3l-4.2-2.8v-3.3l4.7-3.3c0.3-0.2,0.4-0.6,0.3-0.9C46.1,17.8,47.6,18.8,48.8,20.1z M32.4,7.3l-6.9,6.9c-2.4-2.7-3.8-6-4.1-9.6l-0.1-1.4C25.5,3.1,29.4,4.6,32.4,7.3z M5.6,18.9L7,19c3.6,0.2,7,1.7,9.6,4.1L9.7,30C7,27,5.5,23,5.6,18.9zM10.9,31.2l6.9-6.9c2.2,2.4,3.6,5.5,4,8.7c-1.8,0.3-3.6,0.7-5.3,1.4C14.5,33.8,12.5,32.7,10.9,31.2z M38.8,45.5c-3.6,2.7-8,4.2-12.6,4.2h-2.4c-4.5,0-8.9-1.5-12.6-4.2l-2.7-2c-0.4-0.3-0.5-0.8-0.2-1.2c0,0,0.1-0.1,0.1-0.1l2.4-2.2c1.7-1.6,3.7-2.8,5.8-3.8c0.1,0,0.2-0.1,0.4-0.2c7.5-3.1,16.1-1.6,22.1,3.9l2.4,2.2c0.3,0.3,0.4,0.9,0.1,1.2c0,0-0.1,0.1-0.1,0.1L38.8,45.5z M43.4,43.8c0.3-0.7,0.3-1.6-0.1-2.3l1.8-3.7H50l0.4,0.8C48.6,41,46.2,42.9,43.4,43.8L43.4,43.8z"/><path id="XMLID_1713_" class="st0" d="M32.7,41.3h-0.8v-0.8c0-0.5-0.4-0.8-0.8-0.8s-0.8,0.4-0.8,0.8v0.8h-1.7v-0.8c0-0.5-0.4-0.8-0.8-0.8s-0.8,0.4-0.8,0.8v0.8h-1.7v-0.8c0-0.5-0.4-0.8-0.8-0.8c-0.5,0-0.8,0.4-0.8,0.8v0.8h-1.7v-0.8c0-0.5-0.4-0.8-0.8-0.8c-0.5,0-0.8,0.4-0.8,0.8v0.8h-1.7v-0.8c0-0.5-0.4-0.8-0.8-0.8s-0.8,0.4-0.8,0.8v0.8h-0.8c-0.5,0-0.8,0.4-0.8,0.8s0.4,0.8,0.8,0.8h0.8v0.8c0,0.5,0.4,0.8,0.8,0.8s0.8-0.4,0.8-0.8V43H20v0.8c0,0.5,0.4,0.8,0.8,0.8c0.5,0,0.8-0.4,0.8-0.8V43h1.7v0.8c0,0.5,0.4,0.8,0.8,0.8c0.5,0,0.8-0.4,0.8-0.8V43h1.7v0.8c0,0.5,0.4,0.8,0.8,0.8s0.8-0.4,0.8-0.8V43h1.7v0.8c0,0.5,0.4,0.8,0.8,0.8s0.8-0.4,0.8-0.8V43h0.8c0.5,0,0.8-0.4,0.8-0.8S33.2,41.3,32.7,41.3z"/></svg>`,TURISMO:je`<svg version="1.1" id="svgTurismo" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"viewBox="0 0 59.8 59.3" style="enable-background:new 0 0 59.8 59.3;" xml:space="preserve"><style type="text/css"></style><g id="XMLID_2514_"><path id="XMLID_2533_" class="st0" d="M58.7,56.8L44.7,28.9c-0.2-0.3-0.5-0.5-0.8-0.5h-9.2l0.1-0.5c3.7-1.3,6.3-4.8,6.3-8.8c0-5.1-4.2-9.3-9.3-9.3s-9.3,4.2-9.3,9.3c0,4,2.6,7.5,6.3,8.8l0.1,0.5H16.1c-0.4,0-0.7,0.2-0.8,0.5L1.3,56.8c-0.1,0.3-0.1,0.6,0,0.9c0.2,0.3,0.5,0.4,0.8,0.4h55.7c0.3,0,0.6-0.2,0.8-0.4C58.8,57.4,58.8,57.1,58.7,56.8L58.7,56.8z M28.4,52.3l4,4h-2.9l-7.2-7.2c-0.4-0.4-0.9-0.4-1.3,0l-7.2,7.2h-2.9l8.6-8.6c0.4-0.4,0.4-0.9,0-1.3L12.2,39l1-2l4,4c0.2,0.2,0.4,0.3,0.7,0.3c0.2,0,0.5-0.1,0.7-0.3l4.6-4.6c0.2-0.2,0.3-0.4,0.3-0.7v-5.6h1.9v7L20,42.6c-0.4,0.4-0.4,0.9,0,1.3l5.6,5.6c0.2,0.2,0.4,0.3,0.7,0.3c0.2,0,0.5-0.1,0.7-0.3l8.1-8.1h13.9l0.9,1.9H36.5c-0.2,0-0.5,0.1-0.7,0.3L28.4,51C28,51.3,28,51.9,28.4,52.3L28.4,52.3z M26.8,56.3H16.4l5.2-5.2L26.8,56.3z M24.4,19.1c0-4.1,3.3-7.4,7.4-7.4s7.4,3.3,7.4,7.4c0,3.3-2.2,6.3-5.5,7.2c-0.3,0.1-0.6,0.4-0.7,0.7l-1.3,5.7l-1.3-5.7c-0.1-0.3-0.3-0.6-0.7-0.7C26.7,25.4,24.4,22.4,24.4,19.1L24.4,19.1z M30.9,37c0.1,0.4,0.5,0.7,0.9,0.7c0.4,0,0.8-0.3,0.9-0.7l1.6-6.7h9l4.6,9.3H34.6c-0.2,0-0.5,0.1-0.7,0.3l-7.7,7.7L22,43.3l4.9-4.9c0.2-0.2,0.3-0.4,0.3-0.7v-7.4h2.2L30.9,37z M16.6,30.3h5v5.2l-3.7,3.7l-3.8-3.8L16.6,30.3z M11.4,40.8l6.2,6.2l-9.3,9.3H3.6L11.4,40.8z M35,56.3l-4.6-4.6l6.5-6.5h13.9l3.7,7.4H50l-3.4-5.2c-0.2-0.2-0.4-0.4-0.7-0.4c-0.3,0-0.6,0.1-0.7,0.3L43.4,49l-1.4-2.5c-0.3-0.6-1.3-0.6-1.6,0l-3.4,6h-2.2v1.9h20.8l0.9,1.9H35z M43.2,52.5H39l2.1-3.7L43.2,52.5z M45.4,52.5l-1.1-1.9l1.3-1.3l2.1,3.2H45.4z M45.4,52.5"/><path id="XMLID_2530_" class="st0" d="M35.6,19.1h1.9c0-3.1-2.5-5.6-5.6-5.6v1.9C33.9,15.4,35.6,17.1,35.6,19.1L35.6,19.1zM35.6,19.1"/><path id="XMLID_2527_" class="st0" d="M34.1,22.1l1.1,1.5c0.8-0.6,1.4-1.3,1.8-2.2l-1.7-0.7C35,21.2,34.6,21.7,34.1,22.1L34.1,22.1z M34.1,22.1"/><path id="XMLID_2519_" class="st0" d="M4,13.5c-0.3,0-0.6,0.2-0.8,0.4l-1.9,2.8c-0.2,0.3-0.2,0.7,0,1l1.9,2.8C3.4,20.8,3.7,21,4,21h4.6v8.4c0,0.5,0.4,0.9,0.9,0.9h3.7c0.5,0,0.9-0.4,0.9-0.9V21h6.5c0.3,0,0.7-0.2,0.8-0.5c0.2-0.3,0.1-0.7,0-1L20,17.2l1.5-2.3c0.2-0.3,0.2-0.7,0-1c-0.2-0.3-0.5-0.5-0.8-0.5h-6.5v-1.9h4.6c0.3,0,0.6-0.2,0.8-0.4l1.9-2.8c0.2-0.3,0.2-0.7,0-1l-1.9-2.8c-0.2-0.3-0.5-0.4-0.8-0.4h-4.6V1.5c0-0.5-0.4-0.9-0.9-0.9H9.6C9,0.5,8.6,0.9,8.6,1.5v2.8H2.1c-0.3,0-0.7,0.2-0.8,0.5c-0.2,0.3-0.1,0.7,0,1L2.9,8l-1.5,2.3c-0.2,0.3-0.2,0.7,0,1c0.2,0.3,0.5,0.5,0.8,0.5h6.5v1.9H4z M12.3,28.4h-1.9V21h1.9V28.4zM18.1,17.8l0.9,1.3H4.5l-1.2-1.9l1.2-1.9H19l-0.9,1.3C17.9,17,17.9,17.5,18.1,17.8L18.1,17.8z M10.5,2.4h1.9v1.9h-1.9V2.4zM4.8,7.4L3.9,6.1h14.5L19.6,8l-1.2,1.9H3.9l0.9-1.3C5,8.2,5,7.8,4.8,7.4L4.8,7.4z M10.5,11.7h1.9v1.9h-1.9V11.7z M10.5,11.7"/><rect id="XMLID_2422_" x="4.9" y="16.3" class="st0" width="1.9" height="1.9"/><rect id="XMLID_2421_" x="8.6" y="16.3" class="st0" width="1.9" height="1.9"/><rect id="XMLID_2420_" x="16.1" y="7" class="st0" width="1.9" height="1.9"/><rect id="XMLID_2419_" x="12.3" y="7" class="st0" width="1.9" height="1.9"/></g></svg>`,BENEFICIO:je`<svg version="1.1" id="svgBeneficio" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 59.8 59.3" style="enable-background:new 0 0 59.8 59.3;" xml:space="preserve"><style type="text/css"></style><g id="XMLID_1787_"><path id="XMLID_1811_" class="st0" d="M54.5,20.1c-2,0-3.7,1.6-3.7,3.7V34c0,0.8-0.4,1.6-1,2.1l-4.1,3.5c-0.5,0.4-1.1,0.7-1.8,0.7h-3.2l3.5-4c0.7-0.7,1-1.7,1-2.7v-0.2c0-2.3-1.8-4.1-4.1-4.1c-1.2,0-2.3,0.5-3,1.4l-5,5.5c-1.7,1.9-2.6,4.3-2.6,6.7v10.2h-1.8V42.8c0-2.5-0.9-4.9-2.6-6.7l-5-5.5c-0.8-0.9-1.9-1.4-3-1.4c-2.3,0-4.1,1.8-4.1,4.1v0.2c0,1,0.4,2,1,2.7l3.5,4h-3.2c-0.7,0-1.3-0.2-1.8-0.7l-4.1-3.5c-0.6-0.5-1-1.3-1-2.1V23.7c0-2-1.6-3.7-3.7-3.7s-3.7,1.6-3.7,3.7v11.6c0,2.8,1.2,5.5,3.3,7.4l6.2,5.7c0.9,0.9,1.5,2.1,1.5,3.4v1.2h-1.8v5.5h18.3h1.8H49v-5.5h-1.8v-1.2c0-1.3,0.5-2.5,1.5-3.4l6.2-5.7c2.1-1.9,3.3-4.6,3.3-7.4V23.7C58.2,21.7,56.5,20.1,54.5,20.1z M28.8,56.8H12.3v-1.8h11v-1.8h-9.2v-1.2c0-1.8-0.8-3.5-2.1-4.7l-6.2-5.7c-1.7-1.6-2.7-3.8-2.7-6.1V23.7c0-1,0.8-1.8,1.8-1.8s1.8,0.8,1.8,1.8V34c0,1.3,0.6,2.6,1.6,3.5l4.1,3.5c0.8,0.7,1.9,1.1,3,1.1h4.9l1.4,1.5l1.4-1.2L16.5,35c-0.4-0.4-0.6-0.9-0.6-1.5v-0.2c0-1.2,1-2.3,2.3-2.3c0.6,0,1.2,0.3,1.7,0.7l5,5.5c1.4,1.5,2.1,3.5,2.1,5.5v10.2h-1.8v1.8h3.7V56.8z M56.3,35.3c0,2.3-1,4.5-2.7,6.1l-6.2,5.7c-1.3,1.2-2.1,2.9-2.1,4.7v1.2h-9.2v1.8h11v1.8H30.6v-1.8h3.7v-1.8h-1.8V42.8c0-2,0.8-4,2.1-5.5l5-5.5c0.4-0.5,1-0.7,1.7-0.7c1.2,0,2.3,1,2.3,2.3v0.2c0,0.6-0.2,1.1-0.6,1.5l-6.5,7.4l1.4,1.2l1.4-1.5H44c1.1,0,2.2-0.4,3-1.1l4.1-3.5c1-0.9,1.6-2.1,1.6-3.5V23.7c0-1,0.8-1.8,1.8-1.8s1.8,0.8,1.8,1.8V35.3z"/><path id="XMLID_1810_" class="st0" d="M29.7,18.2c-1,0-1.8-0.8-1.8-1.8h-1.8c0,1.7,1.2,3.1,2.8,3.5v2h1.8v-2c1.6-0.4,2.8-1.8,2.8-3.5c0-2-1.6-3.7-3.7-3.7c-1,0-1.8-0.8-1.8-1.8s0.8-1.8,1.8-1.8s1.8,0.8,1.8,1.8h1.8c0-1.7-1.2-3.1-2.8-3.5v-2h-1.8v2c-1.6,0.4-2.8,1.8-2.8,3.5c0,2,1.6,3.7,3.7,3.7c1,0,1.8,0.8,1.8,1.8S30.7,18.2,29.7,18.2z"/><path id="XMLID_1807_" class="st0" d="M29.7,25.6c6.6,0,11.9-5.3,11.9-11.9S36.3,1.7,29.7,1.7S17.8,7.1,17.8,13.6S23.1,25.6,29.7,25.6z M29.7,3.6c5.6,0,10.1,4.5,10.1,10.1s-4.5,10.1-10.1,10.1s-10.1-4.5-10.1-10.1S24.2,3.6,29.7,3.6z"/><path id="XMLID_1804_" class="st0" d="M51.7,18.2c3.5,0,6.4-2.9,6.4-6.4s-2.9-6.4-6.4-6.4s-6.4,2.9-6.4,6.4S48.2,18.2,51.7,18.2zM51.7,7.2c2.5,0,4.6,2.1,4.6,4.6s-2.1,4.6-4.6,4.6s-4.6-2.1-4.6-4.6S49.2,7.2,51.7,7.2z"/><polygon id="XMLID_1803_" class="st0" points="50.8,14.6 52.7,14.6 52.7,12.7 54.5,12.7 54.5,10.9 52.7,10.9 52.7,9.1 50.8,9.1 50.8,10.9 49,10.9 49,12.7 50.8,12.7 	"/><path id="XMLID_1800_" class="st0" d="M7.7,18.2c3.5,0,6.4-2.9,6.4-6.4s-2.9-6.4-6.4-6.4s-6.4,2.9-6.4,6.4S4.2,18.2,7.7,18.2zM7.7,7.2c2.5,0,4.6,2.1,4.6,4.6s-2.1,4.6-4.6,4.6s-4.6-2.1-4.6-4.6S5.2,7.2,7.7,7.2z"/><polygon id="XMLID_1799_" class="st0" points="6.8,14.6 8.6,14.6 8.6,12.7 10.5,12.7 10.5,10.9 8.6,10.9 8.6,9.1 6.8,9.1 6.8,10.9 5,10.9 5,12.7 6.8,12.7 	"/><rect id="XMLID_1798_" x="36.1" y="12.7" class="st0" width="1.8" height="1.8"/><rect id="XMLID_1797_" x="21.5" y="12.7" class="st0" width="1.8" height="1.8"/><rect id="XMLID_1796_" x="15" y="1.7" class="st0" width="1.8" height="1.8"/><rect id="XMLID_1795_" x="15" y="5.4" class="st0" width="1.8" height="1.8"/><rect id="XMLID_1794_" x="16.9" y="3.6" class="st0" width="1.8" height="1.8"/><rect id="XMLID_1793_" x="13.2" y="3.6" class="st0" width="1.8" height="1.8"/><rect id="XMLID_1792_" x="43.5" y="20.1" class="st0" width="1.8" height="1.8"/><rect id="XMLID_1791_" x="43.5" y="23.7" class="st0" width="1.8" height="1.8"/><rect id="XMLID_1790_" x="45.3" y="21.9" class="st0" width="1.8" height="1.8"/><rect id="XMLID_1788_" x="41.6" y="21.9" class="st0" width="1.8" height="1.8"/></g></svg>`,SECCIONAL:je`<svg version="1.1" id="svgSeccional" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 59.8 59.3" style="enable-background:new 0 0 59.8 59.3;" xml:space="preserve"><style type="text/css"></style><g id="XMLID_1440_"><path id="XMLID_2416_" class="st0" d="M52.5,11.5H21.6l-2-6.6c-0.5-1.5-2.1-2.4-3.6-2l-4.4,1.3c-0.5,0.1-0.9,0.4-1.3,0.8l-5,5.2c-0.4,0.4-0.6,0.9-0.7,1.4C4.1,14,2.7,22.5,6,33.5c3.3,11,9.2,17.4,10.9,19c0.4,0.4,0.9,0.6,1.4,0.8l7,1.6C25.6,55,25.8,55,26,55c0.3,0,0.6,0,0.8-0.1l2.4-0.7l2-0.6c0.8-0.2,1.4-0.7,1.8-1.4c0.4-0.7,0.4-1.5,0.2-2.2l-1.1-3.6h20.3c1.9,0,3.5-1.6,3.5-3.5V15C56,13.1,54.4,11.5,52.5,11.5L52.5,11.5z M38.8,28.6l15.3-14.2c0.1,0.2,0.1,0.4,0.1,0.6v27.8c0,0.2,0,0.4-0.1,0.5L38.8,28.6zM52.5,13.3c0.1,0,0.2,0,0.3,0L34.6,30.2c-0.7,0.6-1.7,0.6-2.4,0L19.7,18.6l0.9-0.3c0.7-0.2,1.4-0.7,1.8-1.4c0.4-0.7,0.4-1.5,0.2-2.2l-0.4-1.4H52.5z M17.5,38.7c-1.8-2.2-3.1-4.7-3.9-7.5c-1.1-3.4-1.3-7.1-0.4-10.6c0,0,0.1-0.1,0.1-0.1l4.5-1.3L28,28.6L17.5,38.7z M31.5,51.3c-0.2,0.3-0.4,0.5-0.7,0.6l-1.2,0.3l-2.1-7c-0.1-0.3-0.3-0.5-0.6-0.6c-0.3-0.1-0.6,0-0.8,0.3c-0.2,0.2-0.3,0.6-0.2,0.9l2.1,7l-1.6,0.5c-0.2,0.1-0.4,0.1-0.6,0l-7-1.6c-0.2-0.1-0.4-0.2-0.6-0.3c-1.7-1.6-7.3-7.7-10.5-18.3C4.4,22.4,5.8,14.2,6.3,12c0-0.2,0.2-0.4,0.3-0.6l5-5.2c0.1-0.1,0.3-0.3,0.5-0.3l1.6-0.5l2.1,7c0.1,0.4,0.4,0.6,0.8,0.6c0.1,0,0.2,0,0.3,0c0.5-0.1,0.7-0.6,0.6-1.1l-2.1-7l1.1-0.3c0.6-0.2,1.3,0.2,1.5,0.8l3,9.8c0.1,0.3,0.1,0.6-0.1,0.9c-0.2,0.3-0.4,0.5-0.7,0.6L19,17l-0.3-1.1c-0.1-0.4-0.6-0.7-1.1-0.6c-0.5,0.1-0.7,0.6-0.6,1.1l0.3,1.1l-4.6,1.3c-0.6,0.2-1.1,0.7-1.3,1.3c-0.9,3.8-0.8,7.8,0.5,11.6c1.1,3.8,3.2,7.2,6,9.9c0.5,0.4,1.2,0.6,1.8,0.4l4.6-1.4l0.3,1.1c0.1,0.3,0.3,0.5,0.6,0.6s0.6,0,0.8-0.3c0.2-0.2,0.3-0.6,0.2-0.9L26,40.2l1.1-0.3c0.6-0.2,1.3,0.2,1.5,0.8l3,9.8C31.7,50.7,31.6,51,31.5,51.3L31.5,51.3z M31.6,44.5l-1.3-4.4c-0.5-1.5-2.1-2.4-3.6-2l-7.4,2.2c-0.1,0-0.1,0-0.2,0c-0.1-0.1-0.3-0.2-0.4-0.4l10.6-10.1l1.8,1.7c1.3,1.2,3.4,1.2,4.7,0l1.8-1.6l15.3,14.7c-0.1,0-0.2,0-0.3,0H31.6z M31.6,44.5"/><path id="XMLID_1820_" class="st0" d="M26.4,16.7h13.9c0.5,0,0.9-0.4,0.9-0.9S40.8,15,40.3,15H26.4c-0.5,0-0.9,0.4-0.9,0.9S25.9,16.7,26.4,16.7L26.4,16.7z M26.4,16.7"/><path id="XMLID_1817_" class="st0" d="M51.6,22c-0.5,0-0.9,0.4-0.9,0.9V35c0,0.5,0.4,0.9,0.9,0.9c0.5,0,0.9-0.4,0.9-0.9V22.8C52.5,22.3,52.1,22,51.6,22L51.6,22z M51.6,22"/></g></svg>`,COMPRA:je`<svg version="1.1" id="svgCompra" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 59.8 59.3" style="enable-background:new 0 0 59.8 59.3;" xml:space="preserve"><style type="text/css">.st1{stroke-width:4;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}</style><g id="XMLID_1596_"><path id="XMLID_1594_" class="st0" d="M36,11.7c-0.4,0-0.8-0.3-0.8-0.7c-0.4-2.7-2.7-4.7-5.5-4.7c-1.8,0-3.4,0.9-4.5,2.3C24.9,8.9,24.4,9,24,8.7c-0.4-0.3-0.5-0.8-0.2-1.2c1.4-1.9,3.5-3,5.8-3c3.6,0,6.7,2.7,7.2,6.2c0.1,0.5-0.3,0.9-0.7,1C36.1,11.7,36.1,11.7,36,11.7z"/><path id="XMLID_1583_" class="st0" d="M48.4,21.5H11c-0.3,0-0.6-0.2-0.7-0.4c-0.2-0.3-0.1-0.6,0-0.9l2.6-4.3c0.2-0.3,0.4-0.4,0.7-0.4h1.4c0.5,0,0.9,0.4,0.9,0.9s-0.4,0.9-0.9,0.9H14l-1.5,2.6h34.4l-1.5-2.6h-2c-0.5,0-0.9-0.4-0.9-0.9s0.4-0.9,0.9-0.9h2.4c0.3,0,0.6,0.2,0.7,0.4l2.6,4.3c0.2,0.3,0.2,0.6,0,0.9C49,21.4,48.7,21.5,48.4,21.5z"/><path id="XMLID_1582_" class="st0" d="M42.4,21.2c-0.1,0-0.1,0-0.2,0c-0.5-0.1-0.7-0.6-0.6-1l1.6-6.7l-9.9-2.3l-0.7,2.9c-0.1,0.5-0.6,0.7-1,0.6c-0.5-0.1-0.7-0.6-0.6-1l0.9-3.7c0.1-0.2,0.2-0.4,0.4-0.5c0.2-0.1,0.4-0.2,0.6-0.1L44.4,12c0.2,0.1,0.4,0.2,0.5,0.4c0.1,0.2,0.2,0.4,0.1,0.6l-1.8,7.5C43.2,20.9,42.8,21.2,42.4,21.2z"/><path id="XMLID_1524_" class="st0" d="M15.6,21.4c-0.4,0-0.8-0.3-0.8-0.8L13.4,9.7c-0.1-0.5,0.3-0.9,0.7-0.9l14.2-1.7c0.2,0,0.4,0,0.6,0.2c0.2,0.1,0.3,0.3,0.3,0.6l0.8,6.6c0.1,0.5-0.3,0.9-0.7,0.9c-0.5,0.1-0.9-0.3-0.9-0.7l-0.7-5.7l-12.5,1.5l1.2,10.1c0.1,0.5-0.3,0.9-0.7,0.9C15.6,21.4,15.6,21.4,15.6,21.4z"/><path id="XMLID_1522_" class="st0" d="M36,21.4c-0.4,0-0.7-0.3-0.8-0.7l-1.5-6.2l-12.1,2.9l0.6,2.7c0.1,0.5-0.2,0.9-0.6,1c-0.5,0.1-0.9-0.2-1-0.6L19.8,17c-0.1-0.5,0.2-0.9,0.6-1l13.7-3.3c0.2-0.1,0.5,0,0.6,0.1c0.2,0.1,0.3,0.3,0.4,0.5l1.7,7c0.1,0.5-0.2,0.9-0.6,1C36.2,21.4,36.1,21.4,36,21.4z"/><path id="XMLID_2095_" class="st0" d="M50.1,54.7H9.3c-0.2,0-0.5-0.1-0.6-0.3c-0.2-0.2-0.2-0.4-0.2-0.6l1.7-33.2c0-0.5,0.4-0.8,0.9-0.8h37.5c0.5,0,0.8,0.4,0.9,0.8L51,53.8c0,0.2-0.1,0.5-0.2,0.6C50.6,54.6,50.4,54.7,50.1,54.7z M10.2,53h39.1l-1.6-31.5H11.8L10.2,53z"/><path id="XMLID_1635_" class="st0" d="M36.1,28.4c-1.4,0-2.6-1.1-2.6-2.6c0-1.4,1.1-2.6,2.6-2.6c1.4,0,2.6,1.1,2.6,2.6C38.6,27.2,37.5,28.4,36.1,28.4z M36.1,24.9c-0.5,0-0.9,0.4-0.9,0.9c0,0.5,0.4,0.9,0.9,0.9c0.5,0,0.9-0.4,0.9-0.9C36.9,25.3,36.5,24.9,36.1,24.9z"/><path id="XMLID_1631_" class="st0" d="M23.3,28.4c-1.4,0-2.6-1.1-2.6-2.6c0-1.4,1.1-2.6,2.6-2.6c1.4,0,2.6,1.1,2.6,2.6C25.9,27.2,24.7,28.4,23.3,28.4z M23.3,24.9c-0.5,0-0.9,0.4-0.9,0.9c0,0.5,0.4,0.9,0.9,0.9s0.9-0.4,0.9-0.9C24.2,25.3,23.8,24.9,23.3,24.9z"/><path id="XMLID_1495_" class="st1" d="M36,24.9"/><path id="XMLID_1473_" class="st0" d="M29.7,38.6c-4,0-7.2-3.2-7.2-7.2v-4.7c0-0.5,0.4-0.9,0.9-0.9c0.5,0,0.9,0.4,0.9,0.9v4.7c0,3.1,2.5,5.5,5.5,5.5s5.5-2.5,5.5-5.5V27c0-0.1-0.1-0.2-0.1-0.3c0-0.5,0.4-0.9,0.9-0.9h0.1c0.5,0,0.9,0.4,0.9,0.9v4.7C36.9,35.3,33.7,38.6,29.7,38.6z"/></g></svg>`,EMPRESA:je`<svg version="1.1" id="svgEmpresa" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 59.8 59.3" style="enable-background:new 0 0 59.8 59.3;" xml:space="preserve"><style type="text/css"></style><g id="XMLID_1849_"><path id="XMLID_2121_" class="st0" d="M51.4,15.8v-6H48v6h-4.3V2.9L16.1,9.4v6.4h-4.3v-6H8.4v6H0.7v41.6h58.4V15.8H51.4z M3.1,55.1v-37h13v37H3.1z M32.7,55.1h-5.6v-5.6h5.6V55.1z M41.4,55.1H35v-7.9H24.8v7.9h-6.4V11l23-4.9V55.1z M56.8,55.1h-13v-37h13V55.1zM55.7,54"/><rect id="XMLID_1837_" x="22.9" y="16.4" class="st0" width="5.3" height="3.4"/><rect id="XMLID_1816_" x="31.6" y="16.4" class="st0" width="5.3" height="3.4"/><rect id="XMLID_1815_" x="22.9" y="23.3" class="st0" width="5.3" height="3.4"/><rect id="XMLID_1660_" x="31.6" y="23.3" class="st0" width="5.3" height="3.4"/><rect id="XMLID_1659_" x="22.9" y="30.1" class="st0" width="5.3" height="3.4"/><rect id="XMLID_1653_" x="31.6" y="30.1" class="st0" width="5.3" height="3.4"/><rect id="XMLID_1644_" x="22.9" y="36.9" class="st0" width="5.3" height="3.4"/><rect id="XMLID_1643_" x="7.5" y="23.3" class="st0" width="5.3" height="3.4"/><rect id="XMLID_1640_" x="7.5" y="30.1" class="st0" width="5.3" height="3.4"/><rect id="XMLID_1639_" x="7.5" y="36.9" class="st0" width="5.3" height="3.4"/><rect id="XMLID_1638_" x="47.1" y="23.3" class="st0" width="5.3" height="3.4"/><rect id="XMLID_1636_" x="47.1" y="30.1" class="st0" width="5.3" height="3.4"/><rect id="XMLID_1634_" x="47.1" y="36.9" class="st0" width="5.3" height="3.4"/><rect id="XMLID_1632_" x="7.5" y="43.8" class="st0" width="5.3" height="3.4"/><rect id="XMLID_1630_" x="47.1" y="43.8" class="st0" width="5.3" height="3.4"/><rect id="XMLID_1597_" x="31.6" y="36.9" class="st0" width="5.3" height="3.4"/></g></svg>`,DENUNCIA:je`<svg version="1.1" id="svgDenuncia" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 59.8 59.3" style="enable-background:new 0 0 59.8 59.3;" xml:space="preserve"><style type="text/css"></style><g id="XMLID_439_"><path id="XMLID_453_" class="st0" d="M50.1,53.2H9.7c-2.2,0-4.3-1.2-5.4-3.1c-1.1-1.9-1.1-4.3,0-6.2l20.2-35c1.1-1.9,3.1-3.1,5.4-3.1s4.3,1.2,5.4,3.1l20.2,35c1.1,1.9,1.1,4.3,0,6.2C54.4,52,52.4,53.2,50.1,53.2z M29.9,8.8c-1.1,0-2.1,0.6-2.7,1.6L7,45.4c-0.6,1-0.6,2.1,0,3.1c0.6,1,1.6,1.6,2.7,1.6h40.4c1.1,0,2.1-0.6,2.7-1.6c0.6-1,0.6-2.1,0-3.1l-20.2-35C32,9.4,31,8.8,29.9,8.8z"/><rect id="XMLID_431_" x="28.4" y="21.2" class="st0" width="3.1" height="15.5"/><path id="XMLID_327_" class="st0" d="M29.9,43.9c-1.1,0-2.1-0.9-2.1-2.1c0-1.1,0.9-2.1,2.1-2.1s2.1,0.9,2.1,2.1C32,43,31,43.9,29.9,43.9z"/></g></svg>`,CARRITO:je`<svg version="1.1" id="svgCarrito" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 82 81.6" style="enable-background:new 0 0 82 81.6;" xml:space="preserve"><style type="text/css"></style><g id="XMLID_752_"><path id="XMLID_808_" class="st0" d="M60.8,68.5c0.8,0,1.5-0.7,1.5-1.5c0-0.8-0.7-1.5-1.5-1.5c-0.8,0-1.5,0.7-1.5,1.5C59.3,67.8,60,68.5,60.8,68.5L60.8,68.5z M60.8,68.5"/><path id="XMLID_805_" class="st0" d="M36.6,68.5c0.8,0,1.5-0.7,1.5-1.5c0-0.8-0.7-1.5-1.5-1.5c-0.8,0-1.5,0.7-1.5,1.5C35.1,67.8,35.7,68.5,36.6,68.5L36.6,68.5z M36.6,68.5"/><path id="XMLID_760_" class="st0" d="M77.4,22.3c-0.3-0.4-0.7-0.6-1.2-0.6H23.7L20.4,7.6c-0.5-2-2.2-3.4-4.3-3.4H7.3C4.9,4.2,3,6.1,3,8.6c0,2.4,2,4.4,4.4,4.4h5.3l10.9,46.3c0.5,2,2.2,3.4,4.3,3.4h2.9c-0.9,1.2-1.5,2.7-1.5,4.4c0,4,3.3,7.3,7.3,7.3s7.3-3.3,7.3-7.3c0-1.6-0.5-3.2-1.5-4.4H55c-0.9,1.2-1.5,2.7-1.5,4.4c0,4,3.3,7.3,7.3,7.3c4,0,7.3-3.3,7.3-7.3c0-1.6-0.5-3.2-1.5-4.4h0c2.4,0,4.4-2,4.4-4.4c0-2.4-2-4.4-4.4-4.4H31.3L29.9,48h38.3c2,0,3.8-1.4,4.3-3.3l5.3-21.2C77.8,23.1,77.7,22.6,77.4,22.3L77.4,22.3z M72.2,33.4h-9.3l1.1-8.8h10.4L72.2,33.4z M55,36.3h4.6l-1.1,8.8h-7.9v-4.4c0-0.8-0.7-1.5-1.5-1.5c-0.8,0-1.5,0.7-1.5,1.5v4.4h-7.9l-1.1-8.8h4.6c0.8,0,1.5-0.7,1.5-1.5c0-0.8-0.7-1.5-1.5-1.5h-5l-1.1-8.8h10.5V29c0,0.8,0.7,1.5,1.5,1.5c0.8,0,1.5-0.7,1.5-1.5v-4.4H61L60,33.4h-5c-0.8,0-1.5,0.7-1.5,1.5C53.5,35.7,54.2,36.3,55,36.3L55,36.3z M29.2,45.1l-2.1-8.8h8.6l1.1,8.8H29.2z M34.2,24.6l1.1,8.8h-8.9l-2.1-8.8H34.2z M40.9,67c0,2.4-2,4.4-4.4,4.4s-4.4-2-4.4-4.4c0-2.4,2-4.4,4.4-4.4S40.9,64.6,40.9,67L40.9,67z M65.2,67c0,2.4-2,4.4-4.4,4.4c-2.4,0-4.4-2-4.4-4.4c0-2.4,2-4.4,4.4-4.4C63.2,62.6,65.2,64.6,65.2,67L65.2,67z M66.6,56.8c0.8,0,1.5,0.7,1.5,1.5c0,0.8-0.7,1.5-1.5,1.5H27.8c-0.7,0-1.3-0.5-1.4-1.1L14.9,10H7.3c-0.8,0-1.5-0.7-1.5-1.5c0-0.8,0.7-1.5,1.5-1.5h8.8c0.7,0,1.3,0.5,1.4,1.1l9.1,38.6c0,0,0,0,0,0l2.3,9.9H66.6z M69.6,44c-0.2,0.7-0.7,1.1-1.4,1.1h-6.7l1.1-8.8h9L69.6,44z M69.6,44"/><path id="XMLID_753_" class="st0" d="M49.1,33.4c-0.8,0-1.5,0.7-1.5,1.5c0,0.8,0.7,1.5,1.5,1.5c0.8,0,1.5-0.7,1.5-1.5C50.6,34.1,49.9,33.4,49.1,33.4L49.1,33.4z M49.1,33.4"/></g></svg>`,OBRASTEATRAL:je`<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 181.2 170.4" style="enable-background:new 0 0 181.2 170.4;" xml:space="preserve"><style type="text/css"></style><path id="XMLID_85_" class="st0" d="M143.3,11.8c0-1.9,1.6-3.5,3.5-3.5c1.9,0,3.5,1.6,3.5,3.5c0,1.9-1.6,3.5-3.5,3.5C144.9,15.3,143.3,13.7,143.3,11.8L143.3,11.8z M92.1,33c-1.8-0.6-3.8,0.4-4.4,2.2c-2.2,6.8-2.5,14-0.9,20.9c0.7,3.2,3.2,5.8,6.4,6.7c12.4,3.6,23.7,2,27,1.5c1.9-0.3,3.2-2.1,2.9-4c-0.3-1.9-2.1-3.2-4-2.9c-7.9,1.3-16.2,0.9-24-1.3c-0.7-0.2-1.3-0.8-1.5-1.6c-1.3-5.7-1-11.7,0.8-17.3C95,35.6,94,33.6,92.1,33L92.1,33z M66.8,65.6c1.8,1.7,4,0.9,4.9,0c3.8-3.8,6.2-8.6,6.9-13.8c0.7-5.1-0.2-10.4-2.7-14.9c-0.9-1.7-3-2.3-4.7-1.4c-1.7,0.9-2.3,3-1.4,4.7c3.6,6.7,2.4,15.1-3,20.5C65.4,62.1,65.4,64.3,66.8,65.6L66.8,65.6z M154,102.9c1.3,1.3,2.4,2.9,2.9,4.8c1.4,4.7-0.9,11-7.4,12.9l-24.2,6.5c-7.1,1.9-62.5,14-74.1,17.2c-7.6,2.1-14.3,6.6-19,12.9l-7.5,10.1c-0.7,0.9-1.6,1.4-3,1.4c-1.3,0-2.5-0.9-3-2L2,131.8c-0.7-1.4-0.3-3,0.8-4.1l10-9.4c1.4-1.3,2.3-2.9,2.7-4.7l1.4-6.5c2.1-9.7,7.8-18.2,16-23.9l16.8-11.7l-3.1-9c-1.3-4,0.6-8.3,4.6-9.9c5.5-2.2,6.4-7.2,6.2-10c-0.6-8.5,1.1-14.3,4.7-20.6C66,15.7,73.6,7.5,86.8,3.9C95,1.7,103.5,0.7,112,0.7c11.2,0,20.1,2,20.8,2.2c4.5,1,3,7.8-1.5,6.8c-0.6-0.1-8.9-2-19.3-2c-8,0-15.8,1-23.5,3c-10.3,2.6-17.5,10.2-20.3,15.2c-2.8,5-4.2,9.4-3.8,16.3c0.5,7.7-3.4,14.3-10.6,17.1c-0.5,0.2-0.7,0.7-0.6,1.2l3.9,11.4c0.4,1.1,0.3,2.8-1.2,4c-4.4,3.4-8,7.8-10.1,12.9l6.1,1.4l2.1-4.5c0.8-1.7,2.9-2.6,4.6-1.8c1.8,0.8,2.6,2.9,1.7,4.7l-1.6,3.3l5.7,1.4c1.6-3.3,3.3-6.5,5.2-9.6l5.8-10.1c2.3-4,8.4-7.1,14.3-3.9c5,2.8,6.7,9.3,3.9,14.3l-8.8,15.4c-1,1.8-1.9,3.6-2.8,5.4c2.7-2.9,9.2-9.9,9.3-10c1.3-1.4,2.5-2.8,3.6-4.2l11.1-14.2c3.6-4.5,9.9-5.4,14.5-2.2c3.8,2.6,6.5,9.5,2.1,14.9l-9.8,12.5c-2.3,2.9-4.6,5.7-7.1,8.4c3.3-0.4,6.6-1,9.9-1.9l23.5-6.3c19.6-5.3,32.7-22.6,32.7-43.1c0-2.4-0.2-4.8-0.5-7.2c-1.6-10.6-6.6-20.2-14.5-27.9c-3.3-3.2,1.5-8.2,4.9-5c9.8,9.4,15,21.7,16.5,31.8c0.4,2.7,0.6,5.5,0.6,8.2C179,75.1,171.3,92.4,154,102.9L154,102.9z M150.2,109.6c-0.5-1.9-2.4-3-4.3-2.5l-28.4,7.7c-3.6,1-7.4,1.7-11.1,2.1c0,0-6.4,0.7-8.8,1c-3.4,0.4-5.5-3.1-3.2-5.9l5.6-6.1c2.6-2.8,5.1-5.7,7.4-8.7l9.8-12.5c0.6-0.8,1.7-3.2-0.7-5c-1.5-1.1-3.7-0.7-4.9,0.8l-11.1,14.2c-1.3,1.6-2.6,3.2-4,4.7c-0.1,0.1-7.3,7.8-9.7,10.4c-2,2.1-5.2,2.8-7.7,1.7c-3.8-1.7-5.3-5.6-3.4-9.8c2.8-6.1,11.9-21.3,11.9-21.3c0.9-1.6,0.4-3.8-1.3-4.8c-1.6-0.9-3.9-0.3-4.8,1.3L75.8,87c-3.6,6.3-7,13.2-9.7,19.5c-0.5,1.1-1.6,2.1-3.2,2.1H50.7c-5.2,0-10,2.6-12.9,7l-2.3,3.6c-2.5,3.9-8.4,0.1-5.9-3.8l2.3-3.6c4.1-6.4,11.1-10.2,18.7-10.2h9.9c0.3-0.7,0.6-1.4,0.9-2.1l-17.3-4.1c-4.1-1-5.8-4.9-5.3-7.9c-8.8,5.5-13.5,13.2-15.2,21.1l-1.4,6.5c-0.7,3.2-2.3,6.1-4.7,8.3l-8.2,7.6l13.1,27.4l4-5.4c5.6-7.6,13.7-13,22.8-15.5c11.7-3.2,67.3-15.3,74.1-17.2l24.2-6.5C149.2,113.5,150.8,111.8,150.2,109.6L150.2,109.6z M150.2,109.6"/></svg>`,OBRASINFANTILES:je`<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 127.3 122" style="enable-background:new 0 0 127.3 122;" xml:space="preserve"><style type="text/css"></style><g id="XMLID_267_"><path id="XMLID_317_" class="st0" d="M56.9,105.7c-0.3-0.3-0.7-0.5-1.1-0.5v0l-4.4-0.7l-2-4.3c-0.5-1-1.6-1.4-2.6-1c-0.4,0.2-0.8,0.5-1,1l-2,4.3l-4.4,0.7c-1.1,0.2-1.8,1.2-1.7,2.3c0.1,0.4,0.3,0.8,0.5,1.1l3.3,3.4l-0.8,4.8c-0.2,1.1,0.6,2.1,1.6,2.3c0.4,0.1,0.9,0,1.3-0.2l3.9-2.2l3.9,2.2c1,0.5,2.2,0.2,2.7-0.8c0.2-0.4,0.3-0.8,0.2-1.3l-0.8-4.8l3.3-3.4C57.7,107.7,57.7,106.5,56.9,105.7L56.9,105.7z M50.1,109.8c-0.4,0.5-0.6,1.1-0.5,1.7l0.3,1.7l-1.3-0.7c-0.6-0.3-1.3-0.3-1.9,0l-1.3,0.7l0.3-1.7c0.1-0.6-0.1-1.3-0.5-1.7l-1.3-1.3l1.7-0.3c0.7-0.1,1.2-0.5,1.5-1.1l0.7-1.4l0.7,1.4c0.3,0.6,0.8,1,1.5,1.1l1.7,0.3L50.1,109.8z M50.1,109.8"/><path id="XMLID_290_" class="st0" d="M82.7,96.8c-0.3-0.3-0.7-0.5-1.1-0.5v0l-7.2-1.1l-3.2-6.9c-0.5-1-1.6-1.4-2.6-1c-0.4,0.2-0.8,0.5-1,1l-3.2,6.9l-7.2,1.1c-1.1,0.2-1.8,1.2-1.7,2.3c0.1,0.4,0.3,0.8,0.5,1.1l5.3,5.4l-1.2,7.6c-0.2,1.1,0.6,2.1,1.6,2.3c0.4,0.1,0.9,0,1.3-0.2l6.4-3.5l6.4,3.5c1,0.5,2.2,0.2,2.7-0.8c0.2-0.4,0.3-0.9,0.2-1.3l-1.3-7.6l5.3-5.4C83.5,98.9,83.5,97.6,82.7,96.8L82.7,96.8z M73.9,103c-0.4,0.5-0.6,1.1-0.5,1.7l0.7,4.6l-3.8-2.1c-0.6-0.3-1.3-0.3-1.9,0l-3.8,2.1l0.7-4.6c0.1-0.6-0.1-1.3-0.5-1.7l-3.3-3.3L66,99c0.7-0.1,1.2-0.5,1.5-1.1l1.9-4l1.9,4c0.3,0.6,0.8,1,1.5,1.1l4.4,0.7L73.9,103zM73.9,103"/><path id="XMLID_268_" class="st0" d="M121,11.8h-9.1l5.9-5.9h3.1c1.1,0,2-0.9,2-2c0-1.1-0.9-2-2-2H4c-1.1,0-2,0.9-2,2c0,1.1,0.9,2,2,2h9.1l-5.9,5.9H4c-1.1,0-2,0.9-2,2c0,1.1,0.9,2,2,2h6l-0.1,7.6l-3.6,3.8C3,30.6,3.2,36.1,6.6,39.4l8.1,7.7c0.4,0.4,0.9,0.5,1.4,0.6h0c0.2,0,0.5-0.1,0.7-0.2l22.1,31.8l-11,33.1c-0.3,1,0.2,2.2,1.3,2.5c1,0.3,2.2-0.2,2.5-1.3l10.1-30.3l6.2,9c0.6,0.9,1.9,1.1,2.8,0.5c0.9-0.6,1.1-1.9,0.5-2.8l-7.9-11.4l12.1-36.4c0.1-0.2,0.1-0.4,0.1-0.6h11.9c0,0.2,0,0.5,0.1,0.7l8.6,23.9l-8.4,12c-0.7,0.9-0.5,2.1,0.4,2.8c0.9,0.7,2.1,0.5,2.8-0.4c0,0,0-0.1,0.1-0.1l6.8-9.7l15.5,42.9c0.3,0.8,1,1.3,1.9,1.3c0.2,0,0.5,0,0.7-0.1c1-0.4,1.6-1.5,1.2-2.5L80.6,66.7l17.6-25.1l12.6,4.3l-13.6,54.7c-0.3,1.1,0.4,2.1,1.4,2.4h0c0.2,0,0.3,0.1,0.5,0.1c0.9,0,1.7-0.6,1.9-1.5l13.5-54.4c0.1,0,0.3,0.1,0.4,0.1c0.8,0,1.6-0.5,1.9-1.3l3.6-10.6c1.5-4.5-0.9-9.4-5.4-11l-0.1,0v-8.5h5.9c1.1,0,2-0.9,2-2C122.9,12.7,122.1,11.8,121,11.8L121,11.8z M112.2,5.9l-5.1,5.1L102,5.9H112.2z M102.3,11.8H92l5.1-5.1L102.3,11.8z M92.4,5.9L87.3,11l-5.1-5.1H92.4z M82.5,11.8H72.2l5.1-5.1L82.5,11.8z M72.6,5.9L67.4,11l-5.1-5.1H72.6z M62.6,11.8H52.4l5.1-5.1L62.6,11.8z M52.7,5.9L47.6,11l-5.1-5.1H52.7z M42.8,11.8H32.6l5.1-5.1L42.8,11.8zM32.9,5.9L27.8,11l-5.1-5.1H32.9z M17.9,6.7l5.1,5.1H12.7L17.9,6.7z M16,42.9l-6.7-6.4c-1.9-1.8-1.9-4.7-0.2-6.6l4.5-4.7c0.9-0.9,2-1.4,3.3-1.4h0.1c1.2,0,2.4,0.5,3.2,1.3l6.7,6.4L16,42.9z M40.5,74.6L19.7,44.7l8.2-8.6l20.6,13.1c0.1,0.1,0.2,0.1,0.3,0.2L40.5,74.6z M51.5,41.6l-1.3,4L30.7,33.2l0.5-0.5c0.8-0.8,0.7-2-0.1-2.8L23,22.1c-1.6-1.6-3.9-2.5-6.2-2.4c-1,0-2,0.2-2.9,0.6l0-4.6h45.5v4h-1.3c-4.8,0-8.6,3.9-8.6,8.6v11.2C49.6,40.6,50.4,41.5,51.5,41.6L51.5,41.6z M69.4,37.6H53.5v-9.2c0-2.6,2.1-4.7,4.7-4.7h6.5c2.6,0,4.7,2.1,4.7,4.7V37.6z M98,27.6l-3.6,10.6c-0.2,0.5-0.1,1,0.1,1.5c0,0.1,0.1,0.1,0.1,0.2L79,62.2l-7.4-20.6c1-0.1,1.9-0.9,1.9-2V28.4c0-4.8-3.9-8.6-8.6-8.6h-1.3v-4H111v7.1l-2.1-0.7C104.4,20.7,99.5,23.1,98,27.6L98,27.6z M116.8,34l-3,8.7l-15-5.1l3-8.7c0.8-2.4,3.5-3.8,5.9-2.9c0,0,0,0,0,0l6.2,2.1C116.3,28.9,117.6,31.6,116.8,34L116.8,34zM116.8,34"/></g></svg>`,MUSICA:je`<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 115.1 111.8" style="enable-background:new 0 0 115.1 111.8;" xml:space="preserve"><style type="text/css"></style><g id="XMLID_33_"><path id="XMLID_78_" class="st0" d="M109,27.9c-0.8-0.6-1.8-0.8-2.8-0.5L61.5,40c-1.4,0.4-2.3,1.6-2.3,3v42.8c-1.9-1.1-4-1.7-6.3-1.7c-7,0-12.7,5.7-12.7,12.7c0,7,5.7,12.7,12.7,12.7s12.7-5.7,12.7-12.7c0-0.3,0-38.7,0-38.7l38.4-10.9v26c-1.9-1.1-4-1.7-6.3-1.7c-7,0-12.7,5.7-12.7,12.7c0,7,5.7,12.7,12.7,12.7s12.7-5.7,12.7-12.7c0-0.3,0-53.8,0-53.8C110.2,29.4,109.8,28.5,109,27.9z M52.8,103.2c-3.5,0-6.3-2.8-6.3-6.3c0-3.5,2.8-6.3,6.3-6.3c3.5,0,6.3,2.8,6.3,6.3C59.2,100.3,56.3,103.2,52.8,103.2z M65.5,51.5v-6.1l38.4-10.9v6.1L65.5,51.5z M97.6,90.5c-3.5,0-6.3-2.8-6.3-6.3c0-3.5,2.8-6.3,6.3-6.3s6.3,2.8,6.3,6.3C103.9,87.7,101.1,90.5,97.6,90.5z"/><path id="XMLID_45_" class="st0" d="M52.8,36.7c0-5-2.4-9.8-6.5-12.8c-7-5.1-12.2-10.2-15.7-15.6L27,2.9c-0.8-1.2-2.2-1.7-3.5-1.3c-1.3,0.4-2.2,1.6-2.2,3v49.6c-1.9-1.1-4-1.7-6.3-1.7c-7,0-12.7,5.7-12.7,12.7s5.7,12.7,12.7,12.7s12.7-5.7,12.7-12.7V14.9c3.8,4.9,8.8,9.5,15.1,14.2c2.4,1.8,3.9,4.6,3.9,7.7c0,5.2-4.3,9.5-9.5,9.5c-1.7,0-3.2,1.4-3.2,3.2c0,1.7,1.4,3.2,3.2,3.2C45.7,52.5,52.8,45.4,52.8,36.7z M14.9,71.5c-3.5,0-6.3-2.8-6.3-6.3c0-3.5,2.8-6.3,6.3-6.3s6.3,2.8,6.3,6.3C21.2,68.7,18.4,71.5,14.9,71.5z"/></g></svg>`,BOLETRERIA:je`<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 181.2 147.3" style="enable-background:new 0 0 181.2 147.3;" xml:space="preserve"><style type="text/css"></style><g id="XMLID_33_"><path id="XMLID_64_" class="st0" d="M177,44.8c1.3-1.3,1.3-3.5,0-4.8l-10-10c-0.6-0.6-1.5-1-2.4-1c-0.9,0-1.8,0.4-2.4,1c-1.5,1.5-3.4,2.2-5.4,2.2c-2,0-4-0.8-5.4-2.2c-1.4-1.4-2.2-3.4-2.2-5.4c0-2,0.8-4,2.2-5.4c0.6-0.6,1-1.5,1-2.4c0-0.9-0.4-1.8-1-2.4l-10-10c-1.3-1.3-3.5-1.3-4.8,0c-1.4,1.4-3.4,2.2-5.4,2.2c-2.1,0-4-0.8-5.4-2.2c-1.3-1.3-3.5-1.3-4.8,0l-8.6,8.6l-7.6-7.6c-0.6-0.6-1.5-1-2.4-1c-0.9,0-1.8,0.4-2.4,1c-1.5,1.4-3.4,2.2-5.4,2.2c-2.1,0-4-0.8-5.4-2.2c-0.6-0.6-1.5-1-2.4-1c-0.9,0-1.8,0.4-2.4,1L53.6,35.4c-1.3,1.3-1.3,3.5,0,4.8c0.7,0.7,1.5,1,2.4,1c0.9,0,1.7-0.3,2.4-1l28.2-28.2c4.6,2.8,10.5,2.8,15.1,0l5.5,5.5L40.7,84.1c-0.6,0.6-1,1.5-1,2.4c0,0.9,0.4,1.8,1,2.4c1.4,1.5,2.2,3.4,2.2,5.4c0,2-0.8,4-2.2,5.4c-0.6,0.6-1,1.5-1,2.4c0,0.9,0.4,1.8,1,2.4l10,10c1.3,1.3,3.5,1.3,4.8,0c1.4-1.4,3.4-2.2,5.4-2.2c2,0,4,0.8,5.4,2.2c3,3,3,7.9,0,10.9h0l-8.9,8.9c-4.6-2.8-10.5-2.8-15.1,0l-5.8-5.8c3.4-5.6,2.7-13-2.1-17.8c-4.8-4.8-12.2-5.5-17.8-2.1l-5.8-5.8c2.8-4.6,2.8-10.5,0-15.1l28.2-28.2c1.3-1.3,1.3-3.5,0-4.8c-1.3-1.3-3.5-1.3-4.8,0L4,85.1c-1.3,1.3-1.3,3.5,0,4.8c3,3,3,7.9,0,10.9c-1.3,1.3-1.3,3.5,0,4.8l10,10c1.3,1.3,3.5,1.3,4.8,0c1.5-1.4,3.4-2.2,5.4-2.2c2.1,0,4,0.8,5.4,2.2c3,3,3,7.9,0,10.9c-1.3,1.3-1.3,3.5,0,4.8l10,10c0.6,0.6,1.5,1,2.4,1c0.9,0,1.8-0.4,2.4-1c3-3,7.9-3,10.9,0c1.3,1.3,3.5,1.3,4.8,0l8.6-8.6l7.6,7.6c0.6,0.6,1.5,1,2.4,1c0.9,0,1.8-0.4,2.4-1c1.5-1.4,3.4-2.2,5.4-2.2c2,0,4,0.8,5.4,2.2c1.3,1.3,3.5,1.3,4.8,0l80-80c1.3-1.3,1.3-3.5,0-4.8C174,52.6,174,47.8,177,44.8L177,44.8z M170,57.7l-10.7,10.7l-3.4-3.4c-1.3-1.3-3.5-1.3-4.8,0c-1.3,1.3-1.3,3.5,0,4.8l3.4,3.4l-60.1,60.1c-2.3-1.4-4.8-2.1-7.6-2.1c-2.7,0-5.3,0.7-7.6,2.1l-5.8-5.8c3.4-5.6,2.7-13-2.1-17.8c-2.7-2.7-6.4-4.3-10.3-4.3c-2.7,0-5.3,0.7-7.6,2.1l-5.8-5.8c1.4-2.3,2.1-4.8,2.1-7.6c0-2.7-0.7-5.3-2.1-7.6l60.1-60.1l3.4,3.4c0.7,0.7,1.5,1,2.4,1c0.9,0,1.7-0.3,2.4-1c1.3-1.3,1.3-3.5,0-4.8l-3.4-3.4l1.8-1.8c0,0,0,0,0,0c0,0,0,0,0,0l8.9-8.9c2.3,1.4,4.9,2.1,7.6,2.1c2.7,0,5.3-0.7,7.6-2.1l5.8,5.8c-1.4,2.3-2.1,4.8-2.1,7.6c0,3.9,1.5,7.5,4.2,10.3c2.7,2.7,6.4,4.2,10.3,4.2c2.7,0,5.3-0.7,7.6-2.1l5.8,5.8C167.2,47.3,167.2,53.1,170,57.7L170,57.7z M170,57.7"/><path id="XMLID_60_" class="st0" d="M125.5,34.6c-1.3-1.3-3.5-1.3-4.8,0c-1.3,1.3-1.3,3.5,0,4.8l5.8,5.8c0.7,0.7,1.5,1,2.4,1c0.9,0,1.7-0.3,2.4-1c1.3-1.3,1.3-3.5,0-4.8L125.5,34.6z M125.5,34.6"/><path id="XMLID_57_" class="st0" d="M140.7,49.8c-1.3-1.3-3.5-1.3-4.8,0c-1.3,1.3-1.3,3.5,0,4.8l5.8,5.8c0.7,0.7,1.5,1,2.4,1c0.9,0,1.7-0.3,2.4-1c1.3-1.3,1.3-3.5,0-4.8L140.7,49.8z M140.7,49.8"/><path id="XMLID_54_" class="st0" d="M100.8,59.2c-1.3-1.3-3.5-1.3-4.8,0L70.7,84.5c-1.3,1.3-1.3,3.5,0,4.8c0.7,0.7,1.5,1,2.4,1s1.7-0.3,2.4-1l25.2-25.2C102.1,62.7,102.1,60.6,100.8,59.2L100.8,59.2z M100.8,59.2"/><path id="XMLID_51_" class="st0" d="M123.4,74l-31.6,31.6c-1.3,1.3-1.3,3.5,0,4.8c0.7,0.7,1.5,1,2.4,1c0.9,0,1.7-0.3,2.4-1l31.6-31.6c1.3-1.3,1.3-3.5,0-4.8C126.9,72.7,124.7,72.7,123.4,74L123.4,74z M123.4,74"/><path id="XMLID_48_" class="st0" d="M122.1,59.1c-1.3-1.3-3.5-1.3-4.8,0l-36,36c-1.3,1.3-1.3,3.5,0,4.8c0.7,0.7,1.5,1,2.4,1c0.9,0,1.8-0.3,2.4-1l36-36C123.4,62.6,123.4,60.4,122.1,59.1L122.1,59.1z M122.1,59.1"/><path id="XMLID_45_" class="st0" d="M46.4,50.9c1.9,0,3.4-1.5,3.4-3.4c0-1.9-1.5-3.4-3.4-3.4c-1.9,0-3.4,1.5-3.4,3.4C43,49.4,44.5,50.9,46.4,50.9L46.4,50.9z M46.4,50.9"/></g></svg>`,GRILLA:je`<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 161.5 188.8" style="enable-background:new 0 0 161.5 188.8;" xml:space="preserve"><style type="text/css"></style><path id="XMLID_83_" class="st0" d="M136.9,31c-1.3-7.4-8.4-12.3-15.8-10.9l-18.5,3.4c-3-2.3-6.5-3.8-10.4-4.2c-3.2-0.3-6-2.3-7.5-5.2C80.8,6.2,72,1.5,62.9,3.1c-9.1,1.7-15.7,9.2-16.6,18c-0.3,3.2-2.3,6-5.2,7.5c-3.5,1.7-6.2,4.4-8.2,7.6l-18.5,3.4C7,40.9,2.1,48,3.4,55.3l21.9,120.1c1.3,7.4,8.4,12.3,15.8,10.9c30.6-5.6,68.3-12.4,106.8-19.5c7.4-1.3,12.3-8.4,10.9-15.8C151.9,113.2,145.3,76.9,136.9,31z M44.1,34.7c5-2.5,8.4-7.3,8.9-12.9c0.6-6,5.2-10.9,11.1-12C70,8.7,76,11.7,78.7,17.1c2.5,5,7.3,8.3,12.9,8.9c6,0.6,10.9,5.2,12,11.1l1.2,6.7L38,55.9l-1.2-6.8C35.7,43.3,38.7,37.3,44.1,34.7zM146.7,160.3c-35.6,6.5-71.2,13-106.8,19.5c-3.7,0.7-7.2-1.8-7.9-5.5L10.1,54.1c-0.7-3.7,1.8-7.2,5.5-7.9L30,43.6c-0.3,2.2-0.4,4.4,0,6.7l2.5,13.5l80.1-14.6l-2.4-13.3c-0.4-2.3-1.2-4.5-2.4-6.5l14.5-2.6c3.7-0.7,7.2,1.8,7.9,5.5c3.5,19.1,19.8,108.6,21.9,120.1C152.8,156.1,150.3,159.6,146.7,160.3z M65.7,18.1c2.8-0.5,5.4,1.3,5.9,4.1c0.5,2.8-1.3,5.4-4.1,5.9c-2.8,0.5-5.4-1.3-5.9-4.1S62.9,18.6,65.7,18.1z M56.2,80.2l60.1-10.9l1.2,6.7L57.4,86.9L56.2,80.2z M59.9,100.2l60.1-10.9l1.2,6.7l-60.1,10.9L59.9,100.2z M63.5,120.2l60.1-10.9l1.2,6.7l-60.1,10.9L63.5,120.2z M67.2,140.3l60.1-10.9l1.2,6.7l-60.1,10.9L67.2,140.3z M39.5,83.2c1.8-0.3,3.6,0.9,3.9,2.7s-0.9,3.6-2.7,3.9c-1.8,0.3-3.6-0.9-3.9-2.7C36.5,85.3,37.7,83.6,39.5,83.2zM43.2,103.3c1.8-0.3,3.6,0.9,3.9,2.7c0.3,1.8-0.9,3.6-2.7,3.9c-1.8,0.3-3.6-0.9-3.9-2.7S41.3,103.6,43.2,103.3z M46.8,123.3c1.8-0.3,3.6,0.9,3.9,2.7s-0.9,3.6-2.7,3.9c-1.8,0.3-3.6-0.9-3.9-2.7S45,123.6,46.8,123.3z M50.5,143.3c1.8-0.3,3.6,0.9,3.9,2.7c0.3,1.8-0.9,3.6-2.7,3.9c-1.8,0.3-3.6-0.9-3.9-2.7C47.4,145.4,48.6,143.6,50.5,143.3z"/></svg>`,DONDEVERNOS:je`<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 129.8 110.2" style="enable-background:new 0 0 129.8 110.2;" xml:space="preserve"><style type="text/css"></style><path id="XMLID_33_" class="st0" d="M65.1,64.1c-4.2,0-7.6,3.4-7.6,7.6s3.4,7.6,7.6,7.6c4.2,0,7.6-3.4,7.6-7.6S69.3,64.1,65.1,64.1zM118.6,4H11.5c-4.2,0-7.7,3.4-7.7,7.7v71.4c0,4.2,3.4,7.7,7.7,7.7h43.4v5.5l-28.5,4.7c-1.4,0.2-2.3,1.5-2.1,2.9c0.2,1.2,1.3,2.1,2.5,2.1c0.1,0,0.3,0,0.4,0l30.4-5.1h14.9l30.4,5.1c0.1,0,0.3,0,0.4,0c1.2,0,2.3-0.9,2.5-2.1c0.2-1.4-0.7-2.7-2.1-2.9l-28.5-4.7v-5.5h43.4c4.2,0,7.7-3.4,7.7-7.7V11.7C126.3,7.4,122.9,4,118.6,4z M70.2,95.8H60v-5.1h10.2V95.8z M121.2,83.1c0,1.4-1.1,2.6-2.6,2.6H11.5c-1.4,0-2.6-1.1-2.6-2.6V11.7c0-1.4,1.1-2.6,2.6-2.6h107.1c1.4,0,2.6,1.1,2.6,2.6V83.1zM30.2,33c-1.5,1.5-1.5,3.9,0,5.4c1.5,1.5,3.9,1.5,5.4,0c16.3-16.3,42.7-16.3,59,0c0.7,0.7,1.7,1.1,2.7,1.1c1,0,1.9-0.4,2.7-1.1c1.5-1.5,1.5-3.9,0-5.4C80.7,13.8,49.5,13.8,30.2,33z M41,43.8c-1.5,1.5-1.5,3.9,0,5.4c1.5,1.5,3.9,1.5,5.4,0c10.3-10.3,27.2-10.3,37.5,0c0.7,0.7,1.7,1.1,2.7,1.1c1,0,1.9-0.4,2.7-1.1c1.5-1.5,1.5-3.9,0-5.4C75.9,30.5,54.3,30.5,41,43.8zM51.7,54.5c-1.5,1.5-1.5,3.9,0,5.4s3.9,1.5,5.4,0c4.3-4.3,11.8-4.3,16.1,0c0.7,0.7,1.7,1.1,2.7,1.1c1,0,1.9-0.4,2.7-1.1c1.5-1.5,1.5-3.9,0-5.4C71.3,47.3,58.8,47.3,51.7,54.5z"/></svg>`,ESTRENOS:je`<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 150.2 124.2" style="enable-background:new 0 0 150.2 124.2;" xml:space="preserve"><style type="text/css"></style><g id="XMLID_68_"><path id="XMLID_74_" class="st0" d="M139.8,107.7h-2v-9.6c0-1.2-1-2.1-2.1-2.1c-1.2,0-2.1,1-2.1,2.1v9.6h-5V52.5h5v36.6c0,1.2,1,2.1,2.1,2.1c1.2,0,2.1-1,2.1-2.1V22.6c2.8-2.1,4.6-5.4,4.6-9.1c0-6.3-5.1-11.3-11.3-11.3c-6.3,0-11.3,5.1-11.3,11.3c0,3.7,1.8,7,4.6,9.1V27l-5.2,3.9c-0.8,0.6-1.5,1.1-2.3,1.7c-0.2-0.2-0.5-0.4-0.8-0.5c-2-1.2-4.4-1.1-6.4,0c-10.7,6.2-22.9,9.5-35.4,9.5c-12.4,0-24.6-3.2-35.2-9.4c-2-1.2-4.4-1.2-6.4,0c-0.3,0.2-0.5,0.3-0.8,0.5c-0.9-0.6-1.8-1.2-2.6-1.9L23.9,27v-4.4c2.8-2.1,4.6-5.4,4.6-9.1c0-6.3-5.1-11.3-11.3-11.3c-6.3,0-11.3,5.1-11.3,11.3c0,3.7,1.8,7,4.6,9.1v85.1h-2c-3.9,0-7.1,3.2-7.1,7.1v2c0,1.7,1.4,3.1,3.1,3.1h25.5c1.7,0,3.1-1.4,3.1-3.1v-2c0-3.9-3.2-7.1-7.1-7.1h-2V65.6c0-1.2-1-2.1-2.1-2.1c-1.2,0-2.1,1-2.1,2.1v42.1h-5V52.5h5v4c0,1.2,1,2.1,2.1,2.1c1.2,0,2.1-1,2.1-2.1V32.3l2.7,2c0.9,0.7,1.9,1.4,2.9,2.1c-0.1,0.5-0.2,0.9-0.2,1.4c0,2.3,1.2,4.4,3.2,5.5c4.7,2.7,9.7,5,14.9,6.7v10.6c-3.1,1.4-5.2,4.5-5.2,8.1v14.1c0,4.9,4,8.9,8.9,8.9h46.5c4.9,0,8.9-4,8.9-8.9V68.7c0-3.6-2.2-6.7-5.2-8.1V49.9c5.2-1.8,10.1-4,14.9-6.8c1.9-1.1,3.1-3.2,3.1-5.5c0-0.5-0.1-1-0.2-1.4c0.9-0.6,1.7-1.2,2.6-1.9l2.7-2v5.6c0,0,0,0,0,0c0,0,0,0,0,0v12.5c0,0,0,0,0,0c0,0,0,0,0,0v57.3h-2c-3.9,0-7.1,3.2-7.1,7.1v2c0,1.7,1.4,3.1,3.1,3.1h25.5c1.7,0,3.1-1.4,3.1-3.1v-2C146.8,110.9,143.7,107.7,139.8,107.7L139.8,107.7z M28.8,114.8v0.8H5.6v-0.8c0-1.6,1.3-2.8,2.8-2.8h17.5C27.5,112,28.8,113.2,28.8,114.8L28.8,114.8z M17.2,6.4c3.9,0,7.1,3.2,7.1,7.1c0,3.9-3.2,7.1-7.1,7.1c-3.9,0-7.1-3.2-7.1-7.1C10.1,9.6,13.3,6.4,17.2,6.4L17.2,6.4z M17.2,24.9c0.9,0,1.7-0.1,2.5-0.3v11.2h-5V24.6C15.5,24.8,16.3,24.9,17.2,24.9L17.2,24.9zM14.7,48.2V40h5v8.2H14.7z M96.9,59.8H65.8c-1.2,0-2.1,1-2.1,2.1c0,1.2,1,2.1,2.1,2.1h31.7c2.6,0,4.6,2.1,4.6,4.6v14.1c0,2.6-2.1,4.6-4.6,4.6H51c-2.6,0-4.6-2.1-4.6-4.6V68.7c0-2.6,2.1-4.6,4.6-4.6h5.8c1.2,0,2.1-1,2.1-2.1c0-1.2-1-2.1-2.1-2.1h-5.2v-8.5c7.3,2,14.9,3.1,22.5,3.1c7.7,0,15.4-1.1,22.8-3.2V59.8z M113.9,39.4c-12,7-25.7,10.7-39.8,10.7c-13.9,0-27.6-3.7-39.5-10.6c-0.6-0.4-1-1.1-1-1.8c0-1.1,0.7-1.7,1.1-1.8c0.2-0.1,0.6-0.3,1.1-0.3c0.3,0,0.7,0.1,1.1,0.3c11.3,6.5,24.2,10,37.3,10c13.2,0,26.2-3.5,37.6-10.1c1-0.6,1.8-0.2,2.1,0c0.3,0.2,1.1,0.7,1.1,1.8C114.9,38.4,114.5,39.1,113.9,39.4L113.9,39.4zM128.5,48.2V40h5v8.2H128.5z M131,6.4c3.9,0,7.1,3.2,7.1,7.1c0,3.9-3.2,7.1-7.1,7.1c-3.9,0-7.1-3.2-7.1-7.1C123.9,9.6,127.1,6.4,131,6.4L131,6.4z M131,24.9c0.9,0,1.7-0.1,2.5-0.3v11.2h-5V24.6C129.3,24.8,130.1,24.9,131,24.9L131,24.9zM142.6,115.6h-23.2v-0.8c0-1.6,1.3-2.8,2.8-2.8h17.5c1.6,0,2.8,1.3,2.8,2.8V115.6z M142.6,115.6"/></g></svg>`,COMUNIDAD:je`<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 203.8 192.8" style="enable-background:new 0 0 203.8 192.8;" xml:space="preserve"><style type="text/css"></style><g id="XMLID_64_"><g id="XMLID_65_"><path id="XMLID_102_" class="st0" d="M55,121.9c1.9-1.1,2.5-3.4,1.4-5.3c-1.1-1.8-3.4-2.5-5.3-1.4c-1.8,1.1-2.5,3.4-1.4,5.3C50.8,122.3,53.2,122.9,55,121.9L55,121.9z M55,121.9"/><path id="XMLID_93_" class="st0" d="M39.2,148.6l19.5,33.8c4.2,7.3,13.7,10,21.1,5.7c7.4-4.3,9.9-13.7,5.7-21.1l-11.6-20.1l10.1-5.8c1.8-1.1,2.5-3.4,1.4-5.3l-5-8.7c0.6-0.1,4.5-0.9,74.1-14.5c8.6-0.5,13.8-9.9,9.4-17.4L151,72.7l8.2-12.4c0.8-1.2,0.9-2.8,0.1-4.1l-7.7-13.4c-0.7-1.3-2.1-2-3.6-1.9l-14.9,0.9L118.8,17c-2.1-3.6-5.8-5.8-9.9-5.8c0,0-0.1,0-0.1,0c-4,0-7.6,2-9.8,5.4L48.5,81l-32.9,19c-12.9,7.5-17.4,24-9.9,37C12.5,148.8,26.9,153.5,39.2,148.6L39.2,148.6z M78.8,170.7c2.1,3.7,0.9,8.4-2.8,10.6c-3.7,2.2-8.5,0.8-10.6-2.8L46,144.9l13.4-7.7C81.8,176,78.4,170.1,78.8,170.7L78.8,170.7z M70,140l-3.9-6.7l6.7-3.9l3.9,6.7L70,140z M146.1,48.7l5.3,9.3l-4.8,7.2l-9.2-16L146.1,48.7z M105.5,20.8c1-1.7,2.7-1.9,3.4-1.9c0.7,0,2.3,0.2,3.3,1.9l45,78c1.5,2.5-0.3,5.7-3.3,5.8c-0.5,0-0.8,0.1-2.1,0.4l-47.6-82.5C105.1,21.3,105.3,21.1,105.5,20.8L105.5,20.8z M99,29.1l44.7,77.5l-67.5,13.2L55.7,84.3L99,29.1z M12.4,133.1c-1.7-2.9-2.6-6.3-2.6-9.7c0-6.9,3.7-13.3,9.7-16.8l30.2-17.4L69,122.8l-30.2,17.4C29.6,145.5,17.7,142.3,12.4,133.1L12.4,133.1z M12.4,133.1"/><path id="XMLID_90_" class="st0" d="M43.1,124.3c-1.1-1.8-3.4-2.5-5.3-1.4l-6.7,3.9c-1.8,1.1-4.2,0.4-5.3-1.4c-1.1-1.8-3.4-2.5-5.3-1.4c-1.9,1.1-2.5,3.4-1.4,5.3c3.2,5.5,10.3,7.5,15.9,4.2l6.7-3.9C43.5,128.5,44.1,126.2,43.1,124.3L43.1,124.3z M43.1,124.3"/><path id="XMLID_87_" class="st0" d="M194.4,19.5l-21.6,12c-1.9,1-2.5,3.4-1.5,5.3c1,1.9,3.4,2.5,5.3,1.5l21.6-12c1.9-1,2.5-3.4,1.5-5.3C198.6,19.1,196.3,18.5,194.4,19.5L194.4,19.5z M194.4,19.5"/><path id="XMLID_84_" class="st0" d="M192.2,59.6l-15-4c-2.1-0.6-4.2,0.7-4.7,2.7c-0.6,2.1,0.7,4.2,2.7,4.7l15,4c2.1,0.6,4.2-0.7,4.7-2.7C195.4,62.3,194.2,60.1,192.2,59.6L192.2,59.6z M192.2,59.6"/><path id="XMLID_72_" class="st0" d="M154.6,5.4l-4,15c-0.6,2.1,0.7,4.2,2.7,4.7c2.1,0.6,4.2-0.7,4.7-2.7l4-15c0.6-2.1-0.7-4.2-2.7-4.7C157.3,2.2,155.1,3.4,154.6,5.4L154.6,5.4z M154.6,5.4"/></g></g></svg>`,ALIMENTOS:je`<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 104.7 101.7" style="enable-background:new 0 0 104.7 101.7;" xml:space="preserve"><style type="text/css"></style><g id="XMLID_2604_"><path id="XMLID_2596_" class="st0" d="M75.7,90.6c2.6,0,4.7-2.1,4.7-4.7v-19c0-2.6-2.1-4.7-4.7-4.7c-2.6,0-4.7,2.1-4.7,4.7v19C71,88.5,73.1,90.6,75.7,90.6L75.7,90.6z M74.2,66.9c0-0.9,0.7-1.6,1.6-1.6s1.6,0.7,1.6,1.6v19c0,0.9-0.7,1.6-1.6,1.6s-1.6-0.7-1.6-1.6V66.9z M74.2,66.9"/><path id="XMLID_600_" class="st0" d="M93.1,43.2c0-4.4-1.7-8.6-4.7-11.7v-5.7c0-0.9-0.7-1.6-1.6-1.6h-0.9l2-2c2.4-2.4,2.4-6.2,0-8.6c-2.4-2.4-6.2-2.4-8.6,0L68.8,24.2h-2.5v-4.7c0-0.3-0.1-0.7-0.3-0.9l-4.4-5.9V6.8c0-0.9-0.7-1.6-1.6-1.6H39.4c-0.9,0-1.6,0.7-1.6,1.6v5.8l-4.4,5.9l0,0c-0.2,0.3-0.3,0.6-0.3,0.9v5.7c-1-0.6-2-0.9-3.2-0.9v-6.3c0-0.9-0.7-1.6-1.6-1.6h-9.5c-0.9,0-1.6,0.7-1.6,1.6v6.3c-3.5,0.1-6.3,3-6.3,6.5v12.5c-3.5,0-6.3,2.8-6.3,6.3c0,3.5,2.8,6.3,6.3,6.3h0.2l5.1,33.4c0.7,4.4,4.5,7.7,9,7.7h53.6c4.5,0,8.3-3.3,9-7.7l5.1-33.4h0.2c3.5,0,6.3-2.8,6.3-6.3C99.5,46,96.6,43.2,93.1,43.2L93.1,43.2zM76.4,33.7h7.1c-1.9,2.8-3,6.1-3,9.5H66.9L76.4,33.7z M86.9,34.5c2,2.4,3.1,5.5,3.1,8.7h-6.3C83.7,40,84.8,37,86.9,34.5L86.9,34.5z M85.2,27.4v3.2h-5.7l3.2-3.2H85.2z M81.6,15.9c0.5-0.5,1.3-0.9,2-0.9c0.8,0,1.5,0.3,2.1,0.8c0.5,0.5,0.9,1.3,0.8,2.1c0,0.8-0.3,1.5-0.9,2L54.1,51.6c-0.5,0.5-1.3,0.9-2,0.9c-0.8,0-1.5-0.3-2.1-0.8c-0.5-0.5-0.9-1.3-0.8-2.1c0-0.8,0.3-1.5,0.9-2L81.6,15.9z M56.8,14.8l-2.4,3.2H37.8l2.4-3.2H56.8z M36.2,21.1h17.4v18.3l-3.8,3.8H36.2V21.1z M63.1,29.9v-2.5h2.5L63.1,29.9zM63.1,24.2h-1.6c-0.9,0-1.6,0.7-1.6,1.6v6.3c0,0.3,0.1,0.5,0.2,0.7l-3.3,3.3V20l3.2-4.2l3.2,4.2V24.2z M58.3,8.4v3.2H41V8.4H58.3zM26.7,19.5v4.7h-6.3v-4.7H26.7z M14.1,40h15.8v-3.2H14.1v-6.2c0-1.8,1.5-3.3,3.3-3.3h12.3c1.8,0,3.3,1.5,3.3,3.3v12.5h-19V40zM7.8,49.5c0-1.7,1.4-3.2,3.2-3.2h35.9c-1.2,1.9-1.2,4.4,0,6.3H10.9C9.2,52.7,7.8,51.3,7.8,49.5L7.8,49.5z M84.6,88.8c-0.4,2.9-2.9,5-5.8,5H25.2c-2.9,0-5.4-2.1-5.8-5l-5.1-32.9h75.4L84.6,88.8z M93.1,52.7H57.4l6.3-6.3h29.4c1.7,0,3.2,1.4,3.2,3.2C96.3,51.3,94.9,52.7,93.1,52.7L93.1,52.7z M93.1,52.7"/><path id="XMLID_596_" class="st0" d="M28.3,90.6c2.6,0,4.7-2.1,4.7-4.7v-19c0-2.6-2.1-4.7-4.7-4.7s-4.7,2.1-4.7,4.7v19C23.6,88.5,25.7,90.6,28.3,90.6L28.3,90.6z M26.7,66.9c0-0.9,0.7-1.6,1.6-1.6c0.9,0,1.6,0.7,1.6,1.6v19c0,0.9-0.7,1.6-1.6,1.6c-0.9,0-1.6-0.7-1.6-1.6V66.9z M26.7,66.9"/><path id="XMLID_555_" class="st0" d="M44.1,90.6c2.6,0,4.7-2.1,4.7-4.7v-19c0-2.6-2.1-4.7-4.7-4.7c-2.6,0-4.7,2.1-4.7,4.7v19C39.4,88.5,41.5,90.6,44.1,90.6L44.1,90.6z M42.5,66.9c0-0.9,0.7-1.6,1.6-1.6s1.6,0.7,1.6,1.6v19c0,0.9-0.7,1.6-1.6,1.6s-1.6-0.7-1.6-1.6V66.9z M42.5,66.9"/><path id="XMLID_547_" class="st0" d="M59.9,90.6c2.6,0,4.7-2.1,4.7-4.7v-19c0-2.6-2.1-4.7-4.7-4.7c-2.6,0-4.7,2.1-4.7,4.7v19C55.2,88.5,57.3,90.6,59.9,90.6L59.9,90.6z M58.3,66.9c0-0.9,0.7-1.6,1.6-1.6s1.6,0.7,1.6,1.6v19c0,0.9-0.7,1.6-1.6,1.6s-1.6-0.7-1.6-1.6V66.9z M58.3,66.9"/></g></svg>`,MOTOS:je`<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 210.3 167.9" style="enable-background:new 0 0 210.3 167.9;" xml:space="preserve"><style type="text/css"></style><g id="XMLID_2511_"><path id="XMLID_2515_" class="st0" d="M177,97.4c-0.3-4.3-0.8-8.9-1.6-13.8c-0.3-2.1-2.3-3.6-4.5-3.3c-2.1,0.3-3.6,2.3-3.3,4.5c0.7,4.5,1.2,8.8,1.5,12.7c-14.1,1.9-25.5,13.4-27.2,27.5h-12.9l13.5-22.3c4.1-6.8,6.3-14.5,6.3-22.4V40.1c0,0,0,0,0,0V36c1.6,1,3.4,1.8,5.3,2.2c1.9,3.6,3.8,8.4,5.7,13.9c0.7,2,2.9,3.1,4.9,2.5c2-0.7,3.1-2.9,2.5-4.9c-1.4-4.1-2.8-7.8-4.2-11h4c2.2,0,3.9-1.7,3.9-3.9V7.7c0-2.2-1.7-3.9-3.9-3.9h-9.1c-9,0-16.4,7.1-16.9,16c-2.5-1.6-5.5-2.5-8.7-2.5h-12.1c-2.2,0-3.9,1.7-3.9,3.9c0,2.2,1.7,3.9,3.9,3.9h12.1c4.8,0,8.7,3.9,8.7,8.7v46.5c0,6.5-1.8,12.8-5.1,18.3l-16,26.3H93V91.6c0-6.2-2.4-11.8-6.2-16.1h2.3c2.2,0,3.9-1.8,3.9-3.9v-4.5c0-9.6-7.8-17.4-17.4-17.4H64.5V19.2c0-2.2-1.7-3.9-3.9-3.9H9.1c-2.2,0-3.9,1.7-3.9,3.9v52.3c0,2.2,1.7,3.9,3.9,3.9h13.2C11.8,83,5,95.3,5,109.1v19.7c0,2.2,1.7,3.9,3.9,3.9h15.5c-0.1,1.1-0.2,2.1-0.2,3.2c0,13.7,11.2,24.9,24.9,24.9c13.7,0,24.9-11.2,24.9-24.9c0-1.1-0.1-2.1-0.2-3.2h74.9c-0.1,1.1-0.2,2.1-0.2,3.2c0,13.7,11.2,24.9,24.9,24.9c13.7,0,24.9-11.2,24.9-24.9c0-1.1-0.1-2.1-0.2-3.2h3.1c2.2,0,3.9-1.7,3.9-3.9C205,112.6,192.7,99.2,177,97.4L177,97.4z M148.8,20.7c0-5,4.1-9.1,9.1-9.1h5.2v19.3h-5.2C152.1,30.8,148.8,26,148.8,20.7L148.8,20.7z M49.1,153C39.7,153,32,145.4,32,136c0-1.1,0.1-2.2,0.3-3.2h33.6c0.2,1,0.3,2.1,0.3,3.2C66.2,145.4,58.5,153,49.1,153L49.1,153z M75.6,57.5c5.3,0,9.6,4.3,9.6,9.6v0.5H64.5V57.5H75.6z M13,23.1h43.7v10.3H13V23.1z M13,41.2h43.7v26.4H13V41.2z M12.8,109.1c0-18.6,15.1-33.6,33.6-33.6h22.7c8.9,0,16.1,7.2,16.1,16.1V125H12.8V109.1z M173.4,153c-9.4,0-17.1-7.7-17.1-17.1c0-1.1,0.1-2.2,0.3-3.2h33.6c0.2,1,0.3,2.1,0.3,3.2C190.4,145.4,182.8,153,173.4,153L173.4,153z M196.9,125h-47c1.9-11.3,12-19.9,23.5-19.9C185.2,105,195,113.7,196.9,125L196.9,125z M196.9,125"/><path id="XMLID_2512_" class="st0" d="M170.2,63.5c-1.4-0.9-3.3-0.9-4.6,0.2c-1.3,1-1.8,2.8-1.3,4.3c1.1,3.3,5.9,3.5,7.3,0.3C172.4,66.6,171.7,64.5,170.2,63.5L170.2,63.5z M170.2,63.5"/></g></svg>`,HERRAMIENTAS:je`<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 159.7 160" style="enable-background:new 0 0 159.7 160;" xml:space="preserve"><style type="text/css"></style><g id="XMLID_2563_"><path id="XMLID_2589_" class="st0" d="M117,38.9l8.8,5.1c0.5,0.3,1,0.4,1.5,0.4c0.5,0,1-0.1,1.5-0.4l8.8-5.1c0.9-0.5,1.5-1.5,1.5-2.5V26.2c0-1-0.6-2-1.5-2.5l-8.8-5.1c-0.9-0.5-2-0.5-2.9,0l-8.8,5.1c-0.9,0.5-1.5,1.5-1.5,2.5v10.2C115.5,37.4,116.1,38.4,117,38.9L117,38.9z M121.4,27.9l5.9-3.4l5.9,3.4v6.8l-5.9,3.4l-5.9-3.4V27.9z M121.4,27.9"/><path id="XMLID_2580_" class="st0" d="M140.5,105.9c-5.6-3.2-12.1-4.3-18.4-3L99.3,80l22.8-22.8c1.7,0.3,3.4,0.5,5.1,0.5c9.3,0,18.1-4.9,22.9-13.2c3.5-6.1,4.5-13.2,2.6-20c-1.8-6.8-6.2-12.5-12.3-16c-12.6-7.3-28.8-2.9-36.1,9.7c-3.2,5.6-4.3,12.1-3,18.4L78.5,59.3l-1.9-1.9c-1.1-1.1-3-1.1-4.2,0c-1.1,1.1-1.1,3,0,4.2l1.9,1.9L61.9,75.9L40,54l12.4-12.5l1.4,1.4c1.1,1.1,3,1.1,4.2,0c1.1-1.1,1.1-3,0-4.2l-2.3-2.3c2.2-11-2.9-22.3-12.7-28C35.3,4,26,3.7,18.1,7.6c-2.6,1.3-4,2.9-4.1,4.9c-0.1,1.9,1.1,3.6,3.5,5l7.9,4.6c1.3,0.8,1.3,1.1,1.3,1.8v3.4c0,2.1-0.2,2.5-2,3.5l-2.9,1.7c-0.6,0.3-0.9,0.5-2.3-0.2l-7.9-4.5c-2.4-1.4-4.4-1.6-6.1-0.5c-1.7,1.1-2.4,3.1-2.2,6C4,41.9,8.9,49.8,16.5,54.2c5.6,3.2,12.1,4.3,18.4,3L57.7,80l-22.8,22.8c-11-2.2-22.3,2.9-28,12.7c-3.5,6.1-4.5,13.2-2.6,20c1.8,6.8,6.2,12.5,12.3,16c4.2,2.4,8.7,3.5,13.2,3.5c9.1,0,18-4.7,22.9-13.2c3.2-5.6,4.3-12.1,3-18.4l22.8-22.8l22.8,22.8c-2.2,11,2.9,22.3,12.7,28c4.1,2.4,8.6,3.5,13.2,3.5c4,0,7.9-0.9,11.6-2.7c2.6-1.3,4-2.9,4.1-4.9c0.1-1.9-1.1-3.6-3.5-5l-7.9-4.6c-1.3-0.8-1.3-1.1-1.3-1.8v-3.4c0-2.1,0.2-2.5,2-3.5l2.9-1.7c0.6-0.3,0.9-0.5,2.3,0.2l7.9,4.5c2.4,1.4,4.4,1.6,6.1,0.5c1.7-1.1,2.4-3.1,2.2-6C153,118.1,148.1,110.3,140.5,105.9L140.5,105.9z M19.5,49.1c-5.8-3.4-9.6-9.3-10.2-16.1l7.4,4.3c1.8,1.1,4.7,2.2,8.1,0.2l2.9-1.7c3.6-2.1,5-4.4,5-8.6v-3.4c0-4-2.4-5.9-4.3-6.9L21,12.7c6.1-2.9,13.2-2.6,19,0.8c7.8,4.5,11.8,13.6,9.8,22.4L34.3,51.3C29.3,52.5,24,51.7,19.5,49.1L19.5,49.1z M109.4,21c5.7-9.8,18.3-13.2,28.1-7.5c4.8,2.7,8.2,7.2,9.6,12.5c1.4,5.3,0.7,10.8-2.1,15.6c-3.7,6.5-10.6,10.3-17.8,10.3c-1.5,0-3-0.2-4.5-0.5l-15.5-15.4C106,30.8,106.8,25.6,109.4,21L109.4,21zM47.6,139.1c-5.7,9.8-18.3,13.2-28.1,7.5c-4.8-2.7-8.2-7.2-9.6-12.5c-1.4-5.3-0.7-10.8,2.1-15.6c3.7-6.5,10.6-10.3,17.8-10.3c1.5,0,3,0.2,4.5,0.5l15.5,15.4C51,129.3,50.2,134.5,47.6,139.1L47.6,139.1z M52.4,118.5L40,106.1l64.6-64.6L117,54L52.4,118.5zM82.7,96.6l12.5-12.5l21.9,21.9l-12.4,12.5L82.7,96.6z M140.4,122.7c-1.8-1.1-4.7-2.2-8.1-0.2l-2.9,1.7c-3.6,2.1-5,4.4-5,8.6v3.4c0,4,2.4,5.9,4.3,6.9l7.4,4.3c-6.1,2.9-13.2,2.6-19-0.8c-7.8-4.5-11.8-13.6-9.8-22.4l15.4-15.5c5.1-1.2,10.3-0.4,14.9,2.2c5.8,3.4,9.6,9.3,10.2,16.1L140.4,122.7z M140.4,122.7"/><path id="XMLID_2575_" class="st0" d="M40,121.2l-8.8-5.1c-0.9-0.5-2-0.5-2.9,0l-8.8,5.1c-0.9,0.5-1.5,1.5-1.5,2.5v10.2c0,1,0.6,2,1.5,2.5l8.8,5.1c0.5,0.3,1,0.4,1.5,0.4c0.5,0,1-0.1,1.5-0.4l8.8-5.1c0.9-0.5,1.5-1.5,1.5-2.5v-10.2C41.5,122.6,41,121.7,40,121.2L40,121.2z M35.6,132.2l-5.9,3.4l-5.9-3.4v-6.8l5.9-3.4l5.9,3.4V132.2z M35.6,132.2"/><path id="XMLID_2564_" class="st0" d="M65.2,53.1c1.6,0,2.9-1.3,2.9-2.9c0-1.6-1.3-2.9-2.9-2.9h0c-1.6,0-2.9,1.3-2.9,2.9C62.3,51.8,63.6,53.1,65.2,53.1L65.2,53.1z M65.2,53.1"/></g></svg>`,DESCUENTOS:je`<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 122.3 123.5" style="enable-background:new 0 0 122.3 123.5;" xml:space="preserve"><style type="text/css"></style><g id="XMLID_221_"><path id="XMLID_2623_" class="st0" d="M60.4,20.4C38,20.4,19.8,38.6,19.8,61c0,22.4,18.2,40.6,40.6,40.6S101,83.4,101,61C101,38.6,82.8,20.4,60.4,20.4L60.4,20.4z M60.4,97.7c-20.3,0-36.7-16.5-36.7-36.7c0-20.3,16.5-36.7,36.7-36.7c20.3,0,36.8,16.5,36.8,36.7C97.1,81.3,80.7,97.7,60.4,97.7L60.4,97.7z M60.4,97.7"/><path id="XMLID_2620_" class="st0" d="M41.6,77l34.8-34.8l2.7,2.7L44.3,79.8L41.6,77z M41.6,77"/><path id="XMLID_2616_" class="st0" d="M112.9,52.6c-1.9-1.6-3.8-3.2-4.2-4.6c-0.4-1.5,0.5-4,1.4-6.3c1.2-3.5,2.5-7,0.9-9.9c-1.7-2.9-5.5-3.6-9.1-4.2c-2.5-0.4-5-0.9-6.1-1.9c-1.1-1.1-1.5-3.6-1.9-6.1c-0.6-3.6-1.3-7.4-4.2-9.1c-2.9-1.7-6.4-0.4-9.9,0.9c-2.4,0.9-4.9,1.8-6.3,1.4c-1.4-0.4-3-2.3-4.6-4.2c-2.4-2.9-4.9-5.8-8.3-5.8c-3.4,0-5.9,3-8.3,5.8c-1.6,1.9-3.2,3.8-4.6,4.2c-1.5,0.4-4-0.5-6.4-1.4c-3.5-1.2-7-2.5-9.9-0.9c-2.9,1.7-3.6,5.5-4.2,9.1c-0.4,2.5-0.9,5-1.9,6.1c-1.1,1.1-3.6,1.5-6.1,1.9c-3.6,0.6-7.4,1.3-9.1,4.2c-1.7,2.9-0.4,6.4,0.9,9.9c0.9,2.4,1.8,4.9,1.4,6.3c-0.4,1.4-2.3,3-4.2,4.6C5,55.1,2.1,57.6,2.1,61c0,3.4,3,5.9,5.8,8.3c1.9,1.6,3.8,3.2,4.2,4.6c0.4,1.5-0.5,4-1.4,6.4c-1.2,3.5-2.5,7-0.9,9.9c1.7,2.9,5.5,3.6,9.1,4.2c2.5,0.4,5,0.9,6.1,1.9c1.1,1.1,1.5,3.6,1.9,6.1c0.6,3.6,1.3,7.4,4.2,9.1c2.9,1.7,6.4,0.4,9.9-0.9c2.4-0.9,4.9-1.8,6.4-1.4c1.4,0.4,3,2.3,4.6,4.2c2.4,2.9,4.9,5.8,8.3,5.8c3.4,0,5.9-3,8.3-5.8c1.6-1.9,3.2-3.8,4.6-4.2c1.5-0.4,4,0.5,6.3,1.4c3.5,1.2,7,2.5,9.9,0.9c2.9-1.7,3.6-5.5,4.2-9.1c0.4-2.5,0.9-5,1.9-6.1c1.1-1.1,3.6-1.5,6.1-1.9c3.6-0.6,7.4-1.3,9.1-4.2c1.7-2.9,0.4-6.4-0.9-9.9c-0.9-2.4-1.8-4.9-1.4-6.4c0.4-1.4,2.3-3,4.2-4.6c2.9-2.4,5.8-4.9,5.8-8.3C118.7,57.6,115.8,55.1,112.9,52.6L112.9,52.6z M110.4,66.4c-2.3,2-4.8,4-5.5,6.6c-0.7,2.7,0.4,5.7,1.5,8.7c0.9,2.5,1.9,5.3,1.2,6.6c-0.8,1.4-3.8,1.9-6.4,2.3c-3.1,0.5-6.2,1.1-8.1,3c-1.9,1.9-2.5,5.1-3,8.1c-0.5,2.6-1,5.6-2.3,6.4c-1.3,0.8-4.1-0.3-6.6-1.2c-2.9-1.1-6-2.2-8.7-1.5c-2.6,0.7-4.6,3.1-6.6,5.5c-1.8,2.1-3.7,4.4-5.4,4.4c-1.6,0-3.6-2.4-5.4-4.4c-2-2.3-4-4.8-6.6-5.5c-0.6-0.2-1.2-0.2-1.8-0.2c-2.4,0.2-4.7,0.7-6.8,1.7c-2.5,0.9-5.3,1.9-6.6,1.2c-1.4-0.8-1.9-3.8-2.3-6.4c-0.5-3.1-1.1-6.2-3-8.1c-1.9-1.9-5.1-2.5-8.1-3c-2.6-0.5-5.6-1-6.4-2.3c-0.8-1.3,0.3-4.1,1.2-6.6c1.1-2.9,2.2-6,1.5-8.7c-0.7-2.6-3.1-4.6-5.5-6.6c-2.1-1.8-4.4-3.7-4.4-5.4c0-1.6,2.4-3.6,4.4-5.4c2.3-2,4.8-4,5.5-6.6c0.7-2.7-0.4-5.7-1.5-8.7c-0.9-2.5-1.9-5.3-1.2-6.6c0.8-1.4,3.8-1.9,6.4-2.3c3.1-0.5,6.2-1.1,8.1-3c1.9-1.9,2.5-5.1,3-8.1c0.5-2.6,1-5.6,2.3-6.4c1.3-0.8,4.1,0.3,6.6,1.2c2.9,1.1,6,2.2,8.7,1.5C51,15.7,53,13.3,55,11c1.8-2.1,3.7-4.4,5.4-4.4c1.6,0,3.6,2.4,5.4,4.4c2,2.3,4,4.8,6.6,5.5C75,17.1,78,16,81,15c2.5-0.9,5.3-1.9,6.6-1.2c1.4,0.8,1.9,3.8,2.3,6.4c0.5,3.1,1.1,6.2,3,8.1c1.9,1.9,5.1,2.5,8.1,3c2.6,0.5,5.6,1,6.4,2.3c0.8,1.3-0.3,4.1-1.2,6.6c-1.1,2.9-2.2,6-1.5,8.7c0.7,2.6,3.1,4.6,5.5,6.6c2.1,1.8,4.4,3.7,4.4,5.4C114.8,62.6,112.5,64.6,110.4,66.4L110.4,66.4z M110.4,66.4"/><path id="XMLID_2612_" class="st0" d="M72,64.9c-4.3,0-7.7,3.5-7.7,7.7c0,4.3,3.5,7.7,7.7,7.7c4.3,0,7.7-3.5,7.7-7.7C79.7,68.3,76.3,64.9,72,64.9L72,64.9z M72,76.5c-2.1,0-3.9-1.7-3.9-3.9c0-2.1,1.7-3.9,3.9-3.9c2.1,0,3.9,1.7,3.9,3.9C75.9,74.7,74.1,76.5,72,76.5L72,76.5z M72,76.5"/><path id="XMLID_2608_" class="st0" d="M48.8,57.1c4.3,0,7.7-3.5,7.7-7.7c0-4.3-3.5-7.7-7.7-7.7c-4.3,0-7.7,3.5-7.7,7.7C41,53.7,44.5,57.1,48.8,57.1L48.8,57.1z M48.8,45.5c2.1,0,3.9,1.7,3.9,3.9c0,2.1-1.7,3.9-3.9,3.9c-2.1,0-3.9-1.7-3.9-3.9C44.9,47.2,46.6,45.5,48.8,45.5L48.8,45.5z M48.8,45.5"/></g></svg>`,TRASH:je`<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 47.6 58.3" style="enable-background:new 0 0 47.6 58.3;" xml:space="preserve"><style type="text/css"></style><g id="XMLID_69_"><path id="XMLID_79_" class="st0" d="M47.5,13l-1.3-3.9c-0.5-1.5-1.9-2.5-3.4-2.5H32V3.2C32,1.4,30.6,0,28.8,0h-9.9c-1.8,0-3.2,1.4-3.2,3.2v3.5H4.9c-1.6,0-2.9,1-3.4,2.5L0.2,13c-0.3,0.9-0.1,1.9,0.4,2.6c0.5,0.8,1.4,1.2,2.3,1.2h1.3l3,36.6c0.2,2.7,2.5,4.8,5.3,4.8h23.3c2.7,0,5-2.1,5.3-4.8l3-36.6h0.7c0.9,0,1.8-0.4,2.3-1.2C47.6,14.9,47.8,13.9,47.5,13L47.5,13zM19.1,3.4h9.5v3.3h-9.5V3.4z M37.6,53.2c-0.1,1-0.9,1.7-1.8,1.7H12.5c-1,0-1.8-0.7-1.8-1.7L7.7,16.8h32.9L37.6,53.2z M3.6,13.4l1.1-3.2c0-0.1,0.1-0.1,0.2-0.1h37.9c0.1,0,0.1,0,0.2,0.1l1.1,3.2H3.6z M3.6,13.4"/><path id="XMLID_76_" class="st0" d="M32.2,53.1C32.2,53.1,32.3,53.1,32.2,53.1c1,0,1.7-0.7,1.8-1.6l1.6-30.8c0-0.9-0.7-1.7-1.6-1.8c-0.9-0.1-1.7,0.7-1.8,1.6l-1.6,30.8C30.5,52.2,31.3,53,32.2,53.1L32.2,53.1z M32.2,53.1"/><path id="XMLID_73_" class="st0" d="M13.7,51.5c0,0.9,0.8,1.6,1.7,1.6c0,0,0.1,0,0.1,0c0.9-0.1,1.7-0.9,1.6-1.8l-1.7-30.8c-0.1-0.9-0.9-1.7-1.8-1.6c-0.9,0.1-1.7,0.9-1.6,1.8L13.7,51.5z M13.7,51.5"/><path id="XMLID_70_" class="st0" d="M23.9,53.1c0.9,0,1.7-0.8,1.7-1.7V20.6c0-0.9-0.8-1.7-1.7-1.7c-0.9,0-1.7,0.8-1.7,1.7v30.8C22.1,52.3,22.9,53.1,23.9,53.1L23.9,53.1z M23.9,53.1"/></g></svg>`,CARTILLA:je`<svg width="54" height="44" viewBox="0 0 54 44" xmlns="http://www.w3.org/2000/svg"><path d="M46.0361 7.99934C43.9873 7.82627 41.6824 7.39358 39.1214 6.61473C36.0483 5.66281 33.1458 5.83588 30.4141 7.04742C29.9873 7.2205 29.8166 7.65319 29.9873 8.08588C30.158 8.51858 30.5849 8.69165 31.0117 8.51858C33.4019 7.48011 36.0483 7.30704 38.6946 8.17242C41.341 8.95127 43.7312 9.4705 45.9507 9.64358C45.9507 9.64358 45.9507 9.64358 46.0361 9.64358C46.4629 9.64358 46.8044 9.29742 46.8044 8.95127C46.8044 8.43204 46.4629 7.99934 46.0361 7.99934Z"/><path d="M46.0361 11.2884C43.9873 11.1153 41.6824 10.6826 39.1214 9.90379C36.0483 8.95187 33.1458 9.12495 30.4141 10.3365C29.9873 10.5096 29.8166 10.9423 29.9873 11.3749C30.158 11.8076 30.5849 11.9807 31.0117 11.8076C33.4019 10.7692 36.0483 10.5961 38.6946 11.4615C41.341 12.2403 43.7312 12.7596 45.9507 12.9326C45.9507 12.9326 45.9507 12.9326 46.0361 12.9326C46.4629 12.9326 46.8044 12.5865 46.8044 12.2403C46.8044 11.7211 46.4629 11.3749 46.0361 11.2884Z"/><path d="M46.0361 27.9056C43.9873 27.7325 41.6824 27.2998 39.1214 26.521C36.0483 25.5691 33.1458 25.7421 30.4141 26.9537C29.9873 27.1267 29.8166 27.5594 29.9873 27.9921C30.158 28.4248 30.5849 28.5979 31.0117 28.4248C33.4019 27.3864 36.0483 27.2133 38.6946 28.0787C41.341 28.8575 43.7312 29.3768 45.9507 29.5498C45.9507 29.5498 45.9507 29.5498 46.0361 29.5498C46.4629 29.5498 46.8044 29.2037 46.8044 28.8575C46.8044 28.3383 46.4629 27.9921 46.0361 27.9056Z"/><path d="M46.0361 31.2767C43.9873 31.1036 41.6824 30.6709 39.1214 29.8921C36.0483 28.9402 33.1458 29.1132 30.4141 30.3248C29.9873 30.4978 29.8166 30.9305 29.9873 31.3632C30.158 31.7959 30.5849 31.969 31.0117 31.7959C33.4019 30.7575 36.0483 30.5844 38.6946 31.4498C41.341 32.2286 43.7312 32.7478 45.9507 32.9209C45.9507 32.9209 45.9507 32.9209 46.0361 32.9209C46.4629 32.9209 46.8044 32.5748 46.8044 32.2286C46.8044 31.6228 46.4629 31.2767 46.0361 31.2767Z"/><path d="M46.0361 14.6634C43.9873 14.4903 41.6824 14.0576 39.1214 13.2788C36.0483 12.3269 33.1458 12.4999 30.4141 13.7115C29.9873 13.8846 29.8166 14.3173 29.9873 14.7499C30.158 15.1826 30.5849 15.3557 31.0117 15.1826C33.4019 14.1442 36.0483 13.9711 38.6946 14.8365C41.341 15.6153 43.7312 16.1346 45.9507 16.3076C45.9507 16.3076 45.9507 16.3076 46.0361 16.3076C46.4629 16.3076 46.8044 15.9615 46.8044 15.6153C46.8044 15.0961 46.4629 14.6634 46.0361 14.6634Z"/><path d="M46.0361 21.3275C43.9873 21.1544 41.6824 20.7217 39.1214 19.9429C36.0483 18.9909 33.1458 19.164 30.4141 20.3755C29.9873 20.5486 29.8166 20.9813 29.9873 21.414C30.158 21.8467 30.5849 22.0198 31.0117 21.8467C33.4019 20.8082 36.0483 20.6352 38.6946 21.5005C41.341 22.2794 43.7312 22.7986 45.9507 22.9717C45.9507 22.9717 45.9507 22.9717 46.0361 22.9717C46.4629 22.9717 46.8044 22.6255 46.8044 22.2794C46.8044 21.6736 46.4629 21.3275 46.0361 21.3275Z"/><path d="M46.0361 17.9525C43.9873 17.7794 41.6824 17.3467 39.1214 16.5679C36.0483 15.6159 33.1458 15.789 30.4141 17.0005C29.9873 17.1736 29.8166 17.6063 29.9873 18.039C30.158 18.4717 30.5849 18.6448 31.0117 18.4717C33.4019 17.4332 36.0483 17.2602 38.6946 18.1255C41.341 18.9044 43.7312 19.4236 45.9507 19.5967C45.9507 19.5967 45.9507 19.5967 46.0361 19.5967C46.4629 19.5967 46.8044 19.2505 46.8044 18.9044C46.8044 18.3852 46.4629 18.039 46.0361 17.9525Z"/><path d="M46.0361 24.6165C43.9873 24.4435 41.6824 24.0108 39.1214 23.2319C36.0483 22.28 33.1458 22.4531 30.4141 23.6646C29.9873 23.8377 29.8166 24.2704 29.9873 24.7031C30.158 25.1358 30.5849 25.3088 31.0117 25.1358C33.4019 24.0973 36.0483 23.9242 38.6946 24.7896C41.341 25.5685 43.7312 26.0877 45.9507 26.2608C45.9507 26.2608 45.9507 26.2608 46.0361 26.2608C46.4629 26.2608 46.8044 25.9146 46.8044 25.5685C46.8044 25.0492 46.4629 24.6165 46.0361 24.6165Z"/><path d="M8.3049 9.55764C8.3049 9.55764 8.39026 9.55764 8.3049 9.55764C10.5244 9.38456 12.9147 8.86533 15.561 8.08649C18.2073 7.30764 20.8537 7.39418 23.2439 8.43264C23.6708 8.60572 24.0976 8.43264 24.2683 7.99995C24.439 7.56725 24.2683 7.13456 23.8415 6.96148C21.1098 5.74995 18.122 5.57687 15.1342 6.52879C12.5732 7.30764 10.2683 7.74033 8.21953 7.91341C7.7927 7.91341 7.45124 8.3461 7.53661 8.77879C7.53661 9.29802 7.87807 9.55764 8.3049 9.55764Z"/><path d="M8.3049 26.1709C8.3049 26.1709 8.39026 26.1709 8.3049 26.1709C10.5244 25.9978 12.9147 25.4786 15.561 24.6998C18.2073 23.9209 20.8537 24.0075 23.2439 25.0459C23.6708 25.219 24.0976 25.0459 24.2683 24.6132C24.439 24.1805 24.2683 23.7478 23.8415 23.5748C21.1098 22.3632 18.122 22.1902 15.1342 23.1421C12.5732 23.9209 10.2683 24.3536 8.21953 24.5267C7.7927 24.5267 7.45124 24.9594 7.53661 25.3921C7.53661 25.8248 7.87807 26.1709 8.3049 26.1709Z"/><path d="M8.3049 12.8467C8.3049 12.8467 8.39026 12.8467 8.3049 12.8467C10.5244 12.6736 12.9147 12.1544 15.561 11.3755C18.2073 10.5967 20.8537 10.6832 23.2439 11.7217C23.6708 11.8948 24.0976 11.7217 24.2683 11.289C24.439 10.8563 24.2683 10.4236 23.8415 10.2505C21.1098 9.03901 18.122 8.86593 15.1342 9.81785C12.5732 10.5967 10.2683 11.0294 8.21953 11.2025C7.7927 11.2025 7.45124 11.6352 7.53661 12.0679C7.53661 12.5871 7.87807 12.8467 8.3049 12.8467Z"/><path d="M8.3049 29.46C8.3049 29.46 8.39026 29.46 8.3049 29.46C10.5244 29.2869 12.9147 28.7677 15.561 27.9888C18.2073 27.21 20.8537 27.2965 23.2439 28.335C23.6708 28.5081 24.0976 28.335 24.2683 27.9023C24.439 27.4696 24.2683 27.0369 23.8415 26.8638C21.1098 25.6523 18.122 25.4792 15.1342 26.4311C12.5732 27.21 10.2683 27.6427 8.21953 27.8158C7.7927 27.8158 7.45124 28.2484 7.53661 28.6811C7.53661 29.2004 7.87807 29.46 8.3049 29.46Z"/><path d="M8.3049 32.835C8.3049 32.835 8.39026 32.835 8.3049 32.835C10.5244 32.6619 12.9147 32.1427 15.561 31.3638C18.2073 30.585 20.8537 30.6715 23.2439 31.71C23.6708 31.8831 24.0976 31.71 24.2683 31.2773C24.439 30.8446 24.2683 30.4119 23.8415 30.2388C21.1098 29.0273 18.122 28.8542 15.1342 29.8061C12.5732 30.585 10.2683 31.0177 8.21953 31.1908C7.7927 31.1908 7.45124 31.6234 7.53661 32.0561C7.53661 32.4888 7.87807 32.835 8.3049 32.835Z"/><path d="M8.3049 16.2217C8.3049 16.2217 8.39026 16.2217 8.3049 16.2217C10.5244 16.0486 12.9147 15.5294 15.561 14.7505C18.2073 13.9717 20.8537 14.0582 23.2439 15.0967C23.6708 15.2698 24.0976 15.0967 24.2683 14.664C24.439 14.2313 24.2683 13.7986 23.8415 13.6255C21.1098 12.414 18.122 12.2409 15.1342 13.1929C12.5732 13.9717 10.2683 14.4044 8.21953 14.5775C7.7927 14.5775 7.45124 15.0102 7.53661 15.4429C7.53661 15.8755 7.87807 16.2217 8.3049 16.2217Z"/><path d="M8.3049 22.8858C8.3049 22.8858 8.39026 22.8858 8.3049 22.8858C10.5244 22.7127 12.9147 22.1935 15.561 21.4146C18.2073 20.6358 20.8537 20.7223 23.2439 21.7608C23.6708 21.9338 24.0976 21.7608 24.2683 21.3281C24.439 20.8954 24.2683 20.4627 23.8415 20.2896C21.1098 19.0781 18.122 18.905 15.1342 19.8569C12.5732 20.6358 10.2683 21.0685 8.21953 21.2415C7.7927 21.2415 7.45124 21.6742 7.53661 22.1069C7.53661 22.5396 7.87807 22.8858 8.3049 22.8858Z"/><path d="M8.3049 19.5108C8.3049 19.5108 8.39026 19.5108 8.3049 19.5108C10.5244 19.3377 12.9147 18.8185 15.561 18.0396C18.2073 17.2608 20.8537 17.3473 23.2439 18.3858C23.6708 18.5588 24.0976 18.3858 24.2683 17.9531C24.439 17.5204 24.2683 17.0877 23.8415 16.9146C21.1098 15.7031 18.122 15.53 15.1342 16.4819C12.5732 17.2608 10.2683 17.6935 8.21953 17.8665C7.7927 17.8665 7.45124 18.2992 7.53661 18.7319C7.53661 19.2511 7.87807 19.5108 8.3049 19.5108Z"/><path d="M51.5862 5.05756H50.3911V4.36525C50.3911 3.32679 49.5374 2.54794 48.5984 2.63448C47.4887 2.72102 45.0131 2.72102 41.0862 1.7691C40.6594 1.68256 40.2326 1.94217 40.1472 2.37486C40.0618 2.80756 40.3179 3.24025 40.7448 3.32679C44.6716 4.36525 47.2326 4.36525 48.7692 4.27871C48.8545 4.27871 48.9399 4.36525 48.9399 4.45179V35.9518C45.9521 36.2114 42.0252 35.346 39.2082 34.4806C32.8911 32.5768 28.7935 35.8652 27.9399 36.2979V5.1441C28.7935 4.36525 32.1228 1.50948 37.1594 2.37486C37.5862 2.4614 38.0131 2.11525 38.0131 1.7691C38.0984 1.3364 37.757 0.903711 37.4155 0.903711C32.2082 0.0383262 28.5374 2.63448 27.257 3.84602C24.1838 1.16333 19.8301 -0.0482123 15.2204 1.3364C10.3545 2.80756 7.28135 2.8941 5.83013 2.72102C4.80574 2.54794 3.95208 3.32679 3.95208 4.36525V5.05756H2.75696C1.73256 5.05756 0.878906 5.92294 0.878906 6.9614V38.6345C0.878906 39.6729 1.73256 40.5383 2.75696 40.5383H22.7326C23.074 40.5383 23.3301 40.7114 23.4155 40.971C24.9521 44.1729 29.4765 44.1729 30.9277 40.971C31.0131 40.7114 31.3545 40.5383 31.6106 40.5383H51.5862C52.6106 40.5383 53.4643 39.6729 53.4643 38.6345V23.8364C53.4643 23.4037 53.1228 23.0576 52.696 23.0576C52.2692 23.0576 51.9277 23.4037 51.9277 23.8364V38.6345C51.9277 38.8076 51.757 38.9806 51.5862 38.9806H31.6106C30.757 38.9806 29.9033 39.4999 29.5618 40.2787C28.6228 42.2691 25.8057 42.2691 24.7813 40.2787C24.4399 39.4999 23.5862 38.9806 22.7326 38.9806H2.75696C2.58622 38.9806 2.41549 38.8076 2.41549 38.6345V6.9614C2.41549 6.78833 2.58622 6.61525 2.75696 6.61525H3.95208V36.5576C3.95208 36.9037 4.20817 37.2499 4.54964 37.3364C4.72037 37.3364 8.22037 38.2883 15.6472 36.0383C19.2326 34.9133 22.6472 35.6056 25.3789 37.596C26.4033 38.3749 27.9399 38.3749 29.0496 37.596C30.6716 36.3845 34.1716 34.6537 38.7813 36.0383C46.1228 38.2883 49.7082 37.4229 49.8789 37.3364C50.2204 37.2499 50.4765 36.9037 50.4765 36.5576V6.61525H51.6716C51.757 6.61525 51.9277 6.78833 51.9277 6.9614V20.2018C51.9277 20.6345 52.2692 20.9806 52.696 20.9806C53.1228 20.9806 53.4643 20.6345 53.4643 20.2018V6.9614C53.4643 5.92294 52.6106 5.05756 51.5862 5.05756ZM5.48866 4.36525C5.48866 4.27871 5.57403 4.19217 5.65939 4.19217C7.19598 4.27871 10.4399 4.27871 15.5618 2.72102C19.7448 1.42294 23.757 2.63448 26.4033 5.1441V36.3845C25.9765 36.1249 21.6228 32.5768 15.135 34.5672C14.7082 34.6537 14.2813 34.8268 13.8545 34.9133C11.3789 35.6056 8.04964 36.2114 5.48866 35.9518C5.48866 33.7018 5.48866 4.97102 5.48866 4.36525Z"/></svg>`,TURNOS:je`<svg version="1.1" id="svgTurnos" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 51.9 51.1" style="enable-background:new 0 0 51.9 51.1;" xml:space="preserve"><style type="text/css"></style><g id="XMLID_4287_"><path id="XMLID_5207_" class="st0" d="M46.1,5.8H42V4.2c0-1.8-1.5-3.3-3.3-3.3c-1.8,0-3.3,1.5-3.3,3.3v1.6h-6.6V4.2c0-1.8-1.5-3.3-3.3-3.3c-1.8,0-3.3,1.5-3.3,3.3v1.6h-6.6V4.2c0-1.8-1.5-3.3-3.3-3.3c-1.8,0-3.3,1.5-3.3,3.3v1.6H5c-2.3,0-4.1,1.8-4.1,4.1v32.9c0,2.3,1.8,4.1,4.1,4.1h23c0.5,0,0.8-0.4,0.8-0.8s-0.4-0.8-0.8-0.8H5c-1.4,0-2.5-1.1-2.5-2.5V17.3h46.1v14c0,0.5,0.4,0.8,0.8,0.8s0.8-0.4,0.8-0.8V9.9C50.2,7.6,48.4,5.8,46.1,5.8L46.1,5.8z M37.1,4.2c0-0.9,0.7-1.6,1.6-1.6s1.6,0.7,1.6,1.6v4.9c0,0.9-0.7,1.6-1.6,1.6s-1.6-0.7-1.6-1.6V4.2z M23.9,4.2c0-0.9,0.7-1.6,1.6-1.6c0.9,0,1.6,0.7,1.6,1.6v4.9c0,0.9-0.7,1.6-1.6,1.6c-0.9,0-1.6-0.7-1.6-1.6V4.2z M10.7,4.2c0-0.9,0.7-1.6,1.6-1.6c0.9,0,1.6,0.7,1.6,1.6v4.9c0,0.9-0.7,1.6-1.6,1.6c-0.9,0-1.6-0.7-1.6-1.6V4.2z M48.6,15.7H2.5V9.9c0-1.4,1.1-2.5,2.5-2.5h4.1v1.6c0,1.8,1.5,3.3,3.3,3.3c1.8,0,3.3-1.5,3.3-3.3V7.4h6.6v1.6c0,1.8,1.5,3.3,3.3,3.3c1.8,0,3.3-1.5,3.3-3.3V7.4h6.6v1.6c0,1.8,1.5,3.3,3.3,3.3c1.8,0,3.3-1.5,3.3-3.3V7.4h4.1c1.4,0,2.5,1.1,2.5,2.5V15.7z M48.6,15.7"/><path id="XMLID_5203_" class="st0" d="M23.9,23.1c0-0.9-0.7-1.6-1.6-1.6H19c-0.9,0-1.6,0.7-1.6,1.6v2.5c0,0.9,0.7,1.6,1.6,1.6h3.3c0.9,0,1.6-0.7,1.6-1.6V23.1z M19,25.5v-2.5h3.3v2.5H19z M19,25.5"/><path id="XMLID_5199_" class="st0" d="M14,23.1c0-0.9-0.7-1.6-1.6-1.6H9.1c-0.9,0-1.6,0.7-1.6,1.6v2.5c0,0.9,0.7,1.6,1.6,1.6h3.3c0.9,0,1.6-0.7,1.6-1.6V23.1z M9.1,25.5v-2.5h3.3v2.5H9.1z M9.1,25.5"/><path id="XMLID_5195_" class="st0" d="M42,27.2c0.9,0,1.6-0.7,1.6-1.6v-2.5c0-0.9-0.7-1.6-1.6-1.6h-3.3c-0.9,0-1.6,0.7-1.6,1.6v2.5c0,0.9,0.7,1.6,1.6,1.6H42z M38.7,23.1H42v2.5h-3.3V23.1z M38.7,23.1"/><path id="XMLID_5191_" class="st0" d="M23.9,30.5c0-0.9-0.7-1.6-1.6-1.6H19c-0.9,0-1.6,0.7-1.6,1.6V33c0,0.9,0.7,1.6,1.6,1.6h3.3c0.9,0,1.6-0.7,1.6-1.6V30.5z M19,33v-2.5h3.3V33H19z M19,33"/><path id="XMLID_5187_" class="st0" d="M14,30.5c0-0.9-0.7-1.6-1.6-1.6H9.1c-0.9,0-1.6,0.7-1.6,1.6V33c0,0.9,0.7,1.6,1.6,1.6h3.3c0.9,0,1.6-0.7,1.6-1.6V30.5z M9.1,33v-2.5h3.3V33H9.1z M9.1,33"/><path id="XMLID_5180_" class="st0" d="M22.3,36.2H19c-0.9,0-1.6,0.7-1.6,1.6v2.5c0,0.9,0.7,1.6,1.6,1.6h3.3c0.9,0,1.6-0.7,1.6-1.6v-2.5C23.9,37,23.2,36.2,22.3,36.2L22.3,36.2z M19,40.4v-2.5h3.3v2.5H19z M19,40.4"/><path id="XMLID_5176_" class="st0" d="M28.9,27.2h3.3c0.9,0,1.6-0.7,1.6-1.6v-2.5c0-0.9-0.7-1.6-1.6-1.6h-3.3c-0.9,0-1.6,0.7-1.6,1.6v2.5C27.2,26.5,27.9,27.2,28.9,27.2L28.9,27.2z M28.9,23.1h3.3v2.5h-3.3V23.1z M28.9,23.1"/><path id="XMLID_5172_" class="st0" d="M27.2,33c0,0.9,0.7,1.6,1.6,1.6c0.5,0,0.8-0.4,0.8-0.8c0-0.5-0.4-0.8-0.8-0.8v-2.5h3.3c0.5,0,0.8-0.4,0.8-0.8s-0.4-0.8-0.8-0.8h-3.3c-0.9,0-1.6,0.7-1.6,1.6V33z M27.2,33"/><path id="XMLID_5167_" class="st0" d="M12.4,36.2H9.1c-0.9,0-1.6,0.7-1.6,1.6v2.5c0,0.9,0.7,1.6,1.6,1.6h3.3c0.9,0,1.6-0.7,1.6-1.6v-2.5C14,37,13.3,36.2,12.4,36.2L12.4,36.2z M9.1,40.4v-2.5h3.3v2.5H9.1z M9.1,40.4"/><path id="XMLID_4663_" class="st0" d="M39.5,28.8c-4.3,0-8.2,2.6-9.9,6.6c-1.7,4-0.7,8.6,2.3,11.7c3.1,3.1,7.7,4,11.7,2.3c4-1.7,6.6-5.6,6.6-9.9C50.2,33.6,45.5,28.8,39.5,28.8L39.5,28.8z M39.5,48.6c-3.7,0-7-2.2-8.4-5.6c-1.4-3.4-0.6-7.3,2-9.9c2.6-2.6,6.5-3.4,9.9-2c3.4,1.4,5.6,4.7,5.6,8.4C48.6,44.5,44.5,48.6,39.5,48.6L39.5,48.6z M39.5,48.6"/><path id="XMLID_4343_" class="st0" d="M44.3,36.1l-6.4,6.4L35,39.6c-0.3-0.3-0.8-0.3-1.2,0c-0.3,0.3-0.3,0.8,0,1.2l3.5,3.5c0.3,0.3,0.8,0.3,1.2,0l7-7c0.3-0.3,0.3-0.8,0-1.2C45.1,35.8,44.6,35.8,44.3,36.1L44.3,36.1z M44.3,36.1"/></g></svg>`,CENTROMEDICO:je`<svg version="1.1" id="svgCentroMedico" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 237.5 195.8" style="enable-background:new 0 0 237.5 195.8;" xml:space="preserve"><style type="text/css"></style><g id="XMLID_604_"><path id="XMLID_590_" class="st0" d="M123.1,30.4v-2h2c2.4,0,4.4-2,4.4-4.4s-2-4.4-4.4-4.4h-2v-2c0-2.4-2-4.4-4.4-4.4c-2.4,0-4.4,2-4.4,4.4v2h-2c-2.4,0-4.4,2-4.4,4.4s2,4.4,4.4,4.4h2v2c0,2.4,2,4.4,4.4,4.4C121.2,34.8,123.1,32.8,123.1,30.4"/><path id="XMLID_589_" class="st0" d="M40.5,125c2.4,0,4.4-2,4.4-4.4v-6.3c0-2.4-2-4.4-4.4-4.4c-2.4,0-4.4,2-4.4,4.4v6.3C36.2,123.1,38.1,125,40.5,125"/><path id="XMLID_588_" class="st0" d="M57.9,125c2.4,0,4.4-2,4.4-4.4v-6.3c0-2.4-2-4.4-4.4-4.4c-2.4,0-4.4,2-4.4,4.4v6.3C53.5,123.1,55.5,125,57.9,125"/><path id="XMLID_587_" class="st0" d="M40.5,146.6c2.4,0,4.4-2,4.4-4.4V136c0-2.4-2-4.4-4.4-4.4c-2.4,0-4.4,2-4.4,4.4v6.3C36.2,144.7,38.1,146.6,40.5,146.6"/><path id="XMLID_586_" class="st0" d="M57.9,146.6c2.4,0,4.4-2,4.4-4.4V136c0-2.4-2-4.4-4.4-4.4c-2.4,0-4.4,2-4.4,4.4v6.3C53.5,144.7,55.5,146.6,57.9,146.6"/><path id="XMLID_585_" class="st0" d="M40.5,168.2c2.4,0,4.4-2,4.4-4.4v-6.3c0-2.4-2-4.4-4.4-4.4c-2.4,0-4.4,2-4.4,4.4v6.3C36.2,166.3,38.1,168.2,40.5,168.2"/><path id="XMLID_584_" class="st0" d="M57.9,168.2c2.4,0,4.4-2,4.4-4.4v-6.3c0-2.4-2-4.4-4.4-4.4c-2.4,0-4.4,2-4.4,4.4v6.3C53.5,166.3,55.5,168.2,57.9,168.2"/><path id="XMLID_583_" class="st0" d="M179.6,125c2.4,0,4.4-2,4.4-4.4v-6.3c0-2.4-2-4.4-4.4-4.4c-2.4,0-4.4,2-4.4,4.4v6.3C175.3,123.1,177.2,125,179.6,125"/><path id="XMLID_581_" class="st0" d="M197,125c2.4,0,4.4-2,4.4-4.4v-6.3c0-2.4-2-4.4-4.4-4.4c-2.4,0-4.4,2-4.4,4.4v6.3C192.6,123.1,194.6,125,197,125"/><path id="XMLID_580_" class="st0" d="M179.6,146.6c2.4,0,4.4-2,4.4-4.4V136c0-2.4-2-4.4-4.4-4.4c-2.4,0-4.4,2-4.4,4.4v6.3C175.3,144.7,177.2,146.6,179.6,146.6"/><path id="XMLID_579_" class="st0" d="M197,146.6c2.4,0,4.4-2,4.4-4.4V136c0-2.4-2-4.4-4.4-4.4c-2.4,0-4.4,2-4.4,4.4v6.3C192.6,144.7,194.6,146.6,197,146.6"/><path id="XMLID_578_" class="st0" d="M179.6,168.2c2.4,0,4.4-2,4.4-4.4v-6.3c0-2.4-2-4.4-4.4-4.4c-2.4,0-4.4,2-4.4,4.4v6.3C175.3,166.3,177.2,168.2,179.6,168.2"/><path id="XMLID_577_" class="st0" d="M197,168.2c2.4,0,4.4-2,4.4-4.4v-6.3c0-2.4-2-4.4-4.4-4.4c-2.4,0-4.4,2-4.4,4.4v6.3C192.6,166.3,194.6,168.2,197,168.2"/><path id="XMLID_576_" class="st0" d="M105.7,92.8v6.3c0,2.4,2,4.4,4.4,4.4s4.4-2,4.4-4.4v-6.3c0-2.4-2-4.4-4.4-4.4S105.7,90.4,105.7,92.8"/><path id="XMLID_575_" class="st0" d="M123.1,92.8v6.3c0,2.4,2,4.4,4.4,4.4c2.4,0,4.4-2,4.4-4.4v-6.3c0-2.4-2-4.4-4.4-4.4C125,88.4,123.1,90.4,123.1,92.8"/><path id="XMLID_574_" class="st0" d="M110.1,110c-2.4,0-4.4,2-4.4,4.4v6.3c0,2.4,2,4.4,4.4,4.4c2.4,0,4.4-2,4.4-4.4v-6.3C114.5,112,112.5,110,110.1,110"/><path id="XMLID_573_" class="st0" d="M127.4,110c-2.4,0-4.4,2-4.4,4.4v6.3c0,2.4,2,4.4,4.4,4.4c2.4,0,4.4-2,4.4-4.4v-6.3C131.8,112,129.9,110,127.4,110"/><path id="XMLID_570_" class="st0" d="M110.1,131.6c-2.4,0-4.4,2-4.4,4.4v6.3c0,2.4,2,4.4,4.4,4.4c2.4,0,4.4-2,4.4-4.4V136C114.5,133.6,112.5,131.6,110.1,131.6"/><path id="XMLID_569_" class="st0" d="M127.4,131.6c-2.4,0-4.4,2-4.4,4.4v6.3c0,2.4,2,4.4,4.4,4.4c2.4,0,4.4-2,4.4-4.4V136C131.8,133.6,129.9,131.6,127.4,131.6"/><path id="XMLID_609_" class="st0" d="M104,9.3h29.5v29.5H104V9.3z M75.3,186.7H22.8V98.3h52.4V186.7z M214.7,186.7h-52.4V98.3h52.4V186.7z M137.5,186.7h-37.4v-14.8h37.4V186.7z M153.5,62.7v124h-7.3v-19.2c0-2.4-2-4.4-4.4-4.4H95.7c-2.4,0-4.4,2-4.4,4.4v19.2H84v-124H153.5z M232.6,186.7h-9.2V93.9c0-2.4-2-4.4-4.4-4.4h-56.8V58.3c0-2.4-1.9-4.4-4.4-4.4h-34.8v-6.4h14.8c2.4,0,4.4-2,4.4-4.4V4.9c0-2.4-2-4.4-4.4-4.4H99.6c-2.4,0-4.4,2-4.4,4.4v38.3c0,2.4,2,4.4,4.4,4.4h14.8v6.4H79.6c-2.4,0-4.4,2-4.4,4.4v31.3H18.5c-2.4,0-4.4,2-4.4,4.4v92.8H4.9c-2.4,0-4.4,2-4.4,4.4c0,2.4,2,4.4,4.4,4.4h227.7c2.4,0,4.4-2,4.4-4.4C237,188.7,235,186.7,232.6,186.7"/></g></svg>`,URGENCIAS:je`<svg version="1.1" id="svgUrgencias" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 61.6 49.7" style="enable-background:new 0 0 61.6 49.7;" xml:space="preserve"><style type="text/css"></style><g id="XMLID_92_"><path id="XMLID_4402_" class="st0" d="M59.5,39.9h-1v-9.6c0-0.3-0.1-0.5-0.3-0.7L43.9,15.2c-0.2-0.2-0.4-0.3-0.7-0.3h-4.8v-2.9c0-0.5-0.4-1-1-1h-1v-1c0-2.1-1.7-3.8-3.8-3.8s-3.8,1.7-3.8,3.8v1h-1c-0.5,0-1,0.4-1,1v2.9H7.6c-2.7,0-4.8,2.2-4.8,4.8v20.2h-1c-0.5,0-1,0.4-1,1v3.8c0,0.5,0.4,1,1,1h5.6c1,1.7,2.9,2.9,5,2.9s4-1.2,5-2.9h20.8c1,1.7,2.9,2.9,5,2.9c2.1,0,4-1.2,5-2.9h11.4c0.5,0,1-0.4,1-1v-3.8C60.5,40.4,60,39.9,59.5,39.9L59.5,39.9z M56,29.8H39.8v-9.6h6.3L56,29.8z M35,20.2v14.4H4.7V20.2H35z M30.7,10.1c0-1.1,0.9-1.9,1.9-1.9c1.1,0,1.9,0.9,1.9,1.9v1h-3.8V10.1z M28.8,13h7.7v1.9h-7.7V13z M7.6,16.9H35v1.9H4.9C5.3,17.7,6.4,16.9,7.6,16.9L7.6,16.9z M2.8,44.2v-2.9h3.9c-0.1,0.3-0.1,1.1-0.1,1.4c0,0.3,0,1.1,0.1,1.4H2.8z M7.4,39.9H4.7v-3.8H35v3.8H17.4c-1-1.7-2.9-2.9-5-2.9S8.4,38.2,7.4,39.9L7.4,39.9z M12.4,46.7c-2.1,0-3.8-1.7-3.8-3.8s1.7-3.8,3.8-3.8s3.8,1.7,3.8,3.8S14.5,46.7,12.4,46.7L12.4,46.7z M18.1,44.2c0.1-0.3,0.1-1.1,0.1-1.4c0-0.3,0-1.1-0.1-1.4h19.4c-0.1,0.3-0.1,1.1-0.1,1.4c0,0.3,0,1.1,0.1,1.4H18.1z M43.2,46.7c-2.1,0-3.8-1.7-3.8-3.8s1.7-3.8,3.8-3.8c2.1,0,3.8,1.7,3.8,3.8S45.3,46.7,43.2,46.7L43.2,46.7z M43.2,37c-2.1,0-4,1.2-5,2.9h-1.7V16.9h6.3l1.9,1.9h-5.4c-0.5,0-1,0.4-1,1v10.6c0,0.5,0.4,1,1,1h17.3v8.7h-8.5C47.2,38.2,45.3,37,43.2,37L43.2,37z M58.6,43.8h-9.7c0.1-0.3,0.1-0.6,0.1-1c0-0.3,0-0.6-0.1-1h9.7V43.8z M58.6,43.8"/><rect id="XMLID_4401_" x="31.6" y="0.5" class="st0" width="1.9" height="3.8"/><path id="XMLID_185_" class="st0" d="M35.8,5.6l2.9-2.9L40,4.1L37.1,7L35.8,5.6z M35.8,5.6"/><path id="XMLID_103_" class="st0" d="M25.2,4.1l1.4-1.4l2.9,2.9L28.1,7L25.2,4.1z M25.2,4.1"/><circle id="XMLID_102_" class="st0" cx="12.4" cy="42.8" r="1.1"/><circle id="XMLID_101_" class="st0" cx="43.2" cy="42.8" r="1.1"/><path id="XMLID_93_" class="st0" d="M23.8,24.9h-1.5v-1.5c0-0.2-0.1-0.4-0.2-0.5s-0.3-0.2-0.5-0.2h-3.1c-0.2,0-0.4,0.1-0.5,0.2c-0.1,0.1-0.2,0.3-0.2,0.5v1.5h-1.5c-0.2,0-0.4,0.1-0.5,0.2c-0.1,0.1-0.2,0.3-0.2,0.5v3.1c0,0.2,0.1,0.4,0.2,0.5c0.1,0.1,0.3,0.2,0.5,0.2h1.5v1.5c0,0.2,0.1,0.4,0.2,0.5c0.1,0.1,0.3,0.2,0.5,0.2h3.1c0.2,0,0.4-0.1,0.5-0.2s0.2-0.3,0.2-0.5v-1.5h1.5c0.2,0,0.4-0.1,0.5-0.2s0.2-0.3,0.2-0.5v-3.1c0-0.2-0.1-0.4-0.2-0.5S24,24.9,23.8,24.9L23.8,24.9z M23,28"/></g></svg>`,PERFIL:je`<svg width="22" height="22" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg"><path d="M11.3992 0.300781C5.49922 0.300781 0.699219 5.10078 0.699219 10.9008C0.699219 16.8008 5.49922 21.5008 11.2992 21.5008C17.1992 21.5008 21.8992 16.7008 21.8992 10.9008C21.9992 5.10078 17.1992 0.300781 11.3992 0.300781ZM11.3992 3.50078C13.2992 3.50078 14.8992 5.10078 14.8992 7.00078C14.8992 8.90078 13.2992 10.5008 11.3992 10.5008C9.39922 10.5008 7.79922 9.00078 7.79922 7.00078C7.79922 5.10078 9.39922 3.50078 11.3992 3.50078ZM11.3992 18.8008C9.49922 18.8008 7.69922 18.1008 6.29922 16.9008C5.99922 16.6008 5.79922 16.2008 5.79922 15.8008C5.79922 13.8008 7.39922 12.3008 9.39922 12.3008H13.4992C15.4992 12.3008 17.0992 13.9008 17.0992 15.8008C17.0992 16.2008 16.8992 16.7008 16.5992 16.9008C15.0992 18.1008 13.2992 18.8008 11.3992 18.8008Z" /></svg>`,LISTADO:je`<svg width="28" height="28" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg"><path d="M25.6667 2.33333V17.3444H17.3444V25.6667H2.33333V2.33333H25.6667ZM24.8889 0H3.11111C1.4 0 0 1.4 0 3.11111V24.8889C0 26.6 1.4 28 3.11111 28H18.6667L28 18.6667V3.11111C28 1.4 26.6 0 24.8889 0ZM11.9 17.7333H4.12222V15.9444H11.9V17.7333ZM23.7222 5.67778H4.12222V3.88889H23.7222V5.67778ZM23.7222 9.72222H4.12222V7.93333H23.7222V9.72222ZM23.7222 13.7667H4.12222V11.9778H23.7222V13.7667Z"/></svg>`,VERMAPA:je`<svg width="45" height="26" viewBox="0 0 45 26" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path d="M35.9924 15.2957C35.7077 15.9405 35.3517 16.5852 34.9958 17.0867L39.9077 23.1763H14.067H5.59582L10.7212 16.7285C10.7212 16.6569 10.7212 16.6569 10.7212 16.5852C10.7212 14.7226 12.2162 13.2181 14.067 13.2181C14.5653 13.2181 15.0636 13.3614 15.4907 13.5046H18.8365C18.4806 12.8599 18.1246 12.2151 17.7687 11.5703H12.3585L1.60938 25.1823H43.8941L35.9924 15.2957Z"/><path d="M27.7358 11.6406C27.3798 12.2854 27.0239 12.9302 26.668 13.575H28.6612C28.5188 13.0735 28.3764 12.6436 28.3764 12.2138C28.3764 11.9988 28.3764 11.8556 28.4476 11.6406H27.7358Z" fill="white"/><path d="M28.2344 6.48384C28.2344 3.47488 25.8141 1.03906 22.8242 1.03906C19.8344 1.03906 17.4141 3.47488 17.4141 6.48384C17.4141 9.4928 22.8242 17.445 22.8242 17.445C22.8242 17.445 28.2344 9.4928 28.2344 6.48384ZM20.048 6.48384C20.048 4.97936 21.2581 3.76145 22.753 3.76145C24.248 3.76145 25.4581 4.97936 25.4581 6.48384C25.4581 7.98832 24.248 9.20623 22.753 9.20623C21.2581 9.20623 20.048 7.98832 20.048 6.48384Z" fill="white"/><path d="M35.9224 12.2161C35.9224 10.425 34.4987 8.99219 32.719 8.99219C30.9394 8.99219 29.5156 10.425 29.5156 12.2161C29.5156 14.0071 32.719 18.6638 32.719 18.6638C32.719 18.6638 35.9224 14.0071 35.9224 12.2161ZM31.0817 12.2161C31.0817 11.3564 31.7936 10.5683 32.719 10.5683C33.5733 10.5683 34.3563 11.2847 34.3563 12.2161C34.3563 13.0758 33.6444 13.8638 32.719 13.8638C31.8648 13.8638 31.0817 13.1474 31.0817 12.2161Z" fill="white"/><path d="M11.5742 16.6559C11.5742 18.0887 14.0657 21.7425 14.0657 21.7425C14.0657 21.7425 16.5573 18.0887 16.5573 16.6559C16.5573 15.2231 15.4183 14.1484 14.0657 14.1484C12.7132 14.1484 11.5742 15.2947 11.5742 16.6559ZM15.3471 16.6559C15.3471 17.3723 14.7776 17.9455 14.0657 17.9455C13.3539 17.9455 12.7844 17.3723 12.7844 16.6559C12.7844 15.9395 13.3539 15.3663 14.0657 15.3663C14.7776 15.3663 15.3471 15.9395 15.3471 16.6559Z" fill="white"/></g><defs><clipPath id="clip0"><rect width="44.2068" height="25.7194" fill="white" transform="translate(0.542969 0.179688)"/></clipPath></defs></svg>`,BULLET:je`<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.9561 6.37037L17.9568 6.37133L22.3036 12.4987L17.9568 18.6261L17.9561 18.627C17.6726 19.0286 17.1986 19.2902 16.6671 19.2904C16.667 19.2904 16.6668 19.2904 16.6667 19.2904L5.20879 19.2799H5.20833C4.33537 19.2799 3.625 18.5735 3.625 17.707V7.29036C3.625 6.42393 4.33537 5.71745 5.20833 5.71745L5.20879 5.71745L16.6667 5.70703C16.6667 5.70703 16.6668 5.70703 16.6669 5.70703C17.1984 5.7071 17.6726 5.96875 17.9561 6.37037Z"/></svg>`,TELEFONO:je`<svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M31.6109 24.7774C30.792 23.9247 29.8042 23.4688 28.7574 23.4688C27.719 23.4688 26.7228 23.9163 25.8701 24.769L23.2024 27.4283C22.9829 27.3101 22.7634 27.2003 22.5523 27.0906C22.2484 26.9386 21.9613 26.7951 21.7165 26.6431C19.2176 25.056 16.9466 22.9876 14.7685 20.3114C13.7132 18.9776 13.0041 17.8547 12.4891 16.715C13.1814 16.0819 13.823 15.4234 14.4477 14.7902C14.6841 14.5538 14.9205 14.309 15.1569 14.0726C16.9297 12.2997 16.9297 10.0034 15.1569 8.23054L12.8521 5.92579C12.5904 5.66408 12.3203 5.39393 12.067 5.12378C11.5605 4.60036 11.0286 4.06005 10.4798 3.55351C9.66095 2.74306 8.68164 2.3125 7.65169 2.3125C6.62173 2.3125 5.62554 2.74306 4.78131 3.55351C4.77287 3.56196 4.77287 3.56196 4.76443 3.5704L1.89406 6.4661C0.813445 7.54671 0.197159 8.86371 0.0620825 10.3918C-0.140532 12.8569 0.585503 15.1532 1.14269 16.6559C2.51034 20.3452 4.55337 23.7643 7.60103 27.4283C11.2987 31.8436 15.7478 35.3302 20.8301 37.7869C22.7718 38.7071 25.3636 39.7962 28.2593 39.9819C28.4366 39.9904 28.6223 39.9988 28.7911 39.9988C30.7413 39.9988 32.3791 39.2981 33.6623 37.9051C33.6708 37.8882 33.6877 37.8798 33.6961 37.8629C34.1351 37.3311 34.6416 36.8498 35.1735 36.3349C35.5365 35.9887 35.908 35.6257 36.271 35.2458C37.1068 34.3763 37.5458 33.3632 37.5458 32.3248C37.5458 31.2779 37.0983 30.2733 36.2457 29.4291L31.6109 24.7774ZM34.6332 33.6671C34.6248 33.6671 34.6248 33.6756 34.6332 33.6671C34.3039 34.0217 33.9663 34.3425 33.6032 34.6971C33.0545 35.2205 32.4973 35.7692 31.9739 36.3855C31.1212 37.2973 30.1166 37.7278 28.7996 37.7278C28.6729 37.7278 28.5379 37.7278 28.4112 37.7194C25.9039 37.559 23.5738 36.5797 21.8263 35.7439C17.0479 33.4307 12.8521 30.1467 9.36547 25.9846C6.48665 22.5149 4.56181 19.3068 3.28703 15.8624C2.5019 13.7602 2.21486 12.1224 2.3415 10.5775C2.42592 9.58974 2.80582 8.77084 3.50653 8.07013L6.38535 5.19132C6.79902 4.80297 7.23802 4.59191 7.66857 4.59191C8.20043 4.59191 8.63099 4.91272 8.90114 5.18287C8.90959 5.19132 8.91803 5.19976 8.92647 5.2082C9.44145 5.68941 9.9311 6.1875 10.4461 6.71937C10.7078 6.98952 10.9779 7.25967 11.2481 7.53827L13.5528 9.84301C14.4477 10.7379 14.4477 11.5652 13.5528 12.4601C13.308 12.7049 13.0716 12.9498 12.8268 13.1861C12.1176 13.9122 11.4423 14.5876 10.7078 15.2461C10.6909 15.2629 10.674 15.2714 10.6656 15.2883C9.93954 16.0143 10.0746 16.7235 10.2266 17.2047C10.235 17.23 10.2435 17.2553 10.2519 17.2807C10.8513 18.7327 11.6955 20.1004 12.9788 21.7297L12.9872 21.7382C15.3173 24.6085 17.774 26.8458 20.4839 28.5595C20.8301 28.779 21.1847 28.9563 21.5223 29.1252C21.8263 29.2771 22.1133 29.4206 22.3581 29.5726C22.3919 29.5895 22.4257 29.6148 22.4594 29.6317C22.7465 29.7752 23.0166 29.8428 23.2952 29.8428C23.9959 29.8428 24.4349 29.4038 24.5784 29.2602L27.4657 26.373C27.7527 26.0859 28.2086 25.7398 28.7405 25.7398C29.2639 25.7398 29.6945 26.0691 29.9562 26.3561C29.9646 26.3645 29.9646 26.3645 29.9731 26.373L34.6248 31.0247C35.4943 31.8858 35.4943 32.7722 34.6332 33.6671Z" /><path d="M21.6139 9.51481C23.8258 9.88627 25.835 10.9331 27.4391 12.5371C29.0431 14.1412 30.0815 16.1504 30.4614 18.3623C30.5543 18.9195 31.0355 19.3078 31.5842 19.3078C31.6518 19.3078 31.7109 19.2994 31.7784 19.291C32.4031 19.1897 32.8168 18.5987 32.7155 17.974C32.2596 15.2978 30.9933 12.858 29.06 10.9247C27.1267 8.99139 24.6869 7.72505 22.0107 7.26916C21.386 7.16786 20.8034 7.58153 20.6937 8.19781C20.5839 8.8141 20.9892 9.4135 21.6139 9.51481Z" /><path d="M39.9513 17.6448C39.1999 13.238 37.1231 9.2279 33.9319 6.03672C30.7407 2.84554 26.7307 0.768738 22.3238 0.0173754C21.7075 -0.0923741 21.125 0.32974 21.0152 0.946026C20.9139 1.57075 21.3276 2.15327 21.9523 2.26302C25.8864 2.92996 29.4744 4.7957 32.3279 7.64075C35.1814 10.4942 37.0387 14.0822 37.7056 18.0163C37.7985 18.5735 38.2797 18.9618 38.8284 18.9618C38.896 18.9618 38.9551 18.9534 39.0226 18.945C39.6389 18.8521 40.061 18.2611 39.9513 17.6448Z" /></svg>`,CONVENIOS:je`<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M33 3V22.3H22.3V33H3V3H33ZM32 0H4C1.8 0 0 1.8 0 4V32C0 34.2 1.8 36 4 36H24L36 24V4C36 1.8 34.2 0 32 0ZM15.3 22.8H5.3V20.5H15.3V22.8ZM30.5 7.3H5.3V5H30.5V7.3ZM30.5 12.5H5.3V10.2H30.5V12.5ZM30.5 17.7H5.3V15.4H30.5V17.7Z" fill="white"/></svg>`,JUVENTUD:je`<svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path d="M10.9727 37.8906C10.6203 37.8906 10.3281 38.1828 10.3281 38.5352V43.3563C10.3281 43.7086 10.6203 44.0008 10.9727 44.0008C11.325 44.0008 11.6172 43.7086 11.6172 43.3563V38.5352C11.6172 38.1742 11.3336 37.8906 10.9727 37.8906Z" fill="white"/><path d="M35.5773 29.1938L31.1859 27.5953L28.3242 26.4523C28.0406 26.3406 27.7398 26.332 27.4648 26.4008V23.6852C29.6133 22.1898 31.1258 19.8438 31.5039 17.1281H31.8906C33.1453 17.1281 34.2281 16.1914 34.3398 15.0055C34.4086 14.3352 34.1852 13.6734 33.7383 13.175C33.5234 12.9344 33.257 12.7453 32.9734 12.6164V7.52891C32.9734 3.37813 29.5961 -0.0078125 25.4367 -0.0078125H18.5445C14.3937 -0.0078125 11.0078 3.36953 11.0078 7.52891V8.25938H6.14375C5.79141 8.25938 5.49922 8.55156 5.49922 8.90391C5.49922 9.25625 5.79141 9.54844 6.14375 9.54844H11.0078V10.2789C11.0078 10.6313 11.3 10.9234 11.6523 10.9234C12.0047 10.9234 12.2969 10.6313 12.2969 10.2789V9.54844H21.3461C19.4812 10.7258 16.1641 12.393 12.3398 12.393H12.0906C10.8359 12.393 9.75312 13.3297 9.64141 14.5156C9.57266 15.1859 9.79609 15.8477 10.243 16.3461C10.6898 16.8445 11.3344 17.1281 11.9961 17.1281H12.4773C12.8555 19.8352 14.368 22.1898 16.5164 23.6852V26.4008C16.2414 26.3234 15.9406 26.332 15.657 26.4523L12.7953 27.5953L8.42109 29.1938C6.27266 29.9758 4.82031 32.0383 4.82031 34.3328V43.3563C4.82031 43.7086 5.1125 44.0008 5.46484 44.0008C5.81719 44.0008 6.10938 43.7086 6.10938 43.3563V34.3328C6.10938 32.5797 7.21797 31.007 8.85938 30.4055L12.7266 28.9961C13.457 30.3367 15.6828 33.9203 19.9711 36.7047V43.3477C19.9711 43.7 20.2633 43.9922 20.6156 43.9922C20.968 43.9922 21.2602 43.7 21.2602 43.3477V34.3586H22.7297V43.3563C22.7297 43.7086 23.0219 44.0008 23.3742 44.0008C23.7266 44.0008 24.0187 43.7086 24.0187 43.3563V36.7133C25.8664 35.5102 27.5336 34.032 28.9773 32.3047C29.2094 32.0297 29.1664 31.6258 28.9 31.3938C28.625 31.1617 28.2211 31.2047 27.9891 31.4711C26.8117 32.8805 25.4797 34.1094 24.0187 35.1492V32.5023C24.0187 32.0727 24.2164 31.6688 24.5516 31.3938C26.3047 29.9672 27.3273 28.4461 27.7828 27.6641C27.7914 27.6469 27.8172 27.6383 27.8344 27.6469L30.043 28.532C29.9312 28.7297 29.7938 28.9617 29.6219 29.2367C29.4328 29.5375 29.5187 29.9328 29.8195 30.1219C30.1203 30.3109 30.5156 30.225 30.7047 29.9242C30.9367 29.5547 31.1172 29.2453 31.2461 29.0047L35.1133 30.4141C36.7547 31.0156 37.8633 32.5883 37.8633 34.3414V43.3648C37.8633 43.7172 38.1555 44.0094 38.5078 44.0094C38.8602 44.0094 39.1523 43.7172 39.1523 43.3648V34.3414C39.1781 32.0469 37.7344 29.9758 35.5773 29.1938ZM31.6844 7.5375V8.26797H28.1523V7.5375C28.1523 7.13359 28.4789 6.80703 28.8828 6.80703H31.6414C31.6758 7.03906 31.6844 7.28828 31.6844 7.5375ZM27.0867 9.55703C26.107 10.2188 25.1273 10.6313 24.5258 10.8461L24.1992 9.55703H27.0867ZM30.2234 9.55703H31.693V12.4016H30.9625C30.5586 12.4016 30.232 12.075 30.232 11.6711L30.2234 9.55703ZM12.3141 7.5375C12.3141 4.09141 15.1156 1.28984 18.5617 1.28984H25.4539C28.1867 1.28984 30.5156 3.06016 31.3578 5.50938H28.9C27.7828 5.50938 26.8805 6.42031 26.8805 7.52891V8.25938H12.3141V7.5375ZM13.6891 15.8047C13.6891 15.4523 13.3969 15.1602 13.0445 15.1602C12.6922 15.1602 12.4 15.4523 12.4 15.8047V15.8477H12.0133C11.7125 15.8477 11.4203 15.7188 11.2141 15.4953C11.0078 15.2633 10.9133 14.9711 10.9391 14.6617C10.9906 14.1203 11.5062 13.6992 12.1078 13.6992H12.357C17.2984 13.6992 21.3375 11.2242 22.9961 10.0297L23.443 11.8344C23.5203 12.1266 23.7781 12.3242 24.0703 12.3242C24.1219 12.3242 24.1734 12.3156 24.225 12.307C24.3367 12.2813 26.8375 11.6367 28.9344 9.77188V11.6797C28.9344 12.7969 29.8453 13.6992 30.9539 13.6992H31.9852C32.2859 13.6992 32.5781 13.8281 32.7844 14.0516C32.9906 14.2836 33.0852 14.5758 33.0594 14.8852C33.0078 15.4266 32.4922 15.8477 31.8906 15.8477H31.5984V15.8133C31.5984 15.4609 31.3062 15.1688 30.9539 15.1688C30.6016 15.1688 30.3094 15.4609 30.3094 15.8133C30.3094 20.3938 26.5797 24.1148 21.9992 24.1148C17.4187 24.1148 13.6891 20.3852 13.6891 15.8047ZM13.9469 28.532L16.1555 27.6469C16.1727 27.6383 16.1984 27.6469 16.207 27.6641C16.6625 28.4461 17.6852 29.9672 19.4383 31.3938C19.7734 31.6688 19.9711 32.0727 19.9711 32.5023V35.1492C16.5594 32.7172 14.6516 29.7781 13.9469 28.532ZM23.7437 30.3969C23.0992 30.9211 22.7383 31.6859 22.7383 32.5023V33.0609H21.2687V32.5023C21.2687 31.6859 20.8992 30.9211 20.2633 30.3969C19.1289 29.4773 18.3297 28.4977 17.8312 27.7844V24.4328C19.0945 25.043 20.5125 25.3867 22.0078 25.3867C23.5031 25.3867 24.9211 25.043 26.1844 24.4242V27.7758C25.6773 28.4977 24.8781 29.4773 23.7437 30.3969Z" fill="white"/><path d="M33.0234 37.8906C32.6711 37.8906 32.3789 38.1828 32.3789 38.5352V43.3563C32.3789 43.7086 32.6711 44.0008 33.0234 44.0008C33.3758 44.0008 33.668 43.7086 33.668 43.3563V38.5352C33.668 38.1742 33.3758 37.8906 33.0234 37.8906Z" fill="white"/></g><defs><clipPath id="clip0"><rect width="44" height="44" fill="white"/></clipPath></defs></svg>`,JUVENTUDES:je`<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path d="M4.49023 15.5C4.34609 15.5 4.22656 15.6195 4.22656 15.7637V17.7359C4.22656 17.8801 4.34609 17.9996 4.49023 17.9996C4.63438 17.9996 4.75391 17.8801 4.75391 17.7359V15.7637C4.75391 15.616 4.63789 15.5 4.49023 15.5Z" fill="#00548E"/><path d="M14.5551 11.9422L12.7586 11.2883L11.5879 10.8207C11.4719 10.775 11.3488 10.7715 11.2363 10.7996V9.68867C12.1152 9.07696 12.734 8.11719 12.8887 7.00625H13.0469C13.5602 7.00625 14.0031 6.62305 14.0488 6.13789C14.077 5.86367 13.9855 5.59297 13.8027 5.38906C13.7148 5.29063 13.6059 5.21328 13.4898 5.16055V3.0793C13.4898 1.38125 12.1082 -0.00390625 10.4066 -0.00390625H7.58711C5.88906 -0.00390625 4.50391 1.37773 4.50391 3.0793V3.37813H2.51406C2.36992 3.37813 2.25039 3.49766 2.25039 3.6418C2.25039 3.78594 2.36992 3.90547 2.51406 3.90547H4.50391V4.2043C4.50391 4.34844 4.62344 4.46797 4.76758 4.46797C4.91172 4.46797 5.03125 4.34844 5.03125 4.2043V3.90547H8.7332C7.97031 4.38711 6.61328 5.06914 5.04883 5.06914H4.94687C4.43359 5.06914 3.99062 5.45235 3.94492 5.9375C3.9168 6.21172 4.0082 6.48242 4.19102 6.68633C4.37383 6.89024 4.6375 7.00625 4.9082 7.00625H5.10508C5.25977 8.11368 5.87852 9.07696 6.75742 9.68867V10.7996C6.64492 10.768 6.52187 10.7715 6.40586 10.8207L5.23516 11.2883L3.4457 11.9422C2.5668 12.2621 1.97266 13.1059 1.97266 14.0445V17.7359C1.97266 17.8801 2.09219 17.9996 2.23633 17.9996C2.38047 17.9996 2.5 17.8801 2.5 17.7359V14.0445C2.5 13.3273 2.95352 12.684 3.625 12.4379L5.20703 11.8613C5.50586 12.4098 6.41641 13.8758 8.1707 15.0148V17.7324C8.1707 17.8766 8.29023 17.9961 8.43437 17.9961C8.57851 17.9961 8.69805 17.8766 8.69805 17.7324V14.0551H9.29922V17.7359C9.29922 17.8801 9.41875 17.9996 9.56289 17.9996C9.70703 17.9996 9.82656 17.8801 9.82656 17.7359V15.0184C10.5824 14.5262 11.2645 13.9215 11.8551 13.2148C11.95 13.1023 11.9324 12.9371 11.8234 12.8422C11.7109 12.7473 11.5457 12.7648 11.4508 12.8738C10.9691 13.4504 10.4242 13.9531 9.82656 14.3785V13.2957C9.82656 13.1199 9.90742 12.9547 10.0445 12.8422C10.7617 12.2586 11.1801 11.6363 11.3664 11.3164C11.3699 11.3094 11.3805 11.3059 11.3875 11.3094L12.291 11.6715C12.2453 11.7523 12.1891 11.8473 12.1187 11.9598C12.0414 12.0828 12.0766 12.2445 12.1996 12.3219C12.3227 12.3992 12.4844 12.3641 12.5617 12.241C12.6566 12.0898 12.7305 11.9633 12.7832 11.8648L14.3652 12.4414C15.0367 12.6875 15.4902 13.3309 15.4902 14.0481V17.7395C15.4902 17.8836 15.6098 18.0031 15.7539 18.0031C15.898 18.0031 16.0176 17.8836 16.0176 17.7395V14.0481C16.0281 13.1094 15.4375 12.2621 14.5551 11.9422ZM12.9625 3.08281V3.38164H11.5176V3.08281C11.5176 2.91758 11.6512 2.78399 11.8164 2.78399H12.9449C12.959 2.87891 12.9625 2.98086 12.9625 3.08281ZM11.0816 3.90899C10.6809 4.17969 10.2801 4.34844 10.034 4.43633L9.90039 3.90899H11.0816ZM12.3648 3.90899H12.966V5.07266H12.6672C12.502 5.07266 12.3684 4.93906 12.3684 4.77383L12.3648 3.90899ZM5.03828 3.08281C5.03828 1.67305 6.18437 0.526954 7.59414 0.526954H10.4137C11.5316 0.526954 12.4844 1.25117 12.8289 2.25313H11.8234C11.3664 2.25313 10.9973 2.62578 10.9973 3.0793V3.37813H5.03828V3.08281ZM5.60078 6.46485C5.60078 6.3207 5.48125 6.20117 5.33711 6.20117C5.19297 6.20117 5.07344 6.3207 5.07344 6.46485V6.48242H4.91523C4.79219 6.48242 4.67266 6.42969 4.58828 6.33828C4.50391 6.24336 4.46523 6.12383 4.47578 5.99727C4.49687 5.77578 4.70781 5.60352 4.95391 5.60352H5.05586C7.07734 5.60352 8.72969 4.59102 9.4082 4.10234L9.59101 4.84063C9.62265 4.96016 9.72812 5.04102 9.84766 5.04102C9.86875 5.04102 9.88984 5.0375 9.91094 5.03399C9.95664 5.02344 10.9797 4.75977 11.8375 3.99688V4.77735C11.8375 5.23438 12.2102 5.60352 12.6637 5.60352H13.0855C13.2086 5.60352 13.3281 5.65625 13.4125 5.74766C13.4969 5.84258 13.5355 5.96211 13.525 6.08867C13.5039 6.31016 13.293 6.48242 13.0469 6.48242H12.9273V6.46836C12.9273 6.32422 12.8078 6.20469 12.6637 6.20469C12.5195 6.20469 12.4 6.32422 12.4 6.46836C12.4 8.34219 10.8742 9.86446 9.00039 9.86446C7.12656 9.86446 5.60078 8.33867 5.60078 6.46485ZM5.70625 11.6715L6.60977 11.3094C6.6168 11.3059 6.62734 11.3094 6.63086 11.3164C6.81719 11.6363 7.23555 12.2586 7.95273 12.8422C8.08984 12.9547 8.1707 13.1199 8.1707 13.2957V14.3785C6.775 13.3836 5.99453 12.1813 5.70625 11.6715ZM9.71406 12.4344C9.45039 12.6488 9.30273 12.9617 9.30273 13.2957V13.5242H8.70156V13.2957C8.70156 12.9617 8.55039 12.6488 8.29023 12.4344C7.82617 12.0582 7.49922 11.6574 7.29531 11.3656V9.99454C7.81211 10.2441 8.39219 10.3848 9.00391 10.3848C9.61562 10.3848 10.1957 10.2441 10.7125 9.99102V11.3621C10.5051 11.6574 10.1781 12.0582 9.71406 12.4344Z" fill="#00548E"/><path d="M13.5137 15.5C13.3695 15.5 13.25 15.6195 13.25 15.7637V17.7359C13.25 17.8801 13.3695 17.9996 13.5137 17.9996C13.6578 17.9996 13.7773 17.8801 13.7773 17.7359V15.7637C13.7773 15.616 13.6578 15.5 13.5137 15.5Z" fill="#00548E"/></g><defs><clipPath id="clip0"><rect width="18" height="18" fill="white"/></clipPath></defs></svg>`,TARJETAIERIC:je`<svg width="22" height="40" viewBox="0 0 22 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.9112 0H6.14375C4.99215 0 4.0553 0.936851 4.0553 2.08852V18.0574C3.93273 18.224 3.72874 18.4935 3.52907 18.7573C2.78972 19.734 1.67238 21.2103 1.00603 22.2592C-0.307959 24.3311 -0.333323 26.4013 0.921353 29.1817C0.930092 29.2011 0.939681 29.2201 0.950043 29.2387C0.950043 29.2387 2.521 32.0798 2.58835 32.2043C2.98498 32.937 3.64878 34.1635 3.60671 35.1275C3.60625 35.1387 3.60601 35.1499 3.60601 35.1612V37.4474C3.60601 38.6304 4.56846 39.5929 5.75145 39.5929H12.7393C13.9223 39.5929 14.8847 38.6304 14.8847 37.4474L14.8782 35.4443C14.8785 34.6732 14.9952 34.2669 15.1426 33.7529C15.2434 33.4019 15.3574 33.0041 15.4393 32.465C15.4414 32.4511 15.4432 32.4372 15.4445 32.4231C15.5589 31.2358 15.2503 30.0892 14.9237 28.8754C14.7383 28.1865 14.5406 27.4514 14.399 26.6383H19.9113C21.0629 26.6383 21.9998 25.7014 21.9998 24.5498V16.7923C21.9998 16.3653 21.6535 16.019 21.2265 16.019C20.7995 16.019 20.4532 16.3653 20.4532 16.7923V24.5497C20.4532 24.8485 20.21 25.0916 19.9113 25.0916H18.0871V1.5466H19.9112C20.21 1.5466 20.4531 1.78972 20.4531 2.08852V9.84595C20.4531 10.273 20.7994 10.6192 21.2264 10.6192C21.6534 10.6192 21.9997 10.273 21.9997 9.84595V2.08852C21.9997 0.936851 21.0628 0 19.9112 0V0ZM12.7392 38.0463H5.75138C5.42674 38.0463 5.15253 37.772 5.15253 37.4474V35.1769C5.20566 33.791 4.41921 32.3378 3.94851 31.4681C3.88409 31.3491 2.31809 28.5168 2.31809 28.5168C1.28975 26.2253 1.28875 24.7012 2.31182 23.0881C2.75972 22.383 3.43937 21.4522 4.0553 20.6288V24.5498C4.0553 25.7014 4.99215 26.6383 6.14375 26.6383H8.62325V29.2187C8.62325 29.6457 8.96946 29.992 9.39655 29.992C9.82364 29.992 10.1698 29.6457 10.1698 29.2187V21.0755C10.1698 20.3778 10.7374 19.8102 11.435 19.8102C11.7744 19.8102 12.0947 19.9443 12.3367 20.1878C12.5745 20.427 12.7044 20.7406 12.7024 21.0708C12.7008 21.3358 12.6968 23.0796 12.6657 23.8888C12.6383 24.6046 12.6686 25.2704 12.7344 25.8919C12.736 25.937 12.796 26.3951 12.8233 26.5745C12.9792 27.5981 13.2187 28.4917 13.4302 29.2772C13.7296 30.3899 13.9886 31.352 13.9069 32.2541C13.8403 32.6836 13.7507 32.996 13.6559 33.3262C13.4964 33.8822 13.3315 34.457 13.3315 35.4482C13.3315 35.4509 13.3315 35.4536 13.3316 35.4563L13.3381 37.4473C13.3381 37.772 13.0638 38.0463 12.7392 38.0463ZM16.5405 25.0917H14.2209C14.2011 24.7264 14.2475 21.343 14.249 21.08C14.2534 20.3349 13.9638 19.6308 13.4335 19.0974C12.899 18.5597 12.1892 18.2636 11.435 18.2636C9.88458 18.2636 8.62318 19.525 8.62318 21.0755V25.0917H6.14367C5.84487 25.0917 5.60182 24.8486 5.60182 24.5498V2.08852C5.60182 1.78972 5.84494 1.5466 6.14367 1.5466H16.5405V25.0917Z" fill="white"/><path d="M21.2264 12.5469C20.7994 12.5469 20.4531 12.8932 20.4531 13.3202V13.3223C20.4531 13.7494 20.7994 14.0946 21.2264 14.0946C21.6534 14.0946 21.9997 13.7472 21.9997 13.3201C21.9997 12.893 21.6534 12.5469 21.2264 12.5469Z" fill="white"/></svg>`,PROGRAMACION:je`<svg width="46" height="54" viewBox="0 0 46 54" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M39.4655 8.29069C39.0818 6.116 36.9862 4.676 34.802 5.08743L29.3415 6.08661C28.456 5.4107 27.423 4.96988 26.2719 4.85233C25.3273 4.76417 24.5009 4.17641 24.0582 3.32417C22.907 1.00254 20.3096 -0.378682 17.6237 0.0915213C14.9377 0.591112 12.9897 2.79519 12.724 5.38131C12.6355 6.32172 12.0452 7.14457 11.1892 7.58539C10.1561 8.08498 9.3592 8.87845 8.76888 9.81885L3.30842 10.818C1.12424 11.2001 -0.322045 13.2866 0.0616626 15.4319L6.52566 50.7265C6.90937 52.9012 9.00501 54.3412 11.1892 53.9298C20.2211 52.2841 31.3486 50.2857 42.7123 48.1992C44.8964 47.8172 46.3427 45.7306 45.9295 43.5559C43.8929 32.4474 41.9448 21.7797 39.4655 8.29069ZM12.0747 9.37804C13.5505 8.64335 14.554 7.23274 14.7016 5.58702C14.8787 3.82376 16.2364 2.38376 17.9779 2.0605C19.7193 1.73723 21.4903 2.61886 22.2872 4.2058C23.0251 5.67519 24.4419 6.64498 26.0948 6.82131C27.8657 6.99763 29.312 8.34947 29.6367 10.0833L29.9909 12.0523L10.2742 15.6082L9.92 13.6099C9.59533 11.9054 10.4808 10.1421 12.0747 9.37804ZM42.3581 46.289C31.8504 48.1992 21.3427 50.1094 10.835 52.0196C9.74291 52.2253 8.70985 51.4906 8.50323 50.4033L2.03923 15.0793C1.83262 13.9919 2.57052 12.9633 3.66261 12.7576L7.91292 11.9935C7.82437 12.6401 7.79485 13.2866 7.91292 13.9625L8.65082 17.9299L32.2931 13.6393L31.5847 9.73069C31.4667 9.05477 31.2305 8.40824 30.8764 7.82049L35.1562 7.05641C36.2483 6.8507 37.2813 7.58539 37.4879 8.67273C38.521 14.2858 43.3321 40.5878 43.9519 43.9674C44.1586 45.0547 43.4206 46.0833 42.3581 46.289ZM18.4501 4.49968C19.2766 4.35274 20.044 4.88172 20.1916 5.70457C20.3391 6.52743 19.8079 7.29151 18.9814 7.43845C18.155 7.58539 17.3875 7.05641 17.24 6.23355C17.0924 5.4107 17.6237 4.64662 18.4501 4.49968ZM15.6461 22.7494L33.3852 19.5462L33.7394 21.5152L16.0003 24.7184L15.6461 22.7494ZM16.7382 28.627L34.4773 25.4237L34.8315 27.3927L17.0924 30.596L16.7382 28.627ZM17.8008 34.5045L35.5399 31.3013L35.8941 33.2702L18.155 36.4735L17.8008 34.5045ZM18.8929 40.4115L36.632 37.2082L36.9862 39.1772L19.2471 42.3804L18.8929 40.4115ZM10.7169 23.6311C11.2482 23.5429 11.7795 23.8956 11.8681 24.4245C11.9566 24.9535 11.6024 25.4825 11.0711 25.5707C10.5398 25.6588 10.0086 25.3062 9.92 24.7772C9.83146 24.2482 10.1856 23.7486 10.7169 23.6311ZM11.809 29.538C12.3403 29.4498 12.8716 29.8025 12.9601 30.3315C13.0487 30.8605 12.6945 31.3894 12.1632 31.4776C11.6319 31.5658 11.1006 31.2131 11.0121 30.6841C10.9235 30.1551 11.2482 29.6262 11.809 29.538ZM12.8716 35.4156C13.4029 35.3274 13.9342 35.68 14.0227 36.209C14.1113 36.738 13.7571 37.267 13.2258 37.3551C12.6945 37.4433 12.1632 37.0906 12.0747 36.5617C11.9861 36.0327 12.3403 35.5037 12.8716 35.4156ZM13.9637 41.2931C14.495 41.2049 15.0263 41.5576 15.1148 42.0866C15.2034 42.6155 14.8492 43.1445 14.3179 43.2327C13.7866 43.3208 13.2553 42.9682 13.1668 42.4392C13.0487 41.9102 13.4029 41.3813 13.9637 41.2931Z" fill="white"/></svg>`,YOUTUBE:je`<svg width="34" height="24" viewBox="0 0 34 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.1813 23C14.4969 22.939 11.5628 22.878 8.62872 22.8169C7.38017 22.7559 6.13162 22.6949 4.9455 22.5118C3.50967 22.3287 2.4484 21.5354 1.88656 20.1928C1.63685 19.5215 1.38714 18.7892 1.32471 18.0569C0.950144 14.4563 0.887718 10.9168 1.19986 7.31624C1.26228 6.15673 1.38714 5.05826 1.82413 3.95979C2.4484 2.3731 3.63452 1.51872 5.32006 1.39667C7.50502 1.21359 9.62755 1.15257 11.8125 1.09154C15.4957 0.969487 19.2414 0.969487 22.9246 1.09154C24.6726 1.15257 26.483 1.21359 28.2309 1.33564C29.0425 1.39667 29.854 1.51872 30.6032 1.9459C31.602 2.49514 32.1014 3.41054 32.4136 4.44799C32.7257 5.42441 32.7881 6.33981 32.8506 7.31624C33.0378 10.0624 33.0378 12.8696 32.913 15.6158C32.8506 16.7753 32.7881 17.9348 32.476 19.0943C32.2887 19.7046 32.1014 20.3148 31.7893 20.8641C31.165 21.9626 30.0413 22.5118 28.7928 22.6339C27.2321 22.7559 25.6714 22.878 24.1107 22.878C21.9258 22.878 19.6784 22.939 17.1813 23ZM23.861 11.9542L18.3674 15.0666L12.8738 18.1789V12.0153V5.85161L18.3674 8.96394L23.861 11.9542Z" stroke="white" stroke-width="2" stroke-miterlimit="10"/></svg>`,ADOLECENCIA:je`<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.94994 0C4.65083 0.0014706 3.40535 0.518191 2.48675 1.4368C1.56814 2.35541 1.05142 3.60089 1.04995 4.89999V5.24999C1.04995 6.02826 0.270585 6.30712 0.23926 6.31797C0.160431 6.34427 0.0935292 6.39775 0.0505221 6.46885C0.00751507 6.53995 -0.00879098 6.62404 0.00452105 6.70606C0.0178331 6.78809 0.0598947 6.8627 0.123181 6.91655C0.186467 6.9704 0.26685 6.99998 0.349947 6.99999H2.14641C2.2806 7.72267 2.62016 8.39139 3.12448 8.92613C2.39258 9.31289 1.78005 9.89196 1.35282 10.601C0.925597 11.31 0.69987 12.1222 0.699947 12.95V20.65C0.699947 20.7428 0.736821 20.8318 0.802459 20.8975C0.868097 20.9631 0.95712 21 1.04995 21H20.6499C20.7428 21 20.8318 20.9631 20.8974 20.8975C20.963 20.8318 20.9999 20.7428 20.9999 20.65V12.95C21.0006 12.3487 20.8816 11.7533 20.6499 11.1984V6.87452C20.8764 6.61833 21.0009 6.28798 21 5.94607C20.9991 5.60417 20.8727 5.27448 20.6449 5.01952C20.5967 3.72534 20.0833 2.49198 19.199 1.54577C18.2646 0.548974 17.0396 0 15.7499 0C14.4602 0 13.2353 0.548974 12.3008 1.54582C11.4165 2.49202 10.9032 3.72538 10.8549 5.01956C10.8532 5.02149 10.8516 5.02341 10.8499 5.02534V4.89999C10.8485 3.60089 10.3317 2.35541 9.41314 1.4368C8.49453 0.518191 7.24905 0.0014706 5.94994 0ZM12.3482 20.3L12.8732 18.2H18.6267L19.1517 20.3H12.3482ZM12.9499 17.5V16.8H18.5499V17.5H12.9499ZM20.2999 20.3H19.8732L19.2499 17.807V16.8C19.3428 16.8 19.4318 16.7631 19.4974 16.6975C19.5631 16.6318 19.5999 16.5428 19.5999 16.45V14.5341L20.2999 14.0528V20.3ZM20.2999 5.94999C20.2997 6.13558 20.2259 6.3135 20.0947 6.44472C19.9634 6.57595 19.7855 6.64977 19.5999 6.64999C19.5945 6.64999 19.5893 6.64942 19.5839 6.64934C19.5943 6.53423 19.5999 6.41777 19.5999 6.29999V5.24999C19.7855 5.25021 19.9634 5.32403 20.0947 5.45526C20.2259 5.58649 20.2997 5.76441 20.2999 5.94999ZM15.7499 9.44999C14.9148 9.44905 14.1141 9.11688 13.5236 8.52634C12.933 7.9358 12.6009 7.13514 12.5999 6.29999V5.16144C13.0528 5.01407 13.4906 4.82387 13.9074 4.59344C14.7271 4.13804 15.3518 3.56877 15.7488 2.92158C16.5928 4.30753 18.2513 4.95429 18.8999 5.1621V6.29999C18.899 7.13514 18.5668 7.9358 17.9763 8.52634C17.3857 9.11688 16.5851 9.44905 15.7499 9.44999ZM17.1426 9.88924C17.0549 10.4711 16.7428 11.2326 15.7499 11.536C14.7568 11.2326 14.4449 10.4708 14.3572 9.88919C15.2531 10.2369 16.2467 10.2369 17.1426 9.88919V9.88924ZM12.9331 8.92149C12.4024 9.20019 11.9323 9.58136 11.5499 10.0429V7.30567C11.6643 7.33517 11.7819 7.35006 11.8999 7.34999C11.9479 7.34998 11.9958 7.34754 12.0435 7.34268C12.2102 7.93224 12.5151 8.47351 12.9331 8.92149ZM19.4564 7.34242C19.6218 7.35974 19.7889 7.34729 19.9499 7.30567V10.0432C19.5676 9.58149 19.0975 9.20016 18.5669 8.92123C18.9849 8.47325 19.2898 7.93198 19.4564 7.34242ZM12.8116 2.02453C13.6123 1.1704 14.6558 0.699999 15.7499 0.699999C16.8441 0.699999 17.8876 1.1704 18.6883 2.02453C19.3491 2.73096 19.774 3.62536 19.9041 4.5839C19.8043 4.56149 19.7023 4.55012 19.5999 4.54999H19.2966C18.9706 4.45812 16.6697 3.75248 16.082 1.98931C16.0588 1.9196 16.0142 1.85897 15.9546 1.81601C15.895 1.77304 15.8234 1.74992 15.7499 1.74992C15.6765 1.74992 15.6048 1.77304 15.5453 1.81601C15.4857 1.85897 15.4411 1.9196 15.4179 1.98931C14.83 3.75291 12.5281 4.45856 12.2033 4.54999H11.8999C11.7976 4.55005 11.6956 4.56135 11.5957 4.58368C11.7259 3.62521 12.1508 2.7309 12.8116 2.02453ZM11.8999 5.24999V6.29999C11.8999 6.41772 11.9055 6.53414 11.9159 6.6492C11.9106 6.6492 11.9053 6.64999 11.8999 6.64999C11.7143 6.64999 11.5362 6.57624 11.405 6.44497C11.2737 6.31369 11.1999 6.13564 11.1999 5.94999C11.1999 5.76434 11.2737 5.58629 11.405 5.45502C11.5362 5.32374 11.7143 5.24999 11.8999 5.24999ZM11.1999 12.95C11.1998 12.2021 11.4175 11.4704 11.8264 10.8443C12.2353 10.2181 12.8177 9.72459 13.5025 9.424C13.5439 9.45387 13.586 9.48293 13.6286 9.5112C13.632 9.80599 13.6729 10.0992 13.7502 10.3837C13.9343 11.0465 14.4152 11.9062 15.6597 12.2382C15.7188 12.2539 15.781 12.2539 15.8401 12.2382C17.0848 11.9063 17.5656 11.0465 17.7497 10.3837C17.827 10.0992 17.8678 9.80599 17.8712 9.5112C17.914 9.4829 17.9561 9.45374 17.9976 9.42369C18.6823 9.72444 19.2647 10.218 19.6735 10.8442C20.0824 11.4704 20.3 12.2021 20.2999 12.95V13.2034L19.0517 14.0616C19.0049 14.0937 18.9666 14.1368 18.9402 14.187C18.9137 14.2373 18.8999 14.2932 18.8999 14.35V16.1H12.5999V14.35C12.5999 14.2932 12.5861 14.2373 12.5597 14.187C12.5333 14.1368 12.495 14.0937 12.4482 14.0616L11.1999 13.2034V12.95ZM11.1999 14.0528L11.8999 14.5341V16.45C11.8999 16.5428 11.9368 16.6318 12.0024 16.6975C12.0681 16.7631 12.1571 16.8 12.2499 16.8V17.807L11.6267 20.3H11.1999V14.0528ZM10.4999 5.94999C10.4997 6.13558 10.4259 6.3135 10.2947 6.44472C10.1634 6.57595 9.98552 6.64977 9.79994 6.64999C9.79455 6.64999 9.78926 6.64942 9.78392 6.64934C9.79434 6.53423 9.79994 6.41777 9.79994 6.29999V5.24999C9.98552 5.25021 10.1634 5.32403 10.2947 5.45526C10.4259 5.58649 10.4997 5.76441 10.4999 5.94999ZM1.40305 6.29999C1.63325 5.99884 1.75543 5.62901 1.74995 5.24999V4.89999C1.75009 3.81289 2.17174 2.7682 2.92623 1.98556C3.68073 1.20292 4.70929 0.743318 5.79566 0.703385C6.88203 0.663453 7.94156 1.0463 8.75148 1.77143C9.5614 2.49657 10.0586 3.50749 10.1386 4.59164C10.0278 4.56397 9.91409 4.54998 9.79994 4.54999H9.49583C9.04731 4.43069 8.72754 4.22034 8.5458 3.9238C8.46409 3.79458 8.4141 3.64785 8.39994 3.49562C8.39936 3.4028 8.36193 3.314 8.29588 3.24877C8.22983 3.18355 8.14058 3.14723 8.04775 3.14781C7.95493 3.14839 7.86613 3.18582 7.8009 3.25187C7.73568 3.31792 7.69936 3.40717 7.69994 3.5C7.69994 6.26364 2.50244 6.29999 2.44994 6.29999H1.40305ZM2.858 6.98687C3.38812 6.95856 4.36059 6.8701 5.3447 6.59312C7.03498 6.11773 7.83132 5.34948 8.17314 4.58779C8.37924 4.80768 8.67526 5.01576 9.09994 5.1614V6.29999C9.09928 6.90434 8.92498 7.49576 8.59779 8.00388C8.2706 8.51199 7.8043 8.91539 7.25439 9.16605L7.24831 9.16225L7.24258 9.17143C6.83644 9.35525 6.39574 9.45022 5.94994 9.44999C5.23185 9.45005 4.53499 9.20644 3.97333 8.75901C3.41167 8.31158 3.01846 7.6868 2.858 6.98687ZM6.67378 10.0816L5.94994 11.2396L5.22627 10.0817C5.70448 10.1728 6.19561 10.1728 6.67378 10.0814V10.0816ZM2.09995 20.3H1.39995V15.4H2.09995V20.3ZM5.59994 20.3H2.79994V18.9H5.59994V20.3ZM9.09994 20.3H6.29994V18.9H9.09994V20.3ZM10.4999 20.3H9.79994V15.4H10.4999V20.3ZM10.4999 14.7H9.79994V13.65C9.79994 13.5572 9.76306 13.4681 9.69742 13.4025C9.63179 13.3369 9.54276 13.3 9.44994 13.3C9.35711 13.3 9.26809 13.3369 9.20245 13.4025C9.13681 13.4681 9.09994 13.5572 9.09994 13.65V18.2H2.79994V13.65C2.79994 13.5572 2.76307 13.4681 2.69743 13.4025C2.63179 13.3369 2.54277 13.3 2.44994 13.3C2.35712 13.3 2.2681 13.3369 2.20246 13.4025C2.13682 13.4681 2.09995 13.5572 2.09995 13.65V14.7H1.39995V12.95C1.39983 12.2031 1.61698 11.4722 2.02494 10.8466C2.4329 10.2209 3.01405 9.7274 3.69756 9.42623C3.84886 9.53458 4.00778 9.63187 4.17308 9.71734L5.65314 12.0855C5.6846 12.1358 5.72835 12.1773 5.78027 12.2061C5.83219 12.2349 5.89058 12.25 5.94994 12.25C6.0093 12.25 6.06769 12.2349 6.11961 12.2061C6.17153 12.1773 6.21528 12.1358 6.24674 12.0855L7.72943 9.71323C7.89216 9.62803 8.0486 9.5313 8.19755 9.42378C8.88227 9.72451 9.46461 10.2181 9.87346 10.8443C10.2823 11.4705 10.5 12.2021 10.4999 12.95V14.7ZM10.8499 11.1981C10.4414 10.22 9.70491 9.41487 8.767 8.92109C9.18492 8.47312 9.48986 7.93185 9.65648 7.34229C9.87832 7.36552 10.1025 7.33516 10.3102 7.25376C10.5179 7.17236 10.703 7.0423 10.8499 6.87452V11.1981Z" fill="#00548E"/><path d="M7.35 6.64922C7.5433 6.64922 7.7 6.49252 7.7 6.29922C7.7 6.10592 7.5433 5.94922 7.35 5.94922C7.1567 5.94922 7 6.10592 7 6.29922C7 6.49252 7.1567 6.64922 7.35 6.64922Z" fill="#00548E"/><path d="M14.35 6.64922C14.5433 6.64922 14.7 6.49252 14.7 6.29922C14.7 6.10592 14.5433 5.94922 14.35 5.94922C14.1567 5.94922 14 6.10592 14 6.29922C14 6.49252 14.1567 6.64922 14.35 6.64922Z" fill="#00548E"/><path d="M17.1469 6.64922C17.3402 6.64922 17.4969 6.49252 17.4969 6.29922C17.4969 6.10592 17.3402 5.94922 17.1469 5.94922C16.9536 5.94922 16.7969 6.10592 16.7969 6.29922C16.7969 6.49252 16.9536 6.64922 17.1469 6.64922Z" fill="#00548E"/><path d="M16.5541 7.45408C16.5516 7.45657 16.2828 7.70157 15.7516 7.70157C15.2203 7.70157 14.9516 7.45657 14.9491 7.45408C14.8834 7.38844 14.7944 7.35156 14.7016 7.35156C14.6087 7.35156 14.5197 7.38844 14.4541 7.45408C14.3884 7.51972 14.3516 7.60874 14.3516 7.70157C14.3516 7.7944 14.3884 7.88342 14.4541 7.94906C14.5003 7.99535 14.9303 8.40157 15.7516 8.40157C16.5728 8.40157 17.0028 7.99535 17.0491 7.94906C17.1147 7.88342 17.1516 7.7944 17.1516 7.70157C17.1516 7.60874 17.1147 7.51972 17.0491 7.45408C16.9834 7.38844 16.8944 7.35156 16.8016 7.35156C16.7087 7.35156 16.6197 7.38844 16.5541 7.45408Z" fill="#00548E"/><path d="M5.95079 8.40157C6.77206 8.40157 7.20204 7.99535 7.24828 7.94906C7.31392 7.88343 7.3508 7.7944 7.3508 7.70157C7.3508 7.60874 7.31392 7.51972 7.24828 7.45408C7.18264 7.38844 7.09362 7.35156 7.00079 7.35156C6.90796 7.35156 6.81893 7.38844 6.75329 7.45408C6.7508 7.45657 6.48204 7.70157 5.95079 7.70157C5.41953 7.70157 5.15078 7.45657 5.14828 7.45408C5.11578 7.42158 5.0772 7.3958 5.03473 7.37821C4.99227 7.36062 4.94675 7.35156 4.90079 7.35156C4.85483 7.35156 4.80931 7.36062 4.76685 7.37821C4.72438 7.3958 4.6858 7.42158 4.6533 7.45408C4.6208 7.48658 4.59501 7.52516 4.57742 7.56763C4.55983 7.61009 4.55078 7.65561 4.55078 7.70157C4.55078 7.74754 4.55983 7.79305 4.57742 7.83551C4.59501 7.87798 4.6208 7.91656 4.6533 7.94906C4.69954 7.99535 5.12956 8.40157 5.95079 8.40157Z" fill="#00548E"/></svg>`,ADICCIONES:je`<svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.2258 5.32385H12.4194C11.4411 5.32385 10.6452 6.11975 10.6452 7.09805V12.7755H9.9355V8.16256V7.48411C9.9355 6.68395 9.5466 5.92814 8.89511 5.46259L7.45163 4.43143V3.54965H8.1613V0.710938H1.7742V3.54965H2.48388V4.43143L1.04003 5.46259C0.388904 5.92814 0 6.68395 0 7.48411V8.16256V18.8077V20.2271C0 21.2054 0.795905 22.0013 1.7742 22.0013H5.68062H7.09679H9.93231C10.4174 22.0013 10.8269 21.7004 10.9897 21.2682C11.313 21.7103 11.8314 22.0013 12.4194 22.0013H20.2258C21.2041 22.0013 22 21.2054 22 20.2271V7.09805C22 6.11975 21.2041 5.32385 20.2258 5.32385ZM12.4194 6.03353H20.2258C20.8127 6.03353 21.2904 6.51114 21.2904 7.09805V7.45288H11.3549V7.09805C11.3549 6.51114 11.8325 6.03353 12.4194 6.03353ZM11.3549 17.7592L11.7054 13.9035C11.7083 13.8723 11.7097 13.8407 11.7097 13.8091C11.7097 13.5001 11.5706 13.2254 11.3549 13.0359V8.16256H21.2904V18.4529H11.3549V17.7592ZM4.93688 12.7755C4.36701 12.7755 3.90323 13.2392 3.90323 13.8091C3.90323 13.8407 3.90465 13.8723 3.90749 13.9028L4.28894 18.0981H0.709679V8.87224H9.22582V12.7755H4.93688ZM2.48388 1.42062H7.45163V2.83997H2.48388V1.42062ZM0.709679 7.48411C0.709679 6.91246 0.987518 6.37275 1.45271 6.04027L3.19355 4.79691V3.54965H6.74195V4.79691L8.48279 6.04027C8.94798 6.37275 9.22582 6.91246 9.22582 7.48411V8.16256H0.709679V7.48411ZM0.709679 20.2271V18.8077H4.35352L4.5501 20.9687C4.56039 21.0833 4.59162 21.1901 4.63243 21.2916H1.7742C1.18729 21.2916 0.709679 20.814 0.709679 20.2271ZM9.93231 21.2916H7.09679H5.68062C5.45885 21.2916 5.27682 21.1252 5.25694 20.9045L4.61291 13.8091C4.61291 13.6306 4.7584 13.4852 4.93688 13.4852H10.6761C10.8545 13.4852 11 13.6306 10.9986 13.8386L10.356 20.9045C10.3361 21.1252 10.1541 21.2916 9.93231 21.2916ZM20.2258 21.2916H12.4194C11.8325 21.2916 11.3549 20.814 11.3549 20.2271V19.1626H21.2904V20.2271C21.2904 20.814 20.8127 21.2916 20.2258 21.2916Z" fill="#00548E"/><path d="M14.1914 4.25794H14.9011C14.9011 3.47517 15.5377 2.83858 16.3204 2.83858C17.1032 2.83858 17.7398 3.47517 17.7398 4.25794H18.4495C18.4495 3.08378 17.4946 2.12891 16.3204 2.12891C15.1463 2.12891 14.1914 3.08378 14.1914 4.25794Z" fill="#00548E"/><path d="M16.3206 0.709679C18.2772 0.709679 19.869 2.30149 19.869 4.25807H20.5786C20.5786 1.9101 18.6685 0 16.3206 0C13.9726 0 12.0625 1.9101 12.0625 4.25807H12.7722C12.7722 2.30149 14.364 0.709679 16.3206 0.709679Z" fill="#00548E"/><path d="M17.7411 19.8711H14.9023V20.5808H17.7411V19.8711Z" fill="#00548E"/><path d="M2.12765 16.6797H1.41797V17.3894H2.12765V16.6797Z" fill="#00548E"/><path d="M2.12765 9.58203H1.41797V15.9691H2.12765V9.58203Z" fill="#00548E"/><path d="M12.7722 17.0312H12.0625V17.7409H12.7722V17.0312Z" fill="#00548E"/><path d="M12.7722 8.87109H12.0625V16.3227H12.7722V8.87109Z" fill="#00548E"/><path d="M9.57825 15.2572C9.57825 15.6486 9.25996 15.9669 8.86858 15.9669C8.47719 15.9669 8.1589 15.6486 8.1589 15.2572V14.9023H7.44922V15.2572C7.44922 16.04 8.0858 16.6765 8.86858 16.6765C9.65135 16.6765 10.2879 16.04 10.2879 15.2572V14.9023H9.57825V15.2572Z" fill="#00548E"/><path d="M6.74421 17.3867C6.1573 17.3867 5.67969 17.8643 5.67969 18.4512C5.67969 19.0381 6.1573 19.5158 6.74421 19.5158C7.33111 19.5158 7.80872 19.0381 7.80872 18.4512C7.80872 17.8643 7.33111 17.3867 6.74421 17.3867ZM6.74421 18.8061C6.54869 18.8061 6.38937 18.6468 6.38937 18.4512C6.38937 18.2557 6.54869 18.0964 6.74421 18.0964C6.93972 18.0964 7.09904 18.2557 7.09904 18.4512C7.09904 18.6468 6.93972 18.8061 6.74421 18.8061Z" fill="#00548E"/></svg>`,HOGAR:je`<svg width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.9352 2.41868C20.7983 2.29268 20.5851 2.30167 20.4592 2.43877C20.3332 2.57588 20.3422 2.78913 20.4792 2.91512C21.6506 3.99238 22.3238 5.52275 22.3262 7.11381C22.3301 9.74791 20.3701 12.4973 18.5568 14.4184V11.1268C19.1829 11.302 19.8043 10.8312 19.8043 10.1802V9.22059C19.8043 8.69605 19.4734 8.22312 18.9808 8.04367L12.7075 5.75888C11.9307 5.47591 11.075 5.47591 10.2981 5.75888L8.75426 6.32113V4.62786C8.75426 4.26299 8.55463 3.94415 8.25908 3.77428C8.72308 3.32877 9.13434 2.7885 9.31268 2.23604C10.0793 2.69585 10.7301 3.32949 11.2104 4.08961C11.2722 4.18734 11.3796 4.24658 11.4952 4.24658H11.4957C11.6114 4.2464 11.7189 4.18684 11.7805 4.0888C12.8318 2.41414 14.6368 1.41258 16.6087 1.40961H16.6176C17.5376 1.40961 18.4157 1.62183 19.2277 2.04037C19.3931 2.1256 19.5963 2.06055 19.6815 1.89504C19.7667 1.72953 19.7017 1.52622 19.5363 1.44094C18.6405 0.979248 17.6315 0.735342 16.6172 0.735342H16.6076C14.5716 0.738399 12.6949 1.69344 11.494 3.31393C10.9358 2.56752 10.2211 1.95132 9.39893 1.50909C9.26435 0.13187 7.6034 -0.485987 6.59953 0.441899C5.66376 -0.417751 4.14716 0.0527552 3.8447 1.27656C1.54972 2.27187 -0.00381134 4.54884 7.02299e-06 7.14716C0.00409492 9.85791 1.95555 13.1753 5.35403 16.2489C5.49221 16.3739 5.70532 16.3628 5.82989 16.2248C5.95463 16.0867 5.9439 15.8735 5.80585 15.7487C5.57185 15.537 5.34446 15.3225 5.12268 15.1062V10.8848L11.0781 8.71579C11.352 8.61599 11.6537 8.61599 11.9275 8.71579L17.883 10.8848V15.1038C16.9684 15.9973 15.9587 16.8445 14.9251 17.5882V15.1152C14.9251 14.3635 14.314 13.752 13.5628 13.752H9.44282C8.69159 13.752 8.08043 14.3635 8.08043 15.1152V17.582C7.72784 17.3298 7.37754 17.0653 7.03339 16.791C6.8878 16.6751 6.67586 16.6991 6.55996 16.8447C6.44401 16.9903 6.46805 17.2025 6.61359 17.3184C7.74846 18.2228 8.9503 19.0252 10.0892 19.639C10.9847 20.1217 12.0535 20.1204 12.948 19.6348C15.3497 18.3312 17.7998 16.3479 19.6703 14.1936C22.4263 11.0191 23.0022 8.59087 23 7.11277C22.9974 5.33391 22.2448 3.62297 20.9352 2.41868ZM14.2513 18.0559C13.7087 18.4189 13.1638 18.7506 12.6268 19.0421C11.9329 19.4187 11.1037 19.4199 10.4087 19.0454C9.86742 18.7537 9.31098 18.4174 8.75426 18.0469V15.1152C8.75426 14.7353 9.06314 14.4263 9.44282 14.4263H13.5628C13.9424 14.4263 14.2513 14.7353 14.2513 15.1152V18.0559ZM5.46822 0.677714C5.47285 0.678928 6.00598 0.654789 6.31558 1.1448C6.44837 1.35495 6.75456 1.35275 6.8856 1.14395C7.20126 0.641124 7.72856 0.675557 7.73314 0.674343C8.28002 0.674343 8.73243 1.11612 8.73328 1.67366C8.73409 2.22638 8.19503 3.00885 7.38248 3.64397H5.82324C5.0106 3.01172 4.47037 2.23177 4.46956 1.68C4.46871 1.12691 4.91537 0.678523 5.46822 0.677714ZM8.08048 4.62791V6.56657L5.12268 7.64383V4.62791C5.12268 4.45718 5.26149 4.31828 5.43215 4.31828H7.77105C7.94167 4.31828 8.08048 4.45718 8.08048 4.62791ZM4.44881 14.4228C2.64649 12.5167 0.677744 9.76203 0.673836 7.14613C0.670557 4.92467 1.93893 2.9714 3.83302 2.02563C3.96329 2.65018 4.42051 3.27235 4.94465 3.77397C4.64875 3.94375 4.44885 4.26281 4.44885 4.62791V7.88926L4.02488 8.04367C3.53226 8.22307 3.20132 8.69605 3.20132 9.22059V10.1802C3.20132 10.8299 3.82143 11.3026 4.44885 11.1269V14.4228H4.44881ZM12.158 8.0822C11.7356 7.92837 11.2702 7.92833 10.8477 8.0822L4.28965 10.4706C4.08786 10.5441 3.87511 10.395 3.87511 10.1802V9.22054C3.87511 8.97839 4.02789 8.76006 4.25528 8.67726L10.5286 6.39247C11.1568 6.16363 11.8488 6.16363 12.4771 6.39247L18.7504 8.67726C18.9778 8.76006 19.1306 8.97839 19.1306 9.22054V10.1802C19.1306 10.3946 18.9181 10.5443 18.716 10.4706L12.158 8.0822ZM13.9851 11.4998C13.9851 11.3445 14.1113 11.2182 14.2665 11.2182C14.4217 11.2182 14.548 11.3446 14.548 11.4998C14.548 11.686 14.6988 11.837 14.8849 11.837C15.071 11.837 15.2218 11.686 15.2218 11.4998C15.2218 10.9727 14.7933 10.544 14.2665 10.544C13.7397 10.544 13.3112 10.9728 13.3112 11.4998C13.3112 11.686 13.4621 11.837 13.6481 11.837C13.8343 11.837 13.9851 11.686 13.9851 11.4998ZM13.0988 16.2736C12.9087 16.2736 12.7546 16.4277 12.7546 16.6179C12.7546 16.8081 12.9087 16.9623 13.0988 16.9623C13.2889 16.9623 13.4429 16.8081 13.4429 16.6179C13.4429 16.4277 13.2889 16.2736 13.0988 16.2736ZM11.5028 12.8592C11.8516 12.8592 12.1832 12.7081 12.4127 12.4445C12.535 12.3042 12.5203 12.0912 12.38 11.9689C12.2397 11.8466 12.0269 11.8612 11.9047 12.0016C11.8032 12.1182 11.6567 12.185 11.5028 12.185C11.3489 12.185 11.2023 12.1182 11.1008 12.0016C10.9786 11.8612 10.7657 11.8466 10.6254 11.969C10.4852 12.0913 10.4706 12.3043 10.5928 12.4446C10.8225 12.7081 11.1541 12.8592 11.5028 12.8592ZM8.45768 11.4998C8.45768 11.3445 8.58396 11.2182 8.73912 11.2182C8.89428 11.2182 9.02056 11.3446 9.02056 11.4998C9.02056 11.686 9.1714 11.837 9.35747 11.837C9.54354 11.837 9.69439 11.686 9.69439 11.4998C9.69439 10.9727 9.26583 10.544 8.73912 10.544C8.21237 10.544 7.78386 10.9728 7.78386 11.4998C7.78386 11.686 7.9347 11.837 8.12077 11.837C8.30684 11.837 8.45768 11.686 8.45768 11.4998Z" fill="#00548E"/></svg>`,SEGURIDAD:je`<svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.7466 3.45356C13.9948 2.69957 11.2269 1.52555 8.74205 0.0584471C8.61006 -0.0194824 8.44627 -0.0194824 8.31432 0.0584471C5.75776 1.5677 3.13941 2.67821 0.30953 3.45356C0.126718 3.5036 0 3.66977 0 3.85934V8.158C0 12.5847 2.04214 15.5148 3.75534 17.1934C5.59971 19.0006 7.74815 20 8.52818 20C9.30814 20 11.4566 19.0006 13.3009 17.1934C15.0141 15.5149 17.0561 12.5847 17.0561 8.158V3.8593C17.0561 3.66977 16.9294 3.5036 16.7466 3.45356ZM16.2147 8.15796C16.2147 12.2924 14.31 15.0266 12.712 16.5923C10.8983 18.3695 8.95916 19.1585 8.52818 19.1585C8.09721 19.1585 6.15792 18.3695 4.34417 16.5923C2.74624 15.0266 0.841443 12.2924 0.841443 8.15796V4.17867C3.54761 3.41031 6.06784 2.33801 8.52826 0.908211C10.9272 2.30008 13.5732 3.4257 16.2147 4.17852V8.15796Z" fill="#00548E"/><path d="M4.7973 4.12992C4.71214 3.9137 4.46788 3.80749 4.25163 3.89269C3.50007 4.18882 2.72867 4.4614 1.95887 4.70288C1.78344 4.75796 1.66406 4.92046 1.66406 5.10429V6.72893C1.66406 6.96128 1.85246 7.14963 2.08476 7.14963C2.31707 7.14963 2.50547 6.96128 2.50547 6.72893V5.41175C3.19605 5.18831 3.88589 4.94116 4.56007 4.6755C4.77628 4.59038 4.88249 4.34613 4.7973 4.12992Z" fill="#00548E"/><path d="M5.60135 4.21121C5.6578 4.21121 5.7151 4.19985 5.77006 4.17586L5.7778 4.1725C5.99065 4.07922 6.08651 3.83145 5.99323 3.61868C5.89987 3.40583 5.65069 3.30954 5.43807 3.40274L5.43127 3.40567C5.21831 3.49868 5.12213 3.74625 5.21514 3.95914C5.28416 4.11719 5.43905 4.21121 5.60135 4.21121Z" fill="#00548E"/><path d="M13.5426 13.5646C13.3482 13.4376 13.0875 13.4922 12.9603 13.6867C12.6136 14.2173 12.2069 14.7255 11.7513 15.1968C11.3766 15.5844 10.9706 15.9457 10.5445 16.2705C10.3598 16.4113 10.3242 16.6753 10.465 16.8601C10.5479 16.9687 10.6732 17.0258 10.7999 17.0258C10.8889 17.0258 10.9785 16.9977 11.0547 16.9396C11.5143 16.5891 11.9522 16.1996 12.3561 15.7817C12.8488 15.2721 13.289 14.7221 13.6647 14.1469C13.7918 13.9524 13.7371 13.6917 13.5426 13.5646Z" fill="#00548E"/><path d="M9.56619 16.9288L9.54205 16.943C9.341 17.0595 9.27229 17.3168 9.38869 17.5179C9.4667 17.6526 9.60791 17.7278 9.75318 17.7278C9.82467 17.7278 9.89725 17.7096 9.96353 17.6711L9.99139 17.6548C10.1919 17.5373 10.2592 17.2796 10.1418 17.0791C10.0243 16.8787 9.76658 16.8115 9.56619 16.9288Z" fill="#00548E"/><path d="M5.65889 9.1414C5.40057 8.88304 5.05702 8.74085 4.69163 8.74085C4.32624 8.74085 3.98264 8.88308 3.72421 9.1414C3.19089 9.67483 3.19089 10.5428 3.72421 11.0762L6.20842 13.5603C6.46678 13.8186 6.81033 13.9608 7.17576 13.9608C7.54119 13.9608 7.88474 13.8186 8.14314 13.5603L13.3291 8.37425C13.8624 7.8407 13.8624 6.97285 13.329 6.43961C13.0707 6.18125 12.7271 6.03906 12.3616 6.03906C11.9962 6.03906 11.6527 6.18129 11.3943 6.43961L7.17572 10.6582L5.65889 9.1414ZM11.9893 7.03461C12.0887 6.93519 12.221 6.88047 12.3617 6.88047C12.5025 6.88047 12.6347 6.93519 12.7341 7.03461C12.9394 7.23988 12.9394 7.57402 12.7341 7.77937L7.54818 12.9653C7.44877 13.0647 7.31646 13.1194 7.17576 13.1194C7.03506 13.1194 6.90275 13.0647 6.8033 12.9653L4.31917 10.4812C4.11382 10.2759 4.11382 9.94175 4.31909 9.73648C4.41854 9.63706 4.55085 9.58226 4.69159 9.58226C4.83233 9.58226 4.96456 9.63698 5.06397 9.7364L6.87822 11.5507C6.95717 11.6296 7.06412 11.6739 7.17572 11.6739C7.28732 11.6739 7.39428 11.6296 7.47314 11.5507L11.9893 7.03461Z" fill="#00548E"/></svg>`,MUJERES:je`<svg width="14" height="21" viewBox="0 0 14 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.53324 20.3577H5.04827V18.3104H3.00535V14.9761H5.04827V11.8758C3.96672 11.4664 3.00535 10.8229 2.22423 9.94546C1.38303 8.95104 0.902344 7.66413 0.902344 6.37722C0.902344 3.21845 3.54612 0.703125 6.73067 0.703125C9.91522 0.703125 12.6191 3.27694 12.6191 6.37722C12.6191 7.66413 12.1384 8.95104 11.2972 9.94546C10.5762 10.8229 9.5547 11.4664 8.47316 11.8173V14.9176H10.5161V18.2519H8.47316V20.3577H8.53324ZM5.94955 19.4803H7.57187V17.5499H9.85513V15.7366H7.57187V11.3494L7.8723 11.2324C8.95385 10.9984 9.9753 10.4134 10.6963 9.53599C11.4174 8.65856 11.838 7.54714 11.838 6.43572C11.838 3.74491 9.5547 1.52207 6.79076 1.52207C4.02681 1.52207 1.74355 3.74491 1.74355 6.43572C1.74355 7.54714 2.16415 8.65856 2.88518 9.53599C3.60621 10.4134 4.62767 10.9984 5.70921 11.2324L6.00964 11.3494V15.7366H3.72638V17.5499H5.94955V19.4803Z" fill="#00548E"/><path d="M3.30469 6.49432C3.30469 8.36619 4.86692 9.88708 6.78967 9.88708C8.71241 9.88708 10.2746 8.36619 10.2746 6.49432C10.2746 4.62245 8.71241 3.10156 6.78967 3.10156C4.86692 3.10156 3.30469 4.62245 3.30469 6.49432ZM3.90555 6.49432C3.90555 5.20741 4.80683 4.15449 6.00855 3.80351C5.76821 4.21298 5.64803 4.73944 5.64803 5.20741C5.64803 5.44139 5.58795 5.61688 5.46778 5.79237L5.10726 6.31883C5.04718 6.37733 5.04718 6.49432 5.04718 6.55282C5.04718 6.61131 5.10726 6.66981 5.16735 6.7283L5.58795 6.96229V7.48875C5.58795 8.1907 6.12872 8.71716 6.84975 8.71716H7.27035L7.57078 9.18513C7.33044 9.24362 7.03001 9.30212 6.78967 9.30212C5.22743 9.30212 3.90555 8.07371 3.90555 6.49432ZM8.17164 8.95114L7.75104 8.24919C7.69095 8.1907 7.57078 8.1322 7.5107 8.1322H6.90984C6.60941 8.1322 6.36907 7.95671 6.30898 7.72273C6.48924 7.72273 6.60941 7.60574 6.60941 7.43025C6.60941 7.25477 6.48924 7.13777 6.30898 7.13777H6.24889V6.7868C6.24889 6.66981 6.18881 6.61131 6.12872 6.55282L5.82829 6.37733L6.00855 6.14334C6.18881 5.85087 6.30898 5.55839 6.30898 5.26591C6.30898 4.85644 6.42915 4.50546 6.60941 4.15449C7.45061 4.38847 7.9313 5.20741 7.75104 5.96786C7.63087 6.49432 7.69095 7.07928 8.05147 7.60574C8.29181 7.95672 8.65233 8.24919 9.01284 8.42468C8.71241 8.65866 8.41198 8.83415 8.17164 8.95114ZM9.67379 6.49432C9.67379 7.02078 9.55361 7.48875 9.31327 7.89822C8.95276 7.78123 8.65233 7.54724 8.47207 7.25477C8.23173 6.90379 8.17164 6.49432 8.29181 6.08485C8.53216 5.09042 8.05147 4.15449 7.15018 3.68652C8.53215 3.86201 9.67379 5.09042 9.67379 6.49432Z" fill="#00548E"/></svg>`,MACRO:je`<svg width="23" height="12" viewBox="0 0 23 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.996093 1.139L0.996094 8.64877C0.996094 9.27693 1.50712 9.78795 2.13532 9.78795L10.8459 9.78795C10.9368 9.85481 11.0838 9.96608 11.2276 10.075C11.7604 10.4783 12.5657 11.0878 13.1379 11.4512C14.268 12.168 15.3972 12.1818 16.9138 11.4974C16.9244 11.4927 16.9348 11.4874 16.945 11.4818C16.945 11.4818 18.4947 10.6249 18.5626 10.5881C18.9623 10.3718 19.6313 10.0097 20.1571 10.0326C20.1632 10.0329 20.1693 10.033 20.1755 10.033L21.4226 10.033C22.0679 10.033 22.5928 9.50804 22.5928 8.86275L22.5928 5.05109C22.5928 4.40581 22.0679 3.88082 21.4226 3.88082L20.3299 3.8844C19.9093 3.88419 19.6877 3.82058 19.4073 3.74015C19.2159 3.68518 18.9988 3.62297 18.7048 3.5783C18.6972 3.57716 18.6896 3.57619 18.6819 3.57547C18.0343 3.51308 17.4089 3.68139 16.7467 3.85956C16.371 3.96067 15.97 4.06853 15.5265 4.14576L15.5265 1.13896C15.5265 0.510799 15.0155 -0.000226634 14.3873 -0.000226606L10.1558 -0.000226421C9.92289 -0.000226411 9.734 0.18866 9.734 0.421585C9.734 0.654509 9.92289 0.843396 10.1558 0.843396L14.3872 0.843396C14.5502 0.843396 14.6828 0.976014 14.6828 1.13896L14.6828 2.13401L1.83972 2.13402L1.83972 1.139C1.83972 0.976056 1.97233 0.843439 2.13532 0.843439L6.36677 0.843439C6.59969 0.843439 6.78858 0.654551 6.78858 0.421628C6.78858 0.188703 6.59969 -0.000184304 6.36677 -0.000184294L2.13532 -0.000184109C1.50712 -0.000184081 0.996093 0.51084 0.996093 1.139H0.996093ZM21.7492 5.05114L21.7492 8.86279C21.7492 9.03987 21.5996 9.18944 21.4226 9.18944L20.184 9.18944C19.4281 9.16047 18.6354 9.58945 18.161 9.8462C18.0961 9.88134 16.5512 10.7356 16.5512 10.7356C15.3012 11.2965 14.4699 11.297 13.59 10.739C13.2053 10.4947 12.6976 10.1239 12.2485 9.78795L14.3873 9.78795C15.0155 9.78795 15.5265 9.27693 15.5265 8.64877L15.5265 7.29627L16.934 7.29627C17.167 7.29627 17.3558 7.10742 17.3558 6.87446C17.3558 6.64149 17.167 6.45265 16.934 6.45265L12.4921 6.45265C12.1116 6.45265 11.802 6.14308 11.802 5.76252C11.802 5.57739 11.8751 5.40272 12.0079 5.27069C12.1384 5.14098 12.3095 5.07012 12.4896 5.07121C12.6342 5.0721 13.5853 5.07429 14.0267 5.09121C14.4172 5.10618 14.7803 5.08965 15.1194 5.05375C15.1439 5.05291 15.3938 5.02018 15.4917 5.00529C16.05 4.92025 16.5375 4.78957 16.9659 4.67425C17.5729 4.51092 18.0977 4.36966 18.5898 4.4142C18.824 4.45052 18.9944 4.49941 19.1746 4.55112C19.4778 4.6381 19.7914 4.72807 20.3321 4.72807C20.3335 4.72807 20.335 4.72807 20.3364 4.72803L21.4225 4.72448C21.5996 4.72448 21.7492 4.87406 21.7492 5.05114ZM14.6829 2.97764L14.6829 4.2429C14.4836 4.25374 12.6381 4.22843 12.4946 4.22759C12.0882 4.22519 11.7041 4.38315 11.4132 4.67243C11.1199 4.96399 10.9584 5.35117 10.9584 5.76256C10.9584 6.60825 11.6464 7.29631 12.4921 7.29631L14.6829 7.29631L14.6829 8.64881C14.6829 8.8118 14.5502 8.94437 14.3873 8.94437L2.13532 8.94437C1.97233 8.94437 1.83972 8.81175 1.83972 8.64881L1.83972 2.97764L14.6829 2.97764Z" fill="#00548E"/><path d="M7.83984 0.421938C7.83984 0.654863 8.02873 0.84375 8.26166 0.84375L8.26284 0.84375C8.49576 0.84375 8.68406 0.654863 8.68406 0.421938C8.68406 0.189014 8.49458 0.000126929 8.26161 0.000126939C8.02865 0.00012695 7.83984 0.189014 7.83984 0.421938Z" fill="#00548E"/></svg>`,BOLSATRABAJO:je`<svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.05 2.83333H13.9333V1.57407C13.9323 0.705105 13.2241 0.00107603 12.35 0H6.65C5.77592 0.00107603 5.06775 0.705105 5.06667 1.57407V2.83333H0.95C0.425366 2.83333 0 3.25621 0 3.77778V10.7855C0.00201009 11.1848 0.255127 11.5401 0.633333 11.6743V16.0556C0.633333 16.5771 1.0587 17 1.58333 17H17.4167C17.9413 17 18.3667 16.5771 18.3667 16.0556V11.6746C18.7449 11.5402 18.9981 11.1848 19 10.7855V3.77778C19 3.25621 18.5746 2.83333 18.05 2.83333ZM5.7 1.57407C5.7 1.05251 6.12537 0.62963 6.65 0.62963H12.35C12.8746 0.62963 13.3 1.05251 13.3 1.57407V2.83333H12.6667V1.57407C12.6667 1.40022 12.5249 1.25926 12.35 1.25926H6.65C6.47512 1.25926 6.33333 1.40022 6.33333 1.57407V2.83333H5.7V1.57407ZM12.0333 2.83333H6.96667V1.88889H12.0333V2.83333ZM17.7333 16.0556C17.7333 16.2294 17.5915 16.3704 17.4167 16.3704H1.58333C1.40846 16.3704 1.26667 16.2294 1.26667 16.0556V11.7825L8.23333 12.7377V13.537C8.23333 14.0586 8.6587 14.4815 9.18333 14.4815H9.81667C10.3413 14.4815 10.7667 14.0586 10.7667 13.537V12.7377L17.7333 11.7825V16.0556ZM10.1333 13.537C10.1333 13.7109 9.99154 13.8519 9.81667 13.8519H9.18333C9.00846 13.8519 8.86667 13.7109 8.86667 13.537V11.6481C8.86667 11.4743 9.00846 11.3333 9.18333 11.3333H9.81667C9.99154 11.3333 10.1333 11.4743 10.1333 11.6481V13.537ZM18.3667 10.7855C18.3668 10.9424 18.2507 11.0755 18.0944 11.0975L18.0066 11.1095L10.7667 12.1021V11.6481C10.7667 11.1266 10.3413 10.7037 9.81667 10.7037H9.18333C8.6587 10.7037 8.23333 11.1266 8.23333 11.6481V12.1021L0.905933 11.0975C0.749609 11.0757 0.633179 10.9426 0.633333 10.7855V3.77778C0.633333 3.60392 0.775122 3.46296 0.95 3.46296H18.05C18.2249 3.46296 18.3667 3.60392 18.3667 3.77778V10.7855Z" fill="#00548E"/></svg>`,MAILENVIO:je`<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" ><g><path d="M20,4H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h9v-2H4V8l8,5l8-5v5h2V6C22,4.9,21.1,4,20,4z M12,11L4,6h16L12,11z M19,15l4,4 l-4,4v-3h-4v-2h4V15z"/></g></svg>`,CAMARA:je`<svg width="48" height="43" viewBox="0 0 48 43" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M43.5826 22.3705C43.7696 21.6727 43.4982 20.969 42.8912 20.5775C42.284 20.186 41.5311 20.229 40.9726 20.6873L36.8708 24.0525L34.1071 23.3267C34.0623 20.7375 32.3184 18.3779 29.6954 17.6751L26.4973 16.8182C26.1236 16.7184 25.7397 16.9398 25.6396 17.3135C25.5395 17.6871 25.7611 18.0711 26.1347 18.1712L29.3329 19.0282C31.7586 19.6781 33.2032 22.1804 32.5533 24.606L30.0958 33.7775C29.5512 35.8099 27.7063 37.1537 25.6956 37.1535C25.3066 37.1535 24.9111 37.1031 24.5179 36.9978L7.94088 32.556C6.76584 32.2411 5.78371 31.4876 5.17555 30.434C4.56721 29.3805 4.40567 28.1531 4.72053 26.9781L7.17791 17.8067C7.52228 16.5219 8.38955 15.48 9.55657 14.9049L10.0841 18.3002C9.26206 19.1759 8.7569 20.3525 8.7569 21.6455C8.7569 24.3433 10.9518 26.5381 13.6495 26.5381C16.3472 26.5381 18.542 24.3433 18.542 21.6455C18.542 20.5465 18.1776 19.531 17.5636 18.7133L17.987 15.9881L22.9641 17.3217C23.0247 17.338 23.0858 17.3457 23.1458 17.3457C23.455 17.3457 23.738 17.1394 23.8217 16.8265C23.9218 16.4529 23.7001 16.0689 23.3265 15.9687L18.2033 14.596L18.5125 12.6059H25.1815C26.5881 12.6059 27.7325 11.4615 27.7325 10.0549V2.55094C27.7325 1.14442 26.5881 0 25.1815 0H9.71699C9.33013 0 9.01667 0.313556 9.01667 0.70032C9.01667 1.08708 9.33013 1.40064 9.71699 1.40064H25.1816C25.8159 1.40064 26.3319 1.91664 26.3319 2.55094V10.0548C26.3319 10.6891 25.8159 11.2051 25.1816 11.2051H18.7303L19.5764 5.75999C19.8411 4.31883 18.6087 2.78223 17.039 2.79783H10.6729C9.20809 2.75758 7.87897 4.21126 8.13548 5.75999L8.98165 11.2051H2.55094C1.91664 11.2051 1.40064 10.6891 1.40064 10.0548V2.55094C1.40064 1.91673 1.91664 1.40064 2.55094 1.40064H6.44696C6.83382 1.40064 7.14728 1.08708 7.14728 0.70032C7.14728 0.313556 6.83382 0 6.44696 0H2.55094C1.14442 0 0 1.14432 0 2.55094V10.0548C0 11.4614 1.14442 12.6058 2.55094 12.6058H9.19922L9.33331 13.4686C7.85003 14.0696 6.68731 15.2256 6.07906 16.6955L4.90075 16.3798C3.53288 16.0133 2.12216 16.8279 1.75575 18.1956L0.0879602 24.4201C-0.271818 25.6476 0.513381 27.2267 1.90356 27.5651L3.16956 27.9043C3.11979 29.0253 3.38777 30.1391 3.96232 31.1343C4.7576 32.5118 6.0418 33.4971 7.57812 33.9088L24.1552 38.3506C24.6696 38.4885 25.1862 38.5542 25.6951 38.5542C27.7834 38.5541 29.734 37.4448 30.8053 35.6569L33.622 36.3892L35.4339 41.3269C35.6747 41.9832 36.2684 42.3962 36.9597 42.3962C37.6172 42.4094 38.3504 41.9225 38.5407 41.1871L40.9495 32.1971C41.0496 31.8235 40.8279 31.4395 40.4543 31.3393C40.0805 31.2394 39.6967 31.4609 39.5966 31.8346L37.1877 40.8246C37.1516 40.9593 37.0523 40.9918 36.9755 40.9951C36.8983 40.9985 36.797 40.9753 36.7488 40.8443L34.8864 35.7689L37.6583 25.2182L41.8609 21.7701C41.9683 21.6822 42.0677 21.7131 42.1319 21.7546C42.1963 21.7961 42.2656 21.8737 42.2297 22.0079L40.4369 28.6986C40.3368 29.0722 40.5585 29.4562 40.9321 29.5564C41.3059 29.6565 41.6898 29.4348 41.7899 29.0611L43.5826 22.3705ZM13.6496 25.1374C11.7241 25.1374 10.1576 23.5709 10.1576 21.6454C10.1576 19.7199 11.7241 18.1534 13.6496 18.1534C15.575 18.1534 17.1415 19.7199 17.1415 21.6454C17.1415 23.5709 15.575 25.1374 13.6496 25.1374ZM9.78637 4.60633C10.0084 4.34712 10.3316 4.19846 10.6729 4.19846H17.0391C17.6653 4.20323 18.276 4.7492 18.1924 5.54485L16.3265 17.553C15.5567 17.0478 14.6372 16.7527 13.6497 16.7527C12.8191 16.7527 12.0365 16.9614 11.3507 17.3281L9.5195 5.54485C9.46711 5.20758 9.56441 4.86554 9.78637 4.60633ZM1.55751 25.6683C1.40157 25.3983 1.36021 25.0838 1.44089 24.7826L3.10867 18.5581C3.27526 17.9363 3.91666 17.566 4.53826 17.7328L5.66662 18.0351L3.39459 26.5145L2.26614 26.2121C1.965 26.1315 1.71336 25.9383 1.55751 25.6683ZM33.6534 34.9502L31.3845 34.3603C31.4692 34.0793 31.6987 33.2009 32.1354 31.577C33.0524 28.1348 33.7659 25.5315 33.9619 24.7368L36.1833 25.3202L33.6534 34.9502Z" fill="white"/><path d="M22.6854 27.3385C22.9947 27.3385 23.2776 27.1322 23.3613 26.8193L24.2803 23.3897C24.3804 23.0161 24.1587 22.6321 23.7851 22.5319C23.4115 22.4316 23.0274 22.6536 22.9273 23.0272L22.0084 26.4568C21.9083 26.8304 22.13 27.2144 22.5036 27.3146C22.5644 27.3308 22.6253 27.3385 22.6854 27.3385Z" fill="white"/><path d="M19.8416 26.5748C20.1509 26.5748 20.4338 26.3684 20.5176 26.0555L21.4366 22.6259C21.5367 22.2523 21.315 21.8682 20.9414 21.7681C20.5678 21.6682 20.1839 21.8898 20.0837 22.2633L19.1647 25.6929C19.0646 26.0665 19.2862 26.4506 19.6598 26.5507C19.7206 26.5669 19.7816 26.5748 19.8416 26.5748Z" fill="white"/><path d="M26.6289 23.2934C26.2552 23.1937 25.8713 23.415 25.7712 23.7886L24.8522 27.2182C24.7521 27.5918 24.9737 27.9759 25.3473 28.076C25.6333 28.1531 26.0565 28.0131 26.2051 27.5808L27.1241 24.1512C27.2242 23.7776 27.0025 23.3936 26.6289 23.2934Z" fill="white"/><path d="M28.3729 28.8618C28.6822 28.8618 28.9651 28.6555 29.0488 28.3426L29.9679 24.9129C30.068 24.5393 29.8463 24.1553 29.4727 24.0552C29.099 23.9554 28.715 24.1768 28.6149 24.5504L27.6959 27.98C27.5958 28.3536 27.8175 28.7376 28.1911 28.8377C28.2519 28.854 28.3128 28.8618 28.3729 28.8618Z" fill="white"/><path d="M13.6486 19.5469C12.4918 19.5469 11.5508 20.4879 11.5508 21.6447C11.5508 22.8014 12.4918 23.7425 13.6486 23.7425C14.8053 23.7425 15.7464 22.8014 15.7464 21.6447C15.7464 20.4879 14.8052 19.5469 13.6486 19.5469ZM13.6486 22.3418C13.2642 22.3418 12.9514 22.0291 12.9514 21.6447C12.9514 21.2602 13.2642 20.9475 13.6486 20.9475C14.0329 20.9475 14.3457 21.2602 14.3457 21.6447C14.3457 22.0291 14.0329 22.3418 13.6486 22.3418Z" fill="white"/><path d="M25.8277 34.1963C25.7204 34.2582 25.5953 34.2747 25.4756 34.2426L15.708 31.6254C15.3343 31.5256 14.9504 31.747 14.8503 32.1205C14.7502 32.4941 14.9719 32.8782 15.3455 32.9783L25.113 35.5955C25.2742 35.6387 25.4359 35.6593 25.5952 35.6593C26.4184 35.6593 27.1739 35.109 27.397 34.2768C27.6631 33.2835 27.0716 32.259 26.0784 31.9929L8.98055 27.4115C7.98656 27.1452 6.96278 27.737 6.69656 28.7302C6.43044 29.7235 7.02198 30.748 8.01513 31.0141L12.1932 32.1336C12.5669 32.2337 12.9508 32.012 13.0509 31.6383C13.151 31.2647 12.9293 30.8808 12.5557 30.7806L8.37771 29.6611C8.13054 29.5949 7.98319 29.3398 8.0494 29.0926C8.1157 28.8454 8.37117 28.698 8.61797 28.7643L25.7157 33.3456C25.8397 33.4017 26.0978 33.5062 26.044 33.9143C26.0119 34.0342 25.9352 34.1342 25.8277 34.1963Z" fill="white"/><path d="M47.7849 27.9836C47.6867 27.6096 47.3039 27.3858 46.9298 27.4841L44.0578 28.2379C43.6837 28.3361 43.4601 28.719 43.5583 29.0931C43.6408 29.4076 43.9245 29.6158 44.2351 29.6158C44.294 29.6158 44.3538 29.6084 44.4134 29.5927L47.2854 28.8389C47.6594 28.7406 47.8832 28.3577 47.7849 27.9836Z" fill="white"/><path d="M42.8219 35.5327C42.547 35.2606 42.1037 35.2628 41.8315 35.5377C41.5594 35.8126 41.5617 36.2561 41.8366 36.5281L43.9469 38.6169C44.0835 38.7521 44.2615 38.8195 44.4395 38.8195C44.6199 38.8195 44.8002 38.7503 44.9372 38.6119C45.2093 38.337 45.2071 37.8935 44.9322 37.6215L42.8219 35.5327Z" fill="white"/><path d="M45.958 32.4647L43.4678 31.7974C43.0942 31.6974 42.7102 31.9191 42.61 32.2927C42.5098 32.6663 42.7316 33.0503 43.1052 33.1505L45.5954 33.8177C45.6561 33.834 45.7172 33.8417 45.7771 33.8417C46.0864 33.8417 46.3693 33.6354 46.4531 33.3225C46.5533 32.9489 46.3316 32.5648 45.958 32.4647Z" fill="white"/><path d="M13.8549 9.80545C15.0133 9.80545 15.9558 8.863 15.9558 7.70448C15.9558 6.54596 15.0133 5.60352 13.8549 5.60352C12.6964 5.60352 11.7539 6.54596 11.7539 7.70448C11.7539 8.863 12.6964 9.80545 13.8549 9.80545ZM13.8549 7.00416C14.2411 7.00416 14.5552 7.31828 14.5552 7.70448C14.5552 8.09069 14.2411 8.40481 13.8549 8.40481C13.4687 8.40481 13.1546 8.09069 13.1546 7.70448C13.1546 7.31828 13.4687 7.00416 13.8549 7.00416Z" fill="white"/><path d="M24.9324 7.70448C24.9324 6.54596 23.9899 5.60352 22.8314 5.60352C21.673 5.60352 20.7305 6.54596 20.7305 7.70448C20.7305 8.863 21.673 9.80545 22.8314 9.80545C23.9899 9.80545 24.9324 8.863 24.9324 7.70448ZM22.1311 7.70448C22.1311 7.31828 22.4452 7.00416 22.8314 7.00416C23.2176 7.00416 23.5318 7.31828 23.5318 7.70448C23.5318 8.09069 23.2176 8.40481 22.8314 8.40481C22.4452 8.40481 22.1311 8.09069 22.1311 7.70448Z" fill="white"/><path d="M4.90175 5.60352C3.74332 5.60352 2.80078 6.54596 2.80078 7.70448C2.80078 8.863 3.74332 9.80545 4.90175 9.80545C6.06018 9.80545 7.00272 8.863 7.00272 7.70448C7.00272 6.54596 6.06018 5.60352 4.90175 5.60352ZM4.90175 8.40481C4.51554 8.40481 4.20143 8.09069 4.20143 7.70448C4.20143 7.31828 4.51554 7.00416 4.90175 7.00416C5.28795 7.00416 5.60207 7.31828 5.60207 7.70448C5.60207 8.09069 5.28795 8.40481 4.90175 8.40481Z" fill="white"/></svg>`,POSICION:je`<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z"/><circle cx="12" cy="9" r="2.5"/></svg>`};class oi extends(Qe(Zt,"ui.menuActivar","screen.timeStamp","ui.media.timeStamp","screen.timeStamp")(qe)){constructor(){super(),this.area="header",this.visible=!1,this.arrastrando=!1,this.addEventListener("gestures",this.gestos),this.current="",this.puntos=null}static get styles(){return Ye`
            ${ri}
            :host {
                display: grid;
                grid-auto-flow: column;
                padding: 0 !important;
                background-image: linear-gradient(to right, var(--color-azul-oscuro), var(--primary-color));
            }
            :host([hidden]) {
                display: none;
            }
            #tituloGeneral {
                height: 6vh;
				width: 40vw;
				background-image: url("https://www.uocra.net/App/images/redsocialsinleyenda.gif");
				background-repeat: no-repeat;
				background-position: center right;
                background-size: contain;   
                justify-self: flex-end;
            }
            #tituloMoecra {
                height: 6vh;
				width: 40vw;
				background-image: url("https://www.uocra.net/App/images/moecraLogo.gif");
				background-repeat: no-repeat;
				background-position: center right;
                background-size: contain;   
                justify-self: center;
            }
            div[oculto] {
                display: none;
            }
            h1 {
                margin: 0;
            }
            #opciones {
                justify-content: end;
                grid-gap: 0.6rem;
                padding: .6rem;
            }
            :host(:not([media-size="large"])) #opciones {
                position: fixed;
                top: 0;
                right: -100%;
                height: 100vh;
                width: 60%;
                grid-template-columns: repeat(auto-fit, minmax(3.4rem, 1fr));
                background-image: linear-gradient(to right, var(--primary-color), var(--color-azul-oscuro));
                align-content: start;
                transition: 0.5s all;
                display: grid;
                justify-items: normal;
                z-index: 100;
            }

            :host([media-size="large"]) .menu-button,
            :host([media-size="large"]) #velo {
                display: none;
            }

            #velo {
                position: fixed;
                top: 0;
                right: -100%;
                width: 100vw;
                height: 100vh;
                background-color: rgba(0, 0, 0, 0.3);
                z-index: 90;
            }

            .menu-button {
                cursor: pointer;
                stroke: transparent;
                fill: var(--color-blanco);
                display: grid;
                justify-self: flex-start;
            }

            :host([visible]) #velo {
                right: 0;
            }

            :host([arrastrando]) #opciones {
                position: absolute;
                transition: none;
            }
            .hola{
                color: var(--color-gris);
                font-size: 0.7rem;
                justify-self: flex-start; 
            }
            .menuItem {
                height:2.5rem;
                background-color: var(--color-blanco);
                color: var(--primary-color);
                cursor: pointer;
                font-size: .5rem;
                border-radius: .4rem;
                padding: 0.2vh 0 .2vh 0;
                grid-gap: 0 !important;
                justify-items: center;
            }
            #carrito{
                justify-self: flex-end; 
            }
            #svgTeatro,#svgMisindicato,#svgSalud,#svgCursos,#svgTeatro,#svgTv,#svgCine
            ,#svgArte,#svgVivienda,#svgDeporte,#svgTurismo,#svgBeneficio,#svgSeccional,#svgCompra,#svgEmpresa,#svgDenuncia
            {
                height: 1.5rem;
                width: 1.5rem;
                stroke: transparent;
                fill: var(--primary-color);
            }
            #svgCarrito{
                height: 1.5rem;
                width: 1.5rem;
                stroke: transparent;
                fill: var(--color-blanco);
            }
            *[hidden] {
                display: none;
            }
        `}render(){if(this.puntos)return Ie`
            <div id="velo" @click=${this.toggleMenu}></div>
            <div class="grid column" >
                <div class="grid column" style="justify-content: flex-start;">
                    <div class="menu-button" @click=${this.toggleMenu}>${ni.MENU}</div>
                    <div class="grid row gridGapPunto2vh" ?hidden="${"compras"==this.current}">
                        <div class="hola">Hola,</div>
                        <div class="hola">Gerardo!</div>     
                    </div>
                </div>
                <div id="tituloGeneral" ?hidden="${"compras"==this.current}"></div>
                <div id="tituloMoecra" ?hidden="${"compras"!=this.current}"></div>
                <div id="carrito" ?hidden="${"compras"!=this.current}">${ni.CARRITO}</div>
            </div>

            <div id="opciones" class="grid fit" @click=${this.toggleMenu}>
                <div class="menu-button">${ni.RIGHT}</div>
                ${this.puntos.map(t=>Ie` 
                        <div class="menuItem grid row" @click=${this.click} .option="${t.accion}">
                            <div >${ni[t.imagen]}</div>
                            <div >${t.nombre}</div>         
                        </div>
                    `)}
            </div>
        `}gestos(t){"large"!=this.mediaSize&&("move"==t.detail.ACTION&&t.detail.dx>0&&(this.arrastrando=!0,this.opciones.style.right=-t.detail.dx+"px"),"end"==t.detail.ACTION&&t.detail.LEFT_TO_RIGHT&&(this.arrastrando=!1,t.detail.dx>40?this.toggleMenu():(this.opciones.style.right="0",this.update())))}toggleMenu(){this.visible=!this.visible,this.opciones.style.right=this.visible?"0":"-100%",this.update()}click(t){""!=t.currentTarget.option&&Zt.dispatch(M(t.currentTarget.option))}stateChanged(t,e){this.current=t.screen.name,"screen.timeStamp"!=e&&"ui.media.timeStamp"!=e||(this.mediaSize=t.ui.media.size,this.hidden=!0,x(t,this.area)&&(this.opciones=this.shadowRoot.querySelector("#opciones"),((t,e,i)=>{let r=0,n=0;const o=e=>{if(e.changedTouches.length>0){r=e.changedTouches[0].pageX,n=e.changedTouches[0].pageY;let i={RIGHT_TO_LEFT:!1,LEFT_TO_RIGHT:!1,DOWN:!1,UP:!1,FINGERS:e.changedTouches.length,ACTION:"start",x:e.changedTouches[0].pageX,y:e.changedTouches[0].pageY,dx:0,dy:0};const o=new CustomEvent("gestures",{detail:i});t.dispatchEvent(o)}},a=e=>{let i={RIGHT_TO_LEFT:!1,LEFT_TO_RIGHT:!1,DOWN:!1,UP:!1,FINGERS:e.changedTouches.length,ACTION:"move",x:e.changedTouches[0].pageX,y:e.changedTouches[0].pageY,dx:e.changedTouches[0].pageX-r,dy:e.changedTouches[0].pageY-n};const o=new CustomEvent("gestures",{detail:i});t.dispatchEvent(o)},s=e=>{if(e.changedTouches.length>0){let i={RIGHT_TO_LEFT:r>e.changedTouches[0].pageX,LEFT_TO_RIGHT:r<e.changedTouches[0].pageX,DOWN:n<e.changedTouches[0].pageY,UP:n>e.changedTouches[0].pageY,FINGERS:e.changedTouches.length,ACTION:"end",x:e.changedTouches[0].pageX,y:e.changedTouches[0].pageY,dx:e.changedTouches[0].pageX-r,dy:e.changedTouches[0].pageY-n};r=0,n=0;const o=new CustomEvent("gestures",{detail:i});t.dispatchEvent(o)}},c=t=>{};t.__hasGestures||(t.addEventListener("touchstart",o,!1),t.addEventListener("touchmove",a,!1),t.addEventListener("touchcancel",c,!1),t.addEventListener("touchend",s,!1),t.addEventListener("gestures",e.bind(i)),t.__hasGestures=!0)})(this.opciones,this.gestos,this),this.hidden=!1),this.update()),"screen.timeStamp"==e&&(this.puntos=t.leftmenu.entities),"ui.menuActivar"==e&&this.toggleMenu()}static get properties(){return{mediaSize:{type:String,reflect:!0,attribute:"media-size"},layout:{type:String,reflect:!0},hidden:{type:Boolean,reflect:!0},area:{type:String},visible:{type:Boolean,reflect:!0},arrastrando:{type:Boolean,reflect:!0},current:{type:String,reflect:!0}}}}window.customElements.define("menu-principal",oi);class ai extends(Qe(Zt,"ui.error.messages")(qe)){constructor(){super()}render(){return Ie``}stateChanged(t,e){"screen.timeStamp"!=e&&"ui.media.timeStamp"!=e||(this.mediaSize=t.ui.media.size,this.update()),"ui.error.messages"==e&&alert("ERROR :\n\n"+t.ui.error.messages.reduce((t,e)=>t+"• "+e.campo+": "+e.mensaje+"\n",""))}}window.customElements.define("alerta-errores",ai);class si extends(Je(Zt,"api.loading")(qe)){constructor(){super(),this.oculto=!0,this.type="spinner1"}render(){return Ie` <style>
                :host {
                    position: fixed;
                    left: 50vw;
                    top: 50vh;
                    transform: translate(-50%, -50%);
                    z-index: 100000;
                    width: 3rem;
                    height: 3rem;
                }
                :host([hidden]) {
                    display: none;
                }

                .spinner1 {
                    width: 100%;
                    height: 100%;
                    border: 3px solid rgba(255, 255, 255, 0.25);
                    border-top-color: rgba(0, 0, 0, 0.5);
                    border-radius: 50%;
                    -webkit-animation: rotation 0.8s ease infinite;
                    animation: rotation 0.8s ease infinite;
                }
                .spinner2 {
                    width: 100%;
                    height: 100%;
                    border: 3px solid transparent;
                    border-top-color: var(--color-naranja);
                    border-bottom-color: var(--color-amarillo);
                    border-radius: 50%;
                    -webkit-animation: rotation 0.8s ease infinite;
                    animation: rotation 0.8s ease infinite;
                }
                .spinner3 {
                    width: 100%;
                    height: 100%;
                    border-top: 3px solid rgba(0, 0, 0, 0.5);
                    border-right: 3px solid transparent;
                    border-radius: 50%;
                    -webkit-animation: rotation 0.8s linear infinite;
                    animation: rotation 0.8s linear infinite;
                }
                .spinner4 {
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.5);
                    -webkit-animation: flip 1.2s ease infinite;
                    animation: flip 1.2s ease infinite;
                }
                .spinner5 {
                    width: 100%;
                    height: 100%;
                    margin-top: 2rem;
                    overflow: hidden;
                    position: relative;
                    height: 0.5rem;
                    background: rgba(255, 255, 255, 0.25);
                }
                .spinner5::before {
                    content: "";
                    position: absolute;
                    left: -130%;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.5);
                    -webkit-animation: progress 4s linear infinite;
                    animation: progress 4s linear infinite;
                }
                .spinner6 {
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    top: 45%;
                    left: 50%;
                    background: #fff;
                    border-radius: 50%;
                    -webkit-animation: pulse 1s ease-in-out infinite;
                    animation: pulse 1s ease-in-out infinite;
                    -webkit-transform: translate(-50%, -50%) scale(0);
                    transform: translate(-50%, -50%) scale(0);
                }
                .spinner7 {
                    width: 100%;
                    height: 100%;
                    position: relative;
                }
                .spinner7::before,
                .spinner7::after {
                    content: "";
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                    -webkit-transform: translate(-50%, -50%) scale(0);
                    transform: translate(-50%, -50%) scale(0);
                }
                .spinner7::before {
                    background: #fff;
                    -webkit-animation: pulse2 2s ease-in-out infinite;
                    animation: pulse2 2s ease-in-out infinite;
                }
                .spinner7::after {
                    background: #fff;
                    -webkit-animation: pulse2 2s 1s ease-in-out infinite;
                    animation: pulse2 2s 1s ease-in-out infinite;
                }
                .spinner8 {
                    width: 100%;
                    height: 100%;
                    position: relative;
                    -webkit-perspective: 200px;
                    perspective: 200px;
                }
                .spinner8::before {
                    display: block;
                    content: "";
                    width: 50%;
                    height: 50%;
                    background: rgba(0, 0, 0, 0.5);
                    -webkit-animation: 2s flipWalker ease infinite;
                    animation: 2s flipWalker ease infinite;
                }

                @-webkit-keyframes rotation {
                    from {
                        -webkit-transform: rotate(0deg);
                        transform: rotate(0deg);
                    }
                    to {
                        -webkit-transform: rotate(360deg);
                        transform: rotate(360deg);
                    }
                }

                @keyframes rotation {
                    from {
                        -webkit-transform: rotate(0deg);
                        transform: rotate(0deg);
                    }
                    to {
                        -webkit-transform: rotate(360deg);
                        transform: rotate(360deg);
                    }
                }
                @-webkit-keyframes flip {
                    0% {
                        -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg);
                        transform: perspective(120px) rotateX(0deg) rotateY(0deg);
                    }
                    50% {
                        -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(0deg);
                        transform: perspective(120px) rotateX(-180deg) rotateY(0deg);
                    }
                    100% {
                        -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-180deg);
                        transform: perspective(120px) rotateX(-180deg) rotateY(-180deg);
                    }
                }
                @keyframes flip {
                    0% {
                        -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg);
                        transform: perspective(120px) rotateX(0deg) rotateY(0deg);
                    }
                    50% {
                        -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(0deg);
                        transform: perspective(120px) rotateX(-180deg) rotateY(0deg);
                    }
                    100% {
                        -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-180deg);
                        transform: perspective(120px) rotateX(-180deg) rotateY(-180deg);
                    }
                }
                @-webkit-keyframes progress {
                    0% {
                        left: -130%;
                        background: rgba(0, 0, 0, 0.5);
                    }
                    50% {
                        left: 130%;
                        background: rgba(0, 0, 0, 0.5);
                    }
                    51% {
                        background: rgba(255, 255, 255, 0.5);
                    }
                    100% {
                        background: rgba(255, 255, 255, 0.5);
                    }
                }
                @keyframes progress {
                    0% {
                        left: -130%;
                        background: rgba(0, 0, 0, 0.5);
                    }
                    50% {
                        left: 130%;
                        background: rgba(0, 0, 0, 0.5);
                    }
                    51% {
                        background: rgba(255, 255, 255, 0.5);
                    }
                    100% {
                        background: rgba(255, 255, 255, 0.5);
                    }
                }
                @-webkit-keyframes pulse {
                    0% {
                        -webkit-transform: translate(-50%, -50%) scale(0);
                        transform: translate(-50%, -50%) scale(0);
                        opacity: 1;
                    }
                    100% {
                        -webkit-transform: translate(-50%, -50%) scale(1);
                        transform: translate(-50%, -50%) scale(1);
                        opacity: 0;
                    }
                }
                @keyframes pulse {
                    0% {
                        -webkit-transform: translate(-50%, -50%) scale(0);
                        transform: translate(-50%, -50%) scale(0);
                        opacity: 1;
                    }
                    100% {
                        -webkit-transform: translate(-50%, -50%) scale(1);
                        transform: translate(-50%, -50%) scale(1);
                        opacity: 0;
                    }
                }
                @-webkit-keyframes pulse2 {
                    0%,
                    100% {
                        -webkit-transform: translate(-50%, -50%) scale(0);
                        transform: translate(-50%, -50%) scale(0);
                        opacity: 1;
                    }
                    50% {
                        -webkit-transform: translate(-50%, -50%) scale(1);
                        transform: translate(-50%, -50%) scale(1);
                        opacity: 0;
                    }
                }
                @keyframes pulse2 {
                    0%,
                    100% {
                        -webkit-transform: translate(-50%, -50%) scale(0);
                        transform: translate(-50%, -50%) scale(0);
                        opacity: 1;
                    }
                    50% {
                        -webkit-transform: translate(-50%, -50%) scale(1);
                        transform: translate(-50%, -50%) scale(1);
                        opacity: 0;
                    }
                }
                @-webkit-keyframes flipWalker {
                    0% {
                        -webkit-transform: translate(0, 0) rotateX(0) rotateY(0);
                        transform: translate(0, 0) rotateX(0) rotateY(0);
                    }
                    25% {
                        -webkit-transform: translate(100%, 0) rotateX(0) rotateY(180deg);
                        transform: translate(100%, 0) rotateX(0) rotateY(180deg);
                    }
                    50% {
                        -webkit-transform: translate(100%, 100%) rotateX(-180deg) rotateY(180deg);
                        transform: translate(100%, 100%) rotateX(-180deg) rotateY(180deg);
                    }
                    75% {
                        -webkit-transform: translate(0, 100%) rotateX(-180deg) rotateY(360deg);
                        transform: translate(0, 100%) rotateX(-180deg) rotateY(360deg);
                    }
                    100% {
                        -webkit-transform: translate(0, 0) rotateX(0) rotateY(360deg);
                        transform: translate(0, 0) rotateX(0) rotateY(360deg);
                    }
                }
                @keyframes flipWalker {
                    0% {
                        -webkit-transform: translate(0, 0) rotateX(0) rotateY(0);
                        transform: translate(0, 0) rotateX(0) rotateY(0);
                    }
                    25% {
                        -webkit-transform: translate(100%, 0) rotateX(0) rotateY(180deg);
                        transform: translate(100%, 0) rotateX(0) rotateY(180deg);
                    }
                    50% {
                        -webkit-transform: translate(100%, 100%) rotateX(-180deg) rotateY(180deg);
                        transform: translate(100%, 100%) rotateX(-180deg) rotateY(180deg);
                    }
                    75% {
                        -webkit-transform: translate(0, 100%) rotateX(-180deg) rotateY(360deg);
                        transform: translate(0, 100%) rotateX(-180deg) rotateY(360deg);
                    }
                    100% {
                        -webkit-transform: translate(0, 0) rotateX(0) rotateY(360deg);
                        transform: translate(0, 0) rotateX(0) rotateY(360deg);
                    }
                }

                .spinner9 {
                    backface-visibility: hidden;
                    opacity: 0.7;
                    position: relative;
                    top: 50%;
                    left: 50%;
                    margin-top: -50px;
                    margin-left: -50px;
                    height: 100px;
                    width: 100px;
                    background: none;
                    border-radius: 100px;
                    border-top: 15px solid cyan;
                    border-bottom: 15px solid cyan;
                    border-left: 15px solid transparent;
                    border-right: 15px solid transparent;
                    animation: spin 10s infinite alternate linear, glow 5s infinite alternate linear;
                }

                .spinner9:before {
                    content: "";
                    display: block;
                    width: 100%;
                    height: 100%;
                    padding: 15px;
                    background: none;
                    position: relative;
                    top: -30px;
                    left: -30px;
                    z-index: -1;
                    border-radius: 115px;
                    border: 15px solid cyan;
                    border-top: 15px solid transparent;
                    border-bottom: 15px solid transparent;
                    animation: spin2 5s infinite alternate linear, glow 3s infinite alternate linear;
                }

                .spinner9:after {
                    content: "";
                    display: block;
                    width: 100%;
                    height: 100%;
                    padding: 30px;
                    background: none;
                    position: relative;
                    top: -205px;
                    left: -45px;
                    z-index: -2;
                    border-radius: 130px;
                    border: 15px solid cyan;
                    border-left: 15px solid transparent;
                    border-bottom: 15px solid transparent;
                    animation: spin 2s infinite alternate ease both, glow 10s infinite alternate linear;
                }

                @keyframes spin {
                    0% {
                        transform: rotate(360deg);
                    }
                    100% {
                        transform: rotate(0deg);
                    }
                }

                @keyframes spin2 {
                    0% {
                        transform: rotate(0deg);
                    }
                    100% {
                        transform: rotate(360deg);
                    }
                }

                @keyframes glow {
                    0% {
                        box-shadow: none;
                    }
                    50% {
                        box-shadow: 10px -10px 30px cyan, -10px 10px 30px cyan;
                    }
                    100% {
                        box-shadow: none;
                    }
                }
            </style>
            <div id="spinner" class="spinner ${this.type}"></div>`}stateChanged(t,e){this.oculto=0==t.api.loading}set oculto(t){t?this.setAttribute("hidden",""):this.removeAttribute("hidden")}static get properties(){return{type:{type:String,reflect:!0}}}}window.customElements.define("spinner-loading",si);const ci=Ye`
    button[btn1] {
        display: grid;
        grid-auto-flow: column;
        align-items: center;
        grid-gap: 0.3rem;
        cursor: pointer;
        color: var(--color-texto);
        fill: var(--primary-color);
        stroke: var(--primary-color);
        background-color: var(--color-gris-claro);
        font-size: 2.6vh;
        font-weight: var(--font-bajada-weight);
        border-radius: 0.4rem;
        box-shadow: 0 3px 6px 0 var(--orange-5);
        transition-duration: 0.4s;
        text-decoration: none;
        border: none;
        outline: none;
        padding: .5rem;
    }
    button[btn1]:hover {
        background-color: var(--color-azul-oscuro);
        color: var(--color-gris-claro);
    }
    button[btn1]:active {
        background-color: var(--primary-color);
        box-shadow: 0.2rem var(--color-azul-oscuro);
        transform: translateY(0.2rem);
    }
    button[btn1][apagado] {
        opacity: 0.8;
        background-color: var(--color-gris);
        cursor: not-allowed;
        pointer-events: none;
    }

    button[btn2] {
        display: grid;
        grid-auto-flow: column;
        align-items: center;
        grid-gap: 0.3rem;
        cursor: pointer;
        color: var(--color-gris-claro);
        fill: var(--primary-color);
        stroke: var(--primary-color);
        background-color: transparent;
        font-size: 2.6vh;
        font-weight: var(--font-bajada-weight);
        border-radius: 0.4rem;
        box-shadow: 0 3px 6px 0 var(--orange-5);
        transition-duration: 0.4s;
        text-decoration-line: underline;
        text-decoration-style: solid;
        border: none;
        outline: none;
        padding: .5rem;
    }
    button[btn2]:hover {
        color: var(--color-celeste);
    }
    button[btn2]:active {
        color: var(--primary-color);
        transform: translateY(0.2rem);
    }
    button[btn2][apagado] {
        opacity: 0.8;
        color: var(--color-gris);
        cursor: not-allowed;
        pointer-events: none;
    }

    button[btn3] {
        display: grid;
        grid-auto-flow: column;
        align-items: center;
        grid-gap: 0.3rem;
        cursor: pointer;
        color: var(--color-gris-claro);
        background-color: transparent;
        font-size: 2.6vh;
        font-weight: var(--font-bajada-weight);
        border-radius: 0.4rem;
        border: 1px solid var(--color-gris-claro);
        box-shadow: 0 3px 6px 0 var(--orange-5);
        transition-duration: 0.4s;
        text-decoration: none;
        outline: none;
        padding: .5rem;
    }
    button[btn3]:hover {
        background-color: var(--color-azul-oscuro);
    }
    button[btn3]:active {
        background-color: var(--color-negro);
        box-shadow: 0.2rem var(--color-azul-oscuro);
        transform: translateY(0.2rem);
    }
    button[btn3][apagado] {
        opacity: 0.8;
        background-color: var(--color-gris);
        cursor: not-allowed;
        pointer-events: none;
    }
`;class li extends(Qe(Zt,"ui.media.footherMuestraTapa","ui.media.timeStamp","screen.timeStamp")(qe)){constructor(){super(),this.hidden=!0,this.area="foot"}static get styles(){return Ye`
        ${ci}
        :host{
            display: grid;
            position:relative; 
            align-items:center; 
            justify-content:center;
            background-image: linear-gradient(to right, var(--primary-color), var(--color-azul-oscuro));
        }
        :host([hidden]){
            display: none; 
        } 
        :host([media-size="small"]){
            grid-template-rows: 100% ;
            grid-template-columns: 100% ;
        }
        :host(:not([media-size="small"])){
            grid-template-rows: 24% 76% ;
            grid-template-columns: 100% ;
        }
        #pieCabecera{
            width:100%;
            height:100%;
            background-image:var(--imagen-logo-splash);
            background-repeat: no-repeat;
            background-position: center;
            background-size: 7vw;
        }
        :host([media-size="small"]) #pieCabecera{
            display:none;
         }
        #pieMenu{
            display: grid;
            position:relative;
            align-items:center; 
            justify-content:center;
            background-color: transparent;
        }
        :host([media-size="small"]) #pieMenu{
            grid-template-columns:repeat(5,2fr);
            grid-template-rows: 60% 40%;
            grid-gap:0.1rem;
        }
        :host(:not([media-size="small"])) #pieMenu{
            grid-template-columns: 40% 60%;
            grid-template-rows: 3rem 3rem 3rem ;
            grid-auto-flow: column;
            align-self: start;
            grid-gap:0rem;
        }
        .img{
            display:grid;
            justify-content: center;
            align-content: center;
            cursor:pointer;
            width:100%;
            height:100%;
        }
        :host(:not([media-size="small"])) .img{
            border-left: solid 4px transparent;
        }
        .img[select="SI"]{
            cursor: not-allowed;
            pointer-events: none;  
        }
        .img[select="NO"]{
            cursor: pointer;
            pointer-events: auto;  
        }
        :host(:not([media-size="small"])) .img[select="SI"]{
            border-left: solid 4px var(--color-azul-oscuro);
            background-color:var(--color-gris-fondo);
        }
        .lbl{
            width:100%;
            height:100%;
            display:grid;
            justify-content: center;
            align-content: center;
            font-size: 1.1vh;
            font-weight: var(--font-label-weight);
            color:var(--color-gris);
            cursor:pointer;
        }
        .lbl:hover{
            color:var(--color-blanco);       
        }
        :host(:not([media-size="small"])) .lbl{
            justify-content: start;
        }

        svg{
            fill:var(--color-gris);
            stroke:var(--color-gris);
            height:1rem;
            width:1.1rem;
        }
        svg:hover{
            fill:var(--color-blanco);
            stroke:var(--color-blanco);
        }
        :host(:not([media-size="small"])) svg{
            width:1.5rem;
            height:1.5rem;
        }
        #divAyudaPie{
            position:absolute;
            display:grid;
            left:0;
            bottom:1rem;
            grid-template-rows: 30% 40% 40%;
            width:100%;
            grid-gap:0rem;
            justify-items:center;
        }
        :host([media-size="small"]) #divAyudaPie{
            display:none;
        }
        .lblayudaPie{
            font-size: var(--font-bajada-size);
            font-weight: var(--font-bajada-weight);
            width:100%;
            text-align:center;
        }
        #btn-ayudaPie{
            height:1.8rem;
            width:90%;
            font-size: var(--font-label-size);
            font-weight: var(--font-label-weight);
        }
        :host([media-size="medium"]) #btn-ayudaPie{
            font-size: var(--font-error-size);
        }
        #divTapa{
            position:absolute;
            display: none;
            top:0;
            left:0;
            bottom: 0;
            right: 0;    
            z-index:20;            
            background-color: var(--color-gris-oscuro);
            opacity:.5;
            backdrop-filter: blur(2px);
        }
        :host([foother-muestra-tapa]) #divTapa{
            display: grid;           
        }
        `}render(){return Ie`
            <div id="pieCabecera">
            </div>
            <div id="pieMenu">
                <div id="img-atras" select=${"uno"==this.opcion?"SI":"NO"} @click="${this.volver}" class="img">
                    ${ni.ATRAS}
                </div>
                <div id="img-usuario" select=${"dos"==this.opcion?"SI":"NO"} @click="${this.inicio}" class="img">
                    ${ni.HOME}
                </div>
                <div id="img-publicaciones" select=${"tres"==this.opcion?"SI":"NO"}  @click="${this.notificaciones}" class="img">
                    ${ni.CAMPANACON}
                </div>
                <div id="img-tablas" select=${"cuatro"==this.opcion?"SI":"NO"} @click="${this.compras}" class="img">
                    ${ni.CARRITO}
                </div>  
                <div id="img-tablas" select=${"cinco"==this.opcion?"SI":"NO"} @click="${this.clickBoton3}" class="img">
                    ${ni.PERFIL}
                </div>
                <div id="lbl-atras" select=${"uno"==this.opcion?"SI":"NO"} @click="${this.volver}"  class="lbl">
                    ATRAS
                </div>
                <div id="lbl-usuario" select=${"dos"==this.opcion?"SI":"NO"} @click="${this.inicio}"  class="lbl">
                    INICIO
                </div>
                <div id="lbl-publicaciones" select=${"tres"==this.opcion?"SI":"NO"} @click="${this.notificaciones}"  class="lbl">
                    NOTIFICACIONES
                </div>
                <div id="lbl-tablas" select=${"cuatro"==this.opcion?"SI":"NO"} @click="${this.compras}"  class="lbl">
                    COMPRAS
                </div>
                <div id="lbl-tablas" select=${"cinco"==this.opcion?"SI":"NO"} @click="${this.clickBoton3}"  class="lbl">
                    PERFIL
                </div>
            </div>
            <div id="divAyudaPie">
                <hr style="width:90%; border-top: 2px solid var(--color-gris-claro)">
                <div><label class="lblayudaPie">AYUDA</label></div>
                <button btn3 id="btn-ayudaPie" @click=${this.clickAyuda}>AYUDA</button>
            </div>
            <div id="divTapa"></div>
        `}volver(){-1=="-main-".indexOf("-"+Zt.getState().screen.name+"-")&&Zt.dispatch({type:"[routing] go history prev"})}inicio(){Zt.dispatch(M("main"))}compras(){Zt.dispatch(M("moecra"))}notificaciones(){Zt.dispatch(M("notificaciones"))}stateChanged(t,e){if("screen.timeStamp"==e||"ui.media.timeStamp"==e||"ui.media.footherMuestraTapa"==e){this.footherMuestraTapa=t.ui.media.footherMuestraTapa,this.mediaSize=t.ui.media.size,this.hidden=!0;const e=x(t,this.area),i=-1!="-main-sindicato-salud-compras-cultura-tv-moecra-cemapsMapa-notificaciones-cartilla-cartillaDetalle-cemapCartillaDetalle-turnos-franchin-emergencias-gremioZonas-gremioMapa-gremioLista-gremioJuventud-gremioTarjetaIeric-gremioConvenio-teatroProgramacion-teatroProgramacionDetalle-teatroBoleteria-web-saludSeguridad-saludSeguridadConsultas-saludSeguridadDenuncia-ivt-macro-cine-cineNosotros-cineEdicion-cineTematicas-cineEdicionesAnteriores-tvCanales-tvEstrenos-".indexOf("-"+t.screen.name+"-");e&&i&&(this.hidden=!1),this.update()}}clickAyuda(t){location.href="tel:08001221453"}clickBoton1(){}clickBoton2(){}clickBoton3(){}static get properties(){return{opcion:{type:String,reflect:!0},mediaSize:{type:String,reflect:!0,attribute:"media-size"},layout:{type:String,reflect:!0},hidden:{type:Boolean,reflect:!0},area:{type:String},footherMuestraTapa:{type:Boolean,reflect:!0,attribute:"foother-muestra-tapa"}}}}window.customElements.define("pie-componente",li);class di extends(Qe(Zt,"ui.media.timeStamp","screen.timeStamp")(qe)){constructor(){super(),this.hidden=!0,this.area="body",this.timeOut=0}static get styles(){return Ye`
			:host {
				display: grid;
				justify-content: center;
				align-items: center;
				position: absolute;
				top: 0rem;
				left: 0rem;
				height: 100%;
				width: 100%;
                background-image: linear-gradient(var(--color-azul-oscuro), var(--primary-color));
				padding: 0 !important;
			}
			:host([hidden]) {
				display: none;
			}
			#cuerpo {
				display: block;
				height: 100%;
				width: 100vw;
				display: grid;
				place-content: center;
				justify-items: center;
			}
			#imagen{
				width: 50%;
			}
			#version {
				display: grid;
				position: absolute;
				top: 3vh;
				left: 3vw;
				color: var(--color-blanco);
				font-size: var(--font-header-h2-size);
				font-weight: var(--font-header-h2-weight);
			}
		`}render(){return Ie`
			<div id="cuerpo" @click=${this.proximo}>
				<img id="imagen" src='${Zt.getState().ui.urls.imagenes+"titulo_red_social.png"}'/>
				<div id="version">v.:${"1.1.51"}</div>
			</div>
		`}stateChanged(t,e){if("screen.timeStamp"==e||"ui.media.timeStamp"==e){this.mediaSize=t.ui.media.size,this.hidden=!0;const e=x(t,this.area),i=-1!="-splash-".indexOf("-"+t.screen.name+"-");e&&i&&(this.hidden=!1,this.timeOut=setTimeout(()=>{},3e3)),this.update()}}proximo(){clearTimeout(this.timeOut),Zt.dispatch({type:"[routing] go next"})}static get properties(){return{mediaSize:{type:String,reflect:!0,attribute:"media-size"},layout:{type:String,reflect:!0},hidden:{type:Boolean,reflect:!0},area:{type:String}}}}window.customElements.define("splash-screen",di);class ui extends(Qe(Zt,"ui.media.timeStamp","screen.timeStamp")(qe)){constructor(){super(),this.hidden=!0,this.area="body",this.current=""}static get styles(){return Ye`
        	${ci}
			:host {
				display: grid;
				position: relative;
                background-image: linear-gradient(0deg, rgba(2,0,36,1) 10%, rgba(0,87,161,1) 100%);
				overflow: hidden;
				padding: 0 !important;
			}
			:host([hidden]) {
				display: none;
			}
			#cuerpo {
				display: grid;
				height: 100%;
				width: 100%;
				grid-gap: 0rem;
				grid-template-rows: 30% 70%;
				border-radius: 2rem;
				background-color: transparent;
				align-self: center;
			}
			#divVersion {
				position: absolute;
				top: 2px;
				right: 4px;
				font-size: 2vh;
				color: var(--color-gris);
			}
			#titulo {
				height: 100%;
				width: 100%;
				background-image: url("https://www.uocra.net/App/images/titulo_red_social.png");
				background-repeat: no-repeat;
				background-position: center;
				background-size: auto 14vh;
			}
			#contenido {
				display: grid;
				position: relative;
				height: 100%;
				width: 100%;
				grid-template-columns: 100%;
                grid-template-rows: 10% 10% 10% 70%;
                grid-gap: 2vh;
                align-self: center;
			}
			:host([media-size="large"]) #contenido {
				grid-template-columns: 100%;
                grid-template-rows: 10% 10% 10% 70%;
			}
			#imagen{
                background-image: url("https://www.uocra.net/App/images/bandera1.gif");
				background-repeat: no-repeat;
				background-position: bottom;
				background-size: contain;
			}
			.texto {
				font-size: var(--font-header-h1-size);
				font-weight: normal ;
				color: var(--color-blanco);
				justify-self: center;
            }
			:host([media-size="large"]) .texto {
				font-size: 1.5vw;
			}
            .miBoton {
				font-size: var(--font-bajada-size);
				font-weight: var(--font-label-weight);
                justify-self: center;
                width: 60%;
				height: 6vh;
			}			
			:host([media-size="large"]) .miBoton {
                width: 40%;
			}


		`}render(){return Ie`
			<div id="cuerpo">
				<div id="divVersion">v.:${"1.1.51"}</div>
				<div id="titulo"></div>
				<div id="contenido">
                    <div class="texto">TE DAMOS LA BIENVENIDA</div>
                    <button btn1 class="miBoton" @click="${this.sesion}">INICIAR SESION</button>
                    <button btn1 class="miBoton" @click="${this.registro}">REGISTRARSE</button>

                    <div id="imagen"></div>
				</div>
			</div>
		`}stateChanged(t,e){if("screen.timeStamp"==e||"ui.media.timeStamp"==e){this.mediaSize=t.ui.media.size,this.hidden=!0,this.current=t.screen.name;const e=x(t,this.area),i=-1!="-inicial-".indexOf("-"+t.screen.name+"-");e&&i&&(this.hidden=!1),this.update()}}sesion(){Zt.dispatch(M("sesion"))}registro(){Zt.dispatch(M("registro"))}static get properties(){return{mediaSize:{type:String,reflect:!0,attribute:"media-size"},layout:{type:String,reflect:!0},hidden:{type:Boolean,reflect:!0},area:{type:String},current:{type:String,reflect:!0}}}}window.customElements.define("inicial-screen",ui);const pi=Ye`
	input:-webkit-autofill {
		border: 1px solid var(--color-ok);
		-webkit-text-fill-color: var(--color-gris-oscuro);
		-webkit-box-shadow: 0 0 0px 1000px var(--color-gris-oscuro) inset;
		transition: background-color 5000s ease-in-out 0s;
	}
	input:-webkit-autofill::first-line {
		font-size: var(--font-bajada-size);
		font-weight: var(--font-bajada-weight);
	}
	.input {
		display: grid;
		grid-template-rows: 1fr auto 1fr;
		grid-gap: 0.1rem;
	}
	.input input {
		padding: .8rem;
		background-color: var(--color-blanco);
		border: 1px solid var(--color-verde-claro);
		color: var(--color-gris-oscuro);
		font-size: var(--font-bajada-size);
		font-weight: var(--font-bajada-weight);
		outline: none;
		border-radius: 1rem;
	}
	.input input:focus {
		border: 1px solid var(--primary-color);
	}
	.input[error] input {
		border: 1px solid var(--color-error);
	}
	.input label {
		color: var(--color-negro);
		font-size: var(--font-label-size);
		font-weight: var(--font-label-weight);
	}
	.input div {
		color: var(--color-error);
		font-size: var(--font-error-size);
		font-weight: var(--font-error-weight);
		display: none;
	}
	.input input[error] + div {
		display: grid;
	}
	::placeholder {
		/* Firefox, Chrome, Opera */
		color: var(--color-gris);
	}
`;class hi extends(Qe(Zt,"ui.media.timeStamp","screen.timeStamp")(qe)){constructor(){super(),this.hidden=!0,this.area="body",this.current="",this.idioma=Zt.getState().ui.idioma,this.sesion=i(115)}static get styles(){return Ye`
			${ri}
			${ci}
			${pi}

			:host {
				display: grid;
				position: relative;
                background-image: linear-gradient(var(--color-azul-oscuro), var(--primary-color));
				overflow: hidden;
			}
			:host([hidden]) {
				display: none;
			}
			#cuerpo {
				display: grid;
				height: 100%;
				width: 100%;
				grid-gap: 0rem;
				grid-template-rows: 25% 2% 56% 2% 15%;
				border-radius: 2rem;
				background-color: transparent;
				align-self: center;
			}
			#titulo {
				height: 100%;
				width: 100%;
				background-image: url("https://www.uocra.net/App/images/titulo_red_social.png");
				background-repeat: no-repeat;
				background-position: center;
				background-size: auto 10vh;
			}
			#datos{
				width: 100%;
				justify-self: center;
			}
			:host(:not([media-size="small"])) #datos{
				width: 50%;
			}
			#linea {
				color: var(--color-blanco);
				width: 80%;
			}
			.texto {
				font-size: 3vh !important;
				font-weight: var(--font-label-weight);
				text-align: center;
				font-style: italic ;
			}
			:host([media-size="large"]) .texto {
				font-size: 1.5vw;
			}
			.miBoton{
				background-color: var(--color-amarillo) !important;
				height: 7vh;
				align-self: center;
			}
		`}render(){return Ie`
			<div id="cuerpo">
				<div id="titulo"></div>
				<div>
					<hr id="linea" />
				</div>
				<div id="datos" class="grid row">
                        <div class="input">
                            <label class="texto" style="color:var(--color-blanco)">${this.sesion[this.idioma].correo}</label>
                            <input type="text" id="tallerDescripcion" autocomplete="off" " />
                        </div>
						<div class="input">
                            <label class="texto" style="color:var(--color-blanco)">${this.sesion[this.idioma].password}</label>
                            <input type="text" id="tallerDescripcion" autocomplete="off" placeholder="" />
                        </div>
						<button btn1 class="miBoton" @click="${this.iniciar}">${this.sesion[this.idioma].inicio}</button>
						<button btn2 class="btnVolver" @click="${this.crear}">${this.sesion[this.idioma].crear}</button>
				</div>
				<div>
					<hr id="linea" />
				</div>
				<div class="grid fit">
					<button btn2 class="btnOlvido" @click="${this.claveRecuperar}">${this.sesion[this.idioma].recupero}</button>
				</div>
			</div>
		`}stateChanged(t,e){if("screen.timeStamp"==e||"ui.media.timeStamp"==e){this.mediaSize=t.ui.media.size,this.hidden=!0,this.current=t.screen.name;const e=x(t,this.area),i=-1!="-sesion-".indexOf("-"+t.screen.name+"-");e&&i&&(this.hidden=!1),this.update()}}crear(){Zt.dispatch(M("registro"))}claveRecuperar(){Zt.dispatch(M("claveRecuperar"))}iniciar(){Zt.dispatch(M("main"))}static get properties(){return{mediaSize:{type:String,reflect:!0,attribute:"media-size"},layout:{type:String,reflect:!0},hidden:{type:Boolean,reflect:!0},area:{type:String},current:{type:String,reflect:!0}}}}window.customElements.define("sesion-screen",hi);class fi extends(Qe(Zt,"ui.media.timeStamp","screen.timeStamp")(qe)){constructor(){super(),this.hidden=!0,this.area="body",this.current="",this.idioma=Zt.getState().ui.idioma,this.claveRecuperar=i(116)}static get styles(){return Ye`
			${ri}
			${ci}
			${pi}

			:host {
				display: grid;
				position: relative;
                background-image: linear-gradient(var(--color-azul-oscuro), var(--primary-color));
				overflow: hidden;
			}
			:host([hidden]) {
				display: none;
			}
			#cuerpo {
				display: grid;
				height: 95%;
				width: 100%;
				grid-gap: 0rem;
				grid-template-rows: 25% 2% 56% 2% 15%;
				border-radius: 2rem;
				background-color: transparent;
				align-self: center;
			}
			#titulo {
				height: 100%;
				width: 100%;
				background-image: url("https://www.uocra.net/App/images/titulo_red_social.png");
				background-repeat: no-repeat;
				background-position: center;
				background-size: auto 10vh;
			}
			#linea {
				color: var(--color-blanco);
				width: 80%;
			}
			.texto {
				color: var(--color-gris-claro);
				font-size: 3vh !important;
				font-weight: var(--font-label-weight);
				text-align: center;
				font-style: italic;
			}
			.textoMsj{
				color: var(--color-gris-claro);
				font-size: 2.5vh !important;
				font-weight: var(--font-label-weight);
				text-align: center;
			}
			:host([media-size="large"]) .texto {
				font-size: 1.5vw;
			}
			.miBoton{
				height: 7vh;
				align-self: center;
			}
		`}render(){return Ie`
			<div id="cuerpo">
				<div id="titulo"></div>
				<div>
					<hr id="linea" />
				</div>
				<div id="datos" class="grid fit" style="align-items: stretch;">
					<div class="grid row" >
                         <div class="input">
                            <label class="texto" style="color:var(--color-blanco)">${this.claveRecuperar[this.idioma].password}</label>
                            <input type="text" id="tallerDescripcion" autocomplete="off" " />
                        </div>
						<button btn3 class="miBoton" @click="${this.enviar}">${this.claveRecuperar[this.idioma].enviar}</button>
						<label class="textoMsj">${this.claveRecuperar[this.idioma].mensaje}</label>
					</div>
				</div>
				<div>
					<hr id="linea" />
				</div>
				<div class="grid fit">
					<button btn2 class="miBoton" @click="${this.volver}">${this.claveRecuperar[this.idioma].volver}</button>
				</div>
			</div>
		`}stateChanged(t,e){if("screen.timeStamp"==e||"ui.media.timeStamp"==e){this.mediaSize=t.ui.media.size,this.hidden=!0,this.current=t.screen.name;const e=x(t,this.area),i=-1!="-claveRecuperar-".indexOf("-"+t.screen.name+"-");e&&i&&(this.hidden=!1),this.update()}}enviar(){Zt.dispatch(M("claveRecuperarMensaje"))}volver(){Zt.dispatch(M("sesion"))}static get properties(){return{mediaSize:{type:String,reflect:!0,attribute:"media-size"},layout:{type:String,reflect:!0},hidden:{type:Boolean,reflect:!0},area:{type:String},current:{type:String,reflect:!0}}}}window.customElements.define("claverecuperar-screen",fi);class mi extends(Qe(Zt,"ui.media.timeStamp","screen.timeStamp")(qe)){constructor(){super(),this.hidden=!0,this.area="body",this.current="",this.idioma=Zt.getState().ui.idioma,this.claveRecuperarMensaje=i(117)}static get styles(){return Ye`
			${ri}

		:host{
			display: grid;
			position: relative;
            background-image: linear-gradient(var(--color-azul-oscuro), var(--primary-color));
			overflow: hidden;
            justify-items:center;
			color: var(--color-blanco);
        }
        :host([hidden]){
            display: none;  
        }
        #x{
            position: absolute;
            top: .5rem;
            right: .5rem;
            width: 1.5rem;
            height: 1.5rem;
            cursor: pointer;
        }
        #titulo{
            position:relative;
            display:flex;
            padding-bottom:2rem;
            align-items: flex-end;
            justify-content:center;
            text-align:center;
            font-size: var(--font-header-h1-size);
            font-weight: var(--font-header-h1-weight);
        }
        #subtitulo{
            width: 100%;
    		justify-items: center;
			text-align: center;
            font-size: var(--font-header-h1-menos-size);
            font-weight: var(--font-header-h1-menos-weight);
         }
        #leyenda{
            position:relative;
            display:flex;
            align-items: flex-start;
            justify-content:center;
            text-align:center;
            font-size: var(--font-header-h2-size);
            font-weight: var(--font-header-h2-weight);
        }
        #detalle{
            position:relative;
            display:flex;
            align-items: flex-start;
            justify-content:center;
            text-align:center;
            font-size: var(--font-label-size);
            font-weight: var(--font-label-weight);
            padding-top:1rem;
        }
        `}render(){return Ie`
            <div id="x" @click=${this.sesion}>X
            </div>               
            <div id="titulo">
            ${this.claveRecuperarMensaje[this.idioma].titulo1}
           </div>
            <div id="subtitulo">
            <label id="leyenda">
            ${this.claveRecuperarMensaje[this.idioma].titulo2}
            </label>
            <label id="detalle">
            ${this.claveRecuperarMensaje[this.idioma].titulo3}
            </label>
            </div>
        `}stateChanged(t,e){if("screen.timeStamp"==e||"ui.media.timeStamp"==e){this.mediaSize=t.ui.media.size,this.hidden=!0,this.current=t.screen.name;const e=x(t,this.area),i=-1!="-claveRecuperarMensaje-".indexOf("-"+t.screen.name+"-");e&&i&&(this.hidden=!1),this.update()}}sesion(){Zt.dispatch(M("claveCambio"))}static get properties(){return{mediaSize:{type:String,reflect:!0,attribute:"media-size"},layout:{type:String,reflect:!0},hidden:{type:Boolean,reflect:!0},area:{type:String},current:{type:String,reflect:!0}}}}window.customElements.define("claverecuperarmensaje-screen",mi);class gi extends(Qe(Zt,"ui.media.timeStamp","screen.timeStamp")(qe)){constructor(){super(),this.hidden=!0,this.area="body",this.current="",this.idioma=Zt.getState().ui.idioma,this.claveCambio=i(118)}static get styles(){return Ye`
			${ri}
			${ci}
			${pi}

			:host {
				display: grid;
				position: relative;
                background-image: linear-gradient(var(--color-azul-oscuro), var(--primary-color));
				overflow: hidden;
			}
			:host([hidden]) {
				display: none;
			}
			#cuerpo {
				display: grid;
				height: 95%;
				width: 100%;
				grid-gap: 0rem;
				grid-template-rows: 35% 2% 63% ;
				border-radius: 2rem;
				background-color: transparent;
				align-self: center;
			}
			#titulo {
				height: 100%;
				width: 100%;
				background-image: url("https://www.uocra.net/App/images/titulo_red_social.png");
				background-repeat: no-repeat;
				background-position: center;
				background-size: auto 10vh;
			}
			#linea {
				color: var(--color-blanco);
				width: 80%;
			}
			.texto {
				color: var(--color-gris-claro);
				font-size: 3vh !important;
				font-weight: var(--font-label-weight);
				text-align: center;
				font-style: italic;
			}
			.textoMsj{
				color: var(--color-gris-claro);
				font-size: 2.5vh !important;
				font-weight: var(--font-label-weight);
				text-align: center;
			}
			:host([media-size="large"]) .texto {
				font-size: 1.5vw;
			}
			.miBoton{
				height: 7vh;
				align-self: center;
			}
		`}render(){return Ie`
			<div id="cuerpo">
				<div id="titulo"></div>
				<div>
					<hr id="linea" />
				</div>
				<div id="datos" class="grid fit" style="align-items: stretch;">
					<div class="grid row" >
                         <div class="input">
                            <label class="texto" style="color:var(--color-blanco)">${this.claveCambio[this.idioma].password}</label>
                            <input type="text" id="mail1" autocomplete="off" " />
                        </div>
						<div class="input">
                            <label class="texto" style="color:var(--color-blanco)">${this.claveCambio[this.idioma].passwordRepetir}</label>
                            <input type="text" id="mail2" autocomplete="off" " />
                        </div>
						<button btn3 class="miBoton" @click="${this.enviar}">${this.claveCambio[this.idioma].enviar}</button>
					</div>
				</div>
			</div>
		`}stateChanged(t,e){if("screen.timeStamp"==e||"ui.media.timeStamp"==e){this.mediaSize=t.ui.media.size,this.hidden=!0,this.current=t.screen.name;const e=x(t,this.area),i=-1!="-claveCambio-".indexOf("-"+t.screen.name+"-");e&&i&&(this.hidden=!1),this.update()}}enviar(){Zt.dispatch(M("claveCambioMensaje"))}static get properties(){return{mediaSize:{type:String,reflect:!0,attribute:"media-size"},layout:{type:String,reflect:!0},hidden:{type:Boolean,reflect:!0},area:{type:String},current:{type:String,reflect:!0}}}}window.customElements.define("clavecambio-screen",gi);class vi extends(Qe(Zt,"ui.media.timeStamp","screen.timeStamp")(qe)){constructor(){super(),this.hidden=!0,this.area="body",this.current="",this.idioma=Zt.getState().ui.idioma,this.claveCambioMensaje=i(119)}static get styles(){return Ye`
			${ri}

		:host{
			display: grid;
			position: relative;
            background-image: linear-gradient(var(--color-azul-oscuro), var(--primary-color));
			overflow: hidden;
            justify-items:center;
			color: var(--color-blanco);
        }
        :host([hidden]){
            display: none;  
        }
        #x{
            position: absolute;
            top: .5rem;
            right: .5rem;
            width: 1.5rem;
            height: 1.5rem;
            cursor: pointer;
        }
        #titulo{
            position:relative;
            display:flex;
            padding-bottom:2rem;
            align-items: flex-end;
            justify-content:center;
            text-align:center;
            font-size: var(--font-header-h1-size);
            font-weight: var(--font-header-h1-weight);
        }
        #subtitulo{
            width: 100%;
    		justify-items: center;
			text-align: center;
            font-size: var(--font-header-h1-menos-size);
            font-weight: var(--font-header-h1-menos-weight);
         }
        #leyenda{
            position:relative;
            display:flex;
            align-items: flex-start;
            justify-content:center;
            text-align:center;
            font-size: var(--font-header-h2-size);
            font-weight: var(--font-header-h2-weight);
        }
        #detalle{
            position:relative;
            display:flex;
            align-items: flex-start;
            justify-content:center;
            text-align:center;
            font-size: var(--font-label-size);
            font-weight: var(--font-label-weight);
            padding-top:1rem;
        }
        `}render(){return Ie`
            <div id="x" @click=${this.sesion}>X
            </div>               
            <div id="titulo">
            ${this.claveCambioMensaje[this.idioma].titulo1}
            </div>
            <div id="subtitulo">
            <label id="leyenda">
            ${this.claveCambioMensaje[this.idioma].titulo2}
            </label>
            <label id="detalle">
            ${this.claveCambioMensaje[this.idioma].titulo3}
            </label>
            </div>
        `}stateChanged(t,e){if("screen.timeStamp"==e||"ui.media.timeStamp"==e){this.mediaSize=t.ui.media.size,this.hidden=!0,this.current=t.screen.name;const e=x(t,this.area),i=-1!="-claveCambioMensaje-".indexOf("-"+t.screen.name+"-");e&&i&&(this.hidden=!1),this.update()}}sesion(){Zt.dispatch(M("sesion"))}static get properties(){return{mediaSize:{type:String,reflect:!0,attribute:"media-size"},layout:{type:String,reflect:!0},hidden:{type:Boolean,reflect:!0},area:{type:String},current:{type:String,reflect:!0}}}}window.customElements.define("clavecambiomensaje-screen",vi);class yi extends(Qe(Zt,"ui.media.timeStamp","screen.timeStamp")(qe)){constructor(){super(),this.hidden=!0,this.area="body",this.current="",this.idioma=Zt.getState().ui.idioma,this.registro=i(120)}static get styles(){return Ye`
			${ri}
			${ci}
			${pi}

			:host {
				display: grid;
				position: relative;
                background-image: linear-gradient(var(--color-azul-oscuro), var(--primary-color));
				overflow: hidden;
                padding: 0 !important;
			}
			:host([hidden]) {
				display: none;
			}
			#cuerpo {
				display: grid;
				height: 100%;
				width: 100%;
				grid-gap: 0rem;
				grid-template-rows: 16% 2% 8% 2% 72%;
				background-color: transparent;
                align-self: center;
			}
			#titulo {
				height: 100%;
				width: 100%;
				background-image: url("https://www.uocra.net/App/images/titulo_red_social.png");
				background-repeat: no-repeat;
				background-position: center;
				background-size: auto 10vh;
			}
			#linea {
				color: var(--color-blanco);
				width: 80%;
			}
			.texto {
				font-size: 3vh !important;
				font-weight: var(--font-label-weight);
				text-align: center;
                font-style: italic ;
             }
             .txt{
                height: 2vh !important;
             }
			:host([media-size="large"]) .texto {
				font-size: 1.5vw;
			}
			.miBoton{
                background-color: var(--color-amarillo) !important;
				height: 7vh;
				align-self: center;
            }
            .myImput{
                grid-template-rows: 1fr auto .4fr !important;
            }
            #datos{
                padding: 0 2vh 0 2vh;
				width: 90%;
                overflow-y: auto;
                overflow-x: hidden;
				justify-self: center;
            }
			:host(:not([media-size="small"])) #datos{
				width: 50%;
			}
            .leyenda{
                justify-self: center;
                align-self: center;
                width: 80%;
                font-size: 2.2vh !important;
				font-weight: var(--font-label-weight);
				text-align: center;
                color: var(--color-blanco) ; 
            }
		`}render(){return Ie`
			<div id="cuerpo">
				<div id="titulo"></div>
				<div>
					<hr id="linea" />
				</div>
                <label class="leyenda">${this.registro[this.idioma].titulo}</label>
                <div>
					<hr id="linea" />
				</div>
				<div id="datos" class="grid row">
					<div class="grid row" style="align-self: stretch;">
						<div class="input myImput">
                            <label class="texto" style="color:var(--color-blanco)">${this.registro[this.idioma].correo}</label>
                            <input class="txt" type="email" id="tallerDescripcion" autocomplete="off" placeholder="${this.registro[this.idioma].correo_ph}" />
                        </div>
						<div class="input myImput" >
                            <label class="texto" style="color:var(--color-blanco)">${this.registro[this.idioma].nombre}</label>
                            <input class="txt" type="text" id="tallerDescripcion" autocomplete="off" placeholder="${this.registro[this.idioma].correo_ph}"  />
                        </div>
                        <div class="input myImput">
                            <label class="texto" style="color:var(--color-blanco)">${this.registro[this.idioma].documento}</label>
                            <input class="txt" type="number" id="tallerDescripcion" autocomplete="off"  />
                        </div>
                    </div>
                    <div class="grid row" style="align-self: stretch;">
						<button btn1 class="miBoton" @click="${this.grabar}">${this.registro[this.idioma].enviar}</button>
						<button btn2 @click="${this.volver}">${this.registro[this.idioma].volver}</button>
                    </div>
				</div>
			</div>
		`}stateChanged(t,e){if("screen.timeStamp"==e||"ui.media.timeStamp"==e){this.mediaSize=t.ui.media.size,this.hidden=!0,this.current=t.screen.name;const e=x(t,this.area),i=-1!="-registro-".indexOf("-"+t.screen.name+"-");e&&i&&(this.hidden=!1),this.update()}}volver(){Zt.dispatch(M("sesion"))}grabar(){Zt.dispatch(M("registroMensaje"))}sesion(){Zt.dispatch(M("sesion"))}static get properties(){return{mediaSize:{type:String,reflect:!0,attribute:"media-size"},layout:{type:String,reflect:!0},hidden:{type:Boolean,reflect:!0},area:{type:String},current:{type:String,reflect:!0}}}}window.customElements.define("registro-screen",yi);class bi extends(Qe(Zt,"ui.media.timeStamp","screen.timeStamp")(qe)){constructor(){super(),this.hidden=!0,this.area="body",this.current="",this.idioma=Zt.getState().ui.idioma,this.registroMensaje=i(121)}static get styles(){return Ye`
			${ri}

		:host{
			display: grid;
			position: relative;
            background-image: linear-gradient(var(--color-azul-oscuro), var(--primary-color));
			overflow: hidden;
            justify-items:center;
			color: var(--color-blanco);
        }
        :host([hidden]){
            display: none;  
        }
        #x{
            position: absolute;
            top: .5rem;
            right: .5rem;
            width: 1.5rem;
            height: 1.5rem;
            cursor: pointer;
        }
        #titulo{
            position:relative;
            display:flex;
            padding-bottom:2rem;
            align-items: flex-end;
            justify-content:center;
            text-align:center;
            font-size: var(--font-header-h1-size);
            font-weight: var(--font-header-h1-weight);
        }
        #subtitulo{
            width: 100%;
    		justify-items: center;
			text-align: center;
            font-size: var(--font-header-h1-menos-size);
            font-weight: var(--font-header-h1-menos-weight);
         }
        #leyenda{
            position:relative;
            display:flex;
            align-items: flex-start;
            justify-content:center;
            text-align:center;
            font-size: var(--font-header-h2-size);
            font-weight: var(--font-header-h2-weight);
        }
        #detalle{
            position:relative;
            display:flex;
            align-items: flex-start;
            justify-content:center;
            text-align:center;
            font-size: var(--font-label-size);
            font-weight: var(--font-label-weight);
            padding-top:1rem;
        }
        `}render(){return Ie`
            <div id="x" @click=${this.sesion}>X
            </div>               
            <div id="titulo">
            ${this.registroMensaje[this.idioma].titulo1}
            </div>
            <div id="subtitulo">
            <label id="leyenda">
            ${this.registroMensaje[this.idioma].titulo2}
            </label>
            <label id="detalle">
            ${this.registroMensaje[this.idioma].titulo3}
            </label>
            </div>
        `}stateChanged(t,e){if("screen.timeStamp"==e||"ui.media.timeStamp"==e){this.mediaSize=t.ui.media.size,this.hidden=!0,this.current=t.screen.name;const e=x(t,this.area),i=-1!="-registroMensaje-".indexOf("-"+t.screen.name+"-");e&&i&&(this.hidden=!1),this.update()}}sesion(){Zt.dispatch(M("claveCambio"))}static get properties(){return{mediaSize:{type:String,reflect:!0,attribute:"media-size"},layout:{type:String,reflect:!0},hidden:{type:Boolean,reflect:!0},area:{type:String},current:{type:String,reflect:!0}}}}window.customElements.define("registromensaje-screen",bi);class _i extends(Qe(Zt,"noticias.timeStamp","ui.media.timeStamp","screen.timeStamp")(qe)){constructor(){super(),this.hidden=!0,this.area="body",this.current="",this.idioma=Zt.getState().ui.idioma,this.aplicacion=i(122),this.principal=i(123),this.noticia=null}static get styles(){return Ye`
			${ri}
			${ci}
			${pi}

			:host {
				display: grid;
				position: relative;
                background-color: var(--color-blanco);
                overflow: hidden;
                padding: 0 !important;
			}
			:host([hidden]) {
				display: none;
			}
			#cuerpo {
				display: grid;
                width: 100vw;
				grid-gap: 0rem;
				grid-template-rows: 18% 82%;
				background-color: var(--color-blanco);
			}
			#titulo {
				height: 10vh;
                width: 100vw;
                grid-gap: 2vw !important;
                justify-content: center;
                padding: 0 !important;
                align-self: center;
            }
            .icBoton{
                height:2.8rem;
                width:15vw;
                padding:.4vw;
                background-image: linear-gradient(to right, var(--color-azul-oscuro), var(--primary-color), var(--color-azul-oscuro));
                border-radius: .5rem;
                color: var(--color-blanco);
                font-size:.5rem;
                grid-gap: 0 !important;
                justify-items: center;  
                cursor: pointer;             
            }
            #icGremio{
                background-image: linear-gradient(to right, var(--color-azul-oscuro), var(--primary-color), var(--color-azul-oscuro));
            }
            #icSalud{
                background-image: linear-gradient(to right, var(--color-verde-oscuro), var(--color-verde-claro), var(--color-verde-oscuro));
            }
            #icCursos{
                background-image: linear-gradient(to right, var(--color-amarillo-oscuro), var(--color-amarillo-claro), var(--color-amarillo-oscuro));
            }
            #icMas{
                background-image: linear-gradient(to right, var(--color-gris-oscuro), var(--color-gris), var(--color-gris-oscuro));
                }

            svg{
                height:1.8rem;
                width:1.8rem;
                fill: white;
            }
			#linea {
				color: var(--color-blanco);
				width: 90%;
			}
            #datos{
                height:60vh;
                overflow-x: hidden;
                overflow-y: auto;
            }
            .notaCabImg{
                width: 100%;
                height: 42vw;
				background-repeat: no-repeat;
				background-position: center;
                background-size: cover ;
                justify-self: center;
                border-radius: .4rem;
            }
            .notaCabTxt{               
				color: var(--color-gris-oscuro);
				font-size: 1.6vh !important;
                font-style: italic;
                justify-self: center;
            }
            .verMas{
                color: var(--color-gris-oscuro);
				font-size: 1.4vh !important;
                font-style: italic; 
                font-weight: bolder;  
                cursor: pointer; 
            }
            .notas{
                justify-self: center;
                padding: 0 !important;
                grid-gap: 0 !important;          
            }
            .notaDetImg{
                width: 36vw;
                height: 24vw;
				background-repeat: no-repeat;
				background-position: center;
                background-size: cover ;
                justify-self: center;
                border-radius: .4rem;
            }
            .notaDetTxt{
				color: var(--color-gris-oscuro);
                justify-self: center;
                font-size: var(--font-header-h2-size) ;
            }
            :host([media-size="small"]) .notaDetTxt{
                font-size: var(--font-label-size);
            }
		`}render(){if(this.noticia)return Ie`
                <div id="cuerpo">
                    <div id="titulo" class="grid column">
                        <div id="icGremio" class="grid row icBoton" @click="${this.sindicato}">
                            <div >${ni.MISINDICATO}</div>
                            <div >${this.aplicacion[this.idioma].sindicato}</div>
                        </div>
                        <div id="icSalud" class="grid row icBoton" @click="${this.salud}">
                            <div >${ni.SALUD}</div>
                            <div >${this.aplicacion[this.idioma].salud}</div>
                        </div>
                        <div id="icCursos" class="grid row icBoton">
                            <div >${ni.CURSOS}</div>
                            <div >${this.aplicacion[this.idioma].capacitcion}</div>
                        </div>
                        <div id="icGremio" class="grid row icBoton" @click="${this.cultura}">
                            <div >${ni.TEATRO}</div>
                            <div >${this.aplicacion[this.idioma].teatro}</div>
                        </div>
                        <div id="icMas" class="grid row icBoton" @click="${this.masUOCRA}">
                            <div >${ni.MASUOCRA}</div>
                            <div >${this.aplicacion[this.idioma].masuocra}</div>
                        </div>
                    </div>

                    <div id="datos" class="grid row" style="align-items: stretch;">
                        ${this.noticia.map((t,e)=>0==e?Ie` 
                                    <div class="grid row" >
                                        <div class="notaCabImg" style="background-image: url('${t.imagen}')"></div>
                                        <div class="notaCabTxt">${t.copete}</div>                       
                                        <div class="verMas">${this.principal[this.idioma].verMas}</div>
                                    </div>
                                `:Ie` 
                                    <div>
                                        <hr id="linea" />
                                    </div>
                                    <div class="grid column notas">
                                        <div class="notaDetImg" style="background-image: url('${t.imagen}')"></div>
                                        <div class="grid row" >
                                            <div class="notaDetTxt">${t.copete}</div>                       
                                            <div id="verMas" class="verMas">${this.principal[this.idioma].verMas}</div>
                                        </div>
                                    </div>
                                `)}
                    </div>
                </div>
            `}stateChanged(t,e){if("screen.timeStamp"==e||"ui.media.timeStamp"==e){this.mediaSize=t.ui.media.size,this.hidden=!0,this.current=t.screen.name;const e=x(t,this.area),i=-1!="-main-".indexOf("-"+t.screen.name+"-");e&&i&&(this.hidden=!1),this.update()}if("noticias.timeStamp"==e){this.noticia=t.noticias.entities}}sindicato(){Zt.dispatch(M("sindicato"))}salud(){Zt.dispatch(M("salud"))}cultura(){Zt.dispatch(M("cultura"))}volver(){Zt.dispatch(M("inicial"))}claveRecuperar(){Zt.dispatch(M("claveRecuperar"))}masUOCRA(){Zt.dispatch({type:"[ui] menu activar"})}static get properties(){return{mediaSize:{type:String,reflect:!0,attribute:"media-size"},layout:{type:String,reflect:!0},hidden:{type:Boolean,reflect:!0},area:{type:String},current:{type:String,reflect:!0}}}}window.customElements.define("principal-screen",_i);class wi extends(Qe(Zt,"ui.media.timeStamp","screen.timeStamp")(qe)){constructor(){super(),this.hidden=!0,this.area="body",this.current="",this.numero=1,this.salud=[{Id:"1",titulo:"MODELO DE ATENCIÓN",cuerpo:"<p>Construir Salud, a lo largo de más de 25 años, desarrolló una política de salud basada en la Atención Primaria de la Salud y en la Medicina Familiar como modelo.</p><p>Nuestra Obra Social a través de sus médicos de familia, no sólo trabaja en laatención de las enfermedades sino también, fundamentalmente, en laprevención de las mismas y en la promoción de la salud, mediante las más actualizadas modalidades científicas.</p><p><b>MEDICO DE FAMILIA REFERENTE</b></p><p> El médico de familia es un profesional especialista en personas, que trabaja en equipo, capaz de resolver la mayor parte de los problemas por los que consultan sus pacientes y de realizar interconsultas con los médicos especialistas cuando es necesario</p>"},{Id:"2",titulo:"PLAN MATERNO INFANTIL",cuerpo:"<p>Construir Salud, a lo largo de más de 25 años, desarrolló una política de salud basada en la Atención Primaria de la Salud y en la Medicina Familiar como modelo.</p><p>Nuestra Obra Social a través de sus médicos de familia, no sólo trabaja en laatención de las enfermedades sino también, fundamentalmente, en laprevención de las mismas y en la promoción de la salud, mediante las más actualizadas modalidades científicas.</p><p><b>MEDICO DE FAMILIA REFERENTE</b></p><p> El médico de familia es un profesional especialista en personas, que trabaja en equipo, capaz de resolver la mayor parte de los problemas por los que consultan sus pacientes y de realizar interconsultas con los médicos especialistas cuando es necesario</p>"},{Id:"3",titulo:"AFILIACIONES",cuerpo:"<p>Construir Salud, a lo largo de más de 25 años, desarrolló una política de salud basada en la Atención Primaria de la Salud y en la Medicina Familiar como modelo.</p><p>Nuestra Obra Social a través de sus médicos de familia, no sólo trabaja en laatención de las enfermedades sino también, fundamentalmente, en laprevención de las mismas y en la promoción de la salud, mediante las más actualizadas modalidades científicas.</p><p><b>MEDICO DE FAMILIA REFERENTE</b></p><p> El médico de familia es un profesional especialista en personas, que trabaja en equipo, capaz de resolver la mayor parte de los problemas por los que consultan sus pacientes y de realizar interconsultas con los médicos especialistas cuando es necesario</p>"},{Id:"4",titulo:"SANATORIO FRANCHÍN",cuerpo:"<p>Construir Salud, a lo largo de más de 25 años, desarrolló una política de salud basada en la Atención Primaria de la Salud y en la Medicina Familiar como modelo.</p><p>Nuestra Obra Social a través de sus médicos de familia, no sólo trabaja en laatención de las enfermedades sino también, fundamentalmente, en laprevención de las mismas y en la promoción de la salud, mediante las más actualizadas modalidades científicas.</p><p><b>MEDICO DE FAMILIA REFERENTE</b></p><p> El médico de familia es un profesional especialista en personas, que trabaja en equipo, capaz de resolver la mayor parte de los problemas por los que consultan sus pacientes y de realizar interconsultas con los médicos especialistas cuando es necesario</p>"}],this.productos=[{Id:"1",producto:"Budin Marmolado",imagen:"https://www.uocra.net/App/images/pBudinMarmolado.gif",presentacion:"200 gr.",precio:"$93,55-"},{Id:"2",producto:"Magdalenas Marmoladas",imagen:"https://www.uocra.net/App/images/pMagdalenasMarmoladas.gif",presentacion:"225 gr.",precio:"$106,05-"},{Id:"3",producto:"Magdalenas Vainilla",imagen:"https://www.uocra.net/App/images/pMagdalenasVainilla.gif",presentacion:"225 gr.",precio:"$98,50-"},{Id:"4",producto:"Magdalena Vainilla Dulce De Leche",imagen:"https://www.uocra.net/App/images/pMagdalenaVainillaDulceDeLeche.gif",presentacion:"1 unidad - 32 gr.",precio:"$121,40-"},{Id:"5",producto:"Pan Artesano Original",imagen:"https://www.uocra.net/App/images/pPanArtesano.gif",presentacion:"500 gr.",precio:"$214,20-"},{Id:"6",producto:"Pan Blanco Familiar",imagen:"https://www.uocra.net/App/images/pPanBlancoFamiliar.gif",presentacion:"550 gr.",precio:"$192,00-"},{Id:"7",producto:"Rapidita Clasicas",imagen:"https://www.uocra.net/App/images/pRapiditaClasicas.gif",presentacion:"10 Unidades - 275 gr.",precio:"$100,00-"},{Id:"8",producto:"Rapidita Integrales",imagen:"https://www.uocra.net/App/images/pRapiditaIntegral.gif",presentacion:"10 Unidades - 275 gr.",precio:"$100,00-"},{Id:"9",producto:"Rapidita Ligth",imagen:"https://www.uocra.net/App/images/pRapiditaLigth.gif",presentacion:"10 Unidades - 275 gr.",precio:"$108,00-"}]}static get styles(){return Ye`
			${ri}
			${ci}
			${pi}

			:host {
				display: grid;
				position: relative;
                background-color: var(--color-blanco) !important;
                overflow: hidden;
                padding: 0 !important;
                overflow-x: hidden;
                overflow-y: auto;
                grid-gap: 1rem;
			}
			:host([hidden]) {
				display: none;
			}
			#titulo {
                width:100%;
                height:51vw;
                margin-top: 1vh;
                background-image: url("https://www.uocra.net/App/images/bimboBanner.gif");
				background-repeat: no-repeat;
				background-position: center center ;
                background-size: cover ;
             }
            #datos{
                grid-gap: 0;
                padding: 0;
                width: 95vw;
                height: auto;
                grid-template-columns: 1.4fr 3fr;
                background-color: var(--color-gris-medio-claro);
                border-radius: .5rem;
                justify-self: center;
                box-shadow: var(--shadow-elevation-2-box);
            }
            #imagen{
                width: 100%;
                height: 100%;
                background-repeat: no-repeat;
				background-position: center center ;
                background-size: contain ;
            }
            #detalle{
                height: 100%;
                grid-gap: .5vh;
                align-content: center;
            }
            #producto{
                font-size: 2.5vh;
                font-weight: bolder;
            }
            #presentacion{
                font-size: 2.5vh;
                font-weight: normal;
            }
            #precio{
                margin-top:.5vh;
                font-size: 2.8vh;
                font-weight: bold;               
            }
            #cantidad{
                justify-content: left;
                grid-gap: 2vw;
                padding:0;
                font-size: 2vh;
                font-weight: bold;
            }
            .cantidadTotal{
                font-size: 3vh;
                font-weight: bold;
             }
            .cantidadMas{
                height: 100%;
                width: 1.4rem;
                font-size: 2.5vh;
            }
            #seleccion{
                padding:0;
                grid-gap:0; 
            }
            #botonComprar{
                font-size: 1.8vh;
                justify-self: flex-end;
            }
		`}render(){return Ie`
			<div id="cabecera">
                <div id="titulo"></div>
            </div>
            ${this.productos.map(t=>Ie`
                    <div id="datos" class="grid">
                        <div id="imagen" style="background-image: url('${t.imagen}')"></div>
                        <div id="detalle" class="grid row">
                            <div id="producto">${t.producto}</div>
                            <div id="presentacion">${t.presentacion}</div>
                            <div id="precio">${t.precio}</div>
                            <div id="seleccion" class="grid column">
                                <div id="cantidad" class="grid column">
                                    <button btn1 .item="${"cantidadTotal"+t.Id}" class="cantidadMas" @click="${this.cantidad}">-</button>
                                    <div id="${"cantidadTotal"+t.Id}" class="cantidadTotal">0</div>
                                    <button btn1 .item="${"cantidadTotal"+t.Id}" class="cantidadMas" @click="${this.cantidad}">+</button>
                                </div>
                                <button id="botonComprar" btn1 @click="${this.volver}">COMPRAR</button>
                            </div>
                        </div>
                    </div>

                `)}
		`}cantidad(t){let e=t.currentTarget.innerHTML,i=parseInt(this.shadowRoot.querySelector("#"+t.currentTarget.item).innerHTML);"+"==e?i+=1:i>0&&(i-=1),this.shadowRoot.querySelector("#"+t.currentTarget.item).innerHTML=i}stateChanged(t,e){if("screen.timeStamp"==e||"ui.media.timeStamp"==e){this.mediaSize=t.ui.media.size,this.hidden=!0,this.current=t.screen.name;const e=x(t,this.area),i=-1!="-compras-".indexOf("-"+t.screen.name+"-");e&&i&&(this.hidden=!1),this.update()}}static get properties(){return{mediaSize:{type:String,reflect:!0,attribute:"media-size"},layout:{type:String,reflect:!0},hidden:{type:Boolean,reflect:!0},area:{type:String},current:{type:String,reflect:!0}}}}window.customElements.define("compras-screen",wi);const Ci=new WeakMap,xi=(t=>(...e)=>{const i=t(...e);return se.set(i,!0),i})(t=>e=>{if(!(e instanceof _e))throw new Error("unsafeHTML can only be used in text bindings");const i=Ci.get(e);if(void 0!==i&&ge(t)&&t===i.value&&e.value===i.fragment)return;const r=document.createElement("template");r.innerHTML=t;const n=document.importNode(r.content,!0);e.setValue(n),Ci.set(e,{value:t,fragment:n})});class Si extends(Qe(Zt,"leyendas.timeStamp","menues.timeStamp","banners.timeStamp","items.timeStamp","titulos.timeStamp","ui.media.timeStamp","screen.timeStamp")(qe)){constructor(){super(),this.hidden=!0,this.area="body",this.current="",this.numero=1,this.url="https://www.uocra.net/App/images/",this.titulo=null,this.banner=null,this.menu=null,this.item=null,this.leyenda=null}static get styles(){return Ye`
			${ri}
			${ci}
			${pi}

			:host {
				display: grid;
				position: relative;
                background-color: var(--color-blanco);
                overflow: hidden;
                padding: 0 !important;
			}
			:host([hidden]) {
				display: none;
			}
			#cuerpo {
                display: grid;
                height:100%;
				grid-gap: 0;
				grid-auto-flow: row;
                background-color: var(--color-blanco);
                overflow-x: hidden;
                overflow-y: auto;
                align-content: flex-start;
			}
			#titulo {
                width:100%;
                height:7vh;
                margin: 1vh 0 1vh 0;
				background-repeat: no-repeat;
				background-position: center center ;
                background-size: contain ;
            }
            #banner {
                width:100%;
                height:27vh;
				background-repeat: no-repeat;
				background-position: top center ;
                background-size: cover ;
                border-bottom-left-radius: 1rem;
                border-bottom-right-radius: 1rem;
            }
            svg{
                height:5vh;
                width:5vh;
            }
            #datos{
                display: grid;
                grid-template-rows: 10vh 4vh 10vh;
                grid-template-columns: 38vw 38vw;
                grid-gap: 2vh;
                justify-self: center;
                padding: 2vh 0 2vh 0;
            }
            #datos2{
                display: grid;
                grid-template-rows: 7vh;
                grid-template-columns: 38vw 38vw;
                grid-gap: 2vh;
                justify-self: center;
                padding: 2vh 0 2vh 0;
            }
            .opc{
                padding: 0 !important;
                border-radius: 1rem;
                justify-items: center;
                text-align: center;
                align-content: center;
                font-size: 2vh;
                cursor: pointer;
            }
            .opc1{
                grid-row-start:1;
                grid-row-end:3;
                width: 100%;
                height: 100%;
            }
            .opc2{
                width: 100%;
                height: 100%;
            }
            .opc3{
                grid-row-start:2;
                grid-row-end:4;                
                width: 100%;
                height: 100%;
            }
            .opc21{
                width: 100%;
                height: 100%;
            }
            .opc22{
                width: 100%;
                height: 100%;
            }
            .opcTexto{
                padding: 0 2vw 0 2vw;
            }
            .blanco{
                color: var(--color-blanco);
                fill: var(--color-blanco);
                stroke: transparent;
            }
            .negro{
                color: var(--color-negro);
                fill: transparent;
                stroke: var(--color-gris-oscuro);
            }
            .fondoVerde{
                background-color:var(--color-verde-claro);
            }
            .fondoGris{
                background-color:var(--color-gris-medio);
            }
            .fondoAmarillo{
                background-color:var(--color-amarillo-claro);
            }
            .fondoPrimario{
                background-color:var(--primary-color);
            }
            #leyenda{
                display: grid;
                font-size: var(--font-eader-h2-size);
                justify-self: center;
                width: 80%;
                padding-top: 1.5rem;
            }
            #items{
                grid-gap: 1rem !important;
                justify-items: center;
            }
            .item0{
                width: 100%;
                justify-items: center;
                grid-gap: 0 !important;
                padding: 0 !important;
            }
            .item{
                background-color: var(--color-gris-medio);
                height: 5vh;
                width: 80%;
                padding: 0 2vw 0 2vw !important;
                grid-gap: 0 !important;
                cursor: pointer;
                border-radius: .3rem;
            }
            .mas{
                text-align: right; 
            }
            .cuerpoNota{
                padding: 0  2vw 0 7vw !important;
                justify-self: flex-start;
                grid-gap: 0 !important;
            }
            *[hidden] {
                display: none;
            }
		`}render(){if(this.titulo)return Ie`
			<div id="cuerpo">
                ${""!=this.titulo[0].titulo?Ie`
                    <div id="titulo" style="background-image: url('${this.titulo[0].titulo}');">
                    </div>`:""}
                ${""!=this.banner[0].banner?Ie`
                    <div id="banner" style="background-image: url('${this.banner[0].banner}');">
                    </div>`:""}
                ${""!=this.menu[0].nombre?Ie`
				<div id="${this.menu[0].div}">
                    ${this.menu.filter(t=>t.tipo==this.current).map(t=>Ie` 
                            <div id="opc${t.id}" class="grid row opc ${t.clase}" .item=${t.goto} @click="${this.ir}">
                                <div>${ni[t.imagen]}</div>
                                <div class="opcTexto">${t.nombre}</div>
                            </div>
                        `)}
                </div>
                `:""}
                ${""!=this.leyenda[0].leyenda?Ie`
                    <div id="leyenda">
                        ${xi(this.leyenda[0].leyenda)}
                    </div>`:""}
                <div id="opciones">
                    <div id="items" class="grid row">
                        ${this.item.filter(t=>t.tipo==this.current).map(t=>Ie` 
                            <div class="grid row item0">
                                <div class="grid column item blanco" .item="${t.Id}" @click=${this.mostrar}>
                                    <div>${t.titulo}</div>
                                    <div id="mas${t.Id}" class="mas">+</div>
                                </div>
                                <div id="cuerpoNota${t.Id}" class="cuerpoNota" hidden>
                                    <div id="elCuerpo${t.Id}"></div>
                                    ${this.elCuerpo(t.Id,t.cuerpo)}            
                                </div>                  
                            </div>
                            `)}
                    </div>
                </div>
            </div>
        `}elCuerpo(t,e){let i=this.shadowRoot.querySelector("#elCuerpo"+t);i&&(i.outerHTML=e)}ir(t){-1!==t.currentTarget.item.indexOf("HTTPS:")?window.open(t.currentTarget.item,"_blank"):Zt.dispatch(M(t.currentTarget.item)),3==t.currentTarget.item&&"moecra"==this.current&&Zt.dispatch(M(t.currentTarget.item)),1==t.currentTarget.item&&"cemapsMapa"==this.current&&Zt.dispatch(M("compras"))}mostrar(t){let e=this.shadowRoot.querySelector("#cuerpoNota"+t.currentTarget.item),i=this.shadowRoot.querySelector("#mas"+t.currentTarget.item);e&&(e.hasAttribute("hidden")?([].forEach.call(this.shadowRoot.querySelectorAll(".cuerpoNota"),t=>{t.setAttribute("hidden","")}),[].forEach.call(this.shadowRoot.querySelectorAll(".mas"),t=>{t.innerHTML="+"}),e.removeAttribute("hidden"),i.innerHTML="-"):(e.setAttribute("hidden",""),i.innerHTML="+"))}stateChanged(t,e){if("screen.timeStamp"==e||"ui.media.timeStamp"==e){this.mediaSize=t.ui.media.size,this.hidden=!0,this.current=t.screen.name;const e=x(t,this.area),i=-1!="-sindicato-cultura-tv-moecra-salud-saludSeguridad-ivt-cine-".indexOf("-"+t.screen.name+"-");if(e&&i){if(this.hidden=!1,this.titulo){let e=t.titulos.entities;this.titulo=e.filter(t=>t.tipo==this.current)}if(this.banner){let e=t.banners.entities;this.banner=e.filter(t=>t.tipo==this.current)}if(this.menu){let e=t.menues.entities;this.menu=e.filter(t=>t.tipo==this.current)}if(this.leyenda){let e=t.leyendas.entities;this.leyenda=e.filter(t=>t.tipo==this.current)}this.update(),this.update()}}"menues.timeStamp"==e&&(this.menu=t.menues.entities),"items.timeStamp"==e&&(this.item=t.items.entities),"titulos.timeStamp"==e&&(this.titulo=t.titulos.entities),"banners.timeStamp"==e&&(this.banner=t.banners.entities),"leyendas.timeStamp"==e&&(this.leyenda=t.leyendas.entities)}volver(){Zt.dispatch(M("inicial"))}claveRecuperar(){Zt.dispatch(M("claveRecuperar"))}static get properties(){return{mediaSize:{type:String,reflect:!0,attribute:"media-size"},layout:{type:String,reflect:!0},hidden:{type:Boolean,reflect:!0},area:{type:String},current:{type:String,reflect:!0}}}}window.customElements.define("general-screen",Si);i(124);var Ei,Mi=i(76),Ti=i(145),Oi=i(15),Li=i(6),Ai=i(10),Ii=i(5),ji=(Ei=function(t,e){return(Ei=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(t,e)},function(t,e){function i(){this.constructor=t}Ei(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)});var Di=function(t){function e(e){var i=t.call(this)||this;if(i.id_=void 0,i.geometryName_="geometry",i.style_=null,i.styleFunction_=void 0,i.geometryChangeKey_=null,i.addEventListener(Object(Oi.b)(i.geometryName_),i.handleGeometryChanged_),e)if("function"==typeof e.getSimplifiedGeometry){var r=e;i.setGeometry(r)}else{var n=e;i.setProperties(n)}return i}return ji(e,t),e.prototype.clone=function(){var t=new e(this.hasProperties()?this.getProperties():null);t.setGeometryName(this.getGeometryName());var i=this.getGeometry();i&&t.setGeometry(i.clone());var r=this.getStyle();return r&&t.setStyle(r),t},e.prototype.getGeometry=function(){return this.get(this.geometryName_)},e.prototype.getId=function(){return this.id_},e.prototype.getGeometryName=function(){return this.geometryName_},e.prototype.getStyle=function(){return this.style_},e.prototype.getStyleFunction=function(){return this.styleFunction_},e.prototype.handleGeometryChange_=function(){this.changed()},e.prototype.handleGeometryChanged_=function(){this.geometryChangeKey_&&(Object(Ii.c)(this.geometryChangeKey_),this.geometryChangeKey_=null);var t=this.getGeometry();t&&(this.geometryChangeKey_=Object(Ii.a)(t,Li.a.CHANGE,this.handleGeometryChange_,this)),this.changed()},e.prototype.setGeometry=function(t){this.set(this.geometryName_,t)},e.prototype.setStyle=function(t){this.style_=t,this.styleFunction_=t?function(t){if("function"==typeof t)return t;var e;Array.isArray(t)?e=t:(Object(Ai.a)("function"==typeof t.getZIndex,41),e=[t]);return function(){return e}}(t):void 0,this.changed()},e.prototype.setId=function(t){this.id_=t,this.changed()},e.prototype.setGeometryName=function(t){this.removeEventListener(Object(Oi.b)(this.geometryName_),this.handleGeometryChanged_),this.geometryName_=t,this.addEventListener(Object(Oi.b)(this.geometryName_),this.handleGeometryChanged_),this.handleGeometryChanged_()},e}(Oi.a),Ri=i(82),zi=i(141),ki=i(143),Pi=i(35),Ni=i(9),Vi=i(1),Fi=i(26),Hi=function(){var t=function(e,i){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(e,i)};return function(e,i){function r(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(r.prototype=i.prototype,new r)}}(),Gi=function(t){function e(e,i,r){var n=t.call(this)||this,o=r||{};return n.tileCoord=e,n.state=i,n.interimTile=null,n.hifi=!0,n.key="",n.transition_=void 0===o.transition?250:o.transition,n.transitionStarts_={},n}return Hi(e,t),e.prototype.changed=function(){this.dispatchEvent(Li.a.CHANGE)},e.prototype.release=function(){},e.prototype.getKey=function(){return this.key+"/"+this.tileCoord},e.prototype.getInterimTile=function(){if(!this.interimTile)return this;var t=this.interimTile;do{if(t.getState()==Ni.a.LOADED)return this.transition_=0,t;t=t.interimTile}while(t);return this},e.prototype.refreshInterimChain=function(){if(this.interimTile){var t=this.interimTile,e=this;do{if(t.getState()==Ni.a.LOADED){t.interimTile=null;break}t.getState()==Ni.a.LOADING?e=t:t.getState()==Ni.a.IDLE?e.interimTile=t.interimTile:e=t,t=e.interimTile}while(t)}},e.prototype.getTileCoord=function(){return this.tileCoord},e.prototype.getState=function(){return this.state},e.prototype.setState=function(t){if(this.state!==Ni.a.ERROR&&this.state>t)throw new Error("Tile load sequence violation");this.state=t,this.changed()},e.prototype.load=function(){Object(Vi.b)()},e.prototype.getAlpha=function(t,e){if(!this.transition_)return 1;var i=this.transitionStarts_[t];if(i){if(-1===i)return 1}else i=e,this.transitionStarts_[t]=i;var r=e-i+1e3/60;return r>=this.transition_?1:Object(Fi.a)(r/this.transition_)},e.prototype.inTransition=function(t){return!!this.transition_&&-1!==this.transitionStarts_[t]},e.prototype.endTransition=function(t){this.transition_&&(this.transitionStarts_[t]=-1)},e}(Pi.a),Xi=i(13),Ui=i(69),Bi=function(){var t=function(e,i){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(e,i)};return function(e,i){function r(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(r.prototype=i.prototype,new r)}}();var $i,Zi=function(t){function e(e,i,r,n,o,a){var s=t.call(this,e,i,a)||this;return s.crossOrigin_=n,s.src_=r,s.image_=new Image,null!==n&&(s.image_.crossOrigin=n),s.unlisten_=null,s.tileLoadFunction_=o,s}return Bi(e,t),e.prototype.getImage=function(){return this.image_},e.prototype.getKey=function(){return this.src_},e.prototype.handleImageError_=function(){var t;this.state=Ni.a.ERROR,this.unlistenImage_(),this.image_=((t=Object(Xi.a)(1,1)).fillStyle="rgba(0,0,0,0)",t.fillRect(0,0,1,1),t.canvas),this.changed()},e.prototype.handleImageLoad_=function(){var t=this.image_;t.naturalWidth&&t.naturalHeight?this.state=Ni.a.LOADED:this.state=Ni.a.EMPTY,this.unlistenImage_(),this.changed()},e.prototype.load=function(){this.state==Ni.a.ERROR&&(this.state=Ni.a.IDLE,this.image_=new Image,null!==this.crossOrigin_&&(this.image_.crossOrigin=this.crossOrigin_)),this.state==Ni.a.IDLE&&(this.state=Ni.a.LOADING,this.changed(),this.tileLoadFunction_(this,this.src_),this.unlisten_=Object(Ui.a)(this.image_,this.handleImageLoad_.bind(this),this.handleImageError_.bind(this)))},e.prototype.unlistenImage_=function(){this.unlisten_&&(this.unlisten_(),this.unlisten_=null)},e}(Gi),Yi=i(0),Wi=i(8),qi=i(4),Ki=function(){function t(t,e,i,r,n,o){this.sourceProj_=t,this.targetProj_=e;var a={},s=Object(Wi.h)(this.targetProj_,this.sourceProj_);this.transformInv_=function(t){var e=t[0]+"/"+t[1];return a[e]||(a[e]=s(t)),a[e]},this.maxSourceExtent_=r,this.errorThresholdSquared_=n*n,this.triangles_=[],this.wrapsXInSource_=!1,this.canWrapXInSource_=this.sourceProj_.canWrapX()&&!!r&&!!this.sourceProj_.getExtent()&&Object(Yi.E)(r)==Object(Yi.E)(this.sourceProj_.getExtent()),this.sourceWorldWidth_=this.sourceProj_.getExtent()?Object(Yi.E)(this.sourceProj_.getExtent()):null,this.targetWorldWidth_=this.targetProj_.getExtent()?Object(Yi.E)(this.targetProj_.getExtent()):null;var c=Object(Yi.C)(i),l=Object(Yi.D)(i),d=Object(Yi.w)(i),u=Object(Yi.v)(i),p=this.transformInv_(c),h=this.transformInv_(l),f=this.transformInv_(d),m=this.transformInv_(u),g=10+(o?Math.max(0,Math.ceil(Object(qi.d)(Object(Yi.u)(i)/(o*o*256*256)))):0);if(this.addQuad_(c,l,d,u,p,h,f,m,g),this.wrapsXInSource_){var v=1/0;this.triangles_.forEach((function(t,e,i){v=Math.min(v,t.source[0][0],t.source[1][0],t.source[2][0])})),this.triangles_.forEach(function(t){if(Math.max(t.source[0][0],t.source[1][0],t.source[2][0])-v>this.sourceWorldWidth_/2){var e=[[t.source[0][0],t.source[0][1]],[t.source[1][0],t.source[1][1]],[t.source[2][0],t.source[2][1]]];e[0][0]-v>this.sourceWorldWidth_/2&&(e[0][0]-=this.sourceWorldWidth_),e[1][0]-v>this.sourceWorldWidth_/2&&(e[1][0]-=this.sourceWorldWidth_),e[2][0]-v>this.sourceWorldWidth_/2&&(e[2][0]-=this.sourceWorldWidth_);var i=Math.min(e[0][0],e[1][0],e[2][0]);Math.max(e[0][0],e[1][0],e[2][0])-i<this.sourceWorldWidth_/2&&(t.source=e)}}.bind(this))}a={}}return t.prototype.addTriangle_=function(t,e,i,r,n,o){this.triangles_.push({source:[r,n,o],target:[t,e,i]})},t.prototype.addQuad_=function(t,e,i,r,n,o,a,s,c){var l=Object(Yi.b)([n,o,a,s]),d=this.sourceWorldWidth_?Object(Yi.E)(l)/this.sourceWorldWidth_:null,u=this.sourceWorldWidth_,p=this.sourceProj_.canWrapX()&&d>.5&&d<1,h=!1;if(c>0){if(this.targetProj_.isGlobal()&&this.targetWorldWidth_){var f=Object(Yi.b)([t,e,i,r]);h=Object(Yi.E)(f)/this.targetWorldWidth_>.25||h}!p&&this.sourceProj_.isGlobal()&&d&&(h=d>.25||h)}if(!(!h&&this.maxSourceExtent_&&isFinite(l[0])&&isFinite(l[1])&&isFinite(l[2])&&isFinite(l[3]))||Object(Yi.F)(l,this.maxSourceExtent_)){var m=0;if(!(h||isFinite(n[0])&&isFinite(n[1])&&isFinite(o[0])&&isFinite(o[1])&&isFinite(a[0])&&isFinite(a[1])&&isFinite(s[0])&&isFinite(s[1])))if(c>0)h=!0;else if(1!=(m=(isFinite(n[0])&&isFinite(n[1])?0:8)+(isFinite(o[0])&&isFinite(o[1])?0:4)+(isFinite(a[0])&&isFinite(a[1])?0:2)+(isFinite(s[0])&&isFinite(s[1])?0:1))&&2!=m&&4!=m&&8!=m)return;if(c>0){if(!h){var g=[(t[0]+i[0])/2,(t[1]+i[1])/2],v=this.transformInv_(g),y=void 0;if(p)y=(Object(qi.e)(n[0],u)+Object(qi.e)(a[0],u))/2-Object(qi.e)(v[0],u);else y=(n[0]+a[0])/2-v[0];var b=(n[1]+a[1])/2-v[1];h=y*y+b*b>this.errorThresholdSquared_}if(h){if(Math.abs(t[0]-i[0])<=Math.abs(t[1]-i[1])){var _=[(e[0]+i[0])/2,(e[1]+i[1])/2],w=this.transformInv_(_),C=[(r[0]+t[0])/2,(r[1]+t[1])/2],x=this.transformInv_(C);this.addQuad_(t,e,_,C,n,o,w,x,c-1),this.addQuad_(C,_,i,r,x,w,a,s,c-1)}else{var S=[(t[0]+e[0])/2,(t[1]+e[1])/2],E=this.transformInv_(S),M=[(i[0]+r[0])/2,(i[1]+r[1])/2],T=this.transformInv_(M);this.addQuad_(t,S,M,r,n,E,T,s,c-1),this.addQuad_(S,e,i,M,E,o,a,T,c-1)}return}}if(p){if(!this.canWrapXInSource_)return;this.wrapsXInSource_=!0}0==(11&m)&&this.addTriangle_(t,i,r,n,a,s),0==(14&m)&&this.addTriangle_(t,i,e,n,a,o),m&&(0==(13&m)&&this.addTriangle_(e,r,t,o,s,n),0==(7&m)&&this.addTriangle_(e,r,i,o,s,a))}},t.prototype.calculateSourceExtent=function(){var t=Object(Yi.j)();return this.triangles_.forEach((function(e,i,r){var n=e.source;Object(Yi.r)(t,n[0]),Object(Yi.r)(t,n[1]),Object(Yi.r)(t,n[2])})),t},t.prototype.getTriangles=function(){return this.triangles_},t}(),Ji={imageSmoothingEnabled:!1,msImageSmoothingEnabled:!1},Qi=i(11);function tr(t,e,i,r,n){t.beginPath(),t.moveTo(0,0),t.lineTo(e,i),t.lineTo(r,n),t.closePath(),t.save(),t.clip(),t.fillRect(0,0,Math.max(e,r)+1,Math.max(i,n)),t.restore()}function er(t,e){return Math.abs(t[4*e]-210)>2||Math.abs(t[4*e+3]-191.25)>2}function ir(t,e,i,r){var n=Object(Wi.m)(i,e,t),o=Object(Wi.g)(e,r,i),a=e.getMetersPerUnit();void 0!==a&&(o*=a);var s=t.getMetersPerUnit();void 0!==s&&(o/=s);var c=t.getExtent();if(!c||Object(Yi.f)(c,n)){var l=Object(Wi.g)(t,o,n)/o;isFinite(l)&&l>0&&(o/=l)}return o}function rr(t,e,i,r,n,o,a,s,c,l,d,u){var p=Object(Xi.a)(Math.round(i*t),Math.round(i*e));if(Object(Qi.a)(p,u),0===c.length)return p.canvas;function h(t){return Math.round(t*i)/i}p.scale(i,i),p.globalCompositeOperation="lighter";var f=Object(Yi.j)();c.forEach((function(t,e,i){Object(Yi.q)(f,t.extent)}));var m=Object(Yi.E)(f),g=Object(Yi.A)(f),v=Object(Xi.a)(Math.round(i*m/r),Math.round(i*g/r));Object(Qi.a)(v,u);var y=i/r;c.forEach((function(t,e,i){var r=t.extent[0]-f[0],n=-(t.extent[3]-f[3]),o=Object(Yi.E)(t.extent),a=Object(Yi.A)(t.extent);t.image.width>0&&t.image.height>0&&v.drawImage(t.image,l,l,t.image.width-2*l,t.image.height-2*l,r*y,n*y,o*y,a*y)}));var b=Object(Yi.C)(a);return s.getTriangles().forEach((function(t,e,n){var a=t.source,s=t.target,c=a[0][0],l=a[0][1],d=a[1][0],m=a[1][1],g=a[2][0],y=a[2][1],_=h((s[0][0]-b[0])/o),w=h(-(s[0][1]-b[1])/o),C=h((s[1][0]-b[0])/o),x=h(-(s[1][1]-b[1])/o),S=h((s[2][0]-b[0])/o),E=h(-(s[2][1]-b[1])/o),M=c,T=l;c=0,l=0;var O=[[d-=M,m-=T,0,0,C-_],[g-=M,y-=T,0,0,S-_],[0,0,d,m,x-w],[0,0,g,y,E-w]],L=Object(qi.f)(O);if(L){if(p.save(),p.beginPath(),function(){if(void 0===$i){var t=document.createElement("canvas").getContext("2d");t.globalCompositeOperation="lighter",t.fillStyle="rgba(210, 0, 0, 0.75)",tr(t,4,5,4,0),tr(t,4,5,0,5);var e=t.getImageData(0,0,3,3).data;$i=er(e,0)||er(e,4)||er(e,8)}return $i}()||u===Ji){p.moveTo(C,x);for(var A=_-C,I=w-x,j=0;j<4;j++)p.lineTo(C+h((j+1)*A/4),x+h(j*I/3)),3!=j&&p.lineTo(C+h((j+1)*A/4),x+h((j+1)*I/3));p.lineTo(S,E)}else p.moveTo(C,x),p.lineTo(_,w),p.lineTo(S,E);p.clip(),p.transform(L[0],L[2],L[1],L[3],_,w),p.translate(f[0]-M,f[3]-T),p.scale(r/i,-r/i),p.drawImage(v.canvas,0,0),p.restore()}})),d&&(p.save(),p.globalCompositeOperation="source-over",p.strokeStyle="black",p.lineWidth=1,s.getTriangles().forEach((function(t,e,i){var r=t.target,n=(r[0][0]-b[0])/o,a=-(r[0][1]-b[1])/o,s=(r[1][0]-b[0])/o,c=-(r[1][1]-b[1])/o,l=(r[2][0]-b[0])/o,d=-(r[2][1]-b[1])/o;p.beginPath(),p.moveTo(s,c),p.lineTo(n,a),p.lineTo(l,d),p.closePath(),p.stroke()})),p.restore()),p.canvas}var nr=function(){var t=function(e,i){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(e,i)};return function(e,i){function r(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(r.prototype=i.prototype,new r)}}(),or=function(t){function e(e,i,r,n,o,a,s,c,l,d,u,p){var h=t.call(this,o,Ni.a.IDLE)||this;h.renderEdges_=void 0!==u&&u,h.contextOptions_=p,h.pixelRatio_=s,h.gutter_=c,h.canvas_=null,h.sourceTileGrid_=i,h.targetTileGrid_=n,h.wrappedTileCoord_=a||o,h.sourceTiles_=[],h.sourcesListenerKeys_=null,h.sourceZ_=0;var f=n.getTileCoordExtent(h.wrappedTileCoord_),m=h.targetTileGrid_.getExtent(),g=h.sourceTileGrid_.getExtent(),v=m?Object(Yi.B)(f,m):f;if(0===Object(Yi.u)(v))return h.state=Ni.a.EMPTY,h;var y=e.getExtent();y&&(g=g?Object(Yi.B)(g,y):y);var b=n.getResolution(h.wrappedTileCoord_[0]),_=function(t,e,i,r){var n=Object(Yi.x)(i),o=ir(t,e,n,r);return(!isFinite(o)||o<=0)&&Object(Yi.t)(i,(function(i){return o=ir(t,e,i,r),isFinite(o)&&o>0})),o}(e,r,v,b);if(!isFinite(_)||_<=0)return h.state=Ni.a.EMPTY,h;var w=void 0!==d?d:.5;if(h.triangulation_=new Ki(e,r,v,g,_*w,b),0===h.triangulation_.getTriangles().length)return h.state=Ni.a.EMPTY,h;h.sourceZ_=i.getZForResolution(_);var C=h.triangulation_.calculateSourceExtent();if(g&&(e.canWrapX()?(C[1]=Object(qi.a)(C[1],g[1],g[3]),C[3]=Object(qi.a)(C[3],g[1],g[3])):C=Object(Yi.B)(C,g)),Object(Yi.u)(C)){for(var x=i.getTileRangeForExtentAndZ(C,h.sourceZ_),S=x.minX;S<=x.maxX;S++)for(var E=x.minY;E<=x.maxY;E++){var M=l(h.sourceZ_,S,E,s);M&&h.sourceTiles_.push(M)}0===h.sourceTiles_.length&&(h.state=Ni.a.EMPTY)}else h.state=Ni.a.EMPTY;return h}return nr(e,t),e.prototype.getImage=function(){return this.canvas_},e.prototype.reproject_=function(){var t=[];if(this.sourceTiles_.forEach(function(e,i,r){e&&e.getState()==Ni.a.LOADED&&t.push({extent:this.sourceTileGrid_.getTileCoordExtent(e.tileCoord),image:e.getImage()})}.bind(this)),this.sourceTiles_.length=0,0===t.length)this.state=Ni.a.ERROR;else{var e=this.wrappedTileCoord_[0],i=this.targetTileGrid_.getTileSize(e),r="number"==typeof i?i:i[0],n="number"==typeof i?i:i[1],o=this.targetTileGrid_.getResolution(e),a=this.sourceTileGrid_.getResolution(this.sourceZ_),s=this.targetTileGrid_.getTileCoordExtent(this.wrappedTileCoord_);this.canvas_=rr(r,n,this.pixelRatio_,a,this.sourceTileGrid_.getExtent(),o,s,this.triangulation_,t,this.gutter_,this.renderEdges_,this.contextOptions_),this.state=Ni.a.LOADED}this.changed()},e.prototype.load=function(){if(this.state==Ni.a.IDLE){this.state=Ni.a.LOADING,this.changed();var t=0;this.sourcesListenerKeys_=[],this.sourceTiles_.forEach(function(e,i,r){var n=e.getState();if(n==Ni.a.IDLE||n==Ni.a.LOADING){t++;var o=Object(Ii.a)(e,Li.a.CHANGE,(function(i){var r=e.getState();r!=Ni.a.LOADED&&r!=Ni.a.ERROR&&r!=Ni.a.EMPTY||(Object(Ii.c)(o),0===--t&&(this.unlistenSources_(),this.reproject_()))}),this);this.sourcesListenerKeys_.push(o)}}.bind(this)),this.sourceTiles_.forEach((function(t,e,i){t.getState()==Ni.a.IDLE&&t.load()})),0===t&&setTimeout(this.reproject_.bind(this),0)}},e.prototype.unlistenSources_=function(){this.sourcesListenerKeys_.forEach(Ii.c),this.sourcesListenerKeys_=null},e}(Gi),ar=function(){function t(t){this.highWaterMark=void 0!==t?t:2048,this.count_=0,this.entries_={},this.oldest_=null,this.newest_=null}return t.prototype.canExpireCache=function(){return this.highWaterMark>0&&this.getCount()>this.highWaterMark},t.prototype.clear=function(){this.count_=0,this.entries_={},this.oldest_=null,this.newest_=null},t.prototype.containsKey=function(t){return this.entries_.hasOwnProperty(t)},t.prototype.forEach=function(t){for(var e=this.oldest_;e;)t(e.value_,e.key_,this),e=e.newer},t.prototype.get=function(t,e){var i=this.entries_[t];return Object(Ai.a)(void 0!==i,15),i===this.newest_||(i===this.oldest_?(this.oldest_=this.oldest_.newer,this.oldest_.older=null):(i.newer.older=i.older,i.older.newer=i.newer),i.newer=null,i.older=this.newest_,this.newest_.newer=i,this.newest_=i),i.value_},t.prototype.remove=function(t){var e=this.entries_[t];return Object(Ai.a)(void 0!==e,15),e===this.newest_?(this.newest_=e.older,this.newest_&&(this.newest_.newer=null)):e===this.oldest_?(this.oldest_=e.newer,this.oldest_&&(this.oldest_.older=null)):(e.newer.older=e.older,e.older.newer=e.newer),delete this.entries_[t],--this.count_,e.value_},t.prototype.getCount=function(){return this.count_},t.prototype.getKeys=function(){var t,e=new Array(this.count_),i=0;for(t=this.newest_;t;t=t.older)e[i++]=t.key_;return e},t.prototype.getValues=function(){var t,e=new Array(this.count_),i=0;for(t=this.newest_;t;t=t.older)e[i++]=t.value_;return e},t.prototype.peekLast=function(){return this.oldest_.value_},t.prototype.peekLastKey=function(){return this.oldest_.key_},t.prototype.peekFirstKey=function(){return this.newest_.key_},t.prototype.pop=function(){var t=this.oldest_;return delete this.entries_[t.key_],t.newer&&(t.newer.older=null),this.oldest_=t.newer,this.oldest_||(this.newest_=null),--this.count_,t.value_},t.prototype.replace=function(t,e){this.get(t),this.entries_[t].value_=e},t.prototype.set=function(t,e){Object(Ai.a)(!(t in this.entries_),16);var i={key_:t,newer:null,older:this.newest_,value_:e};this.newest_?this.newest_.newer=i:this.oldest_=i,this.newest_=i,this.entries_[t]=i,++this.count_},t.prototype.setSize=function(t){this.highWaterMark=t},t}(),sr=i(31),cr=function(){var t=function(e,i){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(e,i)};return function(e,i){function r(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(r.prototype=i.prototype,new r)}}(),lr=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return cr(e,t),e.prototype.expireCache=function(t){for(;this.canExpireCache();){if(this.peekLast().getKey()in t)break;this.pop().release()}},e.prototype.pruneExceptNewestZ=function(){if(0!==this.getCount()){var t=this.peekFirstKey(),e=Object(sr.b)(t)[0];this.forEach(function(t){t.tileCoord[0]!==e&&(this.remove(Object(sr.c)(t.tileCoord)),t.release())}.bind(this))}},e}(ar),dr="tileloadstart",ur="tileloadend",pr="tileloaderror",hr=i(30),fr=i(65),mr=i(44),gr=i(28),vr=function(){var t=function(e,i){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(e,i)};return function(e,i){function r(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(r.prototype=i.prototype,new r)}}(),yr=function(t){function e(e){var i=t.call(this,{attributions:e.attributions,attributionsCollapsible:e.attributionsCollapsible,projection:e.projection,state:e.state,wrapX:e.wrapX})||this;i.opaque_=void 0!==e.opaque&&e.opaque,i.tilePixelRatio_=void 0!==e.tilePixelRatio?e.tilePixelRatio:1,i.tileGrid=void 0!==e.tileGrid?e.tileGrid:null;var r=e.tileGrid;return r&&Object(gr.c)(r.getTileSize(r.getMinZoom()),[256,256]),i.tileCache=new lr(e.cacheSize||0),i.tmpSize=[0,0],i.key_=e.key||"",i.tileOptions={transition:e.transition},i.zDirection=e.zDirection?e.zDirection:0,i}return vr(e,t),e.prototype.canExpireCache=function(){return this.tileCache.canExpireCache()},e.prototype.expireCache=function(t,e){var i=this.getTileCacheForProjection(t);i&&i.expireCache(e)},e.prototype.forEachLoadedTile=function(t,e,i,r){var n=this.getTileCacheForProjection(t);if(!n)return!1;for(var o,a,s,c=!0,l=i.minX;l<=i.maxX;++l)for(var d=i.minY;d<=i.maxY;++d)a=Object(sr.d)(e,l,d),s=!1,n.containsKey(a)&&(s=(o=n.get(a)).getState()===Ni.a.LOADED)&&(s=!1!==r(o)),s||(c=!1);return c},e.prototype.getGutterForProjection=function(t){return 0},e.prototype.getKey=function(){return this.key_},e.prototype.setKey=function(t){this.key_!==t&&(this.key_=t,this.changed())},e.prototype.getOpaque=function(t){return this.opaque_},e.prototype.getResolutions=function(){return this.tileGrid.getResolutions()},e.prototype.getTile=function(t,e,i,r,n){return Object(Vi.b)()},e.prototype.getTileGrid=function(){return this.tileGrid},e.prototype.getTileGridForProjection=function(t){return this.tileGrid?this.tileGrid:Object(mr.c)(t)},e.prototype.getTileCacheForProjection=function(t){var e=this.getProjection();return e&&!Object(Wi.c)(e,t)?null:this.tileCache},e.prototype.getTilePixelRatio=function(t){return this.tilePixelRatio_},e.prototype.getTilePixelSize=function(t,e,i){var r=this.getTileGridForProjection(i),n=this.getTilePixelRatio(e),o=Object(gr.c)(r.getTileSize(t),this.tmpSize);return 1==n?o:Object(gr.b)(o,n,this.tmpSize)},e.prototype.getTileCoordForTileUrlFunction=function(t,e){var i=void 0!==e?e:this.getProjection(),r=this.getTileGridForProjection(i);return this.getWrapX()&&i.isGlobal()&&(t=Object(mr.d)(r,t,i)),Object(sr.f)(t,r)?t:null},e.prototype.clear=function(){this.tileCache.clear()},e.prototype.refresh=function(){this.clear(),t.prototype.refresh.call(this)},e.prototype.updateCacheSize=function(t,e){var i=this.getTileCacheForProjection(e);t>i.highWaterMark&&(i.highWaterMark=t)},e.prototype.useTile=function(t,e,i,r){},e}(fr.a),br=function(t){function e(e,i){var r=t.call(this,e)||this;return r.tile=i,r}return vr(e,t),e}(hr.a),_r=yr;function wr(t,e){var i=/\{z\}/g,r=/\{x\}/g,n=/\{y\}/g,o=/\{-y\}/g;return function(a,s,c){return a?t.replace(i,a[0].toString()).replace(r,a[1].toString()).replace(n,a[2].toString()).replace(o,(function(){var t=a[0],i=e.getFullTileRange(t);return Object(Ai.a)(i,55),(i.getHeight()-a[2]-1).toString()})):void 0}}function Cr(t,e){for(var i=t.length,r=new Array(i),n=0;n<i;++n)r[n]=wr(t[n],e);return function(t){if(1===t.length)return t[0];return function(e,i,r){if(e){var n=Object(sr.e)(e),o=Object(qi.e)(n,t.length);return t[o](e,i,r)}}}(r)}var xr=function(){var t=function(e,i){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(e,i)};return function(e,i){function r(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(r.prototype=i.prototype,new r)}}(),Sr=function(t){function e(i){var r=t.call(this,{attributions:i.attributions,cacheSize:i.cacheSize,opaque:i.opaque,projection:i.projection,state:i.state,tileGrid:i.tileGrid,tilePixelRatio:i.tilePixelRatio,wrapX:i.wrapX,transition:i.transition,key:i.key,attributionsCollapsible:i.attributionsCollapsible,zDirection:i.zDirection})||this;return r.generateTileUrlFunction_=r.tileUrlFunction===e.prototype.tileUrlFunction,r.tileLoadFunction=i.tileLoadFunction,i.tileUrlFunction&&(r.tileUrlFunction=i.tileUrlFunction.bind(r)),r.urls=null,i.urls?r.setUrls(i.urls):i.url&&r.setUrl(i.url),r.tileLoadingKeys_={},r}return xr(e,t),e.prototype.getTileLoadFunction=function(){return this.tileLoadFunction},e.prototype.getTileUrlFunction=function(){return this.tileUrlFunction},e.prototype.getUrls=function(){return this.urls},e.prototype.handleTileChange=function(t){var e,i=t.target,r=Object(Vi.c)(i),n=i.getState();n==Ni.a.LOADING?(this.tileLoadingKeys_[r]=!0,e=dr):r in this.tileLoadingKeys_&&(delete this.tileLoadingKeys_[r],e=n==Ni.a.ERROR?pr:n==Ni.a.LOADED?ur:void 0),null!=e&&this.dispatchEvent(new br(e,i))},e.prototype.setTileLoadFunction=function(t){this.tileCache.clear(),this.tileLoadFunction=t,this.changed()},e.prototype.setTileUrlFunction=function(t,e){this.tileUrlFunction=t,this.tileCache.pruneExceptNewestZ(),void 0!==e?this.setKey(e):this.changed()},e.prototype.setUrl=function(t){var e=function(t){var e=[],i=/\{([a-z])-([a-z])\}/.exec(t);if(i){var r=i[1].charCodeAt(0),n=i[2].charCodeAt(0),o=void 0;for(o=r;o<=n;++o)e.push(t.replace(i[0],String.fromCharCode(o)));return e}if(i=/\{(\d+)-(\d+)\}/.exec(t)){for(var a=parseInt(i[2],10),s=parseInt(i[1],10);s<=a;s++)e.push(t.replace(i[0],s.toString()));return e}return e.push(t),e}(t);this.urls=e,this.setUrls(e)},e.prototype.setUrls=function(t){this.urls=t;var e=t.join("\n");this.generateTileUrlFunction_?this.setTileUrlFunction(Cr(t,this.tileGrid),e):this.setKey(e)},e.prototype.tileUrlFunction=function(t,e,i){},e.prototype.useTile=function(t,e,i){var r=Object(sr.d)(t,e,i);this.tileCache.containsKey(r)&&this.tileCache.get(r)},e}(_r),Er=function(){var t=function(e,i){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(e,i)};return function(e,i){function r(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(r.prototype=i.prototype,new r)}}();function Mr(t,e){t.getImage().src=e}var Tr=function(t){function e(e){var i=t.call(this,{attributions:e.attributions,cacheSize:e.cacheSize,opaque:e.opaque,projection:e.projection,state:e.state,tileGrid:e.tileGrid,tileLoadFunction:e.tileLoadFunction?e.tileLoadFunction:Mr,tilePixelRatio:e.tilePixelRatio,tileUrlFunction:e.tileUrlFunction,url:e.url,urls:e.urls,wrapX:e.wrapX,transition:e.transition,key:e.key,attributionsCollapsible:e.attributionsCollapsible,zDirection:e.zDirection})||this;return i.crossOrigin=void 0!==e.crossOrigin?e.crossOrigin:null,i.tileClass=void 0!==e.tileClass?e.tileClass:Zi,i.tileCacheForProjection={},i.tileGridForProjection={},i.reprojectionErrorThreshold_=e.reprojectionErrorThreshold,i.contextOptions_=!1===e.imageSmoothing?Ji:void 0,i.renderReprojectionEdges_=!1,i}return Er(e,t),e.prototype.canExpireCache=function(){if(this.tileCache.canExpireCache())return!0;for(var t in this.tileCacheForProjection)if(this.tileCacheForProjection[t].canExpireCache())return!0;return!1},e.prototype.expireCache=function(t,e){var i=this.getTileCacheForProjection(t);for(var r in this.tileCache.expireCache(this.tileCache==i?e:{}),this.tileCacheForProjection){var n=this.tileCacheForProjection[r];n.expireCache(n==i?e:{})}},e.prototype.getContextOptions=function(){return this.contextOptions_},e.prototype.getGutterForProjection=function(t){return this.getProjection()&&t&&!Object(Wi.c)(this.getProjection(),t)?0:this.getGutter()},e.prototype.getGutter=function(){return 0},e.prototype.getKey=function(){return t.prototype.getKey.call(this)+(this.contextOptions_?"\n"+JSON.stringify(this.contextOptions_):"")},e.prototype.getOpaque=function(e){return!(this.getProjection()&&e&&!Object(Wi.c)(this.getProjection(),e))&&t.prototype.getOpaque.call(this,e)},e.prototype.getTileGridForProjection=function(t){var e=this.getProjection();if(!this.tileGrid||e&&!Object(Wi.c)(e,t)){var i=Object(Vi.c)(t);return i in this.tileGridForProjection||(this.tileGridForProjection[i]=Object(mr.c)(t)),this.tileGridForProjection[i]}return this.tileGrid},e.prototype.getTileCacheForProjection=function(t){var e=this.getProjection();if(!e||Object(Wi.c)(e,t))return this.tileCache;var i=Object(Vi.c)(t);return i in this.tileCacheForProjection||(this.tileCacheForProjection[i]=new lr(this.tileCache.highWaterMark)),this.tileCacheForProjection[i]},e.prototype.createTile_=function(t,e,i,r,n,o){var a=[t,e,i],s=this.getTileCoordForTileUrlFunction(a,n),c=s?this.tileUrlFunction(s,r,n):void 0,l=new this.tileClass(a,void 0!==c?Ni.a.IDLE:Ni.a.EMPTY,void 0!==c?c:"",this.crossOrigin,this.tileLoadFunction,this.tileOptions);return l.key=o,l.addEventListener(Li.a.CHANGE,this.handleTileChange.bind(this)),l},e.prototype.getTile=function(t,e,i,r,n){var o=this.getProjection();if(o&&n&&!Object(Wi.c)(o,n)){var a=this.getTileCacheForProjection(n),s=[t,e,i],c=void 0,l=Object(sr.c)(s);a.containsKey(l)&&(c=a.get(l));var d=this.getKey();if(c&&c.key==d)return c;var u=this.getTileGridForProjection(o),p=this.getTileGridForProjection(n),h=this.getTileCoordForTileUrlFunction(s,n),f=new or(o,u,n,p,s,h,this.getTilePixelRatio(r),this.getGutter(),function(t,e,i,r){return this.getTileInternal(t,e,i,r,o)}.bind(this),this.reprojectionErrorThreshold_,this.renderReprojectionEdges_,this.contextOptions_);return f.key=d,c?(f.interimTile=c,f.refreshInterimChain(),a.replace(l,f)):a.set(l,f),f}return this.getTileInternal(t,e,i,r,o||n)},e.prototype.getTileInternal=function(t,e,i,r,n){var o=null,a=Object(sr.d)(t,e,i),s=this.getKey();if(this.tileCache.containsKey(a)){if((o=this.tileCache.get(a)).key!=s){var c=o;o=this.createTile_(t,e,i,r,n,s),c.getState()==Ni.a.IDLE?o.interimTile=c.interimTile:o.interimTile=c,o.refreshInterimChain(),this.tileCache.replace(a,o)}}else o=this.createTile_(t,e,i,r,n,s),this.tileCache.set(a,o);return o},e.prototype.setRenderReprojectionEdges=function(t){if(this.renderReprojectionEdges_!=t){for(var e in this.renderReprojectionEdges_=t,this.tileCacheForProjection)this.tileCacheForProjection[e].clear();this.changed()}},e.prototype.setTileGridForProjection=function(t,e){var i=Object(Wi.f)(t);if(i){var r=Object(Vi.c)(i);r in this.tileGridForProjection||(this.tileGridForProjection[r]=e)}},e}(Sr),Or=function(){var t=function(e,i){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(e,i)};return function(e,i){function r(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(r.prototype=i.prototype,new r)}}(),Lr=function(t){function e(e){var i=e||{},r=void 0!==i.projection?i.projection:"EPSG:3857",n=void 0!==i.tileGrid?i.tileGrid:Object(mr.a)({extent:Object(mr.b)(r),maxResolution:i.maxResolution,maxZoom:i.maxZoom,minZoom:i.minZoom,tileSize:i.tileSize});return t.call(this,{attributions:i.attributions,cacheSize:i.cacheSize,crossOrigin:i.crossOrigin,imageSmoothing:i.imageSmoothing,opaque:i.opaque,projection:r,reprojectionErrorThreshold:i.reprojectionErrorThreshold,tileGrid:n,tileLoadFunction:i.tileLoadFunction,tilePixelRatio:i.tilePixelRatio,tileUrlFunction:i.tileUrlFunction,url:i.url,urls:i.urls,wrapX:void 0===i.wrapX||i.wrapX,transition:i.transition,attributionsCollapsible:i.attributionsCollapsible,zDirection:i.zDirection})||this}return Or(e,t),e}(Tr),Ar=i(81),Ir=i(142),jr=i(144);window.customElements.define("ol-map",class extends qe{constructor(){super(),this._puntos=[],this.iconStyles={elIcono:new Mi.b({image:new Ti.a({anchor:[.5,.5],anchorXUnits:"fraction",anchorYUnits:"fraction",src:Zt.getState().ui.urls.imagenes+"iconConstruirSalud.gif",scale:[.1,.1]})}),posicion:new Mi.b({image:new Ti.a({anchor:[.5,.5],anchorXUnits:"fraction",anchorYUnits:"fraction",src:Zt.getState().ui.urls.imagenes+"posicion.gif",scale:[.1,.1]})}),casco:new Mi.b({image:new Ti.a({anchor:[.4,.4],anchorXUnits:"fraction",anchorYUnits:"fraction",src:Zt.getState().ui.urls.imagenes+"casco.gif",scale:[.1,.1]})})}}firstUpdated(){Object(Wi.n)();const t=document.createElement("link");t.setAttribute("rel","stylesheet"),t.setAttribute("href","css/ol.css"),this.shadowRoot.appendChild(t);const e=this._puntos.length,i=new Array(e);for(var r=0;r<e;++r)i[r]=new Di(new Ar.a(this._puntos[r])),"N"==this._puntos[r][4]?(i[r].setStyle(this.iconStyles.elIcono),i[r].getStyle().setZIndex(99)):"S"==this._puntos[r][4]?(i[r].setStyle(this.iconStyles.posicion),i[r].getStyle().setZIndex(100)):(i[r].setStyle(this.iconStyles.casco),i[r].getStyle().setZIndex(100));var n=new ki.a({features:i});if(this.vectorLayer=new Ir.a({source:n}),this.tileLayer=new jr.a({source:new Lr({url:"https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"})}),this.view=new Ri.a({center:this._puntos[0],zoom:8}),this.layers=[this.tileLayer,this.vectorLayer],this.map=new zi.a({target:this.shadowRoot.querySelector("#map"),layers:this.layers,view:this.view}),this.map){this.map.on("singleclick",(function(t){this.forEachFeatureAtPixel(t.pixel,(function(e){Zt.dispatch(f(e,t))}))}));var o=this.map.getView().getZoom();this.map.on("postrender",(function(t){var e=this.getView().getZoom();if(e!=o){var i=t.map.getLayers().array_[1].values_.source.uidIndex_,r=e<6?.08:(e+3)/100;for(let t in i)i[t].style_.image_.setScale([r,r]);o=e}}))}}static get styles(){return Ye`
            :host {
                display: block;
            }
            button[title="Attributions"],
            button[title="Reset rotation"],
            ul {
                display: none;
            }
        `}render(){return Ie`<div id="map" style="width:100%;height:100%"></div>`}set puntos(t){this._puntos=t,0==this._puntos[0][0]&&this._puntos.shift(0,1);const e=this._puntos.length,i=new Array(this._puntos.length);for(var r=0;r<e;++r)i[r]=new Di(new Ar.a(this._puntos[r])),"N"==this._puntos[r][4]?(i[r].setStyle(this.iconStyles.elIcono),i[r].getStyle().setZIndex(99)):"S"==this._puntos[r][4]?(i[r].setStyle(this.iconStyles.posicion),i[r].getStyle().setZIndex(100)):(i[r].setStyle(this.iconStyles.casco),i[r].getStyle().setZIndex(100));var n=new ki.a({features:i});if(this.vectorLayer=new Ir.a({source:n}),this.tileLayer=new jr.a({source:new Lr({url:"https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"})}),this.layers=[this.tileLayer,this.vectorLayer],this.view=new Ri.a({center:this._puntos.length>1?0!=this._puntos[0][0]?this._puntos[0]:this._puntos[1]:this._puntos[0],zoom:8}),this.map){this.shadowRoot.querySelector("#map").innerHTML="",this.map=new zi.a({target:this.shadowRoot.querySelector("#map"),layers:this.layers,view:this.view}),this.map.on("singleclick",(function(t){this.forEachFeatureAtPixel(t.pixel,(function(e){Zt.dispatch(f(e,t))}))}));var o=this.map.getView().getZoom();this.map.on("postrender",(function(t){var e=this.getView().getZoom();if(e!=o){var i=t.map.getLayers().array_[1].values_.source.uidIndex_,r=e<6?.08:(e+3)/100;for(let t in i)i[t].style_.image_.setScale([r,r]);o=e}}))}}});const Dr=(t,e,i,r)=>{var n=Rr(i-t),o=Rr(r-e),a=Math.sin(n/2)*Math.sin(n/2)+Math.cos(Rr(t))*Math.cos(Rr(i))*Math.sin(o/2)*Math.sin(o/2);return 6371*(2*Math.atan2(Math.sqrt(a),Math.sqrt(1-a)))};function Rr(t){return t*(Math.PI/180)}class zr extends(Qe(Zt,"cemaps.MapaTimeStamp","ui.mapa.timeStamp","ui.media.timeStamp","screen.timeStamp")(qe)){constructor(){super(),this.hidden=!0,this.area="body",this.current="",this.idioma=Zt.getState().ui.idioma,this.cemapsMapa=i(126),this.centros=null,this.puntos=[]}static get styles(){return Ye`
			${ri}
			${ci}
			${pi}

			:host {
				display: grid;
				position: relative;
                background-color: var(--color-blanco);
                overflow: hidden;
                padding: 0 !important;
			}
			:host([hidden]) {
				display: none;
			}
			#cuerpo {
                display: grid;
                height:100%;
				grid-auto-flow: row;
                background-color: var(--color-blanco);
                overflow-x: hidden;
                overflow-y: auto;
			}
			#titulo {
                padding: .8vh 0 .8vh 0;
                text-align: center;
                font-size: 3vh;
                background-color: var(--color-verde-claro);
                color: var(--color-blanco);
            }
            svg{
                height:8vh;
                width:8vh;
            }
            .panel {
                display: grid;
                height: 89vh;
                overflow-y: auto;
                grid-auto-flow: row;
                grid-gap: 1rem;
                align-content: start;
            }
            .map {
                height: 89vh;
            }
            .ol-popup {
                position: absolute;
                background-color: white;
                box-shadow: 0 1px 4px rgba(0,0,0,0.2);
                padding: 15px;
                border-radius: 10px;
                border: 1px solid #cccccc;
                bottom: 12px;
                left: 2vw;
                min-width: 280px;
            }
            .ol-popup:after, .ol-popup:before {
                top: 100%;
                border: solid transparent;
                content: " ";
                height: 0;
                width: 0;
                position: absolute;
                pointer-events: none;
            }
            .ol-popup:after {
                border-top-color: white;
                border-width: 10px;
                left: 48px;
                margin-left: -10px;
            }
            .ol-popup:before {
                border-top-color: #cccccc;
                border-width: 11px;
                left: 48px;
                margin-left: -11px;
            }
            .ol-popup-closer {
                text-decoration: none;
                position: absolute;
                top: 2px;
                right: 8px;
            }
            .ol-popup-closer:after {
                content: "✖";
            }
            .centros{
                display: grid;
                position: absolute;
                top: 5vh;
                bottom: 0;
                right: 0;
                width: 20vw;
                grid-gap: 1vh;
                overflow-y: auto;
                overflow-x: auto;
                background-color: var(--color-gris-claro);
                white-space: nowrap;
                font-size: 2vh;
            }
            *[hidden] {
                display: none;
            }
		`}render(){if(this.centros)return Ie`
			<div id="cuerpo">
				<div id="titulo">
                    ${this.cemapsMapa[this.idioma].titulo}
                </div>
				<div class="panel">
                    <ol-map id="map" class="map"  media-size="${this.mediaSize}" .puntos=${this.puntos}></ol-map>
                </div>
            </div>
            <div id="popup" class="ol-popup" hidden @click=${this.closer}>
                <a href="#" id="popup-closer" class="ol-popup-closer"></a>
                <div id="popup-content"></div>
            </div>
		`}closer(){var t=this.shadowRoot.querySelector("#popup");t.hasAttribute("hidden")||t.setAttribute("hidden","")}stateChanged(t,e){if("screen.timeStamp"==e||"ui.media.timeStamp"==e){this.mediaSize=t.ui.media.size,this.hidden=!0,this.current=t.screen.name;const e=x(t,this.area),r=-1!="-cemapsMapa-".indexOf("-"+t.screen.name+"-");if(e&&r){this.puntos.length=0,this.puntos.unshift([0,0,"MI UBICACION","","S"]);for(var i=0;i<this.centros.length;++i){let t=this.centros[i];this.puntos.push([t.longitud,t.latitud,t.nombre,t.direccion,"N"])}if(navigator.geolocation){navigator.geolocation.getCurrentPosition(t=>{var e=t.coords.latitude;const i=[t.coords.longitude,e,"MI UBICACION","","S"];this.puntos[0]=i},(function(t){this.update()}))}this.hidden=!1,this.update()}}if("ui.mapa.timeStamp"==e){var r=this.shadowRoot.querySelector("#popup"),n=this.shadowRoot.querySelector("#popup-content");const e=t.ui.mapa.feature.values_.geometry.flatCoordinates;t.ui.mapa.event;var o="<p>"+e[2]+"</p><code>"+e[3]+"</code>";if(0!=this.puntos[0][0]){let t=Dr(this.puntos[0][1],this.puntos[0][0],e[1],e[0]).toFixed(1);t>0&&(o=o+"<p><a target='_blank' href='https://www.google.com.ar/maps/dir/"+this.puntos[0][1]+","+this.puntos[0][0]+"/"+e[1]+","+e[0]+"'>Distancia: "+t+" km</a></p>")}n.innerHTML=o,r.removeAttribute("hidden")}"cemaps.MapaTimeStamp"==e&&(this.centros=t.cemaps.entityMapa)}volver(){Zt.dispatch(M("inicial"))}static get properties(){return{mediaSize:{type:String,reflect:!0,attribute:"media-size"},layout:{type:String,reflect:!0},hidden:{type:Boolean,reflect:!0},area:{type:String},current:{type:String,reflect:!0}}}}window.customElements.define("cemapsmapa-screen",zr);class kr extends(Qe(Zt,"ui.media.timeStamp","screen.timeStamp")(qe)){constructor(){super(),this.hidden=!0,this.area="body",this.current="",this.idioma=Zt.getState().ui.idioma,this.notificaciones=i(127),this.notificacion=[{id:1,titulo:"Llegaron los descuentos del verano",cuerpo:"Aprovecha de hasta 30% OFF.",fecha:"14-12-2020 18:01",link:"compras",linkDescripcion:"Ver todos los descuentos."},{id:2,titulo:"Nueva Franja Horaria Direc TV",cuerpo:"Ahora podés disfrutar de Construir TV de 14.30 a 18.30 hs. en el canal 729 de Direc TV",fecha:"14-12-2020 12:01",link:"",linkDescripcion:""},{id:3,titulo:"Abierta la inscripción",cuerpo:"Ya podés anotarte en los cursos de verano.",fecha:"12-12-2020 20:01",link:"",linkDescripcion:"Ver todos los cursos acá."},{id:4,titulo:"Capacidad Pulmonar",cuerpo:"Te contamos 4 técnicas para ampliar tu capacidad pulmonar",fecha:"12-12-2020 18:04",link:"",linkDescripcion:"Leer la nota."},{id:5,titulo:"Medidas de seguridad para trabajar en altura",cuerpo:"Te contamos todo lo que tenes que tener en cuenta",fecha:"12-12-2020 16:01",link:"",linkDescripcion:"Ver todas las medidas y regulaciones acá."}]}static get styles(){return Ye`
			${ri}
			${ci}
			${pi}

			:host {
				display: grid;
				position: relative;
                background-color: var(--color-blanco);
                overflow: hidden;
                padding: 0 !important;
			}
			:host([hidden]) {
				display: none;
			}
			#cuerpo {
                display: grid;
                height:100%;
				grid-gap: 0;
				grid-auto-flow: row;
                background-color: var(--color-blanco);
                overflow-x: hidden;
                overflow-y: auto;
			}
			#titulo {
                padding: .8vh 0 .8vh 0;
                background-color: var(--color-gris-medio);
                color: var(--color-blanco);
                text-align: center;
                font-size: 3vh;
            }
            svg{
                height:6vh;
                width:6vh;
                fill: var(--color-gris-medio);
            }
            #notificaciones{
                grid-gap:.2vh;
            }
            .etiqueta{
                height: 100%;
                grid-gap: .2vh;
                grid-template-columns: 90% 10%;
            }
            .textos{
                grid-gap: .5vh;
            }
            .imagen{
            }
            .titulo{
                font-size: 2.6vh;
            }
            .cuerpo{
                font-size: 2.4vh;
                color: var(--color-gris-oscuro);
            }
            .link{
                font-size: 2vh;
                color: var(--color-gris-medio);
                padding-top:1vh;
                font-style: italic;
                cursor: pointer;
            }
            .fecha{
                font-size: 1.8vh;
                color: var(--color-gris-medio);
            }
            .linea{
                background-color: var(--color-gris);
                justify-self: center;
                width: 90%;
                height: 1px;
            }
		`}render(){return Ie`
			<div id="cuerpo">
				<div id="titulo">${this.notificaciones[this.idioma].titulo}</div>
                <div id="notificaciones" class="grid row">
                    ${this.notificacion.map(t=>Ie` 
                        <div class="grid column etiqueta">
                            <div class="grid row textos" .item="${t.Id}" @click=${this.mostrar}>
                                <div class="titulo">${t.titulo}</div>
                                <div class="cuerpo">${t.cuerpo}</div>
                                <div class="link" .item=${t} @click=${this.ir} >${t.linkDescripcion}</div>
                                <div class="fecha">${t.fecha}</div>
                            </div>
                            <div class="imagen">
                                ${ni.TRASH}
                            </div>
                        </div>
                        <div class="linea"></div>
                        `)}
                </div>
			</div>
		`}ir(t){let e=t.currentTarget.item;""!=e.link&&Zt.dispatch(M(e.link))}stateChanged(t,e){if("screen.timeStamp"==e||"ui.media.timeStamp"==e){this.mediaSize=t.ui.media.size,this.hidden=!0,this.current=t.screen.name;const e=x(t,this.area),i=-1!="-notificaciones-".indexOf("-"+t.screen.name+"-");e&&i&&(this.hidden=!1),this.update()}}static get properties(){return{mediaSize:{type:String,reflect:!0,attribute:"media-size"},layout:{type:String,reflect:!0},hidden:{type:Boolean,reflect:!0},area:{type:String},current:{type:String,reflect:!0}}}}window.customElements.define("notificaciones-screen",kr);const Pr=Ye`
	select {
		outline: 0;
		box-shadow: none;
		border: solid 2px var(--color-azul-icono);
		background-color: var(--color-blanco);
    border-radius: 1rem;
	}

	select::-ms-expand {
		display: none;
	}

	.select {
		position: relative;
		display: grid;
		grid-gap: 0;
		grid-template-rows: 26% 74%;
		line-height: 1;
		overflow: hidden;
	}
	select {
		padding: 0.2rem;
		color: var(--color-gris-oscuro);
		cursor: pointer;
		font-size: var(--font-bajada-size);
		font-weight: var(--font-bajada-weight);
		width: 100%;
		height: 1.8rem;
	}
	.select select:hover {
		border-color: var(--color-negro) !important;
	}
	.select select:focus {
		background-color: var(--color-gris);
		border-color: var(--color-negro) !important;
	}
	.select label {
		font-size: var(--font-label-size);
		font-weight: var(--font-label-weight);
		color: var(--color-negro);
	}
  `;class Nr extends(Qe(Zt,"cemaps.MapaTimeStamp","provincias.timeStamp","localidades.timeStamp","servicios.timeStamp","ui.media.timeStamp","screen.timeStamp")(qe)){constructor(){super(),this.hidden=!0,this.area="body",this.current="",this.idioma=Zt.getState().ui.idioma,this.provincia=null,this.localidad=null,this.servicio=null,this.idioma=Zt.getState().ui.idioma,this.cartilla=i(128)}static get styles(){return Ye`
			${ri}
			${ci}
			${Pr}

			:host {
				display: grid;
				position: relative;
                background-color: var(--color-blanco) !important;
                overflow-x: hidden;
                overflow-y: auto;
                padding: 0 !important;
			}
			:host([hidden]) {
				display: none;
			}
			#cuerpo {
                width: 100vw;
				grid-gap: 0rem;
				background-color: var(--color-blanco);
                padding: 0 !important;
                place-self: flex-start;
                overflow-x: hidden;
                overflow-y: auto;
			}
			#titulo {
                width:100%;
                height:52vw;
                background-image: url("https://www.uocra.net/App/images/cartilla.gif");
				background-repeat: no-repeat;
				background-position: center center ;
                background-size: cover ;
                align-self: self-start;
            }
            .miselect{
                width:60%;
                height:3.5rem; 
                justify-self: center;
                grid-gap: 0 !important;
            }
            .elselect{
                height:2.5rem; 
            }
            .lblSelect{
                font-size: var(--font-label-size);
            }
            #botones{
                width:90%;
                justify-self: center;
                grid-template-columns: 1fr 1fr;
            }
            .btnListado{
                background-color: var(--color-amarillo) !important;
                border-radius: 1rem !important;
                fill: var(--color-blanco) !important;
                stroke: var(--color-blanco) !important;
                color: var(--color-blanco) !important;
                font-size: var(--font-bajada-size) !important;
                grid-gap: 0 !important;
            }
            .btnVerMapa{
                background-color: var(--primary-color) !important;
                border-radius: 1rem !important;
                fill: var(--color-blanco) !important;
                stroke: var(--color-blanco) !important;
                color: var(--color-blanco) !important;
                font-size: var(--font-bajada-size) !important;
                grid-gap: 0 !important;
            }
		`}render(){if(this.provincia&&Zt.getState().localidades.entities&&this.servicio)return Ie`
                <div id="cuerpo" class="grid row">
                    <div id="titulo" class="grid column">
                    </div>
                    <div id="selectProvincias" class="grid row miselect" >
                        <select id="txtProvincias" class="elselect" @change="${this.cambioProvincia}">
                            <option value="0">Provincias</option>
                            ${this.provincia.map((t,e)=>Ie`
                                    <option value="${t.id}">${t.nombre}</option>
                                `)}
                        </select>
				    </div>
                    <div id="selectLocalidades" class="grid row miselect">
                        <select id="txtLocalidades" class="elselect" @click="${this.clickLocalidad}" @change="${this.cambioLocalidad}">
                            <option value="0">Localidades</option>
                            ${this.localidad?this.localidad.map((t,e)=>Ie`
                                    <option value="${t.id}">${t.nombre}</option>
                                `):null}
                        </select>
				    </div>
                    <div id="selectServicios" class="grid row miselect" >
                        <select id="txtServicios" class="elselect" @change="${this.cambioServicio}" >
                            <option value="0">Servicios</option>
                            ${this.servicio.map((t,e)=>Ie`
                                    <option value="${t.id}">${t.nombre}</option>
                                `)}
                        </select>
				    </div>
                    <div id="botones" class="grid">
                        <button btn1 class="btnListado" @click=${this.listados}>
                            <div class="grid column">
                                <div>
                                    ${ni.LISTADO}                        
                                </div>
                                <div>
                                    ${this.cartilla[this.idioma].listado}
                               </div>
                            </div>
                        </button>
				        <button btn1 class="btnVerMapa" @click=${this.cemap}>
                            <div class="grid column">
                                <div>
                                    ${ni.VERMAPA}                        
                                </div>
                                <div>
                                    ${this.cartilla[this.idioma].verMapa}
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
            `}listados(){const t=this.shadowRoot.querySelector("#txtProvincias").value,e=this.shadowRoot.querySelector("#txtLocalidades").value,i=this.shadowRoot.querySelector("#txtServicios").value;0==t||0==e||0==i?Zt.dispatch(u(this.cartilla[this.idioma].warning[1].titulo,this.cartilla[this.idioma].warning[1].subTitulo,"fondoError",2e3)):Zt.dispatch(M("cemapCartillaDetalle"))}cemap(){const t=this.shadowRoot.querySelector("#txtProvincias").value,e=this.shadowRoot.querySelector("#txtLocalidades").value;0==t&&0==e?Zt.dispatch({type:"[cemaps] GET_MAPA_TODOS"}):0!=e?Zt.dispatch(it(parseInt(e))):0!=t&&Zt.dispatch({type:"[cemaps] GET_MAPA_PROVINCIA",provinciaId:parseInt(t)})}stateChanged(t,e){if("screen.timeStamp"==e||"ui.media.timeStamp"==e){this.mediaSize=t.ui.media.size,this.hidden=!0,this.current=t.screen.name;const e=x(t,this.area),i=-1!="-cartilla-".indexOf("-"+t.screen.name+"-");e&&i&&(this.hidden=!1),this.update()}"provincias.timeStamp"==e&&(this.provincia=t.provincias.entities),"servicios.timeStamp"==e&&(this.servicio=t.servicios.entities),"cemaps.MapaTimeStamp"==e&&Zt.dispatch(M("cemapsMapa"))}cambioProvincia(t){let e=Zt.getState().localidades.entities;this.localidad=e.filter(e=>e.provinciasId==t.currentTarget.value),this.update()}cambioLocalidad(t){if(t.currentTarget.value>0){let e=Zt.getState().localidades.entities.filter(e=>e.id==t.currentTarget.value);Zt.dispatch({type:"[localidades] SELECCION",registro:e})}}cambioServicio(t){if(t.currentTarget.value>0){let e=Zt.getState().servicios.entities.filter(e=>e.id==t.currentTarget.value);Zt.dispatch({type:"[servicios] SELECCION",registro:e})}}clickLocalidad(t){const e=this.shadowRoot.querySelector("#txtProvincias").value,i=this.shadowRoot.querySelector("#txtLocalidades");0==e&&(Zt.dispatch(u(this.cartilla[this.idioma].warning[0].titulo,this.cartilla[this.idioma].warning[0].subTitulo,"fondoError",2e3)),i.blur())}static get properties(){return{mediaSize:{type:String,reflect:!0,attribute:"media-size"},layout:{type:String,reflect:!0},hidden:{type:Boolean,reflect:!0},area:{type:String},current:{type:String,reflect:!0}}}}window.customElements.define("cartilla-screen",Nr);class Vr extends(Qe(Zt,"provincias.timeStamp","localidades.timeStamp","servicios.timeStamp","ui.media.timeStamp","screen.timeStamp")(qe)){constructor(){super(),this.hidden=!0,this.area="body",this.current="",this.idioma=Zt.getState().ui.idioma,this.provincia=null,this.localidad=null,this.servicio=null}static get styles(){return Ye`
			${ri}
			${ci}
			${Pr}

			:host {
				display: grid;
				position: relative;
                background-color: var(--color-blanco) !important;
                overflow-x: hidden;
                overflow-y: auto;
                padding: 0 !important;
			}
			:host([hidden]) {
				display: none;
			}
			#cuerpo {
                width: 100vw;
				grid-gap: 1rem;
				background-color: var(--color-blanco);
                padding: 0 !important;
                place-self: flex-start;
                overflow-x: hidden;
                overflow-y: auto;
			}
			#titulo {
                width:100%;
                height:52vw;
                background-image: url("https://www.uocra.net/App/images/cemapBahiaBlanca.gif");
				background-repeat: no-repeat;
				background-position: center center ;
                background-size: cover ;
                align-self: self-start;
            }
            #tituloTexto {
                align-self: self-start;
                font-size: var(--font-header-h1-size);
                font-weight: 900;
                grid-template-columns: auto 1fr;
                padding-bottom: 1rem;
            }
            #subTituloTexto {
                width: 80%;
                align-self: self-start;
                font-size: var(--font-label-size);
                justify-self: center;
                padding-bottom: 1rem;
            }
            .miselect{
                width:60%;
                height:3rem; 
                justify-self: center;
                text-align: center;
            }
            .elselect{
                height:2.5rem; 
            }
            #botones{
                width:90%;
                justify-self: center;
            }
            .btnListado{
                background-color: var(--color-amarillo) !important;
                border-radius: 1rem !important;
                fill: var(--color-blanco) !important;
                stroke: var(--color-blanco) !important;
                color: var(--color-blanco) !important;
                font-size: var(--font-bajada-size) !important;
                grid-gap: 0 !important;
            }
            .btnVerMapa{
                background-color: var(--primary-color) !important;
                border-radius: 1rem !important;
                fill: var(--color-blanco) !important;
                stroke: var(--color-blanco) !important;
                color: var(--color-blanco) !important;
                font-size: var(--font-bajada-size) !important;
                grid-gap: 0 !important;
            }
            #bullet{
                fill: var(--color-blanco);
                stroke: var(--color-verde-claro);
            }
		`}render(){if(this.provincia)return Ie`
                <div id="cuerpo" class="grid row">
                    <div id="titulo" class="grid column">
                    </div>
                    <div id="subTituloTexto">
                    El <b>Sanatorio Franchín</b> nació con el fin de brindarle al Trabajador Constructor un Sistema de Salud según sus necesidades. Es un sanatorio de excelencia, líder en la defensa de la salud y equipado con la más moderna tecnológica.
                    </div>
                    <div id="tituloTexto" class="grid">
                        <div id="bullet">${ni.BULLET}</div>
                        <div id="solicitud">Servicios y Especialidades</div>
                    </div>
                    <div id="subTituloTexto">
                        <li>Laboratorio de Análisis Clínicos Automatizado</li>
                        <li>Servicio de Anatomopatología</li>
                        <li>Centro de Diagnóstico por Imágenes</li>
                        <li>Tomógrafo Multislice 64 cortes</li>
                        <li>Servicio de Medicina Nuclear</li>
                        <li>Medicina Cardiovascular Intervencionista</li>
                        <li>Unidad de Terapia Intensiva de Adultos</li>
                        <li>Unidad de Cuidados Intensivos Coronarios</li>
                        <li>Área Quirúrgica</li>
                        <li>Central de Esterilización</li>
                        <li>Servicios de Hemoterapia</li>
                        <li>Guardia Médica y de Atención de Emergencias</li>
                        <li>Guardia de Obstetricia y Ginecología</li>
                        <li>Guardia de Pediatría</li>
                        <li>Centro Neonatológico de Alta Complejidad</li>
                        <li>Servicio de Pediatría</li>
                        <li>Unidad de Terapia Intensiva Pediátrica</li>
                        <li>Unidad de Terapia Intermedia Pediátrica</li>                   
                    </div>
                </div>
            `}listados(){}cemap(){Zt.dispatch(M("cemapsMapa"))}stateChanged(t,e){if("screen.timeStamp"==e||"ui.media.timeStamp"==e){this.mediaSize=t.ui.media.size,this.hidden=!0,this.current=t.screen.name;const e=x(t,this.area),i=-1!="-cartillaDetalle-".indexOf("-"+t.screen.name+"-");e&&i&&(this.hidden=!1),this.update()}"provincias.timeStamp"==e&&(this.provincia=t.provincias.entities),"localidades.timeStamp"==e&&(this.localidad=t.localidades.entities),"provincias.timeStamp"==e&&(this.servicio=t.servicios.entities)}salud(){Zt.dispatch(M("salud"))}cultura(){Zt.dispatch(M("cultura"))}volver(){Zt.dispatch(M("inicial"))}claveRecuperar(){Zt.dispatch(M("claveRecuperar"))}static get properties(){return{mediaSize:{type:String,reflect:!0,attribute:"media-size"},layout:{type:String,reflect:!0},hidden:{type:Boolean,reflect:!0},area:{type:String},current:{type:String,reflect:!0}}}}window.customElements.define("cartilladetalle-screen",Vr);class Fr extends(Qe(Zt,"ui.media.timeStamp","screen.timeStamp")(qe)){constructor(){super(),this.hidden=!0,this.area="body",this.current="",this.idioma=Zt.getState().ui.idioma}static get styles(){return Ye`
			${ri}
			${ci}
			${Pr}

			:host {
				display: grid;
				position: relative;
                background-color: var(--color-blanco) !important;
                overflow-x: hidden;
                overflow-y: auto;
                padding: 0 !important;
                justify-content: center;
			}
			:host([hidden]) {
				display: none;
			}
			#cuerpo {
                width: 90vw;
				grid-gap: 1rem;
				background-color: var(--color-blanco);
                padding: 0 !important;
                place-self: flex-start;
                overflow-x: hidden;
                overflow-y: auto;
			}
			#titulo {
                align-self: self-start;
                font-size: var(--font-header-h1-size);
                font-weight: 900;
                grid-template-columns: auto 1fr;
            }
            #subTitulo {
                width: 80%;
                align-self: self-start;
                font-size: var(--font-label-size);
                justify-self: center;
            }
            #botones{
                padding: 1rem 0 1rem 0;
                justify-self: center;
            }
            .btnVerMapa{
                background-color: var(--primary-color) !important;
                border-radius: 1rem !important;
                fill: var(--color-blanco) !important;
                stroke: var(--color-blanco) !important;
                color: var(--color-blanco) !important;
                font-size: var(--font-bajada-size) !important;
                grid-gap: 0 !important;
            }
            .btnVerMapa svg{
                height:2rem;
            }
            #bullet{
                fill: var(--color-blanco);
                stroke: var(--color-verde-claro);
            }
		`}render(){return Ie`
                <div id="cuerpo" class="grid row">
                    <div id="titulo" class="grid">
                        <div id="bullet">${ni.BULLET}</div>
                        <div id="solicitud">Solicitar Turno:</div>
                    </div>
                    <div id="subTitulo">
                    Solicitá tu turno llamando al Centro Medico - CEMAP más cercano:
                    </div>
                    <div id="botones">
                        <button btn1 class="btnVerMapa" @click=${this.cemap}>
                            <div class="grid column">
                                <div>
                                    ${ni.CENTROMEDICO}                        
                                </div>
                                <div>
                                    CENTROS MEDICOS
                                </div>
                            </div>
                        </button>                    
                    </div>
                    <div id="titulo" class="grid">
                        <div id="bullet">${ni.BULLET}</div>
                        <div id="solicitud">Primera Consulta:</div>
                    </div>
                    <div id="subTitulo">
                        Una vez obtenido el turno, presentate 15 minutos antes del horario pactado en el sector administrativo. Allí realizarás la derivacón con el Médico de Familia, quien realizará la apertura de tu Historia Clínica.
                        <p>Finalizada la consulta, podés acercarte al sector administrativo para recibir asesoramiento sobre:
                        </p>
                        <li>Retiro de estudios y documentación.</li>
                        <li>Autorizaciones.</li>
                        <li>Medicamentos y materiales.</li>
                        <li>Prestaciones por discapacidad.</li>
                        <li>Otras.</li>
                    </div>
                </div>
            `}listados(){}cemap(){Zt.dispatch(M("cemapsMapa"))}stateChanged(t,e){if("screen.timeStamp"==e||"ui.media.timeStamp"==e){this.mediaSize=t.ui.media.size,this.hidden=!0,this.current=t.screen.name;const e=x(t,this.area),i=-1!="-turnos-".indexOf("-"+t.screen.name+"-");e&&i&&(this.hidden=!1),this.update()}}salud(){Zt.dispatch(M("salud"))}cultura(){Zt.dispatch(M("cultura"))}volver(){Zt.dispatch(M("inicial"))}claveRecuperar(){Zt.dispatch(M("claveRecuperar"))}static get properties(){return{mediaSize:{type:String,reflect:!0,attribute:"media-size"},layout:{type:String,reflect:!0},hidden:{type:Boolean,reflect:!0},area:{type:String},current:{type:String,reflect:!0}}}}window.customElements.define("turnos-screen",Fr);class Hr extends(Qe(Zt,"provincias.timeStamp","localidades.timeStamp","servicios.timeStamp","ui.media.timeStamp","screen.timeStamp")(qe)){constructor(){super(),this.hidden=!0,this.area="body",this.current="",this.idioma=Zt.getState().ui.idioma,this.provincia=null,this.localidad=null,this.servicio=null}static get styles(){return Ye`
			${ri}
			${ci}
			${Pr}

			:host {
				display: grid;
				position: relative;
                background-color: var(--color-blanco) !important;
                overflow-x: hidden;
                overflow-y: auto;
                padding: 0 !important;
			}
			:host([hidden]) {
				display: none;
			}
			#cuerpo {
                width: 100vw;
				grid-gap: 1rem;
				background-color: var(--color-blanco);
                padding: 0 !important;
                place-self: flex-start;
                overflow-x: hidden;
                overflow-y: auto;
			}
			#titulo {
                width:100%;
                height:52vw;
                background-image: url("https://www.uocra.net/App/images/emergencias.gif");
				background-repeat: no-repeat;
				background-position: center center ;
                background-size: cover ;
                align-self: self-start;
            }
            #tituloTexto {
                align-self: self-start;
                font-size: var(--font-header-h1-size);
                font-weight: 900;
                grid-template-columns: auto 1fr;
                padding-bottom: 1rem;
            }
            #subTituloTexto {
                width: 80%;
                align-self: self-start;
                font-size: var(--font-label-size);
                justify-self: center;
                padding-bottom: 1rem;
            }
            .miselect{
                width:60%;
                height:3rem; 
                justify-self: center;
                text-align: center;
            }
            .elselect{
                height:2.5rem; 
            }
            #botones{
                width:90%;
                justify-self: center;
            }
            .btnListado{
                background-color: var(--color-amarillo) !important;
                border-radius: 1rem !important;
                fill: var(--color-blanco) !important;
                stroke: var(--color-blanco) !important;
                color: var(--color-blanco) !important;
                font-size: var(--font-bajada-size) !important;
                grid-gap: 0 !important;
            }
            .btnVerMapa{
                background-color: var(--primary-color) !important;
                border-radius: 1rem !important;
                fill: var(--color-blanco) !important;
                stroke: var(--color-blanco) !important;
                color: var(--color-blanco) !important;
                font-size: var(--font-bajada-size) !important;
                grid-gap: 0 !important;
            }
            #bullet{
                fill: var(--color-blanco);
                stroke: var(--color-verde-claro);
            }
		`}render(){if(this.provincia)return Ie`
                <div id="cuerpo" class="grid row">
                    <div id="titulo" class="grid column">
                    </div>
                    <div id="subTituloTexto">
                    El <b>Sanatorio Franchín</b> nació con el fin de brindarle al Trabajador Constructor un Sistema de Salud según sus necesidades. Es un sanatorio de excelencia, líder en la defensa de la salud y equipado con la más moderna tecnológica.
                    </div>
                    <div id="tituloTexto" class="grid">
                        <div id="bullet">${ni.BULLET}</div>
                        <div id="solicitud">Servicios y Especialidades</div>
                    </div>
                    <div id="subTituloTexto">
                        <li>Laboratorio de Análisis Clínicos Automatizado</li>
                        <li>Servicio de Anatomopatología</li>
                        <li>Centro de Diagnóstico por Imágenes</li>
                        <li>Tomógrafo Multislice 64 cortes</li>
                        <li>Servicio de Medicina Nuclear</li>
                        <li>Medicina Cardiovascular Intervencionista</li>
                        <li>Unidad de Terapia Intensiva de Adultos</li>
                        <li>Unidad de Cuidados Intensivos Coronarios</li>
                        <li>Área Quirúrgica</li>
                        <li>Central de Esterilización</li>
                        <li>Servicios de Hemoterapia</li>
                        <li>Guardia Médica y de Atención de Emergencias</li>
                        <li>Guardia de Obstetricia y Ginecología</li>
                        <li>Guardia de Pediatría</li>
                        <li>Centro Neonatológico de Alta Complejidad</li>
                        <li>Servicio de Pediatría</li>
                        <li>Unidad de Terapia Intensiva Pediátrica</li>
                        <li>Unidad de Terapia Intermedia Pediátrica</li>                   
                    </div>
                </div>
            `}listados(){}cemap(){Zt.dispatch(M("cemapsMapa"))}stateChanged(t,e){if("screen.timeStamp"==e||"ui.media.timeStamp"==e){this.mediaSize=t.ui.media.size,this.hidden=!0,this.current=t.screen.name;const e=x(t,this.area),i=-1!="-franchin-".indexOf("-"+t.screen.name+"-");e&&i&&(this.hidden=!1),this.update()}"provincias.timeStamp"==e&&(this.provincia=t.provincias.entities),"localidades.timeStamp"==e&&(this.localidad=t.localidades.entities),"provincias.timeStamp"==e&&(this.servicio=t.servicios.entities)}salud(){Zt.dispatch(M("salud"))}cultura(){Zt.dispatch(M("cultura"))}volver(){Zt.dispatch(M("inicial"))}claveRecuperar(){Zt.dispatch(M("claveRecuperar"))}static get properties(){return{mediaSize:{type:String,reflect:!0,attribute:"media-size"},layout:{type:String,reflect:!0},hidden:{type:Boolean,reflect:!0},area:{type:String},current:{type:String,reflect:!0}}}}window.customElements.define("franchin-screen",Hr);class Gr extends(Qe(Zt,"provincias.timeStamp","localidades.timeStamp","servicios.timeStamp","ui.media.timeStamp","screen.timeStamp")(qe)){constructor(){super(),this.hidden=!0,this.area="body",this.current="",this.idioma=Zt.getState().ui.idioma,this.emergencia=i(129),this.provincia=null,this.localidad=null,this.servicio=null}static get styles(){return Ye`
			${ri}
			${ci}
			${Pr}

			:host {
				display: grid;
				position: relative;
                background-color: var(--color-blanco) !important;
                overflow-x: hidden;
                overflow-y: auto;
                padding: 0 !important;
			}
			:host([hidden]) {
				display: none;
			}
			#cuerpo {
                width: 100vw;
				grid-gap: 0rem;
				background-color: var(--color-blanco);
                padding: 0 !important;
                place-self: flex-start;
                overflow-x: hidden;
                overflow-y: auto;
			}
			#titulo {
                width:100%;
                height:52vw;
                background-image: url("https://www.uocra.net/App/images/emergencias.gif");
				background-repeat: no-repeat;
				background-position: center center ;
                background-size: cover ;
                align-self: self-start;
            }
            #tituloTexto {
                align-self: self-start;
                font-size: var(--font-header-h1-size);
                font-weight: 900;
                grid-template-columns: auto 1fr;
                padding-bottom: 1rem;
            }
            #subTituloTexto {
                width: 80%;
                align-self: self-start;
                font-size: var(--font-bajada-size);
                justify-self: center;
                padding-bottom: 1rem;
            }
            .miselect{
                width:60%;
                height:3rem; 
                justify-self: center;
                text-align: center;
            }
            .elselect{
                height:2.5rem; 
            }
            #botones{
                width:90%;
                justify-self: center;
            }
            .btnListado{
                background-color: var(--color-amarillo) !important;
                border-radius: 1rem !important;
                fill: var(--color-blanco) !important;
                stroke: var(--color-blanco) !important;
                color: var(--color-blanco) !important;
                font-size: var(--font-bajada-size) !important;
                grid-gap: 0 !important;
            }
            .btnVerMapa{
                background-color: var(--primary-color) !important;
                border-radius: 1rem !important;
                fill: var(--color-blanco) !important;
                stroke: var(--color-blanco) !important;
                color: var(--color-blanco) !important;
                font-size: var(--font-bajada-size) !important;
                grid-gap: 0 !important;
            }
            #bullet{
                fill: var(--color-blanco);
                stroke: var(--color-verde-claro);
            }
		`}render(){if(this.provincia&&Zt.getState().localidades.entities)return Ie`
                <div id="cuerpo" class="grid row">
                    <div id="titulo" class="grid column">
                    </div>
                    <div id="tituloTexto" class="grid">
                        <div id="bullet">${ni.BULLET}</div>
                        <div id="solicitud">Atención por Emergencias</div>
                    </div>
                    <div id="subTituloTexto">
                    Acercate al Centro de Atención Primaria - CEMAP más cercano a tu domicilio.
                    </div>
                    <div id="selectProvincias" class="grid row miselect" >
                        <select id="txtProvincias" class="elselect" @change="${this.cambioProvincia}">
                            <option value="0">Provincias</option>
                            ${this.provincia.map((t,e)=>Ie`
                                    <option value="${t.id}">${t.nombre}</option>
                                `)}
                        </select>
				    </div>
                    <div id="selectLocalidades" class="grid row miselect" >
                        <select id="txtLocalidades" class="elselect" @click="${this.clickLocalidad}">
                            <option value="0">Localidades</option>
                            ${this.localidad.map((t,e)=>Ie`
                                    <option value="${t.id}">${t.nombre}</option>
                                `)}
                        </select>
				    </div>
                    <div id="subTituloTexto">
                    Si vivís en la Ciudad Autónoma de Buenos Aires, dirigite a la Guardia del Sanatorio Franchin.
                    </div>
                    <div id="botones" class="grid">
				        <button btn1 class="btnVerMapa" @click=${this.telefono}>
                            <div class="grid column">
                                <div>
                                    ${ni.TELEFONO}                        
                                </div>
                                <div>${this.emergencia[this.idioma].boton}</div>
                            </div>
                        </button>
                    </div>
                </div>
            `}telefono(){document.location.href="tel:0800-345-7700"}cambioProvincia(t){let e=Zt.getState().localidades.entities;this.localidad=e.filter(e=>e.provinciasId==t.currentTarget.value),this.update()}clickLocalidad(t){const e=this.shadowRoot.querySelector("#txtProvincias"),i=this.shadowRoot.querySelector("#txtLocalidades");0==e.value&&(Zt.dispatch(u(this.emergencia[this.idioma].warning[0].titulo,this.emergencia[this.idioma].warning[0].subTitulo,"fondoError",2e3)),i.blur())}stateChanged(t,e){if("screen.timeStamp"==e||"ui.media.timeStamp"==e){this.mediaSize=t.ui.media.size,this.hidden=!0,this.current=t.screen.name;const e=x(t,this.area),i=-1!="-emergencias-".indexOf("-"+t.screen.name+"-");e&&i&&(this.hidden=!1),this.update()}"provincias.timeStamp"==e&&(this.provincia=t.provincias.entities),"localidades.timeStamp"==e&&(this.localidad=t.localidades.entities)}static get properties(){return{mediaSize:{type:String,reflect:!0,attribute:"media-size"},layout:{type:String,reflect:!0},hidden:{type:Boolean,reflect:!0},area:{type:String},current:{type:String,reflect:!0}}}}window.customElements.define("emergencias-screen",Gr);class Xr extends(Qe(Zt,"seccionales.MapaTimeStamp","zonas.timeStamp","ui.media.timeStamp","screen.timeStamp")(qe)){constructor(){super(),this.hidden=!0,this.area="body",this.current="",this.idioma=Zt.getState().ui.idioma,this.zona=null,this.idioma=Zt.getState().ui.idioma,this.zonas=i(130),this.paginaSiguiente=""}static get styles(){return Ye`
			${ri}
			${ci}
			${Pr}

			:host {
				display: grid;
				position: relative;
                background-color: var(--color-blanco) !important;
                overflow-x: hidden;
                overflow-y: auto;
                padding: 0 !important;
			}
			:host([hidden]) {
				display: none;
			}
			#cuerpo {
                width: 100vw;
				grid-gap: 0rem;
				background-color: var(--color-blanco);
                padding: 0 !important;
                place-self: flex-start;
                overflow-x: hidden;
                overflow-y: auto;
			}
			#titulo {
                width:100%;
                height:52vw;
                background-image: url("https://www.uocra.net/App/images/gremioZonas.gif");
				background-repeat: no-repeat;
				background-position: center center ;
                background-size: cover ;
                align-self: self-start;
            }
            .miselect{
                width:60%;
                height:3.5rem; 
                justify-self: center;
                grid-gap: 0 !important;
                padding-top: 5vh;
                padding-bottom: 20vh;
            }
            .elselect{
                height:2.5rem; 
            }
            .lblSelect{
                font-size: var(--font-label-size);
            }
            #botones{
                width:90%;
                justify-self: center;
                grid-template-columns: 1fr 1fr;
            }
            .btnListado{
                background-color: var(--color-amarillo) !important;
                border-radius: 1rem !important;
                fill: var(--color-blanco) !important;
                stroke: var(--color-blanco) !important;
                color: var(--color-blanco) !important;
                font-size: var(--font-bajada-size) !important;
                grid-gap: 0 !important;
            }
            .btnVerMapa{
                background-color: var(--primary-color) !important;
                border-radius: 1rem !important;
                fill: var(--color-blanco) !important;
                stroke: var(--color-blanco) !important;
                color: var(--color-blanco) !important;
                font-size: var(--font-bajada-size) !important;
                grid-gap: 0 !important;
            }
		`}render(){if(this.zona)return Ie`
                <div id="cuerpo" class="grid row">
                    <div id="titulo" class="grid column">
                    </div>
                    <div id="selectZonas" class="grid row miselect" >
                        <select id="txtZonas" class="elselect" @change="${this.cambioZona}">
                            <option value="0">Zonas</option>
                            ${this.zona.map((t,e)=>Ie`
                                    <option value="${t.id}">${t.nombre}</option>
                                `)}
                        </select>
				    </div>

                    <div id="botones" class="grid">
                        <button btn1 class="btnListado" @click=${this.listados}>
                            <div class="grid column">
                                <div>
                                    ${ni.LISTADO}                        
                                </div>
                                <div>
                                    ${this.zonas[this.idioma].listado}
                               </div>
                            </div>
                        </button>
				        <button btn1 class="btnVerMapa" @click=${this.seccionales}>
                            <div class="grid column">
                                <div>
                                    ${ni.VERMAPA}                        
                                </div>
                                <div>
                                    ${this.zonas[this.idioma].verMapa}
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
            `}listados(){this.paginaSiguiente="gremioLista";const t=this.shadowRoot.querySelector("#txtZonas").value;0==t?Zt.dispatch({type:"[seccionales] GET_MAPA_TODOS"}):Zt.dispatch(ot(parseInt(t)))}seccionales(){this.paginaSiguiente="gremioMapa";const t=this.shadowRoot.querySelector("#txtZonas").value;0==t?Zt.dispatch({type:"[seccionales] GET_MAPA_TODOS"}):Zt.dispatch(ot(parseInt(t)))}stateChanged(t,e){if("screen.timeStamp"==e||"ui.media.timeStamp"==e){this.mediaSize=t.ui.media.size,this.hidden=!0,this.current=t.screen.name;const e=x(t,this.area),i=-1!="-gremioZonas-".indexOf("-"+t.screen.name+"-");e&&i&&(this.hidden=!1),this.update()}"zonas.timeStamp"==e&&(this.zona=t.zonas.entities),"seccionales.MapaTimeStamp"==e&&Zt.dispatch(M(this.paginaSiguiente))}cambioZona(t){Zt.getState().zonas.entities;this.update()}static get properties(){return{mediaSize:{type:String,reflect:!0,attribute:"media-size"},layout:{type:String,reflect:!0},hidden:{type:Boolean,reflect:!0},area:{type:String},current:{type:String,reflect:!0}}}}window.customElements.define("gremiozonas-screen",Xr);class Ur extends(Qe(Zt,"seccionales.MapaTimeStamp","ui.mapa.timeStamp","ui.media.timeStamp","screen.timeStamp")(qe)){constructor(){super(),this.hidden=!0,this.area="body",this.current="",this.idioma=Zt.getState().ui.idioma,this.gremioMapa=i(131),this.centros=null,this.puntos=[]}static get styles(){return Ye`
			${ri}
			${ci}
			${pi}

			:host {
				display: grid;
				position: relative;
                background-color: var(--color-blanco);
                overflow: hidden;
                padding: 0 !important;
			}
			:host([hidden]) {
				display: none;
			}
			#cuerpo {
                display: grid;
                height:100%;
				grid-auto-flow: row;
                background-color: var(--color-blanco);
                overflow-x: hidden;
                overflow-y: auto;
			}
			#titulo {
                padding: .8vh 0 .8vh 0;
                text-align: center;
                font-size: 3vh;
                background-color: var(--color-verde-claro);
                color: var(--color-blanco);
            }
            svg{
                height:8vh;
                width:8vh;
            }
            .panel {
                display: grid;
                height: 89vh;
                overflow-y: auto;
                grid-auto-flow: row;
                grid-gap: 1rem;
                align-content: start;
            }
            .map {
                height: 89vh;
            }
            .ol-popup {
                position: absolute;
                background-color: white;
                box-shadow: 0 1px 4px rgba(0,0,0,0.2);
                padding: 15px;
                border-radius: 10px;
                border: 1px solid #cccccc;
                bottom: 12px;
                left: 2vw;
                min-width: 280px;
            }
            .ol-popup:after, .ol-popup:before {
                top: 100%;
                border: solid transparent;
                content: " ";
                height: 0;
                width: 0;
                position: absolute;
                pointer-events: none;
            }
            .ol-popup:after {
                border-top-color: white;
                border-width: 10px;
                left: 48px;
                margin-left: -10px;
            }
            .ol-popup:before {
                border-top-color: #cccccc;
                border-width: 11px;
                left: 48px;
                margin-left: -11px;
            }
            .ol-popup-closer {
                text-decoration: none;
                position: absolute;
                top: 2px;
                right: 8px;
            }
            .ol-popup-closer:after {
                content: "✖";
            }
            .centros{
                display: grid;
                position: absolute;
                top: 5vh;
                bottom: 0;
                right: 0;
                width: 20vw;
                grid-gap: 1vh;
                overflow-y: auto;
                overflow-x: auto;
                background-color: var(--color-gris-claro);
                white-space: nowrap;
                font-size: 2vh;
            }
            *[hidden] {
                display: none;
            }
		`}render(){if(this.centros)return Ie`
			<div id="cuerpo">
				<div id="titulo">
                    ${this.gremioMapa[this.idioma].titulo}
                </div>
				<div class="panel">
                    <ol-map id="map" class="map"  media-size="${this.mediaSize}" .puntos=${this.puntos}></ol-map>
                </div>
            </div>
            <div id="popup" class="ol-popup" hidden @click=${this.closer}>
                <a href="#" id="popup-closer" class="ol-popup-closer"></a>
                <div id="popup-content"></div>
            </div>
		`}closer(){var t=this.shadowRoot.querySelector("#popup");t.hasAttribute("hidden")||t.setAttribute("hidden","")}stateChanged(t,e){if("screen.timeStamp"==e||"ui.media.timeStamp"==e){this.mediaSize=t.ui.media.size,this.hidden=!0,this.current=t.screen.name;const e=x(t,this.area),r=-1!="-gremioMapa-".indexOf("-"+t.screen.name+"-");if(e&&r){this.puntos.length=0,this.puntos.unshift([0,0,"MI UBICACION","","S"]);for(var i=0;i<this.centros.length;++i){let t=this.centros[i];this.puntos.push([t.longitud,t.latitud,t.nombre,t.direccion,"C"])}if(navigator.geolocation){navigator.geolocation.getCurrentPosition(t=>{var e=t.coords.latitude;const i=[t.coords.longitude,e,"MI UBICACION","","S"];this.puntos[0]=i},(function(t){this.update()}))}this.hidden=!1,this.update()}}if("ui.mapa.timeStamp"==e){var r=this.shadowRoot.querySelector("#popup"),n=this.shadowRoot.querySelector("#popup-content");const e=t.ui.mapa.feature.values_.geometry.flatCoordinates;t.ui.mapa.event;var o="<p>"+e[2]+"</p><code>"+e[3]+"</code>";if(0!=this.puntos[0][0]){let t=Dr(this.puntos[0][1],this.puntos[0][0],e[1],e[0]).toFixed(1);t>0&&(o=o+"<p><a target='_blank' href='https://www.google.com.ar/maps/dir/"+this.puntos[0][1]+","+this.puntos[0][0]+"/"+e[1]+","+e[0]+"'>Distancia: "+t+" km</a></p>")}n.innerHTML=o,r.removeAttribute("hidden")}"seccionales.MapaTimeStamp"==e&&(this.centros=t.seccionales.entityMapa)}volver(){Zt.dispatch(M("inicial"))}static get properties(){return{mediaSize:{type:String,reflect:!0,attribute:"media-size"},layout:{type:String,reflect:!0},hidden:{type:Boolean,reflect:!0},area:{type:String},current:{type:String,reflect:!0}}}}window.customElements.define("gremiomapa-screen",Ur);class Br extends(Qe(Zt,"seccionales.MapaTimeStamp","ui.mapa.timeStamp","ui.media.timeStamp","screen.timeStamp")(qe)){constructor(){super(),this.hidden=!0,this.area="body",this.current="",this.idioma=Zt.getState().ui.idioma,this.gremioLista=i(132),this.centros=null,this.puntos=[]}static get styles(){return Ye`
			${ri}
			${ci}
			${pi}

			:host {
				display: grid;
				position: relative;
                background-color: var(--color-blanco);
                overflow: hidden;
                padding: 0 !important;
			}
			:host([hidden]) {
				display: none;
			}
			#cuerpo {
                display: grid;
                height:100%;
				grid-auto-flow: row;
                background-color: var(--color-blanco);
                overflow-x: hidden;
                overflow-y: auto;
			}
			#titulo {
                padding: .8vh 0 .8vh 0;
                text-align: center;
                font-size: 3vh;
                background-color: var(--color-verde-claro);
                color: var(--color-blanco);
            }
            svg{
                height:8vh;
                width:8vh;
            }
            .panel {
                display: grid;
                height: 89vh;
                grid-auto-flow: row;
                grid-gap: .2rem;
                align-content: start;
            }
            .notas{
                width:95vw;
                justify-self: center;
                grid-template-columns: auto 1fr;
                padding: 0 !important;
                grid-gap: 0 !important;          
            }
            .notaDetImg{
                width: 36vw;
                height: 24vw;
				background-repeat: no-repeat;
				background-position: center;
                background-size: cover ;
                justify-self: center;
                border-radius: .4rem;
            }
            .notaTitTxt{
				color: var(--primary-color);
                justify-self: left;
                font-size: var(--font-header-h1-size) ;
            }
            .notaDetTxt{
				color: var(--color-gris-oscuro);
                justify-self: left;
                font-size: var(--font-header-h2-size) ;
            }
            :host([media-size="small"]) .notaDetTxt{
                font-size: var(--font-label-size);
            }
		`}render(){if(this.centros)return Ie`
			<div id="cuerpo">
				<div id="titulo">
                    ${this.gremioLista[this.idioma].titulo}
                </div>
				<div class="panel">
                ${this.centros.map((t,e)=>Ie` 
                                <div>
                                    <hr id="linea" />
                                </div>
                                <div class="grid notas" style="align-items: stretch;">
                                    <div class="notaDetImg" style="background-image: url('${t.imagen}')"></div>
                                    <div class="grid row" >
                                        <div class="notaTitTxt">${t.nombre}</div>                       
                                        <div class="notaDetTxt">${t.direccion}</div>                       
                                        <div class="notaDetTxt">${t.telefono}</div>                       
                                        <div class="notaDetTxt">${t.mail}</div>                       
                                    </div>
                                </div>
                            `)}
                </div>
            </div>

		`}closer(){var t=this.shadowRoot.querySelector("#popup");t.hasAttribute("hidden")||t.setAttribute("hidden","")}stateChanged(t,e){if("screen.timeStamp"==e||"ui.media.timeStamp"==e){this.mediaSize=t.ui.media.size,this.hidden=!0,this.current=t.screen.name;const e=x(t,this.area),r=-1!="-gremioLista-".indexOf("-"+t.screen.name+"-");if(e&&r){this.puntos.length=0,this.puntos.unshift([0,0,"MI UBICACION","","S"]);for(var i=0;i<this.centros.length;++i){let t=this.centros[i];this.puntos.push([t.longitud,t.latitud,t.nombre,t.direccion,"C"])}if(navigator.geolocation){navigator.geolocation.getCurrentPosition(t=>{var e=t.coords.latitude;const i=[t.coords.longitude,e,"MI UBICACION","","S"];this.puntos[0]=i},(function(t){this.update()}))}this.hidden=!1,this.update()}}if("ui.mapa.timeStamp"==e){var r=this.shadowRoot.querySelector("#popup"),n=this.shadowRoot.querySelector("#popup-content");const e=t.ui.mapa.feature.values_.geometry.flatCoordinates;t.ui.mapa.event;var o="<p>"+e[2]+"</p><code>"+e[3]+"</code>";if(0!=this.puntos[0][0]){let t=Dr(this.puntos[0][1],this.puntos[0][0],e[1],e[0]).toFixed(1);t>0&&(o=o+"<p><a target='_blank' href='https://www.google.com.ar/maps/dir/"+this.puntos[0][1]+","+this.puntos[0][0]+"/"+e[1]+","+e[0]+"'>Distancia: "+t+" km</a></p>")}n.innerHTML=o,r.removeAttribute("hidden")}"seccionales.MapaTimeStamp"==e&&(this.centros=t.seccionales.entityMapa)}volver(){Zt.dispatch(M("inicial"))}static get properties(){return{mediaSize:{type:String,reflect:!0,attribute:"media-size"},layout:{type:String,reflect:!0},hidden:{type:Boolean,reflect:!0},area:{type:String},current:{type:String,reflect:!0}}}}window.customElements.define("gremiolista-screen",Br);class $r extends(Qe(Zt,"ui.media.timeStamp","screen.timeStamp")(qe)){constructor(){super(),this.hidden=!0,this.area="body",this.current="",this.idioma=Zt.getState().ui.idioma,this.provincia=null,this.localidad=null,this.servicio=null}static get styles(){return Ye`
			${ri}
			${ci}
			${Pr}

			:host {
				display: grid;
				position: relative;
                background-color: var(--color-blanco) !important;
                overflow-x: hidden;
                overflow-y: auto;
                padding: 0 !important;
			}
			:host([hidden]) {
				display: none;
			}
			#cuerpo {
                width: 100vw;
				grid-gap: .5rem;
				background-color: var(--color-blanco);
                padding: 0 !important;
                place-self: flex-start;
                overflow-x: hidden;
                overflow-y: auto;
			}
			#titulo {
                width:100%;
                height:52vw;
                background-image: url("https://www.uocra.net/App/images/gremioJuventud.gif");
				background-repeat: no-repeat;
				background-position: center center ;
                background-size: cover ;
                align-self: self-start;
            }
            #tituloTexto {
                align-self: self-start;
                font-size: var(--font-header-h1-size);
                font-weight: 900;
                grid-template-columns: auto 1fr;
                padding-bottom: 1rem;
            }
            #subTituloTexto {
                width: 80%;
                align-self: self-start;
                font-size: var(--font-header-h2-size);
                justify-self: center;
                padding-bottom: 1rem;
            }
            .miselect{
                width:60%;
                height:3rem; 
                justify-self: center;
                text-align: center;
            }
            .elselect{
                height:2.5rem; 
            }
            #botones{
                width:90%;
                justify-self: center;
            }
            .btnListado{
                background-color: var(--color-amarillo) !important;
                border-radius: 1rem !important;
                fill: var(--color-blanco) !important;
                stroke: var(--color-blanco) !important;
                color: var(--color-blanco) !important;
                font-size: var(--font-bajada-size) !important;
                grid-gap: 0 !important;
            }
            .btnVerMapa{
                background-color: var(--primary-color) !important;
                border-radius: 1rem !important;
                fill: var(--color-blanco) !important;
                stroke: var(--color-blanco) !important;
                color: var(--color-blanco) !important;
                font-size: var(--font-bajada-size) !important;
                grid-gap: 0 !important;
            }
            #bullet{
                fill: var(--color-blanco);
                stroke: var(--color-verde-claro);
            }
		`}render(){return Ie`
                <div id="cuerpo" class="grid row">
                    <div id="titulo" class="grid column">
                    </div>
                    <div id="tituloTexto" class="grid">
                        <div id="bullet">${ni.BULLET}</div>
                        <div id="solicitud">Juventud UOCRA</div>
                    </div>
                    <div id="subTituloTexto">
                        (la JU) es una iniciativa que promueve la participación activa de las y los jóvenes constructores en la vida interna del sindicato. Además, este espacio busca fortalecer los lazos de pertenencia sindical, potenciar el compromiso militante y afianzar los valores de la cultura del trabajo y la justicia social.
                    </div>
                    <div id="tituloTexto" class="grid">
                        <div id="bullet">${ni.BULLET}</div>
                        <div id="solicitud">Programa Nacional de Formación Sindical a Distancia</div>
                    </div>
                    <div id="subTituloTexto">
                        <p>El Programa Nacional de Formación Sindical a Distancia para Jóvenes de UOCRA es una propuesta de capacitación innovadora que busca acercar la formación sindical a más compañeros y compañeras, en todo el país.</p>
                        <p>Desarrollamos una formación que se implementa a través de una plataforma virtual, a la que se puede acceder desde cualquier lugar y a través de cualquier dispositivo.</p>
                        <p>El Programa brinda una amplia variedad de contenidos en formato audiovisual, para la formación de cuadros sindicales con una visión política-sindical integral. </p>
                        <p>Además, resulta un lugar de encuentro entre compañeros y compañeras.</p>
                        <p>Si estás inscripto en el curso de LA JU ingresá a la plataforma ahora</p>
                    </div>
                    <button btn1 @click=${this.laJu} style="width:10rem;justify-self: center;background-color:var(--color-amarillo);">
                        LA JU
                    </button>
                    <div style="padding-top:2rem"></div>
                </div>
            `}stateChanged(t,e){if("screen.timeStamp"==e||"ui.media.timeStamp"==e){this.mediaSize=t.ui.media.size,this.hidden=!0,this.current=t.screen.name;const e=x(t,this.area),i=-1!="-gremioJuventud-".indexOf("-"+t.screen.name+"-");e&&i&&(this.hidden=!1),this.update()}}laJu(){window.open("http://www.88552d2b491975945.temporary.link/moodle/login/index.php","_blank")}static get properties(){return{mediaSize:{type:String,reflect:!0,attribute:"media-size"},layout:{type:String,reflect:!0},hidden:{type:Boolean,reflect:!0},area:{type:String},current:{type:String,reflect:!0}}}}window.customElements.define("gremiojuventud-screen",$r);class Zr extends(Qe(Zt,"ui.media.timeStamp","screen.timeStamp")(qe)){constructor(){super(),this.hidden=!0,this.area="body",this.current="",this.idioma=Zt.getState().ui.idioma,this.provincia=null,this.localidad=null,this.servicio=null}static get styles(){return Ye`
			${ri}
			${ci}
			${Pr}

			:host {
				display: grid;
				position: relative;
                background-color: var(--color-blanco) !important;
                overflow-x: hidden;
                overflow-y: auto;
                padding: 0 !important;
			}
			:host([hidden]) {
				display: none;
			}
			#cuerpo {
                width: 100vw;
				grid-gap: .5rem;
				background-color: var(--color-blanco);
                padding: 0 !important;
                place-self: flex-start;
                overflow-x: hidden;
                overflow-y: auto;
			}
			#titulo {
                width:100%;
                height:52vw;
                background-image: url("https://www.uocra.net/App/images/gremioTarjetaIeric.gif");
				background-repeat: no-repeat;
				background-position: center center ;
                background-size: cover ;
                align-self: self-start;
            }
            #tituloTexto {
                align-self: self-start;
                font-size: var(--font-header-h1-size);
                font-weight: 900;
                grid-template-columns: auto 1fr;
                padding-bottom: 1rem;
            }
            #subTituloTexto {
                width: 80%;
                align-self: self-start;
                font-size: var(--font-label-size);
                justify-self: center;
                padding-bottom: 1rem;
            }
            .miselect{
                width:60%;
                height:3rem; 
                justify-self: center;
                text-align: center;
            }
            .elselect{
                height:2.5rem; 
            }
            #botones{
                width:90%;
                justify-self: center;
            }
            .btnListado{
                background-color: var(--color-amarillo) !important;
                border-radius: 1rem !important;
                fill: var(--color-blanco) !important;
                stroke: var(--color-blanco) !important;
                color: var(--color-blanco) !important;
                font-size: var(--font-bajada-size) !important;
                grid-gap: 0 !important;
            }
            .btnVerMapa{
                background-color: var(--primary-color) !important;
                border-radius: 1rem !important;
                fill: var(--color-blanco) !important;
                stroke: var(--color-blanco) !important;
                color: var(--color-blanco) !important;
                font-size: var(--font-bajada-size) !important;
                grid-gap: 0 !important;
            }
            #bullet{
                fill: var(--color-blanco);
                stroke: var(--color-verde-claro);
            }
		`}render(){return Ie`
                <div id="cuerpo" class="grid row">
                    <div id="titulo" class="grid column">
                    </div>
                    <div id="tituloTexto" class="grid">
                        <div id="bullet">${ni.BULLET}</div>
                        <div id="solicitud">Una tarjeta inteligente</div>
                    </div>
                    <div id="subTituloTexto">
                        La <b>Tarjeta Inteligente "Soy Constructor"</b> es una iniciativa de la UOCRA y conforma una herramienta de vanguardia a nivel mundial en materia de registración laboral formal, puesto que es una tarjeta que:
                        <li>Genera mayor transparencia.</li>
                        <li>Permite la consulta instantánea sobre la registración realizada.</li>
                        <li>Genera una historia Laboral Certificada por Organismo de Contralor (IERIC).</li>
                        <li>Realiza una actualización permanente de categoría y especialidad del trabajador/a.</li>
                        <li>Registra la información sobre los cursos realizados y certificaciones de competencia obtenidas.</li>
                        <li>Jerarquiza a los trabajadores y trabajadoras de la industria.</li>
                    </div>
                    <div id="tituloTexto" class="grid">
                        <div id="bullet">${ni.BULLET}</div>
                        <div id="solicitud">Obtene tu tarjeta</div>
                    </div>
                    <div id="subTituloTexto">
                        <b>La primera Tarjeta debe ser gestionada por la empresa contratante</b>, la cual debe enviar al IERIC todos los datos del trabajador o trabajadora para que proceda a la emisión de la tarjeta. Así lo establece la Ley 22.250 (en su artículo 13, último párrafo).
                        <p><b>Si tenés Libreta o necesitás reemplazar la tarjeta por pérdida, robo o deterioro,</b> podés gestionarla en la delegación del IERIC o la Seccional de UOCRA más cercana a tu domicilio, presentando DNI y constancia de CUIL.</p>
                        <p>Buscá la Seccional más cercana</p>                    
                    </div>
                </div>
            `}stateChanged(t,e){if("screen.timeStamp"==e||"ui.media.timeStamp"==e){this.mediaSize=t.ui.media.size,this.hidden=!0,this.current=t.screen.name;const e=x(t,this.area),i=-1!="-gremioTarjetaIeric-".indexOf("-"+t.screen.name+"-");e&&i&&(this.hidden=!1),this.update()}}salud(){Zt.dispatch(M("salud"))}cultura(){Zt.dispatch(M("cultura"))}volver(){Zt.dispatch(M("inicial"))}claveRecuperar(){Zt.dispatch(M("claveRecuperar"))}static get properties(){return{mediaSize:{type:String,reflect:!0,attribute:"media-size"},layout:{type:String,reflect:!0},hidden:{type:Boolean,reflect:!0},area:{type:String},current:{type:String,reflect:!0}}}}window.customElements.define("gremiotarjetaieric-screen",Zr);class Yr extends(Qe(Zt,"convenios.timeStamp","ui.media.timeStamp","screen.timeStamp")(qe)){constructor(){super(),this.hidden=!0,this.area="body",this.current="",this.idioma=Zt.getState().ui.idioma,this.convenios=null}static get styles(){return Ye`
			${ri}
			${ci}
			${Pr}

			:host {
				display: grid;
				position: relative;
                background-color: var(--color-blanco) !important;
                overflow-x: hidden;
                overflow-y: auto;
                padding: 0 !important;
			}
			:host([hidden]) {
				display: none;
			}
			#cuerpo {
                width: 100vw;
				grid-gap: .5rem;
				background-color: var(--color-blanco);
                padding: 0 !important;
                place-self: flex-start;
                overflow-x: hidden;
                overflow-y: auto;
			}
            #tituloTexto {
                align-self: self-start;
                font-size: var(--font-header-h1-size);
                font-weight: 900;
                grid-template-columns: auto 1fr;
                padding-bottom: 1rem;
            }
            #subTituloTexto {
                width: 80%;
                align-self: self-start;
                font-size: var(--font-header-h1-menos-size);
                justify-self: center;
                padding-bottom: 1rem;
            }
            #bullet{
                fill: var(--color-blanco);
                stroke: var(--color-verde-claro);
            }
            .convenios{
                grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
                justify-items: center;
                grid-gap: 1rem;
            }
            .detalle{
                background-color: var(--color-rojo);
                width:10rem;
                height: 10rem;
                border-radius: 1rem;
                justify-items: center;
                align-content: center;
                font-size: var(--font-header-h1-menos-size);
                text-align: center;
            }
            .imagen{
                cursor: pointer;
            }
            .imagen svg{
                width:3rem;
                height:3rem;
            }
		`}render(){if(this.convenios)return Ie`
                <div id="cuerpo" class="grid row">
                    <div id="tituloTexto" class="grid">
                        <div id="bullet">${ni.BULLET}</div>
                        <div id="solicitud">Descarga los convenios</div>
                    </div>
                    <div id="subTituloTexto">
                        Descargá los <b>Convenios Colectivos de Trabajo</b> vigentes en el ámbito de la industria de la construcción.                   
                    </div>
                    <div class="grid convenios">
                        ${this.convenios.map((t,e)=>Ie`
                                    <div class="grid row detalle">
                                        <div .item=${t.archivo} class="imagen" @click="${this.pdf}">${ni.CONVENIOS}</div>
                                        <div>${t.nombre}</div>
                                    </div>
                                `)}

                    </div>
                </div>
            `}pdf(t){let e=t.currentTarget.item;window.open(e,"_blank")}stateChanged(t,e){if("screen.timeStamp"==e||"ui.media.timeStamp"==e){this.mediaSize=t.ui.media.size,this.hidden=!0,this.current=t.screen.name;const e=x(t,this.area),i=-1!="-gremioConvenio-".indexOf("-"+t.screen.name+"-");e&&i&&(this.hidden=!1),this.update()}"convenios.timeStamp"==e&&(this.convenios=t.convenios.entities)}static get properties(){return{mediaSize:{type:String,reflect:!0,attribute:"media-size"},layout:{type:String,reflect:!0},hidden:{type:Boolean,reflect:!0},area:{type:String},current:{type:String,reflect:!0}}}}window.customElements.define("gremioconvenio-screen",Yr);class Wr extends(Qe(Zt,"programacion.timeStamp","ui.media.timeStamp","screen.timeStamp")(qe)){constructor(){super(),this.hidden=!0,this.area="body",this.current="",this.idioma=Zt.getState().ui.idioma,this.gremioLista=i(79),this.idiomaGenerico=i(73),this.programacion=null}static get styles(){return Ye`
			${ri}
			${ci}
			${pi}

			:host {
				display: grid;
				position: relative;
                background-color: var(--color-blanco);
                overflow: hidden;
                padding: 0 !important;
			}
			:host([hidden]) {
				display: none;
			}
			#cuerpo {
                display: grid;
                height:100%;
				grid-auto-flow: row;
                background-color: var(--color-blanco);
                overflow-x: hidden;
                overflow-y: auto;
			}
			#titulo {
                padding: .8vh 0 .8vh 0;
                text-align: center;
                font-size: 3vh;
                background-color: var(--color-verde-claro);
                color: var(--color-blanco);
            }
            svg{
                height:2vh;
                width:2vh;
                stroke: var(--color-amarillo);
                fill: var(--color-blanco);
            }
            .panel {
                display: grid;
                height: 89vh;
                grid-auto-flow: row;
                grid-gap: .2rem;
                align-content: start;
            }
            .notas{
                width:95vw;
                justify-self: center;
                grid-template-columns: auto 1fr;
                padding: 0 !important;
                grid-gap: 0 !important;          
            }
            .notaDetImg{
                width: 36vw;
                height: 24vw;
				background-repeat: no-repeat;
				background-position: center;
                background-size: cover ;
                justify-self: center;
                border-radius: .4rem;
                cursor: pointer;
            }
            .notaTitTxt{
				color: var(--primary-color);
                justify-self: left;
                font-size: var(--font-header-h1-size) ;
            }
            .notaNomTxt{
				color: var(--color-negro);
                justify-self: left;
                font-size: var(--font-header-h1-menos-size) ;
                font-weight: 900;
            }
            .notaDetTxt{
				color: var(--color-gris-oscuro);
                justify-self: left;
                font-size: var(--font-header-h2-size) ;
            }
            :host([media-size="small"]) .notaDetTxt{
                font-size: var(--font-label-size);
            }
		`}render(){if(this.programacion)return Ie`
			<div id="cuerpo">
				<div id="titulo">
                    ${this.gremioLista[this.idioma].titulo}
                </div>
				<div class="panel">
                ${this.programacion.map((t,e)=>Ie` 
                                <div>
                                    <hr id="linea" />
                                </div>
                                <div class="grid notas" style="align-items: stretch;">
                                    <div class="notaDetImg" style="background-image: url('${t.imagen}')" .item="${t}" @click=${this.detalle}></div>
                                    <div class="grid row" style="grid-gap:0">
                                        <div class="grid column" style="padding:0; grid-template-columns:auto 1fr" >
                                            <div id="bullet">${ni.BULLET}</div>
                                            <div class="notaTitTxt">${this.idiomaGenerico[this.idioma].diasLargo[new Date(t.fecha).getDay()]+" "+new Date(t.fecha).getDate()}</div>                       
                                        </div>
                                        <div class="notaNomTxt" style="font-weight:900">${t.protagonistas}</div>                       
                                        <div class="notaDetTxt">"${t.nombre}"</div>                       
                                        <div class="notaDetTxt" style="font-style:italic" >${t.genero}</div>                    
                                        <div class="notaDetTxt">${new Date(t.fecha).getHours()+":"+new Date(t.fecha).getMinutes()+"hs. - "+(0==t.valor?this.gremioLista[this.idioma].entradaLibre:this.gremioLista[this.idioma].entradaPaga+t.valor)}</div>                                            
                                    </div>
                                </div>
                            `)}
                </div>
                
            </div>

		`}detalle(t){Zt.dispatch(ht(t.currentTarget.item)),Zt.dispatch(M("teatroProgramacionDetalle"))}closer(){var t=this.shadowRoot.querySelector("#popup");t.hasAttribute("hidden")||t.setAttribute("hidden","")}stateChanged(t,e){if("screen.timeStamp"==e||"ui.media.timeStamp"==e){this.mediaSize=t.ui.media.size,this.hidden=!0,this.current=t.screen.name;const e=x(t,this.area),i=-1!="-teatroProgramacion-".indexOf("-"+t.screen.name+"-");e&&i&&(this.hidden=!1,this.update())}"programacion.timeStamp"==e&&(this.programacion=t.programacion.entities)}volver(){Zt.dispatch(M("inicial"))}static get properties(){return{mediaSize:{type:String,reflect:!0,attribute:"media-size"},layout:{type:String,reflect:!0},hidden:{type:Boolean,reflect:!0},area:{type:String},current:{type:String,reflect:!0}}}}window.customElements.define("teatroprogramacion-screen",Wr);class qr extends(Qe(Zt,"programacion.reservaTimeStamp","ui.media.timeStamp","screen.timeStamp")(qe)){constructor(){super(),this.hidden=!0,this.area="body",this.current="",this.idioma=Zt.getState().ui.idioma,this.reserva=null,this.gremioLista=i(79),this.idiomaGenerico=i(73)}static get styles(){return Ye`
			${ri}
			${ci}
			${Pr}

			:host {
				display: grid;
				position: relative;
                background-color: var(--color-blanco) !important;
                overflow-x: hidden;
                overflow-y: auto;
                padding: 0 !important;
			}
			:host([hidden]) {
				display: none;
			}
			#cuerpo {
                width: 100vw;
				grid-gap: 0rem;
				background-color: var(--color-blanco);
                padding: 0 !important;
                place-self: flex-start;
                overflow-x: hidden;
                overflow-y: auto;
			}
			#titulo {
                width:100%;
                height:52vw;
				background-repeat: no-repeat;
				background-position: center center ;
                background-size: cover ;
                align-self: self-start;
            }
            #tituloTexto {
                align-self: self-start;
                font-size: var(--font-header-h1-size);
                font-weight: 900;
                grid-template-columns: auto 1fr;
                padding-bottom: .6rem;
            }
            #subNombreTexto {
                width: 80%;
                align-self: self-start;
                font-size: var(--font-titulo-h1-menos-size);
                justify-self: center;
                padding-bottom: .4rem;
            }
            #subTituloTexto {
                width: 80%;
                align-self: self-start;
                font-size: var(--font-titulo-h2-size);
                justify-self: center;
                padding-bottom: .4rem;
            }
            .miselect{
                width:60%;
                height:3rem; 
                justify-self: center;
                text-align: center;
            }
            .elselect{
                height:2.5rem; 
            }
            #botones{
                width:90%;
                justify-self: center;
            }
            .btnListado{
                background-color: var(--color-amarillo) !important;
                border-radius: 1rem !important;
                fill: var(--color-blanco) !important;
                stroke: var(--color-blanco) !important;
                color: var(--color-blanco) !important;
                font-size: var(--font-bajada-size) !important;
                grid-gap: 0 !important;
            }
            .btnVerMapa{
                background-color: var(--primary-color) !important;
                border-radius: 1rem !important;
                fill: var(--color-blanco) !important;
                stroke: var(--color-blanco) !important;
                color: var(--color-blanco) !important;
                font-size: var(--font-bajada-size) !important;
                grid-gap: 0 !important;
            }
            #bullet{
                fill: var(--color-blanco);
                stroke: var(--color-amarillo);
            }
            #bullet1 svg{
                width:1rem;
                height:1rem;
                fill: var(--color-blanco);
                stroke: var(--color-verde-claro);
            }
            #textoFolleto{
                
            }
		`}render(){if(this.reserva)return Ie`
                <div id="cuerpo" class="grid row" style="grid-gap:0rem">
                    <div id="titulo" class="grid column" style="background-image:url('${this.reserva.imagenFolleto}')">
                    </div>
                    <div id="tituloTexto" class="grid">
                        <div id="bullet">${ni.BULLET}</div>
                        <div id="solicitud" style="color:var(--primary-color)">${this.idiomaGenerico[this.idioma].diasLargo[new Date(this.reserva.fecha).getDay()]+" "+new Date(this.reserva.fecha).getDate()+" de "+this.idiomaGenerico[this.idioma].mesLargo[new Date(this.reserva.fecha).getMonth()]+" - "+new Date(this.reserva.fecha).getHours()+":"+new Date(this.reserva.fecha).getMinutes()+"hs."}</div>
                    </div>
                    <div id="subNombreTexto" class="grid" style="font-weight:900" >
                       <div id="solicitud">${this.reserva.protagonistas}</div>
                    </div>
                    <div id="subTituloTexto">
                        Presenta: "${this.reserva.nombre}"
                    </div>
                    <div id="subTituloTexto" style="font-style:italic">
                        ${this.reserva.genero}
                    </div>
                    <div id="subTituloTexto">
                        ${0==this.reserva.valor?this.gremioLista[this.idioma].entradaLibre:this.gremioLista[this.idioma].entradaPaga+item.valor}
                    </div>
                    <div id="subTituloTexto" class="grid" style="padding:0; grid-template-columns:auto 1fr; grid-gap:.2rem;">
                        <div id="bullet1">${ni.BULLET}</div>
                        <div id="textoFolleto" style="font-weight:900">"${this.reserva.nombre}"</div>
                        <div></div>
                        <div id="textoFolleto">${this.reserva.textoFolleto}</div>
                    </div>
                    <div style="padding:1rem"></div>
                    <button btn1 @click=${this.reserva} style="width:10rem;justify-self: center;background-color:var(--color-amarillo);">
                        RESERVAR
                    </button>
                    <div style="padding-top:2rem"></div>
                </div>
            `}stateChanged(t,e){if("screen.timeStamp"==e||"ui.media.timeStamp"==e){this.mediaSize=t.ui.media.size,this.hidden=!0,this.current=t.screen.name;const e=x(t,this.area),i=-1!="-teatroProgramacionDetalle-".indexOf("-"+t.screen.name+"-");e&&i&&(this.update(),this.reserva&&this.shadowRoot.querySelector("#textoFolleto"),this.hidden=!1),this.update()}"programacion.reservaTimeStamp"==e&&(this.reserva=t.programacion.reserva)}static get properties(){return{mediaSize:{type:String,reflect:!0,attribute:"media-size"},layout:{type:String,reflect:!0},hidden:{type:Boolean,reflect:!0},area:{type:String},current:{type:String,reflect:!0}}}}window.customElements.define("teatroprogramaciondetalle-screen",qr);class Kr extends(Qe(Zt,"programacion.timeStamp","ui.media.timeStamp","screen.timeStamp")(qe)){constructor(){super(),this.hidden=!0,this.area="body",this.current="",this.idioma=Zt.getState().ui.idioma,this.gremioBoleteria=i(133),this.idiomaGenerico=i(73),this.programacion=null}static get styles(){return Ye`
			${ri}
			${ci}
			${pi}

			:host {
				display: grid;
				position: relative;
                background-color: var(--color-blanco);
                overflow: hidden;
                padding: 0 !important;
			}
			:host([hidden]) {
				display: none;
			}
			#cuerpo {
                display: grid;
                height:100%;
				grid-auto-flow: row;
                background-color: var(--color-blanco);
                overflow-x: hidden;
                overflow-y: auto;
			}
			#titulo {
                padding: .8vh 0 .8vh 0;
                text-align: center;
                font-size: 3vh;
                background-color: var(--color-verde-claro);
                color: var(--color-blanco);
            }
            svg{
                height:2vh;
                width:2vh;
                stroke: var(--color-amarillo);
                fill: var(--color-blanco);
            }
            .panel {
                display: grid;
                height: 89vh;
                grid-auto-flow: row;
                grid-gap: .2rem;
                align-content: start;
            }
            .notas{
                width:95vw;
                justify-self: center;
                grid-template-columns: auto 1fr;
                padding: 0 !important;
                grid-gap: 0 !important;          
            }
            .notaDetImg{
                width: 36vw;
                height: 24vw;
				background-repeat: no-repeat;
				background-position: center;
                background-size: cover ;
                justify-self: center;
                border-radius: .4rem;
                cursor: pointer;
            }
            .notaTitTxt{
				color: var(--primary-color);
                justify-self: left;
                font-size: var(--font-header-h1-size) ;
            }
            .notaNomTxt{
				color: var(--color-negro);
                justify-self: left;
                font-size: var(--font-header-h1-menos-size) ;
                font-weight: 900;
            }
            .notaDetTxt{
				color: var(--color-gris-oscuro);
                justify-self: left;
                font-size: var(--font-header-h2-size) ;
            }
            :host([media-size="small"]) .notaDetTxt{
                font-size: var(--font-label-size);
            }
		`}render(){if(this.programacion)return Ie`
			<div id="cuerpo">
				<div id="titulo">
                    ${this.gremioBoleteria[this.idioma].titulo}
                </div>
				<div class="panel">
                ${this.programacion.map((t,e)=>Ie` 
                                <div>
                                    <hr id="linea" />
                                </div>
                                <div class="grid notas" style="align-items: stretch;">
                                    <div class="notaDetImg" style="background-image: url('${t.imagen}')" .item="${t}" @click=${this.detalle}></div>
                                    <div class="grid row" style="grid-gap:0" >
                                        <div class="grid column" style="padding:0; grid-template-columns:auto 1fr" >
                                            <div id="bullet">${ni.BULLET}</div>
                                            <div class="notaTitTxt">${this.idiomaGenerico[this.idioma].diasLargo[new Date(t.fecha).getDay()]+" "+new Date(t.fecha).getDate()}</div>                       
                                        </div>                                        
                                        <div class="notaNomTxt" style="font-weight:900">${t.protagonistas}</div>                       
                                        <div class="notaDetTxt">"${t.nombre}"</div>                       
                                        <div class="notaDetTxt" style="font-style:italic" >${t.genero}</div>                    
                                        <div class="notaDetTxt">${new Date(t.fecha).getHours()+":"+new Date(t.fecha).getMinutes()+"hs. - "+(0==t.valor?this.gremioBoleteria[this.idioma].entradaLibre:this.gremioBoleteria[this.idioma].entradaPaga+t.valor)}</div>                                            
                                    </div>
                                </div>
                                <div style="padding:.5rem"></div>
                                <button btn1 @click=${this.reserva} style="width:10rem;justify-self: center;background-color:var(--color-amarillo);">
                                    RESERVAR
                                </button>   
                            `)}
                    <div style="padding-top:2rem"></div>
            
                </div>
            </div>

		`}detalle(t){Zt.dispatch(ht(t.currentTarget.item)),Zt.dispatch(M("teatroProgramacionDetalle"))}closer(){var t=this.shadowRoot.querySelector("#popup");t.hasAttribute("hidden")||t.setAttribute("hidden","")}stateChanged(t,e){if("screen.timeStamp"==e||"ui.media.timeStamp"==e){this.mediaSize=t.ui.media.size,this.hidden=!0,this.current=t.screen.name;const e=x(t,this.area),i=-1!="-teatroBoleteria-".indexOf("-"+t.screen.name+"-");e&&i&&(this.hidden=!1,this.update())}"programacion.timeStamp"==e&&(this.programacion=t.programacion.entities)}volver(){Zt.dispatch(M("inicial"))}static get properties(){return{mediaSize:{type:String,reflect:!0,attribute:"media-size"},layout:{type:String,reflect:!0},hidden:{type:Boolean,reflect:!0},area:{type:String},current:{type:String,reflect:!0}}}}window.customElements.define("teatroboleteria-screen",Kr);class Jr extends(Qe(Zt,"ui.media.timeStamp","screen.timeStamp")(qe)){constructor(){super(),this.hidden=!0,this.area="body",this.current="",this.idioma=Zt.getState().ui.idioma,this.provincia=null,this.localidad=null,this.servicio=null}static get styles(){return Ye`
			${ri}
			${ci}
			${Pr}

			:host {
				display: grid;
				position: relative;
                background-color: var(--color-blanco) !important;
                overflow-x: hidden;
                overflow-y: auto;
                padding: 0 !important;
			}
			:host([hidden]) {
				display: none;
			}
			#cuerpo {
                width: 100vw;
				grid-gap: .5rem;
				background-color: var(--color-blanco);
                padding: 0 !important;
                place-self: flex-start;
                overflow-x: hidden;
                overflow-y: auto;
			}
			#titulo {
                width:100%;
                height:52vw;
                background-image: url("https://www.uocra.net/App/images/saludSeguridadConsultas.gif");
				background-repeat: no-repeat;
				background-position: center center ;
                background-size: cover ;
                align-self: self-start;
            }
            #tituloTexto {
                align-self: self-start;
                font-size: var(--font-header-h1-size);
                font-weight: 900;
                grid-template-columns: auto 1fr;
                padding-bottom: 1rem;
            }
            #subTituloTexto {
                width: 80%;
                align-self: self-start;
                font-size: var(--font-header-h1-menos-size);
                justify-self: center;
                padding-bottom: 1rem;
            }
            .miselect{
                width:60%;
                height:3rem; 
                justify-self: center;
                text-align: center;
            }
            .elselect{
                height:2.5rem; 
            }
            #botones{
                width:15rem;
                justify-self: center;
            }
            .btnListado{
                background-color: var(--color-amarillo) !important;
                border-radius: 1rem !important;
                fill: var(--color-blanco) !important;
                stroke: var(--color-blanco) !important;
                color: var(--color-blanco) !important;
                font-size: var(--font-bajada-size) !important;
                grid-gap: 0 !important;
            }
            .btnVerMapa{
                background-color: var(--primary-color) !important;
                border-radius: 1rem !important;
                fill: var(--color-blanco) !important;
                stroke: var(--color-blanco) !important;
                color: var(--color-blanco) !important;
                font-size: var(--font-bajada-size) !important;
                grid-gap: 0 !important;
            }
            #bullet{
                fill: var(--color-blanco);
                stroke: var(--color-verde-claro);
            }
		`}render(){return Ie`
                <div id="cuerpo" class="grid row">
                    <div id="titulo" class="grid column">
                    </div>
                    <div id="tituloTexto" class="grid">
                        <div id="bullet">${ni.BULLET}</div>
                        <div id="solicitud">Para realizar una denuncia comunicate telefónicamente </div>
                    </div>
                    <div id="botones" class="grid">
				        <button btn1 class="btnVerMapa" @click=${this.telefono}>
                            <div class="grid column">
                                <div>
                                    ${ni.TELEFONO}                        
                                </div>
                                <div>0800-222-3871</div>
                            </div>
                        </button>
                    </div>
                    <div style="padding-top:2rem"></div>
                </div>
            `}stateChanged(t,e){if("screen.timeStamp"==e||"ui.media.timeStamp"==e){this.mediaSize=t.ui.media.size,this.hidden=!0,this.current=t.screen.name;const e=x(t,this.area),i=-1!="-saludSeguridadConsultas-".indexOf("-"+t.screen.name+"-");e&&i&&(this.hidden=!1),this.update()}}telefono(){document.location.href="tel:0800-222-3871"}static get properties(){return{mediaSize:{type:String,reflect:!0,attribute:"media-size"},layout:{type:String,reflect:!0},hidden:{type:Boolean,reflect:!0},area:{type:String},current:{type:String,reflect:!0}}}}window.customElements.define("saludseguridadconsultas-screen",Jr);class Qr extends(Qe(Zt,"ui.media.timeStamp","screen.timeStamp")(qe)){constructor(){super(),this.hidden=!0,this.area="body",this.current="",this.idioma=Zt.getState().ui.idioma,this.provincia=null,this.localidad=null,this.servicio=null}static get styles(){return Ye`
			${ri}
			${ci}
			${Pr}
			${pi}

			:host {
				display: grid;
				position: relative;
                background-color: var(--color-blanco) !important;
                overflow-x: hidden;
                overflow-y: auto;
                padding: 0 !important;
			}
			:host([hidden]) {
				display: none;
			}
			#cuerpo {
                width: 90vw;
				grid-gap: .5rem;
				background-color: var(--color-blanco);
                padding: 2rem 0 0 0 !important;
                place-self: flex-start;
                overflow-x: hidden;
                overflow-y: auto;
                display: grid;
                grid-template-columns: auto 1fr;
                justify-self: center;
			}
			.tituloImg {
                stroke: var(--color-gris);
                align-self: flex-start;
            }
            .tituloTexto {
                align-self: self-start;
                font-size: var(--font-header-h2-size);
                padding-bottom: 1rem;
            }
            .textoSolo {            
                font-size: var(--font-eader-h2-size);
                grid-column-start:1;
                grid-column-end:3;
                padding-top:2rem;
                color: var(--color-gris-medio);
            }
            #botones{
                width:15rem;
                height:3rem !important;
                justify-self: center;
                grid-column-start:1;
                grid-column-end:3;
            }
            #botonesImg svg{
                width: 1.5rem;
                height: 1.5rem;
            }
            .btnVerMapa{
                background-color: var(--primary-color) !important;
                border-radius: 1rem !important;
                fill: var(--color-blanco) !important;
                stroke: var(--color-blanco) !important;
                color: var(--color-blanco) !important;
                font-size: var(--font-bajada-size) !important;
                grid-gap: 0 !important;
            }
            #bullet{
                fill: var(--color-blanco);
                stroke: var(--color-verde-claro);
            }
            #bullet2 svg{
                width:1rem;
                height:1rem;
                fill: var(--color-blanco);
                stroke: var(--color-verde-claro);
            }
		`}render(){return Ie`
                <div id="cuerpo" class="grid row">
                    <div class="tituloImg">
                        <div id="bullet">${ni.BULLET}</div>                    
                    </div>
                    <div class="tituloTexto" >
                        Para realizar denuncias sobre condiciones de trabajo en una obra, llená el formulario:
                    </div>
                    <div class="tituloImg">
                        <div id="bullet2">${ni.BULLET}</div>                    
                    </div>
                    <div class="input">
                        <label id="lblClave1">Nombre y Apellido</label>
                        <input id="txtClave1" type="text">
                        <label id="lblErrorClave1" error oculto></label>
                    </div>
                    <div class="tituloImg">
                        <div id="bullet2">${ni.BULLET}</div>                    
                    </div>
                    <div class="input">
                        <label id="lblClave1" style="color:black">Teléfono</label>
                        <input id="txtClave1" type="text">
                        <label id="lblErrorClave1" error oculto></label>
                    </div>
                    <div class="tituloImg">
                        <div id="bullet2">${ni.BULLET}</div>                    
                    </div>
                    <div class="input">
                        <label id="lblClave1">E-mail</label>
                        <input id="txtClave1" type="text">
                        <label id="lblErrorClave1" error oculto></label>
                    </div>
                    <div class="tituloImg">
                        <div id="bullet2">${ni.BULLET}</div>                    
                    </div>
                    <div class="input">
                        <label id="lblClave1">Mensaje y obra en la que trabaja</label>
                        <input id="txtClave1" type="text">
                        <label id="lblErrorClave1" error oculto></label>
                    </div>
                    <div id="botones" class="grid">
				        <button btn1 class="btnVerMapa" @click=${this.telefono}>
                            <div class="grid column" style="justify-content:center;grid-gap:1rem">
                                <div id="botonesImg">
                                    ${ni.MAILENVIO}                        
                                </div>
                                <div>ENVIAR</div>
                            </div>
                        </button>
                    </div>
                    <div class="textoSolo" >
                        «El titular de los datos personales tiene la facultad de ejercer el derecho de acceso a los mismos en forma gratuita a intervalos no inferiores a seis meses, salvo que se acredite un interés legítimo al efecto conforme lo establecido en el artículo 14, inciso 3 de la Ley Nº 25.326». 
                        Se deja constancia que tanto el objeto de la consulta que plantee para ser evacuada por este medio, así como también los datos que suministre con ese propósito, serán conservados y resguardados conforme lo establece la ley de habeas data N° 25326
                        «La DIRECCION NACIONAL DE PROTECCION DE DATOS PERSONALES, Órgano de Control de la Ley Nº 25.326, tiene la atribución de atender las denuncias y reclamos que se interpongan con relación al incumplimiento de las normas sobre protección de datos personales».
                    </div>
                    <div style="padding-top:2rem"></div>
                </div>
            `}stateChanged(t,e){if("screen.timeStamp"==e||"ui.media.timeStamp"==e){this.mediaSize=t.ui.media.size,this.hidden=!0,this.current=t.screen.name;const e=x(t,this.area),i=-1!="-saludSeguridadDenuncia-".indexOf("-"+t.screen.name+"-");e&&i&&(this.hidden=!1),this.update()}}telefono(){document.location.href="tel:0800-222-3871"}static get properties(){return{mediaSize:{type:String,reflect:!0,attribute:"media-size"},layout:{type:String,reflect:!0},hidden:{type:Boolean,reflect:!0},area:{type:String},current:{type:String,reflect:!0}}}}window.customElements.define("saludseguridaddenuncia-screen",Qr);class tn extends(Qe(Zt,"ui.media.timeStamp","screen.timeStamp")(qe)){constructor(){super(),this.hidden=!0,this.area="body",this.current="",this.idioma=Zt.getState().ui.idioma,this.provincia=null,this.localidad=null,this.servicio=null}static get styles(){return Ye`
			${ri}
			${ci}
			${Pr}

			:host {
				display: grid;
				position: relative;
                background-color: var(--color-blanco) !important;
                overflow-x: hidden;
                overflow-y: auto;
                padding: 0 !important;
			}
			:host([hidden]) {
				display: none;
			}
			#cuerpo {
                width: 100vw;
				grid-gap: .5rem;
				background-color: var(--color-blanco);
                padding: 0 !important;
                place-self: flex-start;
                overflow-x: hidden;
                overflow-y: auto;
			}
			#titulo {
                width:100%;
                height:52vw;
                background-image: url("https://www.uocra.net/App/images/macro.gif");
				background-repeat: no-repeat;
				background-position: center center ;
                background-size: cover ;
                align-self: self-start;
            }
            #tituloTexto {
                align-self: self-start;
                font-size: var(--font-header-h1-size);
                font-weight: 900;
                grid-template-columns: auto 1fr;
                padding-bottom: .6rem;
            }
            #subTituloTexto {
                width: 80%;
                align-self: self-start;
                font-size: var(--font-header-h1-menos-size);
                justify-self: center;
                padding-bottom: .2rem;
            }
            #subsubTituloTexto {
                width: 80%;
                align-self: self-start;
                font-size: var(--font-header-h2-size);
                justify-self: center;
                padding-bottom: 0rem;
            }
            .miselect{
                width:60%;
                height:3rem; 
                justify-self: center;
                text-align: center;
            }
            .elselect{
                height:2.5rem; 
            }
            #botones{
                width:90%;
                justify-self: center;
            }
            .btnListado{
                background-color: var(--color-amarillo) !important;
                border-radius: 1rem !important;
                fill: var(--color-blanco) !important;
                stroke: var(--color-blanco) !important;
                color: var(--color-blanco) !important;
                font-size: var(--font-bajada-size) !important;
                grid-gap: 0 !important;
            }
            .btnVerMapa{
                background-color: var(--primary-color) !important;
                border-radius: 1rem !important;
                fill: var(--color-blanco) !important;
                stroke: var(--color-blanco) !important;
                color: var(--color-blanco) !important;
                font-size: var(--font-bajada-size) !important;
                grid-gap: 0 !important;
            }
            #bullet{
                fill: var(--color-blanco);
                stroke: var(--color-verde-claro);
            }
            #bullet1{
                align-self: flex-start;
            }
            #bullet1 svg{
                width:1rem;
                height:1rem;
                fill: var(--color-blanco);
                stroke: var(--color-verde-claro);
            }
		`}render(){return Ie`
                <div id="cuerpo" class="grid row">
                    <div id="titulo" class="grid column">
                    </div>
                    <div id="tituloTexto" class="grid">
                        <div id="bullet">${ni.BULLET}</div>
                        <div id="solicitud">Tu Tarjeta de Crédito</div>
                    </div>
                    <div id="subTituloTexto">
                        Tu sindicato pone a tu alcance la nueva Tarjeta de Crédito, UOCRA - Visa - Macro.
                    </div>
                    <div id="subsubTituloTexto">
                        <div class="grid column" style="padding:0; grid-template-columns:auto 1fr" >
                            <div id="bullet1">${ni.BULLET}</div>
                            <div>Mínimos requisitos para su otorgamiento</div>                       
                        </div> 
                    </div>
                    <div id="subsubTituloTexto">
                        <div class="grid column" style="padding:0; grid-template-columns:auto 1fr" >
                            <div id="bullet1">${ni.BULLET}</div>
                            <div>Emisión y renovación sin cargo</div>                       
                        </div> 
                    </div>
                    <div id="subsubTituloTexto">
                        <div class="grid column" style="padding:0; grid-template-columns:auto 1fr" >
                            <div id="bullet1">${ni.BULLET}</div>
                            <div>Atención preferencial</div>                       
                        </div> 
                    </div>
                    <div id="subsubTituloTexto">
                        <div class="grid column" style="padding:0; grid-template-columns:auto 1fr" >
                            <div id="bullet1">${ni.BULLET}</div>
                            <div>Beneficios y descuentos en compras</div>                       
                        </div> 
                    </div>
                    <div id="subTituloTexto" style="font-weight:900">
                        Otro logro que jerarquiza al trabajador constructor
                    </div>
                    <div id="tituloTexto" class="grid">
                        <div id="bullet">${ni.BULLET}</div>
                        <div id="solicitud">Solicitala acá</div>
                    </div>
                    <button btn1 @click=${this.solicitar} style="width:10rem;justify-self: center;background-color:var(--color-amarillo);">
                        SOLICITAR
                    </button>
                    <div style="padding-top:2rem"></div>
                </div>
            `}stateChanged(t,e){if("screen.timeStamp"==e||"ui.media.timeStamp"==e){this.mediaSize=t.ui.media.size,this.hidden=!0,this.current=t.screen.name;const e=x(t,this.area),i=-1!="-macro-".indexOf("-"+t.screen.name+"-");e&&i&&(this.hidden=!1),this.update()}}salud(){Zt.dispatch(M("salud"))}cultura(){Zt.dispatch(M("cultura"))}volver(){Zt.dispatch(M("inicial"))}claveRecuperar(){Zt.dispatch(M("claveRecuperar"))}static get properties(){return{mediaSize:{type:String,reflect:!0,attribute:"media-size"},layout:{type:String,reflect:!0},hidden:{type:Boolean,reflect:!0},area:{type:String},current:{type:String,reflect:!0}}}}window.customElements.define("macro-screen",tn);class en extends(Qe(Zt,"ui.media.timeStamp","screen.timeStamp")(qe)){constructor(){super(),this.hidden=!0,this.area="body",this.current="",this.idioma=Zt.getState().ui.idioma,this.provincia=null,this.localidad=null,this.servicio=null}static get styles(){return Ye`
			${ri}
			${ci}
			${Pr}

			:host {
				display: grid;
				position: relative;
                background-color: var(--color-blanco) !important;
                overflow-x: hidden;
                overflow-y: auto;
                padding: 0 !important;
			}
			:host([hidden]) {
				display: none;
			}
			#cuerpo {
                width: 100vw;
				grid-gap: .5rem;
				background-color: var(--color-blanco);
                padding: 0 !important;
                place-self: flex-start;
                overflow-x: hidden;
                overflow-y: auto;
			}
            #titulo {
                position: relative;
                width:100%;
                height:52vw;
            }
            #titulo iframe {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
            }
            #tituloTexto {
                align-self: self-start;
                font-size: var(--font-header-h1-size);
                font-weight: 900;
                grid-template-columns: auto 1fr;
                padding-bottom: .6rem;
            }
            #subTituloTexto {
                width: 80%;
                align-self: self-start;
                font-size: var(--font-header-h1-menos-size);
                justify-self: center;
                padding-bottom: .2rem;
            }
            #subsubTituloTexto {
                width: 80%;
                align-self: self-start;
                font-size: var(--font-header-h2-size);
                justify-self: center;
                padding-bottom: 0rem;
            }
            .miselect{
                width:60%;
                height:3rem; 
                justify-self: center;
                text-align: center;
            }
            .elselect{
                height:2.5rem; 
            }
            #botones{
                width:90%;
                justify-self: center;
            }
            .btnListado{
                background-color: var(--color-amarillo) !important;
                border-radius: 1rem !important;
                fill: var(--color-blanco) !important;
                stroke: var(--color-blanco) !important;
                color: var(--color-blanco) !important;
                font-size: var(--font-bajada-size) !important;
                grid-gap: 0 !important;
            }
            .btnVerMapa{
                background-color: var(--primary-color) !important;
                border-radius: 1rem !important;
                fill: var(--color-blanco) !important;
                stroke: var(--color-blanco) !important;
                color: var(--color-blanco) !important;
                font-size: var(--font-bajada-size) !important;
                grid-gap: 0 !important;
            }
            #bullet{
                fill: var(--color-blanco);
                stroke: var(--color-verde-claro);
                align-self: flex-start;
            }
            #bullet1{
                align-self: flex-start;
            }
            #bullet1 svg{
                width:1rem;
                height:1rem;
                fill: var(--color-blanco);
                stroke: var(--color-verde-claro);
            }
		`}render(){return Ie`
                <div id="cuerpo" class="grid row">
                    <div id="titulo" class="grid column">
                        <iframe width="100%" height="auto" src="https://www.youtube.com/embed/REbRQNQ38dA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                    
                    </div>
                    <div style="padding-top:1rem"></div>
                    <div id="subTituloTexto" class="grid" style="padding:0; grid-template-columns:auto 1fr">
                        <div id="bullet">${ni.BULLET}</div>
                        <div id="solicitud">
                            <b>Construir Cine</b> es un Festival único en la región, y su propósito principal es el descubrimiento y promoción de películas que aborden temas universales que afectan a los trabajadores de todo el mundo, y que consideren el trabajo como una fuerza de cambio en la vida de las personas. Su <b>8va Edición</b>, tendrá lugar en Buenos Aires, <b>del 13 al 29 de mayo de 2021</b>.
                            <p>Consciente del <b>poder de las historias</b> para inspirar a las personas y permitirles ver el mundo desde otra perspectiva, Construir Cine asume el desafío de <b>unir el arte con el impacto social</b> y se propone como un ámbito destinado a difundir y premiar trabajos audiovisuales que busquen influir sobre la realidad socio laboral de la Argentina y el Mundo.</p>
                            <p>El Festival busca fomentar <b>la creatividad y apoyar la difusión</b> de historias acerca del trabajo y de los trabajadores, privilegiando el punto de vista de éstos sobre el mundo y sobre los temas de índole social que afectan su quehacer diario, la vida de sus familias y la realidad de la comunidad a la que pertenecen.</p>
                            <p><b>Construir Cine</b> es organizado por CONSTRUIR TV -la señal Televisiva de la Fundación UOCRA para la Educación de los Trabajadores Constructores, perteneciente a la Red Social UOCRA y forma parte de la Global Labor Film Festival.</p>
                        </div>
                    </div>
                    <div style="padding-top:2rem"></div>
                </div>
            `}stateChanged(t,e){if("screen.timeStamp"==e||"ui.media.timeStamp"==e){this.mediaSize=t.ui.media.size,this.hidden=!0,this.current=t.screen.name;const e=x(t,this.area),i=-1!="-cineNosotros-".indexOf("-"+t.screen.name+"-");e&&i&&(this.hidden=!1),this.update()}}salud(){Zt.dispatch(M("salud"))}cultura(){Zt.dispatch(M("cultura"))}volver(){Zt.dispatch(M("inicial"))}claveRecuperar(){Zt.dispatch(M("claveRecuperar"))}static get properties(){return{mediaSize:{type:String,reflect:!0,attribute:"media-size"},layout:{type:String,reflect:!0},hidden:{type:Boolean,reflect:!0},area:{type:String},current:{type:String,reflect:!0}}}}window.customElements.define("cinenosotros-screen",en);class rn extends(Qe(Zt,"ui.media.timeStamp","screen.timeStamp")(qe)){constructor(){super(),this.hidden=!0,this.area="body",this.current="",this.idioma=Zt.getState().ui.idioma,this.provincia=null,this.localidad=null,this.servicio=null}static get styles(){return Ye`
			${ri}
			${ci}
			${Pr}

			:host {
				display: grid;
				position: relative;
                background-color: var(--color-blanco) !important;
                overflow-x: hidden;
                overflow-y: auto;
                padding: 0 !important;
			}
			:host([hidden]) {
				display: none;
			}
			#cuerpo {
                width: 100vw;
				grid-gap: .5rem;
				background-color: var(--color-blanco);
                padding: 0 !important;
                place-self: flex-start;
                overflow-x: hidden;
                overflow-y: auto;
			}
			#titulo {
                width:100%;
                height:52vw;
                background-image: url("https://www.uocra.net/App/images/cineEdicion.gif");
				background-repeat: no-repeat;
				background-position: center center ;
                background-size: cover ;
                align-self: self-start;
            }
            #tituloTexto {
                align-self: self-start;
                font-size: var(--font-header-h1-size);
                font-weight: 900;
                grid-template-columns: auto 1fr;
                padding-bottom: .6rem;
            }
            #subTituloTexto {
                width: 80%;
                align-self: self-start;
                font-size: var(--font-header-h1-menos-size);
                justify-self: center;
                padding-bottom: .2rem;
            }
            #subsubTituloTexto {
                width: 80%;
                align-self: self-start;
                font-size: var(--font-header-h2-size);
                justify-self: center;
                padding-bottom: 0rem;
            }
            .miselect{
                width:60%;
                height:3rem; 
                justify-self: center;
                text-align: center;
            }
            .elselect{
                height:2.5rem; 
            }
            #botones{
                width:90%;
                justify-self: center;
            }
            .btnListado{
                background-color: var(--color-amarillo) !important;
                border-radius: 1rem !important;
                fill: var(--color-blanco) !important;
                stroke: var(--color-blanco) !important;
                color: var(--color-blanco) !important;
                font-size: var(--font-bajada-size) !important;
                grid-gap: 0 !important;
            }
            .btnVerMapa{
                background-color: var(--primary-color) !important;
                border-radius: 1rem !important;
                fill: var(--color-blanco) !important;
                stroke: var(--color-blanco) !important;
                color: var(--color-blanco) !important;
                font-size: var(--font-bajada-size) !important;
                grid-gap: 0 !important;
            }
            #bullet{
                fill: var(--color-blanco);
                stroke: var(--color-verde-claro);
                align-self: flex-start;
            }
            #bullet1{
                align-self: flex-start;
                
            }
            #bullet1 svg{
                width:1rem;
                height:1rem;
                fill: var(--color-blanco);
                stroke: var(--color-verde-claro);
            }
		`}render(){return Ie`
                <div id="cuerpo" class="grid row">
                    <div id="titulo" class="grid column">
                    </div>
                    <div style="padding-top:1rem"></div>
                    <div id="subsubTituloTexto">
                        <div class="grid column" style="padding:0; grid-template-columns:auto 1fr" >
                            <div id="bullet">${ni.BULLET}</div>
                            <div>
                            En esta <b>8va Edición</b>, abrimos la convocatoria a las siguientes categorías de nuestras competencias oficiales:
                                <p><li><b>Competencia Internacional de Largometrajes de Ficción:</b> largometrajes de ficción de duración igual o mayor a 45 minutos cualquiera sea el país de origen.</li></p>
                                <p><li><b>Competencia Internacional de Largometrajes Documentales:</b> largometrajes documentales de duración igual o mayor a 45 minutos cualquiera sea el país de origen.</li></p>
                                <p><li><b>Competencia Nacional de Largometrajes:</b> largometrajes documentales o de ficción cuyo director sea de nacionalidad argentina y los</li></p>                            
                            </div>                       
                        </div> 
                    </div>              
                    <div style="padding-top:2rem"></div>
                </div>
            `}stateChanged(t,e){if("screen.timeStamp"==e||"ui.media.timeStamp"==e){this.mediaSize=t.ui.media.size,this.hidden=!0,this.current=t.screen.name;const e=x(t,this.area),i=-1!="-cineEdicion-".indexOf("-"+t.screen.name+"-");e&&i&&(this.hidden=!1),this.update()}}salud(){Zt.dispatch(M("salud"))}cultura(){Zt.dispatch(M("cultura"))}volver(){Zt.dispatch(M("inicial"))}claveRecuperar(){Zt.dispatch(M("claveRecuperar"))}static get properties(){return{mediaSize:{type:String,reflect:!0,attribute:"media-size"},layout:{type:String,reflect:!0},hidden:{type:Boolean,reflect:!0},area:{type:String},current:{type:String,reflect:!0}}}}window.customElements.define("cineedicion-screen",rn);class nn extends(Qe(Zt,"ui.media.timeStamp","screen.timeStamp")(qe)){constructor(){super(),this.hidden=!0,this.area="body",this.current="",this.idioma=Zt.getState().ui.idioma,this.provincia=null,this.localidad=null,this.servicio=null}static get styles(){return Ye`
			${ri}
			${ci}
			${Pr}

			:host {
				display: grid;
				position: relative;
                background-color: var(--color-blanco) !important;
                overflow-x: hidden;
                overflow-y: auto;
                padding: 0 !important;
			}
			:host([hidden]) {
				display: none;
			}
			#cuerpo {
                width: 100vw;
				grid-gap: .5rem;
				background-color: var(--color-blanco);
                padding: 0 !important;
                place-self: flex-start;
                overflow-x: hidden;
                overflow-y: auto;
			}
			#titulo {
                width:100%;
                height:52vw;
                background-image: url("https://www.uocra.net/App/images/cineTematicas.gif");
				background-repeat: no-repeat;
				background-position: center center ;
                background-size: cover ;
                align-self: self-start;
            }
            #tituloTexto {
                align-self: self-start;
                font-size: var(--font-header-h1-size);
                font-weight: 900;
                grid-template-columns: auto 1fr;
                padding-bottom: .6rem;
            }
            #subTituloTexto {
                width: 80%;
                align-self: self-start;
                font-size: var(--font-header-h1-menos-size);
                justify-self: center;
                padding-bottom: .2rem;
            }
            #subsubTituloTexto {
                width: 80%;
                align-self: self-start;
                font-size: var(--font-header-h2-size);
                justify-self: center;
                padding-bottom: 0rem;
            }
            .miselect{
                width:60%;
                height:3rem; 
                justify-self: center;
                text-align: center;
            }
            .elselect{
                height:2.5rem; 
            }
            #botones{
                width:90%;
                justify-self: center;
            }
            .btnListado{
                background-color: var(--color-amarillo) !important;
                border-radius: 1rem !important;
                fill: var(--color-blanco) !important;
                stroke: var(--color-blanco) !important;
                color: var(--color-blanco) !important;
                font-size: var(--font-bajada-size) !important;
                grid-gap: 0 !important;
            }
            .btnVerMapa{
                background-color: var(--primary-color) !important;
                border-radius: 1rem !important;
                fill: var(--color-blanco) !important;
                stroke: var(--color-blanco) !important;
                color: var(--color-blanco) !important;
                font-size: var(--font-bajada-size) !important;
                grid-gap: 0 !important;
            }
            #bullet{
                fill: var(--color-blanco);
                stroke: var(--color-verde-claro);
            }
            #bullet1{
                align-self: flex-start;
            }
            #bullet1 svg{
                width:1rem;
                height:1rem;
                fill: var(--color-blanco);
                stroke: var(--color-verde-claro);
            }
		`}render(){return Ie`
                <div id="cuerpo" class="grid row">
                    <div id="titulo" class="grid column">
                    </div>
                    <div style="padding-top:1rem"></div>
                    <div id="subTituloTexto">
                        Las obras que participan del Festival narran siempre historias relacionadas al mundo del trabajo y de los trabajadores. Dentro de esta amplia variedad, a manera de ejemplo, se describen a contnuación los 4 ejes temáticos sobre los que se basa el espíritu de la programación de Construir TV y Construir Cine.
                    </div>
                    <div id="tituloTexto" class="grid">
                        <div id="bullet">${ni.BULLET}</div>
                        <div id="solicitud">Social</div>
                    </div>
                    <div id="subTituloTexto">
                        Pilar fundamental en la construcción del tejido productivo de un país, entendemos el aspecto social como la base sobre la cual deben construirse mejores sociedades. Temas como: solidaridad, conciencia ecológica, sustentabilidad y cuidado del planeta en que vivimos, derechos fundamentales en el lugar de trabajo, igualdad de genero, inclusión, trabajo infantil, trabajo forzoso trabajo migrante, discapacidad y trabajo, y protección social, entre otros temas, son temáticas válidas para postularse al concurso.                    
                    </div>
                    <div id="tituloTexto" class="grid">
                        <div id="bullet">${ni.BULLET}</div>
                        <div id="solicitud">Gente</div>
                    </div>
                    <div id="subTituloTexto">
                        Pilar fundamental en la construcción del tejido productivo de un país, entendemos el aspecto social como la base sobre la cual deben construirse mejores sociedades. Temas como: solidaridad, conciencia ecológica, sustentabilidad y cuidado del planeta en que vivimos, derechos fundamentales en el lugar de trabajo, igualdad de genero, inclusión, trabajo infantil, trabajo forzoso trabajo migrante, discapacidad y trabajo, y protección social, entre otros temas, son temáticas válidas para postularse al concurso.                    
                    </div>
                    <div id="tituloTexto" class="grid">
                        <div id="bullet">${ni.BULLET}</div>
                        <div id="solicitud">Educación</div>
                    </div>
                    <div id="subTituloTexto">
                        La formación contribuye a mejorar la competitividad y la calidad de vida. Contenidos pensados para educar desde el entretenimiento, formatos innovadores que apuestan a la educación como pieza fundamental del progreso individual y de la sociedad en su conjunto.
                    </div>
                    <div id="tituloTexto" class="grid">
                        <div id="bullet">${ni.BULLET}</div>
                        <div id="solicitud">Industria</div>
                    </div>
                    <div id="subTituloTexto">
                        La industria es el escenario de encuentro entre recursos tecnológicos y humanos. En este eje se evidencia el rol del emprendedorismo, la actividad empresarial, los avances científicos y tecnológicos, la participación del estado, el rol sindical y el capital humano. El desarrollo de la industria como camino hacia el futuro del trabajo.
                    </div>
                    <div style="padding-top:2rem"></div>
                </div>
            `}stateChanged(t,e){if("screen.timeStamp"==e||"ui.media.timeStamp"==e){this.mediaSize=t.ui.media.size,this.hidden=!0,this.current=t.screen.name;const e=x(t,this.area),i=-1!="-cineTematicas-".indexOf("-"+t.screen.name+"-");e&&i&&(this.hidden=!1),this.update()}}salud(){Zt.dispatch(M("salud"))}cultura(){Zt.dispatch(M("cultura"))}volver(){Zt.dispatch(M("inicial"))}claveRecuperar(){Zt.dispatch(M("claveRecuperar"))}static get properties(){return{mediaSize:{type:String,reflect:!0,attribute:"media-size"},layout:{type:String,reflect:!0},hidden:{type:Boolean,reflect:!0},area:{type:String},current:{type:String,reflect:!0}}}}window.customElements.define("cinetematicas-screen",nn);class on extends(Qe(Zt,"edicionesAnteriores.timeStamp","ui.media.timeStamp","screen.timeStamp")(qe)){constructor(){super(),this.hidden=!0,this.area="body",this.current="",this.idioma=Zt.getState().ui.idioma,this.ediciones=null}static get styles(){return Ye`
			${ri}
			${ci}
			${Pr}

			:host {
				display: grid;
				position: relative;
                background-color: var(--color-blanco) !important;
                overflow-x: hidden;
                overflow-y: auto;
                padding: 0 !important;
			}
			:host([hidden]) {
				display: none;
			}
			#cuerpo {
                width: 100vw;
				grid-gap: .5rem;
				background-color: var(--color-blanco);
                padding: 0 !important;
                place-self: flex-start;
			}
            .panel {
                display: grid;
                grid-auto-flow: row;
                grid-gap: .8rem;
                align-content: start;
            }
            .notas{
                width:95vw;
                justify-self: center;
                grid-template-columns: auto 1fr;
                padding: 0 !important;
                grid-gap: 0 !important; 
                box-shadow: var(--shadow-elevation-2-box);         
            }
            .notaDetImg{
                width: 24vw;
                height: 36vw;
				background-repeat: no-repeat;
				background-position: center;
                background-size: cover ;
                justify-self: center;
                border-radius: .4rem;
                cursor: pointer;
            }
            #tituloTexto {
                align-self: self-start;
                font-size: var(--font-header-h1-size);
                font-weight: 900;
                grid-template-columns: auto 1fr;
                padding-bottom: .6rem;
            }
            .notaTitTxt{
				color: var(--color-negro);
                font-weight:900;
                justify-self: left;
                font-size: var(--font-header-h1-menos-size) ;
            }
            .notaNomTxt{
				color: var(--color-gris-oscuro);
                justify-self: left;
                font-size: var(--font-header-h2-size) ;
            }
            .btnVerMapa{
                background-color: var(--color-blanco) !important;
                border-radius: 1rem !important;
                border: 1px solid var(--color-gris) !important;
                color: var(--color-gris-oscuro) !important;
                font-size: var(--font-label-size) !important;
                grid-gap: 0 !important;
                width:12rem;
                justify-self: center;
            }
            #bullet{
                fill: var(--color-blanco);
                stroke: var(--color-verde-claro);
            }
		`}render(){return Ie`
                <div id="cuerpo" class="grid row">
                    <div style="padding-top:1rem"></div>
                    <div id="tituloTexto" class="grid">
                        <div id="bullet">${ni.BULLET}</div>
                        <div id="solicitud">Ediciones Anteriores</div>
                    </div>

                    <div class="panel">
                        ${this.ediciones.map((t,e)=>Ie` 
                                <div class="grid notas" style="align-items: stretch;">
                                    <div class="notaDetImg" style="background-image: url('${t.imagen}')"></div>
                                    <div class="grid row" style="grid-gap:0">
                                        <div class="notaTitTxt">${t.nombre}</div>                       
                                        <div class="notaNomTxt">${t.descripcion}</div>                       
                                        <button btn3 @click=${this.pdf} .item="${t}" class="btnVerMapa">
                                            VER CATALOGO
                                        </button>  
                                    </div>
                                </div>
                            `)}
                    </div>
                    <div style="padding-top:2rem"></div>
                </div>
            `}stateChanged(t,e){if("screen.timeStamp"==e||"ui.media.timeStamp"==e){this.mediaSize=t.ui.media.size,this.hidden=!0,this.current=t.screen.name;const e=x(t,this.area),i=-1!="-cineEdicionesAnteriores-".indexOf("-"+t.screen.name+"-");e&&i&&(this.hidden=!1),this.update()}"edicionesAnteriores.timeStamp"==e&&(this.ediciones=t.edicionesAnteriores.entities)}pdf(t){let e=t.currentTarget.item.archivo;window.open(e,"_blank")}static get properties(){return{mediaSize:{type:String,reflect:!0,attribute:"media-size"},layout:{type:String,reflect:!0},hidden:{type:Boolean,reflect:!0},area:{type:String},current:{type:String,reflect:!0}}}}window.customElements.define("cineedicionesanteriores-screen",on);class an extends(Qe(Zt,"convenios.timeStamp","ui.media.timeStamp","screen.timeStamp")(qe)){constructor(){super(),this.hidden=!0,this.area="body",this.current="",this.idioma=Zt.getState().ui.idioma,this.convenios=null}static get styles(){return Ye`
			${ri}
			${ci}
			${Pr}

			:host {
				display: grid;
				position: relative;
                background-color: var(--color-blanco) !important;
                overflow-x: hidden;
                overflow-y: auto;
                padding: 0 !important;
			}
			:host([hidden]) {
				display: none;
			}
			#cuerpo {
                width: 100vw;
				grid-gap: .5rem;
				background-color: var(--color-blanco);
                padding: 0 !important;
                place-self: flex-start;
                overflow-x: hidden;
                overflow-y: auto;
			}
            #tituloTexto {
                align-self: self-start;
                font-size: var(--font-header-h1-size);
                font-weight: 900;
                grid-template-columns: auto 1fr;
                padding-bottom: 1rem;
            }
            #subTituloTexto {
                width: 80%;
                align-self: self-start;
                font-size: var(--font-header-h1-menos-size);
                justify-self: center;
                padding-bottom: 1rem;
            }
            #bullet{
                fill: var(--color-blanco);
                stroke: var(--color-verde-claro);
            }
            .convenios{
                grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
                justify-items: center;
                grid-gap: 1rem;
            }
            .detalle{
                background-color: var(--color-rojo);
                width:10rem;
                height: 10rem;
                border-radius: 1rem;
                justify-items: center;
                align-content: center;
                font-size: var(--font-header-h1-menos-size);
                text-align: center;
            }
            .imagen{
                cursor: pointer;
            }
            .imagen svg{
                width:3rem;
                height:3rem;
            }
		`}render(){if(this.convenios)return Ie`
                <div id="cuerpo" class="grid row">
                    <iframe src="http://www.youtube.com/embed/?listType=user_uploads&list=UOCRACultura" width="100%" height="100%"></iframe>
                </div>
            `}pdf(t){let e=t.currentTarget.item;window.open(e,"_blank")}stateChanged(t,e){if("screen.timeStamp"==e||"ui.media.timeStamp"==e){this.mediaSize=t.ui.media.size,this.hidden=!0,this.current=t.screen.name;const e=x(t,this.area),i=-1!="-web-".indexOf("-"+t.screen.name+"-");e&&i&&(this.hidden=!1),this.update()}"convenios.timeStamp"==e&&(this.convenios=t.convenios.entities)}static get properties(){return{mediaSize:{type:String,reflect:!0,attribute:"media-size"},layout:{type:String,reflect:!0},hidden:{type:Boolean,reflect:!0},area:{type:String},current:{type:String,reflect:!0}}}}window.customElements.define("web-screen",an);class sn extends(Qe(Zt,"localidades.seleccion","servicios.seleccion","ui.media.timeStamp","screen.timeStamp")(qe)){constructor(){super(),this.hidden=!0,this.area="body",this.current="",this.idioma=Zt.getState().ui.idioma,this.localidad=null,this.servicio=null,this.cemap=null,this.imagenTitulo=null,this.imagenContenido=null,this.tipo=0,this.telefono=""}static get styles(){return Ye`
			${ri}
			${ci}
			${Pr}

			:host {
				display: grid;
				position: relative;
                background-color: var(--color-blanco) !important;
                overflow-x: hidden;
                overflow-y: auto;
                padding: 0 !important;
			}
			:host([hidden]) {
				display: none;
			}
			#cuerpo {
                width: 100vw;
				grid-gap: 1rem;
				background-color: var(--color-blanco);
                padding: 0 !important;
                place-self: flex-start;
			}
			#titulo {
                width:100%;
                height:52vw;
				background-repeat: no-repeat;
				background-position: center center ;
                background-size: cover ;
                align-self: self-start;
            }
            #contenido {
                position:relative;
                width:80%;
                height: auto;
                justify-self: center;
                padding:0;
                margin:0;
            }
            #imagen{
                width:100%;
            }
            .botonFlotante{
                display: flex;
                justify-content: center;
                align-items: center;
                height: 40px;
                width:40px;
                padding:0;
                margin:0;
                position:absolute;
                border-radius: 20px;
                box-shadow: var(--shadow-elevation-2-box);   
                cursor: pointer;               
            }
            #telefono{
                bottom:80px;
                right: 10px;
                background-color: var(--color-verde-claro); 
                cursor: pointer;
            }
            #posicion{
                bottom:20px;
                right: 10px;
                background-color: var(--color-verde-oscuro); 
                cursor: pointer;
            }
            .botonFlotante svg{
                height:25px;
                width:25px; 
                fill: var(--color-blanco);               
            }
            *[hidden] {
				display: none;
			}

		`}render(){return Ie`
                <div id="cuerpo" class="grid row">
                    <div id="titulo" class="grid column" style="background-image:url('${this.imagenTitulo}')">
                    </div>
                    <div id="contenido" class="grid column" >
                        <img id="imagen" src='${this.imagenContenido}'/>
                    </div>
                    <div id="telefono" class="botonFlotante" ?hidden="${1!=this.tipo}" @click=${this.llamar}>${ni.TELEFONO}</div>
                    <div id="posicion" class="botonFlotante" ?hidden="${1!=this.tipo}" @click=${this.posicion}>${ni.POSICION}</div>
                </div>
            `}llamar(){window.open("tel:"+this.telefono,"_blank")}posicion(){Zt.dispatch(it(Zt.getState().localidades.seleccion[0].id))}stateChanged(t,e){if("screen.timeStamp"==e||"ui.media.timeStamp"==e){this.mediaSize=t.ui.media.size,this.hidden=!0,this.current=t.screen.name;const e=x(t,this.area),i=-1!="-cemapCartillaDetalle-".indexOf("-"+t.screen.name+"-");e&&i&&(this.hidden=!1),this.update()}"localidades.seleccion"==e&&(this.localidad=t.localidades.entities,this.servicio&&this.cambiar()),"servicios.seleccion"==e&&(this.servicio=t.servicios.entities,this.localidad&&this.cambiar())}cambiar(){let t=Zt.getState().cemaps.entities;switch(this.cemap=t.filter(t=>t.localidadesId==Zt.getState().localidades.seleccion[0].id),this.imagenTitulo=this.cemap[0].imagen,this.telefono=this.cemap[0].telefono,this.tipo=Zt.getState().servicios.seleccion[0].id,Zt.getState().servicios.seleccion[0].id){case 1:this.imagenContenido=this.cemap[0].cartilla;break;default:this.imagenContenido=this.cemap[0].urgencia}}static get properties(){return{mediaSize:{type:String,reflect:!0,attribute:"media-size"},layout:{type:String,reflect:!0},hidden:{type:Boolean,reflect:!0},area:{type:String},current:{type:String,reflect:!0}}}}window.customElements.define("cemapcartilladetalle-screen",sn);class cn extends(Qe(Zt,"ui.media.timeStamp","screen.timeStamp")(qe)){constructor(){super(),this.hidden=!0,this.area="body",this.current="",this.idioma=Zt.getState().ui.idioma}static get styles(){return Ye`
			${ri}
			${ci}
			${Pr}
			:host {
				display: grid;
				position: relative;
                background-color: var(--color-blanco) !important;
                padding: 0 !important;
			}
			:host([hidden]) {
				display: none;
			}
			#cuerpo {
                width: 100vw;
				grid-gap: .5rem;
				background-color: var(--color-blanco);
                padding: 0 !important;
                place-self: flex-start;
                overflow-x: hidden;
                overflow-y: auto;
			}
			#titulo {
                width:100%;
                height:52vw;
                background-image: url("https://www.uocra.net/App/images/tvCanales.gif");
				background-repeat: no-repeat;
				background-position: center center ;
                background-size: cover ;
                align-self: self-start;
            }
            #tituloTexto {
                align-self: self-start;
                font-size: var(--font-header-h1-size);
                font-weight: 900;
                grid-template-columns: auto 1fr;
                padding-bottom: .6rem;
            }
            #subTituloTexto {
                width: 80%;
                align-self: self-start;
                font-size: var(--font-header-h1-menos-size);
                justify-self: center;
                padding-bottom: .2rem;
            }
            #subsubTituloTexto {
                width: 80%;
                align-self: self-start;
                font-size: var(--font-header-h2-size);
                justify-self: center;
                padding-bottom: 0rem;
            }
            #bullet{
                fill: var(--color-blanco);
                stroke: var(--color-verde-claro);
            }
            #bullet1{
                align-self: flex-start;
            }
            #bullet1 svg{
                width:1rem;
                height:1rem;
                fill: var(--color-blanco);
                stroke: var(--color-verde-claro);
            }
		`}render(){return Ie`
                <div id="cuerpo" class="grid row">
                    <div id="titulo" class="grid column">
                    </div>
                    <div id="tituloTexto" class="grid">
                        <div id="bullet">${ni.BULLET}</div>
                        <div id="solicitud">Mirá Construir TV por</div>
                    </div>
                    <div id="subsubTituloTexto">
                        <div class="grid column" style="padding:0; grid-template-columns:auto 1fr" >
                            <div id="bullet1">${ni.BULLET}</div>
                            <div><b>DIRECTV:</b> Canal 729 14.30-18.30hs.</div>                       
                        </div> 
                    </div>
                    <div id="subsubTituloTexto">
                        <div class="grid column" style="padding:0; grid-template-columns:auto 1fr" >
                            <div id="bullet1">${ni.BULLET}</div>
                            <div><b>SUPERCANAL:</b> Canal 25</div>                       
                        </div> 
                    </div>
                    <div id="subsubTituloTexto">
                        <div class="grid column" style="padding:0; grid-template-columns:auto 1fr" >
                            <div id="bullet1">${ni.BULLET}</div>
                            <div><b>TELECENTRO:</b> Canal 514</div>                       
                        </div> 
                    </div>
                    <div id="subsubTituloTexto">
                        <div class="grid column" style="padding:0; grid-template-columns:auto 1fr" >
                            <div id="bullet1">${ni.BULLET}</div>
                            <div><b>TELERED:</b> Canal 25</div>                       
                        </div> 
                    </div>
                    <div id="subsubTituloTexto">
                        <div class="grid column" style="padding:0; grid-template-columns:auto 1fr" >
                            <div id="bullet1">${ni.BULLET}</div>
                            <div><b>TDA:</b> Canal 23.03</div>                       
                        </div> 
                    </div>
                    <div id="subsubTituloTexto">
                        <div class="grid column" style="padding:0; grid-template-columns:auto 1fr" >
                            <div id="bullet1">${ni.BULLET}</div>
                            <div><b>TODA LA RED COLSECOR</b></div>                       
                        </div> 
                    </div>
                    <div id="subsubTituloTexto">
                        <div class="grid column" style="padding:0; grid-template-columns:auto 1fr" >
                            <div id="bullet1">${ni.BULLET}</div>
                            <div><b>CABLEOPERADORES</b> independientes de todo el país.</div>                       
                        </div> 
                    </div>
                    <div style="padding-top:2rem"></div>
                </div>
            `}stateChanged(t,e){if("screen.timeStamp"==e||"ui.media.timeStamp"==e){this.mediaSize=t.ui.media.size,this.hidden=!0,this.current=t.screen.name;const e=x(t,this.area),i=-1!="-tvCanales-".indexOf("-"+t.screen.name+"-");e&&i&&(this.hidden=!1),this.update()}}static get properties(){return{mediaSize:{type:String,reflect:!0,attribute:"media-size"},layout:{type:String,reflect:!0},hidden:{type:Boolean,reflect:!0},area:{type:String},current:{type:String,reflect:!0}}}}window.customElements.define("tvcanales-screen",cn);class ln extends(Qe(Zt,"tvEstrenos.timeStamp","ui.media.timeStamp","screen.timeStamp")(qe)){constructor(){super(),this.hidden=!0,this.area="body",this.current="",this.idioma=Zt.getState().ui.idioma,this.idiomaLista=i(134),this.estrenos=null}static get styles(){return Ye`
			${ri}
			${ci}
			${pi}

			:host {
				display: grid;
				position: relative;
                background-color: var(--color-blanco);
                overflow: hidden;
                padding: 0 !important;
			}
			:host([hidden]) {
				display: none;
			}
			#cuerpo {
                display: inline-block;
                height:100%;
				grid-auto-flow: row;
                background-color: var(--color-blanco);
                overflow-x: hidden;
                overflow-y: auto;
			}
			#titulo {
                height:8vh;
                padding: 3vh 0 0 0;
                text-align: center;
                font-size: 3vh;
                background-color: var(--color-gris);
                color: var(--color-blanco);
            }
            svg{
                height:8vh;
                width:8vh;
            }
            .panel {
                display: grid;
                height: auto;
                grid-auto-flow: row;
                grid-gap: .2rem;
                align-content: start;
            }
            .notas{
                width:85vw;
                justify-self: center;
                grid-template-rows: auto 1fr;
                padding: 0 !important;
                grid-gap: 0 !important;          
            }
            .notaDetImg{
                width: 60;
                height: 40vw;
				background-repeat: no-repeat;
				background-position: center;
                background-size: cover ;
                justify-self: center;
                border-radius: .4rem;
            }
            .notaTitTxt{
				color: var(--primary-color);
                justify-self: left;
                font-size: var(--font-header-h1-size) ;
            }
            .notaDetTxt{
				color: var(--color-gris-oscuro);
                justify-self: left;
                font-size: var(--font-header-h2-size) ;
            }
            :host([media-size="small"]) .notaDetTxt{
                font-size: var(--font-label-size);
            }
            *[hidden] {
				display: none;
			}
            .miBoton{
                width:6rem !important;
                justify-self: center !important;
                background-color:var(--color-verde-claro) !important;
                font-size: var(--font-bajada-size) !important;
                border-radius: 1rem !important;
                color: var(--color-blanco) !important;
            }
		`}render(){if(this.estrenos)return Ie`
			<div id="cuerpo">
                <div id="titulo">
                    ${this.idiomaLista[this.idioma].titulo}
                </div>
				<div class="panel">
                ${this.estrenos.map((t,e)=>Ie` 
                                <div ?hidden="${0==e}">
                                    <hr id="linea" />
                                </div>
                                <div class="grid notas" style="align-items: stretch;">
                                    <div class="grid row" >
                                        <div class="notaTitTxt">${t.nombre}</div>                       
                                        <div class="notaDetTxt">${t.descripcion}</div>                       
                                     </div>                                    
                                    <div class="notaDetImg" style="background-image: url('${t.imagen}')"></div>
                                    <button btn1 .item="${t.link}" @click=${this.ver} class="miBoton">
                                        ${this.idiomaLista[this.idioma].boton}
                                    </button> 
                                </div>
  
                            `)}
                </div>
            </div>

		`}stateChanged(t,e){if("screen.timeStamp"==e||"ui.media.timeStamp"==e){this.mediaSize=t.ui.media.size,this.hidden=!0,this.current=t.screen.name;const e=x(t,this.area),i=-1!="-tvEstrenos-".indexOf("-"+t.screen.name+"-");e&&i&&(this.hidden=!1,this.update())}"tvEstrenos.timeStamp"==e&&(this.estrenos=t.tvEstrenos.entities)}volver(){Zt.dispatch(M("inicial"))}static get properties(){return{mediaSize:{type:String,reflect:!0,attribute:"media-size"},layout:{type:String,reflect:!0},hidden:{type:Boolean,reflect:!0},area:{type:String},current:{type:String,reflect:!0}}}}window.customElements.define("tvestrenos-screen",ln);class dn extends(Qe(Zt,"ui.media.timeStamp","screen.timeStamp","ui.menu.timeStamp")(qe)){constructor(){super()}static get styles(){return Ye`
            :host {
                position: absolute;
                top: 0;
                display: grid;
                height: 100vh;
                width: 100vw;
                padding: 0;
                background-color: var(--color-gris-claro);
                overflow: hidden;
            }

            ${ti}

            :host::-webkit-scrollbar {
                width: 0.5vw;
                cursor: pointer;
            }
            :host::-webkit-scrollbar([media-size="small"]) {
                display: none;
            }
            :host::-webkit-scrollbar-thumb {
                background: var(--primary-color);
                border-radius: 5px;
            }
        `}render(){return Ie`
 
            <splash-screen id="splash" class="body"></splash-screen>
            <web-screen id="web" class="body"></web-screen>
            <inicial-screen id="inicial" class="body"></inicial-screen>
            <sesion-screen id="sesion" class="body"></sesion-screen>
            <claveRecuperar-screen id="claveRecuperar" class="body"></claveRecuperar-screen>
            <claveRecuperarmensaje-screen id="claveRecuperarMensaje" class="body"></claveRecuperarmensaje-screen>
            <clavecambio-screen id="clavecambio" class="body"></clavecambio-screen>
            <clavecambiomensaje-screen id="clavecambiomensaje" class="body"></clavecambiomensaje-screen>
            <registro-screen id="registro" class="body"></registro-screen>
            <registromensaje-screen id="registroMensaje" class="body"></registromensaje-screen>
            <principal-screen id="principal" class="body"></principal-screen>
            <compras-screen id="compras" class="body"></compras-screen>
            <general-screen id="general" class="body"></general-screen>
            <cemapsmapa-screen id="cemapsMapa" class="body"></cemapsmapa-screen>
            <notificaciones-screen id="notificaciones" class="body"></notificaciones-screen>
            <cartilla-screen id="cartilla" class="body"></cartilla-screen>
            <cartilladetalle-screen id="cartillaDetalle" class="body"></cartilladetalle-screen>
            <turnos-screen id="turnos" class="body"></turnos-screen>
            <franchin-screen id="franchin" class="body"></franchin-screen>
            <emergencias-screen id="emergencias" class="body"></emergencias-screen>
            <gremiozonas-screen id="gremioZonas" class="body"></gremiozonas-screen>
            <gremiomapa-screen id="gremioMapa" class="body"></gremiomapa-screen>
            <gremiolista-screen id="gremioLista" class="body"></gremiolista-screen>
            <gremiojuventud-screen id="gremioJuventud" class="body"></gremiojuventud-screen>
            <gremiotarjetaieric-screen id="gremioTarjetaIeric" class="body"></gremiotarjetaieric-screen>
            <gremioconvenio-screen id="gremioConvenio" class="body"></gremioconvenio-screen>
            <teatroprogramacion-screen id="teatroProgramacion" class="body"></teatroprogramacion-screen>
            <teatroprogramaciondetalle-screen id="teatroProgramacionDetalle" class="body"></teatroprogramaciondetalle-screen>
            <teatroboleteria-screen id="teatroBoleteria" class="body"></teatroboleteria-screen>
            <saludseguridadconsultas-screen id="saludSeguridadConsultas" class="body"></saludseguridadconsultas-screen>
            <saludseguridaddenuncia-screen id="saludSeguridadDenuncia" class="body"></saludseguridaddenuncia-screen>
            <macro-screen id="macro" class="body"></macro-screen>
            <cinenosotros-screen id="cineNosotros" class="body"></cinenosotros-screen>
            <cineedicion-screen id="cineEdicion" class="body"></cineedicion-screen>
            <cinetematicas-screen id="cineTematicas" class="body"></cinetematicas-screen>
            <cineedicionesanteriores-screen id="cineEdicionesAnteriores" class="body"></cineedicionesanteriores-screen>
            <cemapcartilladetalle-screen id="cemapCartillaDetalle" class="body"></cemapcartilladetalle-screen>
            <tvcanales-screen id="tvCanales" class="body"></tvcanales-screen>
            <tvestrenos-screen id="tvEstrenos" class="body"></tvestrenos-screen>

            <pie-componente class="foot"></pie-componente>

            <alerta-errores></alerta-errores>
            <pantalla-warning id="warning"></pantalla-warning>
            <menu-principal id="menu" class="header"></menu-principal>
            <spinner-loading type="spinner3"></spinner-loading>
        `}stateChanged(t,e){"ui.media.timeStamp"!=e&&"screen.timeStamp"!=e||(this.mediaSize=t.ui.media.size,this.orientation=t.ui.media.orientation,this.layout=C(t).name,!window.MSStream&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&("standalone"in window.navigator&&window.navigator.standalone?this.style.height=document.documentElement.offsetHeight?document.documentElement.offsetHeight:window.innerHeight+"px":"portrait"==t.ui.media.orientation?this.style.height=window.innerHeight<window.innerWidth?window.innerWidth:window.innerHeight+"px":this.style.height=window.innerHeight>window.innerWidth?window.innerWidth:window.innerHeight+"px")),this.update()}static get properties(){return{mediaSize:{type:String,reflect:!0,attribute:"media-size"},layout:{type:String,reflect:!0},orientation:{type:String,reflect:!0}}}}window.customElements.define("view-manager",dn);i(135);try{self["workbox:window:5.1.4"]&&_()}catch(un){}function un(t,e){return new Promise((function(i){var r=new MessageChannel;r.port1.onmessage=function(t){i(t.data)},t.postMessage(e,[r.port2])}))}function pn(t,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function hn(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}function fn(t,e){var i;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(i=function(t,e){if(t){if("string"==typeof t)return hn(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?hn(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){i&&(t=i);var r=0;return function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(i=t[Symbol.iterator]()).next.bind(i)}try{self["workbox:core:5.1.4"]&&_()}catch(un){}var mn=function(){var t=this;this.promise=new Promise((function(e,i){t.resolve=e,t.reject=i}))};function gn(t,e){var i=location.href;return new URL(t,i).href===new URL(e,i).href}var vn=function(t,e){this.type=t,Object.assign(this,e)};function yn(t,e,i){return i?e?e(t):t:(t&&t.then||(t=Promise.resolve(t)),e?t.then(e):t)}function bn(){}var _n=function(t){var e,i;function r(e,i){var r,n;return void 0===i&&(i={}),(r=t.call(this)||this).t={},r.i=0,r.o=new mn,r.u=new mn,r.s=new mn,r.v=0,r.h=new Set,r.l=function(){var t=r.m,e=t.installing;r.i>0||!gn(e.scriptURL,r.g)||performance.now()>r.v+6e4?(r.p=e,t.removeEventListener("updatefound",r.l)):(r.P=e,r.h.add(e),r.o.resolve(e)),++r.i,e.addEventListener("statechange",r.S)},r.S=function(t){var e=r.m,i=t.target,n=i.state,o=i===r.p,a=o?"external":"",s={sw:i,originalEvent:t};!o&&r.j&&(s.isUpdate=!0),r.dispatchEvent(new vn(a+n,s)),"installed"===n?r.A=self.setTimeout((function(){"installed"===n&&e.waiting===i&&r.dispatchEvent(new vn(a+"waiting",s))}),200):"activating"===n&&(clearTimeout(r.A),o||r.u.resolve(i))},r.O=function(t){var e=r.P;e===navigator.serviceWorker.controller&&(r.dispatchEvent(new vn("controlling",{sw:e,originalEvent:t,isUpdate:r.j})),r.s.resolve(e))},r.U=(n=function(t){var e=t.data,i=t.source;return yn(r.getSW(),(function(){r.h.has(i)&&r.dispatchEvent(new vn("message",{data:e,sw:i,originalEvent:t}))}))},function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];try{return Promise.resolve(n.apply(this,t))}catch(t){return Promise.reject(t)}}),r.g=e,r.t=i,navigator.serviceWorker.addEventListener("message",r.U),r}i=t,(e=r).prototype=Object.create(i.prototype),e.prototype.constructor=e,e.__proto__=i;var n,o,a=r.prototype;return a.register=function(t){var e=(void 0===t?{}:t).immediate,i=void 0!==e&&e;try{var r=this;return function(t,e){var i=t();return i&&i.then?i.then(e):e()}((function(){if(!i&&"complete"!==document.readyState)return wn(new Promise((function(t){return window.addEventListener("load",t)})))}),(function(){return r.j=Boolean(navigator.serviceWorker.controller),r.I=r.M(),yn(r.R(),(function(t){r.m=t,r.I&&(r.P=r.I,r.u.resolve(r.I),r.s.resolve(r.I),r.I.addEventListener("statechange",r.S,{once:!0}));var e=r.m.waiting;return e&&gn(e.scriptURL,r.g)&&(r.P=e,Promise.resolve().then((function(){r.dispatchEvent(new vn("waiting",{sw:e,wasWaitingBeforeRegister:!0}))})).then((function(){}))),r.P&&(r.o.resolve(r.P),r.h.add(r.P)),r.m.addEventListener("updatefound",r.l),navigator.serviceWorker.addEventListener("controllerchange",r.O,{once:!0}),r.m}))}))}catch(t){return Promise.reject(t)}},a.update=function(){try{return this.m?wn(this.m.update()):void 0}catch(t){return Promise.reject(t)}},a.getSW=function(){try{return void 0!==this.P?this.P:this.o.promise}catch(t){return Promise.reject(t)}},a.messageSW=function(t){try{return yn(this.getSW(),(function(e){return un(e,t)}))}catch(t){return Promise.reject(t)}},a.M=function(){var t=navigator.serviceWorker.controller;return t&&gn(t.scriptURL,this.g)?t:void 0},a.R=function(){try{var t=this;return function(t,e){try{var i=t()}catch(t){return e(t)}return i&&i.then?i.then(void 0,e):i}((function(){return yn(navigator.serviceWorker.register(t.g,t.t),(function(e){return t.v=performance.now(),e}))}),(function(t){throw t}))}catch(t){return Promise.reject(t)}},n=r,(o=[{key:"active",get:function(){return this.u.promise}},{key:"controlling",get:function(){return this.s.promise}}])&&pn(n.prototype,o),r}(function(){function t(){this.k=new Map}var e=t.prototype;return e.addEventListener=function(t,e){this.B(t).add(e)},e.removeEventListener=function(t,e){this.B(t).delete(e)},e.dispatchEvent=function(t){t.target=this;for(var e,i=fn(this.B(t.type));!(e=i()).done;)(0,e.value)(t)},e.B=function(t){return this.k.has(t)||this.k.set(t,new Set),this.k.get(t)},t}());function wn(t,e){if(!e)return t&&t.then?t.then(bn):Promise.resolve()}var Cn;"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("./service-worker.js").then(t=>{console.log("SW registered: ",t)}).catch(t=>{console.log("SW registration failed: ",t)})}),(()=>{if("serviceWorker"in navigator){const t=new _n("./service-worker.js");let e;const i=i=>{alert("La versión 1.1.51 se encuentra discontinuada. Se actualizará a la nueva versión."),t.addEventListener("controlling",t=>{window.location.reload()}),e&&e.waiting&&un(e.waiting,{type:"SKIP_WAITING"})};t.addEventListener("waiting",i),t.addEventListener("externalwaiting",i),t.register().then(t=>e=t)}})(),Zt.dispatch({type:"[ui] urls",servidor:"http://localhost:8080/",imagenes:"https://www.uocra.net/App/images/"}),Zt.dispatch({type:"[noticias] GET",options:Cn}),Zt.dispatch((t=>({type:z,options:t}))()),Zt.dispatch((t=>({type:"[bannes] GET",options:t}))()),Zt.dispatch((t=>({type:"[menues] GET",options:t}))()),Zt.dispatch((t=>({type:"[items] GET",options:t}))()),Zt.dispatch((t=>({type:"[leftmenu] GET",options:t}))()),Zt.dispatch((t=>({type:"[localidades] GET",options:t}))()),Zt.dispatch((t=>({type:"[provincias] GET",options:t}))()),Zt.dispatch((t=>({type:"[servicios] GET",options:t}))()),Zt.dispatch((t=>({type:"[cemaps] GET",options:t}))()),Zt.dispatch((t=>({type:"[zonas] GET",options:t}))()),Zt.dispatch((t=>({type:"[seccionales] GET",options:t}))()),Zt.dispatch((t=>({type:"[convenios] GET",options:t}))()),Zt.dispatch((t=>({type:"[programacion] GET",options:t}))()),Zt.dispatch((t=>({type:"[leyendas] GET",options:t}))()),Zt.dispatch(yt()),Zt.dispatch(yt()),Zt.dispatch((t=>({type:"[tvEstrenos] GET",options:t}))()),Zt.dispatch({type:"[ui] capture media"}),Zt.dispatch(M("splash"))},,,,function(t,e,i){"use strict";var r=i(51),n=i(14),o=i(1),a=i(7),s=i(0),c=i(54),l=i(37),d=(i(58),i(19)),u=(i(45),i(8));var p,h=i(24),f=(p=function(t,e){return(p=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(t,e)},function(t,e){function i(){this.constructor=t}p(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)});function m(t,e){c.a.expire()}var g=function(t){function e(e){var i=t.call(this)||this;return i.map_=e,i.declutterTree_=null,i}return f(e,t),e.prototype.dispatchRenderEvent=function(t,e){Object(o.b)()},e.prototype.calculateMatrices2D=function(t){var e=t.viewState,i=t.coordinateToPixelTransform,r=t.pixelToCoordinateTransform;Object(a.b)(i,t.size[0]/2,t.size[1]/2,1/e.resolution,-1/e.resolution,-e.rotation,-e.center[0],-e.center[1]),Object(a.d)(r,i)},e.prototype.forEachFeatureAtCoordinate=function(t,e,i,r,n,o,a,c){var d,u=e.viewState;function p(t,e,i){return n.call(o,e,t?i:null)}var f=u.projection,m=Object(h.f)(t.slice(),f),g=[[0,0]];if(f.canWrapX()&&r){var v=f.getExtent(),y=Object(s.E)(v);g.push([-y,0],[y,0])}var b,_=e.layerStatesArray,w=_.length;this.declutterTree_&&(b=this.declutterTree_.all().map((function(t){return t.value})));for(var C=[],x=0;x<g.length;x++)for(var S=w-1;S>=0;--S){var E=_[S],M=E.layer;if(M.hasRenderer()&&Object(l.b)(E,u)&&a.call(c,M)){var T=M.getRenderer(),O=M.getSource();if(T&&O){var L=O.getWrapX()?m:t,A=p.bind(null,E.managed);C[0]=L[0]+g[x][0],C[1]=L[1]+g[x][1],d=T.forEachFeatureAtCoordinate(C,e,i,A,b)}if(d)return d}}},e.prototype.forEachLayerAtPixel=function(t,e,i,r,n){return Object(o.b)()},e.prototype.hasFeatureAtCoordinate=function(t,e,i,r,o,a){return void 0!==this.forEachFeatureAtCoordinate(t,e,i,r,n.b,this,o,a)},e.prototype.getMap=function(){return this.map_},e.prototype.renderFrame=function(t){this.declutterTree_=function(t,e){e&&e.clear();for(var i=t.declutterItems,r=i.length-1;r>=0;--r)for(var n=i[r],o=n.items,a=0,s=o.length;a<s;a+=3)e=o[a].renderDeclutter(o[a+1],o[a+2],n.opacity,e);return i.length=0,e}(t,this.declutterTree_)},e.prototype.scheduleExpireIconCache=function(t){c.a.canExpireCache()&&t.postRenderFunctions.push(m)},e}(r.a),v=i(36),y=i(67),b=i(38),_=i(34),w=i(21),C=i(2),x=i(5),S=i(13),E=function(){var t=function(e,i){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(e,i)};return function(e,i){function r(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(r.prototype=i.prototype,new r)}}(),M=function(t){function e(e){var i=t.call(this,e)||this;i.fontChangeListenerKey_=Object(x.a)(C.a,v.a.PROPERTYCHANGE,e.redrawText.bind(e)),i.element_=document.createElement("div");var r=i.element_.style;r.position="absolute",r.width="100%",r.height="100%",r.zIndex="0",i.element_.className=w.d+" ol-layers";var n=e.getViewport();return n.insertBefore(i.element_,n.firstChild||null),i.children_=[],i.renderedVisible_=!0,i}return E(e,t),e.prototype.dispatchRenderEvent=function(t,e){var i=this.getMap();if(i.hasListener(t)){var r=new y.a(t,void 0,e);i.dispatchEvent(r)}},e.prototype.disposeInternal=function(){Object(x.c)(this.fontChangeListenerKey_),this.element_.parentNode.removeChild(this.element_),t.prototype.disposeInternal.call(this)},e.prototype.renderFrame=function(e){if(e){this.calculateMatrices2D(e),this.dispatchRenderEvent(b.a.PRECOMPOSE,e);var i=e.layerStatesArray.sort((function(t,e){return t.zIndex-e.zIndex})),r=e.viewState;this.children_.length=0;for(var n=null,o=0,a=i.length;o<a;++o){var s=i[o];if(e.layerIndex=o,Object(l.b)(s,r)&&(s.sourceState==_.a.READY||s.sourceState==_.a.UNDEFINED)){var c=s.layer.render(e,n);c&&c!==n&&(this.children_.push(c),n=c)}}t.prototype.renderFrame.call(this,e),Object(S.d)(this.element_,this.children_),this.dispatchRenderEvent(b.a.POSTCOMPOSE,e),this.renderedVisible_||(this.element_.style.display="",this.renderedVisible_=!0),this.scheduleExpireIconCache(e)}else this.renderedVisible_&&(this.element_.style.display="none",this.renderedVisible_=!1)},e.prototype.forEachLayerAtPixel=function(t,e,i,r,n){for(var o=e.viewState,a=e.layerStatesArray,s=a.length-1;s>=0;--s){var c=a[s],d=c.layer;if(d.hasRenderer()&&Object(l.b)(c,o)&&n(d)){var u=d.getRenderer().getDataAtPixel(t,e,i);if(u){var p=r(d,u);if(p)return p}}}},e}(g),T=i(15),O=i(32),L=i(25),A=i(6),I=i(68),j=i(10),D=i(11),R=function(){var t=function(e,i){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(e,i)};return function(e,i){function r(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(r.prototype=i.prototype,new r)}}(),z="layers",k=function(t){function e(e){var i=this,r=e||{},n=Object(D.a)({},r);delete n.layers;var o=r.layers;return(i=t.call(this,n)||this).layersListenerKeys_=[],i.listenerKeys_={},i.addEventListener(Object(T.b)(z),i.handleLayersChanged_),o?Array.isArray(o)?o=new O.a(o.slice(),{unique:!0}):Object(j.a)("function"==typeof o.getArray,43):o=new O.a(void 0,{unique:!0}),i.setLayers(o),i}return R(e,t),e.prototype.handleLayerChange_=function(){this.changed()},e.prototype.handleLayersChanged_=function(){this.layersListenerKeys_.forEach(x.c),this.layersListenerKeys_.length=0;var t=this.getLayers();for(var e in this.layersListenerKeys_.push(Object(x.a)(t,L.a.ADD,this.handleLayersAdd_,this),Object(x.a)(t,L.a.REMOVE,this.handleLayersRemove_,this)),this.listenerKeys_)this.listenerKeys_[e].forEach(x.c);Object(D.b)(this.listenerKeys_);for(var i=t.getArray(),r=0,n=i.length;r<n;r++){var a=i[r];this.listenerKeys_[Object(o.c)(a)]=[Object(x.a)(a,v.a.PROPERTYCHANGE,this.handleLayerChange_,this),Object(x.a)(a,A.a.CHANGE,this.handleLayerChange_,this)]}this.changed()},e.prototype.handleLayersAdd_=function(t){var e=t.element;this.listenerKeys_[Object(o.c)(e)]=[Object(x.a)(e,v.a.PROPERTYCHANGE,this.handleLayerChange_,this),Object(x.a)(e,A.a.CHANGE,this.handleLayerChange_,this)],this.changed()},e.prototype.handleLayersRemove_=function(t){var e=t.element,i=Object(o.c)(e);this.listenerKeys_[i].forEach(x.c),delete this.listenerKeys_[i],this.changed()},e.prototype.getLayers=function(){return this.get(z)},e.prototype.setLayers=function(t){this.set(z,t)},e.prototype.getLayersArray=function(t){var e=void 0!==t?t:[];return this.getLayers().forEach((function(t){t.getLayersArray(e)})),e},e.prototype.getLayerStatesArray=function(t){var e=void 0!==t?t:[],i=e.length;this.getLayers().forEach((function(t){t.getLayerStatesArray(e)}));for(var r=this.getLayerState(),n=i,o=e.length;n<o;n++){var a=e[n];a.opacity*=r.opacity,a.visible=a.visible&&r.visible,a.maxResolution=Math.min(a.maxResolution,r.maxResolution),a.minResolution=Math.max(a.minResolution,r.minResolution),a.minZoom=Math.max(a.minZoom,r.minZoom),a.maxZoom=Math.min(a.maxZoom,r.maxZoom),void 0!==r.extent&&(void 0!==a.extent?a.extent=Object(s.B)(a.extent,r.extent):a.extent=r.extent)}return e},e.prototype.getSourceState=function(){return _.a.READY},e}(I.a),P=i(30),N=function(){var t=function(e,i){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(e,i)};return function(e,i){function r(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(r.prototype=i.prototype,new r)}}(),V=function(t){function e(e,i,r){var n=t.call(this,e)||this;return n.map=i,n.frameState=void 0!==r?r:null,n}return N(e,t),e}(P.a),F=function(){var t=function(e,i){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(e,i)};return function(e,i){function r(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(r.prototype=i.prototype,new r)}}(),H=function(t){function e(e,i,r,n,o){var a=t.call(this,e,i,o)||this;return a.originalEvent=r,a.pixel_=null,a.coordinate_=null,a.dragging=void 0!==n&&n,a}return F(e,t),Object.defineProperty(e.prototype,"pixel",{get:function(){return this.pixel_||(this.pixel_=this.map.getEventPixel(this.originalEvent)),this.pixel_},set:function(t){this.pixel_=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"coordinate",{get:function(){return this.coordinate_||(this.coordinate_=this.map.getCoordinateFromPixel(this.pixel)),this.coordinate_},set:function(t){this.coordinate_=t},enumerable:!1,configurable:!0}),e.prototype.preventDefault=function(){t.prototype.preventDefault.call(this),this.originalEvent.preventDefault()},e.prototype.stopPropagation=function(){t.prototype.stopPropagation.call(this),this.originalEvent.stopPropagation()},e}(V),G=i(35),X={SINGLECLICK:"singleclick",CLICK:A.a.CLICK,DBLCLICK:A.a.DBLCLICK,POINTERDRAG:"pointerdrag",POINTERMOVE:"pointermove",POINTERDOWN:"pointerdown",POINTERUP:"pointerup",POINTEROVER:"pointerover",POINTEROUT:"pointerout",POINTERENTER:"pointerenter",POINTERLEAVE:"pointerleave",POINTERCANCEL:"pointercancel"},U="pointermove",B="pointerdown",$=function(){var t=function(e,i){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(e,i)};return function(e,i){function r(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(r.prototype=i.prototype,new r)}}(),Z=function(t){function e(e,i){var r=t.call(this,e)||this;r.map_=e,r.clickTimeoutId_,r.dragging_=!1,r.dragListenerKeys_=[],r.moveTolerance_=i?i*d.a:d.a,r.down_=null;var n=r.map_.getViewport();return r.activePointers_=0,r.trackedTouches_={},r.element_=n,r.pointerdownListenerKey_=Object(x.a)(n,B,r.handlePointerDown_,r),r.originalPointerMoveEvent_,r.relayedListenerKey_=Object(x.a)(n,U,r.relayEvent_,r),r.boundHandleTouchMove_=r.handleTouchMove_.bind(r),r.element_.addEventListener(A.a.TOUCHMOVE,r.boundHandleTouchMove_,!!d.e&&{passive:!1}),r}return $(e,t),e.prototype.emulateClick_=function(t){var e=new H(X.CLICK,this.map_,t);this.dispatchEvent(e),void 0!==this.clickTimeoutId_?(clearTimeout(this.clickTimeoutId_),this.clickTimeoutId_=void 0,e=new H(X.DBLCLICK,this.map_,t),this.dispatchEvent(e)):this.clickTimeoutId_=setTimeout(function(){this.clickTimeoutId_=void 0;var e=new H(X.SINGLECLICK,this.map_,t);this.dispatchEvent(e)}.bind(this),250)},e.prototype.updateActivePointers_=function(t){var e=t;e.type==X.POINTERUP||e.type==X.POINTERCANCEL?delete this.trackedTouches_[e.pointerId]:e.type==X.POINTERDOWN&&(this.trackedTouches_[e.pointerId]=!0),this.activePointers_=Object.keys(this.trackedTouches_).length},e.prototype.handlePointerUp_=function(t){this.updateActivePointers_(t);var e=new H(X.POINTERUP,this.map_,t);this.dispatchEvent(e),e.propagationStopped||this.dragging_||!this.isMouseActionButton_(t)||this.emulateClick_(this.down_),0===this.activePointers_&&(this.dragListenerKeys_.forEach(x.c),this.dragListenerKeys_.length=0,this.dragging_=!1,this.down_=null)},e.prototype.isMouseActionButton_=function(t){return 0===t.button},e.prototype.handlePointerDown_=function(t){this.updateActivePointers_(t);var e=new H(X.POINTERDOWN,this.map_,t);this.dispatchEvent(e),this.down_=t,0===this.dragListenerKeys_.length&&(this.dragListenerKeys_.push(Object(x.a)(document,X.POINTERMOVE,this.handlePointerMove_,this),Object(x.a)(document,X.POINTERUP,this.handlePointerUp_,this),Object(x.a)(this.element_,X.POINTERCANCEL,this.handlePointerUp_,this)),this.element_.getRootNode&&this.element_.getRootNode()!==document&&this.dragListenerKeys_.push(Object(x.a)(this.element_.getRootNode(),X.POINTERUP,this.handlePointerUp_,this)))},e.prototype.handlePointerMove_=function(t){if(this.isMoving_(t)){this.dragging_=!0;var e=new H(X.POINTERDRAG,this.map_,t,this.dragging_);this.dispatchEvent(e)}},e.prototype.relayEvent_=function(t){this.originalPointerMoveEvent_=t;var e=!(!this.down_||!this.isMoving_(t));this.dispatchEvent(new H(t.type,this.map_,t,e))},e.prototype.handleTouchMove_=function(t){this.originalPointerMoveEvent_&&!this.originalPointerMoveEvent_.defaultPrevented||t.preventDefault()},e.prototype.isMoving_=function(t){return this.dragging_||Math.abs(t.clientX-this.down_.clientX)>this.moveTolerance_||Math.abs(t.clientY-this.down_.clientY)>this.moveTolerance_},e.prototype.disposeInternal=function(){this.relayedListenerKey_&&(Object(x.c)(this.relayedListenerKey_),this.relayedListenerKey_=null),this.element_.removeEventListener(A.a.TOUCHMOVE,this.boundHandleTouchMove_),this.pointerdownListenerKey_&&(Object(x.c)(this.pointerdownListenerKey_),this.pointerdownListenerKey_=null),this.dragListenerKeys_.forEach(x.c),this.dragListenerKeys_.length=0,this.element_=null,t.prototype.disposeInternal.call(this)},e}(G.a),Y=i(55),W="layergroup",q="size",K="target",J="view",Q=function(){function t(t,e){this.priorityFunction_=t,this.keyFunction_=e,this.elements_=[],this.priorities_=[],this.queuedElements_={}}return t.prototype.clear=function(){this.elements_.length=0,this.priorities_.length=0,Object(D.b)(this.queuedElements_)},t.prototype.dequeue=function(){var t=this.elements_,e=this.priorities_,i=t[0];1==t.length?(t.length=0,e.length=0):(t[0]=t.pop(),e[0]=e.pop(),this.siftUp_(0));var r=this.keyFunction_(i);return delete this.queuedElements_[r],i},t.prototype.enqueue=function(t){Object(j.a)(!(this.keyFunction_(t)in this.queuedElements_),31);var e=this.priorityFunction_(t);return e!=1/0&&(this.elements_.push(t),this.priorities_.push(e),this.queuedElements_[this.keyFunction_(t)]=!0,this.siftDown_(0,this.elements_.length-1),!0)},t.prototype.getCount=function(){return this.elements_.length},t.prototype.getLeftChildIndex_=function(t){return 2*t+1},t.prototype.getRightChildIndex_=function(t){return 2*t+2},t.prototype.getParentIndex_=function(t){return t-1>>1},t.prototype.heapify_=function(){var t;for(t=(this.elements_.length>>1)-1;t>=0;t--)this.siftUp_(t)},t.prototype.isEmpty=function(){return 0===this.elements_.length},t.prototype.isKeyQueued=function(t){return t in this.queuedElements_},t.prototype.isQueued=function(t){return this.isKeyQueued(this.keyFunction_(t))},t.prototype.siftUp_=function(t){for(var e=this.elements_,i=this.priorities_,r=e.length,n=e[t],o=i[t],a=t;t<r>>1;){var s=this.getLeftChildIndex_(t),c=this.getRightChildIndex_(t),l=c<r&&i[c]<i[s]?c:s;e[t]=e[l],i[t]=i[l],t=l}e[t]=n,i[t]=o,this.siftDown_(a,t)},t.prototype.siftDown_=function(t,e){for(var i=this.elements_,r=this.priorities_,n=i[e],o=r[e];e>t;){var a=this.getParentIndex_(e);if(!(r[a]>o))break;i[e]=i[a],r[e]=r[a],e=a}i[e]=n,r[e]=o},t.prototype.reprioritize=function(){var t,e,i,r=this.priorityFunction_,n=this.elements_,o=this.priorities_,a=0,s=n.length;for(e=0;e<s;++e)(i=r(t=n[e]))==1/0?delete this.queuedElements_[this.keyFunction_(t)]:(o[a]=i,n[a++]=t);n.length=a,o.length=a,this.heapify_()},t}(),tt=i(9),et=function(){var t=function(e,i){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(e,i)};return function(e,i){function r(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(r.prototype=i.prototype,new r)}}(),it=function(t){function e(e,i){var r=t.call(this,(function(t){return e.apply(null,t)}),(function(t){return t[0].getKey()}))||this;return r.boundHandleTileChange_=r.handleTileChange.bind(r),r.tileChangeCallback_=i,r.tilesLoading_=0,r.tilesLoadingKeys_={},r}return et(e,t),e.prototype.enqueue=function(e){var i=t.prototype.enqueue.call(this,e);i&&e[0].addEventListener(A.a.CHANGE,this.boundHandleTileChange_);return i},e.prototype.getTilesLoading=function(){return this.tilesLoading_},e.prototype.handleTileChange=function(t){var e=t.target,i=e.getState();if(e.hifi&&i===tt.a.LOADED||i===tt.a.ERROR||i===tt.a.EMPTY){e.removeEventListener(A.a.CHANGE,this.boundHandleTileChange_);var r=e.getKey();r in this.tilesLoadingKeys_&&(delete this.tilesLoadingKeys_[r],--this.tilesLoading_),this.tileChangeCallback_()}},e.prototype.loadMoreTiles=function(t,e){for(var i,r,n=0;this.tilesLoading_<t&&n<e&&this.getCount()>0;)r=(i=this.dequeue()[0]).getKey(),i.getState()!==tt.a.IDLE||r in this.tilesLoadingKeys_||(this.tilesLoadingKeys_[r]=!0,++this.tilesLoading_,++n,i.load())},e}(Q);var rt=i(82),nt=i(20),ot=i(28),at=function(){var t=function(e,i){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(e,i)};return function(e,i){function r(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(r.prototype=i.prototype,new r)}}();var st=function(t){function e(e){var i=t.call(this)||this,r=function(t){var e=null;void 0!==t.keyboardEventTarget&&(e="string"==typeof t.keyboardEventTarget?document.getElementById(t.keyboardEventTarget):t.keyboardEventTarget);var i,r,n,o={},a=t.layers&&"function"==typeof t.layers.getLayers?t.layers:new k({layers:t.layers});o[W]=a,o[K]=t.target,o[J]=void 0!==t.view?t.view:new rt.a,void 0!==t.controls&&(Array.isArray(t.controls)?i=new O.a(t.controls.slice()):(Object(j.a)("function"==typeof t.controls.getArray,47),i=t.controls));void 0!==t.interactions&&(Array.isArray(t.interactions)?r=new O.a(t.interactions.slice()):(Object(j.a)("function"==typeof t.interactions.getArray,48),r=t.interactions));void 0!==t.overlays?Array.isArray(t.overlays)?n=new O.a(t.overlays.slice()):(Object(j.a)("function"==typeof t.overlays.getArray,49),n=t.overlays):n=new O.a;return{controls:i,interactions:r,keyboardEventTarget:e,overlays:n,values:o}}(e);return i.boundHandleBrowserEvent_=i.handleBrowserEvent.bind(i),i.maxTilesLoading_=void 0!==e.maxTilesLoading?e.maxTilesLoading:16,i.pixelRatio_=void 0!==e.pixelRatio?e.pixelRatio:d.a,i.postRenderTimeoutHandle_,i.animationDelayKey_,i.animationDelay_=function(){this.animationDelayKey_=void 0,this.renderFrame_(Date.now())}.bind(i),i.coordinateToPixelTransform_=Object(a.c)(),i.pixelToCoordinateTransform_=Object(a.c)(),i.frameIndex_=0,i.frameState_=null,i.previousExtent_=null,i.viewPropertyListenerKey_=null,i.viewChangeListenerKey_=null,i.layerGroupPropertyListenerKeys_=null,i.viewport_=document.createElement("div"),i.viewport_.className="ol-viewport"+("ontouchstart"in window?" ol-touch":""),i.viewport_.style.position="relative",i.viewport_.style.overflow="hidden",i.viewport_.style.width="100%",i.viewport_.style.height="100%",i.overlayContainer_=document.createElement("div"),i.overlayContainer_.style.position="absolute",i.overlayContainer_.style.zIndex="0",i.overlayContainer_.style.width="100%",i.overlayContainer_.style.height="100%",i.overlayContainer_.style.pointerEvents="none",i.overlayContainer_.className="ol-overlaycontainer",i.viewport_.appendChild(i.overlayContainer_),i.overlayContainerStopEvent_=document.createElement("div"),i.overlayContainerStopEvent_.style.position="absolute",i.overlayContainerStopEvent_.style.zIndex="0",i.overlayContainerStopEvent_.style.width="100%",i.overlayContainerStopEvent_.style.height="100%",i.overlayContainerStopEvent_.style.pointerEvents="none",i.overlayContainerStopEvent_.className="ol-overlaycontainer-stopevent",i.viewport_.appendChild(i.overlayContainerStopEvent_),i.mapBrowserEventHandler_=null,i.moveTolerance_=e.moveTolerance,i.keyboardEventTarget_=r.keyboardEventTarget,i.keyHandlerKeys_=null,i.controls=r.controls||new O.a,i.interactions=r.interactions||new O.a,i.overlays_=r.overlays,i.overlayIdIndex_={},i.renderer_=null,i.handleResize_,i.postRenderFunctions_=[],i.tileQueue_=new it(i.getTilePriority.bind(i),i.handleTileChange_.bind(i)),i.addEventListener(Object(T.b)(W),i.handleLayerGroupChanged_),i.addEventListener(Object(T.b)(J),i.handleViewChanged_),i.addEventListener(Object(T.b)(q),i.handleSizeChanged_),i.addEventListener(Object(T.b)(K),i.handleTargetChanged_),i.setProperties(r.values),i.controls.forEach(function(t){t.setMap(this)}.bind(i)),i.controls.addEventListener(L.a.ADD,function(t){t.element.setMap(this)}.bind(i)),i.controls.addEventListener(L.a.REMOVE,function(t){t.element.setMap(null)}.bind(i)),i.interactions.forEach(function(t){t.setMap(this)}.bind(i)),i.interactions.addEventListener(L.a.ADD,function(t){t.element.setMap(this)}.bind(i)),i.interactions.addEventListener(L.a.REMOVE,function(t){t.element.setMap(null)}.bind(i)),i.overlays_.forEach(i.addOverlayInternal_.bind(i)),i.overlays_.addEventListener(L.a.ADD,function(t){this.addOverlayInternal_(t.element)}.bind(i)),i.overlays_.addEventListener(L.a.REMOVE,function(t){var e=t.element.getId();void 0!==e&&delete this.overlayIdIndex_[e.toString()],t.element.setMap(null)}.bind(i)),i}return at(e,t),e.prototype.createRenderer=function(){throw new Error("Use a map type that has a createRenderer method")},e.prototype.addControl=function(t){this.getControls().push(t)},e.prototype.addInteraction=function(t){this.getInteractions().push(t)},e.prototype.addLayer=function(t){this.getLayerGroup().getLayers().push(t)},e.prototype.addOverlay=function(t){this.getOverlays().push(t)},e.prototype.addOverlayInternal_=function(t){var e=t.getId();void 0!==e&&(this.overlayIdIndex_[e.toString()]=t),t.setMap(this)},e.prototype.disposeInternal=function(){this.setTarget(null),t.prototype.disposeInternal.call(this)},e.prototype.forEachFeatureAtPixel=function(t,e,i){if(this.frameState_){var r=this.getCoordinateFromPixelInternal(t),o=void 0!==(i=void 0!==i?i:{}).hitTolerance?i.hitTolerance*this.frameState_.pixelRatio:0,a=void 0!==i.layerFilter?i.layerFilter:n.b,s=!1!==i.checkWrapped;return this.renderer_.forEachFeatureAtCoordinate(r,this.frameState_,o,s,e,null,a,null)}},e.prototype.getFeaturesAtPixel=function(t,e){var i=[];return this.forEachFeatureAtPixel(t,(function(t){i.push(t)}),e),i},e.prototype.forEachLayerAtPixel=function(t,e,i){if(this.frameState_){var r=i||{},o=void 0!==r.hitTolerance?r.hitTolerance*this.frameState_.pixelRatio:0,a=r.layerFilter||n.b;return this.renderer_.forEachLayerAtPixel(t,this.frameState_,o,e,a)}},e.prototype.hasFeatureAtPixel=function(t,e){if(!this.frameState_)return!1;var i=this.getCoordinateFromPixelInternal(t),r=void 0!==(e=void 0!==e?e:{}).layerFilter?e.layerFilter:n.b,o=void 0!==e.hitTolerance?e.hitTolerance*this.frameState_.pixelRatio:0,a=!1!==e.checkWrapped;return this.renderer_.hasFeatureAtCoordinate(i,this.frameState_,o,a,r,null)},e.prototype.getEventCoordinate=function(t){return this.getCoordinateFromPixel(this.getEventPixel(t))},e.prototype.getEventCoordinateInternal=function(t){return this.getCoordinateFromPixelInternal(this.getEventPixel(t))},e.prototype.getEventPixel=function(t){var e=this.viewport_.getBoundingClientRect(),i="changedTouches"in t?t.changedTouches[0]:t;return[i.clientX-e.left,i.clientY-e.top]},e.prototype.getTarget=function(){return this.get(K)},e.prototype.getTargetElement=function(){var t=this.getTarget();return void 0!==t?"string"==typeof t?document.getElementById(t):t:null},e.prototype.getCoordinateFromPixel=function(t){return Object(u.k)(this.getCoordinateFromPixelInternal(t),this.getView().getProjection())},e.prototype.getCoordinateFromPixelInternal=function(t){var e=this.frameState_;return e?Object(a.a)(e.pixelToCoordinateTransform,t.slice()):null},e.prototype.getControls=function(){return this.controls},e.prototype.getOverlays=function(){return this.overlays_},e.prototype.getOverlayById=function(t){var e=this.overlayIdIndex_[t.toString()];return void 0!==e?e:null},e.prototype.getInteractions=function(){return this.interactions},e.prototype.getLayerGroup=function(){return this.get(W)},e.prototype.getLayers=function(){return this.getLayerGroup().getLayers()},e.prototype.getLoading=function(){for(var t=this.getLayerGroup().getLayerStatesArray(),e=0,i=t.length;e<i;++e){var r=t[e].layer.getSource();if(r&&r.loading)return!0}return!1},e.prototype.getPixelFromCoordinate=function(t){var e=Object(u.d)(t,this.getView().getProjection());return this.getPixelFromCoordinateInternal(e)},e.prototype.getPixelFromCoordinateInternal=function(t){var e=this.frameState_;return e?Object(a.a)(e.coordinateToPixelTransform,t.slice(0,2)):null},e.prototype.getRenderer=function(){return this.renderer_},e.prototype.getSize=function(){return this.get(q)},e.prototype.getView=function(){return this.get(J)},e.prototype.getViewport=function(){return this.viewport_},e.prototype.getOverlayContainer=function(){return this.overlayContainer_},e.prototype.getOverlayContainerStopEvent=function(){return this.overlayContainerStopEvent_},e.prototype.getTilePriority=function(t,e,i,r){return function(t,e,i,r,n){if(!t||!(i in t.wantedTiles))return 1/0;if(!t.wantedTiles[i][e.getKey()])return 1/0;var o=t.viewState.center,a=r[0]-o[0],s=r[1]-o[1];return 65536*Math.log(n)+Math.sqrt(a*a+s*s)/n}(this.frameState_,t,e,i,r)},e.prototype.handleBrowserEvent=function(t,e){var i=e||t.type,r=new H(i,this,t);this.handleMapBrowserEvent(r)},e.prototype.handleMapBrowserEvent=function(t){if(this.frameState_){var e=t.originalEvent,i=e.type;if(i===B||i===A.a.WHEEL||i===A.a.KEYDOWN){var r=this.viewport_.getRootNode?this.viewport_.getRootNode():document,n=r===document?e.target:r.elementFromPoint(e.clientX,e.clientY);if(this.overlayContainerStopEvent_.contains(n)||!(r===document?document.documentElement:r).contains(n))return}t.frameState=this.frameState_;var o=this.getInteractions().getArray();if(!1!==this.dispatchEvent(t))for(var a=o.length-1;a>=0;a--){var s=o[a];if(s.getActive())if(!s.handleEvent(t))break}}},e.prototype.handlePostRender=function(){var t=this.frameState_,e=this.tileQueue_;if(!e.isEmpty()){var i=this.maxTilesLoading_,r=i;if(t){var n=t.viewHints;if(n[nt.a.ANIMATING]||n[nt.a.INTERACTING]){var o=!d.c&&Date.now()-t.time>8;i=o?0:8,r=o?0:2}}e.getTilesLoading()<i&&(e.reprioritize(),e.loadMoreTiles(i,r))}!t||!this.hasListener(b.a.RENDERCOMPLETE)||t.animate||this.tileQueue_.getTilesLoading()||this.getLoading()||this.renderer_.dispatchRenderEvent(b.a.RENDERCOMPLETE,t);for(var a=this.postRenderFunctions_,s=0,c=a.length;s<c;++s)a[s](this,t);a.length=0},e.prototype.handleSizeChanged_=function(){this.getView()&&!this.getView().getAnimating()&&this.getView().resolveConstraints(0),this.render()},e.prototype.handleTargetChanged_=function(){var t;if(this.getTarget()&&(t=this.getTargetElement()),this.mapBrowserEventHandler_){for(var e=0,i=this.keyHandlerKeys_.length;e<i;++e)Object(x.c)(this.keyHandlerKeys_[e]);this.keyHandlerKeys_=null,this.viewport_.removeEventListener(A.a.CONTEXTMENU,this.boundHandleBrowserEvent_),this.viewport_.removeEventListener(A.a.WHEEL,this.boundHandleBrowserEvent_),void 0!==this.handleResize_&&(removeEventListener(A.a.RESIZE,this.handleResize_,!1),this.handleResize_=void 0),this.mapBrowserEventHandler_.dispose(),this.mapBrowserEventHandler_=null,Object(S.c)(this.viewport_)}if(t){for(var r in t.appendChild(this.viewport_),this.renderer_||(this.renderer_=this.createRenderer()),this.mapBrowserEventHandler_=new Z(this,this.moveTolerance_),X)this.mapBrowserEventHandler_.addEventListener(X[r],this.handleMapBrowserEvent.bind(this));this.viewport_.addEventListener(A.a.CONTEXTMENU,this.boundHandleBrowserEvent_,!1),this.viewport_.addEventListener(A.a.WHEEL,this.boundHandleBrowserEvent_,!!d.e&&{passive:!1});var n=this.keyboardEventTarget_?this.keyboardEventTarget_:t;this.keyHandlerKeys_=[Object(x.a)(n,A.a.KEYDOWN,this.handleBrowserEvent,this),Object(x.a)(n,A.a.KEYPRESS,this.handleBrowserEvent,this)],this.handleResize_||(this.handleResize_=this.updateSize.bind(this),window.addEventListener(A.a.RESIZE,this.handleResize_,!1))}else this.renderer_&&(clearTimeout(this.postRenderTimeoutHandle_),this.postRenderFunctions_.length=0,this.renderer_.dispose(),this.renderer_=null),this.animationDelayKey_&&(cancelAnimationFrame(this.animationDelayKey_),this.animationDelayKey_=void 0);this.updateSize()},e.prototype.handleTileChange_=function(){this.render()},e.prototype.handleViewPropertyChanged_=function(){this.render()},e.prototype.handleViewChanged_=function(){this.viewPropertyListenerKey_&&(Object(x.c)(this.viewPropertyListenerKey_),this.viewPropertyListenerKey_=null),this.viewChangeListenerKey_&&(Object(x.c)(this.viewChangeListenerKey_),this.viewChangeListenerKey_=null);var t=this.getView();t&&(this.updateViewportSize_(),this.viewPropertyListenerKey_=Object(x.a)(t,v.a.PROPERTYCHANGE,this.handleViewPropertyChanged_,this),this.viewChangeListenerKey_=Object(x.a)(t,A.a.CHANGE,this.handleViewPropertyChanged_,this),t.resolveConstraints(0)),this.render()},e.prototype.handleLayerGroupChanged_=function(){this.layerGroupPropertyListenerKeys_&&(this.layerGroupPropertyListenerKeys_.forEach(x.c),this.layerGroupPropertyListenerKeys_=null);var t=this.getLayerGroup();t&&(this.layerGroupPropertyListenerKeys_=[Object(x.a)(t,v.a.PROPERTYCHANGE,this.render,this),Object(x.a)(t,A.a.CHANGE,this.render,this)]),this.render()},e.prototype.isRendered=function(){return!!this.frameState_},e.prototype.renderSync=function(){this.animationDelayKey_&&cancelAnimationFrame(this.animationDelayKey_),this.animationDelay_()},e.prototype.redrawText=function(){for(var t=this.getLayerGroup().getLayerStatesArray(),e=0,i=t.length;e<i;++e){var r=t[e].layer;r.hasRenderer()&&r.getRenderer().handleFontsChanged()}},e.prototype.render=function(){this.renderer_&&void 0===this.animationDelayKey_&&(this.animationDelayKey_=requestAnimationFrame(this.animationDelay_))},e.prototype.removeControl=function(t){return this.getControls().remove(t)},e.prototype.removeInteraction=function(t){return this.getInteractions().remove(t)},e.prototype.removeLayer=function(t){return this.getLayerGroup().getLayers().remove(t)},e.prototype.removeOverlay=function(t){return this.getOverlays().remove(t)},e.prototype.renderFrame_=function(t){var e=this.getSize(),i=this.getView(),r=this.frameState_,n=null;if(void 0!==e&&Object(ot.a)(e)&&i&&i.isDef()){var o=i.getHints(this.frameState_?this.frameState_.viewHints:void 0),a=i.getState();n={animate:!1,coordinateToPixelTransform:this.coordinateToPixelTransform_,declutterItems:r?r.declutterItems:[],extent:Object(s.z)(a.center,a.resolution,a.rotation,e),index:this.frameIndex_++,layerIndex:0,layerStatesArray:this.getLayerGroup().getLayerStatesArray(),pixelRatio:this.pixelRatio_,pixelToCoordinateTransform:this.pixelToCoordinateTransform_,postRenderFunctions:[],size:e,tileQueue:this.tileQueue_,time:t,usedTiles:{},viewState:a,viewHints:o,wantedTiles:{}}}if(this.frameState_=n,this.renderer_.renderFrame(n),n){if(n.animate&&this.render(),Array.prototype.push.apply(this.postRenderFunctions_,n.postRenderFunctions),r)(!this.previousExtent_||!Object(s.H)(this.previousExtent_)&&!Object(s.p)(n.extent,this.previousExtent_))&&(this.dispatchEvent(new V(Y.a.MOVESTART,this,r)),this.previousExtent_=Object(s.l)(this.previousExtent_));this.previousExtent_&&!n.viewHints[nt.a.ANIMATING]&&!n.viewHints[nt.a.INTERACTING]&&!Object(s.p)(n.extent,this.previousExtent_)&&(this.dispatchEvent(new V(Y.a.MOVEEND,this,n)),Object(s.d)(n.extent,this.previousExtent_))}this.dispatchEvent(new V(Y.a.POSTRENDER,this,n)),this.postRenderTimeoutHandle_=setTimeout(this.handlePostRender.bind(this),0)},e.prototype.setLayerGroup=function(t){this.set(W,t)},e.prototype.setSize=function(t){this.set(q,t)},e.prototype.setTarget=function(t){this.set(K,t)},e.prototype.setView=function(t){this.set(J,t)},e.prototype.updateSize=function(){var t=this.getTargetElement();if(t){var e=getComputedStyle(t);this.setSize([t.offsetWidth-parseFloat(e.borderLeftWidth)-parseFloat(e.paddingLeft)-parseFloat(e.paddingRight)-parseFloat(e.borderRightWidth),t.offsetHeight-parseFloat(e.borderTopWidth)-parseFloat(e.paddingTop)-parseFloat(e.paddingBottom)-parseFloat(e.borderBottomWidth)])}else this.setSize(void 0);this.updateViewportSize_()},e.prototype.updateViewportSize_=function(){var t=this.getView();if(t){var e=void 0,i=getComputedStyle(this.viewport_);i.width&&i.height&&(e=[parseInt(i.width,10),parseInt(i.height,10)]),t.setViewportSize(e)}},e}(T.a),ct=i(74),lt="active",dt=i(26),ut=function(){var t=function(e,i){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(e,i)};return function(e,i){function r(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(r.prototype=i.prototype,new r)}}();function pt(t,e,i,r){var n=t.getZoom();if(void 0!==n){var o=t.getConstrainedZoom(n+e),a=t.getResolutionForZoom(o);t.getAnimating()&&t.cancelAnimations(),t.animate({resolution:a,anchor:i,duration:void 0!==r?r:250,easing:dt.b})}}var ht=function(t){function e(e){var i=t.call(this)||this;return e&&e.handleEvent&&(i.handleEvent=e.handleEvent),i.map_=null,i.setActive(!0),i}return ut(e,t),e.prototype.getActive=function(){return this.get(lt)},e.prototype.getMap=function(){return this.map_},e.prototype.handleEvent=function(t){return!0},e.prototype.setActive=function(t){this.set(lt,t)},e.prototype.setMap=function(t){this.map_=t},e}(T.a),ft=function(){var t=function(e,i){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(e,i)};return function(e,i){function r(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(r.prototype=i.prototype,new r)}}(),mt=function(t){function e(e){var i=t.call(this)||this,r=e||{};return i.delta_=r.delta?r.delta:1,i.duration_=void 0!==r.duration?r.duration:250,i}return ft(e,t),e.prototype.handleEvent=function(t){var e=!1;if(t.type==X.DBLCLICK){var i=t.originalEvent,r=t.map,n=t.coordinate,o=i.shiftKey?-this.delta_:this.delta_;pt(r.getView(),o,n,this.duration_),t.preventDefault(),e=!0}return!e},e}(ht),gt=function(){var t=function(e,i){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(e,i)};return function(e,i){function r(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(r.prototype=i.prototype,new r)}}();function vt(t){for(var e=t.length,i=0,r=0,n=0;n<e;n++)i+=t[n].clientX,r+=t[n].clientY;return[i/e,r/e]}var yt=function(t){function e(e){var i=this,r=e||{};return i=t.call(this,r)||this,r.handleDownEvent&&(i.handleDownEvent=r.handleDownEvent),r.handleDragEvent&&(i.handleDragEvent=r.handleDragEvent),r.handleMoveEvent&&(i.handleMoveEvent=r.handleMoveEvent),r.handleUpEvent&&(i.handleUpEvent=r.handleUpEvent),r.stopDown&&(i.stopDown=r.stopDown),i.handlingDownUpSequence=!1,i.trackedPointers_={},i.targetPointers=[],i}return gt(e,t),e.prototype.getPointerCount=function(){return this.targetPointers.length},e.prototype.handleDownEvent=function(t){return!1},e.prototype.handleDragEvent=function(t){},e.prototype.handleEvent=function(t){if(!t.originalEvent)return!0;var e=!1;if(this.updateTrackedPointers_(t),this.handlingDownUpSequence){if(t.type==X.POINTERDRAG)this.handleDragEvent(t),t.preventDefault();else if(t.type==X.POINTERUP){var i=this.handleUpEvent(t);this.handlingDownUpSequence=i&&this.targetPointers.length>0}}else if(t.type==X.POINTERDOWN){var r=this.handleDownEvent(t);this.handlingDownUpSequence=r,e=this.stopDown(r)}else t.type==X.POINTERMOVE&&this.handleMoveEvent(t);return!e},e.prototype.handleMoveEvent=function(t){},e.prototype.handleUpEvent=function(t){return!1},e.prototype.stopDown=function(t){return t},e.prototype.updateTrackedPointers_=function(t){if(function(t){var e=t.type;return e===X.POINTERDOWN||e===X.POINTERDRAG||e===X.POINTERUP}(t)){var e=t.originalEvent,i=e.pointerId.toString();t.type==X.POINTERUP?delete this.trackedPointers_[i]:(t.type==X.POINTERDOWN||i in this.trackedPointers_)&&(this.trackedPointers_[i]=e),this.targetPointers=Object(D.c)(this.trackedPointers_)}},e}(ht);function bt(t){var e=arguments;return function(t){for(var i=!0,r=0,n=e.length;r<n&&(i=i&&e[r](t));++r);return i}}var _t=function(t){var e=t.originalEvent;return e.altKey&&!(e.metaKey||e.ctrlKey)&&e.shiftKey},wt=function(t){return!t.map.getTargetElement().hasAttribute("tabindex")||function(t){return t.target.getTargetElement().contains(document.activeElement)}(t)},Ct=n.b,xt=function(t){var e=t.originalEvent;return 0==e.button&&!(d.f&&d.d&&e.ctrlKey)},St=(n.a,function(t){var e=t.originalEvent;return!e.altKey&&!(e.metaKey||e.ctrlKey)&&!e.shiftKey}),Et=function(t){var e=t.originalEvent;return!e.altKey&&!(e.metaKey||e.ctrlKey)&&e.shiftKey},Mt=function(t){var e=t.originalEvent.target.tagName;return"INPUT"!==e&&"SELECT"!==e&&"TEXTAREA"!==e},Tt=function(t){var e=t.originalEvent;return Object(j.a)(void 0!==e,56),"mouse"==e.pointerType},Ot=function(t){var e=t.originalEvent;return Object(j.a)(void 0!==e,56),e.isPrimary&&0===e.button},Lt=function(){var t=function(e,i){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(e,i)};return function(e,i){function r(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(r.prototype=i.prototype,new r)}}(),At=function(t){function e(e){var i=t.call(this,{stopDown:n.a})||this,r=e||{};i.kinetic_=r.kinetic,i.lastCentroid=null,i.lastPointersCount_,i.panning_=!1;var o=r.condition?r.condition:bt(St,Ot);return i.condition_=r.onFocusOnly?bt(wt,o):o,i.noKinetic_=!1,i}return Lt(e,t),e.prototype.handleDragEvent=function(t){this.panning_||(this.panning_=!0,this.getMap().getView().beginInteraction());var e=this.targetPointers,i=vt(e);if(e.length==this.lastPointersCount_){if(this.kinetic_&&this.kinetic_.update(i[0],i[1]),this.lastCentroid){var r=[this.lastCentroid[0]-i[0],i[1]-this.lastCentroid[1]],n=t.map.getView();Object(h.e)(r,n.getResolution()),Object(h.d)(r,n.getRotation()),n.adjustCenterInternal(r)}}else this.kinetic_&&this.kinetic_.begin();this.lastCentroid=i,this.lastPointersCount_=e.length,t.originalEvent.preventDefault()},e.prototype.handleUpEvent=function(t){var e=t.map,i=e.getView();if(0===this.targetPointers.length){if(!this.noKinetic_&&this.kinetic_&&this.kinetic_.end()){var r=this.kinetic_.getDistance(),n=this.kinetic_.getAngle(),o=i.getCenterInternal(),a=e.getPixelFromCoordinateInternal(o),s=e.getCoordinateFromPixelInternal([a[0]-r*Math.cos(n),a[1]-r*Math.sin(n)]);i.animateInternal({center:i.getConstrainedCenter(s),duration:500,easing:dt.b})}return this.panning_&&(this.panning_=!1,i.endInteraction()),!1}return this.kinetic_&&this.kinetic_.begin(),this.lastCentroid=null,!0},e.prototype.handleDownEvent=function(t){if(this.targetPointers.length>0&&this.condition_(t)){var e=t.map.getView();return this.lastCentroid=null,e.getAnimating()&&e.cancelAnimations(),this.kinetic_&&this.kinetic_.begin(),this.noKinetic_=this.targetPointers.length>1,!0}return!1},e}(yt),It=i(39),jt=function(){var t=function(e,i){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(e,i)};return function(e,i){function r(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(r.prototype=i.prototype,new r)}}(),Dt=function(t){function e(e){var i=this,r=e||{};return(i=t.call(this,{stopDown:n.a})||this).condition_=r.condition?r.condition:_t,i.lastAngle_=void 0,i.duration_=void 0!==r.duration?r.duration:250,i}return jt(e,t),e.prototype.handleDragEvent=function(t){if(Tt(t)){var e=t.map,i=e.getView();if(i.getConstraints().rotation!==It.c){var r=e.getSize(),n=t.pixel,o=Math.atan2(r[1]/2-n[1],n[0]-r[0]/2);if(void 0!==this.lastAngle_){var a=o-this.lastAngle_;i.adjustRotationInternal(-a)}this.lastAngle_=o}}},e.prototype.handleUpEvent=function(t){return!Tt(t)||(t.map.getView().endInteraction(this.duration_),!1)},e.prototype.handleDownEvent=function(t){return!!Tt(t)&&(!(!xt(t)||!this.condition_(t))&&(t.map.getView().beginInteraction(),this.lastAngle_=void 0,!0))},e}(yt),Rt=i(59),zt=function(){var t=function(e,i){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(e,i)};return function(e,i){function r(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(r.prototype=i.prototype,new r)}}(),kt=function(t){function e(e){var i=t.call(this)||this;return i.geometry_=null,i.element_=document.createElement("div"),i.element_.style.position="absolute",i.element_.style.pointerEvents="auto",i.element_.className="ol-box "+e,i.map_=null,i.startPixel_=null,i.endPixel_=null,i}return zt(e,t),e.prototype.disposeInternal=function(){this.setMap(null)},e.prototype.render_=function(){var t=this.startPixel_,e=this.endPixel_,i=this.element_.style;i.left=Math.min(t[0],e[0])+"px",i.top=Math.min(t[1],e[1])+"px",i.width=Math.abs(e[0]-t[0])+"px",i.height=Math.abs(e[1]-t[1])+"px"},e.prototype.setMap=function(t){if(this.map_){this.map_.getOverlayContainer().removeChild(this.element_);var e=this.element_.style;e.left="inherit",e.top="inherit",e.width="inherit",e.height="inherit"}this.map_=t,this.map_&&this.map_.getOverlayContainer().appendChild(this.element_)},e.prototype.setPixels=function(t,e){this.startPixel_=t,this.endPixel_=e,this.createOrUpdateGeometry(),this.render_()},e.prototype.createOrUpdateGeometry=function(){var t=this.startPixel_,e=this.endPixel_,i=[t,[t[0],e[1]],e,[e[0],t[1]]].map(this.map_.getCoordinateFromPixelInternal,this.map_);i[4]=i[0].slice(),this.geometry_?this.geometry_.setCoordinates([i]):this.geometry_=new Rt.a([i])},e.prototype.getGeometry=function(){return this.geometry_},e}(r.a),Pt=function(){var t=function(e,i){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(e,i)};return function(e,i){function r(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(r.prototype=i.prototype,new r)}}(),Nt="boxstart",Vt="boxdrag",Ft="boxend",Ht=function(t){function e(e,i,r){var n=t.call(this,e)||this;return n.coordinate=i,n.mapBrowserEvent=r,n}return Pt(e,t),e}(P.a),Gt=function(t){function e(e){var i=t.call(this)||this,r=e||{};return i.box_=new kt(r.className||"ol-dragbox"),i.minArea_=void 0!==r.minArea?r.minArea:64,r.onBoxEnd&&(i.onBoxEnd=r.onBoxEnd),i.startPixel_=null,i.condition_=r.condition?r.condition:xt,i.boxEndCondition_=r.boxEndCondition?r.boxEndCondition:i.defaultBoxEndCondition,i}return Pt(e,t),e.prototype.defaultBoxEndCondition=function(t,e,i){var r=i[0]-e[0],n=i[1]-e[1];return r*r+n*n>=this.minArea_},e.prototype.getGeometry=function(){return this.box_.getGeometry()},e.prototype.handleDragEvent=function(t){this.box_.setPixels(this.startPixel_,t.pixel),this.dispatchEvent(new Ht(Vt,t.coordinate,t))},e.prototype.handleUpEvent=function(t){return this.box_.setMap(null),this.boxEndCondition_(t,this.startPixel_,t.pixel)&&(this.onBoxEnd(t),this.dispatchEvent(new Ht(Ft,t.coordinate,t))),!1},e.prototype.handleDownEvent=function(t){return!!this.condition_(t)&&(this.startPixel_=t.pixel,this.box_.setMap(t.map),this.box_.setPixels(this.startPixel_,this.startPixel_),this.dispatchEvent(new Ht(Nt,t.coordinate,t)),!0)},e.prototype.onBoxEnd=function(t){},e}(yt),Xt=function(){var t=function(e,i){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(e,i)};return function(e,i){function r(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(r.prototype=i.prototype,new r)}}(),Ut=function(t){function e(e){var i=this,r=e||{},n=r.condition?r.condition:Et;return(i=t.call(this,{condition:n,className:r.className||"ol-dragzoom",minArea:r.minArea})||this).duration_=void 0!==r.duration?r.duration:200,i.out_=void 0!==r.out&&r.out,i}return Xt(e,t),e.prototype.onBoxEnd=function(t){var e=this.getMap(),i=e.getView(),r=e.getSize(),n=this.getGeometry().getExtent();if(this.out_){var o=i.calculateExtentInternal(r),a=Object(s.n)([e.getPixelFromCoordinateInternal(Object(s.v)(n)),e.getPixelFromCoordinateInternal(Object(s.D)(n))]),c=i.getResolutionForExtentInternal(a,r);Object(s.J)(o,1/c),n=o}var l=i.getConstrainedResolution(i.getResolutionForExtentInternal(n,r)),d=i.getConstrainedCenter(Object(s.x)(n),l);i.animateInternal({resolution:l,center:d,duration:this.duration_,easing:dt.b})},e}(Gt),Bt=37,$t=38,Zt=39,Yt=40,Wt=function(){var t=function(e,i){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(e,i)};return function(e,i){function r(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(r.prototype=i.prototype,new r)}}(),qt=function(t){function e(e){var i=t.call(this)||this,r=e||{};return i.defaultCondition_=function(t){return St(t)&&Mt(t)},i.condition_=void 0!==r.condition?r.condition:i.defaultCondition_,i.duration_=void 0!==r.duration?r.duration:100,i.pixelDelta_=void 0!==r.pixelDelta?r.pixelDelta:128,i}return Wt(e,t),e.prototype.handleEvent=function(t){var e=!1;if(t.type==A.a.KEYDOWN){var i=t.originalEvent.keyCode;if(this.condition_(t)&&(i==Yt||i==Bt||i==Zt||i==$t)){var r=t.map.getView(),n=r.getResolution()*this.pixelDelta_,o=0,a=0;i==Yt?a=-n:i==Bt?o=-n:i==Zt?o=n:a=n;var s=[o,a];Object(h.d)(s,r.getRotation()),function(t,e,i){var r=t.getCenterInternal();if(r){var n=[r[0]+e[0],r[1]+e[1]];t.animateInternal({duration:void 0!==i?i:250,easing:dt.d,center:t.getConstrainedCenter(n)})}}(r,s,this.duration_),t.preventDefault(),e=!0}}return!e},e}(ht),Kt=function(){var t=function(e,i){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(e,i)};return function(e,i){function r(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(r.prototype=i.prototype,new r)}}(),Jt=function(t){function e(e){var i=t.call(this)||this,r=e||{};return i.condition_=r.condition?r.condition:Mt,i.delta_=r.delta?r.delta:1,i.duration_=void 0!==r.duration?r.duration:100,i}return Kt(e,t),e.prototype.handleEvent=function(t){var e=!1;if(t.type==A.a.KEYDOWN||t.type==A.a.KEYPRESS){var i=t.originalEvent.charCode;if(this.condition_(t)&&(i=="+".charCodeAt(0)||i=="-".charCodeAt(0))){var r=t.map,n=i=="+".charCodeAt(0)?this.delta_:-this.delta_;pt(r.getView(),n,void 0,this.duration_),t.preventDefault(),e=!0}}return!e},e}(ht),Qt=function(){function t(t,e,i){this.decay_=t,this.minVelocity_=e,this.delay_=i,this.points_=[],this.angle_=0,this.initialVelocity_=0}return t.prototype.begin=function(){this.points_.length=0,this.angle_=0,this.initialVelocity_=0},t.prototype.update=function(t,e){this.points_.push(t,e,Date.now())},t.prototype.end=function(){if(this.points_.length<6)return!1;var t=Date.now()-this.delay_,e=this.points_.length-3;if(this.points_[e+2]<t)return!1;for(var i=e-3;i>0&&this.points_[i+2]>t;)i-=3;var r=this.points_[e+2]-this.points_[i+2];if(r<1e3/60)return!1;var n=this.points_[e]-this.points_[i],o=this.points_[e+1]-this.points_[i+1];return this.angle_=Math.atan2(o,n),this.initialVelocity_=Math.sqrt(n*n+o*o)/r,this.initialVelocity_>this.minVelocity_},t.prototype.getDistance=function(){return(this.minVelocity_-this.initialVelocity_)/this.decay_},t.prototype.getAngle=function(){return this.angle_},t}(),te=i(4),ee=function(){var t=function(e,i){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(e,i)};return function(e,i){function r(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(r.prototype=i.prototype,new r)}}(),ie="trackpad",re="wheel",ne=function(t){function e(e){var i=this,r=e||{};(i=t.call(this,r)||this).totalDelta_=0,i.lastDelta_=0,i.maxDelta_=void 0!==r.maxDelta?r.maxDelta:1,i.duration_=void 0!==r.duration?r.duration:250,i.timeout_=void 0!==r.timeout?r.timeout:80,i.useAnchor_=void 0===r.useAnchor||r.useAnchor,i.constrainResolution_=void 0!==r.constrainResolution&&r.constrainResolution;var n=r.condition?r.condition:Ct;return i.condition_=r.onFocusOnly?bt(wt,n):n,i.lastAnchor_=null,i.startTime_=void 0,i.timeoutId_,i.mode_=void 0,i.trackpadEventGap_=400,i.trackpadTimeoutId_,i.deltaPerZoom_=300,i}return ee(e,t),e.prototype.endInteraction_=function(){this.trackpadTimeoutId_=void 0,this.getMap().getView().endInteraction(void 0,this.lastDelta_?this.lastDelta_>0?1:-1:0,this.lastAnchor_)},e.prototype.handleEvent=function(t){if(!this.condition_(t))return!0;if(t.type!==A.a.WHEEL)return!0;t.preventDefault();var e,i=t.map,r=t.originalEvent;if(this.useAnchor_&&(this.lastAnchor_=t.coordinate),t.type==A.a.WHEEL&&(e=r.deltaY,d.b&&r.deltaMode===WheelEvent.DOM_DELTA_PIXEL&&(e/=d.a),r.deltaMode===WheelEvent.DOM_DELTA_LINE&&(e*=40)),0===e)return!1;this.lastDelta_=e;var n=Date.now();void 0===this.startTime_&&(this.startTime_=n),(!this.mode_||n-this.startTime_>this.trackpadEventGap_)&&(this.mode_=Math.abs(e)<4?ie:re);var o=i.getView();if(this.mode_===ie&&!o.getConstrainResolution()&&!this.constrainResolution_)return this.trackpadTimeoutId_?clearTimeout(this.trackpadTimeoutId_):(o.getAnimating()&&o.cancelAnimations(),o.beginInteraction()),this.trackpadTimeoutId_=setTimeout(this.endInteraction_.bind(this),this.timeout_),o.adjustZoom(-e/this.deltaPerZoom_,this.lastAnchor_),this.startTime_=n,!1;this.totalDelta_+=e;var a=Math.max(this.timeout_-(n-this.startTime_),0);return clearTimeout(this.timeoutId_),this.timeoutId_=setTimeout(this.handleWheelZoom_.bind(this,i),a),!1},e.prototype.handleWheelZoom_=function(t){var e=t.getView();e.getAnimating()&&e.cancelAnimations();var i=-Object(te.a)(this.totalDelta_,-this.maxDelta_*this.deltaPerZoom_,this.maxDelta_*this.deltaPerZoom_)/this.deltaPerZoom_;(e.getConstrainResolution()||this.constrainResolution_)&&(i=i?i>0?1:-1:0),pt(e,i,this.lastAnchor_,this.duration_),this.mode_=void 0,this.totalDelta_=0,this.lastAnchor_=null,this.startTime_=void 0,this.timeoutId_=void 0},e.prototype.setMouseAnchor=function(t){this.useAnchor_=t,t||(this.lastAnchor_=null)},e}(ht),oe=function(){var t=function(e,i){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(e,i)};return function(e,i){function r(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(r.prototype=i.prototype,new r)}}(),ae=function(t){function e(e){var i=this,r=e||{},o=r;return o.stopDown||(o.stopDown=n.a),(i=t.call(this,o)||this).anchor_=null,i.lastAngle_=void 0,i.rotating_=!1,i.rotationDelta_=0,i.threshold_=void 0!==r.threshold?r.threshold:.3,i.duration_=void 0!==r.duration?r.duration:250,i}return oe(e,t),e.prototype.handleDragEvent=function(t){var e=0,i=this.targetPointers[0],r=this.targetPointers[1],n=Math.atan2(r.clientY-i.clientY,r.clientX-i.clientX);if(void 0!==this.lastAngle_){var o=n-this.lastAngle_;this.rotationDelta_+=o,!this.rotating_&&Math.abs(this.rotationDelta_)>this.threshold_&&(this.rotating_=!0),e=o}this.lastAngle_=n;var a=t.map,s=a.getView();if(s.getConstraints().rotation!==It.c){var c=a.getViewport().getBoundingClientRect(),l=vt(this.targetPointers);l[0]-=c.left,l[1]-=c.top,this.anchor_=a.getCoordinateFromPixelInternal(l),this.rotating_&&(a.render(),s.adjustRotationInternal(e,this.anchor_))}},e.prototype.handleUpEvent=function(t){return!(this.targetPointers.length<2)||(t.map.getView().endInteraction(this.duration_),!1)},e.prototype.handleDownEvent=function(t){if(this.targetPointers.length>=2){var e=t.map;return this.anchor_=null,this.lastAngle_=void 0,this.rotating_=!1,this.rotationDelta_=0,this.handlingDownUpSequence||e.getView().beginInteraction(),!0}return!1},e}(yt),se=function(){var t=function(e,i){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(e,i)};return function(e,i){function r(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(r.prototype=i.prototype,new r)}}(),ce=function(t){function e(e){var i=this,r=e||{},o=r;return o.stopDown||(o.stopDown=n.a),(i=t.call(this,o)||this).anchor_=null,i.duration_=void 0!==r.duration?r.duration:400,i.lastDistance_=void 0,i.lastScaleDelta_=1,i}return se(e,t),e.prototype.handleDragEvent=function(t){var e=1,i=this.targetPointers[0],r=this.targetPointers[1],n=i.clientX-r.clientX,o=i.clientY-r.clientY,a=Math.sqrt(n*n+o*o);void 0!==this.lastDistance_&&(e=this.lastDistance_/a),this.lastDistance_=a;var s=t.map,c=s.getView();1!=e&&(this.lastScaleDelta_=e);var l=s.getViewport().getBoundingClientRect(),d=vt(this.targetPointers);d[0]-=l.left,d[1]-=l.top,this.anchor_=s.getCoordinateFromPixelInternal(d),s.render(),c.adjustResolutionInternal(e,this.anchor_)},e.prototype.handleUpEvent=function(t){if(this.targetPointers.length<2){var e=t.map.getView(),i=this.lastScaleDelta_>1?1:-1;return e.endInteraction(this.duration_,i),!1}return!0},e.prototype.handleDownEvent=function(t){if(this.targetPointers.length>=2){var e=t.map;return this.anchor_=null,this.lastDistance_=void 0,this.lastScaleDelta_=1,this.handlingDownUpSequence||e.getView().beginInteraction(),!0}return!1},e}(yt);var le=function(){var t=function(e,i){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(e,i)};return function(e,i){function r(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(r.prototype=i.prototype,new r)}}(),de=function(t){function e(e){return(e=Object(D.a)({},e)).controls||(e.controls=Object(ct.a)()),e.interactions||(e.interactions=function(t){var e=t||{},i=new O.a,r=new Qt(-.005,.05,100);return(void 0===e.altShiftDragRotate||e.altShiftDragRotate)&&i.push(new Dt),(void 0===e.doubleClickZoom||e.doubleClickZoom)&&i.push(new mt({delta:e.zoomDelta,duration:e.zoomDuration})),(void 0===e.dragPan||e.dragPan)&&i.push(new At({onFocusOnly:e.onFocusOnly,kinetic:r})),(void 0===e.pinchRotate||e.pinchRotate)&&i.push(new ae),(void 0===e.pinchZoom||e.pinchZoom)&&i.push(new ce({duration:e.zoomDuration})),(void 0===e.keyboard||e.keyboard)&&(i.push(new qt),i.push(new Jt({delta:e.zoomDelta,duration:e.zoomDuration}))),(void 0===e.mouseWheelZoom||e.mouseWheelZoom)&&i.push(new ne({onFocusOnly:e.onFocusOnly,duration:e.zoomDuration})),(void 0===e.shiftDragZoom||e.shiftDragZoom)&&i.push(new Ut({duration:e.zoomDuration})),i}({onFocusOnly:!0})),t.call(this,e)||this}return le(e,t),e.prototype.createRenderer=function(){return new M(this)},e}(st);e.a=de},function(t,e,i){"use strict";var r,n=i(37),o=i(11),a=i(76),s=(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(t,e)},function(t,e){function i(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}),c="renderOrder",l=function(t){function e(e){var i=this,r=e||{},n=Object(o.a)({},r);return delete n.style,delete n.renderBuffer,delete n.updateWhileAnimating,delete n.updateWhileInteracting,(i=t.call(this,n)||this).declutter_=void 0!==r.declutter&&r.declutter,i.renderBuffer_=void 0!==r.renderBuffer?r.renderBuffer:100,i.style_=null,i.styleFunction_=void 0,i.setStyle(r.style),i.updateWhileAnimating_=void 0!==r.updateWhileAnimating&&r.updateWhileAnimating,i.updateWhileInteracting_=void 0!==r.updateWhileInteracting&&r.updateWhileInteracting,i}return s(e,t),e.prototype.getDeclutter=function(){return this.declutter_},e.prototype.getFeatures=function(e){return t.prototype.getFeatures.call(this,e)},e.prototype.getRenderBuffer=function(){return this.renderBuffer_},e.prototype.getRenderOrder=function(){return this.get(c)},e.prototype.getStyle=function(){return this.style_},e.prototype.getStyleFunction=function(){return this.styleFunction_},e.prototype.getUpdateWhileAnimating=function(){return this.updateWhileAnimating_},e.prototype.getUpdateWhileInteracting=function(){return this.updateWhileInteracting_},e.prototype.setRenderOrder=function(t){this.set(c,t)},e.prototype.setStyle=function(t){this.style_=void 0!==t?t:a.a,this.styleFunction_=null===t?void 0:Object(a.c)(this.style_),this.changed()},e}(n.a),d={BEGIN_GEOMETRY:0,BEGIN_PATH:1,CIRCLE:2,CLOSE_PATH:3,CUSTOM:4,DRAW_CHARS:5,DRAW_IMAGE:6,END_GEOMETRY:7,FILL:8,MOVE_TO_LINE_TO:9,SET_FILL_STYLE:10,SET_STROKE_STYLE:11,STROKE:12},u=[d.FILL],p=[d.STROKE],h=[d.BEGIN_PATH],f=[d.CLOSE_PATH],m=d,g=i(3),v=i(22),y=i(66),b=i(33),_=i(0),w=i(2),C=i(12),x=i(43),S=function(){var t=function(e,i){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(e,i)};return function(e,i){function r(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(r.prototype=i.prototype,new r)}}(),E=function(t){function e(e,i,r,n){var o=t.call(this)||this;return o.tolerance=e,o.maxExtent=i,o.pixelRatio=n,o.maxLineWidth=0,o.resolution=r,o.beginGeometryInstruction1_=null,o.beginGeometryInstruction2_=null,o.bufferedMaxExtent_=null,o.instructions=[],o.coordinates=[],o.tmpCoordinate_=[],o.hitDetectionInstructions=[],o.state={},o}return S(e,t),e.prototype.applyPixelRatio=function(t){var e=this.pixelRatio;return 1==e?t:t.map((function(t){return t*e}))},e.prototype.appendFlatCoordinates=function(t,e,i,r,n,o){var a=this.coordinates.length,s=this.getBufferedMaxExtent();o&&(e+=r);var c,l,d,u=t[e],p=t[e+1],h=this.tmpCoordinate_,f=!0;for(c=e+r;c<i;c+=r)h[0]=t[c],h[1]=t[c+1],(d=Object(_.i)(s,h))!==l?(f&&(this.coordinates[a++]=u,this.coordinates[a++]=p),this.coordinates[a++]=h[0],this.coordinates[a++]=h[1],f=!1):d===v.a.INTERSECTING?(this.coordinates[a++]=h[0],this.coordinates[a++]=h[1],f=!1):f=!0,u=h[0],p=h[1],l=d;return(n&&f||c===e+r)&&(this.coordinates[a++]=u,this.coordinates[a++]=p),a},e.prototype.drawCustomCoordinates_=function(t,e,i,r,n){for(var o=0,a=i.length;o<a;++o){var s=i[o],c=this.appendFlatCoordinates(t,e,s,r,!1,!1);n.push(c),e=s}return e},e.prototype.drawCustom=function(t,e,i){this.beginGeometry(t,e);var r,n,o,a,s,c=t.getType(),l=t.getStride(),d=this.coordinates.length;if(c==g.a.MULTI_POLYGON){r=t.getOrientedFlatCoordinates(),a=[];var u=t.getEndss();s=0;for(var p=0,h=u.length;p<h;++p){var f=[];s=this.drawCustomCoordinates_(r,s,u[p],l,f),a.push(f)}this.instructions.push([m.CUSTOM,d,a,t,i,x.c])}else c==g.a.POLYGON||c==g.a.MULTI_LINE_STRING?(o=[],r=c==g.a.POLYGON?t.getOrientedFlatCoordinates():t.getFlatCoordinates(),s=this.drawCustomCoordinates_(r,0,t.getEnds(),l,o),this.instructions.push([m.CUSTOM,d,o,t,i,x.b])):c==g.a.LINE_STRING||c==g.a.MULTI_POINT?(r=t.getFlatCoordinates(),n=this.appendFlatCoordinates(r,0,r.length,l,!1,!1),this.instructions.push([m.CUSTOM,d,n,t,i,x.a])):c==g.a.POINT&&(r=t.getFlatCoordinates(),this.coordinates.push(r[0],r[1]),n=this.coordinates.length,this.instructions.push([m.CUSTOM,d,n,t,i]));this.endGeometry(e)},e.prototype.beginGeometry=function(t,e){var i=t.getExtent();this.beginGeometryInstruction1_=[m.BEGIN_GEOMETRY,e,0,i],this.instructions.push(this.beginGeometryInstruction1_),this.beginGeometryInstruction2_=[m.BEGIN_GEOMETRY,e,0,i],this.hitDetectionInstructions.push(this.beginGeometryInstruction2_)},e.prototype.finish=function(){return{instructions:this.instructions,hitDetectionInstructions:this.hitDetectionInstructions,coordinates:this.coordinates}},e.prototype.reverseHitDetectionInstructions=function(){var t,e=this.hitDetectionInstructions;e.reverse();var i,r,n=e.length,o=-1;for(t=0;t<n;++t)(r=(i=e[t])[0])==m.END_GEOMETRY?o=t:r==m.BEGIN_GEOMETRY&&(i[2]=t,Object(C.f)(this.hitDetectionInstructions,o,t),o=-1)},e.prototype.setFillStrokeStyle=function(t,e){var i=this.state;if(t){var r=t.getColor();i.fillStyle=Object(b.a)(r||w.c)}else i.fillStyle=void 0;if(e){var n=e.getColor();i.strokeStyle=Object(b.a)(n||w.l);var o=e.getLineCap();i.lineCap=void 0!==o?o:w.e;var a=e.getLineDash();i.lineDash=a?a.slice():w.f;var s=e.getLineDashOffset();i.lineDashOffset=s||w.g;var c=e.getLineJoin();i.lineJoin=void 0!==c?c:w.h;var l=e.getWidth();i.lineWidth=void 0!==l?l:w.i;var d=e.getMiterLimit();i.miterLimit=void 0!==d?d:w.j,i.lineWidth>this.maxLineWidth&&(this.maxLineWidth=i.lineWidth,this.bufferedMaxExtent_=null)}else i.strokeStyle=void 0,i.lineCap=void 0,i.lineDash=null,i.lineDashOffset=void 0,i.lineJoin=void 0,i.lineWidth=void 0,i.miterLimit=void 0},e.prototype.createFill=function(t){var e=t.fillStyle,i=[m.SET_FILL_STYLE,e];return"string"!=typeof e&&i.push(!0),i},e.prototype.applyStroke=function(t){this.instructions.push(this.createStroke(t))},e.prototype.createStroke=function(t){return[m.SET_STROKE_STYLE,t.strokeStyle,t.lineWidth*this.pixelRatio,t.lineCap,t.lineJoin,t.miterLimit,this.applyPixelRatio(t.lineDash),t.lineDashOffset*this.pixelRatio]},e.prototype.updateFillStyle=function(t,e){var i=t.fillStyle;"string"==typeof i&&t.currentFillStyle==i||(void 0!==i&&this.instructions.push(e.call(this,t)),t.currentFillStyle=i)},e.prototype.updateStrokeStyle=function(t,e){var i=t.strokeStyle,r=t.lineCap,n=t.lineDash,o=t.lineDashOffset,a=t.lineJoin,s=t.lineWidth,c=t.miterLimit;(t.currentStrokeStyle!=i||t.currentLineCap!=r||n!=t.currentLineDash&&!Object(C.a)(t.currentLineDash,n)||t.currentLineDashOffset!=o||t.currentLineJoin!=a||t.currentLineWidth!=s||t.currentMiterLimit!=c)&&(void 0!==i&&e.call(this,t),t.currentStrokeStyle=i,t.currentLineCap=r,t.currentLineDash=n,t.currentLineDashOffset=o,t.currentLineJoin=a,t.currentLineWidth=s,t.currentMiterLimit=c)},e.prototype.endGeometry=function(t){this.beginGeometryInstruction1_[2]=this.instructions.length,this.beginGeometryInstruction1_=null,this.beginGeometryInstruction2_[2]=this.hitDetectionInstructions.length,this.beginGeometryInstruction2_=null;var e=[m.END_GEOMETRY,t];this.instructions.push(e),this.hitDetectionInstructions.push(e)},e.prototype.getBufferedMaxExtent=function(){if(!this.bufferedMaxExtent_&&(this.bufferedMaxExtent_=Object(_.d)(this.maxExtent),this.maxLineWidth>0)){var t=this.resolution*(this.maxLineWidth+1)/2;Object(_.c)(this.bufferedMaxExtent_,t,this.bufferedMaxExtent_)}return this.bufferedMaxExtent_},e}(y.a),M=function(){var t=function(e,i){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(e,i)};return function(e,i){function r(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(r.prototype=i.prototype,new r)}}(),T=function(t){function e(e,i,r,n){var o=t.call(this,e,i,r,n)||this;return o.declutterGroups_=null,o.hitDetectionImage_=null,o.image_=null,o.imagePixelRatio_=void 0,o.anchorX_=void 0,o.anchorY_=void 0,o.height_=void 0,o.opacity_=void 0,o.originX_=void 0,o.originY_=void 0,o.rotateWithView_=void 0,o.rotation_=void 0,o.scale_=void 0,o.width_=void 0,o}return M(e,t),e.prototype.drawCoordinates_=function(t,e,i,r){return this.appendFlatCoordinates(t,e,i,r,!1,!1)},e.prototype.drawPoint=function(t,e){if(this.image_){this.beginGeometry(t,e);var i=t.getFlatCoordinates(),r=t.getStride(),n=this.coordinates.length,o=this.drawCoordinates_(i,0,i.length,r);this.instructions.push([m.DRAW_IMAGE,n,o,this.image_,this.anchorX_*this.imagePixelRatio_,this.anchorY_*this.imagePixelRatio_,this.declutterGroups_,Math.ceil(this.height_*this.imagePixelRatio_),this.opacity_,this.originX_,this.originY_,this.rotateWithView_,this.rotation_,[this.scale_[0]*this.pixelRatio/this.imagePixelRatio_,this.scale_[1]*this.pixelRatio/this.imagePixelRatio_],Math.ceil(this.width_*this.imagePixelRatio_)]),this.hitDetectionInstructions.push([m.DRAW_IMAGE,n,o,this.hitDetectionImage_,this.anchorX_,this.anchorY_,this.declutterGroups_,this.height_,this.opacity_,this.originX_,this.originY_,this.rotateWithView_,this.rotation_,this.scale_,this.width_]),this.endGeometry(e)}},e.prototype.drawMultiPoint=function(t,e){if(this.image_){this.beginGeometry(t,e);var i=t.getFlatCoordinates(),r=t.getStride(),n=this.coordinates.length,o=this.drawCoordinates_(i,0,i.length,r);this.instructions.push([m.DRAW_IMAGE,n,o,this.image_,this.anchorX_*this.imagePixelRatio_,this.anchorY_*this.imagePixelRatio_,this.declutterGroups_,Math.ceil(this.height_*this.imagePixelRatio_),this.opacity_,this.originX_,this.originY_,this.rotateWithView_,this.rotation_,[this.scale_[0]*this.pixelRatio/this.imagePixelRatio_,this.scale_[1]*this.pixelRatio/this.imagePixelRatio_],Math.ceil(this.width_*this.imagePixelRatio_)]),this.hitDetectionInstructions.push([m.DRAW_IMAGE,n,o,this.hitDetectionImage_,this.anchorX_,this.anchorY_,this.declutterGroups_,this.height_,this.opacity_,this.originX_,this.originY_,this.rotateWithView_,this.rotation_,this.scale_,this.width_]),this.endGeometry(e)}},e.prototype.finish=function(){return this.reverseHitDetectionInstructions(),this.anchorX_=void 0,this.anchorY_=void 0,this.hitDetectionImage_=null,this.image_=null,this.imagePixelRatio_=void 0,this.height_=void 0,this.scale_=void 0,this.opacity_=void 0,this.originX_=void 0,this.originY_=void 0,this.rotateWithView_=void 0,this.rotation_=void 0,this.width_=void 0,t.prototype.finish.call(this)},e.prototype.setImageStyle=function(t,e){var i=t.getAnchor(),r=t.getSize(),n=t.getHitDetectionImage(),o=t.getImage(this.pixelRatio),a=t.getOrigin();this.imagePixelRatio_=t.getPixelRatio(this.pixelRatio),this.anchorX_=i[0],this.anchorY_=i[1],this.declutterGroups_=e,this.hitDetectionImage_=n,this.image_=o,this.height_=r[1],this.opacity_=t.getOpacity(),this.originX_=a[0],this.originY_=a[1],this.rotateWithView_=t.getRotateWithView(),this.rotation_=t.getRotation(),this.scale_=t.getScaleArray(),this.width_=r[0]},e}(E),O=function(){var t=function(e,i){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(e,i)};return function(e,i){function r(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(r.prototype=i.prototype,new r)}}(),L=function(t){function e(e,i,r,n){return t.call(this,e,i,r,n)||this}return O(e,t),e.prototype.drawFlatCoordinates_=function(t,e,i,r){var n=this.coordinates.length,o=this.appendFlatCoordinates(t,e,i,r,!1,!1),a=[m.MOVE_TO_LINE_TO,n,o];return this.instructions.push(a),this.hitDetectionInstructions.push(a),i},e.prototype.drawLineString=function(t,e){var i=this.state,r=i.strokeStyle,n=i.lineWidth;if(void 0!==r&&void 0!==n){this.updateStrokeStyle(i,this.applyStroke),this.beginGeometry(t,e),this.hitDetectionInstructions.push([m.SET_STROKE_STYLE,i.strokeStyle,i.lineWidth,i.lineCap,i.lineJoin,i.miterLimit,i.lineDash,i.lineDashOffset],h);var o=t.getFlatCoordinates(),a=t.getStride();this.drawFlatCoordinates_(o,0,o.length,a),this.hitDetectionInstructions.push(p),this.endGeometry(e)}},e.prototype.drawMultiLineString=function(t,e){var i=this.state,r=i.strokeStyle,n=i.lineWidth;if(void 0!==r&&void 0!==n){this.updateStrokeStyle(i,this.applyStroke),this.beginGeometry(t,e),this.hitDetectionInstructions.push([m.SET_STROKE_STYLE,i.strokeStyle,i.lineWidth,i.lineCap,i.lineJoin,i.miterLimit,i.lineDash,i.lineDashOffset],h);for(var o=t.getEnds(),a=t.getFlatCoordinates(),s=t.getStride(),c=0,l=0,d=o.length;l<d;++l)c=this.drawFlatCoordinates_(a,c,o[l],s);this.hitDetectionInstructions.push(p),this.endGeometry(e)}},e.prototype.finish=function(){var e=this.state;return null!=e.lastStroke&&e.lastStroke!=this.coordinates.length&&this.instructions.push(p),this.reverseHitDetectionInstructions(),this.state=null,t.prototype.finish.call(this)},e.prototype.applyStroke=function(e){null!=e.lastStroke&&e.lastStroke!=this.coordinates.length&&(this.instructions.push(p),e.lastStroke=this.coordinates.length),e.lastStroke=0,t.prototype.applyStroke.call(this,e),this.instructions.push(h)},e}(E),A=i(53),I=function(){var t=function(e,i){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(e,i)};return function(e,i){function r(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(r.prototype=i.prototype,new r)}}(),j=function(t){function e(e,i,r,n){return t.call(this,e,i,r,n)||this}return I(e,t),e.prototype.drawFlatCoordinatess_=function(t,e,i,r){var n=this.state,o=void 0!==n.fillStyle,a=void 0!==n.strokeStyle,s=i.length;this.instructions.push(h),this.hitDetectionInstructions.push(h);for(var c=0;c<s;++c){var l=i[c],d=this.coordinates.length,g=this.appendFlatCoordinates(t,e,l,r,!0,!a),v=[m.MOVE_TO_LINE_TO,d,g];this.instructions.push(v),this.hitDetectionInstructions.push(v),a&&(this.instructions.push(f),this.hitDetectionInstructions.push(f)),e=l}return o&&(this.instructions.push(u),this.hitDetectionInstructions.push(u)),a&&(this.instructions.push(p),this.hitDetectionInstructions.push(p)),e},e.prototype.drawCircle=function(t,e){var i=this.state,r=i.fillStyle,n=i.strokeStyle;if(void 0!==r||void 0!==n){this.setFillStrokeStyles_(),this.beginGeometry(t,e),void 0!==i.fillStyle&&this.hitDetectionInstructions.push([m.SET_FILL_STYLE,w.c]),void 0!==i.strokeStyle&&this.hitDetectionInstructions.push([m.SET_STROKE_STYLE,i.strokeStyle,i.lineWidth,i.lineCap,i.lineJoin,i.miterLimit,i.lineDash,i.lineDashOffset]);var o=t.getFlatCoordinates(),a=t.getStride(),s=this.coordinates.length;this.appendFlatCoordinates(o,0,o.length,a,!1,!1);var c=[m.CIRCLE,s];this.instructions.push(h,c),this.hitDetectionInstructions.push(h,c),void 0!==i.fillStyle&&(this.instructions.push(u),this.hitDetectionInstructions.push(u)),void 0!==i.strokeStyle&&(this.instructions.push(p),this.hitDetectionInstructions.push(p)),this.endGeometry(e)}},e.prototype.drawPolygon=function(t,e){var i=this.state,r=i.fillStyle,n=i.strokeStyle;if(void 0!==r||void 0!==n){this.setFillStrokeStyles_(),this.beginGeometry(t,e),void 0!==i.fillStyle&&this.hitDetectionInstructions.push([m.SET_FILL_STYLE,w.c]),void 0!==i.strokeStyle&&this.hitDetectionInstructions.push([m.SET_STROKE_STYLE,i.strokeStyle,i.lineWidth,i.lineCap,i.lineJoin,i.miterLimit,i.lineDash,i.lineDashOffset]);var o=t.getEnds(),a=t.getOrientedFlatCoordinates(),s=t.getStride();this.drawFlatCoordinatess_(a,0,o,s),this.endGeometry(e)}},e.prototype.drawMultiPolygon=function(t,e){var i=this.state,r=i.fillStyle,n=i.strokeStyle;if(void 0!==r||void 0!==n){this.setFillStrokeStyles_(),this.beginGeometry(t,e),void 0!==i.fillStyle&&this.hitDetectionInstructions.push([m.SET_FILL_STYLE,w.c]),void 0!==i.strokeStyle&&this.hitDetectionInstructions.push([m.SET_STROKE_STYLE,i.strokeStyle,i.lineWidth,i.lineCap,i.lineJoin,i.miterLimit,i.lineDash,i.lineDashOffset]);for(var o=t.getEndss(),a=t.getOrientedFlatCoordinates(),s=t.getStride(),c=0,l=0,d=o.length;l<d;++l)c=this.drawFlatCoordinatess_(a,c,o[l],s);this.endGeometry(e)}},e.prototype.finish=function(){this.reverseHitDetectionInstructions(),this.state=null;var e=this.tolerance;if(0!==e)for(var i=this.coordinates,r=0,n=i.length;r<n;++r)i[r]=Object(A.c)(i[r],e);return t.prototype.finish.call(this)},e.prototype.setFillStrokeStyles_=function(){var t=this.state;void 0!==t.fillStyle&&this.updateFillStyle(t,this.createFill),void 0!==t.strokeStyle&&this.updateStrokeStyle(t,this.applyStroke)},e}(E),D="line",R=i(1);function z(t,e,i,r,n){var o,a,s,c,l,d,u,p,h,f=i,m=i,g=0,v=0,y=i;for(o=i;o<r;o+=n){var b=e[o],_=e[o+1];void 0!==c&&(p=b-c,h=_-l,s=Math.sqrt(p*p+h*h),void 0!==d&&(v+=a,Math.acos((d*p+u*h)/(a*s))>t&&(v>g&&(g=v,f=y,m=o),v=0,y=o-n)),a=s,d=p,u=h),c=b,l=_}return(v+=s)>g?[y,o]:[f,m]}var k=function(){var t=function(e,i){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(e,i)};return function(e,i){function r(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(r.prototype=i.prototype,new r)}}(),P={left:0,end:0,center:.5,right:1,start:1,top:0,middle:.5,hanging:.2,alphabetic:.8,ideographic:.8,bottom:1},N={Circle:j,Default:E,Image:T,LineString:L,Polygon:j,Text:function(t){function e(e,i,r,n){var o=t.call(this,e,i,r,n)||this;return o.declutterGroups_,o.labels_=null,o.text_="",o.textOffsetX_=0,o.textOffsetY_=0,o.textRotateWithView_=void 0,o.textRotation_=0,o.textFillState_=null,o.fillStates={},o.textStrokeState_=null,o.strokeStates={},o.textState_={},o.textStates={},o.textKey_="",o.fillKey_="",o.strokeKey_="",o}return k(e,t),e.prototype.finish=function(){var e=t.prototype.finish.call(this);return e.textStates=this.textStates,e.fillStates=this.fillStates,e.strokeStates=this.strokeStates,e},e.prototype.drawText=function(t,e){var i=this.textFillState_,r=this.textStrokeState_,n=this.textState_;if(""!==this.text_&&n&&(i||r)){var o,a,s=this.coordinates.length,c=t.getType(),l=null,d=2,u=t.getStride();if(n.placement===D){if(!Object(_.F)(this.getBufferedMaxExtent(),t.getExtent()))return;var p=void 0;if(l=t.getFlatCoordinates(),c==g.a.LINE_STRING)p=[l.length];else if(c==g.a.MULTI_LINE_STRING)p=t.getEnds();else if(c==g.a.POLYGON)p=t.getEnds().slice(0,1);else if(c==g.a.MULTI_POLYGON){var h=t.getEndss();for(p=[],o=0,a=h.length;o<a;++o)p.push(h[o][0])}this.beginGeometry(t,e);for(var f=n.textAlign,v=0,y=void 0,b=0,C=p.length;b<C;++b){if(null==f){var x=z(n.maxAngle,l,v,p[b],u);v=x[0],y=x[1]}else y=p[b];for(o=v;o<y;o+=u)this.coordinates.push(l[o],l[o+1]);d=this.coordinates.length,v=p[b];var S=this.declutterGroups_?0===b?this.declutterGroups_[0]:[].concat(this.declutterGroups_[0]):null;this.drawChars_(s,d,S),s=d}this.endGeometry(e)}else{var E=null;switch(n.overflow||(E=[]),c){case g.a.POINT:case g.a.MULTI_POINT:d=(l=t.getFlatCoordinates()).length;break;case g.a.LINE_STRING:l=t.getFlatMidpoint();break;case g.a.CIRCLE:l=t.getCenter();break;case g.a.MULTI_LINE_STRING:u=2,d=(l=t.getFlatMidpoints()).length;break;case g.a.POLYGON:l=t.getFlatInteriorPoint(),n.overflow||E.push(l[2]/this.resolution),u=3;break;case g.a.MULTI_POLYGON:var M=t.getFlatInteriorPoints();for(l=[],o=0,a=M.length;o<a;o+=3)n.overflow||E.push(M[o+2]/this.resolution),l.push(M[o],M[o+1]);if(u=2,0==(d=l.length))return}d=this.appendFlatCoordinates(l,0,d,u,!1,!1),this.saveTextStates_(),(n.backgroundFill||n.backgroundStroke)&&(this.setFillStrokeStyle(n.backgroundFill,n.backgroundStroke),n.backgroundFill&&(this.updateFillStyle(this.state,this.createFill),this.hitDetectionInstructions.push(this.createFill(this.state))),n.backgroundStroke&&(this.updateStrokeStyle(this.state,this.applyStroke),this.hitDetectionInstructions.push(this.createStroke(this.state)))),this.beginGeometry(t,e);var T=n.padding;if(T!=w.k&&(n.scale[0]<0||n.scale[1]<0)){var O=n.padding[0],L=n.padding[1],A=n.padding[2],I=n.padding[3];n.scale[0]<0&&(L=-L,I=-I),n.scale[1]<0&&(O=-O,A=-A),T=[O,L,A,I]}var j=this.pixelRatio;this.instructions.push([m.DRAW_IMAGE,s,d,null,NaN,NaN,this.declutterGroups_,NaN,1,0,0,this.textRotateWithView_,this.textRotation_,[1,1],NaN,T==w.k?w.k:T.map((function(t){return t*j})),!!n.backgroundFill,!!n.backgroundStroke,this.text_,this.textKey_,this.strokeKey_,this.fillKey_,this.textOffsetX_,this.textOffsetY_,E]);var R=1/j;this.hitDetectionInstructions.push([m.DRAW_IMAGE,s,d,null,NaN,NaN,this.declutterGroups_,NaN,1,0,0,this.textRotateWithView_,this.textRotation_,[R,R],NaN,T,!!n.backgroundFill,!!n.backgroundStroke,this.text_,this.textKey_,this.strokeKey_,this.fillKey_,this.textOffsetX_,this.textOffsetY_,E]),this.endGeometry(e)}}},e.prototype.saveTextStates_=function(){var t=this.textStrokeState_,e=this.textState_,i=this.textFillState_,r=this.strokeKey_;t&&(r in this.strokeStates||(this.strokeStates[r]={strokeStyle:t.strokeStyle,lineCap:t.lineCap,lineDashOffset:t.lineDashOffset,lineWidth:t.lineWidth,lineJoin:t.lineJoin,miterLimit:t.miterLimit,lineDash:t.lineDash}));var n=this.textKey_;n in this.textStates||(this.textStates[n]={font:e.font,textAlign:e.textAlign||w.m,textBaseline:e.textBaseline||w.n,scale:e.scale});var o=this.fillKey_;i&&(o in this.fillStates||(this.fillStates[o]={fillStyle:i.fillStyle}))},e.prototype.drawChars_=function(t,e,i){var r=this.textStrokeState_,n=this.textState_,o=this.strokeKey_,a=this.textKey_,s=this.fillKey_;this.saveTextStates_();var c=this.pixelRatio,l=P[n.textBaseline],d=this.textOffsetY_*c,u=this.text_,p=r?r.lineWidth*Math.abs(n.scale[0])/2:0;this.instructions.push([m.DRAW_CHARS,t,e,l,i,n.overflow,s,n.maxAngle,c,d,o,p*c,u,a,1]),this.hitDetectionInstructions.push([m.DRAW_CHARS,t,e,l,i,n.overflow,s,n.maxAngle,1,d,o,p,u,a,1/c])},e.prototype.setTextStyle=function(t,e){var i,r,n;if(t){this.declutterGroups_=e;var o=t.getFill();o?((r=this.textFillState_)||(r={},this.textFillState_=r),r.fillStyle=Object(b.a)(o.getColor()||w.c)):(r=null,this.textFillState_=r);var a=t.getStroke();if(a){(n=this.textStrokeState_)||(n={},this.textStrokeState_=n);var s=a.getLineDash(),c=a.getLineDashOffset(),l=a.getWidth(),d=a.getMiterLimit();n.lineCap=a.getLineCap()||w.e,n.lineDash=s?s.slice():w.f,n.lineDashOffset=void 0===c?w.g:c,n.lineJoin=a.getLineJoin()||w.h,n.lineWidth=void 0===l?w.i:l,n.miterLimit=void 0===d?w.j:d,n.strokeStyle=Object(b.a)(a.getColor()||w.l)}else n=null,this.textStrokeState_=n;i=this.textState_;var u=t.getFont()||w.d;Object(w.s)(u);var p=t.getScaleArray();i.overflow=t.getOverflow(),i.font=u,i.maxAngle=t.getMaxAngle(),i.placement=t.getPlacement(),i.textAlign=t.getTextAlign(),i.textBaseline=t.getTextBaseline()||w.n,i.backgroundFill=t.getBackgroundFill(),i.backgroundStroke=t.getBackgroundStroke(),i.padding=t.getPadding()||w.k,i.scale=void 0===p?[1,1]:p;var h=t.getOffsetX(),f=t.getOffsetY(),m=t.getRotateWithView(),g=t.getRotation();this.text_=t.getText()||"",this.textOffsetX_=void 0===h?0:h,this.textOffsetY_=void 0===f?0:f,this.textRotateWithView_=void 0!==m&&m,this.textRotation_=void 0===g?0:g,this.strokeKey_=n?("string"==typeof n.strokeStyle?n.strokeStyle:Object(R.c)(n.strokeStyle))+n.lineCap+n.lineDashOffset+"|"+n.lineWidth+n.lineJoin+n.miterLimit+"["+n.lineDash.join()+"]":"",this.textKey_=i.font+i.scale+(i.textAlign||"?")+(i.textBaseline||"?"),this.fillKey_=r?"string"==typeof r.fillStyle?r.fillStyle:"|"+Object(R.c)(r.fillStyle):""}else this.text_=""},e}(E)},V=function(){function t(t,e,i,r,n){this.declutter_=n,this.declutterGroups_=null,this.tolerance_=t,this.maxExtent_=e,this.pixelRatio_=r,this.resolution_=i,this.buildersByZIndex_={}}return t.prototype.addDeclutter=function(t){var e=null;return this.declutter_&&(t?(e=this.declutterGroups_)[0][0]++:(e=[[1]],this.declutterGroups_=e)),e},t.prototype.finish=function(){var t={};for(var e in this.buildersByZIndex_){t[e]=t[e]||{};var i=this.buildersByZIndex_[e];for(var r in i){var n=i[r].finish();t[e][r]=n}}return t},t.prototype.getBuilder=function(t,e){var i=void 0!==t?t.toString():"0",r=this.buildersByZIndex_[i];void 0===r&&(r={},this.buildersByZIndex_[i]=r);var n=r[e];void 0===n&&(n=new(0,N[e])(this.tolerance_,this.maxExtent_,this.resolution_,this.pixelRatio_),r[e]=n);return n},t}(),F=i(70),H=i(18),G=i(64),X=i.n(G),U=i(19),B=i(7),$=i(4),Z=i(27);function Y(t,e,i,r,n,o,a,s,c,l,d,u){var p,h=[];if(u){var f=Object(Z.a)(t,e,i,r,u,[t[e],t[e+1]]);p=f[0]>f[f.length-r]}else p=t[e]>t[i-r];for(var m,g,v=n.length,y=t[e],b=t[e+1],_=t[e+=r],w=t[e+1],C=0,x=Math.sqrt(Math.pow(_-y,2)+Math.pow(w-b,2)),S=!1,E=0;E<v;++E){for(var M=n[m=p?v-E-1:E],T=s*c(l,M,d),O=o+T/2;e<i-r&&C+x<O;)y=_,b=w,_=t[e+=r],w=t[e+1],C+=x,x=Math.sqrt(Math.pow(_-y,2)+Math.pow(w-b,2));var L=O-C,A=Math.atan2(w-b,_-y);if(p&&(A+=A>0?-Math.PI:Math.PI),void 0!==g){var I=A-g;if(S=S||0!==I,I+=I>Math.PI?-2*Math.PI:I<-Math.PI?2*Math.PI:0,Math.abs(I)>a)return null}g=A;var j=L/x,D=Object($.c)(y,_,j),R=Object($.c)(b,w,j);h[m]=[D,R,T/2,A,M],o+=T}return S?h:[[h[0][0],h[0][1],h[0][2],h[0][3],n]]}function W(t,e,i,r){for(var n=t[e],o=t[e+1],a=0,s=e+r;s<i;s+=r){var c=t[s],l=t[s+1];a+=Math.sqrt((c-n)*(c-n)+(l-o)*(l-o)),n=c,o=l}return a}var q=Object(_.j)(),K=Object(B.c)(),J=[],Q=[],tt=[],et=[],it=function(){function t(t,e,i,r,n){this.overlaps=i,this.pixelRatio=e,this.resolution=t,this.alignFill_,this.declutterItems=[],this.instructions=r.instructions,this.coordinates=r.coordinates,this.coordinateCache_={},this.renderBuffer_=n,this.renderedTransform_=Object(B.c)(),this.hitDetectionInstructions=r.hitDetectionInstructions,this.pixelCoordinates_=null,this.viewRotation_=0,this.fillStates=r.fillStates||{},this.strokeStates=r.strokeStates||{},this.textStates=r.textStates||{},this.widths_={},this.labels_={}}return t.prototype.createLabel=function(t,e,i,r){var n=t+e+i+r;if(this.labels_[n])return this.labels_[n];var o=r?this.strokeStates[r]:null,a=i?this.fillStates[i]:null,s=this.textStates[e],c=this.pixelRatio,l=[s.scale[0]*c,s.scale[1]*c],d=P[s.textAlign||w.m],u=r&&o.lineWidth?o.lineWidth:0,p=t.split("\n"),h=p.length,f=[],m=Object(w.r)(s.font,p,f),g=Object(w.q)(s.font),v=m+u,y=[],b=(v+2)*l[0],_=(g*h+u)*l[1],C={width:b<0?Math.floor(b):Math.ceil(b),height:_<0?Math.floor(_):Math.ceil(_),contextInstructions:y};(1==l[0]&&1==l[1]||y.push("scale",l),y.push("font",s.font),r)&&(y.push("strokeStyle",o.strokeStyle),y.push("lineWidth",u),y.push("lineCap",o.lineCap),y.push("lineJoin",o.lineJoin),y.push("miterLimit",o.miterLimit),(U.g?OffscreenCanvasRenderingContext2D:CanvasRenderingContext2D).prototype.setLineDash&&(y.push("setLineDash",[o.lineDash]),y.push("lineDashOffset",o.lineDashOffset)));i&&y.push("fillStyle",a.fillStyle),y.push("textBaseline","middle"),y.push("textAlign","center");var x,S=.5-d,E=d*v+S*u;if(r)for(x=0;x<h;++x)y.push("strokeText",[p[x],E+S*f[x],.5*(u+g)+x*g]);if(i)for(x=0;x<h;++x)y.push("fillText",[p[x],E+S*f[x],.5*(u+g)+x*g]);return this.labels_[n]=C,C},t.prototype.replayTextBackground_=function(t,e,i,r,n,o,a,s){t.beginPath(),t.moveTo.apply(t,e),t.lineTo.apply(t,i),t.lineTo.apply(t,r),t.lineTo.apply(t,n),t.lineTo.apply(t,e),o&&(this.alignFill_=o[2],s&&(t.fillStyle=o[1]),this.fill_(t)),a&&(this.setStrokeStyle_(t,a),t.stroke())},t.prototype.replayImageOrLabel_=function(t,e,i,r,n,o,a,s,c,l,d,u,p,h,f,m,g,v,y){var b=v||y;i-=o*=h[0],r-=a*=h[1];var C=m+d>n.width?n.width-d:m,x=c+u>n.height?n.height-u:c,S=g[3]+C*h[0]+g[1],E=g[0]+x*h[1]+g[2],M=i-g[3],T=r-g[0];(b||0!==p)&&(J[0]=M,et[0]=M,J[1]=T,Q[1]=T,Q[0]=M+S,tt[0]=Q[0],tt[1]=T+E,et[1]=tt[1]);var O=null;if(0!==p){var L=i+o,A=r+a;O=Object(B.b)(K,L,A,1,1,p,-L,-A),Object(B.a)(K,J),Object(B.a)(K,Q),Object(B.a)(K,tt),Object(B.a)(K,et),Object(_.k)(Math.min(J[0],Q[0],tt[0],et[0]),Math.min(J[1],Q[1],tt[1],et[1]),Math.max(J[0],Q[0],tt[0],et[0]),Math.max(J[1],Q[1],tt[1],et[1]),q)}else Object(_.k)(M,T,M+S,T+E,q);var I=0,j=0;if(s){var D=this.renderBuffer_;D[0]=Math.max(D[0],Object(_.E)(q)),I=D[0],D[1]=Math.max(D[1],Object(_.A)(q)),j=D[1]}var R=t.canvas,z=y?y[2]*h[0]/2:0,k=q[0]-z<=(R.width+I)/e&&q[2]+z>=-I/e&&q[1]-z<=(R.height+j)/e&&q[3]+z>=-j/e;if(f&&(i=Math.round(i),r=Math.round(r)),s){if(!k&&1==s[0])return!1;var P=k?[t,O?O.slice(0):null,l,n,d,u,C,x,i,r,h,q.slice()]:null;P&&(b&&P.push(v,y,J.slice(0),Q.slice(0),tt.slice(0),et.slice(0)),s.push(P))}else k&&(b&&this.replayTextBackground_(t,J,Q,tt,et,v,y,!1),Object(w.o)(t,O,l,n,d,u,C,x,i,r,h));return!0},t.prototype.fill_=function(t){if(this.alignFill_){var e=Object(B.a)(this.renderedTransform_,[0,0]),i=512*this.pixelRatio;t.save(),t.translate(e[0]%i,e[1]%i),t.rotate(this.viewRotation_)}t.fill(),this.alignFill_&&t.restore()},t.prototype.setStrokeStyle_=function(t,e){t.strokeStyle=e[1],t.lineWidth=e[2],t.lineCap=e[3],t.lineJoin=e[4],t.miterLimit=e[5],t.setLineDash&&(t.lineDashOffset=e[7],t.setLineDash(e[6]))},t.prototype.renderDeclutter=function(t,e,i,r){for(var n=[],o=1,a=t.length;o<a;++o){var s=(u=t[o])[11];n.push({minX:s[0],minY:s[1],maxX:s[2],maxY:s[3],value:e})}r||(r=new X.a(9));var c=!1;for(o=0,a=n.length;o<a;++o)if(r.collides(n[o])){c=!0;break}if(!c){r.load(n);for(var l=1,d=t.length;l<d;++l){var u,p=(u=t[l])[0],h=p.globalAlpha;h!==i&&(p.globalAlpha=i),u.length>12&&this.replayTextBackground_(u[0],u[14],u[15],u[16],u[17],u[12],u[13],!0),w.o.apply(void 0,u),h!==i&&(p.globalAlpha=h)}}return t.length=1,r},t.prototype.drawLabelWithPointPlacement_=function(t,e,i,r){var n=this.textStates[e],o=this.createLabel(t,e,r,i),a=this.strokeStates[i],s=this.pixelRatio,c=P[n.textAlign||w.m],l=P[n.textBaseline||w.n],d=a&&a.lineWidth?a.lineWidth:0;return{label:o,anchorX:c*(o.width/s-2*n.scale[0])+2*(.5-c)*d,anchorY:l*o.height/s+2*(.5-l)*d}},t.prototype.execute_=function(t,e,i,r,n,o,a){var s;this.declutterItems.length=0,this.pixelCoordinates_&&Object(C.a)(i,this.renderedTransform_)?s=this.pixelCoordinates_:(this.pixelCoordinates_||(this.pixelCoordinates_=[]),s=Object(Z.c)(this.coordinates,0,this.coordinates.length,2,i,this.pixelCoordinates_),Object(B.h)(this.renderedTransform_,i));for(var c,l,d,u,p,h,f,g,v,y,b,x,S,E,M,T,O,L=0,A=r.length,I=0,j=0,D=0,R=null,z=null,k=this.coordinateCache_,N=this.viewRotation_,V=Math.round(1e12*Math.atan2(-i[1],i[0]))/1e12,F={context:t,pixelRatio:this.pixelRatio,resolution:this.resolution,rotation:N},H=this.instructions!=r||this.overlaps?0:200;L<A;){var G=r[L];switch(G[0]){case m.BEGIN_GEOMETRY:(M=G[1]).getGeometry()?void 0===a||Object(_.F)(a,G[3])?++L:L=G[2]+1:L=G[2];break;case m.BEGIN_PATH:j>H&&(this.fill_(t),j=0),D>H&&(t.stroke(),D=0),j||D||(t.beginPath(),u=NaN,p=NaN),++L;break;case m.CIRCLE:var X=s[I=G[1]],U=s[I+1],$=s[I+2]-X,q=s[I+3]-U,K=Math.sqrt($*$+q*q);t.moveTo(X+K,U),t.arc(X,U,K,0,2*Math.PI,!0),++L;break;case m.CLOSE_PATH:t.closePath(),++L;break;case m.CUSTOM:I=G[1],c=G[2];var J=G[3],Q=G[4],tt=6==G.length?G[5]:void 0;F.geometry=J,F.feature=M,L in k||(k[L]=[]);var et=k[L];tt?tt(s,I,c,2,et):(et[0]=s[I],et[1]=s[I+1],et.length=2),Q(et,F),++L;break;case m.DRAW_IMAGE:I=G[1],c=G[2],y=G[3],l=G[4],d=G[5],v=o?null:G[6];var it=G[7],rt=G[8],nt=G[9],ot=G[10],at=G[11],st=G[12],ct=G[13],lt=G[14];if(!y&&G.length>=19){b=G[18],x=G[19],S=G[20],E=G[21];var dt=this.drawLabelWithPointPlacement_(b,x,S,E);y=dt.label,G[3]=y;var ut=G[22];l=(dt.anchorX-ut)*this.pixelRatio,G[4]=l;var pt=G[23];d=(dt.anchorY-pt)*this.pixelRatio,G[5]=d,it=y.height,G[7]=it,lt=y.width,G[14]=lt}var ht=void 0;G.length>24&&(ht=G[24]);var ft=void 0,mt=void 0,gt=void 0;G.length>16?(ft=G[15],mt=G[16],gt=G[17]):(ft=w.k,mt=!1,gt=!1),at&&V?st+=N:at||V||(st-=N);for(var vt=0,yt=0;I<c;I+=2)if(!(ht&&ht[vt++]<lt/this.pixelRatio)){if(v){var bt=Math.floor(yt);g=v.length<bt+1?[v[0][0]]:v[bt]}(Pt=this.replayImageOrLabel_(t,e,s[I],s[I+1],y,l,d,g,it,rt,nt,ot,st,ct,n,lt,ft,mt?R:null,gt?z:null))&&g&&v[v.length-1]!==g&&v.push(g),g&&(g.length-1===g[0]&&this.declutterItems.push(this,g,M),yt+=1/g[0])}++L;break;case m.DRAW_CHARS:var _t=G[1],wt=G[2],Ct=G[3];g=o?null:G[4];var xt=G[5];E=G[6];var St=G[7],Et=G[8],Mt=G[9];S=G[10];var Tt=G[11];b=G[12],x=G[13];var Ot=[G[14],G[14]],Lt=this.textStates[x],At=Lt.font,It=[Lt.scale[0]*Et,Lt.scale[1]*Et],jt=void 0;At in this.widths_?jt=this.widths_[At]:(jt={},this.widths_[At]=jt);var Dt=W(s,_t,wt,2),Rt=Math.abs(It[0])*Object(w.p)(At,b,jt);if(xt||Rt<=Dt){var zt=this.textStates[x].textAlign,kt=Y(s,_t,wt,2,b,(Dt-Rt)*P[zt],St,Math.abs(It[0]),w.p,At,jt,V?0:this.viewRotation_);if(kt){var Pt=!1,Nt=void 0,Vt=void 0,Ft=void 0,Ht=void 0,Gt=void 0;if(S)for(Nt=0,Vt=kt.length;Nt<Vt;++Nt)Ft=(Gt=kt[Nt])[4],Ht=this.createLabel(Ft,x,"",S),l=Gt[2]+Tt,d=Ct*Ht.height+2*(.5-Ct)*Tt*It[1]/It[0]-Mt,Pt=this.replayImageOrLabel_(t,e,Gt[0],Gt[1],Ht,l,d,g,Ht.height,1,0,0,Gt[3],Ot,!1,Ht.width,w.k,null,null)||Pt;if(E)for(Nt=0,Vt=kt.length;Nt<Vt;++Nt)Ft=(Gt=kt[Nt])[4],Ht=this.createLabel(Ft,x,E,""),l=Gt[2],d=Ct*Ht.height-Mt,Pt=this.replayImageOrLabel_(t,e,Gt[0],Gt[1],Ht,l,d,g,Ht.height,1,0,0,Gt[3],Ot,!1,Ht.width,w.k,null,null)||Pt;Pt&&this.declutterItems.push(this,g,M)}}++L;break;case m.END_GEOMETRY:if(void 0!==o){var Xt=o(M=G[1]);if(Xt)return Xt}++L;break;case m.FILL:H?j++:this.fill_(t),++L;break;case m.MOVE_TO_LINE_TO:for(I=G[1],c=G[2],T=s[I],f=(O=s[I+1])+.5|0,(h=T+.5|0)===u&&f===p||(t.moveTo(T,O),u=h,p=f),I+=2;I<c;I+=2)h=(T=s[I])+.5|0,f=(O=s[I+1])+.5|0,I!=c-2&&h===u&&f===p||(t.lineTo(T,O),u=h,p=f);++L;break;case m.SET_FILL_STYLE:R=G,this.alignFill_=G[2],j&&(this.fill_(t),j=0,D&&(t.stroke(),D=0)),t.fillStyle=G[1],++L;break;case m.SET_STROKE_STYLE:z=G,D&&(t.stroke(),D=0),this.setStrokeStyle_(t,G),++L;break;case m.STROKE:H?D++:t.stroke(),++L;break;default:++L}}j&&this.fill_(t),D&&t.stroke()},t.prototype.execute=function(t,e,i,r,n){this.viewRotation_=r,this.execute_(t,e,i,this.instructions,n,void 0,void 0)},t.prototype.executeHitDetection=function(t,e,i,r,n){return this.viewRotation_=i,this.execute_(t,1,e,this.hitDetectionInstructions,!0,r,n)},t}(),rt=i(13),nt=[H.a.POLYGON,H.a.CIRCLE,H.a.LINE_STRING,H.a.IMAGE,H.a.TEXT,H.a.DEFAULT],ot=function(){function t(t,e,i,r,n,o){this.maxExtent_=t,this.overlaps_=r,this.pixelRatio_=i,this.resolution_=e,this.renderBuffer_=o,this.executorsByZIndex_={},this.hitDetectionContext_=null,this.hitDetectionTransform_=Object(B.c)(),this.createExecutors_(n)}return t.prototype.clip=function(t,e){var i=this.getClipCoords(e);t.beginPath(),t.moveTo(i[0],i[1]),t.lineTo(i[2],i[3]),t.lineTo(i[4],i[5]),t.lineTo(i[6],i[7]),t.clip()},t.prototype.createExecutors_=function(t){for(var e in t){var i=this.executorsByZIndex_[e];void 0===i&&(i={},this.executorsByZIndex_[e]=i);var r=t[e],n=[this.renderBuffer_||0,this.renderBuffer_||0];for(var o in r){var a=r[o];i[o]=new it(this.resolution_,this.pixelRatio_,this.overlaps_,a,n)}}},t.prototype.hasExecutors=function(t){for(var e in this.executorsByZIndex_)for(var i=this.executorsByZIndex_[e],r=0,n=t.length;r<n;++r)if(t[r]in i)return!0;return!1},t.prototype.forEachFeatureAtCoordinate=function(t,e,i,r,n,o){var a=2*(r=Math.round(r))+1,s=Object(B.b)(this.hitDetectionTransform_,r+.5,r+.5,1/e,-1/e,-i,-t[0],-t[1]);this.hitDetectionContext_||(this.hitDetectionContext_=Object(rt.a)(a,a));var c,l=this.hitDetectionContext_;l.canvas.width!==a||l.canvas.height!==a?(l.canvas.width=a,l.canvas.height=a):l.clearRect(0,0,a,a),void 0!==this.renderBuffer_&&(c=Object(_.j)(),Object(_.r)(c,t),Object(_.c)(c,e*(this.renderBuffer_+r),c));var d,u=function(t){if(void 0!==at[t])return at[t];for(var e=2*t+1,i=new Array(e),r=0;r<e;r++)i[r]=new Array(e);var n=t,o=0,a=0;for(;n>=o;)st(i,t+n,t+o),st(i,t+o,t+n),st(i,t-o,t+n),st(i,t-n,t+o),st(i,t-n,t-o),st(i,t-o,t-n),st(i,t+o,t-n),st(i,t+n,t-o),o++,2*((a+=1+2*o)-n)+1>0&&(a+=1-2*(n-=1));return at[t]=i,i}(r);function p(t){for(var e=l.getImageData(0,0,a,a).data,i=0;i<a;i++)for(var r=0;r<a;r++)if(u[i][r]&&e[4*(r*a+i)+3]>0){var s=void 0;return(!o||d!=H.a.IMAGE&&d!=H.a.TEXT||-1!==o.indexOf(t))&&(s=n(t)),s||void l.clearRect(0,0,a,a)}}var h,f,m,g,v,y=Object.keys(this.executorsByZIndex_).map(Number);for(y.sort(C.e),h=y.length-1;h>=0;--h){var b=y[h].toString();for(m=this.executorsByZIndex_[b],f=nt.length-1;f>=0;--f)if(void 0!==(g=m[d=nt[f]])&&(v=g.executeHitDetection(l,s,i,p,c)))return v}},t.prototype.getClipCoords=function(t){var e=this.maxExtent_;if(!e)return null;var i=e[0],r=e[1],n=e[2],o=e[3],a=[i,r,i,o,n,o,n,r];return Object(Z.c)(a,0,8,2,t,a),a},t.prototype.isEmpty=function(){return Object(o.d)(this.executorsByZIndex_)},t.prototype.execute=function(t,e,i,r,n,o,a){var s=Object.keys(this.executorsByZIndex_).map(Number);s.sort(C.e),this.maxExtent_&&(t.save(),this.clip(t,i));var c,l,d,u,p,h,f=o||nt;for(c=0,l=s.length;c<l;++c){var m=s[c].toString();for(p=this.executorsByZIndex_[m],d=0,u=f.length;d<u;++d){var g=f[d];if(void 0!==(h=p[g]))if(!a||g!=H.a.IMAGE&&g!=H.a.TEXT)h.execute(t,e,i,r,n);else{var v=a[m];v?v.push(h,i.slice(0)):a[m]=[h,i.slice(0)]}}}this.maxExtent_&&t.restore()},t}(),at={0:[[!0]]};function st(t,e,i){var r,n=Math.floor(t.length/2);if(e>=n)for(r=n;r<e;r++)t[r][i]=!0;else if(e<n)for(r=e+1;r<n;r++)t[r][i]=!0}var ct=ot,lt=i(20),dt=i(58),ut=i(40),pt=i(145);var ht=i(45),ft=i(8),mt=i(24),gt=function(){var t=function(e,i){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(e,i)};return function(e,i){function r(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(r.prototype=i.prototype,new r)}}(),vt=function(t){function e(e){var i=t.call(this,e)||this;return i.boundHandleStyleImageChange_=i.handleStyleImageChange_.bind(i),i.animatingOrInteracting_,i.dirty_=!1,i.hitDetectionImageData_=null,i.renderedFeatures_=null,i.renderedRevision_=-1,i.renderedResolution_=NaN,i.renderedExtent_=Object(_.j)(),i.renderedRotation_,i.renderedCenter_=null,i.renderedProjection_=null,i.renderedRenderOrder_=null,i.replayGroup_=null,i.replayGroupChanged=!0,i.clipping=!0,i}return gt(e,t),e.prototype.useContainer=function(e,i,r){r<1&&(e=null),t.prototype.useContainer.call(this,e,i,r)},e.prototype.renderFrame=function(t,e){var i=t.pixelRatio,r=t.layerStatesArray[t.layerIndex];Object(B.e)(this.pixelTransform,1/i,1/i),Object(B.d)(this.inversePixelTransform,this.pixelTransform);var n=Object(B.i)(this.pixelTransform);this.useContainer(e,n,r.opacity);var o=this.context,a=o.canvas,s=this.replayGroup_;if(!s||s.isEmpty())return!this.containerReused&&a.width>0&&(a.width=0),this.container;var c=Math.round(t.size[0]*i),l=Math.round(t.size[1]*i);a.width!=c||a.height!=l?(a.width=c,a.height=l,a.style.transform!==n&&(a.style.transform=n)):this.containerReused||o.clearRect(0,0,c,l),this.preRender(o,t);var d=t.extent,u=t.viewState,p=u.center,h=u.resolution,f=u.projection,m=u.rotation,g=f.getExtent(),v=this.getLayer().getSource(),y=!1;if(r.extent&&this.clipping){var b=Object(ft.e)(r.extent,f);(y=!Object(_.g)(b,t.extent)&&Object(_.F)(b,t.extent))&&this.clipUnrotated(o,t,b)}var w=t.viewHints,x=!(w[lt.a.ANIMATING]||w[lt.a.INTERACTING]),S=this.getRenderTransform(p,h,m,i,c,l,0),E=this.getLayer().getDeclutter()?{}:null;if(s.execute(o,1,S,m,x,void 0,E),v.getWrapX()&&f.canWrapX()&&!Object(_.g)(g,d)){for(var M=d[0],T=Object(_.E)(g),O=0,L=void 0;M<g[0];){L=T*--O;var A=this.getRenderTransform(p,h,m,i,c,l,L);s.execute(o,1,A,m,x,void 0,E),M+=T}for(O=0,M=d[2];M>g[2];){L=T*++O;var I=this.getRenderTransform(p,h,m,i,c,l,L);s.execute(o,1,I,m,x,void 0,E),M-=T}}if(E){var j=t.viewHints;!function(t,e,i,r,n,o){for(var a=Object.keys(t).map(Number).sort(C.e),s=0,c=a.length;s<c;++s)for(var l=t[a[s].toString()],d=void 0,u=0,p=l.length;u<p;){var h=l[u++],f=l[u++];h.execute(e,1,f,i,n),h!==d&&h.declutterItems.length>0&&(d=h,o.push({items:h.declutterItems,opacity:r}))}}(E,o,m,1,!(j[lt.a.ANIMATING]||j[lt.a.INTERACTING]),t.declutterItems)}y&&o.restore(),this.postRender(o,t);var D=r.opacity,R=this.container;return D!==parseFloat(R.style.opacity)&&(R.style.opacity=1===D?"":String(D)),this.renderedRotation_!==u.rotation&&(this.renderedRotation_=u.rotation,this.hitDetectionImageData_=null),this.container},e.prototype.getFeatures=function(t){return new Promise(function(e,i){if(!this.hitDetectionImageData_&&!this.animatingOrInteracting_){var r=[this.context.canvas.width,this.context.canvas.height];Object(B.a)(this.pixelTransform,r);var n=this.renderedCenter_,o=this.renderedResolution_,a=this.renderedRotation_,s=this.renderedProjection_,c=this.renderedExtent_,l=this.getLayer(),d=[],u=r[0]/2,p=r[1]/2;d.push(this.getRenderTransform(n,o,a,.5,u,p,0).slice());var h=l.getSource(),f=s.getExtent();if(h.getWrapX()&&s.canWrapX()&&!Object(_.g)(f,c)){for(var m=c[0],v=Object(_.E)(f),y=0,b=void 0;m<f[0];)b=v*--y,d.push(this.getRenderTransform(n,o,a,.5,u,p,b).slice()),m+=v;for(y=0,m=c[2];m>f[2];)b=v*++y,d.push(this.getRenderTransform(n,o,a,.5,u,p,b).slice()),m-=v}this.hitDetectionImageData_=function(t,e,i,r,n,o,a){var s=t[0]/2,c=t[1]/2,l=Object(rt.a)(s,c);l.imageSmoothingEnabled=!1;for(var d=l.canvas,u=new dt.a(l,.5,n,null,a),p=i.length,h=Math.floor(16777215/p),f={},m=1;m<=p;++m){var v=i[m-1],y=v.getStyleFunction()||r;if(r){var b=y(v,o);if(b){Array.isArray(b)||(b=[b]);for(var w="#"+("000000"+(m*h).toString(16)).slice(-6),x=0,S=b.length;x<S;++x){var E=b[x],M=E.clone(),T=M.getFill();T&&T.setColor(w);var O=M.getStroke();O&&O.setColor(w),M.setText(void 0);var L=E.getImage();if(L){var A=L.getImageSize();if(!A)continue;var I=document.createElement("canvas");I.width=A[0],I.height=A[1];var j=I.getContext("2d",{alpha:!1});j.fillStyle=w;var D=j.canvas;j.fillRect(0,0,D.width,D.height);var R=A?A[0]:D.width,z=A?A[1]:D.height;Object(rt.a)(R,z).drawImage(D,0,0),M.setImage(new pt.a({img:D,imgSize:A,anchor:L.getAnchor(),anchorXUnits:ut.a.PIXELS,anchorYUnits:ut.a.PIXELS,offset:L.getOrigin(),size:L.getSize(),opacity:L.getOpacity(),scale:L.getScale(),rotation:L.getRotation(),rotateWithView:L.getRotateWithView()}))}var k=Number(M.getZIndex());(F=f[k])||(F={},f[k]=F,F[g.a.POLYGON]=[],F[g.a.CIRCLE]=[],F[g.a.LINE_STRING]=[],F[g.a.POINT]=[]);var P=M.getGeometryFunction()(v);P&&Object(_.F)(n,P.getExtent())&&F[P.getType().replace("Multi","")].push(P,M)}}}}for(var N=Object.keys(f).map(Number).sort(C.e),V=(m=0,N.length);m<V;++m){var F=f[N[m]];for(var H in F){var G=F[H];for(x=0,S=G.length;x<S;x+=2){u.setStyle(G[x+1]);for(var X=0,U=e.length;X<U;++X)u.setTransform(e[X]),u.drawGeometry(G[x])}}}return l.getImageData(0,0,d.width,d.height)}(r,d,this.renderedFeatures_,l.getStyleFunction(),c,o,a)}e(function(t,e,i){var r=[];if(i){var n=4*(Math.round(t[0]/2)+Math.round(t[1]/2)*i.width),o=i.data[n],a=i.data[n+1],s=i.data[n+2]+256*(a+256*o),c=Math.floor(16777215/e.length);s&&s%c==0&&r.push(e[s/c-1])}return r}(t,this.renderedFeatures_,this.hitDetectionImageData_))}.bind(this))},e.prototype.forEachFeatureAtCoordinate=function(t,e,i,r,n){if(this.replayGroup_){var o=e.viewState.resolution,a=e.viewState.rotation,s=this.getLayer(),c={};return this.replayGroup_.forEachFeatureAtCoordinate(t,o,a,i,(function(t){var e=Object(R.c)(t);if(!(e in c))return c[e]=!0,r(t,s)}),s.getDeclutter()?n:null)}},e.prototype.handleFontsChanged=function(){var t=this.getLayer();t.getVisible()&&this.replayGroup_&&t.changed()},e.prototype.handleStyleImageChange_=function(t){this.renderIfReadyAndVisible()},e.prototype.prepareFrame=function(t){var e=this.getLayer(),i=e.getSource();if(!i)return!1;var r=t.viewHints[lt.a.ANIMATING],n=t.viewHints[lt.a.INTERACTING],o=e.getUpdateWhileAnimating(),a=e.getUpdateWhileInteracting();if(!this.dirty_&&!o&&r||!a&&n)return this.animatingOrInteracting_=!0,!0;this.animatingOrInteracting_=!1;var s=t.extent,c=t.viewState,l=c.projection,d=c.resolution,u=t.pixelRatio,p=e.getRevision(),h=e.getRenderBuffer(),f=e.getRenderOrder();void 0===f&&(f=ht.a);var m=c.center.slice(),g=Object(_.c)(s,h*d),v=[g.slice()],y=l.getExtent();if(i.getWrapX()&&l.canWrapX()&&!Object(_.g)(y,t.extent)){var b=Object(_.E)(y),w=Math.max(Object(_.E)(g)/2,b);g[0]=y[0]-w,g[2]=y[2]+w,Object(mt.f)(m,l);var C=Object(_.K)(v[0],l);C[0]<y[0]&&C[2]<y[2]?v.push([C[0]+b,C[1],C[2]+b,C[3]]):C[0]>y[0]&&C[2]>y[2]&&v.push([C[0]-b,C[1],C[2]-b,C[3]])}if(!this.dirty_&&this.renderedResolution_==d&&this.renderedRevision_==p&&this.renderedRenderOrder_==f&&Object(_.g)(this.renderedExtent_,g))return this.replayGroupChanged=!1,!0;this.replayGroup_=null,this.dirty_=!1;var x,S=new V(Object(ht.c)(d,u),g,d,u,e.getDeclutter()),E=Object(ft.j)();if(E){for(var M=0,T=v.length;M<T;++M)i.loadFeatures(Object(ft.l)(v[M],l),d,E);x=Object(ft.i)(E,l)}else for(M=0,T=v.length;M<T;++M)i.loadFeatures(v[M],d,l);var O=Object(ht.b)(d,u),L=function(t){var i,r=t.getStyleFunction()||e.getStyleFunction();if(r&&(i=r(t,d)),i){var n=this.renderFeature(t,O,i,S,x);this.dirty_=this.dirty_||n}}.bind(this),A=Object(ft.l)(g,l),I=i.getFeaturesInExtent(A);f&&I.sort(f);for(M=0,T=I.length;M<T;++M)L(I[M]);this.renderedFeatures_=I;var j=S.finish(),D=new ct(g,d,u,i.getOverlaps(),j,e.getRenderBuffer());return this.renderedResolution_=d,this.renderedRevision_=p,this.renderedRenderOrder_=f,this.renderedExtent_=g,this.renderedCenter_=m,this.renderedProjection_=l,this.replayGroup_=D,this.hitDetectionImageData_=null,this.replayGroupChanged=!0,!0},e.prototype.renderFeature=function(t,e,i,r,n){if(!i)return!1;var o=!1;if(Array.isArray(i))for(var a=0,s=i.length;a<s;++a)o=Object(ht.d)(r,t,i[a],e,this.boundHandleStyleImageChange_,n)||o;else o=Object(ht.d)(r,t,i,e,this.boundHandleStyleImageChange_,n);return o},e}(F.a),yt=function(){var t=function(e,i){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(e,i)};return function(e,i){function r(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(r.prototype=i.prototype,new r)}}(),bt=function(t){function e(e){return t.call(this,e)||this}return yt(e,t),e.prototype.createRenderer=function(){return new vt(this)},e}(l);e.a=bt},function(t,e,i){"use strict";var r=i(32),n=i(25),o=i(30),a=i(6),s=i(36),c=i(64),l=i.n(c),d=i(0),u=i(1),p=i(11),h=function(){function t(t){this.rbush_=new l.a(t),this.items_={}}return t.prototype.insert=function(t,e){var i={minX:t[0],minY:t[1],maxX:t[2],maxY:t[3],value:e};this.rbush_.insert(i),this.items_[Object(u.c)(e)]=i},t.prototype.load=function(t,e){for(var i=new Array(e.length),r=0,n=e.length;r<n;r++){var o=t[r],a=e[r],s={minX:o[0],minY:o[1],maxX:o[2],maxY:o[3],value:a};i[r]=s,this.items_[Object(u.c)(a)]=s}this.rbush_.load(i)},t.prototype.remove=function(t){var e=Object(u.c)(t),i=this.items_[e];return delete this.items_[e],null!==this.rbush_.remove(i)},t.prototype.update=function(t,e){var i=this.items_[Object(u.c)(e)],r=[i.minX,i.minY,i.maxX,i.maxY];Object(d.p)(r,t)||(this.remove(e),this.insert(t,e))},t.prototype.getAll=function(){return this.rbush_.all().map((function(t){return t.value}))},t.prototype.getInExtent=function(t){var e={minX:t[0],minY:t[1],maxX:t[2],maxY:t[3]};return this.rbush_.search(e).map((function(t){return t.value}))},t.prototype.forEach=function(t){return this.forEach_(this.getAll(),t)},t.prototype.forEachInExtent=function(t,e){return this.forEach_(this.getInExtent(t),e)},t.prototype.forEach_=function(t,e){for(var i,r=0,n=t.length;r<n;r++)if(i=e(t[r]))return i;return i},t.prototype.isEmpty=function(){return Object(p.d)(this.items_)},t.prototype.clear=function(){this.rbush_.clear(),this.items_={}},t.prototype.getExtent=function(t){var e=this.rbush_.toJSON();return Object(d.k)(e.minX,e.minY,e.maxX,e.maxY,t)},t.prototype.concat=function(t){for(var e in this.rbush_.load(t.rbush_.all()),t.items_)this.items_[e]=t.items_[e]},t}(),f=i(65),m=i(34),g="addfeature",v="changefeature",y="clear",b="removefeature",_=i(14);function w(t,e){return[[-1/0,-1/0,1/0,1/0]]}var C=i(10),x=i(12),S=i(5),E="arraybuffer",M="json",T="text",O="xml",L=!1;function A(t,e){return function(t,e,i,r){return function(n,o,a){var s=new XMLHttpRequest;s.open("GET","function"==typeof t?t(n,o,a):t,!0),e.getType()==E&&(s.responseType="arraybuffer"),s.withCredentials=L,s.onload=function(t){if(!s.status||s.status>=200&&s.status<300){var o=e.getType(),c=void 0;o==M||o==T?c=s.responseText:o==O?(c=s.responseXML)||(c=(new DOMParser).parseFromString(s.responseText,"application/xml")):o==E&&(c=s.response),c?i.call(this,e.readFeatures(c,{extent:n,featureProjection:a}),e.readProjection(c)):r.call(this)}else r.call(this)}.bind(this),s.onerror=function(){r.call(this)}.bind(this),s.send()}}(t,e,(function(t,e){"function"==typeof this.addFeatures&&this.addFeatures(t)}),_.c)}var I,j=(I=function(t,e){return(I=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(t,e)},function(t,e){function i(){this.constructor=t}I(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}),D=function(t){function e(e,i){var r=t.call(this,e)||this;return r.feature=i,r}return j(e,t),e}(o.a),R=function(t){function e(e){var i=this,n=e||{};(i=t.call(this,{attributions:n.attributions,projection:void 0,state:m.a.READY,wrapX:void 0===n.wrapX||n.wrapX})||this).loader_=_.c,i.format_=n.format,i.overlaps_=void 0===n.overlaps||n.overlaps,i.url_=n.url,void 0!==n.loader?i.loader_=n.loader:void 0!==i.url_&&(Object(C.a)(i.format_,7),i.loader_=A(i.url_,i.format_)),i.strategy_=void 0!==n.strategy?n.strategy:w;var o,a,s=void 0===n.useSpatialIndex||n.useSpatialIndex;return i.featuresRtree_=s?new h:null,i.loadedExtentsRtree_=new h,i.nullGeometryFeatures_={},i.idIndex_={},i.uidIndex_={},i.featureChangeKeys_={},i.featuresCollection_=null,Array.isArray(n.features)?a=n.features:n.features&&(a=(o=n.features).getArray()),s||void 0!==o||(o=new r.a(a)),void 0!==a&&i.addFeaturesInternal(a),void 0!==o&&i.bindFeaturesCollection_(o),i}return j(e,t),e.prototype.addFeature=function(t){this.addFeatureInternal(t),this.changed()},e.prototype.addFeatureInternal=function(t){var e=Object(u.c)(t);if(this.addToIndex_(e,t)){this.setupChangeEvents_(e,t);var i=t.getGeometry();if(i){var r=i.getExtent();this.featuresRtree_&&this.featuresRtree_.insert(r,t)}else this.nullGeometryFeatures_[e]=t;this.dispatchEvent(new D(g,t))}else this.featuresCollection_&&this.featuresCollection_.remove(t)},e.prototype.setupChangeEvents_=function(t,e){this.featureChangeKeys_[t]=[Object(S.a)(e,a.a.CHANGE,this.handleFeatureChange_,this),Object(S.a)(e,s.a.PROPERTYCHANGE,this.handleFeatureChange_,this)]},e.prototype.addToIndex_=function(t,e){var i=!0,r=e.getId();return void 0!==r&&(r.toString()in this.idIndex_?i=!1:this.idIndex_[r.toString()]=e),i&&(Object(C.a)(!(t in this.uidIndex_),30),this.uidIndex_[t]=e),i},e.prototype.addFeatures=function(t){this.addFeaturesInternal(t),this.changed()},e.prototype.addFeaturesInternal=function(t){for(var e=[],i=[],r=[],n=0,o=t.length;n<o;n++){var a=t[n],s=Object(u.c)(a);this.addToIndex_(s,a)&&i.push(a)}n=0;for(var c=i.length;n<c;n++){a=i[n],s=Object(u.c)(a);this.setupChangeEvents_(s,a);var l=a.getGeometry();if(l){var d=l.getExtent();e.push(d),r.push(a)}else this.nullGeometryFeatures_[s]=a}this.featuresRtree_&&this.featuresRtree_.load(e,r);n=0;for(var p=i.length;n<p;n++)this.dispatchEvent(new D(g,i[n]))},e.prototype.bindFeaturesCollection_=function(t){var e=!1;this.addEventListener(g,(function(i){e||(e=!0,t.push(i.feature),e=!1)})),this.addEventListener(b,(function(i){e||(e=!0,t.remove(i.feature),e=!1)})),t.addEventListener(n.a.ADD,function(t){e||(e=!0,this.addFeature(t.element),e=!1)}.bind(this)),t.addEventListener(n.a.REMOVE,function(t){e||(e=!0,this.removeFeature(t.element),e=!1)}.bind(this)),this.featuresCollection_=t},e.prototype.clear=function(t){if(t){for(var e in this.featureChangeKeys_){this.featureChangeKeys_[e].forEach(S.c)}this.featuresCollection_||(this.featureChangeKeys_={},this.idIndex_={},this.uidIndex_={})}else if(this.featuresRtree_)for(var i in this.featuresRtree_.forEach(this.removeFeatureInternal.bind(this)),this.nullGeometryFeatures_)this.removeFeatureInternal(this.nullGeometryFeatures_[i]);this.featuresCollection_&&this.featuresCollection_.clear(),this.featuresRtree_&&this.featuresRtree_.clear(),this.nullGeometryFeatures_={};var r=new D(y);this.dispatchEvent(r),this.changed()},e.prototype.forEachFeature=function(t){if(this.featuresRtree_)return this.featuresRtree_.forEach(t);this.featuresCollection_&&this.featuresCollection_.forEach(t)},e.prototype.forEachFeatureAtCoordinateDirect=function(t,e){var i=[t[0],t[1],t[0],t[1]];return this.forEachFeatureInExtent(i,(function(i){return i.getGeometry().intersectsCoordinate(t)?e(i):void 0}))},e.prototype.forEachFeatureInExtent=function(t,e){if(this.featuresRtree_)return this.featuresRtree_.forEachInExtent(t,e);this.featuresCollection_&&this.featuresCollection_.forEach(e)},e.prototype.forEachFeatureIntersectingExtent=function(t,e){return this.forEachFeatureInExtent(t,(function(i){if(i.getGeometry().intersectsExtent(t)){var r=e(i);if(r)return r}}))},e.prototype.getFeaturesCollection=function(){return this.featuresCollection_},e.prototype.getFeatures=function(){var t;return this.featuresCollection_?t=this.featuresCollection_.getArray():this.featuresRtree_&&(t=this.featuresRtree_.getAll(),Object(p.d)(this.nullGeometryFeatures_)||Object(x.b)(t,Object(p.c)(this.nullGeometryFeatures_))),t},e.prototype.getFeaturesAtCoordinate=function(t){var e=[];return this.forEachFeatureAtCoordinateDirect(t,(function(t){e.push(t)})),e},e.prototype.getFeaturesInExtent=function(t){return this.featuresRtree_?this.featuresRtree_.getInExtent(t):this.featuresCollection_?this.featuresCollection_.getArray():[]},e.prototype.getClosestFeatureToCoordinate=function(t,e){var i=t[0],r=t[1],n=null,o=[NaN,NaN],a=1/0,s=[-1/0,-1/0,1/0,1/0],c=e||_.b;return this.featuresRtree_.forEachInExtent(s,(function(t){if(c(t)){var e=t.getGeometry(),l=a;if((a=e.closestPointXY(i,r,o,a))<l){n=t;var d=Math.sqrt(a);s[0]=i-d,s[1]=r-d,s[2]=i+d,s[3]=r+d}}})),n},e.prototype.getExtent=function(t){return this.featuresRtree_.getExtent(t)},e.prototype.getFeatureById=function(t){var e=this.idIndex_[t.toString()];return void 0!==e?e:null},e.prototype.getFeatureByUid=function(t){var e=this.uidIndex_[t];return void 0!==e?e:null},e.prototype.getFormat=function(){return this.format_},e.prototype.getOverlaps=function(){return this.overlaps_},e.prototype.getUrl=function(){return this.url_},e.prototype.handleFeatureChange_=function(t){var e=t.target,i=Object(u.c)(e),r=e.getGeometry();if(r){var n=r.getExtent();i in this.nullGeometryFeatures_?(delete this.nullGeometryFeatures_[i],this.featuresRtree_&&this.featuresRtree_.insert(n,e)):this.featuresRtree_&&this.featuresRtree_.update(n,e)}else i in this.nullGeometryFeatures_||(this.featuresRtree_&&this.featuresRtree_.remove(e),this.nullGeometryFeatures_[i]=e);var o=e.getId();if(void 0!==o){var a=o.toString();this.idIndex_[a]!==e&&(this.removeFromIdIndex_(e),this.idIndex_[a]=e)}else this.removeFromIdIndex_(e),this.uidIndex_[i]=e;this.changed(),this.dispatchEvent(new D(v,e))},e.prototype.hasFeature=function(t){var e=t.getId();return void 0!==e?e in this.idIndex_:Object(u.c)(t)in this.uidIndex_},e.prototype.isEmpty=function(){return this.featuresRtree_.isEmpty()&&Object(p.d)(this.nullGeometryFeatures_)},e.prototype.loadFeatures=function(t,e,i){var r=this.loadedExtentsRtree_,n=this.strategy_(t,e);this.loading=!1;for(var o=function(t,o){var s=n[t];r.forEachInExtent(s,(function(t){return Object(d.g)(t.extent,s)}))||(a.loader_.call(a,s,e,i),r.insert(s,{extent:s.slice()}),a.loading=a.loader_!==_.c)},a=this,s=0,c=n.length;s<c;++s)o(s)},e.prototype.refresh=function(){this.clear(!0),this.loadedExtentsRtree_.clear(),t.prototype.refresh.call(this)},e.prototype.removeLoadedExtent=function(t){var e,i=this.loadedExtentsRtree_;i.forEachInExtent(t,(function(i){if(Object(d.p)(i.extent,t))return e=i,!0})),e&&i.remove(e)},e.prototype.removeFeature=function(t){var e=Object(u.c)(t);e in this.nullGeometryFeatures_?delete this.nullGeometryFeatures_[e]:this.featuresRtree_&&this.featuresRtree_.remove(t),this.removeFeatureInternal(t),this.changed()},e.prototype.removeFeatureInternal=function(t){var e=Object(u.c)(t);this.featureChangeKeys_[e].forEach(S.c),delete this.featureChangeKeys_[e];var i=t.getId();void 0!==i&&delete this.idIndex_[i.toString()],delete this.uidIndex_[e],this.dispatchEvent(new D(b,t))},e.prototype.removeFromIdIndex_=function(t){var e=!1;for(var i in this.idIndex_)if(this.idIndex_[i]===t){delete this.idIndex_[i],e=!0;break}return e},e.prototype.setLoader=function(t){this.loader_=t},e.prototype.setUrl=function(t){Object(C.a)(this.format_,7),this.setLoader(A(t,this.format_))},e}(f.a);e.a=R},function(t,e,i){"use strict";var r,n=i(37),o="preload",a="useInterimTilesOnError",s=i(11),c=(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(t,e)},function(t,e){function i(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}),l=function(t){function e(e){var i=this,r=e||{},n=Object(s.a)({},r);return delete n.preload,delete n.useInterimTilesOnError,(i=t.call(this,n)||this).setPreload(void 0!==r.preload?r.preload:0),i.setUseInterimTilesOnError(void 0===r.useInterimTilesOnError||r.useInterimTilesOnError),i}return c(e,t),e.prototype.getPreload=function(){return this.get(o)},e.prototype.setPreload=function(t){this.set(o,t)},e.prototype.getUseInterimTilesOnError=function(){return this.get(a)},e.prototype.setUseInterimTilesOnError=function(t){this.set(a,t)},e}(n.a),d=i(70),u=i(50),p=i(9),h=i(7),f=i(0),m=i(2),g=i(8),v=i(1),y=i(12),b=function(){var t=function(e,i){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(e,i)};return function(e,i){function r(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(r.prototype=i.prototype,new r)}}(),_=function(t){function e(e){var i=t.call(this,e)||this;return i.extentChanged=!0,i.renderedExtent_=null,i.renderedPixelRatio,i.renderedProjection=null,i.renderedRevision,i.renderedTiles=[],i.newTiles_=!1,i.tmpExtent=Object(f.j)(),i.tmpTileRange_=new u.b(0,0,0,0),i}return b(e,t),e.prototype.isDrawableTile=function(t){var e=this.getLayer(),i=t.getState(),r=e.getUseInterimTilesOnError();return i==p.a.LOADED||i==p.a.EMPTY||i==p.a.ERROR&&!r},e.prototype.getTile=function(t,e,i,r){var n=r.pixelRatio,o=r.viewState.projection,a=this.getLayer(),s=a.getSource().getTile(t,e,i,n,o);return s.getState()==p.a.ERROR&&(a.getUseInterimTilesOnError()?a.getPreload()>0&&(this.newTiles_=!0):s.setState(p.a.LOADED)),this.isDrawableTile(s)||(s=s.getInterimTile()),s},e.prototype.loadedTileCallback=function(e,i,r){return!!this.isDrawableTile(r)&&t.prototype.loadedTileCallback.call(this,e,i,r)},e.prototype.prepareFrame=function(t){return!!this.getLayer().getSource()},e.prototype.renderFrame=function(t,e){var i=t.layerStatesArray[t.layerIndex],r=t.viewState,n=r.projection,o=r.resolution,a=r.center,c=r.rotation,l=t.pixelRatio,d=this.getLayer(),u=d.getSource(),b=u.getRevision(),_=u.getTileGridForProjection(n),w=_.getZForResolution(o,u.zDirection),C=_.getResolution(w),x=t.extent,S=i.extent&&Object(g.e)(i.extent,n);S&&(x=Object(f.B)(x,Object(g.e)(i.extent,n)));var E=u.getTilePixelRatio(l),M=Math.round(t.size[0]*E),T=Math.round(t.size[1]*E);if(c){var O=Math.round(Math.sqrt(M*M+T*T));M=O,T=O}var L=C*M/2/E,A=C*T/2/E,I=[a[0]-L,a[1]-A,a[0]+L,a[1]+A],j=_.getTileRangeForExtentAndZ(x,w),D={};D[w]={};var R=this.createLoadedTileFinder(u,n,D),z=this.tmpExtent,k=this.tmpTileRange_;this.newTiles_=!1;for(var P=j.minX;P<=j.maxX;++P)for(var N=j.minY;N<=j.maxY;++N){var V=this.getTile(w,P,N,t);if(this.isDrawableTile(V)){var F=Object(v.c)(this);if(V.getState()==p.a.LOADED){D[w][V.tileCoord.toString()]=V;var H=V.inTransition(F);this.newTiles_||!H&&-1!==this.renderedTiles.indexOf(V)||(this.newTiles_=!0)}if(1===V.getAlpha(F,t.time))continue}var G=_.getTileCoordChildTileRange(V.tileCoord,k,z),X=!1;G&&(X=R(w+1,G)),X||_.forEachTileCoordParentTileRange(V.tileCoord,R,k,z)}var U=C/o;Object(h.b)(this.pixelTransform,t.size[0]/2,t.size[1]/2,1/E,1/E,c,-M/2,-T/2);var B=Object(m.b)(this.pixelTransform);this.useContainer(e,B,i.opacity);var $=this.context,Z=$.canvas;Object(h.d)(this.inversePixelTransform,this.pixelTransform),Object(h.b)(this.tempTransform,M/2,T/2,U,U,0,-M/2,-T/2),Z.width!=M||Z.height!=T?(Z.width=M,Z.height=T):this.containerReused||$.clearRect(0,0,M,T),S&&this.clipUnrotated($,t,S),Object(s.a)($,u.getContextOptions()),this.preRender($,t),this.renderedTiles.length=0;var Y,W,q,K=Object.keys(D).map(Number);K.sort(y.e),1!==i.opacity||this.containerReused&&!u.getOpaque(t.viewState.projection)?(Y=[],W=[]):K=K.reverse();for(var J=K.length-1;J>=0;--J){var Q=K[J],tt=u.getTilePixelSize(Q,l,n),et=_.getResolution(Q)/C,it=tt[0]*et*U,rt=tt[1]*et*U,nt=_.getTileCoordForCoordAndZ(Object(f.C)(I),Q),ot=_.getTileCoordExtent(nt),at=Object(h.a)(this.tempTransform,[E*(ot[0]-I[0])/C,E*(I[3]-ot[3])/C]),st=E*u.getGutterForProjection(n),ct=D[Q];for(var lt in ct){var dt=(V=ct[lt]).tileCoord,ut=at[0]-(nt[1]-dt[1])*it,pt=Math.round(ut+it),ht=at[1]-(nt[2]-dt[2])*rt,ft=Math.round(ht+rt),mt=pt-(P=Math.round(ut)),gt=ft-(N=Math.round(ht)),vt=w===Q;if(!(H=vt&&1!==V.getAlpha(Object(v.c)(this),t.time)))if(Y){$.save(),q=[P,N,P+mt,N,P+mt,N+gt,P,N+gt];for(var yt=0,bt=Y.length;yt<bt;++yt)if(w!==Q&&Q<W[yt]){var _t=Y[yt];$.beginPath(),$.moveTo(q[0],q[1]),$.lineTo(q[2],q[3]),$.lineTo(q[4],q[5]),$.lineTo(q[6],q[7]),$.moveTo(_t[6],_t[7]),$.lineTo(_t[4],_t[5]),$.lineTo(_t[2],_t[3]),$.lineTo(_t[0],_t[1]),$.clip()}Y.push(q),W.push(Q)}else $.clearRect(P,N,mt,gt);this.drawTileImage(V,t,P,N,mt,gt,st,vt,i.opacity),Y&&!H&&$.restore(),this.renderedTiles.push(V),this.updateUsedTiles(t.usedTiles,u,V)}}return this.renderedRevision=b,this.renderedResolution=C,this.extentChanged=!this.renderedExtent_||!Object(f.p)(this.renderedExtent_,I),this.renderedExtent_=I,this.renderedPixelRatio=l,this.renderedProjection=n,this.manageTilePyramid(t,u,_,l,n,x,w,d.getPreload()),this.scheduleExpireCache(t,u),this.postRender($,t),i.extent&&$.restore(),B!==Z.style.transform&&(Z.style.transform=B),this.container},e.prototype.drawTileImage=function(t,e,i,r,n,o,a,s,c){var l=this.getTileImage(t);if(l){var d=Object(v.c)(this),u=s?t.getAlpha(d,e.time):1,p=c*u,h=p!==this.context.globalAlpha;h&&(this.context.save(),this.context.globalAlpha=p),this.context.drawImage(l,a,a,l.width-2*a,l.height-2*a,i,r,n,o),h&&this.context.restore(),1!==u?e.animate=!0:s&&t.endTransition(d)}},e.prototype.getImage=function(){var t=this.context;return t?t.canvas:null},e.prototype.getTileImage=function(t){return t.getImage()},e.prototype.scheduleExpireCache=function(t,e){if(e.canExpireCache()){var i=function(t,e,i){var r=Object(v.c)(t);r in i.usedTiles&&t.expireCache(i.viewState.projection,i.usedTiles[r])}.bind(null,e);t.postRenderFunctions.push(i)}},e.prototype.updateUsedTiles=function(t,e,i){var r=Object(v.c)(e);r in t||(t[r]={}),t[r][i.getKey()]=!0},e.prototype.manageTilePyramid=function(t,e,i,r,n,o,a,s,c){var l=Object(v.c)(e);l in t.wantedTiles||(t.wantedTiles[l]={});var d,u,h,f,m,g,y=t.wantedTiles[l],b=t.tileQueue,_=0;for(g=i.getMinZoom();g<=a;++g)for(u=i.getTileRangeForExtentAndZ(o,g,u),h=i.getResolution(g),f=u.minX;f<=u.maxX;++f)for(m=u.minY;m<=u.maxY;++m)a-g<=s?(++_,(d=e.getTile(g,f,m,r,n)).getState()==p.a.IDLE&&(y[d.getKey()]=!0,b.isKeyQueued(d.getKey())||b.enqueue([d,l,i.getTileCoordCenter(d.tileCoord),h])),void 0!==c&&c(d)):e.useTile(g,f,m,n);e.updateCacheSize(_,n)},e}(d.a);_.prototype.getLayer;var w=_,C=function(){var t=function(e,i){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(e,i)};return function(e,i){function r(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(r.prototype=i.prototype,new r)}}(),x=function(t){function e(e){return t.call(this,e)||this}return C(e,t),e.prototype.createRenderer=function(){return new w(this)},e}(l);e.a=x},function(t,e,i){"use strict";var r,n=i(6),o=i(40),a="bottom-left",s="bottom-right",c="top-left",l="top-right",d=i(16),u=i(63),p=i(41),h=i(10),f=i(35),m=i(13),g=i(54),v=i(69),y=(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(t,e)},function(t,e){function i(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}),b=null,_=function(t){function e(e,i,r,n,o,a){var s=t.call(this)||this;return s.hitDetectionImage_=null,s.image_=e||new Image,null!==n&&(s.image_.crossOrigin=n),s.canvas_={},s.color_=a,s.unlisten_=null,s.imageState_=o,s.size_=r,s.src_=i,s.tainted_,s}return y(e,t),e.prototype.isTainted_=function(){if(void 0===this.tainted_&&this.imageState_===d.a.LOADED){b||(b=Object(m.a)(1,1)),b.drawImage(this.image_,0,0);try{b.getImageData(0,0,1,1),this.tainted_=!1}catch(t){b=null,this.tainted_=!0}}return!0===this.tainted_},e.prototype.dispatchChangeEvent_=function(){this.dispatchEvent(n.a.CHANGE)},e.prototype.handleImageError_=function(){this.imageState_=d.a.ERROR,this.unlistenImage_(),this.dispatchChangeEvent_()},e.prototype.handleImageLoad_=function(){this.imageState_=d.a.LOADED,this.size_?(this.image_.width=this.size_[0],this.image_.height=this.size_[1]):this.size_=[this.image_.width,this.image_.height],this.unlistenImage_(),this.dispatchChangeEvent_()},e.prototype.getImage=function(t){return this.replaceColor_(t),this.canvas_[t]?this.canvas_[t]:this.image_},e.prototype.getPixelRatio=function(t){return this.replaceColor_(t),this.canvas_[t]?t:1},e.prototype.getImageState=function(){return this.imageState_},e.prototype.getHitDetectionImage=function(){if(!this.hitDetectionImage_)if(this.isTainted_()){var t=this.size_[0],e=this.size_[1],i=Object(m.a)(t,e);i.fillRect(0,0,t,e),this.hitDetectionImage_=i.canvas}else this.hitDetectionImage_=this.image_;return this.hitDetectionImage_},e.prototype.getSize=function(){return this.size_},e.prototype.getSrc=function(){return this.src_},e.prototype.load=function(){if(this.imageState_==d.a.IDLE){this.imageState_=d.a.LOADING;try{this.image_.src=this.src_}catch(t){this.handleImageError_()}this.unlisten_=Object(v.a)(this.image_,this.handleImageLoad_.bind(this),this.handleImageError_.bind(this))}},e.prototype.replaceColor_=function(t){if(this.color_&&!this.canvas_[t]){var e=document.createElement("canvas");this.canvas_[t]=e,e.width=Math.ceil(this.image_.width*t),e.height=Math.ceil(this.image_.height*t);var i=e.getContext("2d");if(i.scale(t,t),i.drawImage(this.image_,0,0),this.isTainted_()){var r=this.color_;return i.globalCompositeOperation="multiply",i.fillStyle="rgb("+r[0]+","+r[1]+","+r[2]+")",i.fillRect(0,0,e.width,e.height),i.globalCompositeOperation="destination-in",void i.drawImage(this.image_,0,0)}for(var n=i.getImageData(0,0,e.width,e.height),o=n.data,a=this.color_[0]/255,s=this.color_[1]/255,c=this.color_[2]/255,l=0,d=o.length;l<d;l+=4)o[l]*=a,o[l+1]*=s,o[l+2]*=c;i.putImageData(n,0,0)}},e.prototype.unlistenImage_=function(){this.unlisten_&&(this.unlisten_(),this.unlisten_=null)},e}(f.a);var w=i(1),C=function(){var t=function(e,i){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(e,i)};return function(e,i){function r(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(r.prototype=i.prototype,new r)}}(),x=function(t){function e(e){var i=this,r=e||{},n=void 0!==r.opacity?r.opacity:1,a=void 0!==r.rotation?r.rotation:0,s=void 0!==r.scale?r.scale:1,l=void 0!==r.rotateWithView&&r.rotateWithView;(i=t.call(this,{opacity:n,rotation:a,scale:s,displacement:void 0!==r.displacement?r.displacement:[0,0],rotateWithView:l})||this).anchor_=void 0!==r.anchor?r.anchor:[.5,.5],i.normalizedAnchor_=null,i.anchorOrigin_=void 0!==r.anchorOrigin?r.anchorOrigin:c,i.anchorXUnits_=void 0!==r.anchorXUnits?r.anchorXUnits:o.a.FRACTION,i.anchorYUnits_=void 0!==r.anchorYUnits?r.anchorYUnits:o.a.FRACTION,i.crossOrigin_=void 0!==r.crossOrigin?r.crossOrigin:null;var u=void 0!==r.img?r.img:null,f=void 0!==r.imgSize?r.imgSize:null,m=r.src;Object(h.a)(!(void 0!==m&&u),4),Object(h.a)(!u||u&&f,5),void 0!==m&&0!==m.length||!u||(m=u.src||Object(w.c)(u)),Object(h.a)(void 0!==m&&m.length>0,6);var v=void 0!==r.src?d.a.IDLE:d.a.LOADED;return i.color_=void 0!==r.color?Object(p.a)(r.color):null,i.iconImage_=function(t,e,i,r,n,o){var a=g.a.get(e,r,o);return a||(a=new _(t,e,i,r,n,o),g.a.set(e,r,o,a)),a}(u,m,f,i.crossOrigin_,v,i.color_),i.offset_=void 0!==r.offset?r.offset:[0,0],i.offsetOrigin_=void 0!==r.offsetOrigin?r.offsetOrigin:c,i.origin_=null,i.size_=void 0!==r.size?r.size:null,i}return C(e,t),e.prototype.clone=function(){var t=this.getScale();return new e({anchor:this.anchor_.slice(),anchorOrigin:this.anchorOrigin_,anchorXUnits:this.anchorXUnits_,anchorYUnits:this.anchorYUnits_,crossOrigin:this.crossOrigin_,color:this.color_&&this.color_.slice?this.color_.slice():this.color_||void 0,src:this.getSrc(),offset:this.offset_.slice(),offsetOrigin:this.offsetOrigin_,size:null!==this.size_?this.size_.slice():void 0,opacity:this.getOpacity(),scale:Array.isArray(t)?t.slice():t,rotation:this.getRotation(),rotateWithView:this.getRotateWithView()})},e.prototype.getAnchor=function(){if(this.normalizedAnchor_)return this.normalizedAnchor_;var t=this.anchor_,e=this.getSize();if(this.anchorXUnits_==o.a.FRACTION||this.anchorYUnits_==o.a.FRACTION){if(!e)return null;t=this.anchor_.slice(),this.anchorXUnits_==o.a.FRACTION&&(t[0]*=e[0]),this.anchorYUnits_==o.a.FRACTION&&(t[1]*=e[1])}if(this.anchorOrigin_!=c){if(!e)return null;t===this.anchor_&&(t=this.anchor_.slice()),this.anchorOrigin_!=l&&this.anchorOrigin_!=s||(t[0]=-t[0]+e[0]),this.anchorOrigin_!=a&&this.anchorOrigin_!=s||(t[1]=-t[1]+e[1])}return this.normalizedAnchor_=t,this.normalizedAnchor_},e.prototype.setAnchor=function(t){this.anchor_=t,this.normalizedAnchor_=null},e.prototype.getColor=function(){return this.color_},e.prototype.getImage=function(t){return this.iconImage_.getImage(t)},e.prototype.getPixelRatio=function(t){return this.iconImage_.getPixelRatio(t)},e.prototype.getImageSize=function(){return this.iconImage_.getSize()},e.prototype.getHitDetectionImageSize=function(){return this.getImageSize()},e.prototype.getImageState=function(){return this.iconImage_.getImageState()},e.prototype.getHitDetectionImage=function(){return this.iconImage_.getHitDetectionImage()},e.prototype.getOrigin=function(){if(this.origin_)return this.origin_;var t=this.offset_,e=this.getDisplacement();if(this.offsetOrigin_!=c){var i=this.getSize(),r=this.iconImage_.getSize();if(!i||!r)return null;t=t.slice(),this.offsetOrigin_!=l&&this.offsetOrigin_!=s||(t[0]=r[0]-i[0]-t[0]),this.offsetOrigin_!=a&&this.offsetOrigin_!=s||(t[1]=r[1]-i[1]-t[1])}return t[0]+=e[0],t[1]+=e[1],this.origin_=t,this.origin_},e.prototype.getSrc=function(){return this.iconImage_.getSrc()},e.prototype.getSize=function(){return this.size_?this.size_:this.iconImage_.getSize()},e.prototype.listenImageChange=function(t){this.iconImage_.addEventListener(n.a.CHANGE,t)},e.prototype.load=function(){this.iconImage_.load()},e.prototype.unlistenImageChange=function(t){this.iconImage_.removeEventListener(n.a.CHANGE,t)},e}(u.a);e.a=x}]);