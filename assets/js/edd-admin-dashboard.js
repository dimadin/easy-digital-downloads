!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=98)}({4:function(e,t){e.exports=jQuery},98:function(e,t,n){(function(e){e(document).ready(function(e){e("#edd_dashboard_sales").length&&e.ajax({type:"GET",data:{action:"edd_load_dashboard_widget"},url:ajaxurl,success:function(t){e("#edd_dashboard_sales .inside").html(t)}})})}).call(this,n(4))}});