import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlatstandaloneComponent } from './flatstandalone.component';

describe('FlatstandaloneComponent', () => {
  let component: FlatstandaloneComponent;
  let fixture: ComponentFixture<FlatstandaloneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlatstandaloneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlatstandaloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
