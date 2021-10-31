import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EncodeComponent} from './encode.component';
import {ComponentsModule} from '../../components/components.module';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
    imports: [
        CommonModule,
        ComponentsModule,
        ReactiveFormsModule,
    ],
  declarations: [
    EncodeComponent
  ]
})
export class EncodeModule {
}
