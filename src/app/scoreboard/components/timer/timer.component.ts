import { Component, OnInit, OnDestroy } from "@angular/core";
import { DateTime, Duration } from "luxon";
import { interval, Subscription } from "rxjs";

@Component({
  selector: "fgcq-timer",
  template: `
    <p>
      {{runtime.hours | number:'2.0-0'}} : {{runtime.minutes | number:'2.0-0'}} : {{runtime.seconds | number:'2.0-0'}}
    </p>
    <button (click)="resetTimer()">Reset Timer</button>
  `,
  styles: []
})
export class TimerComponent implements OnInit, OnDestroy {
  startOfMatch: DateTime;
  runtime: Duration;
  timerSub: Subscription;

  constructor() {}

  ngOnInit() {
    this.startOfMatch = DateTime.local();
    this.runtime = Duration.fromMillis(0);

    this.timerSub = interval(1000).subscribe(() => {
      this.runtime = this.startOfMatch
        .diffNow(["hours", "minutes", "seconds", "milliseconds"])
        .negate();
    });
  }

  ngOnDestroy() {
    this.timerSub.unsubscribe();
  }

  resetTimer() {
    this.startOfMatch = DateTime.local();
  }
}
