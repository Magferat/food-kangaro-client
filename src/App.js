import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AddItems from './ALLPages/AddItems/AddItems';
import Footer from './ALLPages/Footer/Footer';
import Header from './ALLPages/Header/Header';
import Home from './ALLPages/Home/Home';
import ManageItems from './ALLPages/ManageItems/ManageItems';
import MyOrders from './ALLPages/MyOrders/MyOrders';
import PlaceOrder from './ALLPages/PlaceOrder/PlaceOrder';
import './App.css';
import Login from './Components/LoginSignUp/Login/Login';
import Signup from './Components/LoginSignUp/SignUP/Signup';
import NotFound from './Components/Not Found/NotFound';
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
            <Route path="/myOrders"><MyOrders /></Route>

            <Route path="/logIn" > <Login /> </Route>
            <Route path="/signup" > <Signup /> </Route>

            <Route exect path="/"><Home /> </Route>
            <Route path="*" > <NotFound /></Route>
          </Switch>
          <Footer />
        </BrowserRouter>
      </AuthProvider>


    </div>
  );
}

export default App;
