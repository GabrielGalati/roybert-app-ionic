import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ejerciciol6PageRoutingModule } from './ejerciciol6-routing.module';

import { Ejerciciol6Page } from './ejerciciol6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ejerciciol6PageRoutingModule
  ],
  declarations: [Ejerciciol6Page]
})
export class Ejerciciol6PageModule {}
