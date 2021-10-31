import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EncodeModule} from './encode/encode.module';
import {DecodeModule} from './decode/decode.module';
import {DocumentationModule} from './documentation/documentation.module';


@NgModule({
  imports: [
    CommonModule,
    EncodeModule,
    DecodeModule,
    DocumentationModule
  ],
  exports: [
    EncodeModule
  ]
})
export class ViewsModule {
}
