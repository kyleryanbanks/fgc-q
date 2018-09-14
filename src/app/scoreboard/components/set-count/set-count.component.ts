import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "fgcq-set-count",
  template: `
    <div class="text">FT</div>
    <div class="count">{{count}}</div>
  `,
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 160px;
        width: 175px;
      }

      .text {
        color: white;
        font-weight: bold;
        font-size: 64px;
      }

      .count {
        display: flex;
        align-items: center;
        justify-content: center;
        background: black;
        text-align: center;
        border-color: white;
        border-style: solid;
        border-width: 7px;
        color: green;
        height: 100px;
        width: 160px;
        font-weight: bold;
        font-size: 72px;
      }
    `
  ]
})
export class SetCountComponent implements OnInit {
  @Input()
  count: number;

  constructor() {}

  ngOnInit() {}
}
