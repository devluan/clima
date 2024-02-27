import React from "react";
import { ButtonSearch, SearchCity, SearchContainer } from "./SearchStyles";

const Search = ({ city, setCity, searchClima }) => {
    return (
        <SearchContainer>
            <SearchCity
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Digite uma Cidade"
            />
            <ButtonSearch onClick={searchClima}>Buscar</ButtonSearch>
        </SearchContainer>
    )
}

export default Search
