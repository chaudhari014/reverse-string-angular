import { Component } from '@angular/core';

@Component({
  selector: 'app-reverse',
  templateUrl: './reverse.component.html',
  styleUrls: ['./reverse.component.css'],
})
export class ReverseComponent {
  inputString: string = '';
  reversString: string = '';
  reverse() {
    this.reversString = this.inputString.split('').reverse().join('');
  }
}
