import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-logo',
  template: `
    <div style="position:absolute;margin:auto;height:10px;width:50px;background:orange;right:0;left:0px;">
  my logo
</div>
  `,
  styleUrls: ['./footer-logo.component.css']
})
export class FooterLogoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
