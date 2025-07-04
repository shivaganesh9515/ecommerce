import { Component  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
@Component({
  selector: 'app-cart',
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './cart.html',
  styleUrl: './cart.scss'
})
export class Cart {
 
  products = [
    {
      id: 1,
      name: "Taylor Farms Broccoli Florets Vegetables",
      image: "assets/images/thumbs/product-two-img1.png",
      rating: 4.8,
      reviews: 128,
      price: "$125.00",
      quantity: 1,
      buttons: [
        { label: "Camera", link: "cart" },
        { label: "Videos", link: "cart" }
      ]
    },
    {
      id: 2,
      name: "Taylor Farms Broccoli Florets Vegetables",
      image: "assets/images/thumbs/product-two-img2.png",
      rating: 4.8,
      reviews: 128,
      price: "$125.00",
      quantity: 1,
      buttons: [
        { label: "Camera", link: "cart" },
        { label: "Videos", link: "cart" }
      ]
    },
    {
      id: 3,
      name: "Taylor Farms Broccoli Florets Vegetables",
      image: "assets/images/thumbs/product-two-img3.png",
      rating: 4.8,
      reviews: 128,
      price: "$125.00",
      quantity: 1,
      buttons: [
        { label: "Camera", link: "cart" },
        { label: "Videos", link: "cart" }
      ]
    },
    {
      id: 4,
      name: "Taylor Farms Broccoli Florets Vegetables",
      image: "assets/images/thumbs/product-two-img4.png",
      rating: 4.8,
      reviews: 128,
      price: "$125.00",
      quantity: 1,
      buttons: [
        { label: "Camera", link: "cart" },
        { label: "Videos", link: "cart" }
      ]
    }
  ];

  
  removeProduct(productId: number): void {
    this.products = this.products.filter(product => product.id !== productId);
  }
}
