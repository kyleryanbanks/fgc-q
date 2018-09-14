import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "fgcq-add-player-button",
  template: `
  <button mat-fab color="primary" (click)="addPlayer()">
    <mat-icon>person_add</mat-icon>
  </button>
  `,
  styles: [
    `
      button {
        position: absolute;
        bottom: 30px;
        right: 30px;
      }
    `
  ]
})
export class AddPlayerButtonComponent {
  @Output()
  onAddPlayer = new EventEmitter();

  addPlayer() {
    this.onAddPlayer.emit();
  }
}
