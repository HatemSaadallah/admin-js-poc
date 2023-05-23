import { Item } from './models';
import { Category } from './models/category.model';

export const categoryProviders = [
  {
    provide: 'CATEGORY_REPOSITORY',
    useValue: Category,
  },
  {
    provide: 'ITEM_REPOSITORY',
    useValue: Item,
  },
];
