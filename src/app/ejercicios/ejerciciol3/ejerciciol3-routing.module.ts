import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ejerciciol3Page } from './ejerciciol3.page';

const routes: Routes = [
  {
    path: '',
    component: Ejerciciol3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ejerciciol3PageRoutingModule {}
