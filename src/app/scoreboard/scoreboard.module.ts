import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ScoreboardRoutingModule } from "./scoreboard-routing.module";
import { ScoreboardComponent } from "./scoreboard.component";
import {
  QueueComponent,
  TimerComponent,
  ScoreComponent,
  PlayerComponent
} from "./components";

@NgModule({
  imports: [CommonModule, ScoreboardRoutingModule],
  declarations: [
    QueueComponent,
    TimerComponent,
    ScoreComponent,
    ScoreboardComponent,
    PlayerComponent
  ]
})
export class ScoreboardModule {}
