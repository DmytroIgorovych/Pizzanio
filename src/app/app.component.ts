import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({
        display: 'flex',
        width: '200%',
        opacity: 0.9        
      })),
      state('closed', style({
        display: 'none',
        width: '0',
      })),
      transition('open => closed', [
        animate('0.5s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ]
})
export class AppComponent {
  title = 'Pizzanio';

  toggle=false;

  openMenu(openBtn:HTMLButtonElement){
    console.dir(openBtn);
    // openBtn.style.display='none'
    // openBtn.classList.add('active')
  }

  closeMenu(openBtn:HTMLButtonElement){
    openBtn.classList.remove('active');
  }
  // ng build --output-path docs --base-href /Pizzanio/
}
