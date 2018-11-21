import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

/**
 * external libraries
 * */
import _ from "lodash";

@Component({
  selector: 'app-print-numbers',
  templateUrl: './print-numbers.component.html',
  styleUrls: ['./print-numbers.component.less']
})
export class PrintNumbersComponent implements OnInit {
  range = [];
  private counter:number = 0;
  constructor(
    private router: Router
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
    this.router.navigate([view, {}]);
  }

  /**
   * the quantity of numbers to show
   * @params: {}
   * */
  showNumbers(){
    this.range = _.range(this.counter);
  }
}
