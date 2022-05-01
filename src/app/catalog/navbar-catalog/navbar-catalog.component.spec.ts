import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarCatalogComponent } from './navbar-catalog.component';

describe('NavbarCatalogComponent', () => {
  let component: NavbarCatalogComponent;
  let fixture: ComponentFixture<NavbarCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarCatalogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
