import { TestBed } from '@angular/core/testing';

import { productService } from './product.service';


describe('Product', () => {
  let service: productService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(productService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
