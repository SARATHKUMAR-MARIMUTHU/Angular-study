import { Component } from '@angular/core';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [],

})

export class AppComponent {
  age = 0;
  lastLogin;
  
  getLastlogin(profile){
     console.log(JSON.stringify(profile))
     this.lastLogin ="lastlogged: yesterday";
     this.age = profile.age;   
  }
   
}
