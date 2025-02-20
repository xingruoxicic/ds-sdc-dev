import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'lib-chip-item',
    templateUrl: './chip-item.component.html',
    standalone: false
})
export class ChipItemComponent {
  @Input() chipContent?: string;
  @Output() iconClickEvent = new EventEmitter();

  constructor() {}

  onIconClick() {
    this.iconClickEvent.emit();
  }

  onEnterKeyPress() {
    this.iconClickEvent.emit();
  }
}
