!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("dtree-table",[],t):"object"==typeof exports?exports["dtree-table"]=t():e["dtree-table"]=t()}("undefined"!=typeof self?self:this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=9)}([function(e,t){function n(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var i=r(o);return[n].concat(o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"})).concat([i]).join("\n")}return[n].join("\n")}function r(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r=n(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(e,t,n){function r(e){for(var t=0;t<e.length;t++){var n=e[t],r=d[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(i(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var a=[],o=0;o<n.parts.length;o++)a.push(i(n.parts[o]));d[n.id]={id:n.id,refs:1,parts:a}}}}function o(){var e=document.createElement("style");return e.type="text/css",u.appendChild(e),e}function i(e){var t,n,r=document.querySelector("style["+m+'~="'+e.id+'"]');if(r){if(h)return g;r.parentNode.removeChild(r)}if(y){var i=p++;r=f||(f=o()),t=a.bind(null,r,i,!1),n=a.bind(null,r,i,!0)}else r=o(),t=s.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}function a(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=b(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function s(e,t){var n=t.css,r=t.media,o=t.sourceMap;if(r&&e.setAttribute("media",r),v.ssrId&&e.setAttribute(m,t.id),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var l="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!l)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=n(13),d={},u=l&&(document.head||document.getElementsByTagName("head")[0]),f=null,p=0,h=!1,g=function(){},v=null,m="data-vue-ssr-id",y="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n,o){h=n,v=o||{};var i=c(e,t);return r(i),function(t){for(var n=[],o=0;o<i.length;o++){var a=i[o],s=d[a.id];s.refs--,n.push(s)}t?(i=c(e,t),r(i)):i=[];for(var o=0;o<n.length;o++){var s=n[o];if(0===s.refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete d[s.id]}}}};var b=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t,n,r,o,i){var a,s=e=e||{},l=typeof e.default;"object"!==l&&"function"!==l||(a=e,s=e.default);var c="function"==typeof s?s.options:s;t&&(c.render=t.render,c.staticRenderFns=t.staticRenderFns,c._compiled=!0),n&&(c.functional=!0),o&&(c._scopeId=o);var d;if(i?(d=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},c._ssrRegister=d):r&&(d=r),d){var u=c.functional,f=u?c.render:c.beforeCreate;u?(c._injectStyles=d,c.render=function(e,t){return d.call(t),f(e,t)}):c.beforeCreate=f?[].concat(f,d):[d]}return{esModule:a,exports:s,options:c}}},function(e,t,n){"use strict";var r=n(14),o=n(5),i=n(7),a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};document.body.ondrop=function(e){e.preventDefault(),e.stopPropagation()},t.a={name:"dragTreeTable",components:{row:r.a,column:o.a,space:i.a},props:{data:Object,onDrag:Function},data:function(){return{treeData:[],dragX:0,dragY:0,dragId:"",targetId:"",whereInsert:""}},methods:{getElementLeft:function(e){for(var t=e.offsetLeft,n=e.offsetParent;null!==n;)t+=n.offsetLeft,n=n.offsetParent;return t},getElementTop:function(e){for(var t=e.offsetTop,n=e.offsetParent;null!==n;)t+=n.offsetTop,n=n.offsetParent;return t},draging:function(e){e.pageX==this.dragX&&e.pageY==this.dragY||(this.dragX=e.pageX,this.dragY=e.pageY,this.filter(e.pageX,e.pageY))},drop:function(e){this.clearHoverStatus(),this.resetTreeData()},filter:function(e,t){var n=document.querySelectorAll(".tree-row");this.targetId=void 0;var r=this.getElementTop(dragParentNode),o=this.getElementLeft(dragParentNode),i=o+dragParentNode.clientWidth,a=r+dragParentNode.clientHeight;if(!(e>=o&&e<=i&&t>=r&&t<=a))for(var s=0;s<n.length;s++){var l=n[s],c=this.getElementLeft(l),d=this.getElementTop(l),u=l.clientWidth,f=l.clientHeight;if(e>c&&e<c+u&&t>d&&t<d+f){var p=t-d,h=l.children[l.children.length-1];h.style.display="block";var g=l.getAttribute("tree-id");this.targetId=g;var v="",m=document.getElementsByClassName("tree-row")[0].clientHeight;p/m>.75?("0.5"!==h.children[2].style.opacity&&(this.clearHoverStatus(),h.children[2].style.opacity=.5),v="bottom"):p/m>.25?("0.5"!==h.children[1].style.opacity&&(this.clearHoverStatus(),h.children[1].style.opacity=.5),v="center"):("0.5"!==h.children[0].style.opacity&&(this.clearHoverStatus(),h.children[0].style.opacity=.5),v="top"),this.whereInsert=v}}},clearHoverStatus:function(){for(var e=document.querySelectorAll(".tree-row"),t=0;t<e.length;t++){var n=e[t],r=n.children[n.children.length-1];r.style.display="none",r.children[0].style.opacity=.1,r.children[1].style.opacity=.1,r.children[2].style.opacity=.1}},resetTreeData:function(){function e(t,n){for(var o=0,i=0;i<t.length;i++){var a=t[i],s=r.deepClone(a);if(s.lists=[],r.targetId==a.id){var l=r.getCurDragItem(r.data.lists,window.dragId);"top"===r.whereInsert?(l.parent_id=a.parent_id,l.order=o,n.push(l),o+=1,s.order=o,n.push(s)):"center"===r.whereInsert?(l.parent_id=a.id,l.order=0,s.lists.push(l),n.push(s)):(o+=1,s.order=o,l.parent_id=a.parent_id,n.push(s),n.push(l))}else window.dragId!=a.id&&(s.order=o,n.push(s));o=n.length,a.lists&&a.lists.length&&e(a.lists,s.lists)}}if(void 0!==this.targetId){var t=[],n=this.data.lists,r=this;e(n,t),this.onDrag(t)}},deepClone:function(e){if(!e)return e;var t,n,r;t=Array.isArray(e)?[]:{};for(r in e)n=e[r],t[r]="object"===(void 0===n?"undefined":a(n))?this.deepClone(n):n;return t},getCurDragItem:function(e,t){function n(e){for(var o=0;o<e.length;o++){var i=e[o];if(i.id==t){r=JSON.parse(JSON.stringify(i));break}i.lists&&i.lists.length&&n(i.lists)}}var r=null;return n(e),r}}}},function(e,t,n){"use strict";var r=n(5),o=n(7);t.a={name:"row",props:["model","depth","columns"],data:function(){return{open:!1,visibility:"visible"}},components:{column:r.a,space:o.a},computed:{isFolder:function(){return this.model.lists&&this.model.lists.length}},methods:{toggle:function(){this.isFolder&&(this.model.open=!this.model.open)},dragstart:function(e){e.dataTransfer.setData("Text",this.id),window.dragId=e.target.children[0].getAttribute("tree-id"),window.dragParentNode=e.target,e.target.style.opacity=.2},dragend:function(e){e.target.style.opacity=1}},mounted:function(){}}},function(e,t,n){"use strict";function r(e){n(17)}var o=n(6),i=n(19),a=n(2),s=r,l=a(o.a,i.a,!1,s,null,null);t.a=l.exports},function(e,t,n){"use strict";t.a={name:"column",props:{width:Number,field:String,label:String},data:function(){return{open:!1}}}},function(e,t,n){"use strict";function r(e){n(20)}var o=n(8),i=n(22),a=n(2),s=r,l=a(o.a,i.a,!1,s,null,null);t.a=l.exports},function(e,t,n){"use strict";t.a={name:"space",props:["depth"],computed:{spaces:function(){for(var e=[],t=0;t<this.depth;t++)e.push("");return e}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(10);r.a.install=function(e){return e.component(r.a.name,r.a)},t.default=r.a},function(e,t,n){"use strict";function r(e){n(11)}var o=n(3),i=n(24),a=n(2),s=r,l=a(o.a,i.a,!1,s,null,null);t.a=l.exports},function(e,t,n){var r=n(12);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(1)("0bb9bf76",r,!0,{})},function(e,t,n){t=e.exports=n(0)(!1),t.push([e.i,".drag-tree-table{margin:20px 0;color:#606266;font-size:12px}.drag-tree-table-header{display:flex;padding:15px 10px;background:#f5f7fa;height:66px;line-height:36px;box-sizing:border-box;font-weight:600}.tree-icon-hidden{visibility:hidden}",""])},function(e,t){e.exports=function(e,t){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],a=i[0],s=i[1],l=i[2],c=i[3],d={id:e+":"+o,css:s,media:l,sourceMap:c};r[a]?r[a].parts.push(d):n.push(r[a]={id:a,parts:[d]})}return n}},function(e,t,n){"use strict";function r(e){n(15)}var o=n(4),i=n(23),a=n(2),s=r,l=a(o.a,i.a,!1,s,null,null);t.a=l.exports},function(e,t,n){var r=n(16);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(1)("2509168c",r,!0,{})},function(e,t,n){t=e.exports=n(0)(!1),t.push([e.i,'.tree-block{width:100%;background:hsla(0,0%,100%,.8)}.tree-row{position:relative;display:flex;padding:10px;border-bottom:1px solid #eee;line-height:32px}.tree-row:hover{background:#ecf5ff}.tree-row .align-left{text-align:left}.tree-row .align-right{text-align:right}.tree-row .align-center{text-align:center}.hover-model{position:absolute;top:0;left:0;width:100%;height:100%;background:hsla(0,0%,100%,.6)}.hover-block{display:flex;opacity:.1;transition:opacity .5s;justify-content:center;align-items:center}.hover-block i{color:#fff}.prev-block{height:25%;background:#a0c8f7}.center-block{height:50%;background:#a0c8f7}.next-block{height:25%;background:#a0c8f7}.action-item{color:#409eff;cursor:pointer}.action-item i{font-style:normal}.zip-icon{display:inline-block;width:8px;height:8px;vertical-align:middle;background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAf0lEQVQ4T7XT0Q2AMAhF0dvNdALdSEdzBB3BDXQD85LGRNMCauS7nAKBxMdIhfwemIAtYpeAEeiANoLUgAGYI4gFqAMX8QAXiQBCNFDNRBVdIgpUkSfADjT3KqLACmg/XrWw5J+Li+VVYCZrMBbgJluA+tXA3Hv45ZgiR3i+OQBeSyYRPEyeUAAAAABJRU5ErkJggg==") no-repeat 50%;background-size:cover}.arrow-transparent{visibility:hidden}.arrow-bottom{transform:rotate(90deg)}[draggable=true]{-khtml-user-drag:element}',""])},function(e,t,n){var r=n(18);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(1)("66045cda",r,!0,{})},function(e,t,n){t=e.exports=n(0)(!1),t.push([e.i,".tree-column{padding:0 4px;min-width:60px;text-align:center}",""])},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"tree-column",style:{width:e.width+"px"}},[e._t("default")],2)},o=[],i={render:r,staticRenderFns:o};t.a=i},function(e,t,n){var r=n(21);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(1)("7b2df35b",r,!0,{})},function(e,t,n){t=e.exports=n(0)(!1),t.push([e.i,".space{display:inline-block;width:30px}",""])},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"space-container"},e._l(e.spaces,function(e,t){return n("span",{key:t,staticClass:"space"})}))},o=[],i={render:r,staticRenderFns:o};t.a=i},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tree-block",attrs:{draggable:"true"},on:{dragstart:function(t){e.dragstart(t)},dragend:function(t){e.dragend(t)}}},[n("div",{staticClass:"tree-row",attrs:{"tree-id":e.model.id,"tree-p-id":e.model.parent_id},on:{click:e.toggle}},[e._l(e.columns,function(t,r){return n("column",{key:r,class:"align-"+t.align,attrs:{field:t.field,width:t.width}},["selection"===t.type?n("span",[n("space",{attrs:{depth:e.depth}}),e._v(" "),e.model.lists&&e.model.lists.length?n("span",{staticClass:"zip-icon",class:[e.model.open?"arrow-bottom":"arrow-right"]}):n("span",{staticClass:"zip-icon arrow-transparent"}),e._v(" "),t.formatter?n("span",{domProps:{innerHTML:e._s(t.formatter(e.model))}}):n("span",{domProps:{innerHTML:e._s(e.model[t.field])}})],1):"action"===t.type?n("span",e._l(t.actions,function(t,r){return n("a",{key:r,staticClass:"action-item",attrs:{type:"text",size:"small"},on:{click:function(n){n.stopPropagation(),n.preventDefault(),t.onclick(e.model)}}},[n("i",{class:t.icon,domProps:{innerHTML:e._s(t.formatter(e.model))}}),e._v(" \n                ")])})):n("span",[e._v("\n                "+e._s(e.model[t.field])+"\n            ")])])}),e._v(" "),e._m(0)],2),e._v(" "),e._l(e.model.lists,function(t,r){return e.isFolder?n("row",{directives:[{name:"show",rawName:"v-show",value:e.model.open,expression:"model.open"}],key:r,attrs:{model:t,columns:e.columns,depth:1*e.depth+1}}):e._e()})],2)},o=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hover-model",staticStyle:{display:"none"}},[n("div",{staticClass:"hover-block prev-block"},[n("i",{staticClass:"el-icon-caret-top"})]),e._v(" "),n("div",{staticClass:"hover-block center-block"},[n("i",{staticClass:"el-icon-caret-right"})]),e._v(" "),n("div",{staticClass:"hover-block next-block"},[n("i",{staticClass:"el-icon-caret-bottom"})])])}],i={render:r,staticRenderFns:o};t.a=i},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"drag-tree-table"},[n("div",{staticClass:"drag-tree-table-header"},e._l(e.data.columns,function(t,r){return n("column",{key:r,attrs:{width:t.width}},[e._v("\n        "+e._s(t.title)+"\n      ")])})),e._v(" "),n("div",{staticClass:"drag-tree-table-body",on:{dragover:e.draging,dragend:e.drop}},e._l(e.data.lists,function(t,r){return n("row",{key:r,attrs:{depth:"0",columns:e.data.columns,model:t}})}))])},o=[],i={render:r,staticRenderFns:o};t.a=i}])});
//# sourceMappingURL=dtree-table.js.map