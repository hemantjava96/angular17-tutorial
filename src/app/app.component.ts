import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DemoComponentComponent } from './demo-component/demo-component.component';
import { UserModule } from './user/user.module';
import { RestcallDemoComponent } from "./components/restcall-demo/restcall-demo.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, DemoComponentComponent, UserModule, RestcallDemoComponent]
})
export class AppComponent {
 
  title = 'angular17-tutorial';


  userName:string = "hemant";

  message: string = "hello world";
  now:string | undefined;
  updateCurrentTime(currentTime: string) {
    this.now=currentTime;
  }
}
