import {Component} from '@angular/core';
import {IVisualizationStep, VigenereCipherService} from '../../services/vigenere-cipher.service';
import {FormControl} from '@angular/forms';


@Component({
  selector: 'app-decode',
  templateUrl: './decode.component.html'
})
export class DecodeComponent {
  encodedText = 'MO SRWM BJEHSO CNNGY CROLT';
  passwordKey = 'TAJNE';
  decodedText: string;
  visualizationSteps: IVisualizationStep[];
  visualizationControl = new FormControl(false);

  constructor(
    private cipher: VigenereCipherService
  ) {
  }

  decode(): void {
    this.decodedText = this.cipher.decode(this.encodedText, this.passwordKey);
    this.visualizationSteps = this.cipher.getVisualizationSteps();
  }
}
