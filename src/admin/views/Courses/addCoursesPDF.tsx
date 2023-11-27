import { useLocation } from "react-router-dom";
import HeaderAdmin from "../../components/header";
import Navigation from "../../components/navegation";
import { Button,   Typography } from "@material-tailwind/react";
import { useState } from "react";

export default function AddCoursePDF() {
  const location = useLocation();
  const currentPath = location.pathname;

  const handleFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        const base64Data = reader.result as string;
        console.log('Arquivo convertido para base64:', base64Data);
      };

      reader.readAsDataURL(file);
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
              className="mt-4 text-zinc-800 hover:-translate-y-1 duration-300"
            >
              Enviar Material
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
