import {Component} from '@angular/core';
import {Router} from "@angular/router";

import {Meal, MealsService} from "../../../shared/services/meals/meals.service";

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.scss']
})
export class MealComponent {
  constructor(private mealService: MealsService, private router: Router) {
  }
  addMeal(meal: Meal): void {
    this.mealService.addMeal(meal);
    this.backToMeals();
  }

  backToMeals() {
    this.router.navigate(["meals"]);
  }
}
