import { Component } from '@angular/core';

@Component({
  selector: 'app-head-page',
  templateUrl: './head-page.component.html',
  styleUrls: ['./head-page.component.scss']
})
export class HeadPageComponent {
  i:number=1

  prew(){
    this.i--
    if (this.i===0){
      this.i=5
    }
  }

  next(){
    this.i++
    if (this.i===6){
      this.i=1
    }
  }
}
