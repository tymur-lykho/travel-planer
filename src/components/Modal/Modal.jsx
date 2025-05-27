import { createPortal } from "react-dom";
import { MdClose } from "react-icons/md";

import css from "./Modal.module.css";

export default function Modal({ children }) {
  return createPortal(
    <div className={css.backdrop}>
      <div className={css.modal}>
        <button onClick={onClose} aria-label="Close modal">
          <MdClose />
        </button>
        {children}
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}
