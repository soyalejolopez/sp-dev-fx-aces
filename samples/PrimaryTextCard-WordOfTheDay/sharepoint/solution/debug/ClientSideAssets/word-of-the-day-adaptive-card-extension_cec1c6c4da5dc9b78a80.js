define("bdbd9f08-6122-41b5-a368-9ef7bc31fadf_0.0.1",["@microsoft/sp-loader","@microsoft/sp-adaptive-card-extension-base","@microsoft/sp-http","WordOfTheDayAdaptiveCardExtensionStrings"],function(n,a,i,r){return function(e){function t(t){for(var n,i,r=t[0],o=t[1],s=0,c=[];s<r.length;s++)i=r[s],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&c.push(a[i][0]),a[i]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);for(d&&d(t);c.length;)c.shift()()}var n={},a={1:0};function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(t){for(var n=[],o=function(e){return{0:[{i:"f9e737b7-f0df-4597-ba8c-3060f82380db",v:"1.13.0",m:"26ea"}]}[e]||[]}(t),s=0;s<o.length;s++)e[o[s].m]||function(t){n.push(r.SPComponentLoader.loadComponentById(t.i,t.v).then(function(n){e[t.m]=function(e){e.exports=n}}))}(o[s]);var c=a[t];if(0!==c)if(c)n.push(c[2]);else{var d=new Promise(function(e,n){c=a[t]=[e,n]});n.push(c[2]=d);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=function(e){return i.p+"chunk."+({0:"WordOfTheDay-property-pane"}[e]||e)+"_"+{0:"9bae76d41022fa9be5b5"}[e]+".js"}(t),0!==u.src.indexOf(window.location.origin+"/")&&(u.crossOrigin="anonymous");var f=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(p);var n=a[t];if(0!==n){if(n){var i=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+i+": "+r+")",f.name="ChunkLoadError",f.type=i,f.request=r,n[1](f)}a[t]=void 0}};var p=setTimeout(function(){l({type:"timeout",target:u})},12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(n)},i.m=e,i.c=n,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var r=i("I6O9");i.oe=function(e){throw console.error(e),e};var o=window.webpackJsonpbdbd9f08_6122_41b5_a368_9ef7bc31fadf_0_0_1=window.webpackJsonpbdbd9f08_6122_41b5_a368_9ef7bc31fadf_0_0_1||[],s=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var d=s;return function(){var e,t=document.getElementsByTagName("script"),n=/word-of-the-day-adaptive-card-extension_cec1c6c4da5dc9b78a80\.js/i;if(t&&t.length)for(var a=0;a<t.length;a++)if(t[a]){var r=t[a].getAttribute("src");if(r&&r.match(n)){e=r.substring(0,r.lastIndexOf("/")+1);break}}if(!e)for(var o in window.__setWebpackPublicPathLoaderSrcRegistry__)if(o&&o.match(n)){e=o.substring(0,o.lastIndexOf("/")+1);break}i.p=e}(),i(i.s="kv/E")}({"4nJu":function(e){e.exports=JSON.parse('{"type":"AdaptiveCard","$schema":"http://adaptivecards.io/schemas/adaptive-card.json","version":"1.3","body":[{"type":"Container","items":[{"type":"TextBlock","wrap":true,"text":"${sentenceCase(wordOfTheDay.word)}","horizontalAlignment":"Center","size":"Large","weight":"Bolder"}]},{"type":"Container"},{"type":"Container","items":[{"type":"TextBlock","text":"Definitions","weight":"Bolder"},{"type":"Container","$data":"${wordOfTheDay.definitions}","items":[{"type":"Container","items":[{"type":"TextBlock","text":"${partOfSpeech}","wrap":true,"weight":"Lighter"},{"type":"TextBlock","text":"${text}","wrap":true},{"type":"Container"}]}]}]},{"type":"Container","items":[{"type":"TextBlock","text":"Examples","weight":"Bolder"},{"type":"Container","$data":"${wordOfTheDay.examples}","items":[{"type":"Container","items":[{"type":"TextBlock","text":"\\"${text}\\"","wrap":true},{"type":"TextBlock","text":"${title}","wrap":true,"weight":"Lighter"},{"type":"Container"}]}]},{"type":"Container","$when":"${count(wordOfTheDay.note) > 0}","items":[{"type":"TextBlock","text":"Notes","weight":"Bolder"},{"type":"TextBlock","text":"${wordOfTheDay.note}","wrap":true}]}]}]}')},I6O9:function(e,t){e.exports=n},"kv/E":function(e,t,n){"use strict";n.r(t),n.d(t,"QUICK_VIEW_REGISTRY_ID",function(){return _});var a,i=n("lz/E"),r=n("xSlp"),o=(a=function(e,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),s=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o(t,e),Object.defineProperty(t.prototype,"cardButtons",{get:function(){var e=[];return this.state.wordOfTheDay&&e.push({title:r.QuickViewButton,action:{type:"QuickView",parameters:{view:_}}}),e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"data",{get:function(){var e=r.Loading,t=r.Loading;return this.state.wordOfTheDay?(e=(e=this.state.wordOfTheDay.word)[0].toUpperCase()+e.slice(1),t=this.state.wordOfTheDay.note&&this.state.wordOfTheDay.note.length&&"Large"==this.cardSize?""+this.state.wordOfTheDay.note:r.Definitions+" "+this.state.wordOfTheDay.definitions.length+"\n\r"+r.Examples+" "+this.state.wordOfTheDay.examples.length):this.state.isError&&(e=r.ErrorTitle,t=this.properties.apiKey&&this.properties.apiKey.length>0?r.ErrorGenericDescription:r.ErrorMissingAPIKeyDescription),{primaryText:e,description:t}},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"onCardSelection",{get:function(){return{type:"ExternalLink",parameters:{target:"https://www.wordnik.com/word-of-the-day"}}},enumerable:!1,configurable:!0}),t}(i.BasePrimaryTextCardView),c=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function a(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(a.prototype=n.prototype,new a)}}(),d=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return c(t,e),Object.defineProperty(t.prototype,"data",{get:function(){return{subTitle:r.SubTitle,title:r.Title,wordOfTheDay:this.state.wordOfTheDay,isError:this.state.isError}},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"template",{get:function(){return n("4nJu")},enumerable:!1,configurable:!0}),t}(i.BaseAdaptiveCardView),l=n("vlQI"),u=function(){function e(){}return e.WordOfTheDaySample=function(){return{_id:"624e2cab7499590939414867",word:"juratory",contentProvider:{name:"wordnik",id:711},definitions:[{source:"century",text:"Of, pertaining to, or comprising an oath.",note:null,partOfSpeech:"adjective"}],publishDate:"2022-04-08T03:00:00.000Z",examples:[{url:"http://www.gutenberg.org/dirs/1/6/5/0/16501/16501-8.txt",title:"The Philippine Islands, 1493-1803",text:"If he should not be sent as prisoner, it will not be right to do so until his offense be investigated here; accordingly the commissary may discharge him under bail or under juratory security.",id:1173491219},{url:"http://www.gutenberg.org/dirs/1/8/7/0/18705/18705-8.txt",title:"The Poor Plutocrats",text:"Either he must confess that he was personally interested in the matter and then he would not be required to swear but would at the same time make himself an object of suspicion, or else he must go on paying this infernal toll money in order to be able to cross the non-juratory bridge, so to speak.",id:1182310899}],pdd:"2022-04-08",note:"The word 'juratory' comes from a Latin word meaning 'swear'.",htmlExtra:null}},e}(),f=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function a(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(a.prototype=n.prototype,new a)}}(),p=function(e,t,n,a){return new(n||(n=Promise))(function(i,r){function o(e){try{c(a.next(e))}catch(e){r(e)}}function s(e){try{c(a.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(o,s)}c((a=a.apply(e,t||[])).next())})},m=function(e,t){var n,a,i,r,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function s(r){return function(s){return function(r){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,a&&(i=2&r[0]?a.return:r[0]?a.throw||((i=a.return)&&i.call(a),0):a.next)&&!(i=i.call(a,r[1])).done)return i;switch(a=0,i&&(r=[2&r[0],i.value]),r[0]){case 0:case 1:i=r;break;case 4:return o.label++,{value:r[1],done:!1};case 5:o.label++,a=r[1],r=[0];continue;case 7:r=o.ops.pop(),o.trys.pop();continue;default:if(!((i=(i=o.trys).length>0&&i[i.length-1])||6!==r[0]&&2!==r[0])){o=0;continue}if(3===r[0]&&(!i||r[1]>i[0]&&r[1]<i[3])){o.label=r[1];break}if(6===r[0]&&o.label<i[1]){o.label=i[1],i=r;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(r);break}i[2]&&o.ops.pop(),o.trys.pop();continue}r=t.call(e,o)}catch(e){r=[6,e],a=0}finally{n=i=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,s])}}},_="WordOfTheDay_QUICK_VIEW",h=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return f(t,e),t.prototype.onInit=function(){var e=this;return this.state={wordOfTheDay:void 0,isError:!1},this.cardNavigator.register("WordOfTheDay_CARD_VIEW",function(){return new s}),this.quickViewNavigator.register(_,function(){return new d}),setTimeout(function(){return p(e,void 0,void 0,function(){return m(this,function(e){switch(e.label){case 0:return[4,this.loadWordOfTheDay()];case 1:return e.sent(),[2]}})})},500),Promise.resolve()},t.prototype.loadWordOfTheDay=function(){return p(this,void 0,void 0,function(){var e,t;return m(this,function(n){switch(n.label){case 0:return null!=this.properties.useSampleData&&0!=this.properties.useSampleData||null!=this.properties.apiKey&&0!=this.properties.apiKey.length?(null==this.properties.useSampleData||0==this.properties.useSampleData)&&this.properties.apiKey&&this.properties.apiKey.length>0?[4,this.context.httpClient.get("https://api.wordnik.com/v4/words.json/wordOfTheDay?api_key="+this.properties.apiKey,l.HttpClient.configurations.v1)]:[3,4]:(this.setState({wordOfTheDay:void 0,isError:!0}),[2]);case 1:return e=n.sent(),t=void 0,e.ok?[4,e.json()]:[3,3];case 2:t=n.sent(),n.label=3;case 3:return t?(this.setState({wordOfTheDay:t}),[3,5]):(this.setState({wordOfTheDay:void 0,isError:!0}),[2]);case 4:1==this.properties.useSampleData&&this.setState({wordOfTheDay:u.WordOfTheDaySample()}),n.label=5;case 5:return[2]}})})},Object.defineProperty(t.prototype,"title",{get:function(){return this.properties.title},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"iconProperty",{get:function(){return"PlainText"},enumerable:!1,configurable:!0}),t.prototype.loadPropertyPaneResources=function(){var e=this;return n.e(0).then(n.bind(null,"4ZrM")).then(function(t){e._deferredPropertyPane=new t.WordOfTheDayPropertyPane})},t.prototype.onPropertyPaneFieldChanged=function(e,t,n){t!=n&&("useSampleData"!=e&&"apiKey"!=e||this.loadWordOfTheDay())},t.prototype.renderCard=function(){return"WordOfTheDay_CARD_VIEW"},t.prototype.getPropertyPaneConfiguration=function(){return this._deferredPropertyPane.getPropertyPaneConfiguration()},t}(i.BaseAdaptiveCardExtension);t.default=h},"lz/E":function(e,t){e.exports=a},vlQI:function(e,t){e.exports=i},xSlp:function(e,t){e.exports=r}})});