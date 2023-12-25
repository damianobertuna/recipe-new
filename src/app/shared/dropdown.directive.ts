import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  'selector': '[appDropDown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;

  @HostListener('document:click', ['$event']) toggleOpen() {
    console.log('dropdown directive');
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }

  constructor(private elRef: ElementRef) {
  }

}
