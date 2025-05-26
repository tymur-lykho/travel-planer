import { useState } from "react";
import css from "./MenuCard.module.css";
import { MdOutlineEdit } from "react-icons/md";

export default function MenuCard({
  title,
  children,
  onRename,
  itemName,
  type,
}) {
  const [isRename, setIsRename] = useState(false);

  const handleRename = () => {
    setIsRename((isRename) => !isRename);
  };
  return (
    <div className={css.card}>
      {!isRename ? (
        <h5 className={css.title}>{title}</h5>
      ) : (
        <input
          type="text"
          value={itemName === "" ? title : itemName}
          onChange={(e) => {
            onRename(e, type, title);
          }}
        />
      )}

      <button type="button" className={css.editBtn} onClick={handleRename}>
        <MdOutlineEdit />
      </button>
      {children}
    </div>
  );
}
