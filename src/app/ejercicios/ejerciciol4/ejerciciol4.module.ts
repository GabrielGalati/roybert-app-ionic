import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ejerciciol4PageRoutingModule } from './ejerciciol4-routing.module';

import { Ejerciciol4Page } from './ejerciciol4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ejerciciol4PageRoutingModule
  ],
  declarations: [Ejerciciol4Page]
})
export class Ejerciciol4PageModule {}
