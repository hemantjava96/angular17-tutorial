import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-demo-component',
  standalone: true,
  imports: [],
  templateUrl: './demo-component.component.html',
  styleUrl: './demo-component.component.css'
})
export class DemoComponentComponent {

  @Input() inputVariable ="";

  @Output() currentTime:EventEmitter<string> = new EventEmitter();

  sendMessage() {
    this.currentTime.emit(new Date().toDateString());    
  }
 
}
