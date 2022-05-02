import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemExtendedComponent } from './item-extended.component';

describe('ItemExtendedComponent', () => {
  let component: ItemExtendedComponent;
  let fixture: ComponentFixture<ItemExtendedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemExtendedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemExtendedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
