import {Component} from '@angular/core';
import {ICurrentVisualizationStep} from '../../components/visualization/visualization.component';


@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.css']
})
export class DocumentationComponent {
  exampleStep: ICurrentVisualizationStep = {
    step: {
      id: 0,
      prevChar: 'S',
      nextChar: 'W',
      keyChar: 'E'
    },
    index: 0
  };

  decodeExampleStep: ICurrentVisualizationStep = {
    step: {
      id: 0,
      prevChar: 'S',
      nextChar: 'W',
      keyChar: 'E'
    },
    index: 0
  };
}
