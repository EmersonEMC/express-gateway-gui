import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiEndpointComponent } from './api-endpoint.component';

describe('ApiEndpointComponent', () => {
  let component: ApiEndpointComponent;
  let fixture: ComponentFixture<ApiEndpointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiEndpointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiEndpointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
