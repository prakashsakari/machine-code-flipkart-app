import { createContext, useContext, useReducer} from "react";
import { filterReducer } from "../reducer/filterReducer";

const FilterContext = createContext();

const FilterProvider = ({children}) => {

    const [{sortBy, brand, category, size}, filterDispatch] = useReducer(filterReducer, {
        sortBy: "",
        brand: [],
        category: "all",
        size: [],
    })

    return (
        <FilterContext.Provider value={{sortBy, brand, category, size, filterDispatch}}>{children}</FilterContext.Provider>
    )
}

const useFilter = () => useContext(FilterContext);

export { useFilter, FilterProvider }