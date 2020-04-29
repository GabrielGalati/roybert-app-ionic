import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ejerciciof3Page } from './ejerciciof3.page';

const routes: Routes = [
  {
    path: '',
    component: Ejerciciof3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ejerciciof3PageRoutingModule {}
