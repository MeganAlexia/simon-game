import { TestBed, inject } from '@angular/core/testing';

import { GameHandlerService } from './game-handler.service';

describe('GameHandlerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GameHandlerService]
    });
  });

  it('should be created', inject([GameHandlerService], (service: GameHandlerService) => {
    expect(service).toBeTruthy();
  }));
});
