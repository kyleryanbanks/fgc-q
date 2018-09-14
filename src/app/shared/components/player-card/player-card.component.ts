import { Component, Input } from "@angular/core";

@Component({
  selector: "fgcq-player-card",
  template: `
    <mat-card>{{player}}</mat-card>
  `,
  styles: [
    `
      mat-card {
        padding: 16px;
        margin: 10px;
      }
    `
  ]
})
export class PlayerCardComponent {
  @Input()
  player: String;
}
