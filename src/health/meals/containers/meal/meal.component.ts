import {Component} from '@angular/core';

import {Meal} from "../../../shared/services/meals/meals.service";

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.scss']
})
export class MealComponent {
  addMeal(event: any): void {
    console.log(event);
  }
}
