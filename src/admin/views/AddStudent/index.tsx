import { Link } from "react-router-dom";
import HeaderAdmin from "../../components/header";
import {
  Input,
  Select,
  Typography,
  Option,
  Checkbox,
  Button,
} from "@material-tailwind/react";
import { Coins, GraduationCap, HelpCircle, PieChart, Save } from "lucide-react";
import { useState } from "react";

interface FormData {
  nomeAluno: string;
  nomeResponsavel: string;
  emailAluno: string;
  emailResponsavel: string;
  cpf: string;
  nasc: string;
  cep: string;
  cidade: string;
  end: string;
  uf: string;
  bolsa: boolean;
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

  const [formData, setFormData] = useState<FormData>({
    nomeAluno: "",
    nomeResponsavel: "",
    emailAluno: "",
    emailResponsavel: "",
    cpf: "",
    nasc: "",
    cep: "",
    cidade: "",
    end: "",
    uf: "",
    bolsa: false,
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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.table([formData]); 
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-300 w-screen h-screen ">
      <HeaderAdmin />
      <nav className="w-full h-10 bg-roxo flex items-center px-10 gap-8">
        <Link to="/admin/dashboard">
          <Typography className="text-zinc-50 font-semibold w-fit h-full flex items-center gap-2 p-2">
            <PieChart className="text-limeyellow" /> Dashboard
          </Typography>
        </Link>
        <Link to="/admin/students">
          <Typography className="text-zinc-50 font-semibold w-fit h-full bg-roxo-light flex items-center gap-2 p-2">
            <GraduationCap className="text-limeyellow" /> Alunos
          </Typography>
        </Link>
        <Link to="/admin/financial">
          <Typography className="text-zinc-50 font-semibold w-fit h-full flex items-center gap-2 p-2">
            <Coins className="text-limeyellow" /> Financeiro
          </Typography>
        </Link>
        <Link to="/admin/courses">
          <Typography className="text-zinc-50 font-semibold w-fit h-full flex items-center gap-2 p-2">
            <Coins className="text-limeyellow" /> Cursos
          </Typography>
        </Link>
        <Link to="/admin/suport">
          <Typography className="text-zinc-50 font-semibold w-fit h-full flex items-center gap-2 p-2">
            <HelpCircle className="text-limeyellow" /> Suporte
          </Typography>
        </Link>
      </nav>

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
                name="nomeAluno"
                required
                crossOrigin={undefined}
                onChange={handleInputChange}
                value={formData.nomeAluno}
              />
              <Input
                label="Nome do Responsável(a)"
                name="nomeResponsavel"
                required
                crossOrigin={undefined}
                onChange={handleInputChange}
                value={formData.nomeResponsavel}
              />
              <div className="flex items-center w-full gap-4">
                <Input
                  label="Email do Aluno"
                  name="emailAluno"
                  required
                  type="email"
                  crossOrigin={undefined}
                  onChange={handleInputChange}
                  value={formData.emailAluno}
                />
                <Input
                  label="Email do Responsável"
                  name="emailResponsavel"
                  required
                  type="email"
                  crossOrigin={undefined}
                  onChange={handleInputChange}
                  value={formData.emailResponsavel}
                />
              </div>
              <div className="flex items-center w-full gap-4">
                <Input
                  label="CPF do responsável"
                  name="cpf"
                  required
                  type="text"
                  crossOrigin={undefined}
                  onChange={handleInputChange}
                  value={formData.cpf}
                />
                <Input
                  label="Data de Nasc. do aluno"
                  name="nasc"
                  required
                  type="text"
                  crossOrigin={undefined}
                  onChange={handleInputChange}
                  value={formData.nasc}
                />
              </div>
              <div className="flex items-center w-full gap-4">
                <Input
                  label="CEP"
                  name="cep"
                  required
                  type="text"
                  crossOrigin={undefined}
                  onChange={handleInputChange}
                  value={formData.cep}
                />
                <Input
                  label="Cidade"
                  name="cidade"
                  required
                  type="text"
                  crossOrigin={undefined}
                  onChange={handleInputChange}
                  value={formData.cidade}
                />
              </div>
              <div className="flex items-center w-full gap-4">
                <div className="w-4/5">
                  <Input
                    label="Endereço"
                    name="end"
                    required
                    type="text"
                    crossOrigin={undefined}
                    onChange={handleInputChange}
                    value={formData.end}
                  />
                </div>
                <div className="w-1/5">
                  <Select
                    label="UF"
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                        handleSelectChange(e)
                      }
                      value={formData.uf}
                      animate={{
                        mount: { y: 0 },
                        unmount: { y: 25 },
                      }}
                  >
                    {Object.entries(estados).map(([uf]) => (
                      <Option key={uf} value={uf}>
                        {uf}
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
                  checked={formData.bolsa}
                />
                <Button
                  type="submit"
                  className="bg-limeyellow text-roxo flex gap-2 items-center"
                >
                  Salvar <Save />
                </Button>
              </div>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
