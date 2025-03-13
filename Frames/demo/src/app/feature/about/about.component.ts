import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CounterSignalComponent } from "../counter/counter.component";

@Component({
  selector: 'app-about',
  imports: [FormsModule, CounterSignalComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export default class AboutComponent {
  user = '';
  clean() {
    this.user = '';
  }
}
