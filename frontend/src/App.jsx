import Navbar from "./components/Navbar";
import "./App.css";
import Carousel from "./components/Carousel";
import { Route, Routes } from "react-router-dom";
import PizzaCardContainer from "./components/PizzaCardContainer";
import SignInScreen from "./screens/SignInScreen";
import Footer from "./components/Footer";
import SignUpScreen from "./screens/SignUpScreen";
import CartScreen from "./screens/CartScreen";
import PizzaDetailsScreen from "./screens/PizzaDetailsScreen";
import MenuScreen from "./screens/MenuScreen";
import CheckoutScreen from "./screens/CheckoutScreen";
import UserProfileScreen from "./screens/UserProfileScreen";
import OrderConfirmationScreen from "./screens/OrderConfirmationScreen";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Carousel />
              <PizzaCardContainer />
            </>
          }
        />
        <Route path="/user" element={<UserProfileScreen />} />
        <Route path="/cart" element={<CartScreen />} />
        <Route path="/pizzadetails" element={<PizzaDetailsScreen />} />
        <Route path="/menu" element={<MenuScreen />} />
        <Route path="/checkout" element={<CheckoutScreen />} />
        <Route path="/confirmation" element={<OrderConfirmationScreen />} />
        <Route path="/signin" element={<SignInScreen />} />
        <Route path="/signup" element={<SignUpScreen />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
