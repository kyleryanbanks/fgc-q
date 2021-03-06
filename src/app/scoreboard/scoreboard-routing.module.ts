import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ScoreboardComponent } from "@app/scoreboard/scoreboard.component";

const routes: Routes = [
  { path: "scoreboard", component: ScoreboardComponent },
  {
    path: "",
    redirectTo: "/scoreboard",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScoreboardRoutingModule {}
