import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VagaInfoComponent } from './vaga-info.component';

describe('VagaInfoComponent', () => {
  let component: VagaInfoComponent;
  let fixture: ComponentFixture<VagaInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VagaInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VagaInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
