import { useLocation, useParams } from "react-router-dom";
import HeaderAdmin from "../../components/header";
import Navigation from "../../components/navegation";
import { Button, Spinner, Typography } from "@material-tailwind/react";
import { API } from "../../../API/api";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";

export default function AddCoursePDF() {
  const location = useLocation();
  const currentPath = location.pathname;
  const { id } = useParams();

  const [loading, setLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      toast.error("Selecione um arquivo PDF para enviar.");
      return;
    }

    setLoading(true);

    try {
      const reader = new FileReader();

      reader.onload = async () => {
        const base64String = reader.result?.toString().split(",")[1]; // Remove data URL prefix

        if (base64String) {
          const dataToSend = {
            file: base64String,
          };

          try {
            const response = await API.post(`/admin/courses/${id}/material`, dataToSend);

            console.log("Resposta da API:", response.data);

            toast.success("PDF enviado com sucesso!");

            setTimeout(()=>{
              window.location.assign("/admin/courses")
            },1000)
          } catch (error) {
            console.error("Erro ao enviar o PDF:", error);
            toast.error("Erro ao enviar o PDF. Por favor, tente novamente.");
          } finally {
            setLoading(false);
          }
        }
      };

      reader.readAsDataURL(selectedFile);
    } catch (error) {
      console.error("Erro ao ler o arquivo:", error);
      toast.error("Erro ao processar o arquivo. Por favor, tente novamente.");
      setLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-300 w-screen min-h-screen h-fit ">
      <HeaderAdmin />
      <Navigation currentPath={currentPath} />

      <main className="p-8">
        <Typography variant="h2">Enviar Material Complementar</Typography>

        <div className="mt-8 w-full h-fit flex flex-col gap-4">
          <div className="flex gap-24 items-center justify-center">
            <label
              htmlFor="fileInput"
              className="bg-roxo p-2 rounded-md cursor-pointer hover:bg-roxo-normal duration-150 w-40 h-10 flex justify-center items-center text-limeyellow "
            >
              Enviar PDF
            </label>
            <input
              type="file"
              id="fileInput"
              accept=".pdf"
              multiple
              className="hidden"
              onChange={handleFileInputChange}
            />
          </div>

          <div className="border-t-2 border-zinc-500/20 mt-8 flex justify-center">
            <Button
              color="green"
              type="submit"
              onClick={handleUpload}
              disabled={loading}
              className="mt-4 text-zinc-800 hover:-translate-y-1 duration-300"
            >
              {loading ? <Spinner /> : "Enviar material"}
            </Button>
          </div>
        </div>
      </main>

      <ToastContainer />
    </div>
  );
}
