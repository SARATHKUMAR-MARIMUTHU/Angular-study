import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-directive',
  templateUrl: './attribute-directive.component.html',
  styleUrls: ['./attribute-directive.component.css']
})
export class AttributeDirectiveComponent implements OnInit {
 blue;
 issessionactive = true;
 sessionMessage;
 myColor="red";

  isError(){
    this.blue = true;
  }
 
  checksession(){
     this.issessionactive = !this.issessionactive
     if(this.issessionactive){
       this.sessionMessage="checked login success";
     }else{
      this.sessionMessage="logged out";
     }

  }

  constructor() { }

  ngOnInit() {
  }

}
