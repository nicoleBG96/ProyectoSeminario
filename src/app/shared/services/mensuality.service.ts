import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import {AngularFireDatabase} from 'angularfire2/database';
import {AngularFireList} from 'angularfire2/database';
import { AngularFireStorage } from 'angularfire2/storage';
import * as fb from 'firebase';

import { MensualityModel } from '../models/mensuality.model';

@Injectable({
  providedIn: 'root'
})
export class MensualityService {
  mensualityList: AngularFireList<any>;
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
  childKey: any;


  constructor(private firebase: AngularFireDatabase, private storage: AngularFireStorage) { }

  getMensualities() {
    return this.firebase.list('mensualities').snapshotChanges().pipe(
      map(action => action.map(data => {
        return {
          key: data.payload.key,
          ...data.payload.val()
        };
      })));
  }

  createMensuality(mensuality: MensualityModel) {
    return this.firebase.list('mensualities').push(mensuality).key;
  }

  getMensualitybyId(id: string) {
    const ref = fb.database().ref('mensualities');
    return ref.child(id).once('value').then((snapshot) => snapshot.val());
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

  setMensuality( childKey: any) {
    this.childKey = childKey;
  }

  getChildKey() {
    return this.childKey;
  }

}
