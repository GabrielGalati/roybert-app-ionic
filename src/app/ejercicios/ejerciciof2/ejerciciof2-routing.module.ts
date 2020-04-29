import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ejerciciof2Page } from './ejerciciof2.page';

const routes: Routes = [
  {
    path: '',
    component: Ejerciciof2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ejerciciof2PageRoutingModule {}
