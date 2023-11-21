import { Link } from "react-router-dom";
import HeaderAdmin from "../../components/header";
import { Button, Checkbox, Input, Typography } from "@material-tailwind/react";
import {
  Coins,
  GraduationCap,
  HelpCircle,
  PieChart,
  Save,
  User2,
} from "lucide-react";
import { useState } from "react";


interface FormData {
  status: "resolvido" | "emAberto" | "aguardando" | null;
}

export default function SuportDetails() {
  const [formData, setFormData] = useState<FormData>({
    status: null,
  });

  


  const handleCheckboxChange = (status: string) => {
    const newStatus = formData.status === status ? null : status;
    setFormData({ ...formData, status: newStatus as FormData["status"] });
    
  };

  const handleSave = () =>{
    console.log("Status enviado:", formData);
  }

  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-300 w-screen md:h-screen h-fit ">
      <HeaderAdmin />
      <nav className="w-full h-10 bg-roxo flex items-center px-10 gap-8">
        <Link to="/admin/dashboard">
          <Typography className="text-zinc-50 font-semibold w-fit h-full flex items-center gap-2 p-2">
            <PieChart className="text-limeyellow" /> Dashboard
          </Typography>
        </Link>
        <Link to="/admin/students">
          <Typography className="text-zinc-50 font-semibold w-fit h-full flex items-center gap-2 p-2">
            <GraduationCap className="text-limeyellow" /> Alunos
          </Typography>
        </Link>
        <Link to="/admin/financial">
          <Typography className="text-zinc-50 font-semibold w-fit h-full flex  items-center gap-2 p-2">
            <Coins className="text-limeyellow" /> Financeiro
          </Typography>
        </Link>
        <Link to="/admin/courses">
          <Typography className="text-zinc-50 font-semibold w-fit h-full flex items-center gap-2 p-2">
            <Coins className="text-limeyellow" /> Cursos
          </Typography>
        </Link>
        <Link to="/admin/suport">
          <Typography className="text-zinc-50 font-semibold w-fit h-full bg-roxo-light flex items-center gap-2 p-2">
            <HelpCircle className="text-limeyellow" /> Suporte
          </Typography>
        </Link>
      </nav>
      <main className="p-8 flex justify-between w-full gap-4">
        <div className="bg-white w-1/5 h-60 rounded-lg flex flex-col justify-center items-center gap-4">
          <User2 className="w-24 h-24" />
          <Typography variant="span" className="font-bold">
            João Batista
          </Typography>
        </div>
        <div className="bg-white w-4/5 h-fit rounded-lg flex items-center p-4 flex-col">
          <Typography variant="h4">Solicitação</Typography>
          <div className="gap-8 flex flex-col mt-8">
            <Typography variant="paragraph">
              Material Tailwind is an easy to use components library for
              Tailwind CSS and Material Design. It provides a simple way to
              customize your components, you can change the colors, fonts,
              breakpoints and everything you need.
            </Typography>
            <Input
              label="Email do Responsavel"
              name="nomeResponsavel"
              value={"teste@teste.com"}
              readOnly
              crossOrigin={undefined}
            />
            <div>
              <Typography>Status da Solicitação</Typography>
              <div className="flex gap-4">
                <Checkbox
                  label="Resolvido"
                  color="green"
                  checked={formData.status === "resolvido"}
                  onChange={() => handleCheckboxChange("resolvido")}
                  crossOrigin={undefined}
                />
                <Checkbox
                  label="Aguardando"
                  color="purple"
                  checked={formData.status === "aguardando"}
                  onChange={() => handleCheckboxChange("aguardando")}
                  crossOrigin={undefined}
                />
                <Checkbox
                  label="Em aberto"
                  color="red"
                  checked={formData.status === "emAberto"}
                  onChange={() => handleCheckboxChange("emAberto")}
                  crossOrigin={undefined}
                />
              </div>
            </div>
            <div className="flex justify-center">
              <Button className="flex items-center gap-2 bg-limeyellow text-roxo" onClick={handleSave}> <Save/> Salvar</Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
