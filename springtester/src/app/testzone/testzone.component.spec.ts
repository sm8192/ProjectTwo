import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestzoneComponent } from './testzone.component';

describe('TestzoneComponent', () => {
  let component: TestzoneComponent;
  let fixture: ComponentFixture<TestzoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestzoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestzoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
