import type {
  QueryResolvers,
  MutationResolvers,
  CustomerResolvers,
} from 'types/graphql';

import { requireAuth, RoleList } from 'src/lib/auth';
import { db } from 'src/lib/db';

export const customers: QueryResolvers['customers'] = () => {
  requireAuth({ roles: [RoleList.EvocsInternal, RoleList.Admin] });
  return db.customer.findMany();
};

export const customer: QueryResolvers['customer'] = ({ id }) => {
  requireAuth({ roles: [RoleList.EvocsInternal, RoleList.Admin] });
  return db.customer.findUnique({
    where: { id },
  });
};

export const createCustomer: MutationResolvers['createCustomer'] = ({
  input,
}) => {
  requireAuth({ roles: [RoleList.EvocsInternal, RoleList.Admin] });
  return db.customer.create({
    data: input,
  });
};

export const updateCustomer: MutationResolvers['updateCustomer'] = ({
  id,
  input,
}) => {
  requireAuth({ roles: [RoleList.EvocsInternal, RoleList.Admin] });
  return db.customer.update({
    data: input,
    where: { id },
  });
};

export const deleteCustomer: MutationResolvers['deleteCustomer'] = ({ id }) => {
  requireAuth({ roles: [RoleList.Admin] });
  return db.customer.delete({
    where: { id },
  });
};

export const Customer: CustomerResolvers = {
  users: (_obj, { root }) =>
    db.customer.findUnique({ where: { id: root.id } }).users(),
  enabledProducts: (_obj, { root }) =>
    db.customer.findUnique({ where: { id: root.id } }).enabledProducts(),
  tenants: (_obj, { root }) =>
    db.customer.findUnique({ where: { id: root.id } }).tenants(),
};
