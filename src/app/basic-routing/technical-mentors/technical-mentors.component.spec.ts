import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalMentorsComponent } from './technical-mentors.component';

describe('TechnicalMentorsComponent', () => {
  let component: TechnicalMentorsComponent;
  let fixture: ComponentFixture<TechnicalMentorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnicalMentorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicalMentorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
