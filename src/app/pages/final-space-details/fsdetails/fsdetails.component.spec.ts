import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FsdetailsComponent } from './fsdetails.component';

describe('FsdetailsComponent', () => {
  let component: FsdetailsComponent;
  let fixture: ComponentFixture<FsdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FsdetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FsdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
