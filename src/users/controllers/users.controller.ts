import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ParseIntPipe } from '../../common/parse-int.pipe';
import { UsersService } from '../services/users.service';
import { CreateUserDto, UpdateUserDto } from '../dtos/users.dtos';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  create(@Body() payload: CreateUserDto) {
    return this.usersService.create(payload);
  }

  @Get(':userId')
  findOne(@Param('userId', ParseIntPipe) userId: number) {
    return this.usersService.findOne(userId);
  }

  @Get(':userId/orders')
  findOrdersByUser(@Param('userId', ParseIntPipe) userId: number) {
    return this.usersService.findOrdersByUser(userId);
  }

  @Get()
  find() {
    return this.usersService.find();
  }

  @Put(':userId')
  updateOne(
    @Param('userId', ParseIntPipe) userId: number,
    @Body() payload: UpdateUserDto,
  ) {
    return this.usersService.updateOne(userId, payload);
  }

  @Delete(':userId')
  deleteOne(@Param('userId', ParseIntPipe) userId: number) {
    return this.usersService.delete(userId);
  }
}
