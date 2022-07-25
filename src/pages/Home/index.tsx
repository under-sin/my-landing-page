import gitHubIcon from "../../assets/github-icon.svg";
import linkedinIcon from "../../assets/linkedin-icon.svg";
import twitterIcon from "../../assets/twitter-icon.svg";

import {
  ButtonHome,
  HomeContainer,
  MyInfoContainer,
  SocialNetworks,
} from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <MyInfoContainer>
        <div className="wrapperContent">
          <span>Oi, eu me chamo Anderson</span>
          <p className="myDescription">
            Atualmente trabalhando como desenvolvedor front-end, implementando
            novas funcionalidades e corrigindo bugs usando javascript, html e
            css. No momento estou estudando Reactjs junto com typescript
          </p>
        </div>
        <SocialNetworks>
          <a
            className="twitterIcon"
            href="https://twitter.com/anderso01951891"
            target="_blank"
          >
            <img src={twitterIcon} title="twitter" />
          </a>
          <a
            className="githubIcon"
            href="https://github.com/under-sin"
            target="_blank"
          >
            <img src={gitHubIcon} title="github" />
          </a>
          <a
            className="linkedinIcon"
            href="https://www.linkedin.com/in/anderson-v-nascimento/"
            target="_blank"
          >
            <img src={linkedinIcon} title="linkedin" />
          </a>
        </SocialNetworks>
      </MyInfoContainer>

      <ButtonHome>Fale comigo</ButtonHome>
    </HomeContainer>
  );
}
