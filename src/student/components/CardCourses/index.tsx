import { Link } from "react-router-dom";

import { Play } from "lucide-react";

type Props ={
    id?: number,
    name?: string,
    link?: string,
    img?: string,
    class_id?: string,
}


export default function CardCourses(CardProps:Props) {
 
  return (
    <div className="w-48 h-60 bg-zinc-200 rounded-lg flex flex-col p-6 justify-center gap-6">
      <div>
        <img src={CardProps.img} alt="Foto curso" />
      </div>
      <div className="flex items-center justify-center gap-2">
        <span className="text-roxo font-medium">{CardProps.name}</span>
        <div className="bg-limeyellow w-10 h-10 rounded-full flex items-center justify-center">
          <Link to={`/students/courses/${CardProps.id}/class/${CardProps.class_id}`}>
            <Play className="text-roxo" />
          </Link>
        </div>
      </div>
    </div>
  );
}
