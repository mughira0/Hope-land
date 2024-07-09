import React, { lazy, Suspense } from "react";
import "react-phone-input-2/lib/style.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/react-toastify/dist/ReactToastify.css";
import "./App.css";
import Loader from "./Components/Loader";
import BeforeLoginRoute from "./Helper/BeforeLoginRoute";
import ProtectedRoute from "./Helper/ProtectedRoute";

const Login = lazy(() => import("./Screens/Login"));
const Signup = lazy(() => import("./Screens/Signup"));
const Home = lazy(() => import("./Screens/Customer/Home"));
const SellerDashboard = lazy(() => import("./Screens/Seller/SellerDashboard"));
const AdminDashboard = lazy(() => import("./Screens/Admin/Dashboard"));

function App() {
  return (
    <>
      <ToastContainer />

      <Suspense fallback={<Loader />}>
        <Router>
          <Routes>
            {/* without login */}
            <Route
              path="/login"
              exact
              element={<BeforeLoginRoute file={<Login />} />}
            />
            <Route
              path="/signup"
              exact
              element={<BeforeLoginRoute file={<Signup />} />}
            />
            {/* Customer Routes */}
            <Route
              path="/"
              exact
              element={<BeforeLoginRoute element={<Home />} />}
            />

            {/* Seller Routes */}
            <Route
              path="/seller-dashboard"
              exact
              element={
                <ProtectedRoute
                  file={<SellerDashboard />}
                  path="/seller-dashboard"
                />
              }
            />
            {/* Admin Routes */}
            <Route
              path="/admin-dashboard"
              exact
              element={
                <ProtectedRoute
                  file={<AdminDashboard />}
                  path="/admin-dashboard"
                />
              }
            />
          </Routes>
        </Router>
      </Suspense>
    </>
  );
}

export default App;
