import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ejerciciof3PageRoutingModule } from './ejerciciof3-routing.module';

import { Ejerciciof3Page } from './ejerciciof3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ejerciciof3PageRoutingModule
  ],
  declarations: [Ejerciciof3Page]
})
export class Ejerciciof3PageModule {}
