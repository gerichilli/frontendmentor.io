import React from 'react';
import * as styles from '../styles/Search.module.scss';
import { graphql, useStaticQuery } from 'gatsby';

function Search() {
  const data = useStaticQuery(graphql`
    query GetAllRegions {
      allRegion {
        nodes {
          id
          name
        }
      }
    }
  `);

  const regions = data?.allRegion?.nodes;

  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

  function toggleDropdown() {
    setIsDropdownOpen((isDropdownOpen) => !isDropdownOpen);
  }

  return (
    <section className={styles.container}>
      <form className={styles.search}>
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.search_icon}
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.5 11H11.7L11.4 10.7C12.4 9.6 13 8.1 13 6.5C13 2.9 10.1 0 6.5 0C2.9 0 0 2.9 0 6.5C0 10.1 2.9 13 6.5 13C8.1 13 9.6 12.4 10.7 11.4L11 11.7V12.5L16 17.5L17.5 16L12.5 11ZM6.5 11C4 11 2 9 2 6.5C2 4 4 2 6.5 2C9 2 11 4 11 6.5C11 9 9 11 6.5 11Z"
          />
        </svg>
        <input
          type="text"
          id="search-text"
          className={styles.input}
          placeholder="Search for a country…"
        />
      </form>
      <div className={styles.filter}>
        <button className={styles.filter_button} onClick={toggleDropdown}>
          <span className="filter__label">Filter by Region</span>
          <svg
            width="10"
            height="7"
            viewBox="0 0 10 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            style={{
              transform: isDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            }}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.45 1.45L5 4.9L1.55 1.45L0.5 2.5L5 7L9.5 2.5L8.45 1.45Z"
            />
          </svg>
        </button>
        {isDropdownOpen && (
          <ul className={styles.dropdown}>
            {regions.map((region) => (
              <li key={region.id}>{region.name}</li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

export default Search;
