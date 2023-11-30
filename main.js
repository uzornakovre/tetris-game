(()=>{"use strict";var e={705:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",i=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),i&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),i&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,i,r,o){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(i)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(a[l]=!0)}for(var h=0;h<e.length;h++){var c=[].concat(e[h]);i&&a[c[0]]||(void 0!==o&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=o),n&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=n):c[2]=n),r&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=r):c[4]="".concat(r)),t.push(c))}},t}},742:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},738:e=>{e.exports=function(e){return e[1]}},545:(e,t,n)=>{n.d(t,{Z:()=>c});var i=n(738),r=n.n(i),o=n(705),a=n.n(o),s=n(570),l=n(976),h=a()(r());h.i(s.Z),h.i(l.Z),h.push([e.id,'.page{position:relative;margin:0;padding:0;width:100%;height:100dvh;font-family:"Nintendo DS BIOS",Arial,Helvetica,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-style:normal;font-size:40px;background-color:#000;color:#ff0}.content{margin:0 auto;width:480px}.title{text-align:center;margin:0}.game{background-color:#00008b;height:640px;width:480px;padding:2px;border:2px solid #ff0;border-radius:5px}',""]);const c=h},976:(e,t,n)=>{n.d(t,{Z:()=>p});var i=n(738),r=n.n(i),o=n(705),a=n.n(o),s=n(742),l=n.n(s),h=new URL(n(490),n.b),c=new URL(n(114),n.b),f=a()(r()),d=l()(h),u=l()(c);f.push([e.id,`@font-face {\n  font-family: "Nintendo DS BIOS";\n  font-style: normal;\n  font-weight: 400;\n  src:\n  url(${d}) format("woff2"),\n  url(${u}) format("woff");\n}`,""]);const p=f},570:(e,t,n)=>{n.d(t,{Z:()=>s});var i=n(738),r=n.n(i),o=n(705),a=n.n(o)()(r());a.push([e.id,'/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\n html {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type="button"],\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type="button"]:-moz-focusring,\n[type="reset"]:-moz-focusring,\n[type="submit"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type="checkbox"],\n[type="radio"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type="search"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n',""]);const s=a},379:e=>{var t=[];function n(e){for(var n=-1,i=0;i<t.length;i++)if(t[i].identifier===e){n=i;break}return n}function i(e,i){for(var o={},a=[],s=0;s<e.length;s++){var l=e[s],h=i.base?l[0]+i.base:l[0],c=o[h]||0,f="".concat(h," ").concat(c);o[h]=c+1;var d=n(f),u={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==d)t[d].references++,t[d].updater(u);else{var p=r(u,i);i.byIndex=s,t.splice(s,0,{identifier:f,updater:p,references:1})}a.push(f)}return a}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var o=i(e=e||[],r=r||{});return function(e){e=e||[];for(var a=0;a<o.length;a++){var s=n(o[a]);t[s].references--}for(var l=i(e,r),h=0;h<o.length;h++){var c=n(o[h]);0===t[c].references&&(t[c].updater(),t.splice(c,1))}o=l}}},569:e=>{var t={};e.exports=function(e,n){var i=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var i="";n.supports&&(i+="@supports (".concat(n.supports,") {")),n.media&&(i+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(i+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),i+=n.css,r&&(i+="}"),n.media&&(i+="}"),n.supports&&(i+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(i,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},114:(e,t,n)=>{e.exports=n.p+"2fbd9cc47465ae42356f.woff"},490:(e,t,n)=>{e.exports=n.p+"738f1aeda63102fd5dc3.woff2"}},t={};function n(i){var r=t[i];if(void 0!==r)return r.exports;var o=t[i]={id:i,exports:{}};return e[i](o,o.exports,n),o.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.p="",n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{var e=n(379),t=n.n(e),i=n(795),r=n.n(i),o=n(569),a=n.n(o),s=n(565),l=n.n(s),h=n(216),c=n.n(h),f=n(589),d=n.n(f),u=n(545),p={};function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function y(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,v(i.key),i)}}function v(e){var t=function(e,t){if("object"!==m(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,"string");if("object"!==m(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===m(t)?t:String(t)}p.styleTagTransform=d(),p.setAttributes=l(),p.insert=a().bind(null,"head"),p.domAPI=r(),p.insertStyleElement=c(),t()(u.Z,p),u.Z&&u.Z.locals&&u.Z.locals;var b,g,x,w=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.reset()}var t,n;return t=e,(n=[{key:"level",get:function(){return Math.floor(.1*this.lines)}},{key:"reset",value:function(){this.score=0,this.lines=0,this.topOut=!1,this.playfield=this.createPlayField(),this.activeTetromino=this.createTetromino(),this.nextTetromino=this.createTetromino()}},{key:"getState",value:function(){for(var e=this.createPlayField(),t=this.activeTetromino,n=t.x,i=t.y,r=t.matrix,o=0;o<this.playfield.length;o++){e[o]=[];for(var a=0;a<this.playfield[o].length;a++)e[o][a]=this.playfield[o][a]}for(var s=0;s<r.length;s++)for(var l=0;l<r[s].length;l++)r[s][l]&&(e[i+s][n+l]=r[s][l]);return{playfield:e,score:this.score,level:this.level,lines:this.lines,nextTetromino:this.nextTetromino,isGameOver:this.topOut}}},{key:"createPlayField",value:function(){for(var e=[],t=0;t<20;t++){e[t]=[];for(var n=0;n<10;n++)e[t][n]=0}return e}},{key:"createTetromino",value:function(){var e={};switch("IJLOSTZ"[Math.floor(7*Math.random())]){case"I":e.matrix=[[0,0,0,0],[1,1,1,1],[0,0,0,0],[0,0,0,0]];break;case"J":e.matrix=[[0,0,0],[2,2,2],[0,0,2]];break;case"L":e.matrix=[[0,0,0],[3,3,3],[3,0,0]];break;case"O":e.matrix=[[0,0,0,0],[0,4,4,0],[0,4,4,0],[0,0,0,0]];break;case"S":e.matrix=[[0,0,0],[0,5,5],[5,5,0]];break;case"T":e.matrix=[[0,0,0],[0,6,0],[6,6,6]];break;case"Z":e.matrix=[[0,0,0],[7,7,0],[0,7,7]];break;default:throw new Error("Unknown tetromino type")}return e.x=Math.floor((10-e.matrix[0].length)/2),e.y=-1,e}},{key:"moveTetrominoLeft",value:function(){this.activeTetromino.x--,this.hasCollision()&&this.activeTetromino.x++}},{key:"moveTetrominoRight",value:function(){this.activeTetromino.x++,this.hasCollision()&&this.activeTetromino.x--}},{key:"moveTetrominoDown",value:function(){if(!this.topOut){if(this.activeTetromino.y++,this.hasCollision()){this.activeTetromino.y--,this.lockTetromino();var e=this.clearLines();this.updateScore(e),this.updateTetrominos()}this.hasCollision()&&(this.topOut=!0)}}},{key:"hasCollision",value:function(){for(var e=this.activeTetromino,t=e.x,n=e.y,i=e.matrix,r=this.playfield,o=0;o<i.length;o++)for(var a=0;a<i[o].length;a++)if(i[o][a]&&(void 0===r[n+o]||void 0===r[n+o][t+a]||r[n+o][t+a]))return!0;return!1}},{key:"lockTetromino",value:function(){for(var e=this.activeTetromino,t=e.x,n=e.y,i=e.matrix,r=this.playfield,o=0;o<i.length;o++)for(var a=0;a<i[o].length;a++)i[o][a]&&(r[n+o][t+a]=i[o][a])}},{key:"clearLines",value:function(){for(var e=[],t=19;t>=0;t--){for(var n=0,i=0;i<10;i++)this.playfield[t][i]&&n++;if(0===n)break;n<10||10===n&&e.unshift(t)}for(var r=0,o=e;r<o.length;r++){var a=o[r];this.playfield.splice(a,1),this.playfield.unshift(new Array(10).fill(0))}return e.length}},{key:"rotateMatrix",value:function(){for(var e=this.activeTetromino.matrix,t=e.length,n=[],i=0;i<t;i++){n[i]=[];for(var r=0;r<t;r++)n[i][r]=e[t-r-1][i]}this.activeTetromino.matrix=n,this.hasCollision()&&(this.activeTetromino.matrix=e)}},{key:"updateScore",value:function(t){t>0&&(this.score+=e.points[t]*this.level+1,this.lines+=t)}},{key:"updateTetrominos",value:function(){this.activeTetromino=this.nextTetromino,this.nextTetromino=this.createTetromino()}}])&&y(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function S(e){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},S(e)}function k(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,T(i.key),i)}}function T(e){var t=function(e,t){if("object"!==S(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,"string");if("object"!==S(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===S(t)?t:String(t)}b=w,x={1:50,2:100,3:500,4:1e3},(g=v(g="points"))in b?Object.defineProperty(b,g,{value:x,enumerable:!0,configurable:!0,writable:!0}):b[g]=x;var P=function(){function e(t,n,i,r,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.element=t,this.width=n,this.height=i,this.canvas=document.createElement("canvas"),this.canvas.width=this.width,this.canvas.height=this.height,this.canvas.className="game__playfield",this.ctx=this.canvas.getContext("2d"),this.playfieldBorderWidth=4,this.playfieldX=this.playfieldBorderWidth,this.playfieldY=this.playfieldBorderWidth,this.playfieldWidth=2*this.width/3,this.playfieldHeight=this.height,this.playfieldInnerWidth=this.playfieldWidth-2*this.playfieldBorderWidth,this.playfieldInnerHeight=this.playfieldHeight-2*this.playfieldBorderWidth,this.blockWidth=this.playfieldInnerWidth/o,this.blockHeight=this.playfieldInnerHeight/r,this.InfoPanelX=this.playfieldWidth+10,this.InfoPanelY=0,this.infoPanelWidth=this.width/3,this.infoPanelHeight=this.height,this.element.appendChild(this.canvas)}var t,n;return t=e,(n=[{key:"renderMainScreen",value:function(e){this.clearPlayfield(),this.renderPlayfield(e.playfield),this.renderInfoPanel(e)}},{key:"renderStartScreen",value:function(){this.ctx.fillStyle="yellow",this.ctx.font='24px "Nintendo DS BIOS"',this.ctx.textAlign="center",this.ctx.textBaseline="middle",this.ctx.fillText("Press ENTER to START",this.width/2,this.height/2)}},{key:"renderPauseScreen",value:function(){this.ctx.fillStyle="rgba(0,0,0,0.6)",this.ctx.fillRect(0,0,this.width,this.height),this.ctx.fillStyle="yellow",this.ctx.font='24px "Nintendo DS BIOS"',this.ctx.textAlign="center",this.ctx.textBaseline="middle",this.ctx.fillText("Press ENTER to resume",this.width/2,this.height/2)}},{key:"renderGameOverScreen",value:function(e){var t=e.score;this.clearPlayfield(),this.ctx.fillStyle="rgba(0,0,0,0.6)",this.ctx.fillRect(0,0,this.width,this.height),this.ctx.fillStyle="yellow",this.ctx.font='24px "Nintendo DS BIOS"',this.ctx.textAlign="center",this.ctx.textBaseline="middle",this.ctx.fillText("GAME OVER",this.width/2,this.height/2-50),this.ctx.fillText("Score: ".concat(t),this.width/2,this.height/2),this.ctx.fillText("Press ENTER to restart",this.width/2,this.height/2+50)}},{key:"clearPlayfield",value:function(){this.ctx.clearRect(0,0,this.width,this.height)}},{key:"renderPlayfield",value:function(t){for(var n=0;n<t.length;n++)for(var i=t[n],r=0;r<i.length;r++){var o=i[r];o&&this.renderBlock(this.playfieldX+r*this.blockWidth,this.playfieldY+n*this.blockHeight,this.blockWidth,this.blockHeight,e.colors[o])}this.ctx.strokeStyle="yellow",this.ctx.lineWidth=this.playfieldBorderWidth,this.ctx.strokeRect(0,0,this.playfieldWidth,this.playfieldHeight)}},{key:"renderInfoPanel",value:function(t){var n=t.level,i=t.score,r=t.lines,o=t.nextTetromino;this.ctx.textAlign="start",this.ctx.textBaseline="top",this.ctx.fillStyle="yellow",this.ctx.font='20px "Nintendo DS BIOS"',this.ctx.fillText("Level: ".concat(n),this.InfoPanelX,this.InfoPanelY+0),this.ctx.fillText("Score: ".concat(i),this.InfoPanelX,this.InfoPanelY+40),this.ctx.fillText("Lines: ".concat(r),this.InfoPanelX,this.InfoPanelY+80),this.ctx.fillText("Next:",this.InfoPanelX,this.InfoPanelY+120),this.ctx.fillText("Press ENTER for pause",this.InfoPanelX,this.InfoPanelY+220),this.ctx.fillText("Author:",this.InfoPanelX,this.InfoPanelY+580),this.ctx.fillText("Konstantin Filyaev",this.InfoPanelX,this.InfoPanelY+600);for(var a=0;a<o.matrix.length;a++)for(var s=0;s<o.matrix[a].length;s++){var l=o.matrix[a][s];l&&this.renderBlock(this.InfoPanelX+s*this.blockWidth*.5,this.InfoPanelY+150+a*this.blockHeight*.5,.5*this.blockWidth,.5*this.blockWidth,e.colors[l])}}},{key:"renderBlock",value:function(e,t,n,i,r){this.ctx.fillStyle=r,this.ctx.strokeStyle="yellow",this.ctx.lineWidth=2,this.ctx.fillRect(e,t,n,i),this.ctx.strokeRect(e,t,n,i)}}])&&k(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function I(e){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},I(e)}function E(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,C(i.key),i)}}function C(e){var t=function(e,t){if("object"!==I(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,"string");if("object"!==I(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===I(t)?t:String(t)}!function(e,t,n){(t=T(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(P,"colors",{1:"blue",2:"grey",3:"green",4:"violet",5:"brown",6:"red",7:"darkred"});var O=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.game=t,this.view=n,this.intervalId=null,this.isPlaying=!1,document.addEventListener("keydown",this.handleKeyDown.bind(this)),document.addEventListener("keyup",this.handleKeyUp.bind(this)),this.view.renderStartScreen()}var t,n;return t=e,(n=[{key:"updateView",value:function(){var e=this.game.getState();e.isGameOver?this.view.renderGameOverScreen(e):this.isPlaying?this.view.renderMainScreen(e):this.view.renderPauseScreen()}},{key:"update",value:function(){this.game.moveTetrominoDown(),this.updateView()}},{key:"play",value:function(){this.isPlaying=!0,this.startTimer(),this.updateView()}},{key:"pause",value:function(){this.isPlaying=!1,this.stopTimer(),this.updateView()}},{key:"reset",value:function(){this.game.reset(),this.play()}},{key:"startTimer",value:function(){var e=this,t=1e3-100*this.game.getState().level;this.intervalId||(this.intervalId=setInterval((function(){return e.update()}),t>0?t:100))}},{key:"stopTimer",value:function(){this.intervalId&&(clearInterval(this.intervalId),this.intervalId=null)}},{key:"handleKeyDown",value:function(e){var t=this.game.getState();switch(e.key){case"ArrowLeft":this.isPlaying&&(this.game.moveTetrominoLeft(),this.updateView());break;case"ArrowUp":this.isPlaying&&(this.game.rotateMatrix(),this.updateView());break;case"ArrowRight":this.isPlaying&&(this.game.moveTetrominoRight(),this.updateView());break;case"ArrowDown":this.isPlaying&&(this.game.moveTetrominoDown(),this.updateView(),this.stopTimer());break;case"Enter":this.view.renderMainScreen(this.game.getState()),t.isGameOver?this.reset():this.isPlaying?this.pause():this.play()}}},{key:"handleKeyUp",value:function(e){"ArrowDown"===e.key&&this.isPlaying&&this.startTimer()}}])&&E(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),R=document.querySelector("#root"),z=new O(new w,new P(R,480,640,20,10));window.controller=z})()})();