import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import {
  CreateProductRequest,
  DecreaseStockRequest,
  FindOneRequest,
} from './product.pb';

export class FindOneRequestDto implements FindOneRequest {
  @IsNumber({ allowInfinity: false, allowNaN: false })
  public readonly id: number;
}

export class CreateProductRequestDto implements CreateProductRequest {
  @IsString()
  @IsNotEmpty()
  public readonly name: string;

  @IsString()
  @IsNotEmpty()
  public readonly sku: string;

  @IsNumber()
  @IsNotEmpty()
  public readonly stock: number;

  @IsNumber()
  @IsNotEmpty()
  public readonly price: number;
}

export class DecreaseStockRequestDto implements DecreaseStockRequest {
  @IsNumber({ allowInfinity: false, allowNaN: false })
  public readonly id: number;

  @IsNumber({ allowInfinity: false, allowNaN: false })
  public readonly orderId: number;

  @IsNumber({ allowInfinity: false, allowNaN: false })
  public readonly quantity: number;
}
