import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import StudentsHeader from "../components/header";
import { Link, useParams } from "react-router-dom";
import { API } from "../../API/api";
import { Button } from "@material-tailwind/react";
import { FileDown, HelpCircle } from "lucide-react";

interface NextClasses {
  id: number;
  name: string;
  link: string;
}
interface Course {
  current?: {
    name: string;
    description: string;
    link: string;
    id: number;
  };
  next_classes?: NextClasses[];
}

export default function StudentsClasses(): JSX.Element {
  const [course, setCourse] = useState<Course>({});
  const { id, idclass } = useParams();

  useEffect(() => {
    const fetchCourses = async (): Promise<void> => {
      try {
        const response = await API.get(`/courses/${id}/class/${idclass}`);
        setCourse(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Erro ao buscar cursos:", error);
      }
    };

    fetchCourses();
  }, [id, idclass]);

  return (
    <div className="w-screen h-fit min-h-screen bg-gradient-to-br from-[#4C3F99] to-[#0D1635] p-6">
      <StudentsHeader />

      <section className="mt-12 flex flex-col items-center justify-center">
            <div className="flex justify-end items-center gap-4 mb-8">
              <Button size="sm" className="bg-limeyellow hover:bg-roxo-escuro hover:text-limeyellow text-roxo duration-150 flex gap-2 items-center" ><FileDown /> Material Complementar</Button>
              <Link to={`/students/courses/${id}/quiz`}>
                <Button size="sm" className="bg-limeyellow hover:bg-roxo-escuro hover:text-limeyellow text-roxo duration-150 flex gap-2 items-center" ><HelpCircle /> Questionário</Button>
              </Link>
            </div>
        {course.current ? (
          <div className="md:w-[1200px] w-full md:h-[550px] overflow-hidden bg-zinc-300 rounded-2xl flex items-center justify-center">
            <ReactPlayer
              className=""
              width="100%"
              height="100%"
              controls
              playing
              pip
              url={course.current?.link}
            />
          </div>
        ) : null}
        <div className="mt-2 flex justify-between w-[1200px]">
          <div className="w-10/12">
            {course.current ? (
              <>
                <h3 className="font-semibold text-white mb-2">
                  {course.current.name}
                </h3>
                <p className="text-white text-justify">
                  {course.current.description}
                </p>
              </>
            ) : (
              <h3 className="font-semibold text-white mb-2">
                Selecione um curso
              </h3>
            )}
          </div>
          <div className="flex gap-3">
            
            <div className="flex flex-col text-white overflow-auto w-24 h-40 bg-roxo-light/50 justify-center items-center rounded-2xl ">
              <ul>
                {course.next_classes?.map((nextClass) => (
                  <li key={nextClass.id}>
                    <Link
                      to={`/students/courses/${id}/class/${nextClass.id}`}
                      className={`font-semibold ${
                        (nextClass.id) === (course.current?.id)
                          ? "text-limeyellow"
                          : ""
                      }`}
                    >
                      {nextClass.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
