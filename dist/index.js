!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/Users/a.panichkina/shri-18-flux-framework",n(n.s=0)}([function(t,e,n){"use strict";function r(t,e){return e?{type:t,payload:e}:{type:t}}n.r(e);var o=function(){return(o=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},i=function(){function t(t,e,n,r){var i=this;this.store={},this.setInitialStore(t),this.setReducers(e),n.add(function(t){i.updateStore(t),r.emit("storeUpdate",{type:t.type,store:o({},i.store)})})}return t.prototype.setInitialStore=function(t){this.store=t},t.prototype.setReducers=function(t){this.reducers=t},t.prototype.getStore=function(t){return this.store[t]},t.prototype.updateStore=function(t){this.store=this.reducers(this.store,t)},t}(),s=function(){function t(){if(t.instance)throw new Error("Error: Instantiation failed: Use Dispatcher.getInstance() instead of new.");t.instance=this,this.callbacks=[]}return t.getInstance=function(){return t.instance},t.prototype.add=function(t){this.callbacks.push(t)},t.prototype.dispatch=function(t){this.callbacks.forEach(function(e){e(t)})},t.instance=new t,t}(),u=function(){function t(){this.listeners={}}return t.prototype.on=function(t,e){var n=this;this.listeners[t]||(this.listeners[t]=[]),this.listeners[t].push(e);var r=this.listeners[t].length-1;return function(){n.unsubscribe(t,r)}},t.prototype.unsubscribe=function(t,e){this.listeners[t].splice(e,1)},t.prototype.emit=function(t,e){this.listeners[t].forEach(function(t){t(e)})},t}(),c=function(){return(c=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};document.addEventListener("DOMContentLoaded",function(){var t=new u,e=s.getInstance(),n=new i({name:"Anna"},function(t,e){switch(e.type){case"newPerson":return c({},t,{name:e.payload.name,age:22});default:return t}},e,t);console.log("class initial: ",n.getStore("name"));var o=r("newPerson",{name:"Oleg"}),a=r("newPerson",{name:"Anna"}),f=document.getElementById("root");if(f){t.on("storeUpdate",function(t){switch(t.type){case"newPerson":!function(t,e){f.innerText=t+" "+e}(t.store.name,t.store.age)}}),setTimeout(function(){e.dispatch(o)},3e3),setTimeout(function(){e.dispatch(a)},4e3)}})}]);