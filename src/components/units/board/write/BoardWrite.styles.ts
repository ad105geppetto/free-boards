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

export const WritingHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 10px;
`;

export const BoardWriteTitle = styled.h1`
  font-size: 32px;

  @media screen and (max-width: 1156px) {
    font-size: 24px;
  }
`;

export const SubmitButton = styled.button`
  width: 100px;
  height: 36px;
  border: none;
  border-radius: 2px;
  font-weight: 600;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  :hover {
    background-color: black;
    color: white;
    border-radius: 2px;
  }
`;

export const UserInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;
`;

export const Writer = styled.input`
  width: 100%;
  height: 40px;
  padding: 10px 12px;
  outline: none;
`;

export const Password = styled.input`
  width: 100%;
  height: 40px;
  padding: 10px 12px;
  outline: none;
`;

export const Title = styled.input`
  width: 100%;
  height: 40px;
  padding: 10px 12px;
  margin-top: 12px;
  outline: none;
`;

export const Contents = styled.input`
  width: 100%;
  height: 400px;
  padding: 10px 12px;
  margin-top: 12px;
  outline: none;
`;