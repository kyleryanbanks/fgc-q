import { Component } from "@angular/core";

@Component({
  selector: "fgcq-add-player-dialog",
  template: `
  <h2 mat-dialog-title>Add Player</h2>
  <mat-dialog-content>
  <mat-form-field>
    <input #playerName matInput placeholder="Player Name">
  </mat-form-field>
  </mat-dialog-content>
  <mat-dialog-actions>
    <button mat-button mat-dialog-close>Cancel</button>
    <button color="primary" mat-raised-button [mat-dialog-close]="playerName.value">Save</button>
  </mat-dialog-actions>
  `,
  styles: []
})
export class AddPlayerDialogComponent {}
