import { types } from "../types/types";

export const authReducer = (state = {}, action) => {

    switch (action.type) {
        case types.login:            
            return {
                ...state,   // Se hace la desestructuración por si en el futuro se agregan mas propiedades
                logged: true,
                user: action.payload
            };

        case types.logout:            
            return {
                logged: false,
            };
    
        default:
            return state;
    }
}