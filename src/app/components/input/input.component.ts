import {Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormControl} from '@angular/forms';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html'
})
export class InputComponent implements OnInit, OnChanges, OnDestroy {
  @Input() removeWhitespaces = false;
  @Input() textInput: string;
  @Output() readonly textInputChange = new EventEmitter<string>();
  control = new FormControl();
  private destroy$ = new Subject<void>();

 ngOnInit(): void {
   this.control.valueChanges
     .pipe(takeUntil(this.destroy$))
     .subscribe((value) => {
       this.textInputChange.emit(this.removeWhitespaces ? value.replace(/\s/g, '') : value);
     });
 }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.textInput?.currentValue) {
      this.control.setValue(this.textInput);
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
