import { createGlobalStyle } from 'styled-components';
import Colors from './colors';

export default createGlobalStyle`
  :root {
    font-size: 60%;
    font-family: 'Bungee Hairline';
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${Colors.primary};
  }

  #root {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  body,
  input,
  button,
  textarea {
    font-size:1.0rem;
    font-weight: 800;
    color: ${Colors.textBase};
  }

  .container {
    width: 90vw;
  }

  @media (min-width: 700px) {
    :root {
      font-size: 62.5%;
    }
  }
`;
