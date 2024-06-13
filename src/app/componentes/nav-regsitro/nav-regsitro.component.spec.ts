import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavRegsitroComponent } from './nav-regsitro.component';

describe('NavRegsitroComponent', () => {
  let component: NavRegsitroComponent;
  let fixture: ComponentFixture<NavRegsitroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavRegsitroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavRegsitroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
