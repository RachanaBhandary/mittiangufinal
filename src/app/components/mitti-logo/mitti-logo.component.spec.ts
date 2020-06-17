import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MittiLogoComponent } from './mitti-logo.component';

describe('MittiLogoComponent', () => {
  let component: MittiLogoComponent;
  let fixture: ComponentFixture<MittiLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MittiLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MittiLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
