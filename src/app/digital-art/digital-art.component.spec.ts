import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalArtComponent } from './digital-art.component';

describe('DigitalArtComponent', () => {
  let component: DigitalArtComponent;
  let fixture: ComponentFixture<DigitalArtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigitalArtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalArtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
