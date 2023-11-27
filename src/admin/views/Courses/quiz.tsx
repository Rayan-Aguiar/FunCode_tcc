import { useLocation } from "react-router-dom";
import HeaderAdmin from "../../components/header";
import Navigation from "../../components/navegation";
import { Button, Checkbox, Input, Typography } from "@material-tailwind/react";
import { Plus } from "lucide-react";
import { useState } from "react";

export default function QuizAdmin() {
  const location = useLocation();
  const currentPath = location.pathname;
  const [numQuestoes, setNumQuestoes] = useState(1);

  const adicionarQuestao = () => {
    setNumQuestoes(numQuestoes + 1);
  };

  const renderizarQuestoes = () => {
    const questoes = [];
    for (let i = 1; i <= numQuestoes; i++) {
      questoes.push(
        <>
          <Input label={`Questão ${i}`} crossOrigin={undefined} />
          <div className="flex">
            <Checkbox label="Resposta correta" crossOrigin={undefined} />
            <Input label="Alternativa 1" crossOrigin={undefined} />
          </div>
          <div className="flex">
            <Checkbox label="Resposta correta" crossOrigin={undefined} />
            <Input label="Alternativa 2" crossOrigin={undefined} />
          </div>
          <div className="flex">
            <Checkbox label="Resposta correta" crossOrigin={undefined} />
            <Input label="Alternativa 3" crossOrigin={undefined} />
          </div>
          <div className="flex">
            <Checkbox label="Resposta correta" crossOrigin={undefined} />
            <Input label="Alternativa 4" crossOrigin={undefined} />
          </div>
        </>
      );
    }
    return questoes;
  };

  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-300 w-screen min:h-scren h-fit ">
      <HeaderAdmin />
      <Navigation currentPath={currentPath} />
      <main className="p-8">
        <Typography variant="h2" className="border-b mb-4">Criar Questionário</Typography>

        <div className="flex flex-col w-3/5 gap-2">
            {renderizarQuestoes()}
        </div>
        <div className=" flex justify-center items-center mt-8">
            <Button className="mt-2 flex gap-2 items-center" onClick={adicionarQuestao}><Plus/> Questão</Button>
        </div>

        <div className="border-t flex justify-center items-center mt-8">
            <Button color="green" className="mt-2">Cadastrar questionário</Button>
        </div>

      </main>
    </div>
  );
}
