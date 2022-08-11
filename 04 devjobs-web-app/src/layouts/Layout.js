import { useLocation } from "react-router-dom";
import Header from "./Header";
import { JobProvider } from "../components/JobsContext";
import Seo from "../components/Seo";

function Layout({ children, ...props }) {
  const location = useLocation()
  return (
    <>
      <Seo title={props.title} description={props.description} path={location.pathname} />
      <div className="bg-background min-h-screen text-contrast">
        <JobProvider>
          <Header />
          <main className="mt-[-20px] sm:mt-[-40px]">{children}</main>
        </JobProvider>
      </div>
    </>
  );
}

export default Layout;
