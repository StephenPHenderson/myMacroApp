import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.scss']
})
export class WorkoutComponent implements OnInit {
  title:string = 'Track Workouts'
  constructor() { }

  ngOnInit() {
  }

}
