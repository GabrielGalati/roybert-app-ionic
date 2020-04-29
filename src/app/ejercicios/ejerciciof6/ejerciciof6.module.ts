import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ejerciciof6PageRoutingModule } from './ejerciciof6-routing.module';

import { Ejerciciof6Page } from './ejerciciof6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ejerciciof6PageRoutingModule
  ],
  declarations: [Ejerciciof6Page]
})
export class Ejerciciof6PageModule {}
