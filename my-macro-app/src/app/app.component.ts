import { Component } from '@angular/core';
import * as firebase from "firebase";
import { Router } from "@angular/router/src";
import { Observable } from "rxjs/Observable";
import { FirebaseListObservable, AngularFireDatabase } from "angularfire2/database";
import { AngularFireAuth } from "angularfire2/auth";
import { NavItem } from "./models/nav-item.model";
import { Constants } from "./shared/constants";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {  
  user: Observable<firebase.User>;
  items: FirebaseListObservable<any[]>;
  msgVal: string = '';
  showLoginForm: boolean = false;
  appTitle:string;
  navMenu: NavItem[];
  constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase) {
    this.items = af.list('/messages', {
      query: {
        limitToLast: 50
      }
    });
    this.user = this.afAuth.authState;
    this.appTitle = Constants.AppTitle;
    this.navMenu = Constants.Routes;

  }
  loginWithGoogle() {
      this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  loginWithFacebook() {
      this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
  }

  login() {
      this.showLoginForm = true;
  }

  logout() {
      this.afAuth.auth.signOut();
  }

  Send(desc: string) {
      this.items.push({ message: desc});
      this.msgVal = '';
  }
}
