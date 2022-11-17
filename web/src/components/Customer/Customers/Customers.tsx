import humanize from 'humanize-string';

import { Link, routes } from '@redwoodjs/router';
import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import { QUERY } from 'src/components/Customer/CustomersCell';

const DELETE_CUSTOMER_MUTATION = gql`
  mutation DeleteCustomerMutation($id: Int!) {
    deleteCustomer(id: $id) {
      id
    }
  }
`;

const MAX_STRING_LENGTH = 150;

const formatEnum = (values: string | string[] | null | undefined) => {
  if (values) {
    if (Array.isArray(values)) {
      const humanizedValues = values.map((value) => humanize(value));
      return humanizedValues.join(', ');
    } else {
      return humanize(values as string);
    }
  }
};

const truncate = (text) => {
  let output = text;
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...';
  }
  return output;
};

const _jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2));
};

const timeTag = (datetime) => {
  return (
    datetime && (
      <time dateTime={datetime} title={datetime}>
        {new Date(datetime).toUTCString()}
      </time>
    )
  );
};

const _checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />;
};

const CustomersList = ({ customers }) => {
  const [deleteCustomer] = useMutation(DELETE_CUSTOMER_MUTATION, {
    onCompleted: () => {
      toast.success('Customer deleted');
    },
    onError: (error) => {
      toast.error(error.message);
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  });

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete customer ' + id + '?')) {
      deleteCustomer({ variables: { id } });
    }
  };

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Auth0 id</th>
            <th>Name</th>
            <th>Display name</th>
            <th>Status</th>
            <th>Created at</th>
            <th>Updated at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td>{truncate(customer.id)}</td>
              <td>{truncate(customer.auth0ID)}</td>
              <td>{truncate(customer.name)}</td>
              <td>{truncate(customer.displayName)}</td>
              <td>{formatEnum(customer.status)}</td>
              <td>{timeTag(customer.createdAt)}</td>
              <td>{timeTag(customer.updatedAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.customer({ id: customer.id })}
                    title={'Show customer ' + customer.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editCustomer({ id: customer.id })}
                    title={'Edit customer ' + customer.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete customer ' + customer.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(customer.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomersList;
