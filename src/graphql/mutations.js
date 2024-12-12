/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProduct = /* GraphQL */ `
  mutation CreateProduct($input: CreateProductInput) {
    createProduct(input: $input) {
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
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct($input: UpdateProductInput) {
    updateProduct(input: $input) {
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
export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct($productId: ID!) {
    deleteProduct(productId: $productId)
  }
`;
export const createProductTaxonomy = /* GraphQL */ `
  mutation CreateProductTaxonomy($input: CreateProductTaxonomyInput!) {
    createProductTaxonomy(input: $input) {
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
export const updateProductTaxonomy = /* GraphQL */ `
  mutation UpdateProductTaxonomy($input: UpdateProductTaxonomyInput!) {
    updateProductTaxonomy(input: $input) {
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
export const deleteProductTaxonomy = /* GraphQL */ `
  mutation DeleteProductTaxonomy($TaxonomyId: ID!) {
    deleteProductTaxonomy(TaxonomyId: $TaxonomyId)
  }
`;
