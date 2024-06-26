import {Component} from '@angular/core';
import {UntypedFormControl, Validators} from '@angular/forms';
import {VigenereCipherService} from '../../services/vigenere-cipher.service';


@Component({
  selector: 'app-alphabet-controller',
  templateUrl: './alphabet-controller.component.html'
})
export class AlphabetControllerComponent {
  visibilityControl = new UntypedFormControl(false);
  newCharControl = new UntypedFormControl('', Validators.maxLength(1));
  alphabet: string[];
  error = false;

  constructor(
    private cipher: VigenereCipherService
  ) {
    this.alphabet = cipher.getAlphabet();
  }

  add(): void {
    const newChar = this.newCharControl.value;
    if (this.alphabet.includes(newChar)) {
      this.error = true;
      return;
    }

    this.cipher.widenAlphabet(this.newCharControl.value);
    this.error = false;
  }
}
