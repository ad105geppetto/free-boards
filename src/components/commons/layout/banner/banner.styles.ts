import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 140px;

  @media screen and (max-width: 767px) {
    height: 70px;
  }
`;

export const Wapper = styled.picture`
  display: flex;
  flex-direction: row;
  overflow: hidden;
`;

export const BannerImage = styled.img`
  width: 100%;
  height: 100%;
`;
