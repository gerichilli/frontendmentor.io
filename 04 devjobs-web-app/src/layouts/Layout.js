import Header from "./Header";
import { JobProvider } from "../components/JobsContext";

function Layout({ children }) {
  return (
    <div className="bg-background min-h-screen text-contrast">
      <JobProvider>
        <Header />
        <main className="mt-[-20px] sm:mt-[-40px]">{children}</main>
      </JobProvider>
    </div>
  );
}

export default Layout;
