/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { Products, Tags } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import ActionCardWithTags from "./ActionCardWithTags";
import { Collection } from "@aws-amplify/ui-react";
export default function ActionCardWithTagsCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const tagsItems = useDataStoreBinding({
    type: "collection",
    model: Tags,
  }).items;
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: Products,
  }).items.map((item) => ({
    ...item,
    Tags: tagsItems.filter((model) => model.products === item.id),
  }));
  const items = itemsProp !== undefined ? itemsProp : itemsDataStore;
  return (
    <Collection
      type="list"
      direction="column"
      justifyContent="stretch"
      items={items || []}
      {...rest}
      {...getOverrideProps(overrides, "ActionCardWithTagsCollection")}
    >
      {(item, index) => (
        <ActionCardWithTags
          products={item}
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></ActionCardWithTags>
      )}
    </Collection>
  );
}
