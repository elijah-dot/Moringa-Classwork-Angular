import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainBankComponentComponent } from './main-bank-component.component';

describe('MainBankComponentComponent', () => {
  let component: MainBankComponentComponent;
  let fixture: ComponentFixture<MainBankComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainBankComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainBankComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
