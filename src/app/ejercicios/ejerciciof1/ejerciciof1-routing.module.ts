import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ejerciciof1Page } from './ejerciciof1.page';

const routes: Routes = [
  {
    path: '',
    component: Ejerciciof1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ejerciciof1PageRoutingModule {}
