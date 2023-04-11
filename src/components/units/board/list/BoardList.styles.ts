import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Wapper = styled.div`
  display: flex;
  flex-direction: column;
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

export const BoardTitle = styled.h1`
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 32px;

  @media screen and (max-width: 767px) {
    font-size: 24px;
  }
`;

export const BoardTable = styled.div`
  margin-top: 1px;
  margin-right: -2px;
`;

export const BoardHeader = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  font-weight: 700;
  text-align: center;
  border-top: 1px solid black;
`;

export const Board = styled.a`
  display: flex;
  flex-direction: row;
  width: 100%;
  text-decoration: none;
  color: black;
  cursor: pointer;
`;

export const Number = styled.div`
  width: 10%;
  margin-top: -1px;
  padding: 10px 0;
  text-align: center;
  border: 1px solid black;

  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 15%;
    height: 55px;
    font-size: 12px;
  }
  @media screen and (min-width: 768px) and (max-width: 1156px) {
    width: 15%;
  }
`;

export const Writer = styled.div`
  width: 15%;
  margin-top: -1px;
  margin-left: -1px;
  padding: 10px 0;
  text-align: center;
  border: 1px solid black;

  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 30%;
    height: 55px;
    font-size: 12px;
    padding: 10px 5px;
  }
  @media screen and (min-width: 768px) and (max-width: 1156px) {
    width: 20%;
  }
`;

export const Title = styled.div`
  width: 75%;
  margin-top: -1px;
  margin-left: -1px;
  padding: 10px 10px;
  border: 1px solid black;

  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 55%;
    height: 55px;
    font-size: 12px;
  }
  @media screen and (min-width: 768px) and (max-width: 1156px) {
    width: 65%;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
  margin-top: 10px;
`;

export const WriteButton = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 36px;
  font-weight: 600;
  border: 1px solid #dddddd;
  border-radius: 2px;
  transition: all 0.3s ease-in-out;
  background-color: white;
  color: black;
  text-decoration: none;

  :hover {
    background-color: black;
    color: white;
  }

  @media screen and (max-width: 767px) {
    font-size: 14px;
  }
`;

export const PagenationGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 32px;
  gap: 10px;
`;

export const PrevButton = styled.button`
  height: 40px;
  padding: 0 5px;
  font-weight: 600;
  border: 1px solid #dddddd;
  border-radius: 2px;
  background-color: white;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  :hover {
    background-color: black;
    color: white;
  }

  @media screen and (max-width: 767px) {
    font-size: 14px;
  }
`;

export const NextButton = styled.button`
  height: 40px;
  padding: 0 5px;
  font-weight: 600;
  border: 1px solid #dddddd;
  border-radius: 2px;
  background-color: white;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  :hover {
    background-color: black;
    color: white;
  }

  @media screen and (max-width: 767px) {
    font-size: 14px;
  }
`;
