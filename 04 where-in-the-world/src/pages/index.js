import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { useFlexSearch } from 'react-use-flexsearch';
import ListLayout from '../components/ListLayout';
import useUnFlattenResults from '../hooks/useUnFlattenResults';
import Seo from '../components/Seo';

function IndexPage() {
  const [query, setQuery] = useState('');

  const data = useStaticQuery(graphql`
    query GetAllCountries {
      allCountry {
        nodes {
          id
          slug
          name {
            common
          }
          flags {
            svg
          }
          population
          region {
            name
          }
          capital
        }
      }
      localSearchPages {
        index
        store
      }
    }
  `);

  const index = data?.localSearchPages?.index;
  const store = data?.localSearchPages?.store;
  const results = useFlexSearch(query, index, store);
  const queryCountries = useUnFlattenResults(results);
  const countries = query ? queryCountries : data?.allCountry?.nodes;

  return <ListLayout countries={countries} query={query} setQuery={setQuery} />;
}

export default IndexPage;

export const Head = ({ location }) => (
  <Seo
    title="Where In The World"
    description="View and search for all the countries in the world"
    slug={location.pathname}
  />
);
