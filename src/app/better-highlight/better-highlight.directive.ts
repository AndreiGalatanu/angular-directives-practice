import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective {
  @Input() defaultColor: string = 'pink';
  @Input() highlightColor: string = 'orange';

  @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'pink')
    this.backgroundColor=this.defaultColor;
  }
  @HostListener('mouseenter') mouseover(eventData: Event) {

    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'orange')
    this.backgroundColor = this.highlightColor;
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {

    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'pink')
    this.backgroundColor = this.defaultColor;

  }
}
