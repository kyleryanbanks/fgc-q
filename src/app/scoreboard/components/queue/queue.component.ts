import { Component, Input } from "@angular/core";

@Component({
  selector: "fgcq-queue",
  template: `
    <fgcq-player-card *ngFor="let player of players" [player]="player"></fgcq-player-card>
  `,
  styles: []
})
export class QueueComponent {
  @Input()
  players = [];
}
