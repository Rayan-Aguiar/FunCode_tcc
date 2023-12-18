import { Link, useLocation } from "react-router-dom";
import HeaderAdmin from "../../components/header";
import Navigation from "../../components/navegation";
import { Button, Input, Spinner } from "@material-tailwind/react";
import { Eye, Plus, Search } from "lucide-react";
import { useEffect, useState } from "react";
import { API } from "../../../API/api";


export default function CoursesAdmin() {
  const location = useLocation();
  const currentPath = location.pathname;

  interface TableData {
    id: number;
    name: string;
    actived: boolean;
  }

  const [searchTerm, setSearchTerm] = useState<string>("");
  interface TableProps {
    data: TableData[];
  }
  const getStatusText = (isActive: boolean) => {
    return isActive ? 'Ativo' : 'Inativo';
  };

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
              <td className="p-1">{item.id}</td>
              <td className="p-1">{item.name}</td>
              <td className="p-1">{getStatusText(item.actived)}</td>
              <td className="p-1 flex justify-center">
                <Link to={`/admin/courses/edit/${item.id}`}>
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

  const [coursesData, setCoursesData] = useState<TableData[]>([]);
  const [loading, setLoading] = useState(false);
  

  const fetchCoursesData = async () => {
    try {
      setLoading(true);
      const response = await API.get('/courses');
      setCoursesData(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCoursesData();
  }, []);

 
  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-300 w-screen h-fit min-h-screen">
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
              <Button color="green" className="flex gap-2 items-center">
                <Plus /> Criar novo curso em vídeo
              </Button>
            </Link>
          </div>
        </div>
        <div className="bg-white w-full rounded-lg p-4">
          {loading ? (
            <div className="w-full h-full flex justify-center items-center">
              <Spinner className="h-8 w-8" color="blue" />
            </div>
          ) : (
            <Table
              data={coursesData.filter((item) =>
                item.name.toLowerCase().includes(searchTerm.toLowerCase())
              )}
            />
          )}
        </div>
      </main>
      
    </div>
  );
}
