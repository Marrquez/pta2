import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

/**
 * components
 * */
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PrintNumbersComponent } from './components/print-numbers/print-numbers.component';
import { CalculateModeComponent } from './components/calculate-mode/calculate-mode.component';

/**
 * pipes
 * */
import { ValidateNumberPipe } from './pipes/validate-number.pipe';
import { CalculateModePipe } from './pipes/calculate-mode.pipe';
import { ValidateAnagramaComponent } from './components/validate-anagrama/validate-anagrama.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PrintNumbersComponent,
    ValidateNumberPipe,
    CalculateModePipe,
    CalculateModeComponent,
    ValidateAnagramaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
