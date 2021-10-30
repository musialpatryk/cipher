import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MainComponent } from './main.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppRoutingModule} from './app/app-routing.module';
import {ViewsModule} from './app/views/views.module';

@NgModule({
  declarations: [
    MainComponent,
  ],
  imports: [
    AppRoutingModule,
    ViewsModule,
    BrowserModule,
    NgbModule
  ],
  bootstrap: [MainComponent]
})
export class MainModule { }
