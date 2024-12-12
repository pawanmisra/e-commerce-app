/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProductsById = /* GraphQL */ `
  query GetProductsById($productId: ID!) {
    getProductsById(productId: $productId) {
      productId
      name
      description
      price
      category
      stock
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listAllProducts = /* GraphQL */ `
  query ListAllProducts {
    listAllProducts {
      productId
      name
      description
      price
      category
      stock
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const getProductTaxonomyById = /* GraphQL */ `
  query GetProductTaxonomyById($TaxonomyId: ID!) {
    getProductTaxonomyById(TaxonomyId: $TaxonomyId) {
      taxonomyId
      name
      description
      parentId
      type
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listAllProductTaxonomies = /* GraphQL */ `
  query ListAllProductTaxonomies {
    listAllProductTaxonomies {
      taxonomyId
      name
      description
      parentId
      type
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const productTaxonomyAttributesByParentIdAndName = /* GraphQL */ `
  query ProductTaxonomyAttributesByParentIdAndName(
    $parentId: String!
    $name: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelProductTaxonomyAttributeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    productTaxonomyAttributesByParentIdAndName(
      parentId: $parentId
      name: $name
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        taxonomyId
        name
        description
        parentId
        type
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
