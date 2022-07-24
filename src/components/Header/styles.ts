import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 0;

  nav {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5rem;

    a {
      padding: 2px;

      text-decoration: none;
      font-size: 1rem;
      font-weight: 500;
      color: ${(props) => props.theme["main-text-color"]};
      cursor: pointer;

      border-top: 2px solid transparent;
      border-bottom: 2px solid transparent;
    }

    a:hover {
      border-bottom-color: ${(props) => props.theme.pupler};
    }
  }
`;

export const Logo = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;

  a {
    text-decoration: none;
    color: ${(props) => props.theme["main-text-color"]};
  }
`;
