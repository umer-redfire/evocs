export const schema = gql`
  type User {
    id: Int!
    auth0ID: String!
    email: String!
    customer: Customer!
    customerID: Int!
    jobs: [Job]!
    status: AccountStatus!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  enum AccountStatus {
    PENDING
    ACTIVE
    DISABLED
  }

  type Query {
    users: [User!]!
      @requireAuth(roles: ["customer_admin", "evocs_internal", "admin"])
    user(id: Int!): User @requireAuth
  }

  input CreateUserInput {
    auth0ID: String!
    email: String!
    customerID: Int!
    status: AccountStatus!
  }

  input UpdateUserInput {
    auth0ID: String
    email: String
    customerID: Int
    status: AccountStatus
  }

  type Mutation {
    createUser(input: CreateUserInput!): User!
      @requireAuth(roles: ["evocs_internal", "admin"])
    updateUser(id: Int!, input: UpdateUserInput!): User! @requireAuth
    deleteUser(id: Int!): User! @requireAuth(roles: ["evocs_internal", "admin"])
  }
`;
