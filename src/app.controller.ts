import { Controller, Get, Inject } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import config from './config';

@Controller()
export class AppController {
  constructor(
    @Inject('API_KEY') private apiKey: string,
    @Inject(config.KEY) private configService: ConfigType<typeof config>,
  ) {}

  @Get()
  getHello(): string {
    //console.log(this.tasks);
    return `Hola Mundo ${this.configService.apiKey}`;
  }
}
