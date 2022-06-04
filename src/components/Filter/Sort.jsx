import { useFilter } from "../../context/filter-context"

export const Sort = () => {

    const {filterDispatch, sort} = useFilter();

    const handlePriceChange = (option) => {
        filterDispatch({
            type: option === "lth" ? "LTH" : "HTL",
            payload: option === "lth" ? "lth" : "htl",
        })
    }

    return (
        <div className="category">
            <div className="category-title">Sort By Price</div>
            <div className="category-size category-select d-flex direction-column gap-10px">
            <label className="d-flex align-center gap-10px">
                    <input className="input" type="radio" name="price" value="lth" onChange={() => handlePriceChange("lth")} checked={sort === "lth"}/>
                    <span>Low to High</span>
                </label>
                <label className="d-flex align-center gap-10px">
                    <input className="input" type="radio" name="price" value="htl" onChange={() => handlePriceChange("htl")} checked={sort === "htl"} />
                    <span>High to Low</span>
                </label>    
            </div>
        </div>
    )
}