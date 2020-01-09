import { TestBed } from '@angular/core/testing';

import { ListActiviteService } from './list-activite.service';

describe('ListActiviteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListActiviteService = TestBed.get(ListActiviteService);
    expect(service).toBeTruthy();
  });
});
