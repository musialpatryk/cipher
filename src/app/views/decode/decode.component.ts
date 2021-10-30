import {Component} from '@angular/core';
import {IVisualizationStep, VigenereCipherService} from '../../services/vigenere-cipher.service';


@Component({
  selector: 'app-decode',
  templateUrl: './decode.component.html'
})
export class DecodeComponent {
  encodedText = 'MO SRWM BJEHSO CNNGY CROLT';
  decodedText: string;
  visualizationSteps: IVisualizationStep[];

  constructor(
    private cipher: VigenereCipherService
  ) {
  }

  decode(): void {
    this.decodedText = this.cipher.decode(this.encodedText, 'TAJNE');
    this.visualizationSteps = this.cipher.getVisualizationSteps();
  }
}
