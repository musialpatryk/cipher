import {Component} from '@angular/core';
import {IVisualizationStep, VigenereCipherService} from '../../services/vigenere-cipher.service';


@Component({
  selector: 'app-encode',
  templateUrl: './encode.component.html',
})
export class EncodeComponent {
  textToEncode = 'TO JEST BARDZO TAJNY TEKST';
  encodedText: string;
  visualizationSteps: IVisualizationStep[];
  matrix: string[][];

  constructor(
    private cipher: VigenereCipherService
  ) {
  }

  encode(): void {
    this.encodedText = this.cipher.encode(this.textToEncode, 'TAJNE');
    this.visualizationSteps = this.cipher.getVisualizationSteps();
    this.matrix = this.cipher.getMatrix();
  }
}
