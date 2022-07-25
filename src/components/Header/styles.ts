import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 0;

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 3rem;
    flex: 1;
    max-width: 215.625rem;

    a {
      padding: 3px;

      text-decoration: none;
      font-size: 1rem;
      font-weight: 500;
      color: ${(props) => props.theme["main-text-color"]};
      cursor: pointer;

      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;
    }

    a:hover {
      border-bottom-color: ${(props) => props.theme.pupler};
    }

    a.active {
      color: ${(props) => props.theme.pupler};
    }
  }
`;

export const Logo = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  flex: 3;

  a {
    text-decoration: none;
    color: ${(props) => props.theme["main-text-color"]};
  }
`;
