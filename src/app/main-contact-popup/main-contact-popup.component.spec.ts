import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainContactPopupComponent } from './main-contact-popup.component';

describe('MainContactPopupComponent', () => {
  let component: MainContactPopupComponent;
  let fixture: ComponentFixture<MainContactPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainContactPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainContactPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
