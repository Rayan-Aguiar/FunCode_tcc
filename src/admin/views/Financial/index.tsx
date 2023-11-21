import { Typography } from "@material-tailwind/react";
import HeaderAdmin from "../../components/header";
import { useLocation } from "react-router-dom";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import faker from "faker";
import Navigation from "../../components/navegation";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export default function FinancialAdmin() {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Financeiro",
      },
    },
  };

  const labels = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
  ];

  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: "Alunos Pagantes",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
      {
        fill: true,
        label: "Alunos Bolsistas",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        borderColor: "#3F3047",
        backgroundColor: "rgba(139, 103, 159, 0.5)",
      },
    ],
  };
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-300 w-screen h-fit ">
      <HeaderAdmin />
      <Navigation currentPath={currentPath} />

      <main className="p-8">
        <div className="bg-white w-full h-96 rounded-lg flex justify-center">
          <Line className="" options={options} data={data} />
        </div>

        <div className="flex md:flex-row flex-col w-full justify-between items-center  mt-6">
          <div className="w-60 h-36 rounded-md bg-roxo-normal flex flex-col justify-center items-center gap-4">
            <Typography variant="span" className="text-zinc-50">
              Alunos pagantes total
            </Typography>
            <Typography variant="h3" className="text-zinc-50">
              300
            </Typography>
          </div>
          <div className="w-60 h-36 rounded-md bg-roxo-normal flex flex-col justify-center items-center gap-4">
            <Typography variant="span" className="text-zinc-50">
              Alunos Pagantes Ultimo mês
            </Typography>
            <Typography variant="h3" className="text-zinc-50">
              300
            </Typography>
          </div>
          <div className="w-60 h-36 rounded-md bg-roxo-normal flex flex-col justify-center items-center gap-4">
            <Typography variant="span" className="text-zinc-50">
              Alunos Bolsista Total
            </Typography>
            <Typography variant="h3" className="text-zinc-50">
              300
            </Typography>
          </div>
          <div className="w-60 h-36 rounded-md bg-roxo-normal flex flex-col justify-center items-center gap-4">
            <Typography variant="span" className="text-zinc-50">
              Alunos Bolsista Ultimo Mês
            </Typography>
            <Typography variant="h3" className="text-zinc-50">
              300
            </Typography>
          </div>
        </div>
      </main>
    </div>
  );
}
