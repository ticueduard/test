import {Module} from '@nestjs/common';
import {ProductService} from "../service/service.product";
import {TypeOrmModule} from "@nestjs/typeorm";
import {ProductsEntity} from "../product.entity";
import {ProductController} from "../controller/product.controller";

@Module({
    imports: [TypeOrmModule.forFeature([ProductsEntity])],
    exports: [TypeOrmModule],
    providers: [ProductService],
    controllers:[ProductController]
})
export class ProductModule {
}
