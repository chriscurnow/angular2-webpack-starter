/*
* Kendo UI v2015.3.930 (http://www.telerik.com/kendo-ui)
* Copyright 2015 Telerik AD. All rights reserved.
*
* Kendo UI commercial licenses may be obtained at
* http://www.telerik.com/purchase/license-agreement/kendo-ui-complete
* If you do not own a commercial license, this file shall be governed by the trial license terms.
*/

!function(e,define){define(["./kendo.core.min","./kendo.webcomponents.min"],e)}(function(){return function(e,t){var n,i;t&&(n=this&&this.__decorate||function(e,t,n,i){if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)return Reflect.decorate(e,t,n,i);switch(arguments.length){case 2:return e.reduceRight(function(e,t){return t&&t(e)||e},t);case 3:return e.reduceRight(function(e,i){return void(i&&i(t,n))},void 0);case 4:return e.reduceRight(function(e,i){return i&&i(t,n,e)||e},i)}},i=this&&this.__metadata||function(e,t){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(e,t):void 0},t.register("kendo/angular2",["@angular/angular2"],function(t){var r,o;return{setters:[function(e){r=e}],execute:function(){o=function(){function t(e,t){var n=this;this.elementRef=t,this.onChange=function(){},this.onTouched=function(){},this.element=t.nativeElement,this.element.addEventListener("change",function(){n.onChange(n.element.value())}),this.element.addEventListener("spin",function(){n.onChange(n.element.value())}),e.valueAccessor=this,this.cd=e,e.valueAccessor=this}return t.prototype.writeValue=function(e){this.element.value(e)},t.prototype.registerOnChange=function(e){this.onChange=e},t.prototype.registerOnTouched=function(e){this.onTouched=e},t=n([r.Directive({selector:e.webComponents.join(",")}),i("design:paramtypes",[r.NgControl,r.ElementRef])],t)}(),t("KendoValueAccessor",o)}}}))}(window.kendo,window.System),window.kendo},"function"==typeof define&&define.amd?define:function(e,t){t()});

