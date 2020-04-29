import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ejerciciol4Page } from './ejerciciol4.page';

const routes: Routes = [
  {
    path: '',
    component: Ejerciciol4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ejerciciol4PageRoutingModule {}
