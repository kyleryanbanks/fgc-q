import { Component, Input } from "@angular/core";

@Component({
  selector: "fgcq-player-card",
  template: `
    <mat-card>{{player}}</mat-card>
  `,
  styles: []
})
export class PlayerCardComponent {
  @Input()
  player: String;
}
