import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  pages: Array<{ title: string, url: string, icon: string }>;

  constructor(private menu: MenuController) {
    menu.enable(true);

    this.pages = [
      { title: 'Home', url: '', icon: 'home' },
      { title: 'Entradas', url: 'entradas', icon: 'pizza' },
      { title: 'Lanches', url: 'lanches', icon: 'fast-food' },
      { title: 'Pratos', url: 'pratos', icon: 'star' },
      { title: 'Sobremesas', url: 'sobremesas', icon: 'ice-cream' },
      { title: 'Bebidas', url: 'bebidas', icon: 'beer' }
    ];
  }
}
