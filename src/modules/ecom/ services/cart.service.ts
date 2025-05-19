// cart.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CartItem } from '../ entities/cart-item.entity';
import { Product } from '../ entities/product.entity';
import { CreateCartItemDto } from '../ dto/create-cart-item.dto';


@Injectable()
export class CartService {
  constructor(
    @InjectRepository(CartItem)
    private cartRepo: Repository<CartItem>,

    @InjectRepository(Product)
    private productRepo: Repository<Product>,
  ) {}

  async findAll(): Promise<CartItem[]> {
    return this.cartRepo.find();
  }

  async addItem(dto: CreateCartItemDto): Promise<CartItem> {
    const product = await this.productRepo.findOne({ where: { id: dto.productId } });

    if (!product) {
      throw new NotFoundException('Product not found');
    }

    // Check if item already exists
    let cartItem = await this.cartRepo.findOne({
      where: { product: { id: dto.productId } },
      relations: ['product'],
    });

    if (cartItem) {
      cartItem.quantity += dto.quantity;
      return this.cartRepo.save(cartItem);
    }

    cartItem = this.cartRepo.create({
      product,
      quantity: dto.quantity,
    });

    return this.cartRepo.save(cartItem);
  }

  async removeItem(id: number): Promise<void> {
    await this.cartRepo.delete(id);
  }
}
