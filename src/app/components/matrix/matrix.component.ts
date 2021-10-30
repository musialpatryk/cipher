import {Component, Input, OnInit} from '@angular/core';
import {ICurrentVisualizationStep} from '../visualization/visualization.component';
import {IMatrix, VigenereCipherService} from '../../services/vigenere-cipher.service';

@Component({
  selector: 'app-matrix',
  templateUrl: './matrix.component.html',
  styleUrls: ['./matrix.component.css']
})
export class MatrixComponent implements OnInit {
  @Input() currentVisualizationStep: ICurrentVisualizationStep;
  matrix: IMatrix;

  constructor(
    cipher: VigenereCipherService
  ) {
    this.matrix = cipher.getMatrix();
  }

  ngOnInit(): void {
  }

}
