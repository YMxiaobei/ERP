import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasingTableComponent } from './purchasing-table.component';

describe('PurchasingTableComponent', () => {
  let component: PurchasingTableComponent;
  let fixture: ComponentFixture<PurchasingTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchasingTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchasingTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
