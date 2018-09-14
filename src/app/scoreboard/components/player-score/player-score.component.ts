import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "fgcq-player-score",
  template: `
    <div (click)="getNextPlayer()" class="name">{{player}}</div>
    <div (click)="nextPoint()" class="score">{{score}}</div>
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
        margin: 10px;
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
        width: 260px;
        font-weight: bold;
        font-size: 144px;
      }
    `
  ]
})
export class PlayerScoreComponent {
  @Input()
  player: string;
  @Input()
  score: number;

  @Output()
  updateScore = new EventEmitter();
  @Output()
  nextPlayer = new EventEmitter();

  constructor() {}

  getNextPlayer() {
    console.log("emit next player");
    this.nextPlayer.emit(this.player);
  }

  nextPoint() {
    this.updateScore.emit();
  }
}
