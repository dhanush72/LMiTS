import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import FAQ from "./pages/Faq";
import PrivacyPolicy from "./pages/PrivacyPolicy/";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/faq" component={FAQ} />
        <Route exact path="/privacypolicy" component={PrivacyPolicy} />
      </Switch>
    </Router>
  );
}

export default App;
