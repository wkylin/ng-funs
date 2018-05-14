import { Component, HostBinding, OnInit, ViewEncapsulation } from '@angular/core';
import { FadeInAnimation } from '../../router-animations';

@Component({
  selector: 'app-my',
  templateUrl: './my.component.html',
  styleUrls: ['./my.component.scss'],
  animations: [FadeInAnimation]
})
export class MyComponent implements OnInit {
  
  @HostBinding('@fadeInAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  
  constructor() {
  }
  
  ngOnInit() {
  }
  
}
