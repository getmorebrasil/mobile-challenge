/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
(function(namespace,resourcesUrl){"use strict";
(function(resourcesUrl){function configFromURL(){var t={};return window.location.search.slice(1).split("&").filter(function(t){return t.startsWith("ionic:")}).map(function(t){return t.split("=")}).forEach(function(e){t[e[0].slice(6)]=decodeURIComponent(e[1])}),t}function isIOS(t){return testUserAgent(t,/iPad|iPhone|iPod/i)}function testUserAgent(t,e){return e.test(t.navigator.userAgent)}var Config=function(){function t(t){this.m=new Map(Object.entries(t))}return t.prototype.get=function(t,e){var n=this.m.get(t);return void 0!==n?n:e},t.prototype.getBoolean=function(t,e){void 0===e&&(e=!1);var n=this.m.get(t);return void 0===n?e:"string"==typeof n?"true"===n:!!n},t.prototype.getNumber=function(t,e){var n=parseFloat(this.m.get(t));return isNaN(n)?void 0!==e?e:NaN:n},t.prototype.set=function(t,e){this.m.set(t,e)},t}(),Ionic=window.Ionic=window.Ionic||{};Object.defineProperty(Ionic,"queue",{get:function(){return Context.queue}});var config=Ionic.config=Context.config=new Config(Object.assign({},Ionic.config,configFromURL())),documentElement=document.documentElement,mode=config.get("mode",documentElement.getAttribute("mode")||(isIOS(window)?"ios":"md"));Ionic.mode=Context.mode=mode,config.set("mode",mode),documentElement.setAttribute("mode",Ionic.mode);
})(resourcesUrl);
})("Ionic");