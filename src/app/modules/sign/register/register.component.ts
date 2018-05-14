import { Component, OnInit, HostBinding } from '@angular/core';
import { SlideInOutAnimation } from '../../../router-animations';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  animations: [SlideInOutAnimation]
})
export class RegisterComponent implements OnInit {
  @HostBinding('@slideInOutAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  
  constructor() { }

  ngOnInit() {
  }

}
