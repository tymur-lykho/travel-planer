import css from "./SideBar.module.css";

export default function SideBar({ children }) {
  return <div className={css.sidebar}>{children}</div>;
}
