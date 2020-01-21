import { ElementRef, AfterViewChecked } from '@angular/core';
export declare class ScrollHereComponent implements AfterViewChecked {
    private el;
    /**
     * Determine which parent should scrolle, if not given it will be detected automatically
     */
    scrollableParent: HTMLElement;
    /**
     * offset the scroll after scrolling into the middle of the container view, default is 0
     */
    offset: number;
    private isScrolled;
    constructor(el: ElementRef);
    ngAfterViewChecked(): void;
}
