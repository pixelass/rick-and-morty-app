import { createGlobalStyle, ThemeProvider } from 'styled-components';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    height: 100vh;
    display: grid;
    grid-template-rows: 4rem 1fr 4rem;
    background-color:#f0ffa3;
  }
`;

const theme = {
  colors: {
    primary: '#0bf41b',
  },
};
