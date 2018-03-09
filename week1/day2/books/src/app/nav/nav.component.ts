import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  loggedIn: boolean;

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {
    this.auth.loggedIn$.subscribe(authed => (this.loggedIn = authed));
  }

  isAuthed(): boolean {
    return this.auth.isAuthed();
  }

  logout(): void {
    this.auth.logout().subscribe(() => this.router.navigateByUrl('/'));
  }
}
