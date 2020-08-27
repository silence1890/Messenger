import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.css']
})
export class RegistryComponent implements OnInit {
  email: string = null;
  pass: string = null;

  constructor(private authentificationService: AuthenticationService) { }

  ngOnInit() {
  }

  register()
  {
    this.authentificationService.registerWithEmail(this.email,this.pass).then((data) =>{
      alert('Registro Exitoso');
      console.log(data);
    }).catch((error)=>{
      alert('Error de Registro');
      console.log(error);
    });
  }

}
