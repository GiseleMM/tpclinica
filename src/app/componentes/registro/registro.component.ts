import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { Iusuario } from '../../modelos/iusuario';
import { NgTemplateOutlet } from '@angular/common';
import { AutenticacionService } from '../../servicios/autenticacion.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { connectStorageEmulator } from 'firebase/storage';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [NgTemplateOutlet, ReactiveFormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent implements OnInit {

  mensaje: string = "";
  formGroupRegistro!: FormGroup;
  titulo: string = "paciente";
  autenticacionService = inject(AutenticacionService);
  readonly formBuilder = inject(FormBuilder);

  //especialista
  especialidad = "";
  especialidades = [];
  mostrarinputAddEspecialista = false;


  //paciente 
  mostrarInputObraSocial = true;
  ususario!: Iusuario;
  private ruta = inject(ActivatedRoute);
  ngOnInit(): void {

    // ruta actual
    this.ruta.url.subscribe(urlSegment => {
      const fullPath = urlSegment.map(segment => segment.path).join('/');
      console.log(fullPath)
      if (fullPath == "especialista") {
        this.titulo = "especialista";
        this.mostrarInputObraSocial = false;
      }
    });


    //formulario
    this.crearFormulario();

    ;
  }

  crearFormulario() {
    if (this.titulo == "especialista") {
      this.formGroupRegistro = this.formBuilder.group({
        txt_name: ['', [Validators.minLength(3), Validators.maxLength(20), Validators.required]],
        txt_apellido: ['', [Validators.minLength(3), Validators.maxLength(20), Validators.required]],
        txt_edad: ['', [Validators.max(100), Validators.required]],
        txt_dni: ['', [Validators.minLength(8), Validators.maxLength(8), Validators.required]],
        txt_email: ['', [Validators.email, Validators.required]],
        txt_pass: ['', [Validators.minLength(6), Validators.required]],
        txt_especialidades: ['', [Validators.required]],
        txt_foto: ['', [Validators.required]],

      });
    }
    if (this.titulo == "paciente") {
      this.formGroupRegistro = this.formBuilder.group({
        txt_name: ['', [Validators.minLength(3), Validators.maxLength(20)]],
        txt_apellido: ['', [Validators.minLength(3), Validators.maxLength(20), Validators.required]],
        txt_edad: ['', [Validators.max(100), Validators.required]],
        txt_dni: ['', [Validators.minLength(8), Validators.maxLength(8)]],
        txt_email: ['', [Validators.email, Validators.required]],
        txt_pass: ['', [Validators.minLength(6), Validators.required]],
        txt_obra_social: ['', [Validators.required]],
        txt_foto: ['', [Validators.required]],


      });
    }


  }

  onChange(evento: Event) {
    const isChecked = (<HTMLInputElement>evento.target).checked;
    console.log(isChecked);
    console.log((evento?.currentTarget as HTMLInputElement).checked);

    this.mostrarinputAddEspecialista = (evento?.currentTarget as HTMLInputElement).checked;

  }


  onSubmit() {
    console.log(this.formGroupRegistro);
    if (!this.formGroupRegistro.valid) {
      Object.keys(this.formGroupRegistro.controls).forEach(field => {
        const control = this.formGroupRegistro.get(field);
        console.log(field);
        console.log(control?.errors)
      })
    }

    console.log(this.formGroupRegistro.errors);
    console.log(this.formGroupRegistro.value)
  }
  //   onClick()
  //   {
  //     let temporal="voxola2906@fna6.com";
  // this.autenticacionService.register(temporal,"123456");    
  //   }

}
