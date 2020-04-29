import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ejerciciol5Page } from './ejerciciol5.page';

const routes: Routes = [
  {
    path: '',
    component: Ejerciciol5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ejerciciol5PageRoutingModule {}
