import React from 'react';
import styled, { css } from 'styled-components';
import { SelectableTile } from "../Shared/Tile";
import { fontSize3, fontSizeBig } from "../Shared/Styles";
import { CoinHeaderGrid } from "../Settings/CoinHeaderGrid";
import { AppContext } from '../App/AppProvider';

const JustifyRight = styled.div`
    justify-self: right;
`

const JustifyLeft = styled.div`
    justify-self: left;
`

const TickerPrice = styled.div`
    font-size: 2em;
`

const ChangePct = styled.div`
    color: green;
    ${props => props.red && css`
        color: red;
    `}
`

const numberFormat = number => {
    return +(number + '').slice(0, 7);
}

const PriceTileStyled = styled(SelectableTile)`
  ${props => props.compact && css`
    display: grid;
    font-size: 3em;
    grid-gap: 5px;
    grid-template-columns: repeat(3, minmax(0, 1fr)); // Adjusted this line
    justify-items: right;
  `}

  ${props => props.currentFavorite && css`
    box-shadow: 0px 0px 4px 2px #5fff17;
    pointer-events: none;
  `}
`;


function ChangePercent({ data }) {
    return (
        <JustifyRight>
            <ChangePct red={data.CHANGEPCT24HOUR < 0}>
                {numberFormat(data.CHANGEPCT24HOUR)}
            </ChangePct>
        </JustifyRight>
    );
}

function PriceTile({ sym, data, currentFavorite, setCurrentFavorite }) {
    return (
      <PriceTileStyled onClick={setCurrentFavorite} currentFavorite={currentFavorite}>
        <CoinHeaderGrid>
          <div>{sym}</div>
          <ChangePercent data={data} />
        </CoinHeaderGrid>
        <div>
          ${numberFormat(data.PRICE)}
        </div>
      </PriceTileStyled>
    );
  }


  

  function PriceTileCompact({ sym, data, currentFavorite, setCurrentFavorite }) {
    return (
      <PriceTileStyled onClick={setCurrentFavorite} compact currentFavorite={currentFavorite}>
        <JustifyLeft>{sym}</JustifyLeft>
        <ChangePercent data={data} />
        <div>
          ${numberFormat(data.PRICE)}
        </div>
      </PriceTileStyled>
    );
  }

export default function ({ price, index }) {
    let sym = Object.keys(price)[0];
    let data = price[sym]['USD'];
    let TileClass = index < 5 ? PriceTile : PriceTileCompact;

    return (
        <AppContext.Consumer>
            {({ currentFavorite, setCurrentFavorite }) => (
                <TileClass 
                    sym={sym} 
                    data={data} 
                    currentFavorite={currentFavorite === sym}
                    setCurrentFavorite={ () => setCurrentFavorite(sym)}
                />
            )}
        </AppContext.Consumer>
    );
}