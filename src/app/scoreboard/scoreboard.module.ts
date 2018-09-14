import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ScoreboardRoutingModule } from "./scoreboard-routing.module";
import { ScoreboardComponent } from "./scoreboard.component";
import {
  TimerComponent,
  SetCountComponent,
  PlayerScoreComponent
} from "./components";
import { SharedModule } from "../shared";

@NgModule({
  imports: [CommonModule, ScoreboardRoutingModule, SharedModule],
  declarations: [
    TimerComponent,
    ScoreboardComponent,
    SetCountComponent,
    PlayerScoreComponent
  ],
  exports: [ScoreboardComponent]
})
export class ScoreboardModule {}
