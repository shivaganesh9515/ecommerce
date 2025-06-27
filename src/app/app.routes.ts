import { Routes } from '@angular/router';
import { Layout } from './layouts/main-layouts/layout/layout';
import { Secondlayout } from './layouts/alt-layouts/secondlayout/secondlayout';
import { Index } from './pages/index';
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
    ],
  },
  {
    path: '',
    component: Secondlayout,
    children: [],
  },
];
