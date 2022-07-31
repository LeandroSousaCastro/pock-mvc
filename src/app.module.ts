import { Module } from '@nestjs/common';
import { CalculatorWithDddModule } from './calculator-with-ddd/calculator-with-ddd.module';
import { CalculatorMvcModule } from './calculator-mvc/calculator-mvc.module';

@Module({
  imports: [CalculatorWithDddModule, CalculatorMvcModule],
})
export class AppModule {}
