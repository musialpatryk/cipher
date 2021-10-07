import { Component } from '@angular/core';
import {VigenereCipherService} from '../services/vigenere-cipher.service';

@Component({
  selector: 'app-root',
  templateUrl: './main.component.html'
})
export class MainComponent {
  textToEncode = 'TO JEST BARDZO TAJNY TEKST';
  encodedText: string;
  matrix: string[][];

  constructor(
    private cipher: VigenereCipherService
  ) {
    this.matrix = cipher.getMatrix();
  }

  encode(): void {
    this.encodedText = this.cipher.encode(this.textToEncode, 'TAJNE');
  }
}
