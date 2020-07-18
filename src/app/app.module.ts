import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Hw15Component } from './hw15/hw15.component';
import { SearchPipe } from './hw15/search.pipe';
import { OrderModule } from 'ngx-order-pipe';

@NgModule({
  declarations: [
    AppComponent,
    Hw15Component,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    OrderModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  // exports:[],
  // entryComponents:[]
})
export class AppModule { }
