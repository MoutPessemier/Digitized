import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeCommentComponent } from './change-comment.component';

describe('ChangeCommentComponent', () => {
  let component: ChangeCommentComponent;
  let fixture: ComponentFixture<ChangeCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
