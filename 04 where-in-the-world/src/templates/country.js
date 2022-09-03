import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import * as styles from '../styles/CountryPage.module.scss';

function CountryPage({ data }) {
  console.log(data.country.borderCountries);
  const countryData = data?.country;

  const {
    flags,
    name,
    nativeName,
    population,
    capital,
    region,
    subregion,
    tld,
    mainCurrencies,
    mainLanguages,
    borderCountries,
  } = countryData;

  return (
    <>
      <Layout>
        <Link to="/" className={styles.button}>
          <svg
            width="19"
            height="12"
            viewBox="0 0 19 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.46447 0.107445L7.64298 1.28596L3.75389 5.17504L18.6031 5.17504L18.6031 6.82496L3.75389 6.82496L7.64298 10.714L6.46447 11.8926L0.57191 6L6.46447 0.107445Z"
            />
          </svg>
          <span>Back</span>
        </Link>
        {countryData ? (
          <section className={styles.content}>
            <div className={styles.flag}>
              <img src={flags.svg} alt={name.common} />
            </div>
            <div className={styles.info}>
              <h1 className={styles.name}>{name.common}</h1>
              <div className={styles.info_row}>
                <dl>
                  <div className={styles.line}>
                    <dt>Native Name:</dt>
                    <dd>{nativeName}</dd>
                  </div>
                  <div className={styles.line}>
                    <dt>Population:</dt>
                    <dd>{new Intl.NumberFormat().format(population)}</dd>
                  </div>
                  <div className={styles.line}>
                    <dt>Region:</dt>
                    <dd>{region.name}</dd>
                  </div>
                  <div className={styles.line}>
                    <dt>Subregion:</dt>
                    <dd>{subregion}</dd>
                  </div>
                  <div className={styles.line}>
                    <dt>Capital:</dt>
                    <dd>{capital[0]}</dd>
                  </div>
                </dl>
                <dl>
                  <div className={styles.line}>
                    <dt>Top Level Domain:</dt>
                    <dd>{tld}</dd>
                  </div>
                  <div className={styles.line}>
                    <dt>Currencies:</dt>
                    <dd>
                      {mainCurrencies && mainCurrencies.length > 0
                        ? countryData.mainCurrencies.map((c) => (
                            <span key={c}>{c}</span>
                          ))
                        : 'none'}
                    </dd>
                  </div>
                  <div className={styles.line}>
                    <dt>Languages:</dt>
                    <dd>
                      {mainLanguages && mainLanguages.length > 0
                        ? mainLanguages.map((l) => <span key={l}>{l}</span>)
                        : 'none'}
                    </dd>
                  </div>
                </dl>
              </div>
              <div className={styles.bottom}>
                <dl>
                  <div className={styles.line}>
                    <dt>Border Countries: </dt>
                    <dd>
                      {borderCountries &&
                        borderCountries.length > 0 &&
                        borderCountries.map((b) => (
                          <Link
                            to={`/country/${b.slug}`}
                            key={b.name}
                            className={styles.tag}
                          >
                            {b.name}
                          </Link>
                        ))}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </section>
        ) : (
          <p>Sorry, we can't find data</p>
        )}
      </Layout>
    </>
  );
}

export default CountryPage;

export const query = graphql`
  query CountryPage($id: String!) {
    country(id: { eq: $id }) {
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
`;

export const Head = ({
  data: {
    country: { name },
  },
}) => (
  <>
    <title>{name.common}</title>
    <meta
      name="description"
      content={`View the details of ${name.common}: population, currencies, capital, languages, etc.`}
    />
  </>
);
