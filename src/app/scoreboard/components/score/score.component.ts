import { Component, OnInit, Input } from "@angular/core";
import { Match } from "@app/shared";

@Component({
  selector: "fgcq-score",
  template: `
    <div>
      <fgcq-player-card [player]="match.playerOne"></fgcq-player-card>
      <fgcq-digit [digit]="match.playerOneScore"></fgcq-digit>
    </div>
    <div>
      <p>First To</p>
      <fgcq-digit [digit]="match.firstTo"></fgcq-digit>
    </div>
    <div>
      <fgcq-player-card [player]="match.playerTwo"></fgcq-player-card>
      <fgcq-digit [digit]="match.playerTwoScore"></fgcq-digit>
    </div>
  `,
  styles: [
    `
      :host {
        display: flex;
        justify-content: space-around;
        width: 75%;
      }

      div {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    `
  ]
})
export class ScoreComponent implements OnInit {
  @Input()
  match: Match;

  constructor() {}

  ngOnInit() {}
}
