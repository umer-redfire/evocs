import { Prisma } from "@prisma/client"
import { MergePrismaWithSdlTypes, MakeRelationsOptional } from '@redwoodjs/api'
import { Product as PrismaProduct, Customer as PrismaCustomer, CustomerProduct as PrismaCustomerProduct, User as PrismaUser, Job as PrismaJob, CustomerTenant as PrismaCustomerTenant, CustomerProductEnabledTenant as PrismaCustomerProductEnabledTenant } from '@prisma/client'
import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { RedwoodGraphQLContext } from '@redwoodjs/graphql-server/dist/functions/types';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type ResolverFn<TResult, TParent, TContext, TArgs> = (
      args?: TArgs,
      obj?: { root: TParent; context: TContext; info: GraphQLResolveInfo }
    ) => TResult | Promise<TResult>
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
export type OptArgsResolverFn<TResult, TParent = {}, TContext = {}, TArgs = {}> = (
      args?: TArgs,
      obj?: { root: TParent; context: TContext; info: GraphQLResolveInfo }
    ) => TResult | Promise<TResult>

    export type RequiredResolverFn<TResult, TParent = {}, TContext = {}, TArgs = {}> = (
      args: TArgs,
      obj: { root: TParent; context: TContext; info: GraphQLResolveInfo }
    ) => TResult | Promise<TResult>
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigInt: number;
  Date: Date | string;
  DateTime: Date | string;
  JSON: Prisma.JsonValue;
  JSONObject: Prisma.JsonObject;
  Time: Date | string;
};

export type AccountStatus =
  | 'ACTIVE'
  | 'DISABLED'
  | 'PENDING';

export type CreateCustomerInput = {
  auth0ID?: InputMaybe<Scalars['String']>;
  displayName?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  status: AccountStatus;
  vaultKey: Scalars['String'];
};

export type CreateCustomerProductEnabledTenantInput = {
  customerProductID: Scalars['Int'];
  customerTenantID: Scalars['Int'];
};

export type CreateCustomerProductInput = {
  config: Scalars['JSON'];
  customerID: Scalars['Int'];
  productID: Scalars['Int'];
};

export type CreateCustomerTenantInput = {
  customerID: Scalars['Int'];
  url: Scalars['String'];
  vaultKey?: InputMaybe<Scalars['String']>;
};

export type CreateJobInput = {
  initiatingUserID: Scalars['Int'];
  productID: Scalars['Int'];
  resultBlob?: InputMaybe<Scalars['JSON']>;
  resultURL?: InputMaybe<Scalars['String']>;
  status: JobStatus;
};

export type CreateProductInput = {
  config: Scalars['JSON'];
  description: Scalars['String'];
  published: Scalars['Boolean'];
  title: Scalars['String'];
};

export type CreateUserInput = {
  auth0ID: Scalars['String'];
  customerID: Scalars['Int'];
  email: Scalars['String'];
  status: AccountStatus;
};

export type Customer = {
  __typename?: 'Customer';
  auth0ID?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  displayName?: Maybe<Scalars['String']>;
  enabledProducts: Array<Maybe<CustomerProduct>>;
  id: Scalars['Int'];
  name: Scalars['String'];
  status: AccountStatus;
  tenants: Array<Maybe<CustomerTenant>>;
  updatedAt: Scalars['DateTime'];
  users: Array<Maybe<User>>;
  vaultKey: Scalars['String'];
};

export type CustomerProduct = {
  __typename?: 'CustomerProduct';
  config: Scalars['JSON'];
  createdAt: Scalars['DateTime'];
  customer: Customer;
  customerID: Scalars['Int'];
  id: Scalars['Int'];
  product: Product;
  productID: Scalars['Int'];
  tenants: Array<Maybe<CustomerProductEnabledTenant>>;
  updatedAt: Scalars['DateTime'];
};

export type CustomerProductEnabledTenant = {
  __typename?: 'CustomerProductEnabledTenant';
  customerProduct: CustomerProduct;
  customerProductID: Scalars['Int'];
  customerTenant: CustomerTenant;
  customerTenantID: Scalars['Int'];
  id: Scalars['Int'];
};

export type CustomerTenant = {
  __typename?: 'CustomerTenant';
  customer: Customer;
  customerID: Scalars['Int'];
  customerProductEnabledOn: Array<Maybe<CustomerProductEnabledTenant>>;
  id: Scalars['Int'];
  url: Scalars['String'];
  vaultKey?: Maybe<Scalars['String']>;
};

export type Job = {
  __typename?: 'Job';
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  initiatingUserID: Scalars['Int'];
  product: Product;
  productID: Scalars['Int'];
  resultBlob?: Maybe<Scalars['JSON']>;
  resultURL?: Maybe<Scalars['String']>;
  status: JobStatus;
  updatedAt: Scalars['DateTime'];
  user: User;
};

export type JobStatus =
  | 'ACTIVE'
  | 'DONE'
  | 'FAILED'
  | 'PENDING';

export type Mutation = {
  __typename?: 'Mutation';
  createCustomer: Customer;
  createCustomerProduct: CustomerProduct;
  createCustomerProductEnabledTenant: CustomerProductEnabledTenant;
  createCustomerTenant: CustomerTenant;
  createJob: Job;
  createProduct: Product;
  createUser: User;
  deleteCustomer: Customer;
  deleteCustomerProduct: CustomerProduct;
  deleteCustomerProductEnabledTenant: CustomerProductEnabledTenant;
  deleteCustomerTenant: CustomerTenant;
  deleteJob: Job;
  deleteProduct: Product;
  deleteUser: User;
  updateCustomer: Customer;
  updateCustomerProduct: CustomerProduct;
  updateCustomerProductEnabledTenant: CustomerProductEnabledTenant;
  updateCustomerTenant: CustomerTenant;
  updateJob: Job;
  updateProduct: Product;
  updateUser: User;
};


export type MutationcreateCustomerArgs = {
  input: CreateCustomerInput;
};


export type MutationcreateCustomerProductArgs = {
  input: CreateCustomerProductInput;
};


export type MutationcreateCustomerProductEnabledTenantArgs = {
  input: CreateCustomerProductEnabledTenantInput;
};


export type MutationcreateCustomerTenantArgs = {
  input: CreateCustomerTenantInput;
};


export type MutationcreateJobArgs = {
  input: CreateJobInput;
};


export type MutationcreateProductArgs = {
  input: CreateProductInput;
};


export type MutationcreateUserArgs = {
  input: CreateUserInput;
};


export type MutationdeleteCustomerArgs = {
  id: Scalars['Int'];
};


export type MutationdeleteCustomerProductArgs = {
  id: Scalars['Int'];
};


export type MutationdeleteCustomerProductEnabledTenantArgs = {
  id: Scalars['Int'];
};


export type MutationdeleteCustomerTenantArgs = {
  id: Scalars['Int'];
};


export type MutationdeleteJobArgs = {
  id: Scalars['Int'];
};


export type MutationdeleteProductArgs = {
  id: Scalars['Int'];
};


export type MutationdeleteUserArgs = {
  id: Scalars['Int'];
};


export type MutationupdateCustomerArgs = {
  id: Scalars['Int'];
  input: UpdateCustomerInput;
};


export type MutationupdateCustomerProductArgs = {
  id: Scalars['Int'];
  input: UpdateCustomerProductInput;
};


export type MutationupdateCustomerProductEnabledTenantArgs = {
  id: Scalars['Int'];
  input: UpdateCustomerProductEnabledTenantInput;
};


export type MutationupdateCustomerTenantArgs = {
  id: Scalars['Int'];
  input: UpdateCustomerTenantInput;
};


export type MutationupdateJobArgs = {
  id: Scalars['Int'];
  input: UpdateJobInput;
};


export type MutationupdateProductArgs = {
  id: Scalars['Int'];
  input: UpdateProductInput;
};


export type MutationupdateUserArgs = {
  id: Scalars['Int'];
  input: UpdateUserInput;
};

export type Product = {
  __typename?: 'Product';
  config: Scalars['JSON'];
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  enabledCustomers: Array<Maybe<CustomerProduct>>;
  id: Scalars['Int'];
  published: Scalars['Boolean'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

/** About the Redwood queries. */
export type Query = {
  __typename?: 'Query';
  customer?: Maybe<Customer>;
  customerProduct?: Maybe<CustomerProduct>;
  customerProductEnabledTenant?: Maybe<CustomerProductEnabledTenant>;
  customerProductEnabledTenants: Array<CustomerProductEnabledTenant>;
  customerProducts: Array<CustomerProduct>;
  customerTenant?: Maybe<CustomerTenant>;
  customerTenants: Array<CustomerTenant>;
  customers: Array<Customer>;
  isAuthenticatedServiceAccount: ServiceAccountAuthHealthCheck;
  job?: Maybe<Job>;
  jobs: Array<Job>;
  product?: Maybe<Product>;
  products: Array<Product>;
  /** Fetches the Redwood root schema. */
  redwood?: Maybe<Redwood>;
  user?: Maybe<User>;
  users: Array<User>;
};


/** About the Redwood queries. */
export type QuerycustomerArgs = {
  id: Scalars['Int'];
};


/** About the Redwood queries. */
export type QuerycustomerProductArgs = {
  id: Scalars['Int'];
};


/** About the Redwood queries. */
export type QuerycustomerProductEnabledTenantArgs = {
  id: Scalars['Int'];
};


/** About the Redwood queries. */
export type QuerycustomerTenantArgs = {
  id: Scalars['Int'];
};


/** About the Redwood queries. */
export type QueryjobArgs = {
  id: Scalars['Int'];
};


/** About the Redwood queries. */
export type QueryproductArgs = {
  id: Scalars['Int'];
};


/** About the Redwood queries. */
export type QueryuserArgs = {
  id: Scalars['Int'];
};

/**
 * The RedwoodJS Root Schema
 *
 * Defines details about RedwoodJS such as the current user and version information.
 */
export type Redwood = {
  __typename?: 'Redwood';
  /** The current user. */
  currentUser?: Maybe<Scalars['JSON']>;
  /** The version of Prisma. */
  prismaVersion?: Maybe<Scalars['String']>;
  /** The version of Redwood. */
  version?: Maybe<Scalars['String']>;
};

export type ServiceAccountAuthHealthCheck = {
  __typename?: 'ServiceAccountAuthHealthCheck';
  authenticated: Scalars['Boolean'];
};

export type UpdateCustomerInput = {
  auth0ID?: InputMaybe<Scalars['String']>;
  displayName?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<AccountStatus>;
  vaultKey?: InputMaybe<Scalars['String']>;
};

export type UpdateCustomerProductEnabledTenantInput = {
  customerProductID?: InputMaybe<Scalars['Int']>;
  customerTenantID?: InputMaybe<Scalars['Int']>;
};

export type UpdateCustomerProductInput = {
  config?: InputMaybe<Scalars['JSON']>;
  customerID?: InputMaybe<Scalars['Int']>;
  productID?: InputMaybe<Scalars['Int']>;
};

export type UpdateCustomerTenantInput = {
  customerID?: InputMaybe<Scalars['Int']>;
  url?: InputMaybe<Scalars['String']>;
  vaultKey?: InputMaybe<Scalars['String']>;
};

export type UpdateJobInput = {
  initiatingUserID?: InputMaybe<Scalars['Int']>;
  productID?: InputMaybe<Scalars['Int']>;
  resultBlob?: InputMaybe<Scalars['JSON']>;
  resultURL?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<JobStatus>;
};

export type UpdateProductInput = {
  config?: InputMaybe<Scalars['JSON']>;
  description?: InputMaybe<Scalars['String']>;
  published?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
};

export type UpdateUserInput = {
  auth0ID?: InputMaybe<Scalars['String']>;
  customerID?: InputMaybe<Scalars['Int']>;
  email?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<AccountStatus>;
};

export type User = {
  __typename?: 'User';
  auth0ID: Scalars['String'];
  createdAt: Scalars['DateTime'];
  customer: Customer;
  customerID: Scalars['Int'];
  email: Scalars['String'];
  id: Scalars['Int'];
  jobs: Array<Maybe<Job>>;
  status: AccountStatus;
  updatedAt: Scalars['DateTime'];
};

type MaybeOrArrayOfMaybe<T> = T | Maybe<T> | Maybe<T>[];
type AllMappedModels = MaybeOrArrayOfMaybe<Customer | CustomerProduct | CustomerProductEnabledTenant | CustomerTenant | Job | Product | User>


export type ResolverTypeWrapper<T> = Promise<T> | T;

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AccountStatus: AccountStatus;
  BigInt: ResolverTypeWrapper<Scalars['BigInt']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  CreateCustomerInput: CreateCustomerInput;
  CreateCustomerProductEnabledTenantInput: CreateCustomerProductEnabledTenantInput;
  CreateCustomerProductInput: CreateCustomerProductInput;
  CreateCustomerTenantInput: CreateCustomerTenantInput;
  CreateJobInput: CreateJobInput;
  CreateProductInput: CreateProductInput;
  CreateUserInput: CreateUserInput;
  Customer: ResolverTypeWrapper<MergePrismaWithSdlTypes<PrismaCustomer, MakeRelationsOptional<Customer, AllMappedModels>, AllMappedModels>>;
  CustomerProduct: ResolverTypeWrapper<MergePrismaWithSdlTypes<PrismaCustomerProduct, MakeRelationsOptional<CustomerProduct, AllMappedModels>, AllMappedModels>>;
  CustomerProductEnabledTenant: ResolverTypeWrapper<MergePrismaWithSdlTypes<PrismaCustomerProductEnabledTenant, MakeRelationsOptional<CustomerProductEnabledTenant, AllMappedModels>, AllMappedModels>>;
  CustomerTenant: ResolverTypeWrapper<MergePrismaWithSdlTypes<PrismaCustomerTenant, MakeRelationsOptional<CustomerTenant, AllMappedModels>, AllMappedModels>>;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  JSON: ResolverTypeWrapper<Scalars['JSON']>;
  JSONObject: ResolverTypeWrapper<Scalars['JSONObject']>;
  Job: ResolverTypeWrapper<MergePrismaWithSdlTypes<PrismaJob, MakeRelationsOptional<Job, AllMappedModels>, AllMappedModels>>;
  JobStatus: JobStatus;
  Mutation: ResolverTypeWrapper<{}>;
  Product: ResolverTypeWrapper<MergePrismaWithSdlTypes<PrismaProduct, MakeRelationsOptional<Product, AllMappedModels>, AllMappedModels>>;
  Query: ResolverTypeWrapper<{}>;
  Redwood: ResolverTypeWrapper<Redwood>;
  ServiceAccountAuthHealthCheck: ResolverTypeWrapper<ServiceAccountAuthHealthCheck>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Time: ResolverTypeWrapper<Scalars['Time']>;
  UpdateCustomerInput: UpdateCustomerInput;
  UpdateCustomerProductEnabledTenantInput: UpdateCustomerProductEnabledTenantInput;
  UpdateCustomerProductInput: UpdateCustomerProductInput;
  UpdateCustomerTenantInput: UpdateCustomerTenantInput;
  UpdateJobInput: UpdateJobInput;
  UpdateProductInput: UpdateProductInput;
  UpdateUserInput: UpdateUserInput;
  User: ResolverTypeWrapper<MergePrismaWithSdlTypes<PrismaUser, MakeRelationsOptional<User, AllMappedModels>, AllMappedModels>>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  BigInt: Scalars['BigInt'];
  Boolean: Scalars['Boolean'];
  CreateCustomerInput: CreateCustomerInput;
  CreateCustomerProductEnabledTenantInput: CreateCustomerProductEnabledTenantInput;
  CreateCustomerProductInput: CreateCustomerProductInput;
  CreateCustomerTenantInput: CreateCustomerTenantInput;
  CreateJobInput: CreateJobInput;
  CreateProductInput: CreateProductInput;
  CreateUserInput: CreateUserInput;
  Customer: MergePrismaWithSdlTypes<PrismaCustomer, MakeRelationsOptional<Customer, AllMappedModels>, AllMappedModels>;
  CustomerProduct: MergePrismaWithSdlTypes<PrismaCustomerProduct, MakeRelationsOptional<CustomerProduct, AllMappedModels>, AllMappedModels>;
  CustomerProductEnabledTenant: MergePrismaWithSdlTypes<PrismaCustomerProductEnabledTenant, MakeRelationsOptional<CustomerProductEnabledTenant, AllMappedModels>, AllMappedModels>;
  CustomerTenant: MergePrismaWithSdlTypes<PrismaCustomerTenant, MakeRelationsOptional<CustomerTenant, AllMappedModels>, AllMappedModels>;
  Date: Scalars['Date'];
  DateTime: Scalars['DateTime'];
  Int: Scalars['Int'];
  JSON: Scalars['JSON'];
  JSONObject: Scalars['JSONObject'];
  Job: MergePrismaWithSdlTypes<PrismaJob, MakeRelationsOptional<Job, AllMappedModels>, AllMappedModels>;
  Mutation: {};
  Product: MergePrismaWithSdlTypes<PrismaProduct, MakeRelationsOptional<Product, AllMappedModels>, AllMappedModels>;
  Query: {};
  Redwood: Redwood;
  ServiceAccountAuthHealthCheck: ServiceAccountAuthHealthCheck;
  String: Scalars['String'];
  Time: Scalars['Time'];
  UpdateCustomerInput: UpdateCustomerInput;
  UpdateCustomerProductEnabledTenantInput: UpdateCustomerProductEnabledTenantInput;
  UpdateCustomerProductInput: UpdateCustomerProductInput;
  UpdateCustomerTenantInput: UpdateCustomerTenantInput;
  UpdateJobInput: UpdateJobInput;
  UpdateProductInput: UpdateProductInput;
  UpdateUserInput: UpdateUserInput;
  User: MergePrismaWithSdlTypes<PrismaUser, MakeRelationsOptional<User, AllMappedModels>, AllMappedModels>;
};

export type requireAuthDirectiveArgs = {
  roles?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type requireAuthDirectiveResolver<Result, Parent, ContextType = RedwoodGraphQLContext, Args = requireAuthDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type skipAuthDirectiveArgs = { };

export type skipAuthDirectiveResolver<Result, Parent, ContextType = RedwoodGraphQLContext, Args = skipAuthDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt';
}

export type CustomerResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Customer'] = ResolversParentTypes['Customer']> = {
  auth0ID: OptArgsResolverFn<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt: OptArgsResolverFn<ResolversTypes['DateTime'], ParentType, ContextType>;
  displayName: OptArgsResolverFn<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  enabledProducts: OptArgsResolverFn<Array<Maybe<ResolversTypes['CustomerProduct']>>, ParentType, ContextType>;
  id: OptArgsResolverFn<ResolversTypes['Int'], ParentType, ContextType>;
  name: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  status: OptArgsResolverFn<ResolversTypes['AccountStatus'], ParentType, ContextType>;
  tenants: OptArgsResolverFn<Array<Maybe<ResolversTypes['CustomerTenant']>>, ParentType, ContextType>;
  updatedAt: OptArgsResolverFn<ResolversTypes['DateTime'], ParentType, ContextType>;
  users: OptArgsResolverFn<Array<Maybe<ResolversTypes['User']>>, ParentType, ContextType>;
  vaultKey: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomerRelationResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Customer'] = ResolversParentTypes['Customer']> = {
  auth0ID?: RequiredResolverFn<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: RequiredResolverFn<ResolversTypes['DateTime'], ParentType, ContextType>;
  displayName?: RequiredResolverFn<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  enabledProducts?: RequiredResolverFn<Array<Maybe<ResolversTypes['CustomerProduct']>>, ParentType, ContextType>;
  id?: RequiredResolverFn<ResolversTypes['Int'], ParentType, ContextType>;
  name?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  status?: RequiredResolverFn<ResolversTypes['AccountStatus'], ParentType, ContextType>;
  tenants?: RequiredResolverFn<Array<Maybe<ResolversTypes['CustomerTenant']>>, ParentType, ContextType>;
  updatedAt?: RequiredResolverFn<ResolversTypes['DateTime'], ParentType, ContextType>;
  users?: RequiredResolverFn<Array<Maybe<ResolversTypes['User']>>, ParentType, ContextType>;
  vaultKey?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomerProductResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['CustomerProduct'] = ResolversParentTypes['CustomerProduct']> = {
  config: OptArgsResolverFn<ResolversTypes['JSON'], ParentType, ContextType>;
  createdAt: OptArgsResolverFn<ResolversTypes['DateTime'], ParentType, ContextType>;
  customer: OptArgsResolverFn<ResolversTypes['Customer'], ParentType, ContextType>;
  customerID: OptArgsResolverFn<ResolversTypes['Int'], ParentType, ContextType>;
  id: OptArgsResolverFn<ResolversTypes['Int'], ParentType, ContextType>;
  product: OptArgsResolverFn<ResolversTypes['Product'], ParentType, ContextType>;
  productID: OptArgsResolverFn<ResolversTypes['Int'], ParentType, ContextType>;
  tenants: OptArgsResolverFn<Array<Maybe<ResolversTypes['CustomerProductEnabledTenant']>>, ParentType, ContextType>;
  updatedAt: OptArgsResolverFn<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomerProductRelationResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['CustomerProduct'] = ResolversParentTypes['CustomerProduct']> = {
  config?: RequiredResolverFn<ResolversTypes['JSON'], ParentType, ContextType>;
  createdAt?: RequiredResolverFn<ResolversTypes['DateTime'], ParentType, ContextType>;
  customer?: RequiredResolverFn<ResolversTypes['Customer'], ParentType, ContextType>;
  customerID?: RequiredResolverFn<ResolversTypes['Int'], ParentType, ContextType>;
  id?: RequiredResolverFn<ResolversTypes['Int'], ParentType, ContextType>;
  product?: RequiredResolverFn<ResolversTypes['Product'], ParentType, ContextType>;
  productID?: RequiredResolverFn<ResolversTypes['Int'], ParentType, ContextType>;
  tenants?: RequiredResolverFn<Array<Maybe<ResolversTypes['CustomerProductEnabledTenant']>>, ParentType, ContextType>;
  updatedAt?: RequiredResolverFn<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomerProductEnabledTenantResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['CustomerProductEnabledTenant'] = ResolversParentTypes['CustomerProductEnabledTenant']> = {
  customerProduct: OptArgsResolverFn<ResolversTypes['CustomerProduct'], ParentType, ContextType>;
  customerProductID: OptArgsResolverFn<ResolversTypes['Int'], ParentType, ContextType>;
  customerTenant: OptArgsResolverFn<ResolversTypes['CustomerTenant'], ParentType, ContextType>;
  customerTenantID: OptArgsResolverFn<ResolversTypes['Int'], ParentType, ContextType>;
  id: OptArgsResolverFn<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomerProductEnabledTenantRelationResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['CustomerProductEnabledTenant'] = ResolversParentTypes['CustomerProductEnabledTenant']> = {
  customerProduct?: RequiredResolverFn<ResolversTypes['CustomerProduct'], ParentType, ContextType>;
  customerProductID?: RequiredResolverFn<ResolversTypes['Int'], ParentType, ContextType>;
  customerTenant?: RequiredResolverFn<ResolversTypes['CustomerTenant'], ParentType, ContextType>;
  customerTenantID?: RequiredResolverFn<ResolversTypes['Int'], ParentType, ContextType>;
  id?: RequiredResolverFn<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomerTenantResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['CustomerTenant'] = ResolversParentTypes['CustomerTenant']> = {
  customer: OptArgsResolverFn<ResolversTypes['Customer'], ParentType, ContextType>;
  customerID: OptArgsResolverFn<ResolversTypes['Int'], ParentType, ContextType>;
  customerProductEnabledOn: OptArgsResolverFn<Array<Maybe<ResolversTypes['CustomerProductEnabledTenant']>>, ParentType, ContextType>;
  id: OptArgsResolverFn<ResolversTypes['Int'], ParentType, ContextType>;
  url: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  vaultKey: OptArgsResolverFn<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomerTenantRelationResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['CustomerTenant'] = ResolversParentTypes['CustomerTenant']> = {
  customer?: RequiredResolverFn<ResolversTypes['Customer'], ParentType, ContextType>;
  customerID?: RequiredResolverFn<ResolversTypes['Int'], ParentType, ContextType>;
  customerProductEnabledOn?: RequiredResolverFn<Array<Maybe<ResolversTypes['CustomerProductEnabledTenant']>>, ParentType, ContextType>;
  id?: RequiredResolverFn<ResolversTypes['Int'], ParentType, ContextType>;
  url?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  vaultKey?: RequiredResolverFn<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export interface JSONScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export interface JSONObjectScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSONObject'], any> {
  name: 'JSONObject';
}

export type JobResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Job'] = ResolversParentTypes['Job']> = {
  createdAt: OptArgsResolverFn<ResolversTypes['DateTime'], ParentType, ContextType>;
  id: OptArgsResolverFn<ResolversTypes['Int'], ParentType, ContextType>;
  initiatingUserID: OptArgsResolverFn<ResolversTypes['Int'], ParentType, ContextType>;
  product: OptArgsResolverFn<ResolversTypes['Product'], ParentType, ContextType>;
  productID: OptArgsResolverFn<ResolversTypes['Int'], ParentType, ContextType>;
  resultBlob: OptArgsResolverFn<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  resultURL: OptArgsResolverFn<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status: OptArgsResolverFn<ResolversTypes['JobStatus'], ParentType, ContextType>;
  updatedAt: OptArgsResolverFn<ResolversTypes['DateTime'], ParentType, ContextType>;
  user: OptArgsResolverFn<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type JobRelationResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Job'] = ResolversParentTypes['Job']> = {
  createdAt?: RequiredResolverFn<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: RequiredResolverFn<ResolversTypes['Int'], ParentType, ContextType>;
  initiatingUserID?: RequiredResolverFn<ResolversTypes['Int'], ParentType, ContextType>;
  product?: RequiredResolverFn<ResolversTypes['Product'], ParentType, ContextType>;
  productID?: RequiredResolverFn<ResolversTypes['Int'], ParentType, ContextType>;
  resultBlob?: RequiredResolverFn<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  resultURL?: RequiredResolverFn<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: RequiredResolverFn<ResolversTypes['JobStatus'], ParentType, ContextType>;
  updatedAt?: RequiredResolverFn<ResolversTypes['DateTime'], ParentType, ContextType>;
  user?: RequiredResolverFn<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createCustomer: Resolver<ResolversTypes['Customer'], ParentType, ContextType, RequireFields<MutationcreateCustomerArgs, 'input'>>;
  createCustomerProduct: Resolver<ResolversTypes['CustomerProduct'], ParentType, ContextType, RequireFields<MutationcreateCustomerProductArgs, 'input'>>;
  createCustomerProductEnabledTenant: Resolver<ResolversTypes['CustomerProductEnabledTenant'], ParentType, ContextType, RequireFields<MutationcreateCustomerProductEnabledTenantArgs, 'input'>>;
  createCustomerTenant: Resolver<ResolversTypes['CustomerTenant'], ParentType, ContextType, RequireFields<MutationcreateCustomerTenantArgs, 'input'>>;
  createJob: Resolver<ResolversTypes['Job'], ParentType, ContextType, RequireFields<MutationcreateJobArgs, 'input'>>;
  createProduct: Resolver<ResolversTypes['Product'], ParentType, ContextType, RequireFields<MutationcreateProductArgs, 'input'>>;
  createUser: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationcreateUserArgs, 'input'>>;
  deleteCustomer: Resolver<ResolversTypes['Customer'], ParentType, ContextType, RequireFields<MutationdeleteCustomerArgs, 'id'>>;
  deleteCustomerProduct: Resolver<ResolversTypes['CustomerProduct'], ParentType, ContextType, RequireFields<MutationdeleteCustomerProductArgs, 'id'>>;
  deleteCustomerProductEnabledTenant: Resolver<ResolversTypes['CustomerProductEnabledTenant'], ParentType, ContextType, RequireFields<MutationdeleteCustomerProductEnabledTenantArgs, 'id'>>;
  deleteCustomerTenant: Resolver<ResolversTypes['CustomerTenant'], ParentType, ContextType, RequireFields<MutationdeleteCustomerTenantArgs, 'id'>>;
  deleteJob: Resolver<ResolversTypes['Job'], ParentType, ContextType, RequireFields<MutationdeleteJobArgs, 'id'>>;
  deleteProduct: Resolver<ResolversTypes['Product'], ParentType, ContextType, RequireFields<MutationdeleteProductArgs, 'id'>>;
  deleteUser: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationdeleteUserArgs, 'id'>>;
  updateCustomer: Resolver<ResolversTypes['Customer'], ParentType, ContextType, RequireFields<MutationupdateCustomerArgs, 'id' | 'input'>>;
  updateCustomerProduct: Resolver<ResolversTypes['CustomerProduct'], ParentType, ContextType, RequireFields<MutationupdateCustomerProductArgs, 'id' | 'input'>>;
  updateCustomerProductEnabledTenant: Resolver<ResolversTypes['CustomerProductEnabledTenant'], ParentType, ContextType, RequireFields<MutationupdateCustomerProductEnabledTenantArgs, 'id' | 'input'>>;
  updateCustomerTenant: Resolver<ResolversTypes['CustomerTenant'], ParentType, ContextType, RequireFields<MutationupdateCustomerTenantArgs, 'id' | 'input'>>;
  updateJob: Resolver<ResolversTypes['Job'], ParentType, ContextType, RequireFields<MutationupdateJobArgs, 'id' | 'input'>>;
  updateProduct: Resolver<ResolversTypes['Product'], ParentType, ContextType, RequireFields<MutationupdateProductArgs, 'id' | 'input'>>;
  updateUser: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationupdateUserArgs, 'id' | 'input'>>;
};

export type MutationRelationResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createCustomer?: RequiredResolverFn<ResolversTypes['Customer'], ParentType, ContextType, RequireFields<MutationcreateCustomerArgs, 'input'>>;
  createCustomerProduct?: RequiredResolverFn<ResolversTypes['CustomerProduct'], ParentType, ContextType, RequireFields<MutationcreateCustomerProductArgs, 'input'>>;
  createCustomerProductEnabledTenant?: RequiredResolverFn<ResolversTypes['CustomerProductEnabledTenant'], ParentType, ContextType, RequireFields<MutationcreateCustomerProductEnabledTenantArgs, 'input'>>;
  createCustomerTenant?: RequiredResolverFn<ResolversTypes['CustomerTenant'], ParentType, ContextType, RequireFields<MutationcreateCustomerTenantArgs, 'input'>>;
  createJob?: RequiredResolverFn<ResolversTypes['Job'], ParentType, ContextType, RequireFields<MutationcreateJobArgs, 'input'>>;
  createProduct?: RequiredResolverFn<ResolversTypes['Product'], ParentType, ContextType, RequireFields<MutationcreateProductArgs, 'input'>>;
  createUser?: RequiredResolverFn<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationcreateUserArgs, 'input'>>;
  deleteCustomer?: RequiredResolverFn<ResolversTypes['Customer'], ParentType, ContextType, RequireFields<MutationdeleteCustomerArgs, 'id'>>;
  deleteCustomerProduct?: RequiredResolverFn<ResolversTypes['CustomerProduct'], ParentType, ContextType, RequireFields<MutationdeleteCustomerProductArgs, 'id'>>;
  deleteCustomerProductEnabledTenant?: RequiredResolverFn<ResolversTypes['CustomerProductEnabledTenant'], ParentType, ContextType, RequireFields<MutationdeleteCustomerProductEnabledTenantArgs, 'id'>>;
  deleteCustomerTenant?: RequiredResolverFn<ResolversTypes['CustomerTenant'], ParentType, ContextType, RequireFields<MutationdeleteCustomerTenantArgs, 'id'>>;
  deleteJob?: RequiredResolverFn<ResolversTypes['Job'], ParentType, ContextType, RequireFields<MutationdeleteJobArgs, 'id'>>;
  deleteProduct?: RequiredResolverFn<ResolversTypes['Product'], ParentType, ContextType, RequireFields<MutationdeleteProductArgs, 'id'>>;
  deleteUser?: RequiredResolverFn<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationdeleteUserArgs, 'id'>>;
  updateCustomer?: RequiredResolverFn<ResolversTypes['Customer'], ParentType, ContextType, RequireFields<MutationupdateCustomerArgs, 'id' | 'input'>>;
  updateCustomerProduct?: RequiredResolverFn<ResolversTypes['CustomerProduct'], ParentType, ContextType, RequireFields<MutationupdateCustomerProductArgs, 'id' | 'input'>>;
  updateCustomerProductEnabledTenant?: RequiredResolverFn<ResolversTypes['CustomerProductEnabledTenant'], ParentType, ContextType, RequireFields<MutationupdateCustomerProductEnabledTenantArgs, 'id' | 'input'>>;
  updateCustomerTenant?: RequiredResolverFn<ResolversTypes['CustomerTenant'], ParentType, ContextType, RequireFields<MutationupdateCustomerTenantArgs, 'id' | 'input'>>;
  updateJob?: RequiredResolverFn<ResolversTypes['Job'], ParentType, ContextType, RequireFields<MutationupdateJobArgs, 'id' | 'input'>>;
  updateProduct?: RequiredResolverFn<ResolversTypes['Product'], ParentType, ContextType, RequireFields<MutationupdateProductArgs, 'id' | 'input'>>;
  updateUser?: RequiredResolverFn<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationupdateUserArgs, 'id' | 'input'>>;
};

export type ProductResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Product'] = ResolversParentTypes['Product']> = {
  config: OptArgsResolverFn<ResolversTypes['JSON'], ParentType, ContextType>;
  createdAt: OptArgsResolverFn<ResolversTypes['DateTime'], ParentType, ContextType>;
  description: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  enabledCustomers: OptArgsResolverFn<Array<Maybe<ResolversTypes['CustomerProduct']>>, ParentType, ContextType>;
  id: OptArgsResolverFn<ResolversTypes['Int'], ParentType, ContextType>;
  published: OptArgsResolverFn<ResolversTypes['Boolean'], ParentType, ContextType>;
  title: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt: OptArgsResolverFn<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductRelationResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Product'] = ResolversParentTypes['Product']> = {
  config?: RequiredResolverFn<ResolversTypes['JSON'], ParentType, ContextType>;
  createdAt?: RequiredResolverFn<ResolversTypes['DateTime'], ParentType, ContextType>;
  description?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  enabledCustomers?: RequiredResolverFn<Array<Maybe<ResolversTypes['CustomerProduct']>>, ParentType, ContextType>;
  id?: RequiredResolverFn<ResolversTypes['Int'], ParentType, ContextType>;
  published?: RequiredResolverFn<ResolversTypes['Boolean'], ParentType, ContextType>;
  title?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: RequiredResolverFn<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  customer: Resolver<Maybe<ResolversTypes['Customer']>, ParentType, ContextType, RequireFields<QuerycustomerArgs, 'id'>>;
  customerProduct: Resolver<Maybe<ResolversTypes['CustomerProduct']>, ParentType, ContextType, RequireFields<QuerycustomerProductArgs, 'id'>>;
  customerProductEnabledTenant: Resolver<Maybe<ResolversTypes['CustomerProductEnabledTenant']>, ParentType, ContextType, RequireFields<QuerycustomerProductEnabledTenantArgs, 'id'>>;
  customerProductEnabledTenants: OptArgsResolverFn<Array<ResolversTypes['CustomerProductEnabledTenant']>, ParentType, ContextType>;
  customerProducts: OptArgsResolverFn<Array<ResolversTypes['CustomerProduct']>, ParentType, ContextType>;
  customerTenant: Resolver<Maybe<ResolversTypes['CustomerTenant']>, ParentType, ContextType, RequireFields<QuerycustomerTenantArgs, 'id'>>;
  customerTenants: OptArgsResolverFn<Array<ResolversTypes['CustomerTenant']>, ParentType, ContextType>;
  customers: OptArgsResolverFn<Array<ResolversTypes['Customer']>, ParentType, ContextType>;
  isAuthenticatedServiceAccount: OptArgsResolverFn<ResolversTypes['ServiceAccountAuthHealthCheck'], ParentType, ContextType>;
  job: Resolver<Maybe<ResolversTypes['Job']>, ParentType, ContextType, RequireFields<QueryjobArgs, 'id'>>;
  jobs: OptArgsResolverFn<Array<ResolversTypes['Job']>, ParentType, ContextType>;
  product: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<QueryproductArgs, 'id'>>;
  products: OptArgsResolverFn<Array<ResolversTypes['Product']>, ParentType, ContextType>;
  redwood: OptArgsResolverFn<Maybe<ResolversTypes['Redwood']>, ParentType, ContextType>;
  user: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryuserArgs, 'id'>>;
  users: OptArgsResolverFn<Array<ResolversTypes['User']>, ParentType, ContextType>;
};

export type QueryRelationResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  customer?: RequiredResolverFn<Maybe<ResolversTypes['Customer']>, ParentType, ContextType, RequireFields<QuerycustomerArgs, 'id'>>;
  customerProduct?: RequiredResolverFn<Maybe<ResolversTypes['CustomerProduct']>, ParentType, ContextType, RequireFields<QuerycustomerProductArgs, 'id'>>;
  customerProductEnabledTenant?: RequiredResolverFn<Maybe<ResolversTypes['CustomerProductEnabledTenant']>, ParentType, ContextType, RequireFields<QuerycustomerProductEnabledTenantArgs, 'id'>>;
  customerProductEnabledTenants?: RequiredResolverFn<Array<ResolversTypes['CustomerProductEnabledTenant']>, ParentType, ContextType>;
  customerProducts?: RequiredResolverFn<Array<ResolversTypes['CustomerProduct']>, ParentType, ContextType>;
  customerTenant?: RequiredResolverFn<Maybe<ResolversTypes['CustomerTenant']>, ParentType, ContextType, RequireFields<QuerycustomerTenantArgs, 'id'>>;
  customerTenants?: RequiredResolverFn<Array<ResolversTypes['CustomerTenant']>, ParentType, ContextType>;
  customers?: RequiredResolverFn<Array<ResolversTypes['Customer']>, ParentType, ContextType>;
  isAuthenticatedServiceAccount?: RequiredResolverFn<ResolversTypes['ServiceAccountAuthHealthCheck'], ParentType, ContextType>;
  job?: RequiredResolverFn<Maybe<ResolversTypes['Job']>, ParentType, ContextType, RequireFields<QueryjobArgs, 'id'>>;
  jobs?: RequiredResolverFn<Array<ResolversTypes['Job']>, ParentType, ContextType>;
  product?: RequiredResolverFn<Maybe<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<QueryproductArgs, 'id'>>;
  products?: RequiredResolverFn<Array<ResolversTypes['Product']>, ParentType, ContextType>;
  redwood?: RequiredResolverFn<Maybe<ResolversTypes['Redwood']>, ParentType, ContextType>;
  user?: RequiredResolverFn<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryuserArgs, 'id'>>;
  users?: RequiredResolverFn<Array<ResolversTypes['User']>, ParentType, ContextType>;
};

export type RedwoodResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Redwood'] = ResolversParentTypes['Redwood']> = {
  currentUser: OptArgsResolverFn<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  prismaVersion: OptArgsResolverFn<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  version: OptArgsResolverFn<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RedwoodRelationResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Redwood'] = ResolversParentTypes['Redwood']> = {
  currentUser?: RequiredResolverFn<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  prismaVersion?: RequiredResolverFn<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  version?: RequiredResolverFn<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ServiceAccountAuthHealthCheckResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['ServiceAccountAuthHealthCheck'] = ResolversParentTypes['ServiceAccountAuthHealthCheck']> = {
  authenticated: OptArgsResolverFn<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ServiceAccountAuthHealthCheckRelationResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['ServiceAccountAuthHealthCheck'] = ResolversParentTypes['ServiceAccountAuthHealthCheck']> = {
  authenticated?: RequiredResolverFn<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface TimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Time'], any> {
  name: 'Time';
}

export type UserResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  auth0ID: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  createdAt: OptArgsResolverFn<ResolversTypes['DateTime'], ParentType, ContextType>;
  customer: OptArgsResolverFn<ResolversTypes['Customer'], ParentType, ContextType>;
  customerID: OptArgsResolverFn<ResolversTypes['Int'], ParentType, ContextType>;
  email: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  id: OptArgsResolverFn<ResolversTypes['Int'], ParentType, ContextType>;
  jobs: OptArgsResolverFn<Array<Maybe<ResolversTypes['Job']>>, ParentType, ContextType>;
  status: OptArgsResolverFn<ResolversTypes['AccountStatus'], ParentType, ContextType>;
  updatedAt: OptArgsResolverFn<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserRelationResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  auth0ID?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: RequiredResolverFn<ResolversTypes['DateTime'], ParentType, ContextType>;
  customer?: RequiredResolverFn<ResolversTypes['Customer'], ParentType, ContextType>;
  customerID?: RequiredResolverFn<ResolversTypes['Int'], ParentType, ContextType>;
  email?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  id?: RequiredResolverFn<ResolversTypes['Int'], ParentType, ContextType>;
  jobs?: RequiredResolverFn<Array<Maybe<ResolversTypes['Job']>>, ParentType, ContextType>;
  status?: RequiredResolverFn<ResolversTypes['AccountStatus'], ParentType, ContextType>;
  updatedAt?: RequiredResolverFn<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = RedwoodGraphQLContext> = {
  BigInt: GraphQLScalarType;
  Customer: CustomerResolvers<ContextType>;
  CustomerProduct: CustomerProductResolvers<ContextType>;
  CustomerProductEnabledTenant: CustomerProductEnabledTenantResolvers<ContextType>;
  CustomerTenant: CustomerTenantResolvers<ContextType>;
  Date: GraphQLScalarType;
  DateTime: GraphQLScalarType;
  JSON: GraphQLScalarType;
  JSONObject: GraphQLScalarType;
  Job: JobResolvers<ContextType>;
  Mutation: MutationResolvers<ContextType>;
  Product: ProductResolvers<ContextType>;
  Query: QueryResolvers<ContextType>;
  Redwood: RedwoodResolvers<ContextType>;
  ServiceAccountAuthHealthCheck: ServiceAccountAuthHealthCheckResolvers<ContextType>;
  Time: GraphQLScalarType;
  User: UserResolvers<ContextType>;
};

export type DirectiveResolvers<ContextType = RedwoodGraphQLContext> = {
  requireAuth: requireAuthDirectiveResolver<any, any, ContextType>;
  skipAuth: skipAuthDirectiveResolver<any, any, ContextType>;
};
