import css from "./Logo.module.css";
import { FaMapMarkedAlt } from "react-icons/fa";

export default function Logo() {
  return (
    <a className={css.logo} href="./index.html" aria-label="Site logo">
      <FaMapMarkedAlt color={"rgb(48, 113, 211)"} />
      TravelPlaner
    </a>
  );
}
