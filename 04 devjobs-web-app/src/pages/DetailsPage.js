import Layout from "../layouts/Layout";
import ScrollToTop from "../components/ScrollToTop";
import JobDetails from "../components/JobDetails";
import { useParams } from "react-router-dom";

function DetailsPage() {
  const { id } = useParams();
  return (
    <ScrollToTop>
      <Layout 
        title="Github Job - Job Details" 
        description="Read more about the job"
      >
        <JobDetails jobID={id} />
      </Layout>
    </ScrollToTop>
  );
}

export default DetailsPage;
