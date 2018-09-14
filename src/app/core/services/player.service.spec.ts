import { TestBed, inject } from "@angular/core/testing";

import { PlayerService } from "@app/core/services/player.service";

describe("PlayerService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlayerService]
    });
  });

  it("should be created", inject([PlayerService], (service: PlayerService) => {
    expect(service).toBeTruthy();
  }));
});
