import { Link, useLocation } from "react-router-dom";
import HeaderAdmin from "../../components/header";
import { Button, Input } from "@material-tailwind/react";
import {
  Eye,
  Plus,
  Search,
} from "lucide-react";
import { useState } from "react";
import Navigation from "../../components/navegation";

export default function Students() {
  const [searchTerm, setSearchTerm] = useState<string>(''); 
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
                            <Link to={`/admin/students/edit/${item.codigo}`}>
                              <Button
                                size="sm"
                                color="gray"
                                className="flex items-center gap-2"
                              >
                                <Eye /> Visualizar
                              </Button>
                            </Link>
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
    const location = useLocation();
  const currentPath = location.pathname;
  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-300 w-screen min-h-screen h-fit ">
      <HeaderAdmin />
      <Navigation currentPath={currentPath}/>

      <main className="p-8">
        <div className="flex w-full items-center justify-between">
          <div className="w-96">
            <Input
              type="text"
              label="Buscar aluno(a)"
              icon={<Search />}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
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
            <Table data={data.filter(
              (item) =>
                item.nomeAluno.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.nomeResponsavel.toLowerCase().includes(searchTerm.toLowerCase())
            )} />
        </div>
      </main>
    </div>
  );
}
