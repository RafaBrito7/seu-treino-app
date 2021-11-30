import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewWorkoutModalPageRoutingModule } from './new-workout-modal-routing.module';

import { NewWorkoutModalPage } from './new-workout-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewWorkoutModalPageRoutingModule
  ],
  declarations: [NewWorkoutModalPage]
})
export class NewWorkoutModalPageModule {}
