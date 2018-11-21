import { Component, OnInit } from '@angular/core';

/**
 * external libraries
 * */
import _ from "lodash";

/**
 * services
 * */
import { NumbersService } from '../../services/numbers.service';

@Component({
  selector: 'app-print-numbers',
  templateUrl: './print-numbers.component.html',
  styleUrls: ['./print-numbers.component.less']
})
export class PrintNumbersComponent implements OnInit {
  range = [];
  private counter:number = 0;
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
   * the quantity of numbers to show
   * @params: {}
   * */
  showNumbers(){
    this.range = _.range(this.counter);
  }
}
