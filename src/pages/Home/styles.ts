import styled from "styled-components";

export const HomeContainer = styled.div`
  margin-top: 6vh;
  overflow-y: auto;
  overflow-x: hiddem;

  padding: 0 0.25rem;
`;

export const MyInfoContainer = styled.main`
  display: flex;
  justify-content: space-between;

  .wrapperContent {
    max-width: 58rem;
    display: flex;
    flex-direction: column;
    gap: 0.5625rem;

    span {
      font-size: 1.5rem;
      font-family: "JetBrains Mono", monospace;
      opacity: 0.65;
    }

    .myDescription {
      font-size: 2.4rem;
      font-family: "JetBrains Mono", monospace;
      line-height: 60px;
    }
  }
`;

export const SocialNetworks = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
  flex-direction: column;
  gap: 2.156rem;

  a {
    padding: 0.875rem;
    line-height: 0;
    text-align: center;
    border-radius: 100%;
    background: ${(props) => props.theme["gray-700"]};

    transition: all ease 0.15s;
  }

  .twitterIcon:hover {
    background: #2ea3e3;
  }

  .githubIcon:hover {
    background: #1c2128;
  }

  .linkedinIcon:hover {
    background: #0b66c3;
  }
`;

export const ButtonHome = styled.button`
  cursor: pointer;
  font-size: 1.18rem;
  padding: 1.18rem 3.5rem;
  margin: 3.75rem 0;

  color: ${(props) => props.theme["main-text-color"]};
  background: ${(props) => props.theme["gray-700"]};

  border: 0;
  border-radius: 3.5px;

  transition: all ease 0.15s;

  &:hover {
    background: ${(props) => props.theme["gray-900"]};
  }
`;
