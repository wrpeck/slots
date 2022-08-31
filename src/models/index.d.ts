import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type TagsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ProductsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ProductsTagsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Tags {
  readonly id: string;
  readonly name?: string | null;
  readonly productss?: (ProductsTags | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Tags, TagsMetaData>);
  static copyOf(source: Tags, mutator: (draft: MutableModel<Tags, TagsMetaData>) => MutableModel<Tags, TagsMetaData> | void): Tags;
}

export declare class Products {
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly image?: string | null;
  readonly Tags?: (ProductsTags | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Products, ProductsMetaData>);
  static copyOf(source: Products, mutator: (draft: MutableModel<Products, ProductsMetaData>) => MutableModel<Products, ProductsMetaData> | void): Products;
}

export declare class ProductsTags {
  readonly id: string;
  readonly tags: Tags;
  readonly products: Products;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<ProductsTags, ProductsTagsMetaData>);
  static copyOf(source: ProductsTags, mutator: (draft: MutableModel<ProductsTags, ProductsTagsMetaData>) => MutableModel<ProductsTags, ProductsTagsMetaData> | void): ProductsTags;
}