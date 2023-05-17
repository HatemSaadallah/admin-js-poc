import { ResourceWithOptions } from 'admin-bro';
import { Category } from 'src/modules/category/category.model';

const CategoryResource: ResourceWithOptions = {
  resource: Category,
  options: {
    actions: {
      myAction: {
        actionType: 'record',
        component: false,
        handler: async (request, response, context) => {
          const { record } = context;
          console.log(record);
          return {
            record: record.toJSON(),
          };
        },
      },
    },
  },
};

export default CategoryResource;
