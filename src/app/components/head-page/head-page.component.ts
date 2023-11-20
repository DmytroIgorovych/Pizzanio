import { Component } from '@angular/core';

@Component({
  selector: 'app-head-page',
  templateUrl: './head-page.component.html',
  styleUrls: ['./head-page.component.scss']
})
export class HeadPageComponent {


  prew(){
    console.log('prew');
  }

  next(){
    console.log('next');
  }
}
