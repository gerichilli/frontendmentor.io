import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import ListLayout from '../components/ListLayout';

const IndexPage = () => {
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
    }
  `);

  const countries = data?.allCountry?.nodes;

  return <ListLayout countries={countries} />;
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
