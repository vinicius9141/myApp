import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-def-button',
  templateUrl: './def-button.component.html',
  styleUrls: ['./def-button.component.css'],
})
export class DefButtonComponent {
  @Input() text_button: string = '';
  constructor() {}
}
