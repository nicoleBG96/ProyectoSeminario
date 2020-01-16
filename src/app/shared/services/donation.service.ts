import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import {AngularFireDatabase} from 'angularfire2/database';
import {AngularFireList} from 'angularfire2/database';
import { AngularFireStorage } from 'angularfire2/storage';

// Model
import { DonationsModel } from '../models/donations.model';

@Injectable({
  providedIn: 'root'
})
export class DonationService {
  donationsList: AngularFireList<any>;
  donation: DonationsModel;
  resourcesList: any[];
  selectResource: any;
  months: any = [
    { id: 1, name: 'Enero' },
    { id: 2, name: 'Febrero' },
    { id: 3, name: 'Marzo' },
    { id: 4, name: 'Abril' },
    { id: 5, name: 'Mayo' },
    { id: 6, name: 'Junio' },
    { id: 7, name: 'Julio' },
    { id: 8, name: 'Agosto' },
    { id: 9, name: 'Septiembre' },
    { id: 10, name: 'Octubre' },
    { id: 11, name: 'Noviembre' },
    { id: 12, name: 'Diciembre'}
  ];

  constructor(private firebase: AngularFireDatabase, private storage: AngularFireStorage) { }

  getDonations() {
    return this.firebase.list('donations').snapshotChanges().pipe(
      map(action => action.map(data => {
        return {
          key: data.payload.key,
          ...data.payload.val()
        };
      })));
  }

  createDonation(donation: DonationsModel) {
    this.firebase.list('donations').push(donation);
  }

  getResource() {
    let index = 1;
    this.resourcesList = [];
    for (let i = 2015; i <= 2090; i++) {
      this.resourcesList.push({
        id: index, type: i, values: this.months
      });
      index++;
    }
    return this.resourcesList;
  }

}
