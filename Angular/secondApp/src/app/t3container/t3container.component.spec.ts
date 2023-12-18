import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T3containerComponent } from './t3container.component';

describe('T3containerComponent', () => {
  let component: T3containerComponent;
  let fixture: ComponentFixture<T3containerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [T3containerComponent]
    });
    fixture = TestBed.createComponent(T3containerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
