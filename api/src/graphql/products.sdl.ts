export const schema = gql`
  type Product {
    id: Int!
    title: String!
    description: String!
    enabledCustomers: [CustomerProduct]!
    config: JSON!
    published: Boolean!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    products: [Product!]! @skipAuth
    product(id: Int!): Product @requireAuth
  }

  input CreateProductInput {
    title: String!
    description: String!
    config: JSON!
    published: Boolean!
  }

  input UpdateProductInput {
    title: String
    description: String
    config: JSON
    published: Boolean
  }

  type Mutation {
    createProduct(input: CreateProductInput!): Product!
      @requireAuth(roles: ["evocs_internal", "admin"])
    updateProduct(id: Int!, input: UpdateProductInput!): Product!
      @requireAuth(roles: ["admin"])
    deleteProduct(id: Int!): Product! @requireAuth(roles: ["admin"])
  }
`;
