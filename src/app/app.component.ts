import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
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
}
