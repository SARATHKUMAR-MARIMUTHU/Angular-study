import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-custom-propertybinding',
  templateUrl: './custom-propertybinding.component.html',
  styles: []
})
export class CustomPropertybindingComponent implements OnInit {
  @Input() myAge=10;
  constructor() { }

  ngOnInit() {
  }

}
