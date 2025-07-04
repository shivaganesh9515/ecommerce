import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SlickCarouselModule } from 'ngx-slick-carousel';
@Component({
  selector: 'app-product-details',
  imports: [CommonModule, RouterLink, SlickCarouselModule],
  templateUrl: './product-details.html',
  styleUrl: './product-details.scss'
})
export class ProductDetails {
  productThumbSlider = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.product-details__images-slider'
  };
  
  thumbs = [
    'assets/images/thumbs/product-details-thumb1.png',
    'assets/images/thumbs/product-details-thumb2.png',
    'assets/images/thumbs/product-details-thumb3.png',
    'assets/images/thumbs/product-details-thumb1.png',
    'assets/images/thumbs/product-details-thumb2.png',
  ];
  

  productImageSlider = {
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.product-details__thumb-slider',
    dots: false,
    arrows: false,
    focusOnSelect: true
  };
  
  images = [
    'assets/images/thumbs/product-details-img1.png',
    'assets/images/thumbs/product-details-img2.png',
    'assets/images/thumbs/product-details-img3.png',
    'assets/images/thumbs/product-details-img1.png',
    'assets/images/thumbs/product-details-img2.png',
  ];
}
