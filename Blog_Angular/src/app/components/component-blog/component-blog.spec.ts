import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentBlog } from './component-blog';

describe('ComponentBlog', () => {
  let component: ComponentBlog;
  let fixture: ComponentFixture<ComponentBlog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentBlog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentBlog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
