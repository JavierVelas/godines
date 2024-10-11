import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestacadoComponent } from './destacado.component';

describe('DestacadoComponent', () => {
  let component: DestacadoComponent;
  let fixture: ComponentFixture<DestacadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DestacadoComponent]
    });
    fixture = TestBed.createComponent(DestacadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
