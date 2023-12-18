import { Link, useLocation } from "react-router-dom";
import HeaderAdmin from "../../components/header";
import { Button, Input, Spinner } from "@material-tailwind/react";
import {
  Eye,
  Plus,
  Search,
} from "lucide-react";
import { useEffect, useState } from "react";
import Navigation from "../../components/navegation";
import { API } from "../../../API/api";


interface TableData {
  id: number;
  name: string;
  name_responsible: string;
  scholarship_holder: boolean;
}

interface TableProps {
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
                  <tr key={index} className="border-b text-center">
                      <td className="p-1">{item.id}</td>
                      <td className="p-1">{item.name}</td>
                      <td className="p-1">{item.name_responsible}</td>
                      <td className="p-1"> {item.scholarship_holder ? "Bolsista" : "Pagante"}</td>
                      <td className="p-1 flex justify-center">
                      <Link to={`/admin/students/edit/${item.id}`}>
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


export default function Students() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [studentsData, setStudentsData] = useState<TableData[]>([]);

  const fetchStudentsData = async () => {
    try {
      setLoading(true);
      const response = await API.get('/admin/students');
      setStudentsData(response.data); 
      setLoading(false);
    } catch (error) {
      console.error("Erro ao buscar os alunos:", error);
      setLoading(false);
    }
  };
  
  useEffect(() => {
    fetchStudentsData();
  }, []);

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
          {loading ? (
            <div className="w-full h-full flex justify-center items-center">
              <Spinner className="h-8 w-8" color="blue"/>

            </div>
            ) : (
              <Table
                data={studentsData.filter(
                  (item) =>
                    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    item.name_responsible.toLowerCase().includes(searchTerm.toLowerCase())
                )}
              />
            )}
        </div>
      </main>
    </div>
  );
}
