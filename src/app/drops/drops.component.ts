import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { NoteService } from '../service/note.service';

@Component({
  selector: 'app-drops',
  templateUrl: './drops.component.html',
  styleUrls: ['./drops.component.css']
})
export class DropsComponent implements OnInit {

  randomNote = {
    date: '',
    primaryTag: '',
    secondaryTag: '',
    message: ''
  };

  constructor(
    private db: AngularFireDatabase) {
  }

  ngOnInit() {
    this.db.list('/notes').subscribe(noteList => {
      const randomNumber = Math.floor((Math.random() * noteList.length));
      this.randomNote = noteList[randomNumber];
      console.log('noteList.length', noteList.length);
      console.log('randomNumber', randomNumber);
      console.log('noteList[randomNumber]', noteList[randomNumber]);
    });

  }



}
