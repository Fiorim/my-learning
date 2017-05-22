import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as moment from 'moment';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  primaryTag = '';
  secondaryTag = '';
  message = '';
  date: string;

  constructor( private db: AngularFireDatabase) { }

  ngOnInit() {
  }

  registerNote(){
    const note = {
      primaryTag: this.primaryTag,
      secondaryTag: this.secondaryTag,
      message: this.message,
      date: moment().format('DD-MM-YYYY')
    };
    this.db.database.ref().child('notes').push(note);
    this.clearForm();
  }

  clearForm(){
    this.primaryTag = '';
    this.secondaryTag = '';
    this.message = '';
  }

}
