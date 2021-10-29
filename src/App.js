import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AddItems from './ALLPages/AddItems/AddItems';
import PlaceOrder from './ALLPages/FoodItems/PlaceOrder/PlaceOrder';
import Header from './ALLPages/Header/Header';
import Home from './ALLPages/Home/Home';
import ManageItems from './ALLPages/ManageItems/ManageItems';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/home"><Home /> </Route>
          <Route
            path="/additems"><AddItems /> </Route>
          <Route
            path="/placeorder/:orderId"><PlaceOrder /> </Route>
          <Route
            path="/manageItems"><ManageItems /> </Route>

          <Route path="/"><Home /> </Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
