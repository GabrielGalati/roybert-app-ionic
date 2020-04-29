import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ejerciciof6Page } from './ejerciciof6.page';

const routes: Routes = [
  {
    path: '',
    component: Ejerciciof6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ejerciciof6PageRoutingModule {}
