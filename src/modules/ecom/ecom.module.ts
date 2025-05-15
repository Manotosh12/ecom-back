import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './ entities/product.entity';
import { ProductController } from './controllers/product.controller';
import { ProductService } from './ services/product.service';

@Module({
    controllers: [ProductController],
    imports: [TypeOrmModule.forFeature([Product])], // Add your entities here
    providers: [ProductService], // Add your services here
})
export class EcomModule {}
