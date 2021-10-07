import {Injectable} from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class VigenereCipherService {
  private alphabet = Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
  private matrix: string[][];

  encode(value: string, key: string): string {
    this.matrix = this.computeMatrix();

    if (key.length !== value.length) {
      key = this.transformKey(key, value.length);
    }
    const valueCharIndex = this.alphabet.findIndex(char => char === 'O');
    const passwordCharIndex = this.alphabet.findIndex(char => char === 'A');
    console.log(valueCharIndex, passwordCharIndex);
    console.log(this.matrix[valueCharIndex][passwordCharIndex]);
    return value;
  }

  getMatrix(): string[][] {
    return this.matrix ? this.matrix : this.computeMatrix();
  }

  private computeMatrix(): string[][] {
    return this.alphabet
      .map((char, index) => {
        return this.computeArrayLevel(index);
      });
  }

  private computeArrayLevel(push: number): string[] {
    const array = this.alphabet;
    const movedLevel = array.map((char, index) => {
      return array[index + push];
    });

    const firstEmptyItem = movedLevel.findIndex(value => typeof value === 'undefined');
    if (firstEmptyItem === -1) {
      return movedLevel;
    }

    for (let i = firstEmptyItem, j = 0; i < movedLevel.length; i++, j++) {
      movedLevel[i] = array[j];
    }
    return movedLevel;
  }

  private transformKey(key: string, length: number): string {
    let transformedKey = key.substr(0, length);

    let charIndex = 0;
    while (transformedKey.length < length) {
      if (key[charIndex]) {
        transformedKey += key[charIndex];
        charIndex++;
      } else {
        charIndex = 0;
      }
    }

    return transformedKey;
  }
}
