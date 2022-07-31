export interface Operation<Input, Output> {
  calculation(input: Input | null): Output | Promise<Output>;
}
