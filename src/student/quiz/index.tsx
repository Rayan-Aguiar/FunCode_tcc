import { Button } from "@material-tailwind/react";
import StudentsHeader from "../components/header";
import ContentQuiz from "../components/contentQuiz";
import { API } from "../../API/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface Answer {
  option: string;
  correct: boolean;
}

interface Question {
  id: number;
  course_id: number;
  statement: string;
  answers: Answer[];
}

export default function Quiz() {
  const [questionsData, setQuestionsData] = useState<Question[]>([]);

  const { id } = useParams();
  
  useEffect(() => {
    
    const fetchQuestionData = async () => {
      try {
        const response = await API.get(`/courses/${id}/questions`);
        if (response.status === 200) {
          console.log(response.data)
          setQuestionsData(response.data);
        }
      } catch (error) {
        console.error("Erro ao obter o questionário:", error);
      }
    };

    fetchQuestionData(); 
  }, [id]);

  return (
    <div className="w-screen h-fit min-h-screen bg-gradient-to-br from-[#4C3F99] to-[#0D1635] p-6">
      <StudentsHeader />

      <main className="mt-12 flex flex-col items-center justify-center">
        <div className="w-10/12 justify-center items-center">
          {questionsData.map((question, index) => (
            <ContentQuiz
              key={index}
              numberQuestion={index + 1}
              question={question.statement}
              alternateQuestion1={question.answers[0]?.option || ""}
              alternateQuestion2={question.answers[1]?.option || ""}
              alternateQuestion3={question.answers[2]?.option || ""}
              alternateQuestion4={question.answers[3]?.option || ""}
            />
          ))}
          </div>
        <div className="mt-8">
            <Button className="bg-limeyellow text-roxo hover:bg-roxo-escuro hover:text-limeyellow duration-150">Enviar</Button>
        </div>
      </main>
    </div>
  );
}
