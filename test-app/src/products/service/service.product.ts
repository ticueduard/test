import {Injectable} from "@nestjs/common";
import {Repository} from "typeorm";
import {ProductsEntity} from "../product.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {ProductInterface} from "../product.interface";

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(ProductsEntity)
        private productsRepository: Repository<ProductsEntity>
    ) {}


    createPost(productPost: ProductInterface) {
        return this.productsRepository.save(productPost)
            ;
    }
}