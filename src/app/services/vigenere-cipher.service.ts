import {Injectable} from '@angular/core';

export interface IVisualizationStep {
  id: number;
  prevChar: string;
  nextChar: string;
  keyChar: string;
}

export type IMatrix = string[][];

@Injectable({
  providedIn: 'root'
})
export class VigenereCipherService {
  private alphabet = Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
  private matrix: IMatrix;
  private visualizationSteps: IVisualizationStep[] = [];

  encode(value: string, key: string): string {
    this.resetVisualizationSteps();

    if (!this.matrix) {
      this.matrix = this.computeMatrix();
    }

    key = this.transformKey(key, value.length);
    let keyIndex = 0;
    const encodedValueArray = Array.from(value).map((char) => {
      const encodedChar = this.encodeCharacter(char, key[keyIndex]);

      if (char !== ' ') {
        keyIndex++;
      }
      return encodedChar;
    });

    return encodedValueArray.join('');
  }

  decode(encodedValue: string, key: string): string {
    this.resetVisualizationSteps();

    if (!this.matrix) {
      this.matrix = this.computeMatrix();
    }
    key = this.transformKey(key, encodedValue.length);

    let keyIndex = 0;
    const decodedValueArray = Array.from(encodedValue).map((char) => {
      const decodedChar = this.decodeCharacter(char, key[keyIndex]);

      if (char !== ' ') {
        keyIndex++;
      }
      return decodedChar;
    });

    return decodedValueArray.join('');
  }

  getAlphabet(): string[] {
    return this.alphabet;
  }

  getVisualizationSteps(): IVisualizationStep[] {
    return this.visualizationSteps;
  }

  /**
   * Add all characters from given string to alphabet.
   */
  widenAlphabet(charactersString: string): void {
    this.alphabet.push(...Array.from(charactersString));
  }

  private decodeCharacter(characterToDecode: string, passwordChar: string): string {
    if (characterToDecode === ' ') {
      return characterToDecode;
    }

    const col = this.matrix[0].findIndex(char => char === passwordChar);
    const row = this.matrix.findIndex((char, index) => {
      return characterToDecode === this.matrix[index][col];
    });
    const decodedChar = this.matrix[row][0];

    this.registerStep(characterToDecode, decodedChar, passwordChar);
    return decodedChar;
  }

  private encodeCharacter(characterToEncode: string, passwordChar: string): string {
    if (characterToEncode === ' ') {
      return characterToEncode;
    }

    const characterToEncodeIndex = this.alphabet.findIndex(char => char === characterToEncode);
    const passwordCharIndex = this.alphabet.findIndex(char => char === passwordChar);
    const encodedChar = this.matrix[characterToEncodeIndex][passwordCharIndex];

    this.registerStep(characterToEncode, encodedChar, passwordChar);

    return encodedChar;
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

  private registerStep(prevChar: string, nextChar: string, keyChar: string): void {
    this.visualizationSteps.push({
      id: this.visualizationSteps.length,
      prevChar,
      nextChar,
      keyChar
    });
  }

  private resetVisualizationSteps(): void {
    this.visualizationSteps = [];
  }
}
