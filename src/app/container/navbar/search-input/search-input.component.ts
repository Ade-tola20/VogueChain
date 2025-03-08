import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'search-input',
  imports: [CommonModule],
  templateUrl: './search-input.component.html',
  styleUrl: './search-input.component.css',
})
export class SearchInputComponent {
  isFocused: boolean = false;

  handleFocus() {
    this.isFocused = true;
  }

  handleBlur() {
    this.isFocused = false;
  }
}
