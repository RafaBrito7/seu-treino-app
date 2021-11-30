import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-new-workout-modal',
  templateUrl: './new-workout-modal.page.html',
  styleUrls: ['./new-workout-modal.page.scss'],
})
export class NewWorkoutModalPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  cancel(){
    this.modalController.dismiss({
      'dismissed': true
    });
  }

}
