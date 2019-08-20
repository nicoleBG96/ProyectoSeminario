import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import {AngularFireDatabase} from 'angularfire2/database';
import {AngularFireList} from 'angularfire2/database';
import { AngularFireStorage } from 'angularfire2/storage';

import * as fb from 'firebase';

// Model
import { DonationsModel } from '../models/donations.model';

@Injectable({
  providedIn: 'root'
})
export class DonationsService {
  donationList: AngularFireList<any>;

  constructor(private firebase: AngularFireDatabase, private storage: AngularFireStorage) { }

  getDonation() {
    return this.firebase.list('donations').snapshotChanges().pipe(
      map(action => action.map(data => {
        return {
          key: data.payload.key,
          ...data.payload.val()
        };
      })));
  }

  createDonation(donations: DonationsModel) {
    this.firebase.list('donations').push(donations);
  }

  getDonationById(id: string) {
    const ref = fb.database().ref('donations');
    return ref.child(id).once('value').then((snapshot) => snapshot.val());
  }
}
