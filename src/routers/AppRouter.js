import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import { DashboardRoutes } from "./DashboardRoutes";
import { Login } from '../components/Login'

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login/> }/>
                <Route path="/*" element={ <DashboardRoutes /> } />
            </Routes>
        </BrowserRouter>
    )
}
