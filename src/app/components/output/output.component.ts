import {Component, Input} from '@angular/core';


@Component({
  selector: 'app-output',
  templateUrl: './output.component.html'
})
export class OutputComponent {
  @Input() output: string;
}
