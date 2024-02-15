import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterInputsComponent } from './router-inputs.component';

describe('RouterInputsComponent', () => {
  let component: RouterInputsComponent;
  let fixture: ComponentFixture<RouterInputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterInputsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RouterInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
