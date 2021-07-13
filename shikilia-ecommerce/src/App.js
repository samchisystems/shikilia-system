import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from './Components/common-components/ScrollToTop';
import Home from "./Components/Home/Home";
import Product from "./Components/Product-Page/Product";

function App() {
  return (
    <Router>
      <div>
        <ScrollToTop>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/product" component={Product}/>
          </Switch>
        </ScrollToTop>
      </div>
    </Router>
  );
}

export default App;
