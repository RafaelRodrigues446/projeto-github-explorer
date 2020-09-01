import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;

  line-height: 55px;
  margin-top: 80px;
  width: 450px;
`;

export const Form = styled.form<FormProps>`

  max-width: 700px;
  margin-top: 35px;
  height: 70px;

  display: flex;

  input {

    flex: 1;
    padding: 0px 30px;
    border-radius: 8px 0px 0px 8px;
    color: #3a3a3a;
    border: 2px solid #ffffff;
    border-right: 0;

    ${(props) => props.hasError && css `
      border-color: #c53030;
    `}

    &::placeholder {
      font-size: 18px;
      color: #A8A8B3;
    }

  }

  button {
    width: 210px;
    background-color: #04D361;
    color: #ffffff;
    font-weight: bold;
    font-size: 18px;
    border-radius: 0px 8px 8px 0px;
    transition: 0.2s;

    &:hover {
      background: ${shade(0.2, '#04D361')};
    }

  }
`;

export const Error = styled.span`

  display: block;
  color: #c53030;
  margin-top: 8px;
`;

export const Repositories = styled.div`

  margin-top: 80px;

  a {

    max-width: 700px;
    min-height: 120px;
    height: auto;

    display: flex;
    align-items: center;

    padding: 10px;

    background: #fff;
    border-radius: 8px;
    transition: 0.2s;


    & + a {
      margin-top: 16px;
    }

    &:hover {
      transform: translateX(15px);
    }

    img {
      width: 90px;
      height: 90px;
      border-radius: 45px;
      background-color: red;
    }

    div {
      display: flex;
      flex: 1;
      flex-direction: column;
      padding: 0px 20px;

      strong {
        color: #3D3D4D;
        font-size: 24px;
        margin-bottom: 3px;
      }

      p {
        color: #A8A8B3;
        font-size: 18px;
      }
    }

    svg {
      color: #C9C9D4;

    }
  }

`;
