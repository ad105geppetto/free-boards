import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 70px;
`;

export const Wapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 1156px;
  margin: 10px 0;
`;

export const Image = styled.img`
  width: 50px;
  height: 50px;
  margin-left: 10px;
  cursor: pointer;

  @media screen and (max-width: 1156px) {
    margin-left: 20px;
  }
`;
