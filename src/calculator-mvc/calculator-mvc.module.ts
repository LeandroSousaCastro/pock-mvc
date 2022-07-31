import { Module } from '@nestjs/common';
import { CalculatorMvcService } from './calculator-mvc.service';
import { CalculatorMvcController } from './calculator-mvc.controller';
import CalculatorFacade from './calculator/facades/calculator-facade';

@Module({
  controllers: [CalculatorMvcController],
  providers: [
    CalculatorMvcService,
    {
      provide: CalculatorFacade,
      useClass: CalculatorFacade,
    },
  ],
})
export class CalculatorMvcModule {}
