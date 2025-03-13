import { Component } from '@angular/core';
import { RegisterComponent } from "../../user/register/register.component";
import { LoginComponent } from "../../user/login/login.component";
import { CounterComponent } from "../counter/counter.component";


@Component({
  selector: 'app-home',
  imports: [RegisterComponent, LoginComponent, CounterComponent, ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',

})


export default class HomeComponent {

}
