import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <router-outlet></router-outlet>
    <fgcq-queue></fgcq-queue>
  `,
  styles: []
})
export class AppComponent {}
