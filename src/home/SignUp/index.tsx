import { useState } from "react";
import Header from "../header";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { API } from "../../API/api.ts";
import { Button, Spinner } from "@material-tailwind/react";

const estados = {
  "": "",
  AC: "Acre",
  AL: "Alagoas",
  AM: "Amazonas",
  AP: "Amapá",
  BA: "Bahia",
  CE: "Ceará",
  DF: "Distrito Federal",
  ES: "Espírito Santo",
  GO: "Goiás",
  MA: "Maranhão",
  MG: "Minas Gerais",
  MS: "Mato Grosso do Sul",
  MT: "Mato Grosso",
  PA: "Pará",
  PB: "Paraíba",
  PE: "Pernambuco",
  PI: "Piauí",
  PR: "Paraná",
  RJ: "Rio de Janeiro",
  RN: "Rio Grande do Norte",
  RO: "Rondônia",
  RR: "Roraima",
  RS: "Rio Grande do Sul",
  SC: "Santa Catarina",
  SE: "Sergipe",
  SP: "São Paulo",
  TO: "Tocantins",
};

interface FormData {
  name: string;
  email: string;
  birth: number;
  name_responsible: string;
  email_responsible: string;
  cpf_responsible: string;
  zip_code: string;
  city: string;
  address: string;
  state: string;
  scholarship_holder: boolean;
  password: string;
  confirmPassword: string;
}

export default function SignUp() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    birth: 0,
    name_responsible: "",
    email_responsible: "",
    cpf_responsible: "",
    zip_code: "",
    city: "",
    address: "",
    state: "",
    scholarship_holder: false,
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      
      if (formData.password === formData.confirmPassword) {
        const response = await API.post("/signup", formData);
        console.log("Cadastro realizado com sucesso!", response.data);
        localStorage.setItem("token", response.data.token);
        setFormData(response.data);
        window.location.href = "/students";
      } else{
        toast.error("As senhas não são iguais!")
      }
      
    } catch (error) {
      console.error("Erro ao cadastrar:", error);
      toast.error('Não foi possível cadastrar, tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-screen  h-full bg-gradient-to-br from-[#4C3F99] to-[#0D1635] p-6">
      <Header />
      <div className="w-full h-fit  flex justify-center items-center">
        <div className="bg-roxo w-[450px] h-fit rounded shadow-lg flex flex-col items-center p-4">
          <h1 className="text-limeyellow text-3xl font-bold">Criar conta!</h1>
          <form onSubmit={handleSubmit} className="w-full">
            <div className="flex flex-col w-full mt-8 gap-1 ">
              <label htmlFor="" className="text-white font-semibold text-sm">
                Nome do aluno
              </label>
              <input
                type="text"
                name="name"
                onChange={handleInputChange}
                placeholder="Nome completo"
                className="w-full px-2 py-1 rounded text-roxo outline-none block bg-zinc-200 text-sm"
              />

              <label htmlFor="" className="text-white font-semibold text-sm">
                Email do responsavel
              </label>
              <input
                type="email"
                name="email"
                onChange={handleInputChange}
                placeholder="Seu melhor email"
                className="w-full px-2 py-1 rounded text-roxo outline-none block bg-zinc-200 text-sm"
              />

              <label htmlFor="" className="text-white font-semibold text-sm">
                Nome do responsavel
              </label>
              <input
                type="text"
                onChange={handleInputChange}
                name="name_responsible"
                placeholder="Nome completo do responsavel"
                className="w-full px-2 py-1 rounded text-roxo outline-none block bg-zinc-200 text-sm"
              />

              <label htmlFor="" className="text-white font-semibold text-sm">
                Telefone do Responsavel
              </label>
              <input
                type="text"
                onChange={handleInputChange}
                name=""
                placeholder="(21) 99999-9999"
                className="w-full px-2 py-1 rounded text-roxo outline-none block bg-zinc-200 text-sm"
              />
              <label htmlFor="" className="text-white font-semibold text-sm">
                CPF do responsavel
              </label>
              <input
                type="text"
                onChange={handleInputChange}
                name="cpf_responsible"
                placeholder="000.000.000-00"
                className="w-full px-2 py-1 rounded text-roxo outline-none block bg-zinc-200 text-sm"
              />

              <label htmlFor="" className="text-white font-semibold text-sm">
                Senha
              </label>
              <input
                type="password"
                onChange={handleInputChange}
                name="password"
                placeholder="Sua senha "
                className="w-full px-2 py-1 rounded text-roxo outline-none block bg-zinc-200 text-sm"
              />
              <label htmlFor="" className="text-white font-semibold text-sm">
                Confirmar senha
              </label>
              <input
                type="password"
                onChange={handleInputChange}
                name="confirmPassword"
                placeholder="Confirme sua senha "
                className="w-full px-2 py-1 rounded text-roxo outline-none block bg-zinc-200 text-sm"
              />

              <div className="flex md:flex-row flex-col w-full gap-2">
                <div className="w-full ">
                  <label
                    htmlFor=""
                    className="text-white font-semibold text-sm"
                  >
                    Data de Nasc.
                  </label>
                  <input
                    type="text"
                    onChange={handleInputChange}
                    name="birth"
                    placeholder="20/08/1994 "
                    className="w-full px-2 py-1 rounded text-roxo outline-none block bg-zinc-200 text-sm"
                  />
                </div>
                <div className="w-full ">
                  <label
                    htmlFor=""
                    className="text-white font-semibold text-sm"
                  >
                    CEP
                  </label>
                  <input
                    type="number"
                    name="zip_code"
                    onChange={handleInputChange}
                    placeholder="00.000-00 "
                    className="w-full px-2 py-1 rounded text-roxo outline-none block bg-zinc-200 text-sm"
                  />
                </div>
              </div>

              <div className="flex md:flex-row flex-col items-center gap-2">
                <div className="flex flex-col w-4/5">
                  <label
                    htmlFor=""
                    className="text-white font-semibold text-sm"
                  >
                    Endereço
                  </label>
                  <input
                    type="text"
                    name="address"
                    onChange={handleInputChange}
                    placeholder="Rua dos Alfeneiros nº4 "
                    className="w-full px-2 py-1 rounded text-roxo outline-none block bg-zinc-200 text-sm"
                  />
                </div>
                <div className="flex flex-col w-1/5">
                  <label className="text-white font-semibold text-sm">
                    UF:
                  </label>
                  <select
                    name="state"
                    className="px-2 py-1.5 text-roxo rounded"
                    onChange={handleInputChange}
                  >
                    {Object.entries(estados).map(([uf]) => (
                      <option key={uf} value={uf}>
                        {uf}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="w-full  flex justify-center items-center">
                <Button
                  className="bg-limeyellow text-roxo mt-2 flex justify-center items-center"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? (
                    <Spinner />
                  ) : (
                    "Entrar!"
                  )}
                </Button>
              </div>
            </div>
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
}
