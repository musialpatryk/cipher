import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MainComponent } from './app/main/main.component';
import {EncodeInputModule} from './app/modules/encode-input/encode-input.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {ComponentsModule} from './app/components/components.module';

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    EncodeInputModule,
    NgbModule
  ],
  bootstrap: [MainComponent]
})
export class MainModule { }
