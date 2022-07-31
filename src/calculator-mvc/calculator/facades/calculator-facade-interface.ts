import { InputCalculatorDto } from '../dto/input-calculator-dto';
import { OutputCalculatorDto } from '../dto/output-calculator-dto';

export default interface CalculatorFacadeInterface {
  insert(inputCalculatorDto: InputCalculatorDto): Promise<OutputCalculatorDto>;
  findAll(): Promise<OutputCalculatorDto[]>;
  findById(id: string): Promise<OutputCalculatorDto>;
}
