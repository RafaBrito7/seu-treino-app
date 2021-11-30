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

  showCreateExerciseModal: boolean = false;
  name: string;
  selectedDays: string[];

  //Exercise Fields
  exercises: Exercise[];
  exerciseCreated: Exercise = {
    name: '',
    weight: 0,
    series: 0,
    repetitions: 0
  };


  ngOnInit() {
    this.fetchExercises();
  }

  fetchExercises(){
    this.exerciseService.getExercises().subscribe(res => this.exercises = res);
  }

  showExerciseCard(){
    if(this.showCreateExerciseModal){
      this.showCreateExerciseModal = false;
    }else{
      this.showCreateExerciseModal = true;
    }
  }

  createExercise(){
    this.exerciseService.createExercise(this.exerciseCreated);
    this.showExerciseCard();
    this.cleanExerciseFields();
    this.fetchExercises();
  }

  cleanExerciseFields(){
    this.exerciseCreated.name = '';
    this.exerciseCreated.weight = 0;
    this.exerciseCreated.series = 0;
    this.exerciseCreated.repetitions = 0;
  }

  cancel() {
    this.modalController.dismiss({
      dismissed: true,
    });
  }

}
