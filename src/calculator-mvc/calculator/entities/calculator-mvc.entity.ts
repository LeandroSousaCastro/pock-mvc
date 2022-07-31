import UuidAdapter from '../adapters/uuid-adapter';
import Entity from '../shared/entities/entity';

export type CalculatorProps = {
  expression: string;
  result: number;
};

export class CalculatorMvc extends Entity {
  expression: string;
  result: number;
  constructor(public readonly props: CalculatorProps, id?: UuidAdapter) {
    super(props, id);
    this.expression = props.expression;
    this.result = props.result;
  }
}
