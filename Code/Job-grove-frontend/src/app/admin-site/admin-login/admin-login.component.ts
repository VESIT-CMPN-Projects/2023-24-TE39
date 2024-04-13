import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AdminsService } from '../admins.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit{
  loginForm!: FormGroup;
  constructor(private AdminSService:AdminsService,private router:Router){}
  ngOnInit(): void {
    this.createForm()
  }

  createForm():void{
    this.loginForm=new FormGroup({
      admin_name:new FormControl(),
      password:new FormControl()
    })
  }
  submit():void{
    this.AdminSService.loginAdmin(this.loginForm.value).subscribe((value)=>{
      if(value.validYN===1){
        console.log(value);
        this.router.navigate(["/admin-dashboard"])
      }
    })
  }
}
