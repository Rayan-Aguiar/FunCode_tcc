import {BrowserRouter,  Route, Routes} from "react-router-dom";
// import React from 'react';

import SignIn from "./admin/views/SignIn"
import NotFound from "./admin/views/NotFound"
import Dashboard from "./admin/views/Dashboard"
import Students from "./admin/views/Students"
import Home from "./home";

export default function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/admin" element={<SignIn />}/>
                <Route path="/admin/dashboard" element={<Dashboard />} />
                <Route path="/admin/students" element={<Students />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}