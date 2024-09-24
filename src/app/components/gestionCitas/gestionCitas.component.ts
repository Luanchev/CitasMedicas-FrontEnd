import { Medico } from './../../shared/models/medico-model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';
import { GestionCitasFormComponent } from './gestionCitas-form/gestionCitas-form.component';

@Component({
  selector: 'app-gestionCitas',
  templateUrl: './gestionCitas.component.html',
  styleUrls: ['./gestionCitas.component.scss']
})
export class GestionCitasComponent implements OnInit {
  @ViewChild(GestionCitasFormComponent) gestionCitasForm: GestionCitasFormComponent

  public medico = new Medico();
  public especialidades: string[] = [];
  public medicos: Medico[] =[];
  //public safeImage: SafeStyle;
  private idMedico: number;

  especialidadControl = new FormControl('');


  constructor(
    private service: AppService,
    private route: ActivatedRoute
    //private sanitizer: DomSanitizer

  ) { }

  ngOnInit(): void {
    this.idMedico = Number(this.route.snapshot.paramMap.get('MEDICO_ID'))
    this.getMedico()

  }
  getMedico() {
    this.service.getMedico(this.idMedico).subscribe((result:any)=> {
      this.gestionCitasForm.medico = result.data;
      this.medico = result.data
      //this.safeImage = this.sanitizer.bypassSecurityTrustStyle(`url(${this.restaurant.IMAGE})`);
    });


  }

}


