import React from 'react';
import { Link } from 'gatsby';
import * as styles from '../styles/CountryCard.module.scss';

function CountryCard({ name, slug, flagSVG, population, region, capital }) {
  return (
    <Link to={`/country/${slug}`} className={styles.card}>
      <div className={styles.flag}>
        <img src={flagSVG} alt={name} />
      </div>
      <div className={styles.information}>
        <h2 className={styles.name}>{name}</h2>
        <dl>
          <div className={styles.line}>
            <dt>Population:</dt>
            <dd>{new Intl.NumberFormat().format(population)}</dd>
          </div>
          <div className={styles.line}>
            <dt>Region:</dt>
            <dd>{region}</dd>
          </div>
          <div className={styles.line}>
            <dt>Capital:</dt>
            <dd>{capital}</dd>
          </div>
        </dl>
      </div>
    </Link>
  );
}

export default CountryCard;
