import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ScoreboardModule } from "./scoreboard/";
import { CoreModule } from "./core/core.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "@app/app-routing.module";
import { QueueModule } from './queue/queue.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ScoreboardModule,
    CoreModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    QueueModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
