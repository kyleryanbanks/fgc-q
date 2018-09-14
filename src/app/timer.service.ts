import { Injectable } from "@angular/core";
import { DateTime } from "luxon";

@Injectable({
  providedIn: "root"
})
export class TimerService {
  _timer: DateTime;

  get timer(): DateTime {
    return this._timer;
  }

  reset() {
    this._timer = DateTime.local();
    return this._timer;
  }

  constructor() {
    this._timer = DateTime.local();
  }
}
