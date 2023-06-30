import { Component } from '@angular/core';

@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.scss']
})
export class FeaturedProductsComponent {
  featuredProducts = [
    { id: 1, name: 'Product 1', price: 19.99, image: 'product-image-1.jpg' },
    { id: 2, name: 'Product 2', price: 29.99, image: 'product-image-2.jpg' },
    { id: 3, name: 'Product 3', price: 24.99, image: 'product-image-3.jpg' }
    // Add more mock product objects as needed
  ];
}
