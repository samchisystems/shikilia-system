import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CategoryPage from './Components/CategoryPage/CategoryPage';
import CategoryTypes from './Components/CategoryPage/CategoryTypes';
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
            <Route path="/category-type" component={CategoryTypes}/>
            <Route path="/category" component={CategoryPage}/>
          </Switch>
        </ScrollToTop>
      </div>
    </Router>
  );
}

export default App;
