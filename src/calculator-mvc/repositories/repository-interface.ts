import Entity from '../calculator/shared/entities/entity';

export interface RepositoryInterface<E extends Entity> {
  insert(entity: E): Promise<void>;
  findAll(): Promise<E[]>;
  findById(id: string): Promise<E>;
}
