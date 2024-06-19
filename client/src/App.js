import React, { lazy, Suspense } from "react";
import "react-phone-input-2/lib/style.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/react-toastify/dist/ReactToastify.css";
import "./App.css";
import Loader from "./Components/Loader";
import BeforeLoginRoute from "./Helper/BeforeLoginRoute";

const Login = lazy(() => import("./Screens/Login"));
const Signup = lazy(() => import("./Screens/Signup"));
const Home = lazy(() => import("./Screens/Home"));

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
            <Route path="/" exact element={<Home />} />
            {/* <Route path="/courses" exact element={<Courses />} /> */}
            {/* <Route
              path="/courses"
              exact
              element={<ProtectedRoute file={<Courses />} />}
            /> */}
          </Routes>
        </Router>
      </Suspense>
    </>
  );
}

export default App;
