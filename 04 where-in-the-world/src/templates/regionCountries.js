import React from 'react';
import { graphql } from 'gatsby';
import ListLayout from '../components/ListLayout';

function RegionPage({ data }) {
  const countriesOfRegion = data?.region?.countries;

  return <ListLayout countries={countriesOfRegion} />;
}

export default RegionPage;

export const query = graphql`
  query RegionPage($id: String!) {
    region(id: { eq: $id }) {
      name
      countries {
        flags {
          svg
        }
        name {
          common
        }
        nativeName
        population
        capital
        region {
          name
        }
        subregion
        tld
        mainCurrencies
        mainLanguages
        borderCountries {
          name
          slug
        }
      }
    }
  }
`;

export const Head = ({
  data: {
    region: { name },
  },
}) => (
  <>
    <title>Where in the world - {name}</title>
    <meta name="description" content={`View all the countries in ${name}`} />
  </>
);
