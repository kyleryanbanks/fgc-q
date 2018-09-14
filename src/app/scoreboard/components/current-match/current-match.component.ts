import { Component, OnInit, Input } from "@angular/core";
import { Match } from "@app/shared";

@Component({
  selector: "fgcq-current-match",
  template: `
    <div>
      <fgcq-player-card [player]="match.playerOne"></fgcq-player-card>
      <fgcq-digit [digit]="match.playerOneScore"></fgcq-digit>
    </div>
    <div>
      <p>FT</p>
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
        justify-content: space-evenly;
        width: 66%;
      }

      div {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
      }

      p {
        margin-bottom: 0px;
      }
    `
  ]
})
export class CurrentMatchComponent implements OnInit {
  @Input()
  match: Match;

  constructor() {}

  ngOnInit() {}
}
