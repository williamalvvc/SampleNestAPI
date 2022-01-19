import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('[{"id": 1, "properties": {"country": "Item 1", "lastname": "Item 1", "name": "Item 1"}, "salute": "First Element"}, {"id": 2, "properties": {"country": "Item 2", "lastname": "Item 2", "name": "Item 2"}, "salute": "Second Element"}, {"id": 3, "properties": {"country": "Item 3", "lastname": "Item 3", "name": "Item 3"}, "salute": "Third Element"}, {"id": 4, "properties": {"country": "Item 4", "lastname": "Item 4", "name": "Item 4"}, "salute": "Fourth Element"}, {"id": 5, "properties": {"country": "Item 5", "lastname": "Item 5", "name": "Item 5"}, "salute": "Fifth Element"}]');
    });
  });
});
