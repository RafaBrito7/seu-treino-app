import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { collection, doc, setDoc } from '@firebase/firestore';
import { collectionData } from 'rxfire/firestore';
import { Observable } from 'rxjs';
import { Workout } from '../model/workout';

import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WorkoutsService {

  constructor(private firestore: Firestore) { }

  getWorkouts(): Observable<Workout[]> {
    const contactsCollection = collection(this.firestore, 'workouts');
    return collectionData(contactsCollection, { idField: 'id' }).pipe(
      map((workouts) => workouts as Workout[])
    );
  }

  createUser(user: Workout): Promise<void> {
    const document = doc(collection(this.firestore, 'workouts'));
    return setDoc(document, user);
  }
}
