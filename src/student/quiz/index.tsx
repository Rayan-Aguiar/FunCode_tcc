import { Button } from "@material-tailwind/react";
import StudentsHeader from "../components/header";
import ContentQuiz from "../components/contentQuiz";



export default function Quiz() {


  return (
    <div className="w-screen h-fit min-h-screen bg-gradient-to-br from-[#4C3F99] to-[#0D1635] p-6">
      <StudentsHeader />

      <main className="mt-12 flex flex-col items-center justify-center">
        <div className="w-10/12 justify-center items-center">
          <ContentQuiz 
            numberQuestion={1}
            question="dsvzsfdvzsdfvzsdfvzsdfvzsdfvzsdfvzsdfvzsdfvzsdfvsdfvzsdfvzsdfvzsdfvsdfvzfdsv"
            alternateQuestion1="dsfvzsdfsdfvzsdfvzsdvfz"
            alternateQuestion2="zsdfvzsdfvzsdfvsdfvzsdfzvsdfvzsdf"
            alternateQuestion3="sdfdfzsdvfzsdfvsdfvsdfvsdfvzfvzfsvzsfv"
            alternateQuestion4="dfzsfvsdfvsdfvzdfvzdfvzd"
          />
        </div>
        <div className="mt-8">
            <Button className="bg-limeyellow text-roxo hover:bg-roxo-escuro hover:text-limeyellow duration-150">Enviar</Button>
        </div>
      </main>
    </div>
  );
}
