import './App.css';
import Shop from './components/Shop/Shop';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import OrderReview from './components/OrderReview/OrderReview';
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div>
    
      <Header></Header>

      <Router>
        <Switch>
          <Route exact path="/">
            <Shop></Shop>
          </Route>

          <Route path="/Shop">
            <Shop></Shop>
          </Route>

          <Routel path="/Review">
            <OrderReview></OrderReview>
          </Routel>

          <Route path="/Inventory">
            <Inventory></Inventory>
          </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
