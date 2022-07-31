import CalculatorAdapter from '../adapters/calculator-adapter';
import { InputCalculatorDto } from '../dto/input-calculator-dto';
import { OutputCalculatorDto } from '../dto/output-calculator-dto';
import { CalculatorMvc } from '../entities/calculator-mvc.entity';
import CalculatorInMemoryRepository from '../repositories/calculator-in-memory-repository';
import CalculatorFacadeInterface from './calculator-facade-interface';

export default class CalculatorFacade implements CalculatorFacadeInterface {
  repository: CalculatorInMemoryRepository = new CalculatorInMemoryRepository();
  async insert(
    inputCalculatorDto: InputCalculatorDto,
  ): Promise<OutputCalculatorDto> {
    const calculator = new CalculatorAdapter();
    const result = calculator.calculation(inputCalculatorDto);
    const entity = new CalculatorMvc(result);
    await this.repository.insert(entity);
    return {
      id: entity.id,
      expression: entity.expression,
      result: entity.result,
    };
  }

  findAll(): Promise<OutputCalculatorDto[]> {
    return this.repository.findAll();
  }

  findById(id: string): Promise<OutputCalculatorDto> {
    return this.repository.findById(id);
  }
}
