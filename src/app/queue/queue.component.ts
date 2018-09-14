import { Component } from "@angular/core";
import { AddPlayerDialogComponent } from "./components/add-player-dialog/add-player-dialog.component";
import { MatDialog } from "@angular/material";
import { PlayerService } from "@app/core/services";

@Component({
  selector: "fgcq-queue",
  template: `
    <fgcq-player-card *ngFor="let player of players" (click)="removePlayer(player)" [player]="player"></fgcq-player-card>
    <fgcq-add-player-button (click)="addPlayer()"></fgcq-add-player-button>
  `,
  styles: []
})
export class QueueComponent {
  players: string[];

  constructor(public dialog: MatDialog, private playerService: PlayerService) {
    this.players = this.playerService.queue;
  }

  addPlayer(): void {
    const dialogRef = this.dialog.open(AddPlayerDialogComponent);

    dialogRef.afterClosed().subscribe(playerName => {
      if (playerName) {
        this.playerService.add(playerName);
      }
    });
  }

  removePlayer(player): void {
    this.players = this.playerService.remove(player);
  }
}
