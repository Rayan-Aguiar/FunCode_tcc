import { GraduationCap, HelpCircle, Landmark } from "lucide-react";
import CardAdmin from "../../components/card";
import { useLocation } from "react-router-dom";

import HeaderAdmin from "../../components/header";
import Navigation from "../../components/navegation";
import { useEffect, useState } from "react";
import { API } from "../../../API/api";


const formatToCurrency = (value) => {
  const floatValue = parseFloat(value);
  if (!isNaN(floatValue)) {
    return `R$ ${floatValue.toFixed(2).replace('.', ',')}`;
  }
  return 'R$ 0,00';
};

export default function Dashboard() {
  const location = useLocation();
  const currentPath = location.pathname;

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await API.get("/admin/dashboard");
        setData(response.data);
      } catch (error) {
        console.error("Erro ao buscar dados da API:", error.message);
      } 
    };

    fetchData();
  }, []);

  const studentsPriceInBRL = () => {
    const students = data.students || 0;
    const studentsInBRL = students * 200;
    return formatToCurrency(studentsInBRL);
  };


  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-300 w-screen min-h-screen h-fit ">
      <HeaderAdmin />
      <Navigation currentPath={currentPath} />

      <main className="flex items-center justify-center flex-col p-8">
        <div className="flex flex-col md:flex-row justify-around w-full items-center gap-8">
          <CardAdmin
            icon={GraduationCap}
            title="Alunos cadastrados"
            description={data.students}
          />

          <CardAdmin
            icon={GraduationCap}
            title="Bolsistas"
            description={data.scholarship_holder}
          />
          <CardAdmin
            icon={HelpCircle}
            title="Suportes em aberto"
            description={data.supports}
          />

          <CardAdmin
            icon={Landmark}
            title="Faturamento Mensal"
            description={studentsPriceInBRL()}
          />
        </div>
      </main>
    </div>
  );
}
