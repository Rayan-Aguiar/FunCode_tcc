import { Typography } from "@material-tailwind/react";
import {
  Coins,
  GraduationCap,
  HelpCircle,
  Landmark,
  PieChart,
} from "lucide-react";
import CardAdmin from "../../components/card";
import { Link } from "react-router-dom";

import HeaderAdmin from "../../components/header";

export default function Dashboard() {
  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-300 w-screen h-fit ">
      <HeaderAdmin />
      <nav className="w-full h-10 bg-roxo flex items-center px-10 gap-8">
        <Link to="/admin/dashboard">
          <Typography className="text-zinc-50 font-semibold bg-roxo-light w-fit h-full flex items-center gap-2 p-2">
            <PieChart className="text-limeyellow" /> Dashboard
          </Typography>
        </Link>
        <Link to="/admin/students">
          <Typography className="text-zinc-50 font-semibold w-fit h-full flex items-center gap-2 p-2">
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
      <main className="flex items-center justify-center flex-col">
        <div className="grid grid-cols-4 md:flex-row justify-around items-center p-8 w-11/12 gap-8">
          <CardAdmin
            icon={GraduationCap}
            title="Alunos cadastrados"
            description={300}
          />

          <CardAdmin icon={GraduationCap} title="Bolsistas" description={10} />
          <CardAdmin
            icon={HelpCircle}
            title="Suportes em aberto"
            description="R$ 1200,00"
          />

          <CardAdmin
            icon={Landmark}
            title="Faturamento Mensal"
            description="R$ 1200,00"
          />

          <CardAdmin
            icon={Landmark}
            title="Faturamento Total"
            description="R$ 1200,00"
          />
          <CardAdmin
            icon={Landmark}
            title="Faturamento Mensal"
            description="R$ 1200,00"
          />
          <CardAdmin
            icon={Landmark}
            title="Faturamento Mensal"
            description="R$ 1200,00"
          />
          <CardAdmin
            icon={Landmark}
            title="Faturamento Mensal"
            description="R$ 1200,00"
          />
        </div>
      </main>
    </div>
  );
}
