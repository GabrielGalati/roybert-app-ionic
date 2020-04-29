import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ejerciciof4PageRoutingModule } from './ejerciciof4-routing.module';

import { Ejerciciof4Page } from './ejerciciof4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ejerciciof4PageRoutingModule
  ],
  declarations: [Ejerciciof4Page]
})
export class Ejerciciof4PageModule {}
