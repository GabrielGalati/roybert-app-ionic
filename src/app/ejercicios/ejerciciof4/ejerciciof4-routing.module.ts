import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ejerciciof4Page } from './ejerciciof4.page';

const routes: Routes = [
  {
    path: '',
    component: Ejerciciof4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ejerciciof4PageRoutingModule {}
