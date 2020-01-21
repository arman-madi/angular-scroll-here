import { Component, ElementRef, Input, NgModule } from '@angular/core';

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
        { type: Component, args: [{
                    selector: 'ar-scroll-here',
                    template: '<ng-content></ng-content>'
                }] }
    ];
    /** @nocollapse */
    ScrollHereComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    ScrollHereComponent.propDecorators = {
        scrollableParent: [{ type: Input }],
        offset: [{ type: Input }]
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
        { type: NgModule, args: [{
                    declarations: [ScrollHereComponent],
                    imports: [],
                    exports: [ScrollHereComponent]
                },] }
    ];
    return ScrollHereModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: arman.madi-scroll-here.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { ScrollHereComponent, ScrollHereModule };
//# sourceMappingURL=arman.madi-scroll-here.js.map
