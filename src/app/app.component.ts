import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isAuthenticated = false;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.isAuthenticated$.subscribe((isAuthenticated) => {
      this.isAuthenticated = isAuthenticated;

     
      if (isAuthenticated) {
        this.authService.checkAuthentication().subscribe(
          () => {
            
          },
          () => {
            this.logout();
          }
        );
      }
    });
  }

  logout(): void {
    localStorage.removeItem('token');
    this.authService.setAuthenticated(false);
  }
}