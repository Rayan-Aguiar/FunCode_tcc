import { Link, useLocation } from "react-router-dom";
import HeaderAdmin from "../../components/header";
import Navigation from "../../components/navegation";
import { Button, Input } from "@material-tailwind/react";
import { Eye, Plus, Search } from "lucide-react";
import { useState } from "react";

export default function CoursesAdmin() {
  const location = useLocation();
  const currentPath = location.pathname;

  interface TableData {
    codigo: number;
    nomeCurso: string;
    status: "Ativo" | "Inativo" | null;
  }
  const [searchTerm, setSearchTerm] = useState<string>("");
  interface TableProps {
    data: TableData[];
  }

  const Table: React.FC<TableProps> = ({ data }) => {
    return (
      <table className="w-full">
        <thead className="">
          <tr className="">
            <th className="p-2">Código</th>
            <th className="p-2">Nome do Curso</th>
            
            <th className="p-2">Status</th>
            <th className="p-2">Opções</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="border-b text-center">
              <td className="p-1">{item.codigo}</td>
              <td className="p-1">{item.nomeCurso}</td>
             
              <td className="p-1">{item.status}</td>
              <td className="p-1 flex justify-center">
                <Link to={`/admin/courses/edit/${item.codigo}`}>
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
    );
  };

  const data: TableData[] = [
    {
      codigo: 1,
      nomeCurso: "HTML Básico",
      
      status: "Ativo",
    },
    {
      codigo: 2,
      nomeCurso: "CSS Básico",
     
      status: "Inativo",
    },
    {
      codigo: 3,
      nomeCurso: "JavaScript Básico",
      
      status: "Ativo",
    },
  ];
  return (
      <div className="bg-gradient-to-br from-gray-100 to-gray-300 w-screen h-fit min-h-screen ">
        <HeaderAdmin />
        <Navigation currentPath={currentPath} />
        <main className="p-8">
          <div className="flex justify-between items-center mb-8">
            <div className="w-96">
              <Input
                type="text"
                label="Buscar Curso"
                className="bg-white"
                icon={<Search />}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                crossOrigin={undefined}
              />
            </div>
            <div className="flex gap-2">
              <Link to="/admin/courses/add">
                <Button color="green" className="flex gap-2 items-center"><Plus /> Criar novo curso em video</Button>
              </Link>              
            </div>

          </div>
          <div className="bg-white w-full rounded-lg p-4">
            <Table
              data={data.filter((item) =>
                item.nomeCurso.toLowerCase().includes(searchTerm.toLowerCase())
              )}
            />
          </div>
        </main>
      </div>

  );
}
