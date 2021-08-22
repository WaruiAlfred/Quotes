import { Directive, ElementRef } from '@angular/core';
import { QuoteBlueprint } from './quote-blueprint';

@Directive({
  selector: '[appHighlighter]'
})
export class HighlighterDirective {

  constructor(private elem:ElementRef) {
    this.elem.nativeElement.style.backgroundColor="blue";

  }

}
