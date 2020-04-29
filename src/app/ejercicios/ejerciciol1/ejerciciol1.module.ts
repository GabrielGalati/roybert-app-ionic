import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ejerciciol1PageRoutingModule } from './ejerciciol1-routing.module';

import { Ejerciciol1Page } from './ejerciciol1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ejerciciol1PageRoutingModule
  ],
  declarations: [Ejerciciol1Page]
})
export class Ejerciciol1PageModule {}
