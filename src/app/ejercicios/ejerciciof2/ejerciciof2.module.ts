import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ejerciciof2PageRoutingModule } from './ejerciciof2-routing.module';

import { Ejerciciof2Page } from './ejerciciof2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ejerciciof2PageRoutingModule
  ],
  declarations: [Ejerciciof2Page]
})
export class Ejerciciof2PageModule {}
