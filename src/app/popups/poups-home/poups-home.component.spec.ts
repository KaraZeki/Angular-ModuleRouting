import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoupsHomeComponent } from './poups-home.component';

describe('PoupsHomeComponent', () => {
  let component: PoupsHomeComponent;
  let fixture: ComponentFixture<PoupsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoupsHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoupsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
