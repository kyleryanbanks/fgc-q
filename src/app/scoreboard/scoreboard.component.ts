import { Component, OnInit } from "@angular/core";

@Component({
  selector: "fgcq-scoreboard",
  template: `
    <fgcq-timer></fgcq-timer>
    <fgcq-score></fgcq-score>
    <fgcq-queue></fgcq-queue>
  `,
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    `
  ]
})
export class ScoreboardComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
