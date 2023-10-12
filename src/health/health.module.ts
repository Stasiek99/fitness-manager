import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

export const ROUTES: Routes = [
  {path: "schedule", loadChildren: () => import("./meals/containers/meals.module").then(m => m.MealsModule)},
  {path: "meals", loadChildren: () => import("./meals/containers/meals.module").then(m => m.MealsModule)},
  {path: "workouts", loadChildren: () => import("./meals/containers/meals.module").then(m => m.MealsModule)},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(ROUTES)
  ],
})
export class HealthModule {}
