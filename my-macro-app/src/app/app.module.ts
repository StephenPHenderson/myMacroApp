import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { RouterModule, Routes} from "@angular/router";
import { environment } from "../environments/environment";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { Constants } from "./shared/constants";
import { FoodDiaryComponent } from './food-diary/food-diary.component';
import { WorkoutComponent } from './workout/workout.component';
import { WeightComponent } from './weight/weight.component';
import { UserComponent } from './user/user.component';
import { MaterialModule, MdToolbarModule, MdSidenavModule, MdButtonModule, MdInputModule } from '@angular/material';
import { AuthService } from "../servives/auth.service";
@NgModule({
  declarations: [
    AppComponent,    
    FoodDiaryComponent,
    WorkoutComponent,
    WeightComponent,
    UserComponent    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase, 'my-macro-app'),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(Constants.Routes),
    MdToolbarModule,
    MdSidenavModule,
    MdButtonModule,
    MdInputModule,
    MaterialModule
  ],  
  bootstrap: [AppComponent],
  providers: [Constants, AuthService]
})
export class AppModule { }
