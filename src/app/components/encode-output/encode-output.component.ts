import {Component, Input} from '@angular/core';


@Component({
  selector: 'app-encode-output',
  templateUrl: './encode-output.component.html'
})
export class EncodeOutputComponent {
  @Input() encodedText: string;
}
