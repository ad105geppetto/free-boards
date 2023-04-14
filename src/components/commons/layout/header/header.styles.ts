import styled from "@emotion/styled";

export const Container = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 70px;
`;

export const Wapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 1156px;
  padding-left: 10px;

  @media screen and (max-width: 1156px) {
    padding-left: 20px;
  }
`;

export const ImageWrapper = styled.a`
  :focus-visible {
    outline: 2px solid red;
  }
`;

export const H1 = styled.h1`
  position: absolute;
  opacity: 0;
`;

export const Image = styled.img`
  width: 50px;
  height: 50px;
`;
