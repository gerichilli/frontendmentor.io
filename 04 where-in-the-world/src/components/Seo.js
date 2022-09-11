import React from 'react';
import siteImage from '../images/site-image.jpg';

const URL = 'https://fem-where-in-the-world.netlify.app';

function Seo({ children, title = '', description = '', slug = '/' }) {
  const fullURL = `${URL}${slug}`;
  return (
    <>
      <title>{title || 'Where in the world'}</title>
      <meta
        name="description"
        content={
          description || 'View and search for all the countries in the world'
        }
      />
      <meta
        name="keywords"
        content="find country, country information, countries, population, region"
      />
      <link rel="canonical" href={fullURL} />
      {siteImage && <meta name="image" content={siteImage} />}

      <meta property="og:url" content={fullURL} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {siteImage && <meta name="og:image" content={siteImage} />}

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      {siteImage && <meta name="twitter:image" content={siteImage} />}
      {children}
    </>
  );
}

export default Seo;
