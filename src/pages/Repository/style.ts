import styled from 'styled-components';

export const Header = styled.header`

  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    color: #A8A8B3;
    font-weight: bold;

    svg {
      color: #A8A8B3;
    }
  }
`;

export const RepositoryInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 60px 0px;

  header {
    display: flex;

    img {
      width: 100%;
      max-width: 110px;
      height: 110px;
      border-radius: 50%;
    }

    div {
      margin: 0px 23px;
      display: flex;
      flex-direction: column;
      justify-content: center;

      strong {
        font-size: 34px;
        color: #3D3D4D;
      }

      p {
        font-size: 20px;
        color: #737380;
      }
    }
  }

  ul {
    display: flex;
    margin-top: 40px;

    li {
      display: flex;
      flex-direction: column;
      margin-right: 50px;

      strong {
        font-size: 32px;
        color: #3D3D4D;
      }

      p {
        font-size: 20px;
        color: #737380;
      }
    }
  }
`;

export const Issues = styled.a`

a {
  min-height: 120px;
  height: auto;

  display: flex;
  flex: 1;
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
      margin-top: 15px;
    }
  }

  svg {
    color: #C9C9D4;

  }
}
`;
