import styled from "@emotion/styled";

export const ModalWrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
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

interface IBGColorProps {
  isError: string;
}

export const ModalTitle = styled.h1`
  text-align: center;
  height: 50px;
  line-height: 50px;
  font-size: 24px;
  background-color: ${(props: IBGColorProps) =>
    props.isError !== undefined ? "#ffa500" : "#800080"};
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
  box-shadow: inset 0 0 0 3px white;
  outline: none;
  cursor: pointer;

  :focus-visible {
    box-shadow: inset 0 0 0 3px red;
  }

  :hover {
    background-color: #ffa500;
    color: white;
    transition: all 0.3s ease-in-out;
    box-shadow: inset 0 0 0 3px #ffa500;
  }
`;

export const CheckSubmit = styled.button`
  width: 50%;
  border: none;
  border-top: 1px solid #ddd;
  background-color: white;
  font-weight: 700;
  transition: all 0.3s ease-in-out;
  box-shadow: inset 0 0 0 3px white;
  outline: none;
  cursor: pointer;

  :focus-visible {
    box-shadow: inset 0 0 0 3px red;
  }

  &:nth-of-type(1) {
    border-right: 1px solid #ddd;
  }
  :hover {
    background-color: #800080;
    color: white;
    transition: all 0.3s ease-in-out;
    box-shadow: inset 0 0 0 3px #800080;
  }
`;
