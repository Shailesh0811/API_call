import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepatrmentListComponent } from './depatrment-list.component';

describe('DepatrmentListComponent', () => {
  let component: DepatrmentListComponent;
  let fixture: ComponentFixture<DepatrmentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepatrmentListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepatrmentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
