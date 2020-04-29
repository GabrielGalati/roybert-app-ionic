import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ejerciciof5PageRoutingModule } from './ejerciciof5-routing.module';

import { Ejerciciof5Page } from './ejerciciof5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ejerciciof5PageRoutingModule
  ],
  declarations: [Ejerciciof5Page]
})
export class Ejerciciof5PageModule {}
