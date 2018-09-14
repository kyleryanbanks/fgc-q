import { Component, Input } from "@angular/core";

@Component({
  selector: "fgcq-digit",
  template: `
    {{digit}}
  `,
  styles: [
    `
      :host {
        background-color: black;
        padding: 10px;
        text-align: center;
        font-size: 32px;
        color: red;
        font-family: "Press Start 2P", cursive;
      }
    `
  ]
})
export class DigitComponent {
  @Input()
  digit: number = 0;
}
