import { useFilter } from "../../context/filter-context"

export const SortBy = () => {

    const {filterDispatch, sortBy} = useFilter();

    const handlePriceChange = (option) => {
        filterDispatch({
            type: "SORT",
            payload: option,
        })
    }

    return (
        <div className="category">
            <div className="category-title">Sort By</div>
            <div className="category-size category-select d-flex direction-column gap-10px">
                <label className="d-flex align-center gap-10px">
                    <input className="input" type="radio" name="mc" value="mcLth" onChange={() => handlePriceChange("mcLth")} checked={sortBy === "mcLth"}/>
                    <span>MC (Low to High)</span>
                </label>
                <label className="d-flex align-center gap-10px">
                    <input className="input" type="radio" name="mc" value="mcHtl" onChange={() => handlePriceChange("mcHtl")} checked={sortBy === "mcHtl"} />
                    <span>MC (High to Low)</span>
                </label> 
                <label className="d-flex align-center gap-10px">
                    <input className="input" type="radio" name="mc" value="sgLth" onChange={() => handlePriceChange("sgLth")} checked={sortBy === "sgLth"}/>
                    <span>SG (Low to High)</span>
                </label>
                <label className="d-flex align-center gap-10px">
                    <input className="input" type="radio" name="mc" value="sgHtl" onChange={() => handlePriceChange("sgHtl")} checked={sortBy === "sgHtl"} />
                    <span>SG (High to Low)</span>
                </label>    
                <label className="d-flex align-center gap-10px">
                    <input className="input" type="radio" name="mc" value="morLth" onChange={() => handlePriceChange("morLth")} checked={sortBy === "morLth"}/>
                    <span>MOR (Low to High)</span>
                </label>
                <label className="d-flex align-center gap-10px">
                    <input className="input" type="radio" name="mc" value="morHtl" onChange={() => handlePriceChange("morHtl")} checked={sortBy === "morHtl"} />
                    <span>MOR (High to Low)</span>
                </label> 
                <label className="d-flex align-center gap-10px">
                    <input className="input" type="radio" name="mc" value="moeLth" onChange={() => handlePriceChange("moeLth")} checked={sortBy === "moeLth"}/>
                    <span>MOE (Low to High)</span>
                </label>
                <label className="d-flex align-center gap-10px">
                    <input className="input" type="radio" name="mc" value="moeHtl" onChange={() => handlePriceChange("moeHtl")} checked={sortBy === "moeHtl"} />
                    <span>MOE (High to Low)</span>
                </label>    
            </div>
        </div>
    )
}