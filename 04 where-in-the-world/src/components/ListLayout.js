import React from 'react';
import Search from './Search';
import CountryList from './CountryList';
import Layout from './Layout';
import '../styles/global.scss';

function ListLayout({ countries }) {
  return (
    <Layout>
      <Search />
      {countries && countries.length > 0 ? (
        <CountryList countries={countries} />
      ) : (
        <div className="error-wrapper">
          <p className="error-message">Sorry, we can't find data</p>
        </div>
      )}
    </Layout>
  );
}

export default ListLayout;
