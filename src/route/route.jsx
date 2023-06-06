import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import GrandFather from "../Component/test"
import Main from "../Component/main"
import Lay from "../Component/Layout";
import Drill from "../Component/drill"

const Ways = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/grandFather" element={<GrandFather />} />
                <Route path="/lay" element={<Lay />} />
                <Route path="drill" element={<Drill />} />
            </Routes>
        </BrowserRouter>
    
    )
}

export default Ways;