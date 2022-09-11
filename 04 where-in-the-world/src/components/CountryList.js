import React, { useState, useRef, useEffect } from 'react';
import CountryCard from './CountryCard';
import * as styles from '../styles/CountryList.module.scss';

function CountryList({ countries }) {
  const COUNTRY_PER_PAGE = 12;
  const [displayCountries, setDisplayCountries] = useState(
    countries.slice(0, COUNTRY_PER_PAGE),
  );
  const [loadMore, setLoadMore] = useState(false); // state to trigger loadmore
  const [hasMore, setHasMore] = useState(countries.length > COUNTRY_PER_PAGE); // // State of whether there is more to load
  const loadRef = useRef(null); // reference to the loadmore div

  // Reset displayCountries when countries prop changes
  useEffect(() => {
    setDisplayCountries(countries.slice(0, COUNTRY_PER_PAGE));
  }, [countries]);

  // Observer to check if the loadmore div is in view
  const handleObserver = (entities) => {
    const target = entities[0];
    if (target.isIntersecting) {
      setLoadMore(true);
    }
  };

  useEffect(() => {
    var options = {
      root: null,
      rootMargin: '20px', // margin 20px
      threshold: 1.0, // 100% of the target has to be visible
    };

    const observer = new IntersectionObserver(handleObserver, options);

    if (loadRef.current) {
      observer.observe(loadRef.current);
    }
  }, []); //eslint-disable-line

  // Load more countries when loadMore state is true
  useEffect(() => {
    if (loadMore && hasMore) {
      const isMore = countries.length > displayCountries.length;
      if (isMore) {
        const addedCountries = countries.slice(
          displayCountries.length,
          displayCountries.length + COUNTRY_PER_PAGE,
        );

        setDisplayCountries([...displayCountries, ...addedCountries]);
        setLoadMore(false);
      }
    }
  }, [loadMore, hasMore, displayCountries, countries]);

  // Check if there is more
  useEffect(() => {
    const isMore = countries.length > displayCountries.length;
    setHasMore(isMore);
  }, [displayCountries, countries]); //eslint-disable-line

  return (
    <section>
      <ul className={styles.cards}>
        {displayCountries.map((country) => {
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
      <div ref={loadRef} className={styles.loading}>
        {hasMore && (
          <svg
            version="1.1"
            id="L9"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 100 100"
            enableBackground="new 0 0 0 0"
          >
            <path d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="rotate"
                dur="1s"
                from="0 50 50"
                to="360 50 50"
                repeatCount="indefinite"
              ></animateTransform>
            </path>
          </svg>
        )}
      </div>
    </section>
  );
}

export default CountryList;
