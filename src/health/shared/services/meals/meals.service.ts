import {Injectable} from "@angular/core";
import {filter, map, Observable} from "rxjs";

import {AuthService} from "../../../../auth/shared/services/auth/auth.service";

export interface Meal {
  name: string,
  ingredients: string[],
  timestamp: number,
  $key: string,
  $exists: () => boolean
}

@Injectable()
export class MealsService {
  constructor(private authService: AuthService) {
  }

  private getLocalStorageKey(uid: string): string {
    return `meals_${uid}`;
  }

  get meals$(): Observable<Meal[]> {
    return this.uid$.pipe(
      filter(uid => !!uid),
      map((uid) => {
        const localStorageKey: string = uid ? this.getLocalStorageKey(uid) : '';
        const meals = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
        return meals;
      })
    )
  }

  get uid$() {
    return this.authService.user$.pipe(
      map(u  => (u && u.uid) ? u.uid.toString() : '')
    );
  }

  getMeal(key: string) {
    const localStorageKey = this.getLocalStorageKey(this.uid$.toString());
    const meals = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
    const meal = meals.find((m: Meal) =>m.$key === key);
  }

  addMeal(meal: Meal) {
    const localStorageKey = this.getLocalStorageKey(this.uid$.toString());
    const meals = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
    meals.push(meal);
    localStorage.setItem(localStorageKey, JSON.stringify(meals));
  }

  updateMeal(key: string, meal: string) {
    const localStorageKey = this.getLocalStorageKey(this.uid$.toString());
    const meals = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
    const index = meals.findIndex((m: Meal) => m.$key === key);
    if (index !== -1) {
      meals[index] = meal;
      localStorage.setItem(localStorageKey, JSON.stringify(meals));
    }
  }

  removeMeal(key: string) {
    const localStorageKey = this.getLocalStorageKey(this.uid$.toString());
    const meals = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
    const index = meals.findIndex((m: Meal) => m.$key === key);
    if (index !== -1) {
      meals.splice(index, 1);
      localStorage.setItem(localStorageKey, JSON.stringify(meals));
    }
  }
}
