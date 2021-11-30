import { Component, OnInit } from '@angular/core';
import { IonRouterOutlet, ModalController } from '@ionic/angular';
import { User } from '../create-user/model/user-model';
import { Exercise } from '../model/exercise';
import { Workout } from '../model/workout';
import { ExerciseService } from '../services/exercise-service.service';
import { WorkoutsService } from '../services/workouts.service';

@Component({
  selector: 'app-new-workout-modal',
  templateUrl: './new-workout-modal.page.html',
  styleUrls: ['./new-workout-modal.page.scss'],
})
export class NewWorkoutModalPage implements OnInit {
  constructor(
    private modalController: ModalController,
    private exerciseService: ExerciseService,
    private workoutService: WorkoutsService) {}

  showCreateExerciseModal: boolean = false;

  user:User;

  //Workout Fields
  name: string;
  selectedDays: string[];
  selectedExercise: string;
  workoutCreated: Workout = {
    name: '',
    days: [],
    exercise: null,
    user_id: null,
    id: null
  }

  //Exercise Fields
  exercises: Exercise[];
  exerciseCreated: Exercise = {
    name: '',
    weight: 0,
    series: 0,
    repetitions: 0,
    id: null
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

  createWorkout(){
    this.prepareWorkoutToCreate();
    this.workoutService.createWorkout(this.workoutCreated);
    alert("Treino Criado com Sucesso!")
    this.cancel();
  }

  prepareWorkoutToCreate(){
    this.workoutCreated.name = this.name;
    this.workoutCreated.days = this.selectedDays;

    this.findExerciseById();

    this.user = JSON.parse(window.sessionStorage.getItem("userLogin"));
    this.workoutCreated.user_id = this.user.appIdentifier;
  }

  findExerciseById(){
    this.exercises.forEach(exerc => {
      if(exerc.id == this.selectedExercise){
        this.workoutCreated.exercise = exerc;
      }
    });
  }

  cancel() {
    this.modalController.dismiss({
      dismissed: true,
    });
  }

}
