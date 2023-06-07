import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import GrandFather from "../Component/test"
import Main from "../Component/main"
import Lay from "../Component/Layout";
import Drill from "../Component/drill"
import Repeat from "../Component/repeat";
import Map from "../Component/map"
import ComponentDrill from "../Component/componentDrill";



const Ways = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/grandFather" element={<GrandFather />} />
                <Route path="/lay" element={<Lay />} />
                <Route path="/drill" element={<Drill />} />
                <Route path="/repeat" element={<Repeat/>}/>
                <Route path='/map' element={<Map />} />
                <Route path="/componentDrill" element={<ComponentDrill/>}/>
            </Routes>
        </BrowserRouter>
    
    )
}

export default Ways;