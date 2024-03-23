import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadCategoriaImagenComponent } from './upload-categoria-imagen.component';

describe('UploadCategoriaImagenComponent', () => {
  let component: UploadCategoriaImagenComponent;
  let fixture: ComponentFixture<UploadCategoriaImagenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadCategoriaImagenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadCategoriaImagenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
