import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadCategoriaComponent } from './upload-categoria.component';

describe('UploadCategoriaComponent', () => {
  let component: UploadCategoriaComponent;
  let fixture: ComponentFixture<UploadCategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadCategoriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
