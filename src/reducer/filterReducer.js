export const filterReducer = (filterState, {type, payload}) => {
    switch (type){
        case "LTH":
            return {
                ...filterState,
                sort: payload
            }
        case "HTL":
            return {
                ...filterState,
                sort: payload
            }
        
        case "SIZE":
            return {
                ...filterState,
                size: payload.check ? [...filterState.size, payload.option] : (filterState.size.length > 0 ? filterState.size.filter(item => item !== payload.option) : [])
            }
        case "CATEGORY":
            return {
                ...filterState,
                category: payload
            }
        
        case "CLEAR":
            return {
                ...filterState,
                sort: "",
                brand: [],
                category: "all",
                size: []
            }
        
        case "BRAND":
            return {
                ...filterState,
                brand: payload.check ? [...filterState.brand, payload.option] : (filterState.brand.length > 0 ? filterState.brand.filter(item => item !== payload.option) : [])
            }

        default:
            return filterState

    }
}