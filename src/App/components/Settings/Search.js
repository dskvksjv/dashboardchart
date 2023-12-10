import React from "react";
import styled from "styled-components";
import { AppContext } from "../App/AppProvider";
import _ from 'lodash';
import fuzzy from 'fuzzy';


const SearchGrid = styled.div`
display: grid;
grid-template-columns: 200px, 1fr;
`

const SearchInput = styled.input`
background-color: #010e2c;
color: #1163c9;
font-size: 1.0em
border: 1px solid;
height: 25px;
place-self: center left;
`

const handleFilter = _.debounce((inputValue, coinList, setFilterCoins) => {
    let coinSymbols = Object.keys(coinList);
    let coinNames = coinSymbols.map(sym => coinList[sym].CoinName);
    let allStringsToSearch = coinSymbols.concat(coinNames);
    let fuzzyResults = fuzzy
    .filter(inputValue, allStringsToSearch, {})
    .map(result => result.string);
    
    let filteredCoins = _.pickBy(coinList, (result, symKey) =>{
        let coinName = result.CoinName;
        return (_.includes(fuzzyResults, symKey) || _.includes(fuzzyResults, coinName));
    });
    console.log(filteredCoins);
    setFilterCoins(filteredCoins);
}, 500);

function filterCoins(e, setFilteredCoins, coinList) {
    let inputValue = e.target.value;
    if(!inputValue) {
        setFilteredCoins(null);
        return;
    }
    handleFilter(inputValue, coinList, setFilteredCoins);
}

export default function () {
    return (
        <AppContext.Consumer>
            {({ setFilteredCoins, coinList }) =>
                <SearchGrid>
                    <h2>Search all coins</h2>
                    <SearchInput onKeyUp={(e) => filterCoins(e, setFilteredCoins, coinList)} />
                </SearchGrid>}
        </AppContext.Consumer>
    );
}