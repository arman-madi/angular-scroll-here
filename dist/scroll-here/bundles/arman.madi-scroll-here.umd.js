(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@arman.madi/scroll-here', ['exports', '@angular/core'], factory) :
    (global = global || self, factory((global.arman = global.arman || {}, global.arman.madi = global.arman.madi || {}, global.arman.madi['scroll-here'] = {}), global.ng.core));
}(this, (function (exports, core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/scroll-here.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ScrollHereComponent = /** @class */ (function () {
        function ScrollHereComponent(el) {
            this.el = el;
            /**
             * offset the scroll after scrolling into the middle of the container view, default is 0
             */
            this.offset = 0;
            this.isScrolled = false;
        }
        /**
         * @return {?}
         */
        ScrollHereComponent.prototype.ngAfterViewChecked = /**
         * @return {?}
         */
        function () {
            if (!this.el.nativeElement.isConnected) {
                this.isScrolled = false;
            }
            else if (this.isScrolled === false) {
                /** @type {?} */
                var scrollableParent = this.scrollableParent;
                if (!scrollableParent) {
                    scrollableParent = this.el.nativeElement.parentElement;
                    /** @type {?} */
                    var overflowRegex = /(auto|scroll|hidden)/;
                    while (scrollableParent && scrollableParent instanceof HTMLElement) {
                        /** @type {?} */
                        var overflowValues = window.getComputedStyle(scrollableParent).overflow +
                            window.getComputedStyle(scrollableParent).overflowY //+ 
                        // window.getComputedStyle(scrollableParent).overflowX;
                        ;
                        // window.getComputedStyle(scrollableParent).overflowX;
                        if (scrollableParent.scrollHeight > scrollableParent.clientHeight &&
                            overflowRegex.test(overflowValues)) {
                            break;
                        }
                        scrollableParent = scrollableParent.parentElement;
                    }
                    if (!scrollableParent || !(scrollableParent instanceof HTMLElement)) {
                        // Could not find a scrollable parent so leave it to the browser
                        this.el.nativeElement.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
                        return;
                    }
                }
                if (scrollableParent && scrollableParent.scrollHeight > scrollableParent.clientHeight) {
                    /** @type {?} */
                    var parentTop = scrollableParent.getBoundingClientRect().top;
                    /** @type {?} */
                    var childTop = this.el.nativeElement.getBoundingClientRect().top;
                    /** @type {?} */
                    var childParentOffset = Math.abs(parentTop - childTop);
                    scrollableParent.scrollTop = childParentOffset - Math.abs(scrollableParent.offsetHeight / 2) + parseInt(this.offset + '');
                    this.isScrolled = true;
                }
            }
        };
        ScrollHereComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'ar-scroll-here',
                        template: '<ng-content></ng-content>'
                    }] }
        ];
        /** @nocollapse */
        ScrollHereComponent.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        ScrollHereComponent.propDecorators = {
            scrollableParent: [{ type: core.Input }],
            offset: [{ type: core.Input }]
        };
        return ScrollHereComponent;
    }());
    if (false) {
        /**
         * Determine which parent should scrolle, if not given it will be detected automatically
         * @type {?}
         */
        ScrollHereComponent.prototype.scrollableParent;
        /**
         * offset the scroll after scrolling into the middle of the container view, default is 0
         * @type {?}
         */
        ScrollHereComponent.prototype.offset;
        /**
         * @type {?}
         * @private
         */
        ScrollHereComponent.prototype.isScrolled;
        /**
         * @type {?}
         * @private
         */
        ScrollHereComponent.prototype.el;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/scroll-here.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ScrollHereModule = /** @class */ (function () {
        function ScrollHereModule() {
        }
        ScrollHereModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [ScrollHereComponent],
                        imports: [],
                        exports: [ScrollHereComponent]
                    },] }
        ];
        return ScrollHereModule;
    }());

    exports.ScrollHereComponent = ScrollHereComponent;
    exports.ScrollHereModule = ScrollHereModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=arman.madi-scroll-here.umd.js.map
