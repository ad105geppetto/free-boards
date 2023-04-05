import styled from "@emotion/styled";
import LoadingSVG from "./loading.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 420px;
  gap: 50px;

  @media screen and (max-width: 767px) {
    height: 540px;
  }
`;

const LoadingImage = styled(LoadingSVG)`
  animation: spin 8s linear infinite;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const Contents = styled.div`
  font-size: 32px;
  font-weight: 700;
`;

export default function Loading() {
  return (
    <Container>
      <LoadingImage />
      <Contents>잠시만 기다려주세요</Contents>
    </Container>
  );
}
