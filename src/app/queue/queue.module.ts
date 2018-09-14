import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SharedModule } from "@app/shared";
import {
  AddPlayerDialogComponent,
  AddPlayerButtonComponent
} from "./components";
import { QueueRoutingModule } from "./queue-routing.module";
import { QueueComponent } from "./queue.component";

@NgModule({
  imports: [CommonModule, QueueRoutingModule, SharedModule],
  declarations: [
    QueueComponent,
    AddPlayerButtonComponent,
    AddPlayerDialogComponent
  ],
  exports: [QueueComponent],
  entryComponents: [AddPlayerDialogComponent]
})
export class QueueModule {}
