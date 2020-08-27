import { Component, OnInit} from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';


@Component({
  selector: 'app-loggin',
  templateUrl: './loggin.component.html',
  styleUrls: ['./loggin.component.css']
})
export class LogginComponent implements OnInit{
  operation: string = 'loggin';
  email: string = null;
  pass: string = null;

  constructor(private authentificationService: AuthenticationService){

  }

  ngOnInit(){

  }

  loggin()
  {
    this.authentificationService.loginWithEmail(this.email,this.pass).then((data) =>{
      alert('Login exitoso');
      console.log(data);
    }).catch((error)=>{
      alert('Error de Loggin');
      console.log(error);
    });
  }

  async logginFacebook(){
    try{
      const data = await this.authentificationService.logInWithFacebook()
      alert('Logged with facebook successful!')
      } catch (err) {
      this.authentificationService.handleFatalError(err)
    }
  }
}