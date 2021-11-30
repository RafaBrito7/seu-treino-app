import { Component, OnInit } from '@angular/core';
import { IonRouterOutlet, ModalController } from '@ionic/angular';
import { Exercise } from '../model/exercise';
import { ExerciseService } from '../services/exercise-service.service';

@Component({
  selector: 'app-new-workout-modal',
  templateUrl: './new-workout-modal.page.html',
  styleUrls: ['./new-workout-modal.page.scss'],
})
export class NewWorkoutModalPage implements OnInit {
  constructor(
    private modalController: ModalController,
    private exerciseService: ExerciseService) {}

  name: string;
  selectedDays: string[];
  exercises: Exercise[];

  ngOnInit() {
    this.exerciseService.getExercises().subscribe(res => this.exercises = res);
  }

  cancel() {
    this.modalController.dismiss({
      dismissed: true,
    });
  }

}
