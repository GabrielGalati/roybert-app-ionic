import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ejerciciol6Page } from './ejerciciol6.page';

const routes: Routes = [
  {
    path: '',
    component: Ejerciciol6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ejerciciol6PageRoutingModule {}
