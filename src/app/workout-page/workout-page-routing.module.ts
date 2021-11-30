import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkoutPagePage } from './workout-page.page';

const routes: Routes = [
  {
    path: '',
    component: WorkoutPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkoutPagePageRoutingModule {}
