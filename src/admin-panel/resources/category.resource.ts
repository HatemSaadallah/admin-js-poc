import { ActionRequest, ResourceWithOptions, buildFeature } from 'admin-bro';
import { ServerResponse } from 'http';
import { Category } from 'src/modules/category/models';

// const before = async (request, { currentAdmin }) => {
//   if (request.method === 'delete') {
//     const { record } = request.payload;
//     const { id } = record.params;
//     const itemRepository =
//       request.context.resource._decorated?.options?.itemRepository;
//     await itemRepository.destroy({ where: { categoryId: id } });
//   }
//   return request;
// };

function someBeforeHook(params): Promise<ActionRequest> {
  const response: ServerResponse = params.res;
  console.log(111111111, response);
  return new Promise((resolve) => {
    console.log('Before hook');
    resolve(params as ActionRequest);
  });
}

const CategoryResource: ResourceWithOptions = {
  resource: Category,
  // features: [
  //   buildFeature({
  //     actions: {
  //       edit: {
  //         before: [someBeforeHook],
  //         after: (response) => {
  //           const record = response.record.params;
  //           console.log('After hook', record);
  //           return response;
  //         },
  //       },
  //     },
  //   }),
  // ],
  options: {
    actions: {
      // edit: {
      //   before: [someBeforeHook],
      //   after: (response) => {
      //     const record = response.record.params;
      //     console.log('After hook', record);
      //     return response;
      //   },
      // },
      delete: {
        before: async (request, { currentAdmin }) => {
          console.log(111111111, request);
          // delete all items related to category
          // const { record } = request.payload;
          // const { id } = record.params;
          // const itemRepository =
          //   request.context.resource._decorated?.options?.itemRepository;

          // await itemRepository.destroy({ where: { categoryId: id } });

          return request;
        },
      },
    },
  },
};

export default CategoryResource;
