import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductRegComponent } from './product-reg.component';

describe('ProductRegComponent', () => {
  let component: ProductRegComponent;
  let fixture: ComponentFixture<ProductRegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductRegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
