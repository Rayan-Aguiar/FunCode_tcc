import { Link, useLocation } from "react-router-dom";
import HeaderAdmin from "../../components/header";
import Navigation from "../../components/navegation";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Input,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import { FileImage, FileUp, Plus, Trash } from "lucide-react";
import { useState } from "react";

export default function EditCourse() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const location = useLocation();
  const currentPath = location.pathname;
  const adicionarAula = () => {
    setAulas([...aulas, { nome: "", linkVideo: "", descricao: "" }]);
  };

  const removerAula = (index: number) => {
    const newAulas = [...aulas];
    newAulas.splice(index, 1);
    setAulas(newAulas);
  };

  const [imagemPreview, setImagemPreview] = useState<string | undefined>(
    undefined
  );
  const [imagemBase64, setImagemBase64] = useState<string | undefined>(
    undefined
  );
  const [aulas, setAulas] = useState<Array<any>>([
    { nome: "", linkVideo: "", descricao: "" },
  ]);
  const [formData, setFormData] = useState<any>({
    nomeCursos: "",
  });

  const handleFileInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === "string") {
          setImagemPreview(reader.result);
          setImagemBase64(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAulaInputChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    const newAulas = [...aulas];
    newAulas[index][name] = value;
    setAulas(newAulas);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const dadosCurso: any = {
      nomeCurso: formData.nomeCursos,
      imagemBase64,
    };

    if (aulas.some((aula) => aula.nome || aula.linkVideo || aula.descricao)) {
      dadosCurso.aulas = aulas.filter(
        (aula) => aula.nome || aula.linkVideo || aula.descricao
      );
    }

    console.log("Dados do Curso:");
    console.log(dadosCurso);
  };
  const data: TableData[] = [
    {
      codigo: 1,
      nomeCurso: "HTML Básico",
      tipoCurso: "PDF",
      status: "Ativo",
    },
    {
      codigo: 2,
      nomeCurso: "CSS Básico",
      tipoCurso: "Video",
      status: "Inativo",
    },
    {
      codigo: 3,
      nomeCurso: "JavaScript Básico",
      tipoCurso: "PDF",
      status: "Ativo",
    },
  ];

  const primeiroCurso = data[0];

  const idDoCurso = primeiroCurso.codigo;

  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-300 w-screen h-fit ">
      <HeaderAdmin />
      <Navigation currentPath={currentPath} />

      <main className="p-8">
        <div className="flex justify-between">
          <div className="flex">
            <Typography variant="h2">Editar curso</Typography>
          </div>
          <div className="flex items-center gap-2">
            <Link to={`/admin/courses/${idDoCurso}/add-pdf`}>
              <Button color="green" className="flex gap-2 items-center">
                <FileUp /> Material Complementar
              </Button>
            </Link>
            <Link to={`/admin/courses/${idDoCurso}/quiz`}>
              <Button color="green" className="flex gap-2 items-center">
                <FileUp /> Questionário
              </Button>
            </Link>
            
            <Button
              color="red"
              onClick={handleOpen}
              className="flex items-center gap-2"
            >
              <Trash /> Excluir curso?
            </Button>
            <Dialog open={open} handler={handleOpen}>
              <DialogHeader>Tem certeza?</DialogHeader>
              <DialogBody>
                Após a exclusão, não será possivel recuperar os dados do curso.
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
        </div>

        <div className="mt-8 w-full h-fit flex flex-col gap-4">
          <Input
            type="text"
            name="nomeCursos"
            label="Nome do Curso"
            crossOrigin={undefined}
            onChange={handleInputChange}
          />
          <div className="flex gap-24 items-center justify-center">
            <label
              htmlFor="fileInput"
              className="bg-roxo p-2 rounded-md cursor-pointer hover:bg-roxo-normal duration-150 w-40 h-10 flex justify-center items-center text-limeyellow "
            >
              Alterar foto
            </label>
            <input
              type="file"
              id="fileInput"
              onChange={handleFileInputChange}
              accept=".jpg, .jpeg, .png"
              multiple
              className="hidden"
            />
            <div className="w-80 h-52 rounded-md border-4 border-stone-500 border-dashed p-4 flex justify-center items-center overflow-hidden object-cover object-center">
              {imagemPreview ? (
                <img
                  src={imagemPreview}
                  alt="Foto Capa"
                  className="object-cover object-center rounded-md"
                />
              ) : (
                <FileImage className="text-zinc-500" />
              )}
            </div>
          </div>
          <div className="border-t-2 border-zinc-500/20">
            <Typography variant="h3">Aulas</Typography>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col items-center">
                {aulas.map((aula, index) => (
                  <div className="w-full mt-4 animate-slide-down" key={index}>
                    <div className="flex items-center justify-between">
                      <Typography variant="h5">Aula {index + 1}</Typography>
                      <Trash
                        className="text-red-500 cursor-pointer hover:rotate-12 duration-150"
                        onClick={() => removerAula(index)}
                      />
                    </div>
                    <div className="flex w-full gap-2">
                      <Input
                        type="text"
                        label="Nome da aula"
                        name="nome"
                        value={aula.nome}
                        onChange={(e) => handleAulaInputChange(index, e)}
                        crossOrigin={undefined}
                      />
                      <Input
                        type="text"
                        label="Link do video"
                        name="linkVideo"
                        value={aula.linkVideo}
                        onChange={(e) => handleAulaInputChange(index, e)}
                        crossOrigin={undefined}
                      />
                      <Textarea
                        label="Descrição da aula"
                        name="descricao"
                        value={aula.descricao}
                        onChange={(e) => handleAulaInputChange(index, e)}
                      />
                    </div>
                  </div>
                ))}
                <Button
                  className="bg-roxo text-limeyellow flex gap-2 items-center hover:bg-roxo-normal duration-15"
                  onClick={adicionarAula}
                >
                  <Plus /> Adicionar aula
                </Button>
              </div>
              <div className="border-t-2 border-zinc-500/20 mt-8 flex justify-center">
                <Button
                  color="green"
                  type="submit"
                  className="mt-4 text-zinc-800 hover:-translate-y-1 duration-300"
                >
                  Salvar
                </Button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
