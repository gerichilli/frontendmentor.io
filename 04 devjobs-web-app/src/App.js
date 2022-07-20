import Header from "./layouts/Header";
import JobSearch from "./components/JobSearch";
import JobList from "./components/JobsList";
import { JobProvider } from "./components/JobContext";

function App() {
  return (
    <div className="bg-background min-h-screen text-contrast">
      <Header />
      <main>
        <JobProvider>
          <div className="container max-w-6xl">
            <JobSearch />
            <div className="py-20">
              <JobList />
            </div>
          </div>
        </JobProvider>
      </main>
    </div>
  );
}

export default App;
