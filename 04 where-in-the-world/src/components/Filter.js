import React, { useState } from 'react';
import * as styles from '../styles/Filter.module.scss';
import { graphql, useStaticQuery, Link } from 'gatsby';

function Filter() {
  const data = useStaticQuery(graphql`
    query GetAllRegions {
      allRegion {
        nodes {
          id
          slug
          name
        }
      }
    }
  `);

  const regions = data?.allRegion?.nodes;

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  function toggleDropdown() {
    setIsDropdownOpen((isDropdownOpen) => !isDropdownOpen);
  }
  return (
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
            <li key={region.id}>
              <Link to={`/region/${region.slug}`}>{region.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Filter;
