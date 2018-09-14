import { Component } from "@angular/core";
import { PlayerService } from "@app/core/services";
import { TimerService } from "@app/timer.service";
import { DateTime } from "luxon";

@Component({
  selector: "fgcq-scoreboard",
  template: `
    <fgcq-timer [timer]="timer"></fgcq-timer>
    <div class="currentMatch">
      <fgcq-player-score 
        (nextPlayer)="updatePlayerOne($event)" 
        (updateScore)="updatePlayerOneScore()"
        [player]="playerOne" 
        [score]="playerOneScore"></fgcq-player-score>
      <fgcq-set-count 
        [count]="ft"></fgcq-set-count>
      <fgcq-player-score 
        (nextPlayer)="updatePlayerTwo($event)" 
        (updateScore)="updatePlayerTwoScore()"
        [player]="playerTwo" 
        [score]="playerTwoScore"></fgcq-player-score>
    </div>
  `,
  styles: [
    `
      :host {
        height: 100vh;
        width: 100vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: black;
      }

      fgcq-set-count {
        align-self: center;
      }

      .currentMatch {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
      }
    `
  ]
})
export class ScoreboardComponent {
  playerOne: string;
  playerOneScore: number;
  playerTwo: string;
  playerTwoScore: number;
  timer: DateTime;

  constructor(
    private players: PlayerService,
    private timerService: TimerService
  ) {
    this.playerOne = players.playerOne;
    this.playerOneScore = 0;
    this.playerTwo = players.playerTwo;
    this.playerTwoScore = 0;
    this.timer = timerService.timer;
  }

  ft = 3;

  updatePlayerOne(player) {
    this.players.add(player);
    this.playerOne = this.players.nextPlayerOne();
    this.timer = this.timerService.reset();
    this.playerOneScore = 0;
  }

  updatePlayerOneScore() {
    this.playerOneScore += 1;
  }

  updatePlayerTwo(player) {
    this.players.add(player);
    this.playerTwo = this.players.nextPlayerTwo();
    this.timer = this.timerService.reset();
    this.playerTwoScore = 0;
  }

  updatePlayerTwoScore() {
    this.playerTwoScore += 1;
  }
}
