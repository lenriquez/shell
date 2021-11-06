import { Link } from './Links';
import { PaginationMetadata } from './PaginationMetadata';

export class LinkedCollection<T> {
  value: T[] = [];
  links: Link[] = [];
  pagination?: PaginationMetadata;
}
