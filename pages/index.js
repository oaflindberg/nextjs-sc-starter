import styled from 'styled-components';
import Layout from './../components/Layout';

export default function Home() {
  return (
    <Layout>
      <Header>
        <h1>HELLO WORLD</h1>
      </Header>
    </Layout>
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
