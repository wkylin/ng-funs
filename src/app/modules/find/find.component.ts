import { Component, HostBinding, OnInit } from '@angular/core';
import { FadeInAnimation } from '../../router-animations';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.scss'],
  animations: [FadeInAnimation]
})
export class FindComponent implements OnInit {
  
  @HostBinding('@fadeInAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  
  number = '';
  
  constructor() {
  }
  
  ngOnInit() {
  }
  
  
}
