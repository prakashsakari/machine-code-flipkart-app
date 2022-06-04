import { createContext, useContext, useReducer} from "react";
import { filterReducer } from "../reducer/filterReducer";

const FilterContext = createContext();

const FilterProvider = ({children}) => {

    const [{sort, brand, category, size}, filterDispatch] = useReducer(filterReducer, {
        sort: "",
        brand: [],
        category: "all",
        size: [],
    })

    return (
        <FilterContext.Provider value={{sort, brand, category, size, filterDispatch}}>{children}</FilterContext.Provider>
    )
}

const useFilter = () => useContext(FilterContext);

export { useFilter, FilterProvider }