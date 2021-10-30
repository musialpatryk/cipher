import {NgModule} from '@angular/core';
import {DecodeComponent} from './decode.component';
import {CommonModule} from '@angular/common';
import {ComponentsModule} from '../../components/components.module';


@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
  ],
  declarations: [
    DecodeComponent
  ]
})
export class DecodeModule {
}
