
import { HttpClientModule } from '@angular/common/http';
import { RestapiService } from '../../services/restapi.service';

import { OnInit, Component } from '@angular/core';

@Component({
  selector: 'app-restcall-demo',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './restcall-demo.component.html',
  styleUrl: './restcall-demo.component.css'
})
export class RestcallDemoComponent implements OnInit{

  jwtToken:string | undefined;

  constructor(private apiService: RestapiService) {}
  ngOnInit(): void {
    this.loginUser();
  }

  loginUser() {
    const credentials = {
      email: 'admin@gmail.com',
      password: 'admin@123'
    };

    this.apiService.login().subscribe({
      next: (response:any) => {
        console.log('Login successful', response);
        this.jwtToken = response.token; 
        
      },
      error: (error) => {
        console.error('Login failed', error);
      }
    });
  }
}
