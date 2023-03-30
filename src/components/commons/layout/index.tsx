import Banner from "./banner";
import Footer from "./footer";
import Header from "./header";
import Navigation from "./navigation";
import styled from "@emotion/styled";

interface ILayoutProps {
  children: JSX.Element;
}

const Body = styled.div`
  min-height: calc(100vh - 260px);
`;

export default function Layout(props: ILayoutProps) {
  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <Banner />
      <Body>{props.children}</Body>
      <Footer />
    </>
  );
}
