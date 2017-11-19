import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListPage } from '../pages/list/list';
import { NodePage } from '../pages/node/node';


const routes: Routes = [
  {
    component: ListPage,
    path: 'list',
  },
  {
    component: NodePage,
    path: 'node/:id',
  },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRouting {}
