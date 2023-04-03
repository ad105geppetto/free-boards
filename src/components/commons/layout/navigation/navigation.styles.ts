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

  @media screen and (max-width: 1156px) {
    flex-direction: column;
    top: 70px;
    right: 0;
    gap: 0;
  }
`;

export const HamburgerButton = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 24px;
  height: 18px;
  margin: 26px 0;
  top: 0;
  right: 25px;
  cursor: pointer;

  @media screen and (min-width: 1157px) {
    display: none;
  }
`;

export const Bar = styled.span`
  display: block;
  width: 100%;
  height: 3px;
  background-color: black;
  transition: transform 0.3s ease-in-out;
`;

interface IProps {
  isVisible: boolean;
}

export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 1156px) {
    position: absolute;
    display: ${(props: IProps) => (props.isVisible ? "flex" : "none")};
    flex-direction: column;
    width: 100vw;
    top: 70px;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }
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

  @media screen and (max-width: 1156px) {
    padding: 15px 0;
    color: white;
    text-align: center;
  }
`;
