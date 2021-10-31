import {NgModule} from '@angular/core';
import {DecodeComponent} from './decode.component';
import {CommonModule} from '@angular/common';
import {ComponentsModule} from '../../components/components.module';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
    imports: [
        CommonModule,
        ComponentsModule,
        ReactiveFormsModule,
    ],
  declarations: [
    DecodeComponent
  ]
})
export class DecodeModule {
}
