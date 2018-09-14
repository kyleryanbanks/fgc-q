import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "fgcq-player-score",
  template: `
    <div class="name">{{player}}</div>
    <div class="score">{{score}}</div>
  `,
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 250px;
        width: 500px;
      }

      .name {
        color: white;
        font-weight: bold;
        font-size: 64px;
      }

      .score {
        display: flex;
        align-items: center;
        justify-content: center;
        background: black;
        text-align: center;
        border-color: white;
        border-style: solid;
        border-width: 10px;
        color: red;
        height: 150px;
        width: 250px;
        font-weight: bold;
        font-size: 144px;
      }
    `
  ]
})
export class PlayerScoreComponent implements OnInit {
  @Input()
  player: string;
  @Input()
  score: number;

  constructor() {}

  ngOnInit() {}
}
