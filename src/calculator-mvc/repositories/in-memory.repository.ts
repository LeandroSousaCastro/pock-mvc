import UuidAdapter from '../calculator/adapters/uuid-adapter';
import Entity from '../calculator/shared/entities/entity';
import NotFoundError from '../calculator/shared/errors/not-found.error';
import { RepositoryInterface } from './repository-interface';

export abstract class InMemoryRepository<E extends Entity>
  implements RepositoryInterface<E>
{
  items: E[] = [];

  async insert(entity: E): Promise<void> {
    this.items.push(entity);
  }

  async findAll(): Promise<E[]> {
    return this.items;
  }

  async findById(id: string | UuidAdapter): Promise<E> {
    const _id = `${id}`;
    return this._get(_id);
  }

  protected async _get(id: string): Promise<E> {
    const item = this.items.find((i) => i.id === id);
    if (!item) {
      throw new NotFoundError(`Entity Not Found using ID ${id}`);
    }
    return item;
  }
}

export default InMemoryRepository;
