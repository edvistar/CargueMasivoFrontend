import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoProjectComponent } from './listado-project.component';

describe('ListadoProjectComponent', () => {
  let component: ListadoProjectComponent;
  let fixture: ComponentFixture<ListadoProjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListadoProjectComponent]
    });
    fixture = TestBed.createComponent(ListadoProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
