import { Route, Routes, Outlet } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import img from "./assets/PPC.jpg";
import Footer from "./components/footer/Footer";
import Nav from "./components/navbar/Nav";
import Home from "./components/screens/Home";
import SignIn from "./components/screens/SignIn";
import SeedsHero from "./components/screens/SeedsComponents/SeedsHero";
import SignUp from "./components/screens/SignUp";
import { useEffect } from "react";
import SummaryApi from "./common/Index";
import Context from "./context";
import { useDispatch } from "react-redux";
import { setUserDetails } from "./store/userSlice";
import Adminpanel from "./components/screens/Adminpanel";
import AllUsers from "./components/screens/adminScreens/AllUsers";
import UserProvider from "./components/providers/user-provider";
// import Product from "./components/screens/adminScreens/Products";
import Products from "./components/screens/adminScreens/Products";
import Settings from "./components/screens/adminScreens/Settings"
import ActivityLog from "./components/screens/adminScreens/ActivityLog";

function App() {
  const dispatch = useDispatch();
  const fetchUserDetails = async () => {
    const dataResponse = await fetch(SummaryApi.current_user.url, {
      method: SummaryApi.current_user.method,
      credentials: "include",
    });

    const dataApi = await dataResponse.json();

    if (dataApi.success) {
      dispatch(setUserDetails(dataApi.data));
    }

   
  };
  useEffect(() => {
    // user details
    fetchUserDetails();
  }, []);
  return (
    <>
      <Context.Provider
        value={{
          fetchUserDetails, //user detail fetch
        }}
      >
        <ToastContainer />

        {/* <header>
          <Nav />
        </header> */}

        <main>
          <Routes>
            <Route path="/" element={<UserProvider />}>
              <Route path="/" element={<Home />} />
              <Route path="/seeds" element={<SeedsHero />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
            </Route>
            <Route path="/admin-panel" element={<Adminpanel />}>
              <Route  path="alluser" element={<AllUsers />}></Route>
              <Route path="products" element={<Products />}></Route>
              <Route path="settings" element={<Settings />}></Route>
              <Route path="activitylog" element={<ActivityLog />}></Route>
            </Route>
          </Routes>
        </main>
        {/* <footer>
          <Footer />
        </footer> */}
      </Context.Provider>
    </>
  );
}

export default App;
