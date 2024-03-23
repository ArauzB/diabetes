import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadTrackingComponent } from './upload-tracking.component';

describe('UploadTrackingComponent', () => {
  let component: UploadTrackingComponent;
  let fixture: ComponentFixture<UploadTrackingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadTrackingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
