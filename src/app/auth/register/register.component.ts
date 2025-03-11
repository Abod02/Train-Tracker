import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username: string = '';
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  register() {
    if (this.username && this.email && this.password) {
      const user = { username: this.username, email: this.email, password: this.password };
      localStorage.setItem('user', JSON.stringify(user));
      alert('Registration Successful! You can now log in.');
      this.router.navigate(['/sign/login']);
    } else {
      alert('Please fill in all fields.');
    }
  }
}
