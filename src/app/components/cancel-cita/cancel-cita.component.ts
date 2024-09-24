  import { Component, OnInit } from '@angular/core';
  import { AppService } from 'src/app/services/app.service';

  @Component({
    selector: 'app-cancel-cita',
    templateUrl: './cancel-cita.component.html',
    styleUrls: ['./cancel-cita.component.scss']
  })
  export class CancelCitaComponent implements OnInit {
    state = "Tu cita medica aún no ha sido cancelada"
    codigoUnico: string;
    constructor(
      private service: AppService
    ) { }

    ngOnInit(): void {
    }
    sendCancel() {
      this.service.cancelCita(this.codigoUnico).subscribe((result: any) => {
        this.state = 'Tu cita medica se ha cancelado con ÉXITO'
        console.log(result)
      })
      console.log(this.codigoUnico)
    }

  }
