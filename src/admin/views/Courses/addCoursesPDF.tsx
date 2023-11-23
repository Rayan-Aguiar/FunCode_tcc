import { useLocation } from "react-router-dom";
import HeaderAdmin from "../../components/header";
import Navigation from "../../components/navegation";
import { Button, Input, Textarea, Typography } from "@material-tailwind/react";
import { FileImage, Plus, Trash } from "lucide-react";
import { useState } from "react";

export default function AddCoursePDF() {
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
  
  
    const [imagemPreview, setImagemPreview] = useState<string | undefined>(undefined);
    const [imagemBase64, setImagemBase64] = useState<string | undefined>(undefined);
    const [aulas, setAulas] = useState<Array<any>>([
      { nome: "", linkVideo: "", descricao: "" },
    ]);
    const [formData, setFormData] = useState<any>({
      nomeCursos: "",
    });
  
    const handleFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
  
      if (aulas.some(aula => aula.nome || aula.linkVideo || aula.descricao)) {
        dadosCurso.aulas = aulas.filter(aula => aula.nome || aula.linkVideo || aula.descricao);
      }
  
      console.log("Dados do Curso:");
      console.log(dadosCurso);
    };
  
    return (
      <div className="bg-gradient-to-br from-gray-100 to-gray-300 w-screen h-fit ">
        <HeaderAdmin />
        <Navigation currentPath={currentPath} />
  
        <main className="p-8">
          <Typography variant="h2">Criar curso</Typography>
  
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
                Enviar foto
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
                <Button className="bg-roxo text-limeyellow flex gap-2 items-center hover:bg-roxo-normal duration-15" onClick={adicionarAula}><Plus /> Adicionar aula</Button>
              </div>
              <div className="border-t-2 border-zinc-500/20 mt-8 flex justify-center">
                  <Button color="green" type="submit" className="mt-4 text-zinc-800 hover:-translate-y-1 duration-300">Cadastrar Curso</Button>
  
              </div>
              </form>
            </div>
          </div>
        </main>
      </div>
  );
}
