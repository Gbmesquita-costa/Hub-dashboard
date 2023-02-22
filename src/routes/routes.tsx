import React from "react"

import { Route, Routes } from "react-router-dom"

import { InicialForm } from "../components/form/form"
import { Dashboard } from "../pages/dashboard/dashboard"
import { Painel } from "../pages/Painel/Painel"

import { Business } from "../pages/Business/Business"
import { LoginUser } from "../pages/Login/LoginUser"
import { Register } from "../pages/Login/Register/Register"
import { UpdateBusiness } from "../pages/UpdateLocalBusiness/UpdateBusiness"
import { UpdateLocal } from "../pages/UpdateLocalBusiness/UpdateLocal/UpdateLocal"

export default function MainRoutes () {
    return (
        <Routes>
            <Route path="/" element={<LoginUser/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/dashboard" element={<Dashboard/>}>
                <Route path="/dashboard" element={<Painel/>}/>
                <Route path="/dashboard/business" element={<Business/>}/>
                <Route path="/dashboard/form" element={<InicialForm/>}/>
                <Route path="/dashboard/update" element={<UpdateBusiness/>}/>
                <Route path="/dashboard/:id" element={<UpdateLocal/>}/>
            </Route>
            <Route path="*" element={<h1>Page Not Found</h1>}/>
        </Routes>
    )
}