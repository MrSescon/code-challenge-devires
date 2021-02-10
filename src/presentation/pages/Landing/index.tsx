import React from 'react';
import { Link } from 'react-router-dom';

import landingImg from '../../assets/images/landingpage.svg';
import toDoIcon from '../../assets/images/icons/list-alt-solid.svg';
import {
  PageLanding,
  LogoContainer,
  ButtonsContainer,
  LandingImage,
  PageLandingContent,
} from './styles';

const Landing: React.FC = () => {
  return (
    <PageLanding>
      <PageLandingContent className="container">
        <LogoContainer>
          <h1>LISTFY</h1>
          <h2>Yours To Do App.</h2>
        </LogoContainer>
        <LandingImage src={landingImg} alt="toDo app" />
        <ButtonsContainer>
          <Link to="/todos" className="todoLink">
            <img src={toDoIcon} alt="toDoIcon" />
            Get Started
          </Link>
        </ButtonsContainer>
      </PageLandingContent>
    </PageLanding>
  );
};

export default Landing;
