import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ejerciciof1PageRoutingModule } from './ejerciciof1-routing.module';

import { Ejerciciof1Page } from './ejerciciof1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ejerciciof1PageRoutingModule
  ],
  declarations: [Ejerciciof1Page]
})
export class Ejerciciof1PageModule {}
