import Logo from "../Logo/Logo";
import Container from "../Container/Container";
import css from "./Header.module.css";
import { FaMap } from "react-icons/fa";
import { FaRoute } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

export default function Header() {
  return (
    <header className={css.header}>
      <Container>
        <nav className={css.nav}>
          <Logo />
          <ul className={css.list}>
            <li className={css.item}>
              <FaMap />
              Map View
            </li>
            <li className={css.item}>
              <FaRoute />
              Saved Routes
            </li>
            <li className={css.item}>
              <FaHeart />
              Favorites
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}
