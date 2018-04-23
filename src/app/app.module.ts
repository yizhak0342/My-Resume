import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {TabModule} from 'angular-tabs-component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, TabModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
