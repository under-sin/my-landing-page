import { NavLink } from "react-router-dom";
import { HeaderContainer, Logo } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <Logo>
        <NavLink to="/">UNDER.</NavLink>
      </Logo>
      <nav>
        <NavLink to="/" title="Homepage">
          Home
        </NavLink>
        <NavLink to="/projects" title="Projetos">
          Projetos
        </NavLink>
        <NavLink to="/blog" title="blog">
          Blog
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
