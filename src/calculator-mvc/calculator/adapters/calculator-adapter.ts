import {
  InputOperationCalculatorMvcDto,
  OutputOperationCalculatorMvcDto,
} from 'src/calculator-mvc/dto/operation-calculator-mvc.dto';
import { Operation } from './calculator-adapter-interface';
const Calc = require('expression-calculator');

export default class CalculatorAdapter
  implements
    Operation<InputOperationCalculatorMvcDto, OutputOperationCalculatorMvcDto>
{
  calculation(
    input: InputOperationCalculatorMvcDto,
  ): OutputOperationCalculatorMvcDto {
    const calc = new Calc();
    const result = calc.compile(input.expression).calc();
    return {
      result: result.toString(),
      expression: input.expression,
    };
  }
}
