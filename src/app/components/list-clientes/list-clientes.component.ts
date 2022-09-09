import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-list-clientes',
  templateUrl: './list-clientes.component.html',
  styleUrls: ['./list-clientes.component.css']
})
export class ListClientesComponent implements OnInit {
  //items: Observable<any[]>;
  clientes: any[] = [];
  constructor(private _clienteService:ClienteService) {
    //this.items = firestore.collection('items').valueChanges();
   }

  ngOnInit(): void {
    this.getClientes();
  }
  getClientes(){
    this._clienteService.getClientes().subscribe(data => {
      this.clientes = [];
      data.forEach((element:any)=>{
        //console.log(element.payload.doc.id);
        //console.log(element.payload.doc.data());
        this.clientes.push({
          id:element.payload.doc.id,
          ...element.payload.doc.data()
        })
        console.log(this.clientes);
      })
      
    } )
  }

}
