import {Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormControl} from '@angular/forms';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-encode-input',
  templateUrl: './encode-input.component.html'
})
export class EncodeInputComponent implements OnInit, OnChanges, OnDestroy {
  encodeText = new FormControl();
  @Input() textInput: string;
  @Output() readonly textInputChange = new EventEmitter<string>();
  private destroy$ = new Subject<void>();

 ngOnInit(): void {
   this.encodeText.valueChanges
     .pipe(takeUntil(this.destroy$))
     .subscribe((value) => {
       this.textInputChange.emit(value);
     });
 }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.textInput?.currentValue) {
      this.encodeText.setValue(this.textInput);
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
