import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private hostEl:ElementRef) { 
  hostEl.nativeElement.style="background-color:yellow";
}
  @HostBinding('style.color') borderColor!:string;

  @HostListener('mouseenter')
  public onEneter(){
    this.hostEl.nativeElement.style="background-color:orange";
    this.borderColor="red";
  }

  @HostListener('mouseleave')
  public onLeave(){
    this.hostEl.nativeElement.style="background-color:blue";
  }
}
