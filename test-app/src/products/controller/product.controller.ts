import {Body, Controller, Post} from "@nestjs/common";
import {ProductService} from "../service/service.product";
import {ProductInterface} from "../product.interface";



@Controller('products')
export class ProductController {
    constructor(private productService: ProductService) {}

    @Post()
    create(@Body() productInterface: ProductInterface) {
        return this.productService.createPost(productInterface);
    }

}