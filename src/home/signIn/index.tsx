import { useState } from "react";
import { Button, Spinner } from "@material-tailwind/react";
import { User2, LogIn, Lock } from "lucide-react";
import { API } from "../../API/api";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

interface LoginForm {
  email: string;
  password: string;
}

export default function SignInStudents() {
  const [loading, setLoading] = useState(false);
  const [loginData, setLoginData] = useState<LoginForm>({
    email: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleLogin = async (e: any) => {
    /* e.preventDefault(); */
    setLoading(true);
    try {
      const response = await API.post("/signin", loginData);
      console.log("Login bem-sucedido!", response.data);
      localStorage.setItem("token", response.data.token);
      window.location.href = "/students";
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      if (error.response && error.response.status === 401) {
        toast.error("Senha inválida"); 
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-violet-700 via-violet-800 to-violet-900 w-screen h-screen flex items-center justify-center">
      <div className="w-96 h-96 bg-roxo flex flex-col justify-center items-center drop-shadow-lg rounded">
        <div className="flex flex-col justify-center items-center w-full gap-4">
          <div className="w-16 h-16 bg-limeyellow rounded-full flex items-center justify-center">
            <User2 className="text-roxo" />
          </div>
          <div className="flex flex-col w-10/12 items-center justify-center">
            <div>
              <label htmlFor="" className="text-zinc-50">
                Login
              </label>
            </div>
            <div className="w-full h-fit bg-zinc-200 flex py-4 rounded-md gap-2">
              <LogIn className="text-roxo ml-2" />
              <input
                placeholder="Digite seu login"
                name="email"
                value={loginData.email}
                onChange={handleInputChange}
                className="w-full h-full outline-none px-2 bg-inherit text-roxo"
              />
            </div>
          </div>
          <div className="flex flex-col w-10/12 items-center justify-center">
            <div>
              <label htmlFor="" className="text-zinc-50">
                Senha
              </label>
            </div>
            <div className="w-full h-fit bg-zinc-200 flex py-4 rounded-md gap-2">
              <Lock className="text-roxo ml-2" />
              <input
                placeholder="Digite sua senha"
                type="password"
                name="password"
                value={loginData.password}
                onChange={handleInputChange}
                className="w-full h-full outline-none px-2 bg-inherit text-roxo"
              />
            </div>
          </div>
          <Button
            onClick={handleLogin}
            disabled={loading}
            className="flex justify-center items-center bg-limeyellow text-roxo w-60 mt-2"
          >
            {loading ? (
              <Spinner />
            ) : (
              "Entrar!"
            )}
          </Button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
