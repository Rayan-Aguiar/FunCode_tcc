import { useLocation, useNavigate } from "react-router-dom";
import HeaderAdmin from "../../components/header";
import {
  Input,
  Select,
  Typography,
  Option,
  Checkbox,
  Button,
  Spinner,
} from "@material-tailwind/react";

import { useState } from "react";
import Navigation from "../../components/navegation";
import { API } from "../../../API/api";
import { ToastContainer, toast } from "react-toastify";

interface FormData {
  name: string;
  name_responsible: string;
  email: string;
  email_responsible: string;
  cpf_responsible: string;
  birth: number;
  zip_code: string;
  city: string;
  address: string;
  state: string;
  phone_responsible: string;
  scholarship_holder: boolean;
  password: string;
}
export default function AddStudent() {
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

  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    name_responsible: "",
    email: "",
    email_responsible: "",
    cpf_responsible: "",
    birth: 0,
    zip_code: "",
    city: "",
    address: "",
    state: "",
    phone_responsible: '',
    scholarship_holder: false,
    password: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    if (name) {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData({ ...formData, [name]: checked });
  };


  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  

  const location = useLocation();
  const currentPath = location.pathname;

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await API.post("/admin/students", formData);
      console.log("Resposta da API:", response.data);
      toast.success("Aluno cadastrado com sucesso!");

      setTimeout(()=>{
          navigate("/admin/students")
      }, 1000);
    } catch (error) {
      toast.error("Não foi possível cadastrar o aluno");
      console.error("Erro ao enviar dados:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-300 w-screen h-screen ">
      <HeaderAdmin />
      <Navigation currentPath={currentPath}/>

      <main className="p-8">
        <div className="bg-white w-full h-fit rounded-lg p-4">
          <form
            action="POST"
            onSubmit={handleSubmit}
            className="flex flex-col justify-center items-center w-full"
          >
            <Typography variant="h4" color="blue-gray">
              Novo aluno
            </Typography>
            <div className="mt-4 w-full flex flex-col gap-2">
              <Input
                label="Nome do Aluno(a)"
                name="name"
                required
                crossOrigin={undefined}
                onChange={handleInputChange}
                value={formData.name}
              />
              <Input
                label="Nome do Responsável(a)"
                name="name_responsible"
                required
                crossOrigin={undefined}
                onChange={handleInputChange}
                value={formData.name_responsible}
              />
              <div className="flex items-center w-full gap-4">
              <Input
                  label="Senha do Aluno"
                  name="password"
                  required
                  type="password"
                  crossOrigin={undefined}
                  onChange={handleInputChange}
                  value={formData.password}
                />
                <Input
                label="Telefone do responsavel"
                name="phone_responsible"
                required
                type="text"
                crossOrigin={undefined}
                onChange={handleInputChange}
                value={formData.phone_responsible}
              />
              </div>
              <div className="flex items-center w-full gap-4">
                <Input
                  label="Email do Aluno"
                  name="email"
                  required
                  type="email"
                  crossOrigin={undefined}
                  onChange={handleInputChange}
                  value={formData.email}
                />
                <Input
                  label="Email do Responsável"
                  name="email_responsible"
                  required
                  type="email"
                  crossOrigin={undefined}
                  onChange={handleInputChange}
                  value={formData.email_responsible}
                />
              </div>
              
              <div className="flex items-center w-full gap-4">
                <Input
                  label="CPF do responsável"
                  name="cpf_responsible"
                  required
                  type="text"
                  crossOrigin={undefined}
                  onChange={handleInputChange}
                  value={formData.cpf_responsible}
                />
                <Input
                  label="Data de Nasc. do aluno"
                  name="birth"
                  required
                  type="text"
                  crossOrigin={undefined}
                  onChange={handleInputChange}
                  value={formData.birth}
                />
              </div>
              <div className="flex items-center w-full gap-4">
                <Input
                  label="CEP"
                  name="zip_code"
                  required
                  type="text"
                  crossOrigin={undefined}
                  onChange={handleInputChange}
                  value={formData.zip_code}
                />
                <Input
                  label="Cidade"
                  name="city"
                  required
                  type="text"
                  crossOrigin={undefined}
                  onChange={handleInputChange}
                  value={formData.city}
                />
              </div>
              <div className="flex items-center w-full gap-4">
                <div className="w-4/5">
                  <Input
                    label="Endereço"
                    name="address"
                    required
                    type="text"
                    crossOrigin={undefined}
                    onChange={handleInputChange}
                    value={formData.address}
                  />
                </div>
                <div className="w-1/5">
                <Select
                  label="UF"
                  onChange={handleSelectChange}
                  value={formData.state}
                >
                  {Object.entries(estados).map(([uf, name]) => (
                    <Option key={uf} value={uf}>
                      {name}
                    </Option>
                  ))}
                </Select>

                </div>
              </div>
              <div className="flex items-center justify-center gap-12">
                <Checkbox
                  label="Conceder Bolsa?"
                  crossOrigin={undefined}
                  name="bolsa"
                  onChange={handleCheckboxChange}
                  checked={formData.scholarship_holder}
                />
                <Button
                  type="submit"
                  className="bg-limeyellow text-roxo flex gap-2 items-center"
                  disabled={loading}
                >
                  {loading ? (
                    <Spinner />
                  ) : (
                    "Salvar"
                  )}
                </Button>
              </div>
            </div>
          </form>
        </div>
        <ToastContainer />
      </main>
    </div>
  );
}
