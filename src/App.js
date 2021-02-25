import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy/";
import TermsConditions from "./pages/TermsConditions";
import FAQ from "./pages/Faq/FAQ";
import ReturnRefund from "./pages/ReturnRefund";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/faq" component={FAQ} />
        <Route exact path="/privacypolicy" component={PrivacyPolicy} />
        <Route exact path="/termsconditions" component={TermsConditions} />
        <Route exact path="/return-refund" component={ReturnRefund} />
      </Switch>
    </Router>
  );
}

export default App;
