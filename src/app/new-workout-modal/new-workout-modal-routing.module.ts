import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewWorkoutModalPage } from './new-workout-modal.page';

const routes: Routes = [
  {
    path: '',
    component: NewWorkoutModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewWorkoutModalPageRoutingModule {}
