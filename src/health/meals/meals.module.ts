import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import {NgModule} from '@angular/core';

import {MealsComponent} from './containers/meals/meals.component';
import {MealFormComponent} from './components/meal-form/meal-form.component'
import {MealComponent} from './containers/meal/meal.component';
import {SharedModule} from "../shared/shared.module";

export const ROUTES: Routes = [
  {path: "", component: MealsComponent},
  {path: "new", component: MealComponent},
];

@NgModule({
  declarations: [
    MealsComponent,
    MealComponent,
    MealFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(ROUTES),
    SharedModule
  ]
})
export class MealsModule {
}
