import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {EncodeInputComponent} from './encode-input.component';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    EncodeInputComponent
  ],
  exports: [
    EncodeInputComponent
  ]
})
export class EncodeInputModule {
}
