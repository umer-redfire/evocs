import { Link, routes } from '@redwoodjs/router';
import { Toaster } from '@redwoodjs/web/toast';

type ProductLayoutProps = {
  children: React.ReactNode;
};

const ProductsLayout = ({ children }: ProductLayoutProps) => {
  return (
    <div className="rw-scaffold">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.products()} className="rw-link">
            Products
          </Link>
        </h1>
        <Link to={routes.newProduct()} className="rw-button rw-button-green">
          <div className="rw-button-icon">+</div> New Product
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  );
};

export default ProductsLayout;
