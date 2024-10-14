import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";

// Pages
import Portfolio from "./Pages/Portfolio";
import LoginForm from "./Pages/LoginForm";
import AdminDashboard from "./Pages/AdminDashboard";

// Component
import Loader from "./Components/Loader";

// Store
import { useUserStore } from "./Store/userStore";

const RedirectAuthenticateUser = ({ children }) => {
  const { isAuthenticated } = useUserStore();

  if (isAuthenticated) {
    return (
      <Navigate to="/admin" replace>
        {children}
      </Navigate>
    );
  }

  return children;
};

const ProtectRoute = ({ children }) => {
  const { isAuthenticated } = useUserStore();

  if (!isAuthenticated) {
    return (
      <Navigate to="/" replace>
        {children}
      </Navigate>
    );
  }

  return children;
};

function App() {
  const { getUser, isAuthenticated } = useUserStore();
  const [toastPosition, setToastPosition] = useState("top-right");

  useEffect(() => {
    // Function to set toast position based on screen width
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setToastPosition("top-center");
      } else {
        setToastPosition("top-right");
      }
    };

    // Call the function on mount
    handleResize();

    // Attach event listener to window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <Loader />
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route
          path="/login"
          element={
            <RedirectAuthenticateUser>
              <LoginForm />
            </RedirectAuthenticateUser>
          }
        />
        <Route
          path="/admin"
          element={
            <ProtectRoute>
              <AdminDashboard />
            </ProtectRoute>
          }
        />
      </Routes>
      <Toaster position={toastPosition} reverseOrder={false} />
    </>
  );
}

export default App;
