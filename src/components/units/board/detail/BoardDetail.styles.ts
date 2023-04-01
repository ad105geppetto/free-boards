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

export const ArticleTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin: 12px 0;
`;

export const BoardListButton = styled.button`
  height: 36px;
  padding: 0 12px;
  font-weight: 700;
  border: none;
  border-radius: 2px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  :hover {
    background-color: black;
    color: white;
  }
`;

export const ArticleContentsBox = styled.div`
  padding: 29px 29px;
  border: 1px solid #ddd;
  border-radius: 6px;
`;

export const ArticleHeader = styled.div`
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid #ddd;
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
`;

export const Contents = styled.div`
  min-height: 400px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
  margin-top: 10px;
  gap: 20px;
`;

export const DeleteButton = styled.button`
  width: 150px;
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

export const EditButton = styled.button`
  width: 150px;
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
