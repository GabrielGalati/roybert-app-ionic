import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ejerciciof5Page } from './ejerciciof5.page';

const routes: Routes = [
  {
    path: '',
    component: Ejerciciof5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ejerciciof5PageRoutingModule {}
