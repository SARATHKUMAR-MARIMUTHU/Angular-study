import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    name: string;
    addval: number;
    constructor() {
       this.name = 'sarath'
     }
  sayMyName() {
    console.log('My name is', this.name)
  } 
   myFunction(p1, p2) {
    this.addval = p1 + p2;
    console.log('My add is', this.addval)
   }
}


