import {NgModule} from '@angular/core';
import {OutputComponent} from './output/output.component';
import {InputComponent} from './input/input.component';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import { VisualizationComponent } from './visualization/visualization.component';
import { MatrixComponent } from './matrix/matrix.component';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    OutputComponent,
    InputComponent,
    VisualizationComponent,
    MatrixComponent
  ],
  exports: [
    OutputComponent,
    InputComponent,
    VisualizationComponent
  ]
})
export class ComponentsModule {
}
