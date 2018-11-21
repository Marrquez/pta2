import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/**
 * Components
 * */
import { HomeComponent } from './components/home/home.component';
import { PrintNumbersComponent } from './components/print-numbers/print-numbers.component';
import { CalculateModeComponent } from './components/calculate-mode/calculate-mode.component';

const routes: Routes = [
  {
    path: 'calculate-mode',
    component: CalculateModeComponent
  },
  {
    path: 'print-numbers',
    component: PrintNumbersComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: '**',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
