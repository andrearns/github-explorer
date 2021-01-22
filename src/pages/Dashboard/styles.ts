import styled from 'styled-components';
import { shade } from 'polished';

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  margin-top: 80px;
  max-width: 450px;
  line-height: 56px;
`;

export const Form = styled.form`
  margin-top: 40px;
  display: flex;
  max-width: 700px;

  input {
    flex: 1;
    border-radius: 5px 0 0 5px;
    padding: 0 20px;
    border: 2px solid #fff;
    height: 70px;
    color: #3a3a3a;

    & ::placeholder {
      color: #a8a8b3;
    }
  }
  button {
    background: #04d361;
    border-radius: 0 5px 5px 0;
    width: 210px;
    color: #fff;
    font-weight: bold;
    border: none;
    height: 70px;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
  }
`;

export const Error = styled.span`
  display: block;
  background: #c53030;
  margin-top: 10px;
  max-width: 700px;
  height: 70px;
  border-radius: 5px;
  color: #fff;
  padding: 0 20px;
  display: flex;
  align-items: center;
`;

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;

    &:hover {
      transform: translateX(10px);
      transition: transform 0.2s;
    }

    & + a {
      margin-top: 16px;
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    div {
      margin-left: 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }
      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }
    svg {
      margin-left: auto;
      color: #c9c9d4;
    }
  }
`;
