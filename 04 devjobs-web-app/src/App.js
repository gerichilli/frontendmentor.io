import { Switch, Route } from "react-router-dom";
import Header from "./layouts/Header";
import JobList from "./components/JobsList";
import JobView from "./components/JobView";
import { JobProvider } from "./components/JobContext";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <ScrollToTop>
      <div className="bg-background min-h-screen text-contrast">
        <Header />
        <main className="mt-[-20px] sm:mt-[-40px]">
          <JobProvider>
            <Switch>
              <Route exact path="/" component={JobList} />
              <Route exact path="/view/:id" component={JobView} />
            </Switch>
          </JobProvider>
        </main>
      </div>
    </ScrollToTop>
  );
}

export default App;
