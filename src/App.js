import Header from "./components/Header";
import Footer from "./components/Footer";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import CanteenSpecific from "./components/CanteenSpecific";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Outlet />
        <Footer />
      </Provider>
    </>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/canteen/:name",
        element: <CanteenSpecific />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
]);

export default appRouter;
