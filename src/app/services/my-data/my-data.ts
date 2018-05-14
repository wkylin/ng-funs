import {InMemoryDbService} from 'angular-in-memory-web-api';

class Person {
  id: string;
  name: string;
  dept: string;
}

export class InMemoryPersonDbService implements InMemoryDbService {
  createDb() {
    const persons: Person[] = [
      {
        'id': '0001',
        'name': 'wkylin',
        'dept': 'IT部'
      },
      {
        'id': '0002',
        'name': '老王',
        'dept': 'IT部'
      },
      {
        'id': '0003',
        'name': '小张',
        'dept': '行政部'
      }
    ];
    return { persons: persons };
  }
}
