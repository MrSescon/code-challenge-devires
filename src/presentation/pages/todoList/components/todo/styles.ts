import styled from 'styled-components';
import Colors from '../../../../styles/colors';

export const TodoWrapper = styled.p`
  transition: all 100ms linear 100ms;
  position: relative;
  text-align: left;
  margin: 30px auto;
  padding: 7px;
  padding-right: 28px;
  border: solid 1px transparent;
  color: ${Colors.black};

  &:hover {
    cursor: pointer;
    color: ${Colors.white};
    border: solid 1px ${Colors.pink};
  }

  @media (min-width: 1100px) {
    font-size: 2.5rem;
  }
`;

export const RemoveBtn = styled.span`
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  transition: all 100ms linear 100ms;
  :hover {
    cursor: pointer;
    color: ${Colors.white};
  }
`;
