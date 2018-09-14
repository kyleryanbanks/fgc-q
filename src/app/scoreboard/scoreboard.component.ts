import { Component } from "@angular/core";
import { Match } from "@app/shared";
import { MatDialog } from "@angular/material";
import { AddPlayerDialogComponent } from "@app/scoreboard/components";

@Component({
  selector: "fgcq-scoreboard",
  template: `
    <fgcq-timer></fgcq-timer>
    <div class="currentMatch">
      <fgcq-player-score [player]="p1" [score]="p1s"></fgcq-player-score>
      <fgcq-set-count [count]="ft"></fgcq-set-count>
      <fgcq-player-score [player]="p2" [score]="p2s"></fgcq-player-score>
    </div>
    <fgcq-queue [players]="players"></fgcq-queue>
    <fgcq-add-player-button (onAddPlayer)="addPlayer()"><fgcq-add-player-button>
  `,
  styles: [
    `
      :host {
        height: 100vh;
        width: 100vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: black;
      }

      fgcq-set-count {
        align-self: center;
      }

      .currentMatch {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
      }
    `
  ]
})
export class ScoreboardComponent {
  players: String[] = ["Player 1", "Player 2", "Player 3"];
  p1 = "ML|Merkyl";
  p1s = "99";
  p2 = "Covert|Sodnine";
  p2s = "99";
  ft = "999";

  match: Match = {
    playerOne: "Foo",
    playerTwo: "Bar",
    playerOneScore: 1,
    playerTwoScore: 2,
    firstTo: 3
  };

  constructor(public dialog: MatDialog) {}

  addPlayer(): void {
    const dialogRef = this.dialog.open(AddPlayerDialogComponent);

    dialogRef.afterClosed().subscribe(playerName => {
      if (playerName) {
        this.players.push(playerName);
      }
    });
  }
}
