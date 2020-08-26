import GlobalStyle from './../styles/global';
import Head from 'next/head';

export default function Layout(props) {
  return (
    <>
      <Head>
        <title>{props.title || 'Hello'}</title>
      </Head>
      <GlobalStyle />
      {props.children}
    </>
  );
}
