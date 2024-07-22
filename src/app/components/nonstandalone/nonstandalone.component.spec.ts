import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonstandaloneComponent } from './nonstandalone.component';

describe('NonstandaloneComponent', () => {
  let component: NonstandaloneComponent;
  let fixture: ComponentFixture<NonstandaloneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NonstandaloneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NonstandaloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
