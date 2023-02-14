import { Size } from "./Size";
import { Brand } from "./Brand";
import { Category } from "./Category";
import { SortBy } from "./SortBy";
import { useFilter } from "../../context/filter-context";
import "./Filter.css";


export const Filter = () => {

    const {filterDispatch} = useFilter();

    const handleClearClick = () => {
        filterDispatch({
            type: "CLEAR"
        })
    }

    return (
        <aside className="filter-container">
            <div className="filter-container-title d-flex gap align-center wrap">
                <span>Filter</span>
                <button className="button btn-link-primary cursor clear" onClick={handleClearClick}>Clear</button>
            </div>
            <div className="filters d-flex direction-column gap-10px">
                <SortBy />
                <Size />
                <Brand />
                <Category />
            </div>
        </aside>
    )
}