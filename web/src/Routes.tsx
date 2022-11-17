import { Router, Route, Set, Private } from '@redwoodjs/router';

import CustomerProductsLayout from 'src/layouts/CustomerProductsLayout';
import CustomersLayout from 'src/layouts/CustomersLayout';
import CustomerTenantsLayout from 'src/layouts/CustomerTenantsLayout';
import JobsLayout from 'src/layouts/JobsLayout';
import ProductsLayout from 'src/layouts/ProductsLayout';
import UsersLayout from 'src/layouts/UsersLayout';

import { RoleList } from './App';
import AppLayout from './App';
import AuthLayout from './layouts/AuthLayout';
import { ErrorsLayout } from './layouts/ErrorsLayout';
import MasterLayout from './layouts/MasterLayout/MasterLayout';
import ProfileLayout from './layouts/ProfileLayout/ProfileLayout';

const Routes = () => {
  return (
    <Router>
      <Route path="/profile" page={ProfilePage} name="profile" />
      <Set wrap={AuthLayout}>
        <Route path="/auth/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
        <Route path="/auth/registration" page={RegisterPage} name="register" />
        <Route path="/auth/login" page={LoginPage} name="login" />
      </Set>
      <Set wrap={ErrorsLayout}>
        <Route path="/error/500" page={Error500Page} name="500" />
        <Route path="/error/404" page={Error404Page} name="404" />
      </Set>
      <Set wrap={MasterLayout}>
        <Route path="/dashboard" page={DashboardPage} name="dashboard" />
        <Route path="/builder" page={BuilderPage} name="builder" />
        <Set wrap={ProfileLayout}>
          <Route path="/crafted/pages/profile/overview" page={ProfilePage} name="profile" />
          <Route path="/crafted/pages/profile/projects" page={ProfileProjectsPage} name="profileProjects" />
          <Route path="/crafted/pages/profile/campaigns" page={ProfileCompaignsPage} name="profileCompaigns" />
          <Route path="/crafted/pages/profile/documents" page={ProfileDocumentsPage} name="profileDocuments" />
          <Route path="/crafted/pages/profile/connections" page={ProfileConnectionsPage} name="profileConnections" />
        </Set>
      </Set>
      {/* <Route path="/dashboard" page={DashboardPage} name="dashboard" /> */}
      <Set wrap={CustomerTenantsLayout} private roles={[RoleList.EvocsInternal, RoleList.Admin]} unauthenticated="home">
        <Route path="/customer-tenants/new" page={CustomerTenantNewCustomerTenantPage} name="newCustomerTenant" />
        <Route path="/customer-tenants/{id:Int}/edit" page={CustomerTenantEditCustomerTenantPage} name="editCustomerTenant" />
        <Route path="/customer-tenants/{id:Int}" page={CustomerTenantCustomerTenantPage} name="customerTenant" />
        <Route path="/customer-tenants" page={CustomerTenantCustomerTenantsPage} name="customerTenants" />
      </Set>
      <Set wrap={CustomersLayout} private roles={[RoleList.EvocsInternal, RoleList.Admin]} unauthenticated="home">
        <Route path="/customers/new" page={CustomerNewCustomerPage} name="newCustomer" />
        <Route path="/customers/{id:Int}/edit" page={CustomerEditCustomerPage} name="editCustomer" />
        <Route path="/customers/{id:Int}" page={CustomerCustomerPage} name="customer" />
        <Route path="/customers" page={CustomerCustomersPage} name="customers" />
      </Set>
      <Set wrap={JobsLayout}>
        <Route path="/jobs/new" page={JobNewJobPage} name="newJob" />
        <Private roles={[RoleList.EvocsInternal, RoleList.Admin]} unauthenticated="home">
          <Route path="/jobs/{id:Int}/edit" page={JobEditJobPage} name="editJob" />
        </Private>
        <Route path="/jobs/{id:Int}" page={JobJobPage} name="job" />
        <Route path="/jobs" page={JobJobsPage} name="jobs" />
      </Set>
      <Set wrap={UsersLayout} private roles={[RoleList.EvocsInternal, RoleList.Admin]} unauthenticated="home">
        <Route path="/users/new" page={UserNewUserPage} name="newUser" />
        <Route path="/users/{id:Int}/edit" page={UserEditUserPage} name="editUser" />
        <Route path="/users/{id:Int}" page={UserUserPage} name="user" />
        <Route path="/users" page={UserUsersPage} name="users" />
      </Set>
      <Set wrap={ProductsLayout}>
        <Private unauthenticated="home">
          <Route path="/products/new" page={ProductNewProductPage} name="newProduct" />
          <Route path="/products/{id:Int}/edit" page={ProductEditProductPage} name="editProduct" />
        </Private>
        <Route path="/products/{id:Int}" page={ProductProductPage} name="product" />
        <Route path="/products" page={ProductProductsPage} name="products" />
      </Set>
      <Set wrap={CustomerProductsLayout} private roles={[RoleList.EvocsInternal, RoleList.Admin]} unauthenticated="home">
        <Route path="/customer-products/new" page={CustomerProductNewCustomerProductPage} name="newCustomerProduct" />
        <Route path="/customer-products/{id:Int}/edit" page={CustomerProductEditCustomerProductPage} name="editCustomerProduct" />
        <Route path="/customer-products/{id:Int}" page={CustomerProductCustomerProductPage} name="customerProduct" />
        <Route path="/customer-products" page={CustomerProductCustomerProductsPage} name="customerProducts" />
      </Set>

      <Route path="/" page={HomePage} name="home" />
      <Route notfound page={NotFoundPage} />
    </Router>
  );
};

export default Routes;
