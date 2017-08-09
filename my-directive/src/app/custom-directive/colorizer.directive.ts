  import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';
// ng g d dddirectivename
@Directive({
  selector: '[appColorizer]'  // custom directive directive can be any .class #id
})
export class ColorizerDirective {
   
  constructor(private elementRef: ElementRef, private renderer:Renderer2) {
    console.log(ElementRef);
    this.renderer.setAttribute(this.elementRef.nativeElement,'class','my-colorizer');
    this.renderer.setAttribute(this.elementRef.nativeElement,'data-app-id','2');
    this.renderer.setStyle(this.elementRef.nativeElement,'background-color','red');

    let spanElement = this.renderer.createElement('span');
    this.renderer.setProperty(spanElement,'innerText','powered by Colorizer');
    this.renderer.setProperty(spanElement,'style','float:right; font-size:10px;');
    this.renderer.appendChild(this.elementRef.nativeElement,spanElement);

    let inputElement = this.renderer.createElement('input');
    this.renderer.setProperty(inputElement,'value','powered by sarath');
    this.renderer.appendChild(this.elementRef.nativeElement,inputElement);

    let buttonElement = this.renderer.createElement('button');
    this.renderer.setProperty(buttonElement,'type','button');
    this.renderer.setProperty(buttonElement,'innerText','button');
    this.renderer.setProperty(buttonElement,'style','float:left; margin-top:35px; ');
    this.renderer.setAttribute(buttonElement,'click','showText()');
    
    this.renderer.appendChild(this.elementRef.nativeElement,buttonElement);
    
  }

  @HostListener('mouseover',['$event']) changeColor(event: Event){
    console.log(event.target)
    this.renderer.setProperty(this.elementRef.nativeElement,'style','background-color:yellow;');

  }

  @HostListener('mouseleave',['$event']) changeColor2(event: Event){
    this.renderer.setProperty(this.elementRef.nativeElement,'style','background-color:red;');
  }

  @HostListener('click') showText(){
    console.log('background-color:red;');

  }



  }
