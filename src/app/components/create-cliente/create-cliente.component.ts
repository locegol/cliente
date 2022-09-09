import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-create-cliente',
  templateUrl: './create-cliente.component.html',
  styleUrls: ['./create-cliente.component.css']
})
export class CreateClienteComponent implements OnInit {

  createCliente: FormGroup;
  submitted = false;
  constructor(private fb: FormBuilder, 
    private _clienteService: ClienteService,
    private router: Router) { 
    this.createCliente = this.fb.group({
      nombre: [ '', Validators.required],
      apellido: [ '', Validators.required],
      edad: [ '', Validators.required],
      fecha: [ '', Validators.required],
    })
  }

  ngOnInit(): void {
  }
  agregarCliente(){
    this.submitted = true;
    if( this.createCliente.invalid){
      return;
    }
    const cliente : any ={
      nombre : this.createCliente.value.nombre,
      apellido : this.createCliente.value.apellido,
      edad : this.createCliente.value.edad,
      fecha : this.createCliente.value.fecha,
      fechaCreacion: new Date(),
      fechaActualizacion: new Date()
    }
    console.log(this.createCliente);
    this._clienteService.agregarCliente(cliente).then(()=>{
      console.log('registrado con exito');
      this.router.navigate(['/list-clientes'])
    }).catch(error =>{
      console.log(error)
    })
  }
  

}
