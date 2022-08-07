import { Link } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";
import Layout from "../layouts/Layout";

function PageNotFound() {
  return (
    <ScrollToTop>
      <Layout>
        <div className="mt-28 text-center px-5">
          <h1 className="font-bold text-2xl text-primary">
            404 Error <br />
            Page Not Found
          </h1>
          <Link
            to="/"
            className="block mt-10 hover:text-primary hover:underline hover:underline-offset-8"
          >
            Back to Homepage
          </Link>
        </div>
      </Layout>
    </ScrollToTop>
  );
}

export default PageNotFound;
