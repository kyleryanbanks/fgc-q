import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class PlayerService {
  _playerOne: string = "Killer Carla";
  _playerTwo: string = "Super Shari";
  _queue: string[] = [];

  get playerOne() {
    return this._playerOne;
  }

  set playerOne(playerOne: string) {
    this._playerOne = playerOne;
  }

  get playerTwo() {
    return this._playerTwo;
  }

  nextPlayerOne() {
    if (this._queue.length > 1) {
      this._playerOne = this._queue.shift();
      return this._playerOne;
    } else {
      return this._playerOne;
    }
  }

  nextPlayerTwo() {
    if (this._queue.length > 1) {
      this._playerTwo = this._queue.shift();
      return this._playerTwo;
    } else {
      return this._playerOne;
    }
  }

  set playerTwo(playerTwo: string) {
    this._playerTwo = playerTwo;
  }

  get queue() {
    return this._queue;
  }

  add(name: string) {
    this._queue.push(name);
  }

  remove(name: string) {
    this._queue = this._queue.filter(player => player !== name);
    return this._queue;
  }

  constructor() {}
}
