import { BrowserRouter, Switch, Route } from "react-router-dom";
import DetailsPage from "./pages/DetailsPage";
import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/view/:id" component={DetailsPage} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
