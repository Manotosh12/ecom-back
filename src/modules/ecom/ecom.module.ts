import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './ entities/product.entity';
import { ProductController } from './controllers/product.controller';
import { ProductService } from './ services/product.service';
import { CartController } from './controllers/cart.controller';
import { CartItem } from './ entities/cart-item.entity';
import { CartService } from './ services/cart.service';

@Module({
    controllers: [ProductController, CartController],
    imports: [TypeOrmModule.forFeature([Product, CartItem])], // Add your entities here
    providers: [ProductService, CartService], // Add your services here
})
export class EcomModule {}
