import React, { useState } from 'react';
import * as styles from '../styles/Filter.module.scss';
import { graphql, useStaticQuery } from 'gatsby';

function Filter({ setQuery }) {
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

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [buttonLabel, setButtonLabel] = useState('Filter by Region');

  function toggleDropdown() {
    setIsDropdownOpen((isDropdownOpen) => !isDropdownOpen);
  }

  function handleFilter(e) {
    setQuery(e.target.value);
    setIsDropdownOpen(false);

    if (e.target.value === '') {
      setButtonLabel('Filter by Region');
    } else {
      setButtonLabel(e.target.value);
    }
  }

  return (
    <div className={styles.filter}>
      <button className={styles.filter_button} onClick={toggleDropdown}>
        <span className="filter__label">{buttonLabel}</span>
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
          <li key="all">
            <label>
              <input
                type="radio"
                name="region"
                value=""
                onChange={handleFilter}
                className="sr-only"
              />
              <span>All</span>
            </label>
          </li>
          {regions.map((region) => (
            <li key={region.id}>
              <label>
                <input
                  type="radio"
                  name="region"
                  value={region.name}
                  onChange={handleFilter}
                  className="sr-only"
                />
                <span>{region.name}</span>
              </label>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Filter;
