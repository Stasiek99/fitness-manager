import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from "rxjs";

import {Meal, MealsService} from "../../../shared/services/meals/meals.service";

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.scss']
})
export class MealsComponent implements OnInit, OnDestroy{
  meals$: Observable<Meal[]> | null = null;
  subscription: Subscription | null = null;
  constructor(private mealsService: MealsService){
  }

  ngOnInit(): void {
    this.meals$ = this.mealsService.meals$;
    this.subscription = this.mealsService.meals$.subscribe();
  }

  removeMeal(event: Meal): void {
    this.mealsService.removeMeal(event.$key);
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
