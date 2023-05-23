import { ResourceWithOptions } from 'admin-bro';
import { Item } from 'src/modules/category/models';

const ItemResource: ResourceWithOptions = {
  resource: Item,
  options: {
    actions: {},
  },
};

export default ItemResource;
