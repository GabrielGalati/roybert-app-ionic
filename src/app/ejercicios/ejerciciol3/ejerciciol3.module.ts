import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ejerciciol3PageRoutingModule } from './ejerciciol3-routing.module';

import { Ejerciciol3Page } from './ejerciciol3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ejerciciol3PageRoutingModule
  ],
  declarations: [Ejerciciol3Page]
})
export class Ejerciciol3PageModule {}
