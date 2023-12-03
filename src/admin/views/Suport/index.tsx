import { Link, useLocation } from "react-router-dom";
import HeaderAdmin from "../../components/header";
import { Button, Input, Spinner } from "@material-tailwind/react";
import { Eye, Search } from "lucide-react";
import { useEffect, useState } from "react";
import Navigation from "../../components/navegation";
import { API } from "../../../API/api";

export default function SuportAdmin() {
  interface TableData {
    id: number;
    name_student: string;
    name_responsible: string;
    date: number;
    status: string;
  }

  const [searchTerm, setSearchTerm] = useState<string>('');
  interface TableProps {
    data: TableData[];
  }
  const formatDate = (timestamp: number): string => {
    const date = new Date(timestamp * 1000); 
    const formattedDate = date.toLocaleDateString(); 
    return formattedDate;
  };

  const Table: React.FC<TableProps> = ({ data }) => {
    return (
      <table className="w-full table-auto">
        <thead className="">
          <tr className="">
            <th className="p-2">Código</th>
            <th className="p-2">Nome do Aluno</th>
            <th className="p-2">Nome do Responsável</th>
            <th className="p-2">Data do solicitação</th>
            <th className="p-2">Status</th>
            <th className="p-2">Opções</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="border-b text-center">
              <td className="p-1">{item.id}</td>
              <td className="p-1">{item.name_student}</td>
              <td className="p-1">{item.name_responsible}</td>
              <td className="p-1">{formatDate(item.date)}</td>
              <td className="p-1">{item.status}</td>
              <td className="p-1 flex justify-center">
                <Link  to={`/admin/suport/${item.id}`} >
                  <Button
                    size="sm"
                    color="gray"
                    className="flex items-center gap-2 justify-center "
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

  
  const [suportData, setSuportData] = useState<TableData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchSuportData = async () => {
    try {
      setLoading(true);
      const response = await API.get('/admin/support');
      setSuportData(response.data); 
      setLoading(false);
    } catch (error) {
      console.error("Erro ao buscar Suportes:", error);
      setLoading(false);
    }
  };
  
  useEffect(() => {
    fetchSuportData();
  }, []);

  const location = useLocation();
  const currentPath = location.pathname;
  
  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-300 w-screen h-screen ">
      <HeaderAdmin />
      <Navigation currentPath={currentPath}/>
      <main className="p-8">
        <div className="w-96 mb-8">
          <Input
            type="text"
            label="Buscar aluno(a)"
            className="bg-white"
            icon={<Search />}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            crossOrigin={undefined}
          />
        </div>
        <div className="bg-white w-full h-96 rounded-lg mt-6 overflow-auto">
          {loading ? (
            <div className="w-full h-full flex justify-center items-center">
              <Spinner className="h-8 w-8" color="blue"/>
            </div>
          ) : (
            <Table
              data={suportData.filter(
                (item) =>
                  item.name_student.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  item.name_responsible.toLowerCase().includes(searchTerm.toLowerCase())
              )}
            />
          )}
        </div>
      </main>
    </div>
  );
}
