import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

/**
 * 事件总线，组件之间可以通过这个服务进行通讯
 */
@Injectable()
export class EventBusService {
  public showGlobalLoading: Subject<boolean> = new Subject<boolean>();

  constructor() {
  }
}
