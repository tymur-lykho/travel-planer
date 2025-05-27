import css from "./SearchBox.module.css";
import { useDispatch } from "react-redux";
import { changeNameFilters } from "../../redux/filtersSlice";

export default function SearchBox({ type, inputValue }) {
  const dispatch = useDispatch();
  const onUpdate = (event) => {
    dispatch(changeNameFilters(event.target.value));
  };
  return (
    <div>
      <input
        className={css.input}
        type="text"
        value={inputValue}
        onChange={onUpdate}
        placeholder={`Input ${type} name`}
      />
    </div>
  );
}
