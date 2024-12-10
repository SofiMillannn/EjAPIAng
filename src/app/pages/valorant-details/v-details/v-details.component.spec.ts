import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VDetailsComponent } from './v-details.component';

describe('VDetailsComponent', () => {
  let component: VDetailsComponent;
  let fixture: ComponentFixture<VDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
