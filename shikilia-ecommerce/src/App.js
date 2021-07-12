import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./Components/Home/Home";
import Product from "./Components/Product-Page/Product";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/product" component={Product}/>
        </Switch>
      </div>
      {/* <Home/> */}
    </Router>
  );
}

export default App;
