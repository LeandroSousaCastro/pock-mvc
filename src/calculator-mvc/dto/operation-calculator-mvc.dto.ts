import { IsNotEmpty, IsString, Matches } from 'class-validator';

export class InputOperationCalculatorMvcDto {
  @Matches(/(\d)[\s]*([\+\-\*\/])[\s]*(\d)/, {
    message: 'expression must be a valid basic mathematical expression.',
  })
  @IsString()
  @IsNotEmpty()
  expression: string;
}

export class OutputOperationCalculatorMvcDto {
  expression: string;
  result: number;
}
