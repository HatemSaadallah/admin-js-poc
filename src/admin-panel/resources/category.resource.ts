import { ResourceWithOptions } from 'admin-bro';
import { Category } from 'src/modules/category/models';

const CategoryResource: ResourceWithOptions = {
  resource: Category,
  options: {
    actions: {
      delete: {
        before: async (request) => {
          return request;
        },
      },
    },
  },
};

export default CategoryResource;
