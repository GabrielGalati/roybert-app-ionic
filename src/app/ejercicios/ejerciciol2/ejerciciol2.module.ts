import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ejerciciol2PageRoutingModule } from './ejerciciol2-routing.module';

import { Ejerciciol2Page } from './ejerciciol2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ejerciciol2PageRoutingModule
  ],
  declarations: [Ejerciciol2Page]
})
export class Ejerciciol2PageModule {}
