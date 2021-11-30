import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorkoutPagePageRoutingModule } from './workout-page-routing.module';

import { WorkoutPagePage } from './workout-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WorkoutPagePageRoutingModule
  ],
  declarations: [WorkoutPagePage]
})
export class WorkoutPagePageModule {}
