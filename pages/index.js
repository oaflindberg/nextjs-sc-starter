import styled from 'styled-components';
import GlobalStyle from './../styles/global';

export default function Home() {
  return (
    <Header>
      <GlobalStyle />
      <h1>HELLO WORLD</h1>
    </Header>
  );
}

const Header = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #111216;
  color: #eee;
`;
