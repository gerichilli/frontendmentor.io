import * as React from 'react';
import CountryList from '../components/CountryList';
import Layout from '../components/Layout';
import Search from '../components/Search';

const IndexPage = () => {
  return (
    <>
      <Layout>
        <Search />
        <CountryList />
      </Layout>
    </>
  );
};

export default IndexPage;

export const Head = () => (
  <>
    <title>Where In The World</title>
    <meta
      name="description"
      content="View and search for all the countries in the world"
    />
  </>
);
