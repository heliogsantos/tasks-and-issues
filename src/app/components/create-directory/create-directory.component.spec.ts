import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDirectoryComponent } from './create-directory.component';

describe('CreateDirectoryComponent', () => {
  let component: CreateDirectoryComponent;
  let fixture: ComponentFixture<CreateDirectoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateDirectoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDirectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
