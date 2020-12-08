import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  error:any;
  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {}
  
  login(username: string, password: string) {
    this.authService.login(username, password).subscribe(
      success => this.router.navigate(['/']),
      error => this.error = error
    );
  }

}
