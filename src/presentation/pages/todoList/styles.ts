import styled from 'styled-components';
import Colors from '../../styles/colors';

export const Container = styled.div`
  font-family: Bungee Hairline !important;
  width: 100vw;
  display: flex;
  align-items: center;
  color: ${Colors.black};
  background: ${Colors.primary};
`;

export const ListContainer = styled.div`
  align-items: center;
  background: ${Colors.primaryDark};
  font-weight: bold;
  line-height: 1.5;
  margin: auto;
  text-align: center;
  margin: 60px auto 0 auto;
  padding: 0px 20px;
  border-radius: 5px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0px 5px 12px rgba(0, 0, 0, 0.1);

  #info {
    font-size: 1rem;
    padding: 7px;
    text-align: left;
    color: ${Colors.textInPrimary};
  }

  #acu {
    font-size: 1.5rem;
    text-align: left;
    padding: 7px;
  }

  @media (min-width: 1100px) {
    #info {
      font-size: 4rem;
    }

    #acu {
      font-size: 6rem;
    }
  }

  \::-webkit-input-placeholder {
    color: ${Colors.pink};
  }

  \:-moz-placeholder {
    color: ${Colors.pink};
  }

  \::-moz-placeholder {
    color: ${Colors.pink};
  }

  \:-ms-input-placeholder {
    color: ${Colors.pink};
  }
`;
