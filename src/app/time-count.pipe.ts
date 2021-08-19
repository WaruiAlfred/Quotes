import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeCount'
})
export class TimeCountPipe implements PipeTransform {

  transform(value: any): number {
    let today:Date = new Date();
    let todayTimeless:any =new Date(today.getFullYear(),today.getMonth(),today.getDate());
    var dateDifference = Math.abs(todayTimeless - value);
    const daysSeconds = 86400;
    var dateDifferenceSeconds = dateDifference * 0.001;
    var timeCounter = dateDifferenceSeconds/daysSeconds;
    var absoluteTime = parseInt(timeCounter.toFixed());

    if(absoluteTime >= 1 && todayTimeless > value) {
      return absoluteTime;
    } else {
      return 0;
    }
  }

}
