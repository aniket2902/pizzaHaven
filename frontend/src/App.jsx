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
import HomeScreen from "./screens/HomeScreen";
import Profile from "./screens/Profile";
import Admin from "./components/admin/Admin";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        {/* <Route path="/profile/user" element={<UserProfileScreen />} /> */}
        <Route path="/cart" element={<CartScreen />} />
        <Route path="/pizzadetails" element={<PizzaDetailsScreen />} />
        <Route path="/pizzadetails/:id" element={<PizzaDetailsScreen />} />
        <Route path="/menu" element={<MenuScreen />} />
        <Route path="/checkout" element={<CheckoutScreen />} />
        <Route
          path="/confirmation/:orderId"
          element={<OrderConfirmationScreen />}
        />
        <Route path="/signin" element={<SignInScreen />} />
        <Route path="/signup" element={<SignUpScreen />} />
        <Route path="/profile/*" element={<Profile />} />
        <Route
          path="/admin/outlets/*"
          element={false ? <CreateOutletForm /> : <Admin />}
        />
      </Routes>
      {/* <Profile/> */}
      <Footer />
    </>
  );
}

export default App;

// import Navbar from "./components/Navbar";
// import "./App.css";
// import Carousel from "./components/Carousel";
// import { Route, Routes } from "react-router-dom";
// import PizzaCardContainer from "./components/PizzaCardContainer";
// import SignInScreen from "./screens/SignInScreen";
// import Footer from "./components/Footer";
// import SignUpScreen from "./screens/SignUpScreen";
// import CartScreen from "./screens/CartScreen";
// import PizzaDetailsScreen from "./screens/PizzaDetailsScreen";
// import MenuScreen from "./screens/MenuScreen";
// import CheckoutScreen from "./screens/CheckoutScreen";
// import UserProfileScreen from "./screens/UserProfileScreen";
// import OrderConfirmationScreen from "./screens/OrderConfirmationScreen";
// import HomeScreen from "./screens/HomeScreen";
// import Profile from "./screens/Profile";
// import Admin from "./components/admin/Admin";
// import PrivateRoute from "./components/PrivateRoutes";

// function App() {
//   return (
//     <>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<HomeScreen />} />
//         <Route path="/cart" element={<CartScreen />} />
//         <Route path="/pizzadetails/:id" element={<PizzaDetailsScreen />} />
//         <Route path="/menu" element={<MenuScreen />} />
//         <Route path="/checkout" element={<CheckoutScreen />} />
//         <Route
//           path="/confirmation/:orderId"
//           element={<OrderConfirmationScreen />}
//         />
//         <Route path="/signin" element={<SignInScreen />} />
//         <Route path="/signup" element={<SignUpScreen />} />

//         {/* User Protected Routes */}
//         <Route
//           element={<PrivateRoute allowedRoles={["user", "manager", "admin"]} />}
//         >
//           <Route path="/profile/*" element={<Profile />} />
//         </Route>

//         {/* Manager Protected Routes */}
//         <Route element={<PrivateRoute allowedRoles={["manager", "admin"]} />}>
//           <Route path="/manager/orders" element={<h1>Manager Orders</h1>} />
//         </Route>

//         {/* Admin Protected Routes */}
//         <Route element={<PrivateRoute allowedRoles={["admin"]} />}>
//           <Route path="/admin/outlets/*" element={<Admin />} />
//         </Route>
//       </Routes>
//       <Footer />
//       {/* <Profile/> */}
//       <Footer />
//     </>
//   );
// }

// export default App;
