import css from "./SideBar.module.css";

export default function SideBar({ header, children }) {
  return (
    <div className={css.sidebar}>
      <div className={css.sidebarHeader}>{header}</div>
      <div className={css.sidebarContent}>{children}</div>
    </div>
  );
}
