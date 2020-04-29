import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ejerciciol5PageRoutingModule } from './ejerciciol5-routing.module';

import { Ejerciciol5Page } from './ejerciciol5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ejerciciol5PageRoutingModule
  ],
  declarations: [Ejerciciol5Page]
})
export class Ejerciciol5PageModule {}
