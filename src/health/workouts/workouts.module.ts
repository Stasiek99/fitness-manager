import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";

import {WorkoutsComponent} from "./containers/workouts/workouts.component";

@NgModule({
  declarations: [
    WorkoutsComponent
  ],
  imports: [
    RouterModule
  ]
})
export class WorkoutsModule {}
