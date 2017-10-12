import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootsNavbarComponent } from './boots-navbar.component';

describe('BootsNavbarComponent', () => {
  let component: BootsNavbarComponent;
  let fixture: ComponentFixture<BootsNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootsNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootsNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
