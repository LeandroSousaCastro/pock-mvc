import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Inject,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import {
  GetCalculator,
  ListCalculator,
  OperationCalculator,
} from './calculator/application';
import { OperationCalculatorWithDddDto } from './dto/operation-calculator-with-ddd.dto';

@Controller('calculator-with-ddd')
export class CalculatorWithDddController {
  @Inject(OperationCalculator.UseCase)
  private operationUseCase: OperationCalculator.UseCase;

  @Inject(GetCalculator.UseCase)
  private getUseCase: GetCalculator.UseCase;

  @Inject(ListCalculator.UseCase)
  private listUseCase: ListCalculator.UseCase;

  @Post()
  async operation(
    @Body() operationCalculatorWithDddDto: OperationCalculatorWithDddDto,
  ) {
    try {
      return await this.operationUseCase.execute(operationCalculatorWithDddDto);
    } catch (EntityValidationError) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: EntityValidationError.error,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Get()
  findAll() {
    return this.listUseCase.execute();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      return await this.getUseCase.execute({ id });
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
