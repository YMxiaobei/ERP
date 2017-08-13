import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationControllorComponent } from './pagination-controllor.component';

describe('PaginationControllorComponent', () => {
  let component: PaginationControllorComponent;
  let fixture: ComponentFixture<PaginationControllorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginationControllorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationControllorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
