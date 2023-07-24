import styled from 'styled-components';
import * as colors from '../../config/colors';

export const AreaTeste = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;

  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    max-width: 300px;
  }

  input {
    height: 40px;
    font-size: 18px;
    border: 1px solid #aaa;
    padding: 0 10px;
    border-radius: 5px;
    margin-top: 5px;
    width: 300px;

    &:focus {
      border: 1px solid ${colors.color2};
    }
  }
`;
