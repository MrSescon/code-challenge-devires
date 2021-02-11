import styled from 'styled-components';
import Colors from '../../../../styles/colors';

export const TitleWrapper = styled.div`
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 30px;
  color: ${Colors.black};

  @media (min-width: 1100px) {
    font-size: 12rem;
  }
`;
