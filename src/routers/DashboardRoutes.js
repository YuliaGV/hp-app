import React from 'react'
import { Navigation } from '../components/ui/Navigation';
import {
    Routes,
    Route
  } from "react-router-dom";

import { Characters } from "../components/Characters";
import { Spells } from "../components/Spells";
import { Character } from "../components/Character";
import { Books } from "../components/Books";

export const DashboardRoutes = () => {
    return (
        <>
            <Navigation />
            <Routes>
                <Route path="books" element={<Books />} />
                <Route path="characters" element={<Characters />} />
                <Route path="character/:id" element={<Character />} />
                <Route path="spells" element={<Spells />} />
                <Route path="*" element={<Books />} />
            </Routes>
        </>

    )
}
