import styled from "@emotion/styled";
import { IListItemProps } from "./Landing.types";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Wapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 1156px;
`;

export const ImageWrapper = styled.div`
  margin-top: 139px;
  text-align: center;
`;

export const TransactionImage = styled.img`
  width: 320px;
  height: 320px;
`;

export const TextWrapper = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const Text = styled.p`
  width: 210px;
  font-size: 32px;
  font-weight: 700;
  text-align: center;
`;

export const DownArrowWrapper = styled.div`
  height: 100px;
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

export const JoinUs = styled.div`
  font-weight: 700;
`;

export const DownArrow = styled.img`
  width: 50px;
  height: 25px;
  animation: upAndDown 1s infinite;

  @keyframes upAndDown {
    from {
      transform: translateY(0);
    }
    50% {
      transform: translateY(10px);
    }
    to {
      transform: translateY(0);
    }
  }
`;

export const ListWrapper = styled.ul`
  margin: 70px auto 100px;
  width: 383px;
`;

export const ListItem = styled.li`
  display: inline;
  font-size: 48px;
  font-weight: 600;
  text-align: center;
  color: #eee;

  &::before {
    display: inline-block;
    vertical-align: middle;
    background-size: 51px 53px;
    content: "";
    width: 51px;
    height: 53px;
  }

  &#on {
    color: #000;
  }

  &#on::before {
    background-image: ${(props: IListItemProps) => `url(${props.itemUrl})`};
  }
`;

export const PanalImage = styled.section`
  position: relative;
  overflow: hidden;
  margin-bottom: 300px;
  height: 330px;
`;

export const ManagerIcon = styled.img`
  position: absolute;
  right: -180px;
  height: 380px;
  transform: translate(80px, -13px) rotate(23deg);
`;

export const VideoSection = styled.section`
  margin-bottom: 1000px;
`;

export const ImageIconWrapper = styled.div`
  position: relative;
  height: 1000px;
  margin-top: 150px;
  overflow-y: hidden;

  @media screen and (max-width: 767px) {
    height: 550px;
  }
  @media screen and (min-width: 768px) and (max-width: 1156px) {
    height: 660px;
  }
`;

export const ImageIcon = styled.img`
  position: absolute;
  opacity: 0;

  &#image_1 {
    width: 300px;
    height: 300px;
    bottom: 10%;
    left: 0;
  }
  &#image_2 {
    width: 500px;
    height: 500px;
    top: 20%;
    right: 28%;
  }
  &#image_3 {
    width: 300px;
    height: 300px;
    bottom: 5%;
    left: 15%;
  }
  &#image_4 {
    width: 400px;
    height: 500px;
    top: 0;
    left: 0;
  }
  &#image_5 {
    width: 400px;
    height: 500px;
    bottom: 0;
    right: 0;
  }
  &#image_6 {
    width: 400px;
    height: 500px;
    top: 0;
    right: 0;
  }

  @keyframes appear-bottom-to-top {
    from {
      opacity: 0;
      transform: translateY(100%);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  &.show {
    animation: appear-bottom-to-top 0.75s ease;
    animation-fill-mode: forwards;
  }
  @media screen and (max-width: 767px) {
    &#image_1 {
      width: 100px;
      height: 100px;
      bottom: 10%;
      left: 0;
    }
    &#image_2 {
      width: 230px;
      height: 230px;
      top: 35%;
      right: 29%;
    }
    &#image_3 {
      width: 100px;
      height: 100px;
      bottom: 5%;
      left: 15%;
    }
    &#image_4 {
      width: 150px;
      height: 150px;
      top: 10%;
      left: 1%;
    }
    &#image_5 {
      width: 180px;
      height: 180px;
      bottom: 0;
      right: 1%;
    }
    &#image_6 {
      width: 210px;
      height: 210px;
      top: 0;
      right: 1%;
    }
  }
  @media screen and (min-width: 768px) and (max-width: 1156px) {
    &#image_1 {
      width: 200px;
      height: 200px;
      bottom: 10%;
      left: 0;
    }
    &#image_2 {
      width: 400px;
      height: 400px;
      top: 20%;
      right: 26%;
    }
    &#image_3 {
      width: 200px;
      height: 200px;
      bottom: 5%;
      left: 15%;
    }
    &#image_4 {
      width: 300px;
      height: 300px;
      top: 0;
      left: 1%;
    }
    &#image_5 {
      width: 300px;
      height: 300px;
      bottom: 0;
      right: 1%;
    }
    &#image_6 {
      width: 250px;
      height: 300px;
      top: 0;
      right: 1%;
    }
  }
`;
