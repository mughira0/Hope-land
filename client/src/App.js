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
const Subscription = lazy(() => import("./Screens/Seller/Subscription"));
const AdminDashboard = lazy(() => import("./Screens/Admin/Dashboard"));
const Packages = lazy(() => import("./Screens/Admin/Packages"));
const AddEditPackages = lazy(() => import("./Screens/Admin/AddEditPackage"));
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
            <Route
              path="/subscription"
              exact
              element={
                <ProtectedRoute file={<Subscription />} path="/subscription" />
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

            <Route
              path="/packages"
              exact
              element={<ProtectedRoute file={<Packages />} path="/packages" />}
            />
            <Route
              path="/add-edit-package"
              exact
              element={
                // <ProtectedRoute
                // file={
                <AddEditPackages />
                // }
                // path="/add-edit-package"
                // />
              }
            />
          </Routes>
        </Router>
      </Suspense>
    </>
  );
}

export default App;
