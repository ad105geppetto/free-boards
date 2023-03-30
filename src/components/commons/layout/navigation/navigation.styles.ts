import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Wapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
`;

export const Menu = styled.span`
  font-size: 20px;
  font-weight: 600;
  padding: 0 10px;
  cursor: pointer;

  &:after {
    display: block;
    content: "";
    border-bottom: solid 3px #000000;
    transform: scaleX(0);
    transition: transform 100ms ease-in-out;
  }

  &:hover:after {
    transform: scaleX(1);
  }
`;
