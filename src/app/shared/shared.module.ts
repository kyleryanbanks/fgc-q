import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PlayerCardComponent, DigitComponent } from "./components";
import { MatCardModule } from "@angular/material/card";

@NgModule({
  imports: [CommonModule, MatCardModule],
  declarations: [PlayerCardComponent, DigitComponent],
  exports: [PlayerCardComponent, DigitComponent]
})
export class SharedModule {}
