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
import { useLocation } from "react-router-dom";
import HeaderAdmin from "../../components/header";
import { useEffect, useState } from "react";
import Navigation from "../../components/navegation";

interface FormData {
  nomeAluno: string;
  nomeResponsavel: string;
  emailAluno: string;
  emailResponsavel: string;
  cpf: string;
  nasc: string;
  cep: string;
  cidade: string;
  end: string;
  uf: string;
  bolsa: boolean;
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
      nomeAluno: "João Batista",
      nomeResponsavel: "Maria João",
      emailAluno: "teste@teste.com",
      emailResponsavel: "teste@teste.com",
      cpf: "123456789-41",
      nasc: "20/10/2015",
      cep: "26657-480",
      cidade: "Rio de Janeiro",
      end: "Rua sem nome, nº 8",
      uf: "RJ",
      bolsa: true,
    },
  ];

  const [formData, setFormData] = useState<FormData>({
    nomeAluno: "",
    nomeResponsavel: "",
    emailAluno: "",
    emailResponsavel: "",
    cpf: "",
    nasc: "",
    cep: "",
    cidade: "",
    end: "",
    uf: "",
    bolsa: false,
  });

  useEffect(() => {
    if (data.length > 0) {
      const initialData = data[0];
      setFormData({ ...initialData });
      if (initialData.bolsa) {
        setFormData((prevFormData) => ({
          ...prevFormData,
          bolsa: initialData.bolsa,
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
              João Batista
            </Typography>
          </div>
          <div className="w-full bg-white h-fit p-2 rounded-lg flex justify-center items-center">
            <Checkbox
              label="Conceder bolsa?"
              color="green"
              checked={formData.bolsa}
              onChange={handleCheckboxChange}
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
              <Button variant="text" color="red" onClick={handleOpen}>
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
                name="nomeAluno"
                required
                crossOrigin={undefined}
                onChange={handleInputChange}
                value={formData.nomeAluno}
              />
              <Input
                label="Nome do Responsável(a)"
                name="nomeResponsavel"
                required
                crossOrigin={undefined}
                onChange={handleInputChange}
                value={formData.nomeResponsavel}
              />
              <div className="flex items-center w-full gap-4">
                <Input
                  label="Email do Aluno"
                  name="emailAluno"
                  required
                  type="email"
                  crossOrigin={undefined}
                  onChange={handleInputChange}
                  value={formData.emailAluno}
                />
                <Input
                  label="Email do Responsável"
                  name="emailResponsavel"
                  required
                  type="email"
                  crossOrigin={undefined}
                  onChange={handleInputChange}
                  value={formData.emailResponsavel}
                />
              </div>
              <div className="flex items-center w-full gap-4">
                <Input
                  label="CPF do responsável"
                  name="cpf"
                  required
                  type="text"
                  crossOrigin={undefined}
                  onChange={handleInputChange}
                  value={formData.cpf}
                />
                <Input
                  label="Data de Nasc. do aluno"
                  name="nasc"
                  required
                  type="text"
                  crossOrigin={undefined}
                  onChange={handleInputChange}
                  value={formData.nasc}
                />
              </div>
              <div className="flex items-center w-full gap-4">
                <Input
                  label="CEP"
                  name="cep"
                  required
                  type="text"
                  crossOrigin={undefined}
                  onChange={handleInputChange}
                  value={formData.cep}
                />
                <Input
                  label="Cidade"
                  name="cidade"
                  required
                  type="text"
                  crossOrigin={undefined}
                  onChange={handleInputChange}
                  value={formData.cidade}
                />
              </div>
              <div className="flex items-center w-full gap-4">
                <div className="w-4/5">
                  <Input
                    label="Endereço"
                    name="end"
                    required
                    type="text"
                    crossOrigin={undefined}
                    onChange={handleInputChange}
                    value={formData.end}
                  />
                </div>
                <div className="w-1/5">
                  <Select
                    label="UF"
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                      handleSelectChange(e)
                    }
                    value={formData.uf}
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
    </div>
  );
}
