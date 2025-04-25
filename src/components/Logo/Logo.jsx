import css from "./Logo.module.css";
import { MdOutlineTravelExplore } from "react-icons/md";

export default function Logo() {
  return (
    <a className={css.logo} href="./index.html" aria-label="Site logo">
      TravelPlaner
      <MdOutlineTravelExplore />
    </a>
  );
}
