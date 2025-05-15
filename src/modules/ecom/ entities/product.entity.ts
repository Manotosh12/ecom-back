import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('products')
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn({ comment: 'Product ID' })
  id: number;

  @Column({ type: 'varchar', length: 255, comment: 'Product Name' })
  name: string;

  @Column({ type: 'decimal', precision: 10, scale: 2, comment: 'Product Price' })
  price: number;

  @Column({ type: 'text', comment: 'Product Description' })
  description: string;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: true,
    comment: 'Image File Path',
  })
  imagePath: string; // Stores the file path of the image
}