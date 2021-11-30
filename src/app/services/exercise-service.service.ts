import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { collection, doc, setDoc } from '@firebase/firestore';
import { collectionData } from 'rxfire/firestore';
import { Observable } from 'rxjs';
import { Exercise } from '../model/exercise';

import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {

  constructor(private firestore: Firestore) { }

  getExercises(): Observable<Exercise[]> {
    const elementCollection = collection(this.firestore, 'exercises');
    return collectionData(elementCollection, { idField: 'id' }).pipe(
      map((exercise) => exercise as Exercise[])
    );
  }

  createExercise(exercise: Exercise): Promise<void> {
    const document = doc(collection(this.firestore, 'exercises'));
    return setDoc(document, exercise);
  }
}
