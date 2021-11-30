import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { collection, doc, setDoc } from '@firebase/firestore';
import { collectionData } from 'rxfire/firestore';
import { Observable } from 'rxjs';
import { User } from './create-user/model/user-model';

import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private firestore: Firestore) {}

  getUsers(): Observable<User[]> {
    const contactsCollection = collection(this.firestore, 'users');
    return collectionData(contactsCollection, { idField: 'id' }).pipe(
      map((users) => users as User[])
    );
  }

  createUser(user: User): Promise<void> {
    const document = doc(collection(this.firestore, 'users'));
    return setDoc(document, user);
  }
}
