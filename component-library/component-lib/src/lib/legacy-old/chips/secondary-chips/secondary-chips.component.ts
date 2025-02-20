import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'lib-secondary-chips',
    templateUrl: './secondary-chips.component.html',
    standalone: false
})
export class SecondaryChipsComponent implements OnInit {
  @Input() chipContent?: string;

  constructor() {}

  ngOnInit() {}
}
