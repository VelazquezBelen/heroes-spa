import { useContext } from "react"
import { Navigate } from "react-router-dom";
import { AuthContext } from "../auth"

export const PublicRoute = ({ children }) => {

    const { logged } = useContext(AuthContext);
    
    return (!logged)     // Si no estoy autenticado muestro los hijos, sino me voy a la pag de login
    ? children
    : <Navigate to="/marvel" /> 
}
