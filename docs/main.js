(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+S6C":
/*!**************************************************!*\
  !*** ./src/app/views/decode/decode.component.ts ***!
  \**************************************************/
/*! exports provided: DecodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DecodeComponent", function() { return DecodeComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_vigenere_cipher_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/vigenere-cipher.service */ "UZws");
/* harmony import */ var _components_input_input_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/input/input.component */ "LRb0");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_output_output_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/output/output.component */ "vLAG");
/* harmony import */ var _components_visualization_visualization_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/visualization/visualization.component */ "st70");








function DecodeComponent_div_10_app_visualization_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-visualization", 12);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mode", true)("visualizationSteps", ctx_r1.visualizationSteps);
} }
function DecodeComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "app-output", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Decoded output ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Show visualization");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, DecodeComponent_div_10_app_visualization_9_Template, 1, 2, "app-visualization", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("output", ctx_r0.decodedText);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx_r0.visualizationControl);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.visualizationControl.value);
} }
class DecodeComponent {
    constructor(cipher) {
        this.cipher = cipher;
        this.encodedText = 'MO SRWM BJEHSO CNNGY CROLT';
        this.passwordKey = 'TAJNE';
        this.visualizationControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](false);
    }
    decode() {
        this.decodedText = this.cipher.decode(this.encodedText, 'TAJNE');
        this.visualizationSteps = this.cipher.getVisualizationSteps();
        console.log(this.visualizationSteps);
    }
}
DecodeComponent.ɵfac = function DecodeComponent_Factory(t) { return new (t || DecodeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_vigenere_cipher_service__WEBPACK_IMPORTED_MODULE_2__["VigenereCipherService"])); };
DecodeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DecodeComponent, selectors: [["app-decode"]], decls: 11, vars: 4, consts: [[1, "card", "mb-5"], [1, "card-body"], [3, "textInput", "textInputChange"], [3, "textInput", "removeWhitespaces", "textInputChange"], [1, "btn", "btn-primary", "mt-2", 3, "click"], ["class", "card mb-5", 4, "ngIf"], [1, "mb-5"], [3, "output"], [1, "custom-control", "custom-switch"], ["type", "checkbox", "id", "visualize", 1, "custom-control-input", 3, "formControl"], ["for", "visualize", 1, "custom-control-label"], [3, "mode", "visualizationSteps", 4, "ngIf"], [3, "mode", "visualizationSteps"]], template: function DecodeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Decode");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "app-input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("textInputChange", function DecodeComponent_Template_app_input_textInputChange_4_listener($event) { return ctx.encodedText = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Text to decode: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "app-input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("textInputChange", function DecodeComponent_Template_app_input_textInputChange_6_listener($event) { return ctx.passwordKey = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Password: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DecodeComponent_Template_button_click_8_listener() { return ctx.decode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Decode text ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, DecodeComponent_div_10_Template, 10, 3, "div", 5);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("textInput", ctx.encodedText);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("textInput", ctx.passwordKey)("removeWhitespaces", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.decodedText);
    } }, directives: [_components_input_input_component__WEBPACK_IMPORTED_MODULE_3__["InputComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _components_output_output_component__WEBPACK_IMPORTED_MODULE_5__["OutputComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlDirective"], _components_visualization_visualization_component__WEBPACK_IMPORTED_MODULE_6__["VisualizationComponent"]], encapsulation: 2 });


/***/ }),

/***/ "//Mq":
/*!****************************************************************!*\
  !*** ./src/app/views/documentation/documentation.component.ts ***!
  \****************************************************************/
/*! exports provided: DocumentationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentationComponent", function() { return DocumentationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class DocumentationComponent {
}
DocumentationComponent.ɵfac = function DocumentationComponent_Factory(t) { return new (t || DocumentationComponent)(); };
DocumentationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DocumentationComponent, selectors: [["app-documentation"]], decls: 2, vars: 0, template: function DocumentationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Documentation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/patrykmusial/projects/cipher/src/main.ts */"zUnb");


/***/ }),

/***/ "37sK":
/*!*************************************************************!*\
  !*** ./src/app/views/documentation/documentation.module.ts ***!
  \*************************************************************/
/*! exports provided: DocumentationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentationModule", function() { return DocumentationModule; });
/* harmony import */ var _documentation_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./documentation.component */ "//Mq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class DocumentationModule {
}
DocumentationModule.ɵfac = function DocumentationModule_Factory(t) { return new (t || DocumentationModule)(); };
DocumentationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: DocumentationModule });
DocumentationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({});
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DocumentationModule, { declarations: [_documentation_component__WEBPACK_IMPORTED_MODULE_0__["DocumentationComponent"]] }); })();


/***/ }),

/***/ "4feV":
/*!****************************!*\
  !*** ./src/main.module.ts ***!
  \****************************/
/*! exports provided: MainModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainModule", function() { return MainModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _main_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.component */ "WlLj");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _app_app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app-routing.module */ "vY5A");
/* harmony import */ var _app_views_views_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/views/views.module */ "xzpJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class MainModule {
}
MainModule.ɵfac = function MainModule_Factory(t) { return new (t || MainModule)(); };
MainModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: MainModule, bootstrap: [_main_component__WEBPACK_IMPORTED_MODULE_1__["MainComponent"]] });
MainModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _app_app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _app_views_views_module__WEBPACK_IMPORTED_MODULE_4__["ViewsModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](MainModule, { declarations: [_main_component__WEBPACK_IMPORTED_MODULE_1__["MainComponent"]], imports: [_app_app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _app_views_views_module__WEBPACK_IMPORTED_MODULE_4__["ViewsModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"]] }); })();


/***/ }),

/***/ "7l7w":
/*!*******************************************************!*\
  !*** ./src/app/components/matrix/matrix.component.ts ***!
  \*******************************************************/
/*! exports provided: MatrixComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatrixComponent", function() { return MatrixComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_vigenere_cipher_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/vigenere-cipher.service */ "UZws");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



const _c0 = function (a0, a1, a2, a3) { return [a0, a1, a2, a3]; };
function MatrixComponent_ng_container_3_th_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const char_r4 = ctx.$implicit;
    const index_r5 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](2, _c0, index_r5 === ctx_r2.inputCharIndex && !(index_r5 === ctx_r2.inputCharIndex && ctx_r2.keyCharIndex === 0) ? "bg-danger" : "", index_r5 === ctx_r2.keyCharIndex && ctx_r2.keyCharIndex === 0 && !(index_r5 === ctx_r2.inputCharIndex && ctx_r2.keyCharIndex === 0) ? "bg-danger" : "", ctx_r2.keyCharIndex === 0 && !(index_r5 === ctx_r2.inputCharIndex && ctx_r2.keyCharIndex === 0) ? "bg-info" : "", index_r5 === ctx_r2.inputCharIndex && ctx_r2.keyCharIndex === 0 ? "bg-success" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", char_r4, " ");
} }
const _c1 = function (a0, a1, a2, a3, a4) { return [a0, a1, a2, a3, a4]; };
function MatrixComponent_ng_container_3_ng_container_5_tr_1_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const char_r11 = ctx.$implicit;
    const firstChar_r12 = ctx.first;
    const charIndex_r13 = ctx.index;
    const index_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction5"](2, _c1, firstChar_r12 ? "font-weight-bold" : "", firstChar_r12 && index_r8 === ctx_r10.keyCharIndex ? "bg-danger" : "", ctx_r10.inputCharIndex === charIndex_r13 && !(ctx_r10.inputCharIndex === charIndex_r13 && ctx_r10.keyCharIndex === index_r8) ? "bg-info" : "", ctx_r10.keyCharIndex === index_r8 && !(ctx_r10.inputCharIndex === charIndex_r13 && ctx_r10.keyCharIndex === index_r8) ? "bg-info" : "", ctx_r10.inputCharIndex === charIndex_r13 && ctx_r10.keyCharIndex === index_r8 ? "bg-success" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", char_r11, " ");
} }
function MatrixComponent_ng_container_3_ng_container_5_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MatrixComponent_ng_container_3_ng_container_5_tr_1_td_1_Template, 2, 8, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const level_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", level_r6);
} }
function MatrixComponent_ng_container_3_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MatrixComponent_ng_container_3_ng_container_5_tr_1_Template, 2, 1, "tr", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const firstLevel_r7 = ctx.first;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !firstLevel_r7);
} }
function MatrixComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MatrixComponent_ng_container_3_th_3_Template, 2, 7, "th", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MatrixComponent_ng_container_3_ng_container_5_Template, 2, 1, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.matrix[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.matrix);
} }
const _c2 = function (a0, a1, a2) { return [a0, a1, a2]; };
function MatrixComponent_ng_container_4_th_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const char_r18 = ctx.$implicit;
    const index_r19 = ctx.index;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](2, _c2, index_r19 === ctx_r16.inputCharIndex ? "bg-success" : "", index_r19 === ctx_r16.keyCharIndex && ctx_r16.keyCharIndex === 0 && !(index_r19 === ctx_r16.inputCharIndex) ? "bg-danger" : "", ctx_r16.keyCharIndex === 0 && !(index_r19 === ctx_r16.inputCharIndex && ctx_r16.keyCharIndex === 0) ? "bg-info" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", char_r18, " ");
} }
function MatrixComponent_ng_container_4_ng_container_5_tr_1_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const char_r25 = ctx.$implicit;
    const firstChar_r26 = ctx.first;
    const charIndex_r27 = ctx.index;
    const index_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index;
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction5"](2, _c1, firstChar_r26 ? "font-weight-bold" : "", ctx_r24.inputCharIndex === charIndex_r27 && !(ctx_r24.inputCharIndex === charIndex_r27 && ctx_r24.keyCharIndex === index_r22) ? "bg-info" : "", ctx_r24.keyCharIndex === index_r22 && !(firstChar_r26 && index_r22 === ctx_r24.keyCharIndex) ? "bg-info" : "", ctx_r24.inputCharIndex === charIndex_r27 && ctx_r24.keyCharIndex === index_r22 ? "bg-danger" : "", firstChar_r26 && index_r22 === ctx_r24.keyCharIndex ? "bg-danger" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", char_r25, " ");
} }
function MatrixComponent_ng_container_4_ng_container_5_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MatrixComponent_ng_container_4_ng_container_5_tr_1_td_1_Template, 2, 8, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const level_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", level_r20);
} }
function MatrixComponent_ng_container_4_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MatrixComponent_ng_container_4_ng_container_5_tr_1_Template, 2, 1, "tr", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const firstLevel_r21 = ctx.first;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !firstLevel_r21);
} }
function MatrixComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MatrixComponent_ng_container_4_th_3_Template, 2, 6, "th", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MatrixComponent_ng_container_4_ng_container_5_Template, 2, 1, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.matrix[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.matrix);
} }
class MatrixComponent {
    constructor(cipher) {
        this.decodeMode = true;
        this.matrix = cipher.getMatrix();
    }
    ngOnChanges(changes) {
        if (changes.currentVisualizationStep) {
            this.updateCharIndex();
        }
    }
    updateCharIndex() {
        this.inputCharIndex = this.matrix[0].findIndex((char) => {
            return this.currentVisualizationStep.step.prevChar === char;
        });
        this.keyCharIndex = this.matrix.findIndex((level) => {
            return level[0] === this.currentVisualizationStep.step.keyChar;
        });
    }
}
MatrixComponent.ɵfac = function MatrixComponent_Factory(t) { return new (t || MatrixComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_vigenere_cipher_service__WEBPACK_IMPORTED_MODULE_1__["VigenereCipherService"])); };
MatrixComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatrixComponent, selectors: [["app-matrix"]], inputs: { currentVisualizationStep: "currentVisualizationStep", decodeMode: "decodeMode" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 5, vars: 3, consts: [[1, "my-2", "d-flex", "justify-content-center"], [1, "w-75", "table", "table-bordered", "table-sm", "table-striped"], [3, "ngSwitch"], [4, "ngSwitchCase"], ["class", "text-center", 3, "ngClass", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], [1, "text-center", 3, "ngClass"], [4, "ngIf"]], template: function MatrixComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](2, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MatrixComponent_ng_container_3_Template, 6, 2, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MatrixComponent_ng_container_4_Template, 6, 2, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.decodeMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", true);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hdHJpeC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQix3QkFBd0I7QUFDeEIsSUFBSTtBQUVKLFdBQVc7QUFDWCw0QkFBNEI7QUFDNUIsSUFBSSIsImZpbGUiOiJtYXRyaXguY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLmNoYXItY29udGFpbmVyIHsqL1xyXG4vKiAgdGV4dC1hbGlnbjogY2VudGVyOyovXHJcbi8qfSovXHJcblxyXG4vKi50YWJsZSB7Ki9cclxuLyogIHRyYW5zZm9ybTogc2NhbGUoMC43NSk7Ki9cclxuLyp9Ki9cclxuIl19 */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "LRb0":
/*!*****************************************************!*\
  !*** ./src/app/components/input/input.component.ts ***!
  \*****************************************************/
/*! exports provided: InputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputComponent", function() { return InputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");






const _c0 = ["*"];
class InputComponent {
    constructor() {
        this.removeWhitespaces = false;
        this.textInputChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    ngOnInit() {
        this.control.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$))
            .subscribe((value) => {
            this.textInputChange.emit(this.removeWhitespaces ? value.replace(/\s/g, '') : value);
        });
    }
    ngOnChanges(changes) {
        var _a;
        if ((_a = changes.textInput) === null || _a === void 0 ? void 0 : _a.currentValue) {
            this.control.setValue(this.textInput);
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
InputComponent.ɵfac = function InputComponent_Factory(t) { return new (t || InputComponent)(); };
InputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InputComponent, selectors: [["app-input"]], inputs: { removeWhitespaces: "removeWhitespaces", textInput: "textInput" }, outputs: { textInputChange: "textInputChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c0, decls: 5, vars: 1, consts: [[1, "form-group"], [1, "form-label"], ["placeholder", "Secret message", 1, "form-control", 3, "formControl"]], template: function InputComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "textarea", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.control);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"]], encapsulation: 2 });


/***/ }),

/***/ "RUEf":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: appRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony import */ var _views_encode_encode_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views/encode/encode.component */ "oox9");
/* harmony import */ var _views_decode_decode_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/decode/decode.component */ "+S6C");
/* harmony import */ var _views_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/documentation/documentation.component */ "//Mq");



const appRoutes = [
    { path: 'encode', component: _views_encode_encode_component__WEBPACK_IMPORTED_MODULE_0__["EncodeComponent"] },
    { path: 'decode', component: _views_decode_decode_component__WEBPACK_IMPORTED_MODULE_1__["DecodeComponent"] },
    { path: '', component: _views_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_2__["DocumentationComponent"], pathMatch: 'full' },
    { path: '**', redirectTo: '' },
];


/***/ }),

/***/ "UZws":
/*!*****************************************************!*\
  !*** ./src/app/services/vigenere-cipher.service.ts ***!
  \*****************************************************/
/*! exports provided: VigenereCipherService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VigenereCipherService", function() { return VigenereCipherService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class VigenereCipherService {
    constructor() {
        this.alphabet = Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
        this.visualizationSteps = [];
    }
    encode(value, key) {
        this.resetVisualizationSteps();
        if (!this.matrix) {
            this.matrix = this.computeMatrix();
        }
        key = this.transformKey(key, value.length);
        let keyIndex = 0;
        const encodedValueArray = Array.from(value).map((char) => {
            const encodedChar = this.encodeCharacter(char, key[keyIndex]);
            if (char !== ' ') {
                keyIndex++;
            }
            return encodedChar;
        });
        return encodedValueArray.join('');
    }
    decode(encodedValue, key) {
        this.resetVisualizationSteps();
        if (!this.matrix) {
            this.matrix = this.computeMatrix();
        }
        key = this.transformKey(key, encodedValue.length);
        let keyIndex = 0;
        const decodedValueArray = Array.from(encodedValue).map((char) => {
            const decodedChar = this.decodeCharacter(char, key[keyIndex]);
            if (char !== ' ') {
                keyIndex++;
            }
            return decodedChar;
        });
        return decodedValueArray.join('');
    }
    getAlphabet() {
        return this.alphabet.join(' ');
    }
    getVisualizationSteps() {
        return this.visualizationSteps;
    }
    /**
     * Add all characters from given string to alphabet.
     */
    widenAlphabet(charactersString) {
        this.alphabet.push(...Array.from(charactersString));
    }
    decodeCharacter(characterToDecode, passwordChar) {
        if (characterToDecode === ' ') {
            return characterToDecode;
        }
        const col = this.matrix[0].findIndex(char => char === passwordChar);
        const row = this.matrix.findIndex((char, index) => {
            return characterToDecode === this.matrix[index][col];
        });
        const decodedChar = this.matrix[row][0];
        this.registerStep(characterToDecode, decodedChar, passwordChar);
        return decodedChar;
    }
    encodeCharacter(characterToEncode, passwordChar) {
        if (characterToEncode === ' ') {
            return characterToEncode;
        }
        const characterToEncodeIndex = this.alphabet.findIndex(char => char === characterToEncode);
        const passwordCharIndex = this.alphabet.findIndex(char => char === passwordChar);
        const encodedChar = this.matrix[characterToEncodeIndex][passwordCharIndex];
        this.registerStep(characterToEncode, encodedChar, passwordChar);
        return encodedChar;
    }
    getMatrix() {
        return this.matrix ? this.matrix : this.computeMatrix();
    }
    computeMatrix() {
        return this.alphabet
            .map((char, index) => {
            return this.computeArrayLevel(index);
        });
    }
    computeArrayLevel(push) {
        const array = this.alphabet;
        const movedLevel = array.map((char, index) => {
            return array[index + push];
        });
        const firstEmptyItem = movedLevel.findIndex(value => typeof value === 'undefined');
        if (firstEmptyItem === -1) {
            return movedLevel;
        }
        for (let i = firstEmptyItem, j = 0; i < movedLevel.length; i++, j++) {
            movedLevel[i] = array[j];
        }
        return movedLevel;
    }
    transformKey(key, length) {
        let transformedKey = key.substr(0, length);
        let charIndex = 0;
        while (transformedKey.length < length) {
            if (key[charIndex]) {
                transformedKey += key[charIndex];
                charIndex++;
            }
            else {
                charIndex = 0;
            }
        }
        return transformedKey;
    }
    registerStep(prevChar, nextChar, keyChar) {
        this.visualizationSteps.push({
            id: this.visualizationSteps.length,
            prevChar,
            nextChar,
            keyChar
        });
    }
    resetVisualizationSteps() {
        this.visualizationSteps = [];
    }
}
VigenereCipherService.ɵfac = function VigenereCipherService_Factory(t) { return new (t || VigenereCipherService)(); };
VigenereCipherService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: VigenereCipherService, factory: VigenereCipherService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "WlLj":
/*!*******************************!*\
  !*** ./src/main.component.ts ***!
  \*******************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_vigenere_cipher_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/vigenere-cipher.service */ "UZws");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




const _c0 = function () { return { exact: true }; };
class MainComponent {
    constructor(cipher) {
        this.cipher = cipher;
        this.textToEncode = 'TO JEST BARDZO TAJNY TEKST';
    }
    encode() {
        this.encodedText = this.cipher.encode(this.textToEncode, 'TAJNE');
        this.visualizationSteps = this.cipher.getVisualizationSteps();
    }
    decode() {
        this.decodedText = this.cipher.decode(this.encodedText, 'TAJNE');
        this.visualizationSteps = this.cipher.getVisualizationSteps();
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_vigenere_cipher_service__WEBPACK_IMPORTED_MODULE_1__["VigenereCipherService"])); };
MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-root"]], decls: 14, vars: 2, consts: [[1, "mb-5"], [1, "navbar", "navbar-dark", "bg-dark", "navbar-expand"], [1, "navbar-nav", "container"], [1, "nav-item"], ["routerLink", "", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "encode", "routerLinkActive", "active", 1, "nav-link"], ["routerLink", "decode", "routerLinkActive", "active", 1, "nav-link"], [1, "container"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Documentation ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Encode ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Decode ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], encapsulation: 2 });


/***/ }),

/***/ "bRM/":
/*!***********************************************!*\
  !*** ./src/app/views/encode/encode.module.ts ***!
  \***********************************************/
/*! exports provided: EncodeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EncodeModule", function() { return EncodeModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _encode_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./encode.component */ "oox9");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class EncodeModule {
}
EncodeModule.ɵfac = function EncodeModule_Factory(t) { return new (t || EncodeModule)(); };
EncodeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: EncodeModule });
EncodeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_2__["ComponentsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](EncodeModule, { declarations: [_encode_component__WEBPACK_IMPORTED_MODULE_1__["EncodeComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _components_components_module__WEBPACK_IMPORTED_MODULE_2__["ComponentsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]] }); })();


/***/ }),

/***/ "j1ZV":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var _output_output_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./output/output.component */ "vLAG");
/* harmony import */ var _input_input_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input/input.component */ "LRb0");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _visualization_visualization_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./visualization/visualization.component */ "st70");
/* harmony import */ var _matrix_matrix_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./matrix/matrix.component */ "7l7w");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");








class ComponentsModule {
}
ComponentsModule.ɵfac = function ComponentsModule_Factory(t) { return new (t || ComponentsModule)(); };
ComponentsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: ComponentsModule });
ComponentsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](ComponentsModule, { declarations: [_output_output_component__WEBPACK_IMPORTED_MODULE_0__["OutputComponent"],
        _input_input_component__WEBPACK_IMPORTED_MODULE_1__["InputComponent"],
        _visualization_visualization_component__WEBPACK_IMPORTED_MODULE_4__["VisualizationComponent"],
        _matrix_matrix_component__WEBPACK_IMPORTED_MODULE_5__["MatrixComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]], exports: [_output_output_component__WEBPACK_IMPORTED_MODULE_0__["OutputComponent"],
        _input_input_component__WEBPACK_IMPORTED_MODULE_1__["InputComponent"],
        _visualization_visualization_component__WEBPACK_IMPORTED_MODULE_4__["VisualizationComponent"]] }); })();
_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetComponentScope"](_visualization_visualization_component__WEBPACK_IMPORTED_MODULE_4__["VisualizationComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _matrix_matrix_component__WEBPACK_IMPORTED_MODULE_5__["MatrixComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], []);


/***/ }),

/***/ "oox9":
/*!**************************************************!*\
  !*** ./src/app/views/encode/encode.component.ts ***!
  \**************************************************/
/*! exports provided: EncodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EncodeComponent", function() { return EncodeComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_vigenere_cipher_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/vigenere-cipher.service */ "UZws");
/* harmony import */ var _components_input_input_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/input/input.component */ "LRb0");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_output_output_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/output/output.component */ "vLAG");
/* harmony import */ var _components_visualization_visualization_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/visualization/visualization.component */ "st70");








function EncodeComponent_div_10_app_visualization_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-visualization", 12);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("visualizationSteps", ctx_r1.visualizationSteps);
} }
function EncodeComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "app-output", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Encoded output ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Show visualization");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, EncodeComponent_div_10_app_visualization_9_Template, 1, 1, "app-visualization", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("output", ctx_r0.encodedText);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx_r0.visualizationControl);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.visualizationControl.value);
} }
class EncodeComponent {
    constructor(cipher) {
        this.cipher = cipher;
        this.textToEncode = 'TO JEST BARDZO TAJNY TEKST';
        this.passwordKey = 'TAJNE';
        this.visualizationControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](false);
    }
    encode() {
        this.encodedText = this.cipher.encode(this.textToEncode, this.passwordKey);
        this.visualizationSteps = this.cipher.getVisualizationSteps();
        this.matrix = this.cipher.getMatrix();
    }
}
EncodeComponent.ɵfac = function EncodeComponent_Factory(t) { return new (t || EncodeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_vigenere_cipher_service__WEBPACK_IMPORTED_MODULE_2__["VigenereCipherService"])); };
EncodeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: EncodeComponent, selectors: [["app-encode"]], decls: 11, vars: 4, consts: [[1, "card", "mb-5"], [1, "card-body"], [3, "textInput", "textInputChange"], [3, "textInput", "removeWhitespaces", "textInputChange"], [1, "btn", "btn-primary", "mt-2", 3, "click"], ["class", "card mb-5", 4, "ngIf"], [1, "mb-5"], [3, "output"], [1, "custom-control", "custom-switch"], ["type", "checkbox", "id", "visualize", 1, "custom-control-input", 3, "formControl"], ["for", "visualize", 1, "custom-control-label"], ["header", "Encoding visualization", 3, "visualizationSteps", 4, "ngIf"], ["header", "Encoding visualization", 3, "visualizationSteps"]], template: function EncodeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Encode");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "app-input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("textInputChange", function EncodeComponent_Template_app_input_textInputChange_4_listener($event) { return ctx.textToEncode = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Text to encode: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "app-input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("textInputChange", function EncodeComponent_Template_app_input_textInputChange_6_listener($event) { return ctx.passwordKey = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Password: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EncodeComponent_Template_button_click_8_listener() { return ctx.encode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Encode text ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, EncodeComponent_div_10_Template, 10, 3, "div", 5);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("textInput", ctx.textToEncode);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("textInput", ctx.passwordKey)("removeWhitespaces", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.encodedText);
    } }, directives: [_components_input_input_component__WEBPACK_IMPORTED_MODULE_3__["InputComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _components_output_output_component__WEBPACK_IMPORTED_MODULE_5__["OutputComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlDirective"], _components_visualization_visualization_component__WEBPACK_IMPORTED_MODULE_6__["VisualizationComponent"]], encapsulation: 2 });


/***/ }),

/***/ "qXm2":
/*!***********************************************!*\
  !*** ./src/app/views/decode/decode.module.ts ***!
  \***********************************************/
/*! exports provided: DecodeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DecodeModule", function() { return DecodeModule; });
/* harmony import */ var _decode_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./decode.component */ "+S6C");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class DecodeModule {
}
DecodeModule.ɵfac = function DecodeModule_Factory(t) { return new (t || DecodeModule)(); };
DecodeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: DecodeModule });
DecodeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_2__["ComponentsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](DecodeModule, { declarations: [_decode_component__WEBPACK_IMPORTED_MODULE_0__["DecodeComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _components_components_module__WEBPACK_IMPORTED_MODULE_2__["ComponentsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]] }); })();


/***/ }),

/***/ "st70":
/*!*********************************************************************!*\
  !*** ./src/app/components/visualization/visualization.component.ts ***!
  \*********************************************************************/
/*! exports provided: VisualizationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisualizationComponent", function() { return VisualizationComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



function VisualizationComponent_div_0_button_11_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function VisualizationComponent_div_0_button_11_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r5.prev(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
const _c0 = function (a0, a1) { return { "btn-success": a0, "btn-dark": a1 }; };
const _c1 = function (a0, a1) { return { "fa-play": a0, "fa-pause": a1 }; };
function VisualizationComponent_div_0_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function VisualizationComponent_div_0_button_12_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r7.controlPlaying(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](2, _c0, !ctx_r2.currentlyPlaying, ctx_r2.currentlyPlaying));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](5, _c1, !ctx_r2.currentlyPlaying, ctx_r2.currentlyPlaying));
} }
function VisualizationComponent_div_0_button_13_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function VisualizationComponent_div_0_button_13_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r9.restart(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function VisualizationComponent_div_0_button_14_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function VisualizationComponent_div_0_button_14_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r11.next(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function VisualizationComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-matrix", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h3", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h3", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "i", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, VisualizationComponent_div_0_button_11_Template, 2, 0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, VisualizationComponent_div_0_button_12_Template, 2, 8, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, VisualizationComponent_div_0_button_13_Template, 2, 0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, VisualizationComponent_div_0_button_14_Template, 2, 0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("currentVisualizationStep", ctx_r0.currentStep)("decodeMode", ctx_r0.mode);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Key: ", ctx_r0.currentStep.step.keyChar, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.currentStep.step.prevChar, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.currentStep.step.nextChar, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.currentStep.index > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.currentStep.index !== ctx_r0.visualizationSteps.length - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.currentStep.index === ctx_r0.visualizationSteps.length - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.currentStep.index < ctx_r0.visualizationSteps.length - 1);
} }
class VisualizationComponent {
    constructor() {
        this.mode = false;
        this.currentlyPlaying = false;
        this.stopPlaying$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.sliderTimeout = 1000;
    }
    ngOnChanges(changes) {
        var _a, _b;
        if ((_b = (_a = changes.visualizationSteps) === null || _a === void 0 ? void 0 : _a.currentValue) === null || _b === void 0 ? void 0 : _b.length) {
            this.restart();
        }
    }
    ngOnDestroy() {
        this.stopPlaying$.next();
        this.stopPlaying$.complete();
    }
    prev() {
        const index = this.currentStep.index - 1;
        this.currentStep = {
            step: this.visualizationSteps[index],
            index
        };
    }
    controlPlaying() {
        if (this.currentlyPlaying) {
            this.currentlyPlaying = !this.currentlyPlaying;
            this.stopPlaying$.next();
            return;
        }
        this.currentlyPlaying = !this.currentlyPlaying;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["interval"])(this.sliderTimeout)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.stopPlaying$))
            .subscribe(() => {
            this.stopPlayingOnLastStep();
            this.next();
        });
    }
    next() {
        const index = this.currentStep.index + 1;
        if (index > this.visualizationSteps.length - 1) {
            return;
        }
        this.currentStep = {
            step: this.visualizationSteps[index],
            index
        };
    }
    restart() {
        this.currentStep = {
            step: this.visualizationSteps[0],
            index: 0
        };
    }
    stopPlayingOnLastStep() {
        if (this.currentStep.index < this.visualizationSteps.length - 2) {
            return;
        }
        this.currentlyPlaying = false;
        this.stopPlaying$.next();
    }
}
VisualizationComponent.ɵfac = function VisualizationComponent_Factory(t) { return new (t || VisualizationComponent)(); };
VisualizationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: VisualizationComponent, selectors: [["app-visualization"]], inputs: { mode: "mode", visualizationSteps: "visualizationSteps" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 1, consts: [[4, "ngIf"], [3, "currentVisualizationStep", "decodeMode"], [1, "text-center"], [1, "fas", "fa-arrow-right"], [1, "d-flex", "justify-content-center", "mt-3"], ["class", "btn btn-secondary mx-3", 3, "click", 4, "ngIf"], ["class", "btn btn-success mx-3", 3, "ngClass", "click", 4, "ngIf"], ["class", "btn btn-warning mx-3", 3, "click", 4, "ngIf"], [1, "btn", "btn-secondary", "mx-3", 3, "click"], [1, "fas", "fa-backward"], [1, "btn", "btn-success", "mx-3", 3, "ngClass", "click"], [1, "fas", 3, "ngClass"], [1, "btn", "btn-warning", "mx-3", 3, "click"], [1, "fas", "fa-undo"], [1, "fas", "fa-forward"]], template: function VisualizationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, VisualizationComponent_div_0_Template, 15, 9, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.visualizationSteps);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aXN1YWxpemF0aW9uLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "vLAG":
/*!*******************************************************!*\
  !*** ./src/app/components/output/output.component.ts ***!
  \*******************************************************/
/*! exports provided: OutputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutputComponent", function() { return OutputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

const _c0 = ["*"];
class OutputComponent {
}
OutputComponent.ɵfac = function OutputComponent_Factory(t) { return new (t || OutputComponent)(); };
OutputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OutputComponent, selectors: [["app-output"]], inputs: { output: "output" }, ngContentSelectors: _c0, decls: 6, vars: 1, consts: [[1, "form-group"], [1, "text-center", "mb-5"], [1, "form-floating"], ["id", "floatingTextarea", "disabled", "", 1, "form-control", 2, "height", "150px"]], template: function OutputComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "textarea", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.output);
    } }, encapsulation: 2 });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.routes */ "RUEf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_1__["appRoutes"]),
        ], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "xzpJ":
/*!***************************************!*\
  !*** ./src/app/views/views.module.ts ***!
  \***************************************/
/*! exports provided: ViewsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewsModule", function() { return ViewsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _encode_encode_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./encode/encode.module */ "bRM/");
/* harmony import */ var _decode_decode_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./decode/decode.module */ "qXm2");
/* harmony import */ var _documentation_documentation_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./documentation/documentation.module */ "37sK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class ViewsModule {
}
ViewsModule.ɵfac = function ViewsModule_Factory(t) { return new (t || ViewsModule)(); };
ViewsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: ViewsModule });
ViewsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _encode_encode_module__WEBPACK_IMPORTED_MODULE_1__["EncodeModule"],
            _decode_decode_module__WEBPACK_IMPORTED_MODULE_2__["DecodeModule"],
            _documentation_documentation_module__WEBPACK_IMPORTED_MODULE_3__["DocumentationModule"]
        ], _encode_encode_module__WEBPACK_IMPORTED_MODULE_1__["EncodeModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ViewsModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _encode_encode_module__WEBPACK_IMPORTED_MODULE_1__["EncodeModule"],
        _decode_decode_module__WEBPACK_IMPORTED_MODULE_2__["DecodeModule"],
        _documentation_documentation_module__WEBPACK_IMPORTED_MODULE_3__["DocumentationModule"]], exports: [_encode_encode_module__WEBPACK_IMPORTED_MODULE_1__["EncodeModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _main_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main.module */ "4feV");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_main_module__WEBPACK_IMPORTED_MODULE_2__["MainModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map