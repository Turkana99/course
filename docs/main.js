"use strict";
(self["webpackChunkcourse"] = self["webpackChunkcourse"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ 5067);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [{
  path: 'home',
  component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
}, {
  path: '',
  redirectTo: '/home',
  pathMatch: 'full'
}];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header/header.component */ 3482);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer/footer.component */ 970);




class AppComponent {
  constructor() {
    this.title = 'course';
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)();
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 3,
  vars: 0,
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-header")(1, "router-outlet")(2, "app-footer");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.component */ 3482);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ 970);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ 5067);
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./material.module */ 3806);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);









class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule, _material_module__WEBPACK_IMPORTED_MODULE_5__.MaterialModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _home_home_component__WEBPACK_IMPORTED_MODULE_4__.HomeComponent, _header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule, _material_module__WEBPACK_IMPORTED_MODULE_5__.MaterialModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule]
  });
})();

/***/ }),

/***/ 970:
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class FooterComponent {}
FooterComponent.ɵfac = function FooterComponent_Factory(t) {
  return new (t || FooterComponent)();
};
FooterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: FooterComponent,
  selectors: [["app-footer"]],
  decls: 25,
  vars: 0,
  consts: [[1, "d-flex", "flex-wrap", "justify-content-between", "align-items-center", "py-3", "my-4", "border-top"], [1, "col-md-4", "mb-0", "text-muted", "ps-5"], ["href", "/", 1, "col-md-4", "d-flex", "align-items-center", "justify-content-center", "mb-3", "mb-md-0", "me-md-auto", "link-dark", "text-decoration-none"], [1, "fs-4", "frs_title"], [1, "scd_title"], [1, "fa-solid", "fa-user-graduate"], [1, "nav", "col-md-4", "justify-content-end", "pe-5"], [1, "nav-item"], ["href", "#", 1, "nav-link", "px-2", "text-muted"]],
  template: function FooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0)(1, "p", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00A9 2022 Company, Inc");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2)(4, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "TM ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " COURSE");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 6)(10, "li", 7)(11, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Home");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 7)(14, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Features");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 7)(17, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Pricing");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 7)(20, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "FAQs");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 7)(23, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "About");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    }
  },
  styles: [".frs_title[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 30px !important;\n  color: #fdc632 !important;\n  font-weight: bold;\n}\n\n.scd_title[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 30px;\n  color: #002347 !important;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlDQUFBO0VBQ0EsMEJBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuZnJzX3RpdGxlIHtcclxuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDMwcHggIWltcG9ydGFudDtcclxuICBjb2xvcjogI2ZkYzYzMiAhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uc2NkX3RpdGxlIHtcclxuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgY29sb3I6ICMwMDIzNDcgIWltcG9ydGFudDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 3482:
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


const _c0 = function () {
  return {
    exact: true
  };
};
class HeaderComponent {
  constructor(router, route) {
    this.router = router;
    this.route = route;
  }
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
      console.log(params);
    });
  }
  onWindowScroll() {
    let element = document.querySelector('.my_navbar');
    console.log(element.clientHeight);
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('navbar-inverse');
    } else {
      element.classList.remove('navbar-inverse');
    }
  }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
  return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.ActivatedRoute));
};
HeaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: HeaderComponent,
  selectors: [["app-header"]],
  hostBindings: function HeaderComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function HeaderComponent_scroll_HostBindingHandler() {
        return ctx.onWindowScroll();
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    }
  },
  decls: 32,
  vars: 12,
  consts: [[1, "my_navbar", "w-100", 3, "scroll"], [1, "scd_header", "py-3", "mb-4"], [1, "container", "d-flex", "flex-wrap", "justify-content-between"], [1, "pt-2"], ["href", "/", 1, "d-flex", "align-items-center", "mb-3", "mb-lg-0", "me-lg-auto", "text-decoration-none"], ["width", "40", "height", "32", 1, "bi", "me-2"], [0, "xlink", "href", "#bootstrap"], [1, "fs-4", "frs_title"], [1, "scd_title"], [1, "fa-solid", "fa-user-graduate"], [1, "nav", "me-auto", "pt-1"], [1, "nav-item"], ["routerLink", "home", "routerLinkActive", "router-link-active", 1, "nav-link", "px-2", 3, "routerLinkActiveOptions"], ["routerLink", "", "routerLinkActive", "router-link-active", 1, "nav-link", "px-2", 3, "routerLinkActiveOptions"], ["routerLink", "blog", "routerLinkActive", "router-link-active", 1, "nav-link", "px-2", 3, "routerLinkActiveOptions"], ["routerLink", "contact", "routerLinkActive", "router-link-active", 1, "nav-link", "px-2", 3, "routerLinkActiveOptions"]],
  template: function HeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function HeaderComponent_Template_div_scroll_0_listener() {
        return ctx.onWindowScroll();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header", 1)(2, "div", 2)(3, "div", 3)(4, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "svg", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "use", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "TM ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " COURSE");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3)(13, "ul", 10)(14, "li", 11)(15, "a", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "HOME");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 11)(18, "a", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "ABOUT");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 11)(21, "a", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "CATEGORIES");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 11)(24, "a", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "OUR TEACHER");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 11)(27, "a", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "BLOG");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li", 11)(30, "a", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "CONTACT");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c0));
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkActive],
  styles: [".my_navbar[_ngcontent-%COMP%] {\n  position: fixed !important;\n  z-index: 1000;\n  padding: 0px !important;\n}\n\n.router-link-active[_ngcontent-%COMP%] {\n  color: #fdc632 !important;\n  font-weight: bold !important;\n}\n\nul[_ngcontent-%COMP%] {\n  list-style-type: none !important;\n  padding: 0px !important;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 3px 2px;\n  color: #002347 !important;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  padding: 0px 5px !important;\n}\n\n.my_info[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(odd), .work_info[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  color: #b8aca2 !important;\n}\n\n\n.scd_header[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: black;\n  width: 100%;\n  margin: auto;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #002347;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 400;\n  font-size: 16px;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #fdc632;\n}\n\n.frs_title[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 30px !important;\n  color: #fdc632 !important;\n  font-weight: bold;\n}\n\n.scd_title[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 30px;\n  color: #002347 !important;\n  font-weight: bold;\n}\n\n.navbar-inverse[_ngcontent-%COMP%]   .scd_header[_ngcontent-%COMP%] {\n  width: 100% !important;\n  background-color: white !important;\n  transition: 0.4s;\n  padding: 15px 0px !important;\n  box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDBCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSx5QkFBQTtFQUNBLDRCQUFBO0FBRUY7O0FBQ0E7RUFDRSxnQ0FBQTtFQUNBLHVCQUFBO0FBRUY7O0FBQUE7RUFDRSxnQkFBQTtFQUNBLHlCQUFBO0FBR0Y7O0FBREE7RUFDRSwyQkFBQTtBQUlGOztBQUZBOztFQUVFLHlCQUFBO0FBS0Y7O0FBRkEsY0FBQTtBQUNBO0VBQ0UsNkJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFLRjs7QUFGQTtFQUNFLGNBQUE7RUFDQSxpQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUtGOztBQUhBO0VBQ0UsY0FBQTtBQU1GOztBQUpBO0VBQ0UsaUNBQUE7RUFDQSwwQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QUFPRjs7QUFKQTtFQUNFLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QUFPRjs7QUFIRTtFQUNFLHNCQUFBO0VBQ0Esa0NBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0Esd0ZBQUE7QUFNSiIsInNvdXJjZXNDb250ZW50IjpbIi5teV9uYXZiYXIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xyXG4gIHotaW5kZXg6IDEwMDA7XHJcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLnJvdXRlci1saW5rLWFjdGl2ZSB7XHJcbiAgY29sb3I6ICNmZGM2MzIgIWltcG9ydGFudDtcclxuICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG51bCB7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxudWwgbGkge1xyXG4gIHBhZGRpbmc6IDNweCAycHg7XHJcbiAgY29sb3I6ICMwMDIzNDcgIWltcG9ydGFudDtcclxufVxyXG51bCBsaSBpIHtcclxuICBwYWRkaW5nOiAwcHggNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm15X2luZm8gbGk6bnRoLWNoaWxkKG9kZCksXHJcbi53b3JrX2luZm8gbGkge1xyXG4gIGNvbG9yOiAjYjhhY2EyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qbWFpbiBoZWFkZXIqL1xyXG4uc2NkX2hlYWRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxudWwgbGkgYSB7XHJcbiAgY29sb3I6ICMwMDIzNDc7XHJcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxudWwgbGkgYTpob3ZlciB7XHJcbiAgY29sb3I6ICNmZGM2MzI7XHJcbn1cclxuLmZyc190aXRsZSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICNmZGM2MzIgIWltcG9ydGFudDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLnNjZF90aXRsZSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGNvbG9yOiAjMDAyMzQ3ICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5uYXZiYXItaW52ZXJzZSB7XHJcbiAgLnNjZF9oZWFkZXIge1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjRzO1xyXG4gICAgcGFkZGluZzogMTVweCAwcHggIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IHJnYmEoNTAsIDUwLCAxMDUsIDAuMTUpIDBweCAycHggNXB4IDBweCwgcmdiYSgwLCAwLCAwLCAwLjA1KSAwcHggMXB4IDFweCAwcHg7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 5067:
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 1484);



const _c0 = ["curvedLinesDiv"];
class HomeComponent {
  constructor(http, dialog, cdr) {
    this.http = http;
    this.dialog = dialog;
    this.cdr = cdr;
    this.images = [{
      id: 1,
      path: '../../../../assets/images/1.png',
      width: 100,
      height: 100,
      top: 0,
      left: 0,
      backgroundColor: '#B2E2C6',
      lineFrom: '',
      lineTo: '',
      curve: '',
      linePath: ''
    }, {
      id: 2,
      path: '../../../../assets/images/2.png',
      width: 100,
      height: 100,
      top: 0,
      left: 0,
      backgroundColor: '#FFEDB5',
      lineFrom: '',
      lineTo: '',
      curve: '',
      linePath: ''
    }, {
      id: 3,
      path: '../../../../assets/images/3.png',
      width: 100,
      height: 100,
      top: 0,
      left: 0,
      backgroundColor: '#FDCCC4',
      lineFrom: '',
      lineTo: '',
      curve: '',
      linePath: ''
    }, {
      id: 4,
      path: '../../../../assets/images/4.png',
      width: 100,
      height: 100,
      top: 0,
      left: 0,
      backgroundColor: '#C6CAF9',
      lineFrom: '',
      lineTo: '',
      curve: '',
      linePath: ''
    }];
    this.lines = [];
  }
  ngOnInit() {
    throw new Error('Method not implemented.');
  }
  ngAfterViewInit() {
    this.cdr.detectChanges();
  }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) {
  return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
};
HomeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: HomeComponent,
  selectors: [["app-home"]],
  viewQuery: function HomeComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.images = _t.first);
    }
  },
  decls: 413,
  vars: 0,
  consts: [[1, "container-fluid", "w-100", "mx-0", "px-0", "main", "jumbotron", "my_tex"], [1, "d-flex", "flex-column", "justify-content-center", "my_text"], [1, "fas", "fa-play"], [1, "container-fluid", "w-100", "difference", "pt-5", "pb-5"], [1, "row", "pt-5", "pb-5", "mb-5"], [1, "col-lg-3"], ["src", "assets/images/1.png", "alt", ""], ["src", "assets/images/2.png", "alt", ""], ["src", "assets/images/3.png", "alt", ""], ["src", "assets/images/4.png", "alt", ""], [1, "container-fluid", "w-100", "history", "pt-5"], [1, "row", "pb-5"], [1, "col-lg-6"], [1, "history_text", "ps-5", "pe-5"], [1, "history_carousel"], ["id", "carouselExampleIndicators", "data-bs-ride", "carousel", 1, "carousel", "slide"], [1, "carousel-indicators"], ["type", "button", "data-bs-target", "#carouselExampleIndicators", "data-bs-slide-to", "0", "aria-current", "true", "aria-label", "Slide 1", 1, "active"], ["type", "button", "data-bs-target", "#carouselExampleIndicators", "data-bs-slide-to", "1", "aria-label", "Slide 2"], ["type", "button", "data-bs-target", "#carouselExampleIndicators", "data-bs-slide-to", "2", "aria-label", "Slide 3"], [1, "carousel-inner"], [1, "carousel-item", "active"], ["src", "assets/images/n2.jpg", "alt", "...", 1, "d-block", "w-100"], [1, "carousel-item"], ["src", "assets/images/n6.jpg", "alt", "...", 1, "d-block", "w-100"], ["src", "assets/images/n3.jpg", "alt", "...", 1, "d-block", "w-100"], ["type", "button", "data-bs-target", "#carouselExampleIndicators", "data-bs-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "visually-hidden"], ["type", "button", "data-bs-target", "#carouselExampleIndicators", "data-bs-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"], [1, "container-fluid", "w-100", "courses"], ["id", "nav-tab", "role", "tablist", 1, "nav", "nav-tabs", "d-flex", "justify-content-center"], ["id", "nav-all-tab", "data-bs-toggle", "tab", "data-bs-target", "#all", "type", "button", "role", "tab", "aria-controls", "all", "aria-selected", "true", 1, "nav-link", "active"], ["id", "nav-frontend-tab", "data-bs-toggle", "tab", "data-bs-target", "#frontend", "type", "button", "role", "tab", "aria-controls", "frontend", "aria-selected", "false", 1, "nav-link"], ["id", "nav-backend-tab", "data-bs-toggle", "tab", "data-bs-target", "#backend", "type", "button", "role", "tab", "aria-controls", "backend", "aria-selected", "false", 1, "nav-link"], ["id", "nav-robotics-tab", "data-bs-toggle", "tab", "data-bs-target", "#robotics", "type", "button", "role", "tab", "aria-controls", "robotics", "aria-selected", "false", 1, "nav-link"], ["id", "nav-tabContent", 1, "tab-content", "pb-5"], ["id", "all", "role", "tabpanel", "aria-labelledby", "nav-all-tab", 1, "tab-pane", "fade", "show", "active"], [1, "row", "course_modul"], [1, "col-lg-4"], [1, "card"], ["src", "assets/images/frontend.png", "alt", "...", 1, "card-img-top"], [1, "card-body"], [1, "card-title"], [1, "card-text"], ["href", "#", 1, "btn", "btn-primary"], ["src", "assets/images/backend.png", "alt", "...", 1, "card-img-top"], ["src", "assets/images/robot-1.jpg", "alt", "...", 1, "card-img-top"], ["src", "assets/images/robot3.png", "alt", "...", 1, "card-img-top"], ["id", "frontend", "role", "tabpanel", "aria-labelledby", "nav-frontend-tab", 1, "tab-pane", "fade"], ["src", "../../assets/images/frontend.png", "alt", "...", 1, "card-img-top"], ["id", "backend", "role", "tabpanel", "aria-labelledby", "nav-backend-tab", 1, "tab-pane", "fade"], ["src", "../../assets/images/backend.png", "alt", "...", 1, "card-img-top"], ["id", "robotics", "role", "tabpanel", "aria-labelledby", "nav-robotics-tab", 1, "tab-pane", "fade"], ["src", "../../assets/images/robot-1.jpg", "alt", "...", 1, "card-img-top"], ["src", "../../assets/images/robot3.png", "alt", "...", 1, "card-img-top"], [1, "container-fluid", "teacher"], [1, "row", "tch"], [1, "project", "wow", "animated", "animated4", "fadeInLeft"], [1, "project-hover", "d-flex", "flex-column", "align-items-center", "justify-content-center"], [1, "line"], [1, "pt-3"], ["href", "#"], [1, "project", "project-2", "wow", "animated", "animated3", "fadeInLeft"], [1, "project", "project-3", "wow", "animated", "animated2", "fadeInLeft"], [1, "row", "tch", "mt-3", "mb-5"], [1, "project", "project-3", "wow", "animated", "animated4", "fadeInLeft"], [1, "project", "wow", "animated", "animated3", "fadeInLeft"], [1, "project", "project-2", "wow", "animated", "animated2", "fadeInLeft"], [1, "container-fluid", "w-100", "history", "pb-5"], [1, "blog"], ["src", "assets/images/blog3.jpg", "alt", ""], [1, "row"], ["contact", ""], ["src", "https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d3736489.7218514383!2d90.21589792292741!3d23.857125486636733!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1506502314230", "width", "100%", "height", "328", "frameborder", "0", "allowfullscreen", "", 2, "border", "0"], [1, "col-lg-6", "ps-2", "pe-5"], [1, "form-group"], ["type", "text", "name", "", "value", "", "placeholder", "Name", 1, "form-control"], ["type", "email", "name", "", "value", "", "placeholder", "E-mail", 1, "form-control"], ["name", "", "rows", "6", "placeholder", "Message", 1, "form-control"], ["type", "submit", "name", "button", 1, "btn", "btn-default"], ["aria-hidden", "true", 1, "fa", "fa-paper-plane-o"]],
  template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "BEST ONLINE EDUCATION SERVICE IN THE WORLD");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "ONE STEP AHEAD THIS SEASON");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div")(7, "a");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3)(10, "div", 4)(11, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Why We Are Different From Others?");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Replenish man have thing gathering lights yielding shall you");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5)(16, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Best Teacher");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Bring your ideas to life , assets resources and services");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 5)(23, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Best Methods");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Bring your ideas to life , assets resources and services");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 5)(30, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Real Projects");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Bring your ideas to life , assets resources and services");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 5)(37, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "More Courses");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Bring your ideas to life , assets resources and services");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 10)(44, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Our History");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Replenish man have thing gathering lights yielding shall you");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 11)(49, "div", 12)(50, "div", 13)(51, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " Lorem ipsum dolor sit amet consectetur. Pellentesque pulvinar eu viverra tincidunt libero tortor dignissim orci. Leo eget adipiscing quis pharetra quis arcu pretium fringilla sodales. Nec ipsum et ullamcorper ut eget consectetur sed facilisi sollicitudin. Ultricies eget eget eget lectus nullam. Sit enim at sit sapien. Quisque euismod luctus egestas id augue ultrices. Ultricies eget eget eget lectus nullam. Sit enim at sit sapien. Quisque euismod luctus egestas id augue ultrices. Quisque euismod luctus egestas id augue ultrices. Ultricies eget eget eget lectus nullam. Sit enim at sit sapien. Quisque euismod luctus egestas id augue ultrices. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 12)(54, "div", 14)(55, "div", 15)(56, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "button", 17)(58, "button", 18)(59, "button", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 20)(61, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "img", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "img", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "img", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "button", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "span", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "span", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Previous");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "button", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "span", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "span", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Next");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 31)(76, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Explore courses by category");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Replenish man have thing gathering lights yielding shall you");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "nav")(81, "div", 32)(82, "button", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " All ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "button", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, " Frontend ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "button", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, " Backend ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "button", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, " Robotics ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 37)(91, "div", 38)(92, "div", 39)(93, "div", 40)(94, "div", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "img", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 43)(97, "h2", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Web Programming - Frontend");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "p", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, " Lorem ipsum dolor sit amet consectetur. Pellentesque pulvinar eu viverra tincidunt libero tortor dignissim orci. Leo eget adipiscing quis pharetra quis arcu pretium fringilla sodales. Nec ipsum et ullamcorper ut eget consectetur sed facilisi sollicitudin. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "span")(102, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Teacher:");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, " Xadica Allahverdi");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "br")(106, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "a", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Go to details");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 40)(110, "div", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "img", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 43)(113, "h2", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Web Programming - Backend");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "p", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, " Lorem ipsum dolor sit amet consectetur. Pellentesque pulvinar eu viverra tincidunt libero tortor dignissim orci. Leo eget adipiscing quis pharetra quis arcu pretium fringilla sodales. Nec ipsum et ullamcorper ut eget consectetur sed facilisi sollicitudin. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "span")(118, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Teacher:");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, " Xadica Allahverdi");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "br")(122, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "a", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "Go to details");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 40)(126, "div", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "img", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 43)(129, "h2", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "Robotics");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "p", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, " Lorem ipsum dolor sit amet consectetur. Pellentesque pulvinar eu viverra tincidunt libero tortor dignissim orci. Leo eget adipiscing quis pharetra quis arcu pretium fringilla sodales. Nec ipsum et ullamcorper ut eget consectetur sed facilisi sollicitudin. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "span")(134, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "Teacher:");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, " Sarkhan Hadjibayov");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "br")(138, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "a", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Go somewhere");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 39)(142, "div", 40)(143, "div", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "img", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 43)(146, "h2", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "Web Programming - Backend");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "p", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, " Lorem ipsum dolor sit amet consectetur. Pellentesque pulvinar eu viverra tincidunt libero tortor dignissim orci. Leo eget adipiscing quis pharetra quis arcu pretium fringilla sodales. Nec ipsum et ullamcorper ut eget consectetur sed facilisi sollicitudin. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "span")(151, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "Teacher:");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, " Bakhtiyar Shamilzade");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](154, "br")(155, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "a", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "Go to details");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 40)(159, "div", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](160, "img", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 43)(162, "h2", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "Web Programming - Frontend");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "p", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, " Lorem ipsum dolor sit amet consectetur. Pellentesque pulvinar eu viverra tincidunt libero tortor dignissim orci. Leo eget adipiscing quis pharetra quis arcu pretium fringilla sodales. Nec ipsum et ullamcorper ut eget consectetur sed facilisi sollicitudin. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "span")(167, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "Teacher:");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, " Qumru Suleymanli");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](170, "br")(171, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "a", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "Go to details");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 40)(175, "div", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](176, "img", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "div", 43)(178, "h2", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "Robotics");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "p", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, " Lorem ipsum dolor sit amet consectetur. Pellentesque pulvinar eu viverra tincidunt libero tortor dignissim orci. Leo eget adipiscing quis pharetra quis arcu pretium fringilla sodales. Nec ipsum et ullamcorper ut eget consectetur sed facilisi sollicitudin. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "span")(183, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "Teacher:");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, " Sarkhan Hadjibayov");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](186, "br")(187, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "a", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, "Go somewhere");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "div", 50)(191, "div", 39)(192, "div", 40)(193, "div", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](194, "img", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "div", 43)(196, "h2", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "Web Programming - Frontend");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "p", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, " Lorem ipsum dolor sit amet consectetur. Pellentesque pulvinar eu viverra tincidunt libero tortor dignissim orci. Leo eget adipiscing quis pharetra quis arcu pretium fringilla sodales. Nec ipsum et ullamcorper ut eget consectetur sed facilisi sollicitudin. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "span")(201, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, "Teacher:");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, " Xadica Allahverdi");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](204, "br")(205, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "a", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, "Go to details");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "div", 40)(209, "div", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](210, "img", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "div", 43)(212, "h2", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, "Web Programming - Frontend");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "p", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, " Lorem ipsum dolor sit amet consectetur. Pellentesque pulvinar eu viverra tincidunt libero tortor dignissim orci. Leo eget adipiscing quis pharetra quis arcu pretium fringilla sodales. Nec ipsum et ullamcorper ut eget consectetur sed facilisi sollicitudin. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "span")(217, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, "Teacher:");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](219, " Qumru Suleymanli");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](220, "br")(221, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "a", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](223, "Go to details");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](224, "div", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "div", 52)(226, "div", 39)(227, "div", 40)(228, "div", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](229, "img", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "div", 43)(231, "h2", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232, "Web Programming - Frontend");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "p", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234, " Lorem ipsum dolor sit amet consectetur. Pellentesque pulvinar eu viverra tincidunt libero tortor dignissim orci. Leo eget adipiscing quis pharetra quis arcu pretium fringilla sodales. Nec ipsum et ullamcorper ut eget consectetur sed facilisi sollicitudin. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "span")(236, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](237, "Teacher:");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238, " Xadica Allahverdi");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](239, "br")(240, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "a", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, "Go to details");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "div", 40)(244, "div", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](245, "img", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "div", 43)(247, "h2", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](248, "Web Programming - Frontend");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "p", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](250, " Lorem ipsum dolor sit amet consectetur. Pellentesque pulvinar eu viverra tincidunt libero tortor dignissim orci. Leo eget adipiscing quis pharetra quis arcu pretium fringilla sodales. Nec ipsum et ullamcorper ut eget consectetur sed facilisi sollicitudin. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "span")(252, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](253, "Teacher:");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](254, " Bakhtiyar Shamilzade");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](255, "br")(256, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "a", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](258, "Go to details");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](259, "div", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "div", 54)(261, "div", 39)(262, "div", 40)(263, "div", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](264, "img", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "div", 43)(266, "h2", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](267, "Web Programming - Frontend");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "p", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](269, " Lorem ipsum dolor sit amet consectetur. Pellentesque pulvinar eu viverra tincidunt libero tortor dignissim orci. Leo eget adipiscing quis pharetra quis arcu pretium fringilla sodales. Nec ipsum et ullamcorper ut eget consectetur sed facilisi sollicitudin. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "span")(271, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](272, "Teacher:");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](273, " Sarkhan Hadjibayov");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](274, "br")(275, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "a", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](277, "Go to details");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "div", 40)(279, "div", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](280, "img", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "div", 43)(282, "h2", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](283, "Web Programming - Frontend");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "p", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](285, " Lorem ipsum dolor sit amet consectetur. Pellentesque pulvinar eu viverra tincidunt libero tortor dignissim orci. Leo eget adipiscing quis pharetra quis arcu pretium fringilla sodales. Nec ipsum et ullamcorper ut eget consectetur sed facilisi sollicitudin. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "span")(287, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](288, "Teacher:");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](289, " Sarkhan Hadjibayov");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](290, "br")(291, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "a", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](293, "Go to details");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](294, "div", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "div", 57)(296, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](297, "Our Teacher");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](299, "Replenish man have thing gathering lights yielding shall you");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "div", 58)(301, "div", 40)(302, "div", 59)(303, "div", 60)(304, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](305, "Sarkhan Hadjibayov");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](306, "div", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "span", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](308, "Software Developer and Robotics teacher");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](309, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](311, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pulvinar ex pulvinar est laoreet ullamcorper. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](312, "a", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](313, "More Info");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](314, "div", 40)(315, "div", 64)(316, "div", 60)(317, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](318, "Bakhtiyar Shamilzade");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](319, "div", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](320, "span", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](321, "Full Stack Developer");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](322, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](323, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](324, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pulvinar ex pulvinar est laoreet ullamcorper. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](325, "a", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](326, "More Info");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](327, "div", 40)(328, "div", 65)(329, "div", 60)(330, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](331, "Xadica Allahverdi");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](332, "div", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](333, "span", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](334, "Full Stack Developer");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](335, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](336, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](337, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pulvinar ex pulvinar est laoreet ullamcorper. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](338, "a", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](339, "More Info");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](340, "div", 66)(341, "div", 40)(342, "div", 67)(343, "div", 60)(344, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](345, "Xadica Allahverdi");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](346, "div", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](347, "span", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](348, "Full Stack Developer");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](349, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](350, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](351, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pulvinar ex pulvinar est laoreet ullamcorper. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](352, "a", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](353, "More Info");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](354, "div", 40)(355, "div", 68)(356, "div", 60)(357, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](358, "Sarkhan Hadjibayov");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](359, "div", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](360, "span", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](361, "Software Developer and Robotics teacher");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](362, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](363, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](364, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pulvinar ex pulvinar est laoreet ullamcorper. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](365, "a", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](366, "More Info");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](367, "div", 40)(368, "div", 69)(369, "div", 60)(370, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](371, "Bakhtiyar Shamilzade");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](372, "div", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](373, "span", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](374, "Full Stack Developer");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](375, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](376, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](377, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pulvinar ex pulvinar est laoreet ullamcorper. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](378, "a", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](379, "More Info");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](380, "div", 70)(381, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](382, "Blog");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](383, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](384, "Replenish man have thing gathering lights yielding shall you");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](385, "div", 11)(386, "div", 12)(387, "div", 13)(388, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](389, " Lorem ipsum dolor sit amet consectetur. Pellentesque pulvinar eu viverra tincidunt libero tortor dignissim orci. Leo eget adipiscing quis pharetra quis arcu pretium fringilla sodales. Nec ipsum et ullamcorper ut eget consectetur sed facilisi sollicitudin. Ultricies eget eget eget lectus nullam. Sit enim at sit sapien. Quisque euismod luctus egestas id augue ultrices. Ultricies eget eget eget lectus nullam. Sit enim at sit sapien. Quisque euismod luctus egestas id augue ultrices. Quisque euismod luctus egestas id augue ultrices. Ultricies eget eget eget lectus nullam. Sit enim at sit sapien. Quisque euismod luctus egestas id augue ultrices. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](390, "div", 12)(391, "div", 71);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](392, "img", 72);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](393, "div", 70)(394, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](395, "Contact Us");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](396, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](397, "Replenish man have thing gathering lights yielding shall you");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](398, "div", 73, 74)(400, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](401, "iframe", 75);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](402, "div", 76)(403, "form")(404, "div", 77);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](405, "input", 78);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](406, "div", 77);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](407, "input", 79);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](408, "div", 77);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](409, "textarea", 80);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](410, "button", 81);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](411, "i", 82);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](412, " Submit ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    }
  },
  styles: ["body[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  padding: 0px;\n  margin: 0px;\n  overflow-x: hidden !important;\n}\n\n.container-fluid[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0px !important;\n  padding: 0px !important;\n  overflow-x: hidden !important;\n}\n\n.jumbotron[_ngcontent-%COMP%] {\n  background-image: url('home-banner.jpg');\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 960px !important;\n  text-align: center;\n  position: relative;\n}\n\n.my_text[_ngcontent-%COMP%] {\n  height: 70%;\n  color: #002347;\n  font-family: \"Rubik\", sans-serif;\n  position: absolute;\n  left: 26%;\n}\n\n.my_text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n.my_text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 48px;\n  font-weight: bold;\n  padding: 40px 0px;\n  line-height: 50px !important;\n}\n\n.my_text[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 50px;\n  color: #FDC632;\n}\n\n.my_text[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  background-color: transparent !important;\n}\n\n.jumbotron[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  background-color: #FDC632;\n  border: 2px dotted white;\n  color: white !important;\n  border-radius: 50%;\n  padding: 18px 20px;\n  position: relative;\n}\n\n.jumbotron[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]::after {\n  position: absolute;\n  content: \"\";\n  bottom: -7px;\n  top: -7px;\n  left: -7px;\n  right: -7px;\n  background-color: transparent;\n  border-radius: 50%;\n  border: 4px solid #fff;\n  margin: 0px;\n  opacity: 1;\n  transform-origin: center;\n  animation: _ngcontent-%COMP%_anim 800ms linear infinite;\n}\n\n.jumbotron[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]::before {\n  position: absolute;\n  content: \"\";\n  bottom: -7px;\n  top: -7px;\n  left: -7px;\n  right: -7px;\n  background-color: transparent;\n  border-radius: 50%;\n  border: 4px solid #fff;\n  margin: 0px;\n  opacity: 0.8;\n  transform-origin: center;\n  animation: _ngcontent-%COMP%_anim 800ms linear 400ms infinite;\n}\n\n@keyframes _ngcontent-%COMP%_anim {\n  from {\n    margin: 0px;\n    opacity: 1;\n  }\n  to {\n    margin: -15px;\n    opacity: 0;\n  }\n}\n.difference[_ngcontent-%COMP%] {\n  padding: 0px 100px 0px 100px !important;\n}\n\n.difference[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 36px;\n  text-align: center;\n  color: #002347;\n  font-family: \"Rubik\", sans-serif;\n  font-weight: bold;\n  padding: 80px 0px 0px 0px;\n}\n\n.difference[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n  color: #7B838A;\n  padding-bottom: 50px;\n  font-size: 16px;\n  text-align: center !important;\n  font-style: italic;\n}\n\n.col-lg-3[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: #f9f9ff !important;\n  padding: 30px 30px 0px 30px;\n}\n\n.col-lg-3[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 20px !important;\n  color: #002347;\n  padding-top: 30px;\n}\n\n.col-lg-3[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px !important;\n  text-align: left !important;\n  color: #7B838A;\n  font-style: normal !important;\n}\n\n.col-lg-3[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 55px;\n}\n\n.history[_ngcontent-%COMP%] {\n  padding: 0px 0px 60px 0px !important;\n}\n\n.history[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 36px;\n  text-align: center;\n  color: #002347;\n  font-family: \"Rubik\", sans-serif;\n  font-weight: bold;\n  padding: 80px 0px 0px 0px;\n}\n\n.history[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n  color: #7B838A;\n  padding-bottom: 50px;\n  font-size: 16px;\n  text-align: center !important;\n  font-style: italic;\n}\n\n.history_text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding-top: 50px;\n  color: #7B838A !important;\n  font-size: 16px;\n  font-style: normal;\n  text-align: left !important;\n  line-height: 40px;\n}\n\n.history_carousel[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.history_carousel[_ngcontent-%COMP%]   .carousel-inner[_ngcontent-%COMP%] {\n  height: 420px !important;\n}\n\n.courses[_ngcontent-%COMP%] {\n  padding: 0px 100px;\n}\n\n.courses[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 36px;\n  text-align: center;\n  color: #002347;\n  font-family: \"Rubik\", sans-serif;\n  font-weight: bold;\n  padding: 80px 0px 0px 0px;\n}\n\n.courses[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n  color: #7B838A;\n  padding-bottom: 20px;\n  font-size: 16px;\n  text-align: center !important;\n  font-style: italic;\n}\n\n.nav[_ngcontent-%COMP%] {\n  border: none !important;\n  font-family: \"Roboto\", sans-serif;\n}\n\n.nav[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  color: white !important;\n  background-color: #002347 !important;\n  border-radius: 6px !important;\n}\n\n.nav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: none;\n  color: #7B838A;\n}\n\n.course_modul[_ngcontent-%COMP%] {\n  padding: 30px 70px 30px 70px;\n}\n\n.course_modul[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 400px;\n}\n\n.card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 22px;\n  color: #002347;\n  font-family: \"Rubik\", sans-serif;\n}\n\n.card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px !important;\n  text-align: left !important;\n  font-style: normal !important;\n  padding-bottom: 0px !important;\n}\n\n.card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  background-color: #002347 !important;\n  border: none;\n  font-size: 14px !important;\n  font-family: \"Roboto\", sans-serif;\n}\n\n.card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #FDC632 !important;\n  transition: 0.5s;\n}\n\n.card[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: #002347;\n}\n\n.teacher[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 36px;\n  text-align: center;\n  color: #002347;\n  font-family: \"Rubik\", sans-serif;\n  font-weight: bold;\n  padding: 40px 0px 0px 0px;\n}\n\n.teacher[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n  color: #7B838A;\n  padding-bottom: 50px;\n  font-size: 16px;\n  text-align: center !important;\n  font-style: italic;\n}\n\n.tch[_ngcontent-%COMP%] {\n  padding: 0px 70px 20px 70px;\n}\n\n.project[_ngcontent-%COMP%] {\n  width: 95%;\n  height: 400px;\n  background-image: url('tch7.jpg');\n  background-size: cover;\n  padding: 0 !important;\n  background-position: 40% 0%;\n}\n\n.project-2[_ngcontent-%COMP%] {\n  background-image: url('tch6.jpg');\n  background-size: cover;\n  padding: 0 !important;\n  background-position: 60% 0%;\n}\n\n.project-3[_ngcontent-%COMP%] {\n  background-image: url('tch5.jpg');\n  background-size: cover;\n  padding: 0 !important;\n  background-position: 0% 20%;\n}\n\n.project-hover[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  color: #fff;\n  opacity: 0;\n  transition: all 0.8s ease;\n  background-color: rgba(0, 35, 71, 0.5);\n}\n\n.project-hover[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 50px !important;\n  font-family: \"Rubik\", sans-serif;\n}\n\n.project-hover[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-style: italic;\n  font-size: 16px;\n  text-align: center;\n}\n\n.project-hover[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 12px;\n  padding: 0px 20px;\n}\n\n.line[_ngcontent-%COMP%] {\n  width: 50%;\n  height: 1px;\n  background-color: white;\n}\n\n.project-hover[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: white;\n  background-color: rgb(0, 35, 71);\n  text-decoration: none;\n  padding: 2px 18px;\n  line-height: 40px;\n  border-radius: 6px;\n  transition: all 0.5s ease-in-out;\n}\n\n.project-hover[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  border-color: rgb(51, 51, 51);\n  color: white;\n  background-color: rgba(253, 198, 50, 0.9);\n}\n\n.project[_ngcontent-%COMP%]:hover   .project-hover[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.project[_ngcontent-%COMP%]:hover   .project-hover[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 5px;\n}\n\n.blog[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 420px !important;\n}\n\n.blog[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n#contact[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n\n#contact[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  border: 1px solid #DEDEDE;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 20px !important;\n}\n\n.btn[_ngcontent-%COMP%] {\n  border-radius: 6px;\n  background-color: #002347 !important;\n  color: white !important;\n  border: 2px solid #1e1e1e;\n  border: none !important;\n  font-size: 16px !important;\n  font-family: \"Roboto\", sans-serif;\n}\n\n.btn[_ngcontent-%COMP%]:hover {\n  background-color: #FDC632 !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGNBQUE7QUFDQTtFQUNFLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSw2QkFBQTtBQUNGOztBQUVBO0VBQ0Usd0NBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSx3Q0FBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7RUFDQSx5QkFBQTtFQUNBLHdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLHdCQUFBO0VBQ0EscUNBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0VBQ0EsMkNBQUE7QUFDRjs7QUFFQTtFQUNFO0lBQ0ksV0FBQTtJQUNBLFVBQUE7RUFDSjtFQUVBO0lBQ0ksYUFBQTtJQUNBLFVBQUE7RUFBSjtBQUNGO0FBR0E7RUFDRSx1Q0FBQTtBQURGOztBQUlBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdDQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBQURGOztBQUlBO0VBQ0UsaUNBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtBQURGOztBQUlBO0VBQ0UsV0FBQTtFQUNBLG9DQUFBO0VBQ0EsMkJBQUE7QUFERjs7QUFJQTtFQUNFLDBCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBREY7O0FBSUE7RUFDRSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0EsY0FBQTtFQUNBLDZCQUFBO0FBREY7O0FBSUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQURGOztBQUlBO0VBQ0Usb0NBQUE7QUFERjs7QUFJQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQ0FBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7QUFERjs7QUFJQTtFQUNFLGlDQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7QUFERjs7QUFJQTtFQUNFLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0FBREY7O0FBSUE7RUFDRSxXQUFBO0FBREY7O0FBSUE7RUFDRSx3QkFBQTtBQURGOztBQUlBO0VBQ0Usa0JBQUE7QUFERjs7QUFJQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQ0FBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7QUFERjs7QUFJQTtFQUNFLGlDQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7QUFERjs7QUFJQTtFQUNFLHVCQUFBO0VBQ0EsaUNBQUE7QUFERjs7QUFJQTtFQUNFLHVCQUFBO0VBQ0Esb0NBQUE7RUFDQSw2QkFBQTtBQURGOztBQUlBO0VBQ0UsWUFBQTtFQUNBLGNBQUE7QUFERjs7QUFJQTtFQUNFLDRCQUFBO0FBREY7O0FBSUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtBQURGOztBQUlBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQ0FBQTtBQURGOztBQUlBO0VBQ0UsMEJBQUE7RUFDQSwyQkFBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7QUFERjs7QUFJQTtFQUNFLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0EsaUNBQUE7QUFERjs7QUFJQTtFQUNFLG9DQUFBO0VBQ0EsZ0JBQUE7QUFERjs7QUFJQTtFQUNFLGNBQUE7QUFERjs7QUFLQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQ0FBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7QUFGRjs7QUFLQTtFQUNFLGlDQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7QUFGRjs7QUFLQTtFQUNFLDJCQUFBO0FBRkY7O0FBS0E7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGlDQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLDJCQUFBO0FBRkY7O0FBS0E7RUFDRSxpQ0FBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSwyQkFBQTtBQUZGOztBQUtBO0VBQ0UsaUNBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsMkJBQUE7QUFGRjs7QUFLQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFJQSx5QkFBQTtFQUNBLHNDQUFBO0FBRkY7O0FBS0E7RUFDRSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0NBQUE7QUFGRjs7QUFLQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBRkY7O0FBS0E7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBRkY7O0FBS0E7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0FBRkY7O0FBS0E7RUFDRSxZQUFBO0VBQ0EsZ0NBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUlBLGdDQUFBO0FBRkY7O0FBS0E7RUFDRSw2QkFBQTtFQUNBLFlBQUE7RUFDQSx5Q0FBQTtBQUZGOztBQUtBO0VBQ0UsVUFBQTtBQUZGOztBQUtBO0VBQ0UsV0FBQTtFQUNBLFdBQUE7QUFGRjs7QUFLQTtFQUNFLFdBQUE7RUFDQSx3QkFBQTtBQUZGOztBQUtBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFGRjs7QUFLQTtFQUNFLG1CQUFBO0FBRkY7O0FBS0E7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0FBRkY7O0FBS0E7RUFDRSw4QkFBQTtBQUZGOztBQUtBO0VBQ0Usa0JBQUE7RUFDQSxvQ0FBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtFQUNBLDBCQUFBO0VBQ0EsaUNBQUE7QUFGRjs7QUFLQTtFQUNFLG9DQUFBO0FBRkYiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBOZXcgZGVzaWduKi9cclxuYm9keSB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNvbnRhaW5lci1mbHVpZCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxuICBvdmVyZmxvdy14OiBoaWRkZW4haW1wb3J0YW50O1xyXG59XHJcblxyXG4uanVtYm90cm9uIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy9ob21lLWJhbm5lci5qcGcpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBoZWlnaHQ6IDk2MHB4ICFpbXBvcnRhbnQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLm15X3RleHQge1xyXG4gIGhlaWdodDogNzAlO1xyXG4gIGNvbG9yOiAjMDAyMzQ3O1xyXG4gIGZvbnQtZmFtaWx5OiAnUnViaWsnLCBzYW5zLXNlcmlmO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAyNiU7XHJcbn1cclxuXHJcbi5teV90ZXh0IHAge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLm15X3RleHQgaDEge1xyXG4gIGZvbnQtc2l6ZTogNDhweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBwYWRkaW5nOiA0MHB4IDBweDtcclxuICBsaW5lLWhlaWdodDogNTBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubXlfdGV4dCBidXR0b24gaSB7XHJcbiAgZm9udC1zaXplOiA1MHB4O1xyXG4gIGNvbG9yOiAjRkRDNjMyO1xyXG59XHJcblxyXG4ubXlfdGV4dCBidXR0b24ge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5qdW1ib3Ryb24gYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGREM2MzI7XHJcbiAgYm9yZGVyOiAycHggZG90dGVkIHdoaXRlO1xyXG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBwYWRkaW5nOiAxOHB4IDIwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uanVtYm90cm9uIGE6OmFmdGVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgY29udGVudDogJyc7XHJcbiAgYm90dG9tOiAtN3B4O1xyXG4gIHRvcDogLTdweDtcclxuICBsZWZ0OiAtN3B4O1xyXG4gIHJpZ2h0OiAtN3B4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBib3JkZXI6IDRweCBzb2xpZCAjZmZmO1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xyXG4gIGFuaW1hdGlvbjogYW5pbSA4MDBtcyBsaW5lYXIgaW5maW5pdGU7XHJcbn1cclxuXHJcbi5qdW1ib3Ryb24gYTo6YmVmb3JlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgY29udGVudDogJyc7XHJcbiAgYm90dG9tOiAtN3B4O1xyXG4gIHRvcDogLTdweDtcclxuICBsZWZ0OiAtN3B4O1xyXG4gIHJpZ2h0OiAtN3B4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBib3JkZXI6IDRweCBzb2xpZCAjZmZmO1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIG9wYWNpdHk6IDAuODtcclxuICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XHJcbiAgYW5pbWF0aW9uOiBhbmltIDgwMG1zIGxpbmVhciA0MDBtcyBpbmZpbml0ZTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBhbmltIHtcclxuICBmcm9tIHtcclxuICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG5cclxuICB0byB7XHJcbiAgICAgIG1hcmdpbjogLTE1cHg7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG59XHJcblxyXG4uZGlmZmVyZW5jZSB7XHJcbiAgcGFkZGluZzogMHB4IDEwMHB4IDBweCAxMDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZGlmZmVyZW5jZSBoMSB7XHJcbiAgZm9udC1zaXplOiAzNnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogIzAwMjM0NztcclxuICBmb250LWZhbWlseTogJ1J1YmlrJywgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBwYWRkaW5nOiA4MHB4IDBweCAwcHggMHB4O1xyXG59XHJcblxyXG4uZGlmZmVyZW5jZSBwIHtcclxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgY29sb3I6ICM3QjgzOEE7XHJcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG5cclxuLmNvbC1sZy0zIGRpdiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmZiAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDMwcHggMzBweCAwcHggMzBweDtcclxufVxyXG5cclxuLmNvbC1sZy0zIGgyIHtcclxuICBmb250LXNpemU6IDIwcHggIWltcG9ydGFudDtcclxuICBjb2xvcjogIzAwMjM0NztcclxuICBwYWRkaW5nLXRvcDogMzBweDtcclxufVxyXG5cclxuLmNvbC1sZy0zIHAge1xyXG4gIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xyXG4gIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcclxuICBjb2xvcjogIzdCODM4QTtcclxuICBmb250LXN0eWxlOiBub3JtYWwgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNvbC1sZy0zIGltZyB7XHJcbiAgd2lkdGg6IDYwcHg7XHJcbiAgaGVpZ2h0OiA1NXB4O1xyXG59XHJcblxyXG4uaGlzdG9yeSB7XHJcbiAgcGFkZGluZzogMHB4IDBweCA2MHB4IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaGlzdG9yeSBoMSB7XHJcbiAgZm9udC1zaXplOiAzNnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogIzAwMjM0NztcclxuICBmb250LWZhbWlseTogJ1J1YmlrJywgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBwYWRkaW5nOiA4MHB4IDBweCAwcHggMHB4O1xyXG59XHJcblxyXG4uaGlzdG9yeSBwIHtcclxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgY29sb3I6ICM3QjgzOEE7XHJcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG5cclxuLmhpc3RvcnlfdGV4dCBwIHtcclxuICBwYWRkaW5nLXRvcDogNTBweDtcclxuICBjb2xvcjogIzdCODM4QSAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG59XHJcblxyXG4uaGlzdG9yeV9jYXJvdXNlbCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5oaXN0b3J5X2Nhcm91c2VsIC5jYXJvdXNlbC1pbm5lciB7XHJcbiAgaGVpZ2h0OiA0MjBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY291cnNlcyB7XHJcbiAgcGFkZGluZzogMHB4IDEwMHB4O1xyXG59XHJcblxyXG4uY291cnNlcyBoMSB7XHJcbiAgZm9udC1zaXplOiAzNnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogIzAwMjM0NztcclxuICBmb250LWZhbWlseTogJ1J1YmlrJywgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBwYWRkaW5nOiA4MHB4IDBweCAwcHggMHB4O1xyXG59XHJcblxyXG4uY291cnNlcyBwIHtcclxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgY29sb3I6ICM3QjgzOEE7XHJcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG5cclxuLm5hdiB7XHJcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4ubmF2IC5hY3RpdmUge1xyXG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDIzNDcgIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiA2cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm5hdiBidXR0b24ge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjb2xvcjogIzdCODM4QTtcclxufVxyXG5cclxuLmNvdXJzZV9tb2R1bCB7XHJcbiAgcGFkZGluZzogMzBweCA3MHB4IDMwcHggNzBweDtcclxufVxyXG5cclxuLmNvdXJzZV9tb2R1bCBpbWcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNDAwcHg7XHJcbn1cclxuXHJcbi5jYXJkIGgyIHtcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgY29sb3I6ICMwMDIzNDc7XHJcbiAgZm9udC1mYW1pbHk6ICdSdWJpaycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5jYXJkIHAge1xyXG4gIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xyXG4gIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcclxuICBmb250LXN0eWxlOiBub3JtYWwgIWltcG9ydGFudDtcclxuICBwYWRkaW5nLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jYXJkIGEge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDIzNDcgIWltcG9ydGFudDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uY2FyZCBhOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkRDNjMyICFpbXBvcnRhbnQ7XHJcbiAgdHJhbnNpdGlvbjogMC41cztcclxufVxyXG5cclxuLmNhcmQgYiB7XHJcbiAgY29sb3I6ICMwMDIzNDc7XHJcbn1cclxuXHJcblxyXG4udGVhY2hlciBoMSB7XHJcbiAgZm9udC1zaXplOiAzNnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogIzAwMjM0NztcclxuICBmb250LWZhbWlseTogJ1J1YmlrJywgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBwYWRkaW5nOiA0MHB4IDBweCAwcHggMHB4O1xyXG59XHJcblxyXG4udGVhY2hlciBwIHtcclxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgY29sb3I6ICM3QjgzOEE7XHJcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG5cclxuLnRjaCB7XHJcbiAgcGFkZGluZzogMHB4IDcwcHggMjBweCA3MHB4O1xyXG59XHJcblxyXG4ucHJvamVjdCB7XHJcbiAgd2lkdGg6IDk1JTtcclxuICBoZWlnaHQ6IDQwMHB4O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL3RjaDcuanBnKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA0MCUgMCU7XHJcbn1cclxuXHJcbi5wcm9qZWN0LTIge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL3RjaDYuanBnKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA2MCUgMCU7XHJcbn1cclxuXHJcbi5wcm9qZWN0LTMge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL3RjaDUuanBnKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSAyMCU7XHJcbn1cclxuXHJcbi5wcm9qZWN0LWhvdmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgb3BhY2l0eTogMDtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XHJcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xyXG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuOHMgZWFzZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDM1LCA3MSwgMC41KTtcclxufVxyXG5cclxuLnByb2plY3QtaG92ZXIgaDEge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDUwcHggIWltcG9ydGFudDtcclxuICBmb250LWZhbWlseTogJ1J1YmlrJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLnByb2plY3QtaG92ZXIgc3BhbiB7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5wcm9qZWN0LWhvdmVyIHAge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgcGFkZGluZzogMHB4IDIwcHg7XHJcbn1cclxuXHJcbi5saW5lIHtcclxuICB3aWR0aDogNTAlO1xyXG4gIGhlaWdodDogMXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ucHJvamVjdC1ob3ZlciBhIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAzNSwgNzEsIDEpO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBwYWRkaW5nOiAycHggMThweDtcclxuICBsaW5lLWhlaWdodDogNDBweDtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4ucHJvamVjdC1ob3ZlciBhOmhvdmVyIHtcclxuICBib3JkZXItY29sb3I6IHJnYmEoNTEsIDUxLCA1MSwgMSk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjUzLCAxOTgsIDUwLCAwLjkpO1xyXG59XHJcblxyXG4ucHJvamVjdDpob3ZlciAucHJvamVjdC1ob3ZlciB7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLnByb2plY3Q6aG92ZXIgLnByb2plY3QtaG92ZXIgaHIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNXB4O1xyXG59XHJcblxyXG4uYmxvZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA0MjBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYmxvZyBpbWcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuI2NvbnRhY3QgLnJvdyB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuI2NvbnRhY3QgLmZvcm0tY29udHJvbCB7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNERURFREU7XHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwIHtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAyMzQ3ICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyOiAycHggc29saWQgIzFlMWUxZTtcclxuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcclxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5idG46aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGREM2MzIgIWltcG9ydGFudDtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 3806:
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaterialModule": () => (/* binding */ MaterialModule)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/autocomplete */ 8550);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/grid-list */ 2642);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/list */ 6517);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/menu */ 8589);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/progress-bar */ 1294);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1708);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/slider */ 5682);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tabs */ 5892);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/checkbox */ 4792);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button-toggle */ 9837);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ 6060);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/datepicker */ 2298);
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/bottom-sheet */ 4865);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/chips */ 1169);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/stepper */ 4193);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/divider */ 1528);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/expansion */ 7591);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/radio */ 2922);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/sidenav */ 6643);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/slide-toggle */ 4714);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/sort */ 2197);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/table */ 5288);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/toolbar */ 2543);
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/tree */ 3453);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);



































class MaterialModule {}
MaterialModule.ɵfac = function MaterialModule_Factory(t) {
  return new (t || MaterialModule)();
};
MaterialModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: MaterialModule
});
MaterialModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_2__.MatInputModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__.MatDatepickerModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__.MatPaginatorModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_5__.MatSelectModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_7__.MatButtonToggleModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__.MatCheckboxModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__.MatTabsModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__.MatMenuModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIconModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_13__.MatSliderModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__.MatProgressBarModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_15__.MatAutocompleteModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_16__.MatGridListModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__.MatSnackBarModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__.MatProgressSpinnerModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__.MatTooltipModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_20__.MatListModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__.MatDialogModule, _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_22__.MatBottomSheetModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_7__.MatButtonToggleModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__.MatCheckboxModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_23__.MatChipsModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_24__.MatStepperModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__.MatDialogModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_25__.MatDividerModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_26__.MatExpansionModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_16__.MatGridListModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIconModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_20__.MatListModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__.MatMenuModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__.MatPaginatorModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__.MatProgressBarModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__.MatProgressSpinnerModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_27__.MatRadioModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_28__.MatRippleModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_5__.MatSelectModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_29__.MatSidenavModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_13__.MatSliderModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_30__.MatSlideToggleModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__.MatSnackBarModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_31__.MatSortModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_32__.MatTableModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__.MatTabsModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_33__.MatToolbarModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__.MatTooltipModule, _angular_material_tree__WEBPACK_IMPORTED_MODULE_34__.MatTreeModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIconModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__.MatMenuModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, {
    exports: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_2__.MatInputModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__.MatDatepickerModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__.MatPaginatorModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_5__.MatSelectModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_7__.MatButtonToggleModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__.MatCheckboxModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__.MatTabsModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__.MatMenuModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIconModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_13__.MatSliderModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__.MatProgressBarModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_15__.MatAutocompleteModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_16__.MatGridListModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__.MatSnackBarModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__.MatProgressSpinnerModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__.MatTooltipModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_20__.MatListModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__.MatDialogModule, _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_22__.MatBottomSheetModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_7__.MatButtonToggleModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__.MatCheckboxModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_23__.MatChipsModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_24__.MatStepperModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__.MatDialogModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_25__.MatDividerModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_26__.MatExpansionModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_16__.MatGridListModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIconModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_20__.MatListModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__.MatMenuModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__.MatPaginatorModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__.MatProgressBarModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__.MatProgressSpinnerModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_27__.MatRadioModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_28__.MatRippleModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_5__.MatSelectModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_29__.MatSidenavModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_13__.MatSliderModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_30__.MatSlideToggleModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__.MatSnackBarModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_31__.MatSortModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_32__.MatTableModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__.MatTabsModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_33__.MatToolbarModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__.MatTooltipModule, _angular_material_tree__WEBPACK_IMPORTED_MODULE_34__.MatTreeModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIconModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__.MatMenuModule]
  });
})();

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map