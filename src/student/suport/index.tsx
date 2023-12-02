import { Button, Spinner } from "@material-tailwind/react";
import { API } from "../../API/api";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import StudentsHeader from "../components/header";
import { useState } from "react";

interface Support {
  description: string;
  status: "aguardando";
}

export default function StudentsSuport() {
  const [supportText, setSupportText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSupportTextChange = (e) => {
    setSupportText(e.target.value);
  };

  const handleSubmitSupport = async () => {
    setIsLoading(true);
    try {
      const supportData: Support = {
        description: supportText,
        status: "aguardando",
      };

      const token = localStorage.getItem("token");

      const response = await API.post("/support", JSON.stringify(supportData), {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 201) {
        console.log("Suporte enviado com sucesso!");
        toast.success(
          "Solicitação enviada com sucesso, você receberá um email com a solução!"
        );
        setSupportText("");
        window.location.href = "/students"
      } else {
        console.error("Erro ao enviar o suporte:", response.data.error);
        toast.error("Erro ao enviar a solicitação");
      }
    } catch (error) {
      console.error("Erro ao enviar o suporte:", error.message);
      toast.error("Erro ao enviar a solicitação");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="w-full h-screen p-6 bg-gradient-to-br from-[#4C3F99] to-[#0D1635]">
        <StudentsHeader />
        <main>
          <div className="mt-12">
            <h1 className="text-2xl font-semibold text-white">
              Área de Suporte
            </h1>
            <div className="mt-8 flex flex-col justify-center items-center">
              <textarea
                name=""
                placeholder="Digite sua dúvida, sugestão..."
                id=""
                cols="30"
                rows="10"
                value={supportText}
                onChange={handleSupportTextChange}
                className="w-full rounded-lg p-2 outline-none text-roxo"
              ></textarea>
              <Button
                onClick={handleSubmitSupport}
                disabled={isLoading}
                className="flex justify-center items-center bg-limeyellow text-roxo w-60 mt-2"
              >
                {isLoading ? <Spinner /> : "Enviar"}
              </Button>
            </div>
          </div>
        </main>
        <ToastContainer />
      </div>
    </>
  );
}
