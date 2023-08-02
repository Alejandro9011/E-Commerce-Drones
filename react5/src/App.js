import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./Pages/HomePage/HomePage";
import { Cards } from "./components/Main/Cards";
import { PageCart } from "./Pages/PagesCart/PageCart";
import { Contacto } from "./Pages/Contacto/Contacto";
import { Favorites } from "./Pages/PagesFavorites/PagesFavorites";
import { ProductDetails } from "./Pages/ProductDetails/ProductDetails";
import { Dashboard } from "./Pages/Registers/Dashboard";
import { Login } from "./Pages/Registers/Login";
import { Registre } from "./Pages/Registers/Registre";
import { CrearDron } from "./components/dron/CrearDron";
import { EditarDron } from "./components/dron/EditarDron";
import { MostrarDrones } from "./components/dron/MostrarDrones";
import { AuthContext } from "./AuthContext/AuthContext";
import { UserName } from "./Pages/Registers/UserName";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

export function App() {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/imagen" element={<Cards />} />
        <Route path="/cart" element={<PageCart />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/detail/:id" element={<ProductDetails />} />
        <Route path="/" element={<MostrarDrones />} />
        <Route path="/cuenta" element={<UserName />} />
        <Route path="/create" element={<CrearDron />} />
        <Route path="/edit/:id" element={<EditarDron />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registre" element={<Registre />} />
        <Route path="/admin" element={<Dashboard />} />
        <Route
          path="/cuenta"
          element={isLoggedIn ? <UserName /> : <Navigate to="/login" />}
        />
      </Routes>
    </BrowserRouter>
  );
}
