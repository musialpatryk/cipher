import {Component} from '@angular/core';
import {IVisualizationStep, VigenereCipherService} from '../../services/vigenere-cipher.service';
import {FormControl} from '@angular/forms';


@Component({
  selector: 'app-encode',
  templateUrl: './encode.component.html',
})
export class EncodeComponent {
  textToEncode = 'TO JEST BARDZO TAJNY TEKST';
  passwordKey = 'TAJNE';
  encodedText: string;
  visualizationSteps: IVisualizationStep[];
  matrix: string[][];
  visualizationControl = new FormControl(false);

  constructor(
    private cipher: VigenereCipherService
  ) {
  }

  encode(): void {
    this.encodedText = this.cipher.encode(this.textToEncode, this.passwordKey);
    this.visualizationSteps = this.cipher.getVisualizationSteps();
    this.matrix = this.cipher.getMatrix();
  }
}
