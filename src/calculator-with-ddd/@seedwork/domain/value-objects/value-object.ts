import { deepFreeze } from '../utils/object';

export abstract class ValueObject<Value = any> {
  constructor(protected readonly _value: Value) {
    this._value = deepFreeze(this._value);
  }

  get value(): Value {
    return this._value;
  }

  toString = (): string => {
    if (typeof this._value !== 'object' || this._value === null) {
      return this._value + '';
    }
    const valueObject = this._value;
    const str = valueObject.toString();
    return str === '[object Object]' ? JSON.stringify(this._value) : str;
  };
}

export default ValueObject;
