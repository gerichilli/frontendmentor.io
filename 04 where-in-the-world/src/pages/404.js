import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import { StaticImage } from 'gatsby-plugin-image';

function NotFoundPage() {
  return (
    <Layout>
      <div className="error-wrapper">
        <p className="error-message">Page not found</p>
        <StaticImage src="../images/404.png" alt="" />
        <Link to="/" className="error-button">
          Go home
        </Link>
      </div>
    </Layout>
  );
}

export default NotFoundPage;

export const Head = () => <title>Page Not found</title>;
