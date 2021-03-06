import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    font-size: 16px;
    color: #a8a8b3;
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: color 0.2s;

    &:hover {
      color: #666;
    }

    svg {
      margin-right: 4px;
    }
  }
`;

export const RepositoryInfo = styled.section`
  margin-top: 80px;

  header {
    display: flex;
    align-items: center;

    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }

    div {
      margin-left: 24px;
      display: flex;
      flex-direction: column;
      text-align: left;

      strong {
        color: #3d3d4d;
        font-size: 36px;
        margin-bottom: 10px;
      }
      p {
        color: #737380;
        font-size: 20px;
      }
    }
  }

  ul {
    margin-top: 40px;
    display: flex;
    list-style: none;

    li {
      & + li {
        margin-left: 80px;
      }

      strong {
        display: block;
        font-size: 36px;
        color: #3d3d4d;
        margin-bottom: 5px;
      }
      span {
        display: block;
        color: #6c6c80;
        font-size: 20px;
      }
    }
  }
`;

export const Issues = styled.div`
  margin-top: 80px;

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
