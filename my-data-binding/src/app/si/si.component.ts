import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-si',
  templateUrl: './si.component.html',
  styleUrls: ['./si.component.css']
})
export class SiComponent implements OnInit {

  x:number = 10;
  add(a,b) {
    return a+b;
        
  }

  obj = {v:'1',
         v2:'2'}

  constructor() { }

  ngOnInit() {

    
  }

}
