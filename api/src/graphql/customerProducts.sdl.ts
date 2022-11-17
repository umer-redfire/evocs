export const schema = gql`
  type CustomerProduct {
    id: Int!
    product: Product!
    customer: Customer!
    productID: Int!
    customerID: Int!
    config: JSON!
    tenants: [CustomerProductEnabledTenant]!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    customerProducts: [CustomerProduct!]!
      @requireAuth(roles: ["evocs_internal", "admin"])
    customerProduct(id: Int!): CustomerProduct
      @requireAuth(roles: ["evocs_internal", "admin"])
  }

  input CreateCustomerProductInput {
    productID: Int!
    customerID: Int!
    config: JSON!
  }

  input UpdateCustomerProductInput {
    productID: Int
    customerID: Int
    config: JSON
  }

  type Mutation {
    createCustomerProduct(input: CreateCustomerProductInput!): CustomerProduct!
      @requireAuth(roles: ["evocs_internal", "admin"])
    updateCustomerProduct(
      id: Int!
      input: UpdateCustomerProductInput!
    ): CustomerProduct! @requireAuth(roles: ["evocs_internal", "admin"])
    deleteCustomerProduct(id: Int!): CustomerProduct!
      @requireAuth(roles: ["evocs_internal", "admin"])
  }
`;
