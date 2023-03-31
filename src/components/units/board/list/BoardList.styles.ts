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
`;

export const BoardTitle = styled.h1`
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 32px;
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

export const Board = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  cursor: pointer;
`;

export const Number = styled.div`
  width: 10%;
  margin-top: -1px;
  padding: 10px 0;
  text-align: center;
  border: 1px solid black;
`;

export const Writer = styled.div`
  width: 15%;
  margin-top: -1px;
  margin-left: -1px;
  padding: 10px 0;
  text-align: center;
  border: 1px solid black;
`;

export const Title = styled.div`
  width: 75%;
  margin-top: -1px;
  margin-left: -1px;
  padding: 10px 10px 0;
  border: 1px solid black;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
  margin-top: 10px;
`;

export const WriteButton = styled.button`
  width: 120px;
  height: 36px;
  font-weight: 600;
  border: none;
  border-radius: 2px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  :hover {
    background-color: black;
    color: white;
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
  border: none;
  border-radius: 2px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  :hover {
    background-color: black;
    color: white;
  }
`;

// export const PagenationButton = styled.button`
//   height: 40px;
//   padding: 0 5px;
//   cursor: pointer;

//   :hover {
//     text-decoration-line: underline;
//     text-underline-position: under;
//   }
// `;

export const NextButton = styled.button`
  height: 40px;
  padding: 0 5px;
  font-weight: 600;
  border: none;
  border-radius: 2px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  :hover {
    background-color: black;
    color: white;
  }
`;
