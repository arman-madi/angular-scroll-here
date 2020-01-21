/**
 * @fileoverview added by tsickle
 * Generated from: lib/scroll-here.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input } from '@angular/core';
export class ScrollHereComponent {
    /**
     * @param {?} el
     */
    constructor(el) {
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
    ngAfterViewChecked() {
        if (!this.el.nativeElement.isConnected) {
            this.isScrolled = false;
        }
        else if (this.isScrolled === false) {
            /** @type {?} */
            let scrollableParent = this.scrollableParent;
            if (!scrollableParent) {
                scrollableParent = this.el.nativeElement.parentElement;
                /** @type {?} */
                const overflowRegex = /(auto|scroll|hidden)/;
                while (scrollableParent && scrollableParent instanceof HTMLElement) {
                    /** @type {?} */
                    let overflowValues = window.getComputedStyle(scrollableParent).overflow +
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
    }
}
ScrollHereComponent.decorators = [
    { type: Component, args: [{
                selector: 'ar-scroll-here',
                template: '<ng-content></ng-content>'
            }] }
];
/** @nocollapse */
ScrollHereComponent.ctorParameters = () => [
    { type: ElementRef }
];
ScrollHereComponent.propDecorators = {
    scrollableParent: [{ type: Input }],
    offset: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsLWhlcmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFybWFuLm1hZGkvc2Nyb2xsLWhlcmUvIiwic291cmNlcyI6WyJsaWIvc2Nyb2xsLWhlcmUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQW9CLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU0vRSxNQUFNLE9BQU8sbUJBQW1COzs7O0lBYzlCLFlBQW9CLEVBQWM7UUFBZCxPQUFFLEdBQUYsRUFBRSxDQUFZOzs7O1FBSnpCLFdBQU0sR0FBVyxDQUFDLENBQUM7UUFFcEIsZUFBVSxHQUFHLEtBQUssQ0FBQztJQUVXLENBQUM7Ozs7SUFFdkMsa0JBQWtCO1FBQ2hCLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUM7WUFDckMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7U0FFekI7YUFBTSxJQUFHLElBQUksQ0FBQyxVQUFVLEtBQUssS0FBSyxFQUFFOztnQkFFL0IsZ0JBQWdCLEdBQWdCLElBQUksQ0FBQyxnQkFBZ0I7WUFDekQsSUFBRyxDQUFDLGdCQUFnQixFQUFFO2dCQUNwQixnQkFBZ0IsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUM7O3NCQUNqRCxhQUFhLEdBQUcsc0JBQXNCO2dCQUU1QyxPQUFNLGdCQUFnQixJQUFJLGdCQUFnQixZQUFZLFdBQVcsRUFBRTs7d0JBQzdELGNBQWMsR0FDaEIsTUFBTSxDQUFDLGdCQUFnQixDQUFDLGdCQUFnQixDQUFDLENBQUMsUUFBUTt3QkFDbEQsTUFBTSxDQUFDLGdCQUFnQixDQUFDLGdCQUFnQixDQUFDLENBQUMsU0FBUyxDQUFDLElBQUk7b0JBQ3hELHVEQUF1RDs7b0JBQXZELHVEQUF1RDtvQkFDekQsSUFBRyxnQkFBZ0IsQ0FBQyxZQUFZLEdBQUcsZ0JBQWdCLENBQUMsWUFBWTt3QkFDOUQsYUFBYSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRTt3QkFDcEMsTUFBTTtxQkFDUDtvQkFDRCxnQkFBZ0IsR0FBRyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUE7aUJBQ2xEO2dCQUVELElBQUcsQ0FBQyxnQkFBZ0IsSUFBSSxDQUFDLENBQUMsZ0JBQWdCLFlBQVksV0FBVyxDQUFDLEVBQUU7b0JBQ2xFLGdFQUFnRTtvQkFDaEUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLEVBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUMsQ0FBQyxDQUFDO29CQUM5RixPQUFPO2lCQUNSO2FBQ0Y7WUFDRCxJQUFHLGdCQUFnQixJQUFJLGdCQUFnQixDQUFDLFlBQVksR0FBRyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUU7O29CQUNoRixTQUFTLEdBQUcsZ0JBQWdCLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxHQUFHOztvQkFDeEQsUUFBUSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLHFCQUFxQixFQUFFLENBQUMsR0FBRzs7b0JBQzVELGlCQUFpQixHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztnQkFDdEQsZ0JBQWdCLENBQUMsU0FBUyxHQUFHLGlCQUFpQixHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUN4SCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQzthQUN4QjtTQUNGO0lBQ0gsQ0FBQzs7O1lBekRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixRQUFRLEVBQUUsMkJBQTJCO2FBQ3RDOzs7O1lBTG1CLFVBQVU7OzsrQkFXM0IsS0FBSztxQkFLTCxLQUFLOzs7Ozs7O0lBTE4sK0NBQXVDOzs7OztJQUt2QyxxQ0FBNEI7Ozs7O0lBRTVCLHlDQUEyQjs7Ozs7SUFFZixpQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEFmdGVyVmlld0NoZWNrZWQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FyLXNjcm9sbC1oZXJlJyxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+Jyxcbn0pXG5leHBvcnQgY2xhc3MgU2Nyb2xsSGVyZUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0NoZWNrZWQge1xuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmUgd2hpY2ggcGFyZW50IHNob3VsZCBzY3JvbGxlLCBpZiBub3QgZ2l2ZW4gaXQgd2lsbCBiZSBkZXRlY3RlZCBhdXRvbWF0aWNhbGx5XG4gICAqL1xuICBASW5wdXQoKSBzY3JvbGxhYmxlUGFyZW50OiBIVE1MRWxlbWVudDtcbiAgXG4gIC8qKlxuICAgKiBvZmZzZXQgdGhlIHNjcm9sbCBhZnRlciBzY3JvbGxpbmcgaW50byB0aGUgbWlkZGxlIG9mIHRoZSBjb250YWluZXIgdmlldywgZGVmYXVsdCBpcyAwXG4gICAqL1xuICBASW5wdXQoKSBvZmZzZXQ6IG51bWJlciA9IDA7XG5cbiAgcHJpdmF0ZSBpc1Njcm9sbGVkID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZikgeyB9XG5cbiAgbmdBZnRlclZpZXdDaGVja2VkKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5lbC5uYXRpdmVFbGVtZW50LmlzQ29ubmVjdGVkKXtcbiAgICAgIHRoaXMuaXNTY3JvbGxlZCA9IGZhbHNlO1xuICAgIFxuICAgIH0gZWxzZSBpZih0aGlzLmlzU2Nyb2xsZWQgPT09IGZhbHNlKSB7XG5cbiAgICAgIGxldCBzY3JvbGxhYmxlUGFyZW50OiBIVE1MRWxlbWVudCA9IHRoaXMuc2Nyb2xsYWJsZVBhcmVudDtcbiAgICAgIGlmKCFzY3JvbGxhYmxlUGFyZW50KSB7XG4gICAgICAgIHNjcm9sbGFibGVQYXJlbnQgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICAgICAgY29uc3Qgb3ZlcmZsb3dSZWdleCA9IC8oYXV0b3xzY3JvbGx8aGlkZGVuKS87XG4gICAgICAgIFxuICAgICAgICB3aGlsZShzY3JvbGxhYmxlUGFyZW50ICYmIHNjcm9sbGFibGVQYXJlbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICAgIGxldCBvdmVyZmxvd1ZhbHVlcyA9ICBcbiAgICAgICAgICAgIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHNjcm9sbGFibGVQYXJlbnQpLm92ZXJmbG93ICsgXG4gICAgICAgICAgICB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShzY3JvbGxhYmxlUGFyZW50KS5vdmVyZmxvd1kgLy8rIFxuICAgICAgICAgICAgLy8gd2luZG93LmdldENvbXB1dGVkU3R5bGUoc2Nyb2xsYWJsZVBhcmVudCkub3ZlcmZsb3dYO1xuICAgICAgICAgIGlmKHNjcm9sbGFibGVQYXJlbnQuc2Nyb2xsSGVpZ2h0ID4gc2Nyb2xsYWJsZVBhcmVudC5jbGllbnRIZWlnaHQgJiZcbiAgICAgICAgICAgIG92ZXJmbG93UmVnZXgudGVzdChvdmVyZmxvd1ZhbHVlcykpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBzY3JvbGxhYmxlUGFyZW50ID0gc2Nyb2xsYWJsZVBhcmVudC5wYXJlbnRFbGVtZW50XG4gICAgICAgIH1cblxuICAgICAgICBpZighc2Nyb2xsYWJsZVBhcmVudCB8fCAhKHNjcm9sbGFibGVQYXJlbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHtcbiAgICAgICAgICAvLyBDb3VsZCBub3QgZmluZCBhIHNjcm9sbGFibGUgcGFyZW50IHNvIGxlYXZlIGl0IHRvIHRoZSBicm93c2VyXG4gICAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnNjcm9sbEludG9WaWV3KHtiZWhhdmlvcjogXCJzbW9vdGhcIiwgYmxvY2s6IFwiY2VudGVyXCIsIGlubGluZTogXCJjZW50ZXJcIn0pO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYoc2Nyb2xsYWJsZVBhcmVudCAmJiBzY3JvbGxhYmxlUGFyZW50LnNjcm9sbEhlaWdodCA+IHNjcm9sbGFibGVQYXJlbnQuY2xpZW50SGVpZ2h0KSB7XG4gICAgICAgIHZhciBwYXJlbnRUb3AgPSBzY3JvbGxhYmxlUGFyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDsgXG4gICAgICAgIHZhciBjaGlsZFRvcCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7IFxuICAgICAgICB2YXIgY2hpbGRQYXJlbnRPZmZzZXQgPSBNYXRoLmFicyhwYXJlbnRUb3AgLSBjaGlsZFRvcClcbiAgICAgICAgc2Nyb2xsYWJsZVBhcmVudC5zY3JvbGxUb3AgPSBjaGlsZFBhcmVudE9mZnNldCAtIE1hdGguYWJzKHNjcm9sbGFibGVQYXJlbnQub2Zmc2V0SGVpZ2h0IC8gMikgKyBwYXJzZUludCh0aGlzLm9mZnNldCsnJyk7XG4gICAgICAgIHRoaXMuaXNTY3JvbGxlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==