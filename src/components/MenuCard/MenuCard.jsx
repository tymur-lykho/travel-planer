import { useState } from "react";
import css from "./MenuCard.module.css";
import { MdOutlineEdit, MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteMarker, renameMarker } from "../../redux/markersSlice";

export default function MenuCard({ title, children, type, id, icon }) {
  const [itemName, setItemName] = useState(title);
  const [isRename, setIsRename] = useState(false);

  const dispatch = useDispatch();

  const handleRename = () => {
    if (title !== itemName) {
      if (type === "location") {
        dispatch(renameMarker({ id, name: itemName }));
      }
    }
    setIsRename(!isRename);
  };

  const handleNameChenged = (event) => {
    const newName = event.target.value;
    setItemName(newName);
  };

  const handleDelete = () => {
    dispatch(deleteMarker(id));
  };
  return (
    <div className={css.card}>
      {icon}
      <div>
        {!isRename ? (
          <h5 className={css.title}>{title}</h5>
        ) : (
          <input
            type="text"
            value={itemName === "" ? title : itemName}
            onChange={handleNameChenged}
          />
        )}
        <button type="button" className={css.btn} onClick={handleRename}>
          <MdOutlineEdit size={20} />
        </button>
        {children}
      </div>

      <button
        type="button"
        className={`${css.btn} ${css.delete}`}
        onClick={handleDelete}
      >
        <MdDelete size={25} />
      </button>
    </div>
  );
}
