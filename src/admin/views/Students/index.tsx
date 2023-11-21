import { Link } from "react-router-dom";
import HeaderAdmin from "../../components/header";
import { Button, Input, Typography } from "@material-tailwind/react";
import {
  Coins,
  Eye,
  GraduationCap,
  HelpCircle,
  PieChart,
  Plus,
  Search,
} from "lucide-react";

export default function Students() {
    interface TableData{
        codigo: number;
        nomeAluno: string;
        nomeResponsavel: string;
        status: string;
    }
    interface TableProps{
        data: TableData[];
    }

    const Table: React.FC<TableProps> = ({ data }) =>{
        return(
            <table className="w-full">
                <thead className="">
                    <tr className="">
                        <th className="p-2">Código</th>
                        <th className="p-2">Nome do Aluno</th>
                        <th className="p-2">Nome do Responsável</th>
                        <th className="p-2">Status</th>
                        <th className="p-2">Opções</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) =>(
                        <tr key={index} className="border-b">
                            <td className="p-1">{item.codigo}</td>
                            <td className="p-1">{item.nomeAluno}</td>
                            <td className="p-1">{item.nomeResponsavel}</td>
                            <td className="p-1">{item.status}</td>
                            <td className="p-1">
                                <Button size="sm" color="gray" className="flex items-center gap-2"><Eye/> Visualizar</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )
    }

    const data: TableData[]=[
        {
            codigo: 1,
            nomeAluno: 'João Pedro',
            nomeResponsavel: 'Maria',
            status: 'Bolsista'
        },
        {
            codigo: 2,
            nomeAluno: 'Pedro',
            nomeResponsavel: 'Joaquim',
            status: 'Pagante'
        },
        {
            codigo: 3,
            nomeAluno: 'Rayan',
            nomeResponsavel: 'Valdeck',
            status: 'Bolsista'
        }
    ]
  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-300 w-screen h-fit ">
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
        <Link to="/admin/classes">
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
        <div className="flex w-full items-center justify-between">
          <div className="w-96">
            <Input
              type="text"
              label="Buscar aluno(a)"
              icon={<Search />}
              crossOrigin={undefined}
            />
          </div>

          <div>
            <Link to="/admin/students/add">
                <Button color="green" className="flex gap-2 items-center">
                Novo Aluno <Plus />
                </Button>
            </Link>
          </div>
        </div>

        <div className="bg-white w-full h-96 rounded-lg mt-6 overflow-auto">
            <Table data={data} />
        </div>
      </main>
    </div>
  );
}
