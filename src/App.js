import './App.css';
import Shop from './components/Shop/Shop';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import OrderReview from './components/OrderReview/OrderReview';
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFound/NotFound';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Shop></Shop>
        </Route>

        <Route path="/Shop">
          <Shop></Shop>
        </Route>

        <Route path="/Review">
          <OrderReview></OrderReview>
        </Route>

        <Route path="/Inventory">
          <Inventory></Inventory>
        </Route>

        <Route path="/placeorder">
          <PlaceOrder></PlaceOrder>
        </Route>

        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
