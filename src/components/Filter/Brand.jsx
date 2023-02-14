import { useFilter } from "../../context/filter-context"
import { data } from "../../db/data"

const getAllCountries = () => {
    let countries = data.map(info => info.country);
    countries = countries.filter((c, i) => countries.indexOf(c) === i);
    return countries;
}

export const Brand = () => {
    // country filter
    const {filterDispatch, brand} = useFilter();
    const countries = getAllCountries();


    const handleBrandChange = (e, option) => {
        const check = e.target.checked
            filterDispatch({
                type: "BRAND",
                payload: {option, check}
            })
        }

    return (
        <div className="category">
            <div className="category-title">Country</div>
            <div className="category-size category-select d-flex direction-column gap-10px">
                {countries.map(c => (
                    <label className="d-flex align-center gap-10px">
                        <input className="input" type="checkbox" value={c} onChange={(e) => handleBrandChange(e, c)} checked={brand.includes(c)}/>
                        <span>{c}</span>
                    </label>
                ))}
                {/* <label className="d-flex align-center gap-10px">
                    <input className="input" type="checkbox" value="Roadster" onChange={(e) => handleBrandChange(e, "Roadster")} checked={brand.includes("Roadster")}/>
                    <span>Roadster</span>
                </label> */}
            </div>
        </div>
    )
}