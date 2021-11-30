import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { IonRouterOutlet, ModalController } from '@ionic/angular';
import { User } from '../create-user/model/user-model';
import { Workout } from '../model/workout';
import { NewWorkoutModalPage } from '../new-workout-modal/new-workout-modal.page';
import { UserService } from '../services/user-service.service';
import { WorkoutsService } from '../services/workouts.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(
    private workoutService: WorkoutsService, 
    private activeRoute: ActivatedRoute,
    private userService: UserService,
    private modalController: ModalController,
    private routerOutlet: IonRouterOutlet) { 
    this.id = this.activeRoute.snapshot.paramMap.get('id');
  }

  workouts: Workout[] = [];
  id: string;
  user: User;

  ngOnInit() {
    this.user = JSON.parse(window.sessionStorage.getItem("userLogin"));
    this.fetchWorkouts();
  }

  fetchWorkouts() {
    this.workoutService.getWorkouts().subscribe(res => this.workouts = res);
  }

  reloadWorkouts(){
    this.fetchWorkouts();
  }

  async openNewWorkoutModal() {
    const modal = await this.modalController.create({
      component: NewWorkoutModalPage,
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl
    });
  
    return await modal.present();
  }

}
