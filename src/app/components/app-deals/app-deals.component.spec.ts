import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDealsComponent } from './app-deals.component';

describe('AppDealsComponent', () => {
  let component: AppDealsComponent;
  let fixture: ComponentFixture<AppDealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppDealsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppDealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
