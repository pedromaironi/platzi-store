import { Directive , ElementRef} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(
    element: ElementRef
  ) {
    element.nativeElement.style.backgroundColor = 'red';
   }

}

/*

  Las directivas existen para modificar dinamicamente los comportamientos del Dom dinamicamente
*/
