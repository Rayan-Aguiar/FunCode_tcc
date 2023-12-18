import { useLocation, useParams } from "react-router-dom";
import HeaderAdmin from "../../components/header";
import Navigation from "../../components/navegation";
import { Button, Checkbox, Input, Spinner, Typography } from "@material-tailwind/react";
import { Plus } from "lucide-react";
import { useState } from "react";
import { API } from "../../../API/api";
import { ToastContainer, toast } from "react-toastify";

export default function QuizAdmin() {
  const location = useLocation();
  const currentPath = location.pathname;
  const [numQuestoes, setNumQuestoes] = useState(1);
  const [selectedAnswer, setSelectedAnswer] = useState(-1);
  const [ loading, setLoading ] = useState(false)

  const { id } = useParams();

  const adicionarQuestao = () => {
    setNumQuestoes(numQuestoes + 1);
  };

  const handleCheckboxChange = (questionIndex, answerIndex) => {
    if (selectedAnswer === answerIndex) {
      setSelectedAnswer(-1);
    } else {
      setSelectedAnswer(answerIndex);
    }
  };

  const renderizarQuestoes = () => {
    const questoes = [];
    for (let i = 1; i <= numQuestoes; i++) {
      questoes.push(
        <div key={i}>
          <Input label={`Questão ${i}`} crossOrigin={undefined} />
          {[1, 2, 3, 4].map((answer, index) => (
            <div className="flex" key={index}>
              <Checkbox
                label={`Resposta correta ${answer}`}
                crossOrigin={undefined}
                checked={selectedAnswer === index}
                onChange={() => handleCheckboxChange(i, index)}
              />
              <Input label={`Alternativa ${answer}`} crossOrigin={undefined} />
            </div>
          ))}
        </div>
      );
    }
    return questoes;
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const questionsData = [];
      for (let i = 1; i <= numQuestoes; i++) {
        const answers = [];
        for (let j = 1; j <= 4; j++) {
          const isCorrect = selectedAnswer === j - 1;
          answers.push({ option: `Alternativa ${j}`, correct: isCorrect });
        }
        const question = { statement: `Questão ${i}`, answers };
        questionsData.push(question);
      }

      const requestData = questionsData;

      const response = await API.post(`/admin/courses/${id}/questions`, requestData);

      if (response.status === 201) {
        console.log("Questionário enviado com sucesso!");
        toast.success("Questionário enviado com sucesso!");

        setTimeout(()=>{
          window.location.assign("/admin/courses")
        }, 1000)
      }
    } catch (error) {
      toast.error("Erro ao enviar o questionário");
      console.error("Erro ao enviar o questionário:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-300 w-screen min-h-screen h-fit ">
      <HeaderAdmin />
      <Navigation currentPath={currentPath} />
      <main className="p-8">
        <Typography variant="h2" className="border-b mb-4">
          Criar Questionário
        </Typography>

        <div className="flex flex-col w-3/5 gap-2">
          
          {renderizarQuestoes()}
          
          </div>
        <div className=" flex justify-center items-center mt-8">
          <Button
            className="mt-2 flex gap-2 items-center"
            onClick={adicionarQuestao}
          >
            <Plus /> Questão
          </Button>
        </div>

        <div className="border-t flex justify-center items-center mt-8">
          <Button color="green" className="mt-2" onClick={handleSubmit} disabled={loading}>
            { loading ? (<Spinner />) : ("Cadastrar questionário") }            
          </Button>
        </div>
      </main>
      <ToastContainer />
    </div>
  );
}
