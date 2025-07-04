import { Routes } from '@angular/router';
import { Layout } from './layouts/main-layouts/layout/layout';
import { Secondlayout } from './layouts/alt-layouts/secondlayout/secondlayout';
import { Index } from './pages/index';
import { Blog } from './pages/blog/blog';
import { BlogDetails } from './pages/blog-details/blog-details';
import { Account } from './pages/account/account';
import { Cart } from './pages/cart/cart';
import { Checkout } from './pages/checkout/checkout';
import { Shop } from './pages/shop/shop';
import { ProductDetails } from './pages/product-details/product-details';
import { Wishlist } from './pages/wishlist/wishlist';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      {
        path: '',
        component: Index,
        title: 'Home',
      },
      {
        path: 'blog',
        component: Blog,
        title: 'Blog',
      },
      {
        path: 'blog-details',
        component: BlogDetails,
        title: 'Blog Details',
      },
      {
        path: 'account',
        component: Account,
        title: 'Account',
      },
      {
        path: 'cart',
        component: Cart,
        title: 'Cart',
      },
      {
        path: 'checkout',
        component: Checkout,
        title: 'Checkout',
      },
      {
        path: 'shop',
        component: Shop,
        title: 'Shop',
      },
      {
        path: 'product-details',
        component: ProductDetails,
        title: 'Product Details',
      },
      {
        path: 'wishlist',
        component: Wishlist,
        title: 'Wishlist',
      },
      {
        path: 'contact',
        component: Contact,
        title: 'Contact',
      }
    ],
  },
  {
    path: '',
    component: Secondlayout,
    children: [],
  },
];
