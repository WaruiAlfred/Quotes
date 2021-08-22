import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { QuoteBlueprint } from './../quote-blueprint';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  newQuote = new QuoteBlueprint(0,"","","",new Date(),0,0);
  @Output() addQuote = new EventEmitter<QuoteBlueprint>();


  submitQuote() {
    this.addQuote.emit(this.newQuote);
    this.newQuote = new QuoteBlueprint(0,"","","",new Date(),0,0);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
