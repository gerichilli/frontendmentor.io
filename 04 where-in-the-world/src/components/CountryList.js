import React from 'react';
import CountryCard from './CountryCard';
import * as styles from '../styles/CountryList.module.scss';

function CountryList({ countries }) {
  return (
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
  );
}

export default CountryList;
