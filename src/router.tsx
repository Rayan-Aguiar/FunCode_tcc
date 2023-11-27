import { BrowserRouter,  Route, Routes } from "react-router-dom";
// import React from 'react';

import SignIn from "./admin/views/SignIn"
import NotFound from "./admin/views/NotFound"
import Dashboard from "./admin/views/Dashboard"
import Students from "./admin/views/Students"
import Home from "./home";
import StudentsHome from "./student/home";
import StudentsClasses from "./student/classes";
import EditPerfil from "./student/edit";
import StudentsSuport from "./student/suport";
import SignUp from "./home/SignUp";
import AddStudent from "./admin/views/AddStudent";
import FinancialAdmin from "./admin/views/Financial";
import EditStudent from "./admin/views/EditStudent";
import SuportAdmin from "./admin/views/Suport";
import SuportDetails from "./admin/views/Suport/details";
import CoursesAdmin from "./admin/views/Courses";
import AddCourse from "./admin/views/Courses/addCourses";
import EditCourse from "./admin/views/Courses/editCourse";
import AddCoursePDF from "./admin/views/Courses/addCoursesPDF";
import QuizAdmin from "./admin/views/Courses/quiz";

export default function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/signup" element={<SignUp />}/>

                <Route path="/admin" element={<SignIn />}/>
                <Route path="/admin/dashboard" element={<Dashboard />} />
                <Route path="/admin/students" element={<Students />} />
                <Route path="/admin/students/add" element={<AddStudent />}/>
                <Route path="/admin/students/edit/:id" element={<EditStudent />}/>
                <Route path="/admin/financial" element={ <FinancialAdmin />} />
                <Route path="/admin/courses" element={<CoursesAdmin />}/>
                <Route path="/admin/courses/add" element={<AddCourse />}/>
                <Route path="/admin/courses/:id/add-pdf" element={<AddCoursePDF />}/>
                <Route path="/admin/courses/:id/quiz" element={<QuizAdmin />}/>
                <Route path="/admin/courses/edit/:id/" element={<EditCourse />}/>
                <Route path="/admin/suport" element={<SuportAdmin />}/>
                <Route path="/admin/suport/:id" element={<SuportDetails />}/>
                <Route path="*" element={<NotFound />} />

               <Route path="/students" element={<StudentsHome />} /> 
               <Route path="/students/classes" element={<StudentsClasses />}/>
               <Route path="/students/edit-perfil" element={<EditPerfil />} /> 
               <Route path="/students/suport" element={<StudentsSuport />} />
            </Routes>
        </BrowserRouter>
    )
}