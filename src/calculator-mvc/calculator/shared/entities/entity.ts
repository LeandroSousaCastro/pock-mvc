import UuidAdapter from '../../adapters/uuid-adapter';

export abstract class Entity<Props = any> {
  public readonly uniqueEntityId: UuidAdapter;

  constructor(public readonly props: Props, id?: UuidAdapter) {
    this.uniqueEntityId = id || new UuidAdapter();
  }

  get id(): string {
    return this.uniqueEntityId.id;
  }

  toJSON(): Required<{ id: string } & Props> {
    return {
      id: this.id,
      ...this.props,
    } as Required<{ id: string } & Props>;
  }
}

export default Entity;
