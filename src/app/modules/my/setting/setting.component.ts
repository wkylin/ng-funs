import { Component, HostBinding, OnInit, ViewEncapsulation } from '@angular/core';
import { SlideInOutAnimation } from '../../../router-animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss'],
  animations: [SlideInOutAnimation]
})
export class SettingComponent implements OnInit {
  
  @HostBinding('@slideInOutAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  isCanDeactivate = false;
  
  constructor(private router: Router) {
  }
  
  ngOnInit() {
  }
  
  checkboxChanged(checked) {
    this.isCanDeactivate = checked;
  }
  
  hasChanges() {
    // 保存操作改变isCanDeactivate
    return this.isCanDeactivate;
  }
  
  singOut() {
    localStorage.clear();
    this.router.navigate(['/home']);
  }
}
