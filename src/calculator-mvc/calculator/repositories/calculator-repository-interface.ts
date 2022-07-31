import { RepositoryInterface } from '../../repositories/repository-interface';
import { CalculatorMvc } from '../entities/calculator-mvc.entity';

/**
 * Visa garantir a especialização da classe, pesando pelos princípios do solid, deve ser implementado caso haja
 * necessidade de especializar alguma funcionalidade de repositório da entidade calculadora.
 * Ex.: Buscar registros por parâmetros específicos ou exclusão lógica.
 */
export type CalculatorRepositoryInterface = RepositoryInterface<CalculatorMvc>;

export default CalculatorRepositoryInterface;
