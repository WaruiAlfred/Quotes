import { Component, OnInit } from '@angular/core';
import { QuoteBlueprint } from './../quote-blueprint';
import { faQuoteLeft,faQuoteRight} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  faQuoteLeft = faQuoteLeft;
  faQuoteRight = faQuoteRight;

  quotes: QuoteBlueprint[] = [
    new QuoteBlueprint (1,"The world is a dangerous place to live - not because of the people who are evil but because of the people who don't do anything about it.","Albert Einstein","John Luke",new Date(2019,7,12),4,1),
    new QuoteBlueprint (2,"Sometimes a man becomes more than his name,he becomes an inspiration to those who follow him and a threat to his foes","Karim Hassan","Lucy Amani",new Date(2018,7,12),7,0),
    new QuoteBlueprint (3,"Nice words never won a battle","Cato Krudger","Kyle Loo",new Date(2001,6,10),5,0),
    new QuoteBlueprint (4,"Imagination is more important than knowledge","Albert Einstein","Alex Thunder",new Date(2011,4,2),9,1)
  ];


  addNewQuote(quote:any) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.inputDate = new Date (quote.inputDate);
    this.quotes.push(quote)
  }

  deleteQuote(uninterested:any,index:number){
    if(uninterested){
      this.quotes.splice(index,1);
    }
  }

  toggleDetails(index:number){
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }

  likeQuote(upVote:any,index:number){
    if(upVote){
      this.quotes[index].upVotes++;
    }
  }

  dislikeQuote(downVote:any,index:number){
    if(downVote){
      this.quotes[index].downVotes++;
    }
  }

  highlightHighest(index:number) {
   var highest = this.quotes[index].upVotes;
   for (var j = 0; j<this.quotes.length; j++){
    if(this.quotes[j].upVotes>highest){
      highest = this.quotes[j].upVotes;
    }
   }
   return highest;
  }


  ngOnInit(): void {
  }

}
