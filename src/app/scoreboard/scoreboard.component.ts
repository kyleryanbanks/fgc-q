import { Component } from "@angular/core";
import { Match } from "@app/shared";
import { MatDialog } from "@angular/material";
import { AddPlayerDialogComponent } from "@app/scoreboard/components";

@Component({
  selector: "fgcq-scoreboard",
  template: `
    <fgcq-timer></fgcq-timer>
    <fgcq-score [match]="match"></fgcq-score>
    <fgcq-queue [players]="players"></fgcq-queue>
    <fgcq-add-player-button (onAddPlayer)="addPlayer()"><fgcq-add-player-button>
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
