import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { of } from 'rxjs';
import { StorageService } from './storage.service'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

data =  {
  'email':'demo@clinicasantaisabel.com',
  'password':123456
}



  constructor(private http:HttpClient,
              private storageService:StorageService
              ) { }


postLogin(){
  return this.http.post("http://192.168.10.144:8080/api/auth/login",this.data)
}

getMenu(){
  return of(this.storageService.getMenu())
}



}
