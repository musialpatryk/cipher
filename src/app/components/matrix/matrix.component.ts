import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {ICurrentVisualizationStep} from '../visualization/visualization.component';
import {IMatrix, VigenereCipherService} from '../../services/vigenere-cipher.service';

@Component({
  selector: 'app-matrix',
  templateUrl: './matrix.component.html',
  styleUrls: ['./matrix.component.css']
})
export class MatrixComponent implements OnChanges {
  @Input() currentVisualizationStep: ICurrentVisualizationStep;
  matrix: IMatrix;
  inputCharIndex: number;
  keyCharIndex: number;

  constructor(
    cipher: VigenereCipherService
  ) {
    this.matrix = cipher.getMatrix();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.currentVisualizationStep) {
      this.updateCharIndex();
    }
  }

  private updateCharIndex(): void {
    this.inputCharIndex = this.matrix[0].findIndex((char) => {
      return this.currentVisualizationStep.step.prevChar === char;
    });

    this.keyCharIndex = this.matrix.findIndex((level) => {
      return level[0] === this.currentVisualizationStep.step.keyChar;
    });
  }

}
