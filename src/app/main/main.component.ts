import { Component } from '@angular/core';
import {IVisualizationStep, VigenereCipherService} from '../services/vigenere-cipher.service';

@Component({
  selector: 'app-root',
  templateUrl: './main.component.html'
})
export class MainComponent {
  textToEncode = 'TO JEST BARDZO TAJNY TEKST';
  encodedText: string;
  decodedText: string;
  matrix: string[][];
  visualizationSteps: IVisualizationStep[];

  constructor(
    private cipher: VigenereCipherService
  ) {
  }

  encode(): void {
    this.encodedText = this.cipher.encode(this.textToEncode, 'TAJNE');
    this.visualizationSteps = this.cipher.getVisualizationSteps();
  }

  decode(): void {
    this.decodedText = this.cipher.decode(this.encodedText, 'TAJNE');
    this.visualizationSteps = this.cipher.getVisualizationSteps();
  }
}
