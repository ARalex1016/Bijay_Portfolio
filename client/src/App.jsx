import { useEffect } from "react";
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
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}

export default App;
