import styled from "@emotion/styled";

export const Container = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 50px;
`;

export const Wapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 1156px;

  @media screen and (max-width: 767px) {
    width: 100%;
    margin: 0 20px;
  }
  @media screen and (min-width: 768px) and (max-width: 1156px) {
    width: 100%;
    margin: 0 50px;
  }
`;

export const MadeBy = styled.div`
  font-size: 24px;

  @media screen and (max-width: 767px) {
    font-size: 16px;
  }
  @media screen and (min-width: 768px) and (max-width: 1156px) {
    font-size: 20px;
  }
`;
