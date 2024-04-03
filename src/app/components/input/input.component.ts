import {Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges} from '@angular/core';
import {UntypedFormControl, Validators} from '@angular/forms';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';
import {VigenereCipherService} from '../../services/vigenere-cipher.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html'
})
export class InputComponent implements OnInit, OnChanges, OnDestroy {
  @Input() removeWhitespaces = false;
  @Input() textInput: string;
  @Output() readonly textInputChange = new EventEmitter<string>();
  control = new UntypedFormControl();
  private destroy$ = new Subject<void>();

  constructor(
    private cipher: VigenereCipherService
  ) {
  }

 ngOnInit(): void {
   this.control.valueChanges
     .pipe(takeUntil(this.destroy$))
     .subscribe((value) => {
       this.textInputChange.emit(this.removeWhitespaces ? value.replace(/\s/g, '') : value);
     });

   this.cipher.alphabetChanges()
     .pipe(takeUntil(this.destroy$))
     .subscribe(() => {
       this.updateValidators();
     });
 }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.textInput?.currentValue) {
      this.control.setValue(this.textInput);
    }
    this.updateValidators();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private updateValidators(): void {
    this.control.setValidators([
      Validators.pattern(this.computePattern()),
      Validators.maxLength(255)
    ]);
    this.control.updateValueAndValidity();
  }

  private computePattern(): string {
    return `[${this.cipher.getAlphabet().join('|')}|\\s]*`;
  }
}
