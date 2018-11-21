import { Component, OnInit } from '@angular/core';

/**
 * services
 * */
import { NumbersService } from '../../services/numbers.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  constructor(
    private numbers:NumbersService
  ) { }

  ngOnInit() {
  }

  navigate(view:string){
    this.numbers.navigate(view);
  }
}
