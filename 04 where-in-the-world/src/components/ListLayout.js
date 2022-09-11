import React from 'react';
import '../styles/global.scss';
import Search from './Search';
import CountryList from './CountryList';
import Layout from './Layout';
import Filter from './Filter';

function ListLayout({ countries, query, setQuery }) {
  return (
    <Layout>
      <section className="top-container">
        <Search query={query} setQuery={setQuery} />
        <Filter setQuery={setQuery} />
      </section>
      {countries && countries.length > 0 ? (
        <CountryList countries={countries} />
      ) : (
        <div className="error-wrapper">
          <p className="error-message">
            There are no country matching your search
          </p>
        </div>
      )}
    </Layout>
  );
}

export default ListLayout;
