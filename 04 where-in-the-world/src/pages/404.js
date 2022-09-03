import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';

const NotFoundPage = () => {
  return (
    <Layout>
      <p>Page not found</p>
      <Link to="/">Go home</Link>
    </Layout>
  );
};

export default NotFoundPage;

export const Head = () => <title>Page Not found</title>;
