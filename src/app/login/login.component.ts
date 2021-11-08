import { Component, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RouteConfigLoadStart, Router } from '@angular/router';
import { UrlServiceService } from '../url-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userForm:FormGroup;
  loginForm:FormGroup;
  @Output() admin:String="Akanksha";

  constructor(private urlservice:UrlServiceService, private router:Router) { 
    this.userForm = new FormGroup({
      'email' : new FormControl('',[Validators.required,Validators.email]),
      'password' : new FormControl('',Validators.required),
      'confirm' : new FormControl('',Validators.required),
      'date' : new FormControl('',Validators.required)
    });

    this.loginForm = new FormGroup({
      'email' : new FormControl('',[Validators.required,Validators.email]),
      'password' : new FormControl('',Validators.required)
    });

  }

  ngOnInit(): void {
  }

  submit(){
    Object.keys(this.userForm.controls).forEach(field => {
      const control=this.userForm.get(field);
      if(control instanceof FormControl)
      {
        control.markAsTouched({onlySelf:true});
      }
    });
    if(this.userForm.valid){
      console.log(this.userForm.value);
      this.urlservice.saveUser(this.userForm.value).subscribe(()=>{
        this.ngOnInit();
        alert("Succesfully registered");
      },()=>{
        alert("Something Went Wrong");
      })
    }
  }

  login(){
    this.urlservice.getAllUser().subscribe((data)=>{
      data.forEach((temp)=>{
        console.log(temp);
        if(temp.email==this.loginForm.value.email && temp.password==this.loginForm.value.password){
          console.log("Succesfull Logged In");
          this.router.navigate(['/create'])
        }
      })
    })
  }
}
