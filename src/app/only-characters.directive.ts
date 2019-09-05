import { Directive, OnInit, HostListener, ElementRef, HostBinding, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[onlyCharacters]'
})
export class OnlyCharactersDirective implements OnInit {

  @Input()
  classError : string;
  
  @HostBinding("class.error")
  error : boolean;

  @HostBinding("style.width")
  width : string;

  constructor(private el: ElementRef, private render: Renderer2) { }

  ngOnInit() {
    console.log("hola");
  }

  @HostListener("keydown", ["$event"])
  public onKeydown(event : any): void {
    const key = event.which;
    if(key >= 48 && key < 58){
      this.render.addClass(this.el, this.classError);
      event.preventDefault();
    } 
    console.log(event);
  }
}
