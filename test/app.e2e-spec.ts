import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('[{"id": 1, "properties": {"country": "Item 1", "lastname": "Item 1", "name": "Item 1"}, "salute": "First Element"}, {"id": 2, "properties": {"country": "Item 2", "lastname": "Item 2", "name": "Item 2"}, "salute": "Second Element"}, {"id": 3, "properties": {"country": "Item 3", "lastname": "Item 3", "name": "Item 3"}, "salute": "Third Element"}, {"id": 4, "properties": {"country": "Item 4", "lastname": "Item 4", "name": "Item 4"}, "salute": "Fourth Element"}, {"id": 5, "properties": {"country": "Item 5", "lastname": "Item 5", "name": "Item 5"}, "salute": "Fifth Element"}]');
  });
});
