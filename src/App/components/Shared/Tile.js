import styled from "styled-components";

export const Tile = styled.div`
  box-shadow: 0px 0px 5px 1px #121d5b;
  background-color: #061a44;
  padding: 10px;
  border: 1px solid rgba(1, 4, 20, 0.800);
`;

export const SelectableTile = styled(Tile)`
  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 4px 2px #5fff17;
  }
`;

export const DeletableTile = styled(SelectableTile)`
&:hover{
  cursor: pointer;
  box-shadow: 0px 0px 2px 2px #e41111;
}
`;

export const DisabledTile = styled(Tile)`
pointer-events: none;
opacity: 0.4;
`;


