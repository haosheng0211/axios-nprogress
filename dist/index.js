!function(e,o){if("object"==typeof exports&&"object"==typeof module)module.exports=o();else if("function"==typeof define&&define.amd)define([],o);else{var t=o();for(var r in t)("object"==typeof exports?exports:e)[r]=t[r]}}(self,(function(){return(()=>{"use strict";var e={d:(o,t)=>{for(var r in t)e.o(t,r)&&!e.o(o,r)&&Object.defineProperty(o,r,{enumerable:!0,get:t[r]})},o:(e,o)=>Object.prototype.hasOwnProperty.call(e,o),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},o={};e.r(o),e.d(o,{default:()=>t});const t=function(e,o){o.defaults.onUploadProgress=function(o){return e.inc(Math.floor(o.loaded)/o.total)},o.defaults.onDownloadProgress=function(o){return e.inc(Math.floor(o.loaded)/o.total)};var t=0;o.interceptors.request.use((function(o){return++t<=1&&e.start(),o})),o.interceptors.response.use((function(o){return--t<=0&&e.done(),o}),(function(o){return--t<=0&&e.done(),Promise.reject(o)}))};return o})()}));