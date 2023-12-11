import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucsComponent } from './sucs.component';

describe('SucsComponent', () => {
  let component: SucsComponent;
  let fixture: ComponentFixture<SucsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SucsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SucsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
