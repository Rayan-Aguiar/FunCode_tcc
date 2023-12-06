import {
  Button,
  Checkbox,
  Input,
  Select,
  Typography,
  Option,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { Eraser, Save, User2 } from "lucide-react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import HeaderAdmin from "../../components/header";
import { useEffect, useState } from "react";
import Navigation from "../../components/navegation";
import { API } from "../../../API/api";
import { ToastContainer, toast } from "react-toastify";

interface FormData {
  name: string;
  name_responsible: string;
  email: string;
  email_responsible: string;
  cpf_responsible: string;
  birth: string;
  zip_code: string;
  city: string;
  address: string;
  state: string;
  scholarship_holder: boolean;
}

export default function EditStudent() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  const estados = {
    "": "",
    AC: "Acre",
    AL: "Alagoas",
    AM: "Amazonas",
    AP: "Amapá",
    BA: "Bahia",
    CE: "Ceará",
    DF: "Distrito Federal",
    ES: "Espírito Santo",
    GO: "Goiás",
    MA: "Maranhão",
    MG: "Minas Gerais",
    MS: "Mato Grosso do Sul",
    MT: "Mato Grosso",
    PA: "Pará",
    PB: "Paraíba",
    PE: "Pernambuco",
    PI: "Piauí",
    PR: "Paraná",
    RJ: "Rio de Janeiro",
    RN: "Rio Grande do Norte",
    RO: "Rondônia",
    RR: "Roraima",
    RS: "Rio Grande do Sul",
    SC: "Santa Catarina",
    SE: "Sergipe",
    SP: "São Paulo",
    TO: "Tocantins",
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const data = [
    {
      name: "João Batista",
      name_responsible: "Maria João",
      email: "teste@teste.com",
      email_responsible: "teste@teste.com",
      cpf_responsible: "123456789-41",
      birth: "20/10/2015",
      zip_code: "26657-480",
      city: "Rio de Janeiro",
      address: "Rua sem nome, nº 8",
      state: "RJ",
      scholarship_holder: true,
    },
  ];

  const [formData, setFormData] = useState<FormData>({
    name: "",
    name_responsible: "",
    email: "",
    email_responsible: "",
    cpf_responsible: "",
    birth: "",
    zip_code: "",
    city: "",
    address: "",
    state: "",
    scholarship_holder: false,
  });

  useEffect(() => {
    if (data.length > 0) {
      const initialData = data[0];
      setFormData({ ...initialData });
      if (initialData.scholarship_holder) {
        setFormData((prevFormData) => ({
          ...prevFormData,
          bolsa: initialData.scholarship_holder,
        }));
      }
    }
  }, [data]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    if (name) {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData({ ...formData, [name]: checked });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.table([formData]);
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const [studentData, setStudentData] = useState<FormData | null>(null);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    async function fetchStudentData() {
      try {
        const response = await API.get(`/admin/students/${id}`); 

        if (response.status === 200) {
          const fetchedStudentData = response.data;
          setStudentData(fetchedStudentData);
        }
      } catch (error) {
        console.error('Erro ao buscar dados do aluno:', error);
      }
    }

    fetchStudentData();
  }, [id]);

  const handleDelete = async () => {
    try {
      const response = await API.delete(`/admin/students/${id}`);

      if (response.status === 200) {
        console.log("Aluno excluído com sucesso!");
        toast.success("Aluno excluído com sucesso!");
        window.location.assign("/admin/students");
      }
    } catch (error) {
      console.error("Erro ao excluir aluno:", error);
      toast.error("Erro ao excluir aluno");
    }
  };

  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-300 w-screen h-screen ">
      <HeaderAdmin />
      <Navigation currentPath={currentPath} />
      <main className="p-8 flex justify-between w-full gap-4">
        <div className="w-1/5 flex flex-col gap-4">
          <div className="bg-white w-full h-60 rounded-lg flex flex-col justify-center items-center gap-4">
            <User2 className="w-24 h-24" />
            <Typography variant="span" className="font-bold">
              {studentData?.name}
            </Typography>
          </div>
          <div className="w-full bg-white h-fit p-2 rounded-lg flex justify-center items-center">
            <Checkbox
              label="Conceder bolsa?"
              color="green"
              checked={formData.scholarship_holder}
              onChange={handleCheckboxChange}
              value={studentData?.scholarship_holder}
              crossOrigin={undefined}
            />
          </div>
          <Button
            color="red"
            className="w-full h-fit flex items-center gap-2 justify-center"
            onClick={handleOpen}
          >
            <Eraser /> Excluir aluno?
          </Button>

          <Dialog open={open} handler={handleOpen}>
            <DialogHeader>Tem certeza?</DialogHeader>
            <DialogBody>
              Após a exclusão, não será possivel recuperar os dados do aluno.
            </DialogBody>
            <DialogFooter>
              <Button
                variant="text"
                color="green"
                onClick={handleOpen}
                className="mr-1"
              >
                Cancelar
              </Button>
              <Button variant="text" color="red" onClick={() => { handleDelete(); handleOpen(); }}>
                Confirmar
              </Button>

            </DialogFooter>
          </Dialog>
        </div>

        <div className="bg-white w-4/5 h-fit rounded-lg flex items-center p-4 flex-col">
          <form
            action="POST"
            onSubmit={handleSubmit}
            className="flex flex-col justify-center items-center w-full"
          >
            <Typography variant="h4" color="blue-gray">
              Editar aluno
            </Typography>
            <div className="mt-4 w-full flex flex-col gap-2">
              <Input
                label="Nome do Aluno(a)"
                name="name"
                required
                crossOrigin={undefined}
                onChange={handleInputChange}
                value={studentData?.name}
              />
              <Input
                label="Nome do Responsável(a)"
                name="name_responsible"
                required
                crossOrigin={undefined}
                onChange={handleInputChange}
                value={studentData?.name_responsible}
              />
              <div className="flex items-center w-full gap-4">
                <Input
                  label="Email do Aluno"
                  name="email"
                  required
                  type="email"
                  crossOrigin={undefined}
                  onChange={handleInputChange}
                  value={studentData?.email}
                />
                <Input
                  label="Email do Responsável"
                  name="email_responsible"
                  required
                  type="email"
                  crossOrigin={undefined}
                  onChange={handleInputChange}
                  value={studentData?.email_responsible}
                />
              </div>
              <div className="flex items-center w-full gap-4">
                <Input
                  label="cpf_responsible do responsável"
                  name="cpf_responsible"
                  required
                  type="text"
                  crossOrigin={undefined}
                  onChange={handleInputChange}
                  value={studentData?.cpf_responsible}
                />
                <Input
                  label="Data de birth. do aluno"
                  name="birth"
                  required
                  type="text"
                  crossOrigin={undefined}
                  onChange={handleInputChange}
                  value={studentData?.birth}
                />
              </div>
              <div className="flex items-center w-full gap-4">
                <Input
                  label="zip_code"
                  name="zip_code"
                  required
                  type="text"
                  crossOrigin={undefined}
                  onChange={handleInputChange}
                  value={studentData?.zip_code}
                />
                <Input
                  label="city"
                  name="city"
                  required
                  type="text"
                  crossOrigin={undefined}
                  onChange={handleInputChange}
                  value={studentData?.city}
                />
              </div>
              <div className="flex items-center w-full gap-4">
                <div className="w-4/5">
                  <Input
                    label="addressereço"
                    name="address"
                    required
                    type="text"
                    crossOrigin={undefined}
                    onChange={handleInputChange}
                    value={studentData?.address}
                  />
                </div>
                <div className="w-1/5">
                  <Select
                    label="state"
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                      handleSelectChange(e)
                    }
                    value={formData.state}
                    animate={{
                      mount: { y: 0 },
                      unmount: { y: 25 },
                    }}
                  >
                    {Object.entries(estados).map(([uf]) => (
                      <Option key={uf} value={uf}>
                        {uf}
                      </Option>
                    ))}
                  </Select>
                </div>
              </div>
              <div className="flex items-center justify-center gap-12">
                <Button
                  type="submit"
                  className="bg-limeyellow text-roxo flex gap-2 items-center"
                >
                  Salvar <Save />
                </Button>
              </div>
            </div>
          </form>
        </div>
      </main>
      <ToastContainer />
    </div>
  );
}
