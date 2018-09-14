import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ScoreboardRoutingModule } from "./scoreboard-routing.module";
import { ScoreboardComponent } from "./scoreboard.component";
import {
  QueueComponent,
  TimerComponent,
  CurrentMatchComponent,
  AddPlayerDialogComponent,
  AddPlayerButtonComponent
} from "./components";
import { SharedModule } from "../shared";

@NgModule({
  imports: [CommonModule, ScoreboardRoutingModule, SharedModule],
  declarations: [
    QueueComponent,
    TimerComponent,
    CurrentMatchComponent,
    ScoreboardComponent,
    AddPlayerButtonComponent,
    AddPlayerDialogComponent
  ],
  exports: [ScoreboardComponent],
  entryComponents: [AddPlayerDialogComponent]
})
export class ScoreboardModule {}
