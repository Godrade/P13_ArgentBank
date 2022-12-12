import { Route, Routes } from "react-router-dom";
import { Home } from "../adapters/primary/Home";
import { Login } from "../adapters/primary/Login";
import { Profil } from "../adapters/primary/Profil";

export const RouterApp = () => {
    return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login/user" element={<Profil />} />
    </Routes>
    )
}