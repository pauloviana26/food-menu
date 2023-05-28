import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PratododiaPage } from './pratododia.page';

describe('PratododiaPage', () => {
  let component: PratododiaPage;
  let fixture: ComponentFixture<PratododiaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PratododiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
