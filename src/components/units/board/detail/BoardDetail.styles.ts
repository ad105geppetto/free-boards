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

export const ArticleTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 12px 3px;
`;

export const BoardListButton = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 36px;
  padding: 0 12px;
  font-weight: 700;
  border: 1px solid #dddddd;
  border-radius: 2px;
  color: black;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
  text-decoration: none;

  :focus-visible {
    outline: 2px solid red;
  }

  :hover {
    background-color: black;
    color: white;
  }
`;

export const ArticleContentsBox = styled.section`
  padding: 29px 29px;
  margin: 0 3px;
  border: 1px solid #ddd;
  border-radius: 6px;
`;

export const Title = styled.h3`
  font-size: 26px;
  font-weight: 400;
`;

export const Writer = styled.div`
  font-size: 13px;
  font-weight: 700;
`;

export const CreatedAt = styled.div`
  font-size: 12px;
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid #ddd;
`;

export const Contents = styled.div`
  min-height: 400px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
  padding: 10px 3px;
  gap: 20px;
`;

export const DeleteButton = styled.button`
  width: 150px;
  height: 36px;
  font-weight: 600;
  border: 1px solid #dddddd;
  border-radius: 2px;
  background-color: white;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
  cursor: pointer;

  :focus-visible {
    outline: 2px solid red;
  }

  :hover {
    background-color: black;
    color: white;
  }

  @media screen and (max-width: 767px) {
    width: 120px;
    font-size: 14px;
  }
`;

export const EditButton = styled.button`
  width: 150px;
  height: 36px;
  font-weight: 600;
  border: 1px solid #dddddd;
  border-radius: 2px;
  background-color: white;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
  cursor: pointer;

  :focus-visible {
    outline: 2px solid red;
  }

  :hover {
    background-color: black;
    color: white;
  }

  @media screen and (max-width: 767px) {
    width: 120px;
    font-size: 14px;
  }
`;
