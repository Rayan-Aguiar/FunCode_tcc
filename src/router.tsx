import {BrowserRouter,  Route, Routes} from "react-router-dom";
// import React from 'react';

import SignIn from "./admin/views/SignIn"
import NotFound from "./admin/views/NotFound"
import Dashboard from "./admin/views/Dashboard"
import Students from "./admin/views/Students"

export default function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/admin" element={<SignIn />}/>
                <Route path="*" element={<NotFound />} />
                <Route path="/admin/dashboard" element={<Dashboard />} />
                <Route path="/admin/students" element={<Students />} />
            </Routes>
        </BrowserRouter>
    )
}