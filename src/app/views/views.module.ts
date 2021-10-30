import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EncodeModule} from './encode/encode.module';
import {DecodeModule} from './decode/decode.module';


@NgModule({
  imports: [
    CommonModule,
    EncodeModule,
    DecodeModule
  ],
  exports: [
    EncodeModule
  ]
})
export class ViewsModule {
}
