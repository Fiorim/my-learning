import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';


@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css'],
  providers: [AngularFireAuth]
})
export class AuthenticationComponent implements OnInit {

  email = '';
  password = '';

  constructor(private fb: AngularFireAuth) { }

  ngOnInit() {
  }
  autenticar(){
    this.fb.auth.signInWithEmailAndPassword(this.email, this.password)
      .then((result)=> console.log('result', result))
      .catch((error)=> console.log('error', error));
  }
}
