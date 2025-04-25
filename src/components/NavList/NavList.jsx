import css from "./NavList.module.css";

export default function NavList() {
  return (
    <ul className={css.list}>
      <li>How it works</li>
      <li>FAQ</li>
      <li>About</li>
    </ul>
  );
}
