!function(e){var n={};function o(t){if(n[t])return n[t].exports;var d=n[t]={i:t,l:!1,exports:{}};return e[t].call(d.exports,d,d.exports,o),d.l=!0,d.exports}o.m=e,o.c=n,o.d=function(e,n,t){o.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:t})},o.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},o.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.p="",o(o.s=90)}({4:function(e,n){e.exports=jQuery},90:function(e,n,o){(function(e,n){var o={init:function(){this.enter_key(),this.add_note(),this.remove_note()},enter_key:function(){e(document.body).on("keydown","#edd-note",function(n){13===n.keyCode&&(n.metaKey||n.ctrlKey)&&(n.preventDefault(),e("#edd-add-note").click())})},add_note:function(){e("#edd-add-note").on("click",function(n){n.preventDefault();var o=e(this),t=e("#edd-note"),d=e(".edd-notes"),i=e(".edd-no-notes"),r=e(".edd-add-note .spinner"),c={action:"edd_add_note",nonce:e("#edd_note_nonce").val(),object_id:o.data("object-id"),object_type:o.data("object-type"),note:t.val()};if(c.note)o.prop("disabled",!0),r.css("visibility","visible"),e.ajax({type:"POST",data:c,url:ajaxurl,success:function(e){var n=wpAjax.parseAjaxResponse(e);n=n.responses[0],d.append(n.data),i.hide(),o.prop("disabled",!1),r.css("visibility","hidden"),t.val("")}}).fail(function(e){window.console&&window.console.log&&console.log(e),o.prop("disabled",!1),r.css("visibility","hidden")});else{var a=t.css("border-color");t.css("border-color","red"),setTimeout(function(){t.css("border-color",a)},userInteractionInterval)}})},remove_note:function(){e(document.body).on("click",".edd-delete-note",function(n){n.preventDefault();var o=e(this),t=e(".edd-note"),d=o.parents(".edd-note"),i=e(".edd-no-notes"),r=e("#edd_note_nonce");if(confirm(edd_vars.delete_note)){var c={action:"edd_delete_note",nonce:r.val(),note_id:o.data("note-id")};return d.addClass("deleting"),e.ajax({type:"POST",data:c,url:ajaxurl,success:function(e){return"1"===e&&d.remove(),1===t.length&&i.show(),!1}}).fail(function(e){window.console&&window.console.log&&console.log(e),d.removeClass("deleting")}),!0}})}};n(document).ready(function(e){o.init()})}).call(this,o(4),o(4))}});