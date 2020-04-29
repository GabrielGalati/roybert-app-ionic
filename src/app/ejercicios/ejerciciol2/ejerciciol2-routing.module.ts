import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ejerciciol2Page } from './ejerciciol2.page';

const routes: Routes = [
  {
    path: '',
    component: Ejerciciol2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ejerciciol2PageRoutingModule {}
