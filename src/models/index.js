// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Tags, Products, ProductsTags } = initSchema(schema);

export {
  Tags,
  Products,
  ProductsTags
};