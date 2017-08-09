import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {
  i=0;
  constructor() { }
  onclcik(event)
  {
   this.i = this.i+1;
   console.log(event)
  }

  ngOnInit() {
  }

   appList: any[] = [ {
      "ID": "1",
      "url": "../../assets/Images/One.png"
   },

   {
      "ID": "2",
      "url": '../../assets/Images/Two.png'
   },
  
  {
      "ID": "3",
      "url": '../../assets/Images/Three.png'
   } ,
  
  {
      "ID": "4",
      "url": '../../assets/Images/Three.png'
   } ];

}
