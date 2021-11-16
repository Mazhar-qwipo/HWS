import React, { useContext, useState, useMemo } from "react";
//https://www.youtube.com/watch?v=tnt2y7D3V9o
const initialState = {
    isLoading: false
}
export const Context = React.createContext();
const GlobalStateStore = ({ children }) => {
    const [state, setState] = useState(initialState);
    return (
        <Context.Provider value={[state, setState]}>{children}</Context.Provider>
    );
};
export default GlobalStateStore;
