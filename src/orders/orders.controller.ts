import { Body, Controller, Post } from '@nestjs/common';
import { OrderDto } from './requests';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  create(@Body() payload: OrderDto) {
    return this.ordersService.create(payload);
  }
}
