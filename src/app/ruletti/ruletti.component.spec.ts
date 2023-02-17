import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RulettiComponent } from './ruletti.component';

describe('RulettiComponent', () => {
  let component: RulettiComponent;
  let fixture: ComponentFixture<RulettiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RulettiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RulettiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
