import { Component } from '@angular/core';
import * as firebase from "firebase";
import { Router } from "@angular/router/src";
import { Observable } from "rxjs/Observable";
import { FirebaseListObservable, AngularFireDatabase } from "angularfire2/database";
import { AngularFireAuth } from "angularfire2/auth";
import { NavItem } from "./models/nav-item.model";
import { Constants } from "./shared/constants";
import { AuthService } from "../servives/auth.service";

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
  email: string;
  password: string;
  constructor(public afAuth: AngularFireAuth, 
              public af: AngularFireDatabase,
              public authService: AuthService) {
    this.user = this.afAuth.authState;
    this.appTitle = Constants.AppTitle;
    this.navMenu = Constants.Routes;

  }
  signup() {
    this.authService.signup(this.email, this.password);
    this.email = this.password = '';
  }

  login() {
    this.authService.login(this.email, this.password);
    this.email = this.password = '';    
  }

  logout() {
    this.authService.logout();
  }
  // loginWithGoogle() {
  //     this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  // }

  // loginWithFacebook() {
  //     this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
  // }

  // login() {
  //     this.showLoginForm = true;
  // }

  // logout() {
  //     this.afAuth.auth.signOut();
  // }

  Send(desc: string) {
      this.items.push({ message: desc});
      this.msgVal = '';
  }
}
