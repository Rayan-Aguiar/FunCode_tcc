import {BrowserRouter,  Route, Routes} from "react-router-dom";
// import React from 'react';

import SignIn from "./admin/views/SignIn"
import NotFound from "./admin/views/NotFound"
import Dashboard from "./admin/views/Dashboard"
import Students from "./admin/views/Students"
import Home from "./home";
import StudentsHome from "./student/home";
import StudentsClasses from "./student/classes";

export default function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/admin" element={<SignIn />}/>
                <Route path="/admin/dashboard" element={<Dashboard />} />
                <Route path="/admin/students" element={<Students />} />
                <Route path="*" element={<NotFound />} />

               <Route path="/students" element={<StudentsHome />} /> 
               <Route path="/students/classes" element={<StudentsClasses />}/>
            </Routes>
        </BrowserRouter>
    )
}