import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EncodeComponent} from './encode.component';
import {ComponentsModule} from '../../components/components.module';


@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
  ],
  declarations: [
    EncodeComponent
  ]
})
export class EncodeModule {
}
