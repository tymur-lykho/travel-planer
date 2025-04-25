import Logo from "../Logo/Logo";
import Container from "../Container/Container";
import NavList from "../NavList/NavList";
import css from "./Header.module.css";

export default function Header() {
  return (
    <Container>
      <nav className={css.nav}>
        <Logo />
        {/* <NavList /> */}
      </nav>
    </Container>
  );
}
