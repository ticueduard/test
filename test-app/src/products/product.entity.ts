import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class ProductsEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar", { length: 255 })
    name: string;

    @Column("text") //
    description: string;

    @Column("decimal", { precision: 10, scale: 2 })
    price: number;
}
