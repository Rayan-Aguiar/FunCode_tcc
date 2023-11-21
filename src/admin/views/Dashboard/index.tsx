import {
  
  GraduationCap,
  HelpCircle,
  Landmark,
  
} from "lucide-react";
import CardAdmin from "../../components/card";
import { useLocation } from "react-router-dom";

import HeaderAdmin from "../../components/header";
import Navigation from "../../components/navegation";

export default function Dashboard() {
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-300 w-screen h-fit ">
      <HeaderAdmin />
      <Navigation currentPath={currentPath}/>
      
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
