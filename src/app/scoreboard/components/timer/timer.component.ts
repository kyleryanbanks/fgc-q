import { Component, OnInit, OnDestroy, Input } from "@angular/core";
import { DateTime, Duration } from "luxon";
import { interval, Subscription } from "rxjs";
import { TimerService } from "@app/timer.service";

@Component({
  selector: "fgcq-timer",
  template: `
    <div class="text">MATCH TIME</div>
    <div class="timer">
      <div class="time">{{runtime.minutes | number:'2.0-0'}}</div>
      <div class="seperator">:</div>
      <div class="time">{{runtime.seconds | number:'2.0-0'}}</div>
    </div>
  `,
  styles: [
    `
      :host {
        padding: 20px;
        text-align: center;
        height: 250px;
        width: 525px;
      }

      .timer {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .text {
        color: white;
        font-weight: bold;
        font-size: 64px;
      }

      .seperator {
        color: white;
        font-weight: bold;
        font-size: 144px;
      }

      .time {
        display: flex;
        align-items: center;
        justify-content: center;
        background: black;
        text-align: center;
        border-color: white;
        border-style: solid;
        border-width: 8px;
        color: yellow;
        height: 125px;
        width: 175px;
        font-weight: bold;
        font-size: 124px;
      }
    `
  ]
})
export class TimerComponent implements OnInit, OnDestroy {
  @Input()
  timer: DateTime;
  runtime: Duration;
  timerSub: Subscription;

  constructor() {}

  ngOnInit() {
    this.runtime = Duration.fromMillis(0);

    this.timerSub = interval(1000).subscribe(() => {
      this.runtime = this.timer
        .diffNow(["hours", "minutes", "seconds", "milliseconds"])
        .negate();
    });
  }

  ngOnDestroy() {
    this.timerSub.unsubscribe();
  }
}
