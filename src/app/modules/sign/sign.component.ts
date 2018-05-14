import { Component, OnInit, HostBinding } from '@angular/core';
import { FadeInAnimation } from '../../router-animations';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss'],
  animations: [FadeInAnimation]
})
export class SignComponent implements OnInit {
  
  @HostBinding('@fadeInAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  
  constructor() { }

  ngOnInit() {
  }

}
