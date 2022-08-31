// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Comments, Tags, Products, ProductsTags } = initSchema(schema);

export {
  Comments,
  Tags,
  Products,
  ProductsTags
};