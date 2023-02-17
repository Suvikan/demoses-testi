import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReseptiComponent } from './resepti.component';

describe('ReseptiComponent', () => {
  let component: ReseptiComponent;
  let fixture: ComponentFixture<ReseptiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReseptiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReseptiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
