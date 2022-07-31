import { Module } from '@nestjs/common';
import { CalculatorWithDddController } from './calculator-with-ddd.controller';
import { CALCULATOR_PROVIDERS } from './calculator.providers';

@Module({
  controllers: [CalculatorWithDddController],
  providers: [
    ...Object.values(CALCULATOR_PROVIDERS.REPOSITORIES),
    ...Object.values(CALCULATOR_PROVIDERS.USE_CASES),
  ],
})
export class CalculatorWithDddModule {}
