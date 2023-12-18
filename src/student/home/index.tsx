import { useState, useEffect } from 'react';
import CardCourses from '../components/CardCourses';
import StudentsHeader from '../components/header';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
import { API } from '../../API/api';
import { Spinner } from '@material-tailwind/react';

interface Course {
  id: number;
  name: string;
  image: string;
    class_id: string;
}

export default function StudentsHome(): JSX.Element {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {      
      navigate('/signin'); 
    } else {
      const hasShownToast = localStorage.getItem('hasShownToast');
      if (!hasShownToast) {
        toast.success('Login realizado com sucesso');
        localStorage.setItem('hasShownToast', 'true');
      }

      const fetchCourses = async () => {
        try {         
          const coursesResponse = await API.get('/courses');
          setCourses(coursesResponse.data);
        } catch (error) {
          console.error('Erro ao buscar cursos:', error);
          if (error.response && error.response.status === 401) {
            console.log('Token inválido. Realizando logout.');            
            localStorage.removeItem('token');
            navigate('/signin');
          } else {
            console.log('Erro desconhecido ao buscar cursos.');
          }
        } finally {
          setLoading(false); 
        }
      };

      fetchCourses();
    }
  }, [navigate]);

  return (
    <div className="w-screen min-h-screen h-fit bg-gradient-to-br from-[#4C3F99] to-[#0D1635] p-6">
      <StudentsHeader />
      <section className="mt-12">
        <h1 className="text-2xl text-white font-bold mb-5">Comece por aqui!</h1>
        
        {loading ? ( 
          <div className='w-100 h-[400px] flex justify-center items-center '>
            <Spinner className="h-10 w-10" color="blue"/>
          </div>
        ) : (
          <div className="flex flex-wrap w-full gap-8">
            {courses.map((course: Course) => (
              <CardCourses
                id={course.id}
                key={course.id} 
                name={course.name} 
                img={course.image} 
                class_id={course.class_id}
              />
            ))}
          </div>
        )}
      </section>
      <ToastContainer />
    </div>
  );
}