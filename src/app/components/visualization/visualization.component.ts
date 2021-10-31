import {Component, Input, OnChanges, OnDestroy, SimpleChanges} from '@angular/core';
import {IVisualizationStep} from '../../services/vigenere-cipher.service';
import {Subject} from 'rxjs';
import {interval} from 'rxjs/internal/observable/interval';
import {takeUntil} from 'rxjs/internal/operators/takeUntil';

export interface ICurrentVisualizationStep {
  step: IVisualizationStep;
  index: number;
}

@Component({
  selector: 'app-visualization',
  templateUrl: './visualization.component.html',
  styleUrls: ['./visualization.component.css']
})
export class VisualizationComponent implements OnChanges, OnDestroy {
  @Input() header: string;
  @Input() visualizationSteps: IVisualizationStep[];

  currentlyPlaying = false;
  private stopPlaying$ = new Subject<void>();
  private sliderTimeout = 1000;

  currentStep: ICurrentVisualizationStep;

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes.visualizationSteps?.currentValue?.length
    ) {
      this.restart();
    }
  }

  ngOnDestroy(): void {
    this.stopPlaying$.next();
    this.stopPlaying$.complete();
  }

  prev(): void {
    const index = this.currentStep.index - 1;
    this.currentStep = {
      step: this.visualizationSteps[index],
      index
    };
  }

  controlPlaying(): void {
    if (this.currentlyPlaying) {
      this.currentlyPlaying = !this.currentlyPlaying;
      this.stopPlaying$.next();
      return;
    }

    this.currentlyPlaying = !this.currentlyPlaying;
    interval(this.sliderTimeout)
      .pipe(takeUntil(this.stopPlaying$))
      .subscribe(() => {
        this.stopPlayingOnLastStep();

        this.next();
      });
  }

  next(): void {
    const index = this.currentStep.index + 1;

    if (index > this.visualizationSteps.length - 1) {
      return;
    }
    this.currentStep = {
      step: this.visualizationSteps[index],
      index
    };
  }

  restart(): void {
    this.currentStep = {
      step: this.visualizationSteps[0],
      index: 0
    };
  }

  private stopPlayingOnLastStep(): void {
    if (this.currentStep.index < this.visualizationSteps.length - 2) {
      return;
    }

    this.currentlyPlaying = false;
    this.stopPlaying$.next();
  }
}
