import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/services/register.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  loginData={
    nombre:'',
    apellido:'',
    telefono:'',
    email:'',
    password:''
  }

  constructor(private registerService:RegisterService, private router:Router) { }

  register(){
    this.registerService.register(this.loginData).subscribe(
      res=>{
        console.log(res)
        alert(res.message)
        localStorage.setItem('token', res.token)
        this.router.navigate(['/login'])
      },
      err=>console.log(err)
    )
  }


  ngOnInit(): void {
  }

}
