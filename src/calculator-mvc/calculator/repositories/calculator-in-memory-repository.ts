import InMemoryRepository from '../../repositories/in-memory.repository';
import { CalculatorMvc } from '../entities/calculator-mvc.entity';
import CalculatorRepositoryInterface from './calculator-repository-interface';

export class CalculatorInMemoryRepository
  extends InMemoryRepository<CalculatorMvc>
  implements CalculatorRepositoryInterface {}

export default CalculatorInMemoryRepository;
