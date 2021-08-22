export class QuoteBlueprint {

  public showDetails:boolean;
  constructor(public id:number, public quoteDetail:string, public author:string, public submitter:string,public inputDate:Date, public upVotes:number, public downVotes:number) {
    this.showDetails = false;
  }
}
