import { GestionCitasComponent } from './gestionCitas.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';



describe('GestionCitasComponent', () => {
  let component: GestionCitasComponent;
  let fixture: ComponentFixture<GestionCitasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionCitasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionCitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
