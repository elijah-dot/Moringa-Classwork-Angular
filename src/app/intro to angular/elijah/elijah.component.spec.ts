import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElijahComponent } from './elijah.component';

describe('ElijahComponent', () => {
  let component: ElijahComponent;
  let fixture: ComponentFixture<ElijahComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElijahComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElijahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
