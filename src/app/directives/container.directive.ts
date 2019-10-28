import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appContainer]'
})
export class ContainerDirective {
  constructor(el: ElementRef) {
    el.nativeElement.style.paddingTop = '50px';
    el.nativeElement.style.marginLeft = '10%';
    el.nativeElement.style.marginRight = '10%';
  }
}
