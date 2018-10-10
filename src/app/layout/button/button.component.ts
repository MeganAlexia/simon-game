import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() color: string;
  @Input() id: number;
  @Input() disabled: boolean;

  @Output() change: EventEmitter<number> = new EventEmitter<number>();

  onClick(value): void {
    this.change.emit(value);
  }
}
