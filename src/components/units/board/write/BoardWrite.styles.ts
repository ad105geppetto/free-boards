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
  margin: 20px 3px 10px;

  @media screen and (max-width: 1156px) {
    font-size: 24px;
  }
`;

export const SubmitButton = styled.a`
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 36px;
  top: 0;
  right: 3px;
  margin-top: 20px;
  margin-bottom: 10px;
  border: 1px solid #dddddd;
  border-radius: 2px;
  color: black;
  font-weight: 600;
  text-decoration: none;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out,
    border-radius 0.3s ease-in-out;

  :focus-visible {
    outline: 2px solid red;
  }
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
  width: calc(100% - 6px);
  height: 40px;
  padding: 10px 12px;
  margin: 12px 3px 3px 3px;

  :focus-visible {
    outline: 2px solid red;
  }
`;

export const Password = styled.input`
  width: calc(100% - 6px);
  height: 40px;
  padding: 10px 12px;
  margin: 12px 3px 3px 3px;

  :focus-visible {
    outline: 2px solid red;
  }
`;

export const Title = styled.input`
  width: calc(100% - 6px);
  height: 40px;
  padding: 10px 12px;
  margin: 12px 3px 3px 3px;

  :focus-visible {
    outline: 2px solid red;
  }
`;

export const Contents = styled.input`
  width: calc(100% - 6px);
  height: 400px;
  padding: 10px 12px;
  margin: 12px 3px 3px 3px;

  :focus-visible {
    outline: 2px solid red;
  }
`;
