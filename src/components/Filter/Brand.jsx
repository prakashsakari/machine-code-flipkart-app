import { useFilter } from "../../context/filter-context"

export const Brand = () => {

    const {filterDispatch, brand} = useFilter();

    const handleBrandChange = (e, option) => {
        const check = e.target.checked
            filterDispatch({
                type: "BRAND",
                payload: {option, check}
            })
        }

    return (
        <div className="category">
            <div className="category-title">Brand</div>
            <div className="category-size category-select d-flex direction-column gap-10px">
                <label className="d-flex align-center gap-10px">
                    <input className="input" type="checkbox" value="Roadster" onChange={(e) => handleBrandChange(e, "Roadster")} checked={brand.includes("Roadster")}/>
                    <span>Roadster</span>
                </label>
                <label className="d-flex align-center gap-10px">
                    <input className="input" type="checkbox" value="Zara" onChange={(e) => handleBrandChange(e, "Zara")} checked={brand.includes("Zara")}/>
                    <span>Zara</span>
                </label>
                <label className="d-flex align-center gap-10px">
                    <input className="input" type="checkbox" value="Forever 21" onChange={(e) => handleBrandChange(e, "Forever 21")} checked={brand.includes("Forever 21")}/>
                    <span>Forever 21</span>
                </label>
                <label className="d-flex align-center gap-10px">
                    <input className="input" type="checkbox" value="DNMX" onChange={(e) => handleBrandChange(e, "DNMX")} checked={brand.includes("DNMX")}/>
                    <span>DNMX</span>
                </label>
                <label className="d-flex align-center gap-10px">
                    <input className="input" type="checkbox" value="Peter England" onChange={(e) => handleBrandChange(e, "Peter England")} checked={brand.includes("Peter England")}/>
                    <span>Peter England</span>
                </label>
            </div>
        </div>
    )
}