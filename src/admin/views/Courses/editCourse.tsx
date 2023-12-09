import { Link, useLocation, useParams } from "react-router-dom";
import HeaderAdmin from "../../components/header";
import Navigation from "../../components/navegation";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Input,
  Spinner,
  Switch,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import { FileImage, FileUp, Plus, Trash } from "lucide-react";
import { useEffect, useState } from "react";
import { API } from "../../../API/api";
import { ToastContainer, toast } from "react-toastify";


interface formData {
  name: string;
  image: string;
  actived: boolean;
  classes?: [{
    name: string,
    description: string,
    link: string,
  }]
}

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
    name: "",
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

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    
    const dadosCurso: any = {
      name: formData.name,
      image: imagemBase64,
      classes: aulas,
    };

    try {
      
      const response = await API.put(`/admin/courses/${id}`, dadosCurso);
      if (response.status === 200) {
        toast.success("Curso atualizado com sucesso!");
      }
    } catch (error) {
      toast.error("Erro ao atualizar o curso");
    }
  };


  /* API */
  const { id } = useParams();

  const [course, setCourse] = useState<formData>({
    name: "",
    image: "",
    actived: true,
    classes:[{
      name: "",
      description: "",
      link: "",
    }]
  });
const [courseImage, setCourseImage] = useState<string | undefined>(undefined);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await API.get(`/admin/courses/${id}`);
        if( response.status === 200){
          const fetchedCourseData = response.data;
          setCourse(fetchedCourseData);
          setCourseImage(fetchedCourseData.image);
          setImagemPreview(fetchedCourseData.image);
        }
      } catch (error) {
        console.log("Erro ao buscar curso:", error);
      }
    };
    fetchCourse();
  }, [id]);
  const [loading, setLoading] = useState(false);
  const handleUpdate = async ()=>{
    setLoading(true);
    try {
      const response = await API.put(`/admin/courses/${id}`, courseData);

      if (response.status === 200){
        toast.success("Curso atualizado com sucesso")
        setTimeout(()=>{
          window.location.assign("/admin/courses")
        }, 1000)
      }
    } catch(error){
      toast.error("erro ao atualizar o curso");
    } finally{
      setLoading(false);
    }
  }

  const handleDelete = async () => {
    try {
      const response = await API.delete(`/admin/courses/${id}`);
      if (response.status === 204) {
        toast.success("Curso excluído com sucesso!");
        setTimeout(() => {
          window.location.assign("/admin/courses");
        }, 1000);
      }
    } catch (error) {
      toast.error("Não foi possível excluir o curso");
    }
  };


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
          <Switch
              id="custom-switch-component"
              ripple={false}
              label={`Inativo`}
              className="h-full w-full checked:bg-roxo"
              containerProps={{
                className: "w-11 h-6",
              }}
              circleProps={{
                className: "before:hidden left-0.5 border-none",
              }} crossOrigin={undefined}          />
            <Link to={`/admin/courses/${id}/add-pdf`}>
              <Button color="green" className="flex gap-2 items-center">
                <FileUp /> Material Complementar
              </Button>
            </Link>
            <Link to={`/admin/courses/${id}/quiz`}>
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
                <Button variant="text" color="red" onClick={() => {
                  handleDelete();
                  handleOpen();
                }}>
                  Confirmar
                </Button>
              </DialogFooter>
            </Dialog>
          </div>
        </div>

        <div className="mt-8 w-full h-fit flex flex-col gap-4">
          <form action="POST" onSubmit={(event) =>{handleSubmit(event);
            handleUpdade();
          }}>
          <Input
            type="text"
            name="name"
            label="Nome do Curso"
            value={course?.name}
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
              name="image"
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
                        name="name"
                        value={course?.classes[0]?.name}
                        onChange={(e) => handleAulaInputChange(index, e)}
                        crossOrigin={undefined}
                      />
                      <Input
                        type="text"
                        label="Link do video"
                        name="link"
                        value={course?.classes[0]?.link}
                        onChange={(e) => handleAulaInputChange(index, e)}
                        crossOrigin={undefined}
                      />
                      <Textarea
                        label="Descrição da aula"
                        name="description"
                        value={course?.classes[0]?.description}
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
                  disabled={loading}
                  className="mt-4 text-zinc-800 hover:-translate-y-1 duration-300"
                >
                  {loading ? <Spinner /> : `Salvar`}
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
