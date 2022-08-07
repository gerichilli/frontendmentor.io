import Layout from "../layouts/Layout";
import ScrollToTop from "../components/ScrollToTop";

import JobSearch from "../components/JobsSearch";
import JobsList from "../components/JobsList";

function Homepage() {
  return (
    <ScrollToTop>
      <Layout>
        <div className="container px-5 lg:px-10 max-w-6xl">
          <JobSearch />
          <JobsList />
        </div>
      </Layout>
    </ScrollToTop>
  );
}

export default Homepage;
