import { Component, OnInit } from '@angular/core';

/**
 * services
 * */
import { NumbersService } from '../../services/numbers.service';

@Component({
  selector: 'app-validate-anagrama',
  templateUrl: './validate-anagrama.component.html',
  styleUrls: ['./validate-anagrama.component.less']
})
export class ValidateAnagramaComponent implements OnInit {
  private firstWord:string = '';
  private secondWord:string = '';
  private isAnagrama:boolean = true;
  constructor(
    private numbers:NumbersService
  ) { }

  ngOnInit() {
  }

  /**
   * in order to navigate to the given view
   * @params:{
   *     view:string: view to navigate
   * }
   * */
  navigate(view:string){
    this.numbers.navigate(view);
  }

  /**
   * in order to validate if is anagram
   * @params:{ }
   * */
  validateWords(){
    if(this.firstWord.toLowerCase() === this.secondWord.toLowerCase()){
      this.isAnagrama = true;
    } else {
      this.isAnagrama = this.firstWord.toLowerCase().split("").sort().join("") === this.secondWord.toLowerCase().split("").sort().join("");
    }
  }
}
