import { Routes, Route } from "@angular/router/src";
import { FoodDiaryComponent } from "../food-diary/food-diary.component";
import { WorkoutComponent } from "../workout/workout.component";
import { WeightComponent } from "../weight/weight.component";
import { UserComponent } from "../user/user.component";
import { NavItem } from "../models/nav-item.model";

export class Constants {
    public static AppTitle:string ='Hack Your Fitness';
    public static Routes:NavItem[] = 
    [
        {
            path: 'food',
            component: FoodDiaryComponent,
            title: 'Food Diary'
        },
        {
            path: 'workout',
            component: WorkoutComponent,
            title: 'Track Workouts'
        },
        {
            path: 'weight',
            component: WeightComponent,
            title: 'Log Weight'
        },
        {
            path: 'customize',
            component: UserComponent,
            title: 'Modify Workout Plan'
        }
    ]; 
}
  


