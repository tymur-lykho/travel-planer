import { useState } from "react";
import css from "./MenuCard.module.css";

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
        <h5>{title}</h5>
      ) : (
        <input
          type="text"
          value={itemName === "" ? title : itemName}
          onChange={(e) => {
            onRename(e, type, title);
          }}
        />
      )}

      <button type="button" onClick={handleRename}>
        Rename
      </button>
      {children}
    </div>
  );
}
