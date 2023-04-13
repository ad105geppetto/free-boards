import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Wapper = styled.section`
  position: relative;
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

export const BoardWriteTitle = styled.h3`
  font-size: 32px;
  margin-top: 20px;
  margin-bottom: 10px;

  @media screen and (max-width: 1156px) {
    font-size: 24px;
  }
`;

export const SubmitWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 20px;
  margin-bottom: 10px;
`;

export const SubmitButton = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 36px;
  border: 1px solid #dddddd;
  border-radius: 2px;
  color: black;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease-in-out;

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
`;

export const Password = styled.input`
  width: 100%;
  height: 40px;
  padding: 10px 12px;
`;

export const Title = styled.input`
  width: 100%;
  height: 40px;
  padding: 10px 12px;
  margin-top: 12px;
`;

export const Contents = styled.input`
  width: 100%;
  height: 400px;
  padding: 10px 12px;
  margin-top: 12px;
`;
