"use strict";var precacheConfig=[["/Scrum-Developer/index.html","f9f7877a24c5a8074220bd5ce620ccae"],["/Scrum-Developer/static/css/main.5edcece9.css","f3c63b836e28c15bdc55a6f6cf904f4d"],["/Scrum-Developer/static/js/main.a77ca38b.js","2ae79d166396001f653e0dd48248aee5"],["/Scrum-Developer/static/media/2.eec0a579.jpg","eec0a579c687408125a8ecb51655a1a9"],["/Scrum-Developer/static/media/3.ca451df0.jpg","ca451df0d4ffe6a00b3eaf7b5d705567"],["/Scrum-Developer/static/media/Backlog.4b1af4fc.jpg","4b1af4fc34c2520e61c200a2b84750e4"],["/Scrum-Developer/static/media/DevTests.b054b9e0.jpg","b054b9e081e50c569c87d273f18b1f61"],["/Scrum-Developer/static/media/PO.cec380e4.jpg","cec380e444d558253416b853c675d3ff"],["/Scrum-Developer/static/media/SprintPlanning.961d5611.jpg","961d5611e9ca366d30557ab3233fad79"],["/Scrum-Developer/static/media/logo.5d5d9eef.svg","5d5d9eefa31e5e13a6610d9fa7a283bb"],["/Scrum-Developer/static/media/pictIv.04dbb7a6.jpg","04dbb7a69519da6a6210e9fd98d7b89b"],["/Scrum-Developer/static/media/sprintblog.08661af7.jpg","08661af7f6bfbb387bd65541b2038c06"],["/Scrum-Developer/static/media/unit1.d839684c.png","d839684cbbab9478c50b463aa1786c48"],["/Scrum-Developer/static/media/unit2.77bab674.png","77bab6743e9f8b9bffa88c12d63c05b5"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var r=new URL(e);return"/"===r.pathname.slice(-1)&&(r.pathname+=t),r.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,r,n){var a=new URL(e);return n&&a.pathname.match(n)||(a.search+=(a.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(r)),a.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var r=new URL(t).pathname;return e.some(function(e){return r.match(e)})},stripIgnoredUrlParameters=function(e,r){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return r.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],r=e[1],n=new URL(t,self.location),a=createCacheKey(n,hashParamName,r,/\.\w{8}\./);return[n.toString(),a]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(r){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!r.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var r=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!r.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,r=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(r))||(r=addDirectoryIndex(r,n),e=urlsToCacheKeys.has(r));var a="/Scrum-Developer/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(r=new URL(a,self.location).toString(),e=urlsToCacheKeys.has(r)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(r)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});