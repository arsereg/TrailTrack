import { TestBed } from '@angular/core/testing';

import { SideMenuVisibilityService } from './side-menu-visibility.service';

describe('SideMenuVisibilityService', () => {
  let service: SideMenuVisibilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SideMenuVisibilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
