// import { FaSearch } from "react-icons/fa";
import { useState, useEffect } from "react";

export const FindAnime = () => {
    const [search, setSearch] = useState("");

    const onInputChange = (event) => {
        setSearch(event.target.value)
    }

    return <>
        <form>
            <input type="text" onChange={onInputChange} value={search} />
            <button type="button">x</button>
            <button type="submit">search</button>
        </form>
    </>
}