import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

// Components
import Button1 from "../Components/Button1";
import Input1 from "../Components/Input1";

// Store
import { useUserStore } from "../Store/userStore";

const LoginForm = () => {
  const { login } = useUserStore();
  const navigate = useNavigate();

  const initialLoginForm = {
    userName: "",
    password: "",
  };

  const [loginForm, setLoginForm] = useState(initialLoginForm);

  const handleInput = (e) => {
    const { value, name } = e.target;

    setLoginForm((pre) => ({
      ...pre,
      [name]: value,
    }));
  };

  const handleClick = async () => {
    try {
      await login(loginForm);
      toast.success("Login Successfyll!");
      setLoginForm(initialLoginForm);

      navigate("/admin");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      <main className="w-screen h-screen bg-darkSecondary flex justify-center items-center">
        <section className="w-fit h-fit bg-slate-950 rounded-2xl shadow-md shadow-slate-500 flex flex-col items-center gap-10 px-10 py-16">
          <h2 className="text-2xl md:text-3xl text-darkAccent font-bold">
            Admin Login
          </h2>

          <Input1
            placeholder="Username"
            name="userName"
            value={loginForm.userName}
            onChange={handleInput}
          />
          <Input1
            type="password"
            placeholder="Password"
            name="password"
            value={loginForm.password}
            onChange={handleInput}
          />

          <Button1 onClick={handleClick}>Login</Button1>
        </section>
      </main>
    </>
  );
};

export default LoginForm;
