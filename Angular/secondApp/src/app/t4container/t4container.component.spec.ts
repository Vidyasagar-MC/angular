import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T4containerComponent } from './t4container.component';

describe('T4containerComponent', () => {
  let component: T4containerComponent;
  let fixture: ComponentFixture<T4containerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [T4containerComponent]
    });
    fixture = TestBed.createComponent(T4containerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
