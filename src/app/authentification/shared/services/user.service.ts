import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import {AngularFireDatabase} from 'angularfire2/database';
import {AngularFireList} from 'angularfire2/database';
import { AngularFireStorage } from 'angularfire2/storage';

import * as fb from 'firebase';

// model
import { UserModel } from '../models/user.model';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
}
