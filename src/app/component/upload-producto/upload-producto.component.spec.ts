import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadProductoComponent } from './upload-producto.component';

describe('UploadProductoComponent', () => {
  let component: UploadProductoComponent;
  let fixture: ComponentFixture<UploadProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadProductoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
