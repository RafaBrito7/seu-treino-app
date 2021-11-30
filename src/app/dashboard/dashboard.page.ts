import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../create-user/model/user-model';
import { Workout } from '../model/workout';
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
    private userService: UserService) { 
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

}
