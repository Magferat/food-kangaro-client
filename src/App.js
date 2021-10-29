import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AddItems from './ALLPages/AddItems/AddItems';
import PlaceOrder from './ALLPages/FoodItems/PlaceOrder/PlaceOrder';
import Header from './ALLPages/Header/Header';
import Home from './ALLPages/Home/Home';
import ManageItems from './ALLPages/ManageItems/ManageItems';
import './App.css';
import Login from './Components/LoginSignUp/Login/Login';
import Signup from './Components/LoginSignUp/SignUP/Signup';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import AuthProvider from './contexts/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>

        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/home"><Home /> </Route>
            <Route
              path="/additems"><AddItems /> </Route>
            <PrivateRoute
              path="/placeorder/:orderId"><PlaceOrder /> </PrivateRoute>
            <Route path="/manageItems"><ManageItems /> </Route>

            <Route path="/logIn" > <Login /> </Route>
            <Route path="/signup" > <Signup /> </Route>
            {/* <PrivateRoute> <PlaceOrder/> </PrivateRoute> */}
            <Route path="/"><Home /> </Route>

          </Switch>
        </BrowserRouter>
      </AuthProvider>


    </div>
  );
}

export default App;
