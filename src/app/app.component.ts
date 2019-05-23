import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'inventory-app-root',
  template: `
    <div class="inventory-app">
      <h1>{{ product.name }}</h1>
      <span>{{ product.sku }}</span>
    </div>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  product: Product;

  constructor() {
    this.product = new Product(
      'NICEHAT',
      'A Nice Black Hat',
      '/resources/images/products/black-hat.jpg',
      ['Men', 'Accessories', 'Hats'],
      29.99
    );
  }
}
