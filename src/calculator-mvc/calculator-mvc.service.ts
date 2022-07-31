import { Inject, Injectable } from '@nestjs/common';
import { InputOperationCalculatorMvcDto } from './dto/operation-calculator-mvc.dto';
import CalculatorFacade from './calculator/facades/calculator-facade';

@Injectable()
export class CalculatorMvcService {
  @Inject()
  private calculatorFacade: CalculatorFacade;

  operation(operationCalculatorMvcDto: InputOperationCalculatorMvcDto) {
    return this.calculatorFacade.insert(operationCalculatorMvcDto);
  }

  findAll() {
    return this.calculatorFacade.findAll();
  }

  findOne(id: string) {
    return this.calculatorFacade.findById(id);
  }
}
