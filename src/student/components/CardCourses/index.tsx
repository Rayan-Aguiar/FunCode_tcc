import { Link } from "react-router-dom";
import ImgCard1 from "../../../assets/imgcard1.png"
import { Play } from "lucide-react";

type Props ={
    id?: number,
    name?: string,
    link?: string,
}


export default function CardCourses(CardProps:Props) {
  return (
    <div className="w-48 h-60 bg-zinc-200 rounded-lg flex flex-col p-6 justify-center gap-6">
      <div>
        <img src={ImgCard1} alt="Foto curso" />
      </div>
      <div className="flex items-center justify-center gap-2">
        <span className="text-roxo font-medium">Algoritmo</span>
        <div className="bg-limeyellow w-10 h-10 rounded-full flex items-center justify-center">
          <Link to="#">
            <Play className="text-roxo" />
          </Link>
        </div>
      </div>
    </div>
  );
}
