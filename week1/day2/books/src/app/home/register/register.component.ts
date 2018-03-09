import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services';

import { User } from '../../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User = new User();
  registrationErrors: string[] = [];

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {}

  onSubmit(data: User) {
    this.auth.register(data).subscribe(
      user => {
        // do something with user;
        this.router.navigateByUrl('/books');
      },
      error => {
        console.log('error logging in ', error);
      }
    );
  }
}
