import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DemoComponentComponent } from './demo-component/demo-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,DemoComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'angular17-tutorial';

  message: string = "hello world";
  now:string | undefined;

  updateCurrentTime(currentTime: string) {
    this.now=currentTime;
  }
}
