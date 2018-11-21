import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class NumbersService {
  constructor(
    private router: Router
  ){}

  navigate(view:string){
    this.router.navigate([view, {}]);
  }
}
