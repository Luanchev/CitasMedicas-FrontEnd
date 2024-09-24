import { Component, OnInit,Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AppService } from 'src/app/services/app.service';
import { InfoDialogComponent } from 'src/app/shared/dialogs/info-dialog/info-dialog.component';
import { GestionCitas } from 'src/app/shared/models/gestionCitas-models';
import { Medico } from 'src/app/shared/models/medico-model';

@Component({
  selector: 'app-gestionCitas-form',
  templateUrl: './gestionCitas-form.component.html',
  styleUrls: ['./gestionCitas-form.component.scss']
})
export class GestionCitasFormComponent implements OnInit {
  public citaForm;
  public gestionCita = new GestionCitas();
  @Input() medico: Medico;

  constructor(
    public dialog: MatDialog,
    private fb: FormBuilder,
    private service: AppService,
    private router: Router

  ) { }

  ngOnInit(): void {
    this.initForm()

  }
  initForm() {
    this.citaForm = this.fb.group({
      FECHA_CITA: [new Date(),Validators.required],
      CEDULA: ['', Validators.required],
      PACIENTE_NOMBRE: ['', Validators.required],
      PACIENTE_APELLIDO:['', Validators.required],
      PACIENTE_EMAIL:['', Validators.required],
      PACIENTE_CELULAR:['', Validators.required],
      DISPONIBILIDAD:['', Validators.required]
    });

  }

  sendCita() {
    this.setCita()
    this.service.createCita(this.gestionCita).subscribe((result: any)=> {
      const title = "CODIGO UNICO: " + result.data
      const info = "Necesitaras el numero de cedula para cancelar tu cita. Recuerda que solo puedes solicitar una unica cita medica"
      this.openDialog( title,info) // con esto abrimos el dialog que seria un mensaje emergente, con la informacion del codigo
    },(error)=>{
      //Si hay un error arrojar un mensaje
      console.error("Error al enviar la cita:", error);
      const errorMessage ="Hubo un problema al solicitar la cita, recuerda que solo se puede una cita por cedula, por favor, intenta de nuevo";
      this.openDialog("Error", errorMessage); //muestra el dialogo de error
    }
  );
  }

  setCita(){
    this.gestionCita.FECHA_CITA = this.citaForm.get('FECHA_CITA').value;
    this.gestionCita.CEDULA = this.citaForm.get('CEDULA').value;
    this.gestionCita.PACIENTE_NOMBRE = this.citaForm.get('PACIENTE_NOMBRE').value;
    this.gestionCita.PACIENTE_APELLIDO = this.citaForm.get('PACIENTE_APELLIDO').value;
    this.gestionCita.PACIENTE_EMAIL = this.citaForm.get('PACIENTE_EMAIL').value;
    this.gestionCita.PACIENTE_CELULAR = this.citaForm.get('PACIENTE_CELULAR').value;
    this.gestionCita.DISPONIBILIDAD_ID = this.citaForm.get('DISPONIBILIDAD').value;
    this.gestionCita.MEDICO_ID = this.medico.MEDICO_ID;

  }

  openDialog(title: string, info: string): void {
    const dialogRef = this.dialog.open(InfoDialogComponent, {
      width: '350px',
      data: {title: title, info: info}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
