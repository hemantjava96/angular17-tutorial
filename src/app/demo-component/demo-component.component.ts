import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-demo-component',
  standalone: true,
  imports: [],
  templateUrl: './demo-component.component.html',
  styleUrl: './demo-component.component.css'
})
export class DemoComponentComponent {

  //app component sending data to demo component i.e parent --> child
  @Input() inputVariable ="";

  //demo component sending data to app component i.e --> child to parent
  @Output() currentTime:EventEmitter<string> = new EventEmitter();
  sendMessage() {
    this.currentTime.emit(new Date().toString());    
  }
 
}
