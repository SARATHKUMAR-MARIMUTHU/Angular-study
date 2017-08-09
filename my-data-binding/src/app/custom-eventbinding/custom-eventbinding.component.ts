import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-eventbinding',
  template: `<button type="button" class="btn btn-primary"  (click)="loadprofileData()">button
             </button>`,
  styleUrls: ['./custom-eventbinding.component.css']
})
export class CustomEventbindingComponent implements OnInit {
  profile={};
  @Output() profileloaded = new EventEmitter()  // custom event intialize
  loadprofileData(){
   this.profile={
       id:1,
       name:'sarath',
       role:'dev',
       age:26
   }
    this.profileloaded.emit(this.profile) //Emit event
  }

  constructor() { }

  ngOnInit() { }

}
