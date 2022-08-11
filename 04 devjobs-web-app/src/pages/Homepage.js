import Layout from "../layouts/Layout";
import ScrollToTop from "../components/ScrollToTop";

import JobSearch from "../components/JobsSearch";
import JobsList from "../components/JobsList";

function Homepage() {
  return (
    <ScrollToTop>
      <Layout 
        title="Github Job - Search For Jobs" 
        description="Search for jobs. Search by location. Find jobs near you"
      >
        <div className="container px-5 lg:px-10 max-w-6xl">
          <JobSearch />
          <JobsList />
        </div>
      </Layout>
    </ScrollToTop>
  );
}

export default Homepage;
