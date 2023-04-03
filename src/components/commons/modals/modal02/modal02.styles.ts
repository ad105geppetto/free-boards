import styled from "@emotion/styled";

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.3);
`;

export const Modal = styled.div`
  width: 400px;
  height: 250px;
  background-color: white;
  border-radius: 10px;

  @media screen and (max-width: 767px) {
    margin: 0 20px;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 50px;
  background-color: #800080;
`;

export const ModalTitle = styled.h2`
  font-size: 24px;
  color: white;
`;

export const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 150px;
  gap: 20px;
`;

export const ModalContents = styled.span`
  font-size: 18px;
  font-weight: 600;
`;

export const PasswordInput = styled.input`
  height: 32px;
  padding: 5px 10px;
  outline: none;
`;

export const SubmitWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 50px;
`;

export const Submit = styled.button`
  width: 100%;
  border: none;
  border-top: 1px solid #ddd;
  background-color: white;
  font-weight: 700;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  :hover {
    background-color: #800080;
    color: white;
    transition: all 0.3s ease-in-out;
  }
`;
