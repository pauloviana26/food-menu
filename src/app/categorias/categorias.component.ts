import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss'],
})
export class CategoriasComponent  implements OnInit {

  categorias = [
    { name: 'Entradas', image: 'assets/imagens/pao-de-alho.jpeg', route: 'entradas' },
    { name: 'Lanches', image: 'assets/imagens/lanche.jpeg', route: 'lanches' },
    { name: 'Pratos', image: 'assets/imagens/prato.jpeg', route: 'pratos' },
    { name: 'Sobremesas', image: 'assets/imagens/sobremesa.jpeg', route: 'sobremesas' },
    { name: 'Bebidas', image: 'assets/imagens/beer.jpeg', route: 'bebidas' },
    // Add more categories as needed
  ];

  constructor(private navCtrl: NavController) { }

  ngOnInit() {}

  goToCategory(categoria: any) {
    this.navCtrl.navigateForward(categoria.route);
  }

}
