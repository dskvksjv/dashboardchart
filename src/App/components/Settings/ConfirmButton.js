import React from "react";
import styled from "styled-components";
import { AppContext } from "../App/AppProvider";

const ConfirmButtonStyled = styled.div`
    margin: 20px;
    color: #42ff3a;
    font-size: 1.5em;
    color: #5fff17;
    padding: 3px;
    cursor: pointer;
    &:hover {
        box-shadow: 0px 0px 4px 2px #5fff17;
    }
`

export const CenterDiv = styled.div`
    display: grid;
    justify-content: center;
`

export default function ConfirmButton() {
    return (
        <AppContext.Consumer>
            {({ ConfirmFavorites }) => (
                <CenterDiv>
                    <ConfirmButtonStyled onClick={ConfirmFavorites}>
                        Confirm favourites
                    </ConfirmButtonStyled>
                </CenterDiv>
            )}
        </AppContext.Consumer>
    );
}
