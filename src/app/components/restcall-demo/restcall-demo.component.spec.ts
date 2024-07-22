import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestcallDemoComponent } from './restcall-demo.component';

describe('RestcallDemoComponent', () => {
  let component: RestcallDemoComponent;
  let fixture: ComponentFixture<RestcallDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestcallDemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RestcallDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
