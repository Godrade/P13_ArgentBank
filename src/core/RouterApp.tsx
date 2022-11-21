import { Route, Routes } from "react-router-dom";
import { Home } from "../adapters/primary/Home";
import { Login } from "../adapters/primary/Login";

export const RouterApp = () => {
    return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
    </Routes>
    )
}