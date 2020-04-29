import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ejerciciol1Page } from './ejerciciol1.page';

const routes: Routes = [
  {
    path: '',
    component: Ejerciciol1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ejerciciol1PageRoutingModule {}
