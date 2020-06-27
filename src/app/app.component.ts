import { Component } from '@angular/core';
import arrayWords from '../utils/words';
import arrayCountries from '../utils/countries';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'word-generator';

  words:string = '';
  type:string = 'Words';
  limit:number = 10;
  rangeLimit:number = 50;
  randomCountryOne:number = 0;
  randomCountryTwo:number = 0;
  max1:number = 4;
  min1:number = 1;
  max2:number = 10;
  min2:number = 5;

  handleSlideChange( newLimit : number ){
    this.limit = newLimit;
    this.max2 = newLimit;
  }

  generateWords(){
    this.type = 'Words';
    this.rangeLimit = 50;
    this.words = arrayWords.slice(0,this.limit).join(',');
  }

  random( max:number, min:number ){
    return Math.random()*(max-min)+2*min;
  }

  generateCountries(){
    this.type = 'Country';
    this.rangeLimit = 249;
    this.max1 = Math.floor(this.limit/2);
    this.min2 = Math.ceil(this.limit/2);
    this.randomCountryOne = Math.floor(this.random(this.max1, this.min1)) - this.min1;
    this.randomCountryTwo = Math.floor(this.random(this.max2, this.min2)) - this.min2;
    console.log("1 "+this.randomCountryOne);
    console.log("2 "+this.randomCountryTwo);
    this.words = arrayCountries.slice(this.randomCountryOne,this.randomCountryTwo).join(',');
  }
}
