import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';

@Module({

    imports: [],
    controllers: [ProductsController],
    providers: [ProductsService],//servicios,
    exports:[]

})
export class ProductsModule {
    
}
