import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  i:number=1

  menuPrew(){
    this.i--
    if (this.i===0){
      this.i=3
    }
  }

  menuNext(){
    this.i++
    if (this.i===4){
      this.i=1
    }
  }
}
