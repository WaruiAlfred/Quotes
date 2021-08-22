import { QuoteBlueprint } from './../quote-blueprint';
import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { faTrash, faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  faTrash = faTrash;
  faThumbsUp = faThumbsUp;
  faThumbsDown = faThumbsDown;

  @Input() quote!:QuoteBlueprint;
  @Output() uninterested = new EventEmitter<boolean> ();
  @Output() upVote = new EventEmitter<boolean> ();
  @Output() downVote = new EventEmitter<boolean> ();

  quoteDelete(useless:boolean){
    this.uninterested.emit(useless);
  }

  like(votePlus:boolean){
    this.upVote.emit(votePlus);
  }
  dislike(voteMinus:boolean){
    this.downVote.emit(voteMinus);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
