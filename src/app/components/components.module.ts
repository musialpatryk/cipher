import {NgModule} from '@angular/core';
import {OutputComponent} from './output/output.component';
import {InputComponent} from './input/input.component';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import { VisualizationComponent } from './visualization/visualization.component';
import { MatrixComponent } from './matrix/matrix.component';
import {AlphabetControllerComponent} from './alphabet-controller/alphabet-controller.component';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    AlphabetControllerComponent,
    OutputComponent,
    InputComponent,
    VisualizationComponent,
    MatrixComponent
  ],
  exports: [
    OutputComponent,
    InputComponent,
    VisualizationComponent,
    MatrixComponent,
    AlphabetControllerComponent
  ]
})
export class ComponentsModule {
}
