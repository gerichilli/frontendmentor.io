import { Helmet, HelmetProvider } from "react-helmet-async";

function Seo({title, description, path = ""}) {
    const url = `https://github-jobs-filter.netlify.app/${path}`;
    return (
        <HelmetProvider>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={description} />
                <link rel="canonical" href={url} />

                <meta property="og:url" content={url} />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:title" content={title} />
                <meta property="twitter:description" content={description} />
            </Helmet>
        </HelmetProvider>
        
    )
}

export default Seo