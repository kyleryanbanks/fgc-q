import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PlayerCardComponent, DigitComponent } from "./components";
import {
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatDialogModule,
  MatInputModule
} from "@angular/material";

@NgModule({
  imports: [CommonModule, MatCardModule],
  declarations: [PlayerCardComponent, DigitComponent],
  exports: [
    PlayerCardComponent,
    DigitComponent,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule
  ]
})
export class SharedModule {}
