import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { AuthService } from '../../core/services/auth.service'
import { StorageService } from '../../core/services/storage.service'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,
              private AuthService:AuthService,
              private storageService:StorageService
              ) { }

  ngOnInit(): void {
  }



  submit(){
    //this.router.navigate(['home'])
    this.AuthService.postLogin().subscribe(data=>{
      this.storageService.setMenu(data)
    })
  }

}
