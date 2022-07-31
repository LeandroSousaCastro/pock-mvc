import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  HttpException,
  HttpStatus,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CalculatorMvcService } from './calculator-mvc.service';
import { InputOperationCalculatorMvcDto } from './dto/operation-calculator-mvc.dto';

@Controller('calculator-mvc')
export class CalculatorMvcController {
  constructor(private readonly calculatorMvcService: CalculatorMvcService) {}

  @Post()
  @UsePipes(ValidationPipe)
  create(@Body() operationCalculatorMvcDto: InputOperationCalculatorMvcDto) {
    return this.calculatorMvcService.operation(operationCalculatorMvcDto);
  }

  @Get()
  findAll() {
    return this.calculatorMvcService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      return await this.calculatorMvcService.findOne(id);
    } catch (NotFoundError) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: NotFoundError.message,
        },
        HttpStatus.NOT_FOUND,
      );
    }
  }
}
