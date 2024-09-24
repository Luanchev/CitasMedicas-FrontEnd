import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/services/app.service';
import { Medico } from 'src/app/shared/models/medico-model';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent implements OnInit {
  public medicos: Medico[] =[];
  public especialidadSeleccionada: string = '';
  public especialidades: string[] = [];
  public medicosFiltrados: Medico[] = [];
  public medicoSeleccionado: Medico | null = null; //guardamos el medico seleccionado
  constructor(private service: AppService, private router: Router) { }

  ngOnInit(): void {
    this.service.getAllMedicos().subscribe((result: any) => {
      this.medicos = result.data.map((item: any) => ({
        //Aqui lo que hacemos es pasar los datos del doctor para que lo pueda recibir y mostrar
        MEDICO_ID: item.MEDICO_ID,
        NOMBRE: item.NOMBRE,
        APELLIDO: item.APELLIDO,
        ESPECIALIDAD: item.ESPECIALIDAD
      }
    ));
    // Extraer especialidades únicas
    this.especialidades = [...new Set(this.medicos.map(medico => medico.ESPECIALIDAD))];
  });
}


   // Filtrar médicos cuando el usuario selecciona una especialidad
   onEspecialidadChange() {
    this.medicosFiltrados = this.medicos.filter(medico => medico.ESPECIALIDAD === this.especialidadSeleccionada);
    this.medicoSeleccionado = null;

  }
  // Método para seleccionar un médico de la lista
  onSelectMedico(medico: Medico) {
    this.medicoSeleccionado = medico;
  }


}
