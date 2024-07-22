import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nonstandalone1Component } from './nonstandalone1.component';

describe('Nonstandalone1Component', () => {
  let component: Nonstandalone1Component;
  let fixture: ComponentFixture<Nonstandalone1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Nonstandalone1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Nonstandalone1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
