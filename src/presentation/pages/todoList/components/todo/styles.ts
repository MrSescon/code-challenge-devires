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
  color: ${Colors.white};

  &:hover {
    cursor: pointer;
    border: solid 1px;
  }
`;

export const RemoveBtn = styled.span`
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  transition: all 100ms linear 100ms;
  visibility: visible;
  :hover {
    cursor: pointer;
    visibility: visible;
    color: ${Colors.white};
  }
`;
