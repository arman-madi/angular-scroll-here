import { Component, ElementRef, AfterViewChecked, Input } from '@angular/core';

@Component({
  selector: 'ar-scroll-here',
  template: '<ng-content></ng-content>',
})
export class ScrollHereComponent implements AfterViewChecked {

  /**
   * Determine which parent should scrolle, if not given it will be detected automatically
   */
  @Input() scrollableParent: HTMLElement;
  
  /**
   * offset the scroll after scrolling into the middle of the container view, default is 0
   */
  @Input() offset: number = 0;

  private isScrolled = false;

  constructor(private el: ElementRef) { }

  ngAfterViewChecked(): void {
    if (!this.el.nativeElement.isConnected){
      this.isScrolled = false;
    
    } else if(this.isScrolled === false) {

      let scrollableParent: HTMLElement = this.scrollableParent;
      if(!scrollableParent) {
        scrollableParent = this.el.nativeElement.parentElement;
        const overflowRegex = /(auto|scroll|hidden)/;
        
        while(scrollableParent && scrollableParent instanceof HTMLElement) {
          let overflowValues =  
            window.getComputedStyle(scrollableParent).overflow + 
            window.getComputedStyle(scrollableParent).overflowY //+ 
            // window.getComputedStyle(scrollableParent).overflowX;
          if(scrollableParent.scrollHeight > scrollableParent.clientHeight &&
            overflowRegex.test(overflowValues)) {
            break;
          }
          scrollableParent = scrollableParent.parentElement
        }

        if(!scrollableParent || !(scrollableParent instanceof HTMLElement)) {
          // Could not find a scrollable parent so leave it to the browser
          this.el.nativeElement.scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
          return;
        }
      }
      if(scrollableParent && scrollableParent.scrollHeight > scrollableParent.clientHeight) {
        var parentTop = scrollableParent.getBoundingClientRect().top; 
        var childTop = this.el.nativeElement.getBoundingClientRect().top; 
        var childParentOffset = Math.abs(parentTop - childTop)
        scrollableParent.scrollTop = childParentOffset - Math.abs(scrollableParent.offsetHeight / 2) + parseInt(this.offset+'');
        this.isScrolled = true;
      }
    }
  }

}
