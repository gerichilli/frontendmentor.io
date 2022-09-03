import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import CountryCard from './CountryCard';
import * as styles from '../styles/CountryList.module.scss';

function CountryList() {
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

  return countries && countries.length > 0 ? (
    <section>
      <ul className={styles.cards}>
        {countries.map((country) => {
          const { id, slug, name, flags, population, region, capital } =
            country;
          return (
            <li key={id} className={styles.card_item}>
              <CountryCard
                slug={slug}
                name={name.common}
                flagSVG={flags.svg}
                population={population}
                region={region.name}
                capital={capital}
              />
            </li>
          );
        })}
      </ul>
    </section>
  ) : (
    <p>Sorry, we can't find data</p>
  );
}

export default CountryList;
