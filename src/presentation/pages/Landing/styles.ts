import styled from 'styled-components';
import Colors from '../../styles/colors';

export const PageLanding = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${Colors.textInPrimary};
  background: ${Colors.primary};
`;

export const LandingImage = styled.img`
  width: 100%;

  @media (min-width: 1100px) {
    grid-area: landingImage;
    justify-self: end;
    /* width: 100%; */
  }
`;

export const LogoContainer = styled.div`
  text-align: center;
  margin: 0;

  h1 {
    color: ${Colors.titleInPrimary};
    font-size: 8rem;
    margin: 0;
  }

  h2 {
    font-weight: 800;
    font-size: 2.4rem;
    margin: 0;
  }

  @media (min-width: 1100px) {
    grid-area: logo;
    align-self: center;
    text-align: left;
    margin: 0;

    h1 {
      font-size: 10rem;
    }

    h2 {
      text-align: center;
      font-size: 3.6rem;
    }
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 3.2rem 0;

  a {
    width: 20rem;
    border-radius: 0.8rem;
    font-size: 1.5rem;
    font-weight: 800;

    display: flex;
    align-items: center;
    justify-content: center;

    text-decoration: none;
    color: ${Colors.buttonText};

    transition: background-color 0.2s;
  }

  a:first-child {
    margin-right: 1.6rem;
  }

  a img {
    width: 4rem;
  }

  a.todoLink {
    background: ${Colors.primaryLighter};
  }

  a.todoLink:hover {
    background: ${Colors.primaryLight};
  }

  a img {
    margin-right: 2.4rem;
  }

  @media (min-width: 1100px) {
    grid-area: buttons;
    justify-content: center;

    img {
      grid-area: landingImage;
      justify-self: center;
    }

    a {
      font-size: 2.4rem;
      width: 30rem;
      height: 10.4rem;
    }
  }
`;

export const PageLandingContent = styled.div`
  @media (min-width: 1100px) {
    max-width: 1100px;
    display: grid;
    grid-template-rows: 350px 1fr;
    grid-template-columns: 2fr 1fr 1fr;
    grid-template-areas: 'logo landingImage landingImage' 'buttons buttons buttons';
  }
`;
