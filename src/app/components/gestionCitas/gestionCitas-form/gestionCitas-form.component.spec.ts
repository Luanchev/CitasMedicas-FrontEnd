import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GestionCitasFormComponent } from './gestionCitas-form.component';


describe('GestionCitasFormComponent', () => {
  let component: GestionCitasFormComponent;
  let fixture: ComponentFixture<GestionCitasFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionCitasFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionCitasFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
