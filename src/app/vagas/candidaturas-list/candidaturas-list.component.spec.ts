import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidaturasListComponent } from './candidaturas-list.component';

describe('CandidaturasListComponent', () => {
  let component: CandidaturasListComponent;
  let fixture: ComponentFixture<CandidaturasListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidaturasListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidaturasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
