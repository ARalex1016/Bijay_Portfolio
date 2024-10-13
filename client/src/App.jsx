import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

// Pages
import Portfolio from "./Pages/Portfolio";
import LoginForm from "./Pages/LoginForm";
import AdminDashboard from "./Pages/AdminDashboard";

// Store
import { useUserStore } from "./Store/userStore";

function App() {
  const { getUser, isAuthenticated, userDetails, error } = useUserStore();

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}

export default App;
