import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadProductoImagenComponent } from './upload-producto-imagen.component';

describe('UploadProductoImagenComponent', () => {
  let component: UploadProductoImagenComponent;
  let fixture: ComponentFixture<UploadProductoImagenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadProductoImagenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadProductoImagenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
