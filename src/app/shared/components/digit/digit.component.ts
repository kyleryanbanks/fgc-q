import { Component, Input } from "@angular/core";

@Component({
  selector: "fgcq-digit",
  template: `
    <p>
      {{digit}}
    </p>
  `,
  styles: []
})
export class DigitComponent {
  @Input()
  digit: number = 0;
}
