import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";

import {ScheduleComponent} from "./containers/schedule/schedule.component";

@NgModule({
  declarations: [
    ScheduleComponent
  ],
  imports: [
    RouterModule
  ]
})
export class ScheduleModule {}
