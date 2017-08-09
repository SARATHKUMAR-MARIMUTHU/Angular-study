import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directive',
  templateUrl: './structural-directive.component.html',
  styleUrls: ['./structural-directive.component.css']
})
export class StructuralDirectiveComponent implements OnInit {
  flag=false;
  menus=['Home','service','product','about us','career'];
  age=20;
  onToggle(){
     this.flag=!this.flag;
  }
    
  constructor() { 
   
  }

  ngOnInit() {
  }

}
