import { useNavigate } from "react-router-dom";

// Components
import Button1 from "../Components/Button1";

const AdminDashboard = () => {
  const navigate = useNavigate();
  return (
    <>
      <main className="w-screen h-screen bg-darkSecondary relative">
        <div className="absolute top-0 right-0 mt-4 mr-6">
          <Button1 onClick={() => navigate("/")}>Home</Button1>
        </div>

        <h2 className="text-2xl text-darkAccent font-medium text-center">
          Admin Dashboard
        </h2>
      </main>
    </>
  );
};

export default AdminDashboard;
