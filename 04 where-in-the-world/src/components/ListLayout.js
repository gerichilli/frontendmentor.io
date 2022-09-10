import React from 'react';
import Search from './Search';
import CountryList from './CountryList';
import Layout from './Layout';
import '../styles/global.scss';
import Filter from './Filter';

function ListLayout({ countries }) {
  return (
    <Layout>
      <section className="top-container">
        <Search />
        <Filter />
      </section>
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
