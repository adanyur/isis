import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs'

import { AuthService } from '../../../core/services/auth.service'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  menus$:Observable<any>


  constructor(private authService:AuthService) { }

  ngOnInit(): void {
     this.menus$ = this.authService.getMenu();
  }







}
