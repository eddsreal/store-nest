import { Controller, Get, Inject } from '@nestjs/common';

@Controller()
export class AppController {
  constructor(
    @Inject('API_KEY') private apiKey: string,
    @Inject('TASKS') private tasks: any[],
  ) {}

  @Get()
  getHello(): string {
    //console.log(this.tasks);
    return `Hola Mundo ${this.apiKey}`;
  }
}
