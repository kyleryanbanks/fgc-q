import { Component } from "@angular/core";
import { Match } from "@app/shared";

@Component({
  selector: "fgcq-scoreboard",
  template: `
    <fgcq-timer></fgcq-timer>
    <fgcq-score [match]="match"></fgcq-score>
    <fgcq-queue [players]="players"></fgcq-queue>
  `,
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    `
  ]
})
export class ScoreboardComponent {
  players: String[] = ["Player 1", "Player 2", "Player 3"];

  match: Match = {
    playerOne: "Foo",
    playerTwo: "Bar",
    playerOneScore: 1,
    playerTwoScore: 2,
    firstTo: 3
  };
}
