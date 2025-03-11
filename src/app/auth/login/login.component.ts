import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login() {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      if (this.email === user.email && this.password === user.password) {
        alert('Login Successful!');
        this.router.navigate(['/']); // الانتقال إلى الصفحة الرئيسية بعد تسجيل الدخول
      } else {
        alert('Invalid email or password.');
      }
    } else {
      alert('No user found. Please register first.');
    }
  }
}
