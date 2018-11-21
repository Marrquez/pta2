import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-calculate-mode',
  templateUrl: './calculate-mode.component.html',
  styleUrls: ['./calculate-mode.component.less']
})
export class CalculateModeComponent implements OnInit {
  public numbers:Array<number> = [];
  private nuevo:number = 0;

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
   * add new number to array
   * @params: {}
   * */
  addNumber(){
    this.numbers.push(this.nuevo);
  }
}
