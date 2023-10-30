import { Component } from '@angular/core';

@Component({
  selector: 'app-reverse',
  templateUrl: './reverse.component.html',
  styleUrls: ['./reverse.component.css'],
})
export class ReverseComponent {
  inputString2: string = '';
  reversString: string = '';
  reverse() {
    this.reversString = this.inputString2.split('').reverse().join('');
  }
}
