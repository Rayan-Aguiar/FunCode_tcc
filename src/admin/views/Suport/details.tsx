import { useLocation, useParams } from "react-router-dom";
import HeaderAdmin from "../../components/header";
import { Button, Checkbox, Input, Typography } from "@material-tailwind/react";
import { Save, User2 } from "lucide-react";
import { useEffect, useState } from "react";
import Navigation from "../../components/navegation";
import { API } from "../../../API/api";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

interface FormData {
  description?: string,
  id?: number,
  name_student?: string,
  name_responsible?: string,
  email_responsible?: string,
  date?: number,
  status?: "aberto" | "resolvido" | "aguardando" ;
}



export default function SuportDetails() {
  const { id } = useParams();
  const [formData, setFormData] = useState<FormData>({});

  const handleCheckboxChange = (status: string) => {
    const newStatus = formData.status === status ? null : status;
    setFormData({ ...formData, status: newStatus as FormData["status"] });
  };

  const handleSave = async () => {
    try {
      
      await API.put(`/admin/support/${id}?status=${formData.status}`, 
              
      );
      console.log("Status enviado:", formData);
      toast.success("Status Atualizado com sucesso")
      setTimeout(() => {
        window.location.assign("/admin/suport")
      }, 1000);
    } catch (error) {
      console.error("Erro ao salvar:", error);
      toast.error("Erro ao atualizar status")
    }
  };

  const location = useLocation();
  const currentPath = location.pathname;

  useEffect(() => {
    const fetchSupportDetails = async () => {
      try {
        
          const response = await API.get(`/admin/support/${id}`);
          const data = response.data; 
          console.log(response.data)
          setFormData(response.data);

        
      } catch (error) {
        console.error("Erro ao buscar detalhes de suporte:", error);
      }
    };
  
    fetchSupportDetails();
  }, [id]);

  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-300 w-screen md:h-screen h-fit ">
      <HeaderAdmin />
      <Navigation currentPath={currentPath} />
      <main className="p-8 flex justify-between w-full gap-4">
        <div className="bg-white w-1/5 h-60 rounded-lg flex flex-col justify-center items-center gap-4">
          <User2 className="w-24 h-24" />        
          
          <Typography variant="span" className="font-bold">
            {formData.name_student}
          </Typography>
          </div>
        <div className="bg-white w-4/5 h-fit rounded-lg flex items-center p-4 flex-col">
          <Typography variant="h4">Solicitação</Typography>
          <div className="gap-8 flex flex-col mt-8">
            <Typography variant="paragraph">
              {formData.description }
            </Typography>
            <Input
              label="Email do Responsavel"
              name="nomeResponsavel"
              value={formData.email_responsible}
              readOnly
              crossOrigin={undefined}
            />
            <div>
              <Typography>Status da Solicitação</Typography>
              <div className="flex gap-4">
                <Checkbox
                  label="Resolvido"
                  color="green"
                  checked={formData.status === "resolvido"}
                  onChange={() => handleCheckboxChange("resolvido")}
                  crossOrigin={undefined}
                />
                <Checkbox
                  label="Aguardando"
                  color="purple"
                  checked={formData.status === "aguardando"}
                  onChange={() => handleCheckboxChange("aguardando")}
                  crossOrigin={undefined}
                />
                <Checkbox
                  label="Em aberto"
                  color="red"
                  checked={formData.status === "aberto"}
                  onChange={() => handleCheckboxChange("aberto")}
                  crossOrigin={undefined}
                />
              </div>
            </div>
            <div className="flex justify-center">
              <Button
                className="flex items-center gap-2 bg-limeyellow text-roxo"
                onClick={handleSave}
              >
                
                <Save /> Salvar
              </Button>
            </div>
          </div>
        </div>
      </main>
      <ToastContainer />
    </div>
  );
}
