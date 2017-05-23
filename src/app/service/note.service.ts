import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class NoteService {

  private noteUrl = 'https://my-learning-f8dbd.firebaseio.com/notes.json';

  constructor(private http: Http) {}

  getNoteList(): Observable<any> {
    return this.http.get(this.noteUrl)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

}
