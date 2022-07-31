import { UuiAdapterInterface } from './uuid-adapter-interface';
import { v4 as uuidv4, validate as uuidv4Validate } from 'uuid';
import InvalidUuidError from '../shared/errors/invalid-uuid-error';

export default class UuidAdapter implements UuiAdapterInterface {
  constructor(readonly id?: string) {
    this.id = id || uuidv4();
    this.validate();
  }

  validate(): void {
    const isValid = uuidv4Validate(this.id);
    if (!isValid) {
      throw new InvalidUuidError();
    }
  }
}
