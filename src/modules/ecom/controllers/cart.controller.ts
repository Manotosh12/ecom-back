// cart.controller.ts
import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { CreateCartItemDto } from '../ dto/create-cart-item.dto';
import { CartService } from '../ services/cart.service';


@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Get()
  findAll() {
    return this.cartService.findAll();
  }

  @Post()
  addItem(@Body() createCartItemDto: CreateCartItemDto) {
    return this.cartService.addItem(createCartItemDto);
  }

  @Delete(':id')
  removeItem(@Param('id') id: string) {
    return this.cartService.removeItem(+id);
  }
}
