import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): any {
    const salute = [
      {
        id: 1,
        salute: 'First Element',
        properties: {
          name: 'Item 1',
          lastname: 'Item 1',
          country: 'Item 1'
        }
      },
      {
        id: 2,
        salute: 'Second Element',
        properties: {
          name: 'Item 2',
          lastname: 'Item 2',
          country: 'Item 2'
        }
      },
      {
        id: 3,
        salute: 'Third Element',
        properties: {
          name: 'Item 3',
          lastname: 'Item 3',
          country: 'Item 3'
        }
      },
      {
        id: 4,
        salute: 'Fourth Element',
        properties: {
          name: 'Item 4',
          lastname: 'Item 4',
          country: 'Item 4'
        }
      },
      {
        id: 5,
        salute: 'Fifth Element',
        properties: {
          name: 'Item 5',
          lastname: 'Item 5',
          country: 'Item 5'
        }
      },
    ];

    return salute;
  }
  getSalute(): any {
    const output = 'Hello World!';
    return output;
  }
}
